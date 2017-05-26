﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic;
using System.Text.RegularExpressions;
using System.Web;
using Nop.Core.Domain.Messages;

namespace Nop.Services.Messages
{
    public partial class Tokenizer : ITokenizer
    {
        #region Fields

        private readonly MessageTemplatesSettings _messageTemplatesSettings;

        #endregion

        #region Ctor

        /// <summary>
        /// Ctor
        /// </summary>
        /// <param name="messageTemplatesSettings">Message templates settings</param>
        public Tokenizer(MessageTemplatesSettings messageTemplatesSettings)
        {
            this._messageTemplatesSettings = messageTemplatesSettings;
        }

        #endregion

        #region Utilities

        /// <summary>
        /// Returns a new string in which all occurrences of a specified string in the current instance are replaced with another specified string
        /// </summary>
        /// <param name="original">Origianl string</param>
        /// <param name="pattern">The string to be replaced</param>
        /// <param name="replacement">The string to replace all occurrences of pattern string</param>
        /// <returns>A string that is equivalent to the current string except that all instances of pattern are replaced with replacement string</returns>
        protected string Replace(string original, string pattern, string replacement)
        {
            //for case sensitive comparison use base string.Replace() method
            var stringComparison = _messageTemplatesSettings.CaseInvariantReplacement ? StringComparison.OrdinalIgnoreCase : StringComparison.Ordinal;
            if (stringComparison == StringComparison.Ordinal)
                return original.Replace(pattern, replacement);

            //or do some routine work here
            var count = 0;
            var position0 = 0;
            var position1 = 0;

            var inc = (original.Length / pattern.Length) * (replacement.Length - pattern.Length);
            var chars = new char[original.Length + Math.Max(0, inc)];
            while ((position1 = original.IndexOf(pattern, position0, stringComparison)) != -1)
            {
                for (int i = position0; i < position1; ++i)
                    chars[count++] = original[i];
                for (int i = 0; i < replacement.Length; ++i)
                    chars[count++] = replacement[i];
                position0 = position1 + pattern.Length;
            }

            if (position0 == 0)
                return original;

            for (int i = position0; i < original.Length; ++i)
                chars[count++] = original[i];

            return new string(chars, 0, count);
        }

        /// <summary>
        /// Replace tokens
        /// </summary>
        /// <param name="template">The template with token keys inside</param>
        /// <param name="tokens">The sequence of tokens to use</param>
        /// <param name="htmlEncode">The value indicating whether tokens should be HTML encoded</param>
        /// <param name="stringWithQuotes">The value indicating whether string token values should be wrapped in quotes</param>
        /// <returns>Text with all token keys replaces by token value</returns>
        protected string ReplaceTokens(string template, IEnumerable<Token> tokens, bool htmlEncode = false, bool stringWithQuotes = false)
        {
            foreach (var token in tokens)
            {
                var tokenValue = token.Value ?? string.Empty;

                //wrap the value in quotes
                if (stringWithQuotes && tokenValue is string)
                    tokenValue = string.Format("\"{0}\"", tokenValue);
                else
                {
                    //do not encode URLs
                    if (htmlEncode && !token.NeverHtmlEncoded)
                        tokenValue = HttpUtility.HtmlEncode(tokenValue);
                }

                template = Replace(template, string.Format(@"%{0}%", token.Key), tokenValue.ToString());
            }

            return template;
        }

        /// <summary>
        /// Resolve conditional statements and replace them with appropriate values
        /// </summary>
        /// <param name="template">The template with token keys inside</param>
        /// <param name="tokens">The sequence of tokens to use</param>
        /// <returns>Text with all conditional statements replaces by appropriate values</returns>
        protected string ReplaceConditionalStatements(string template, IEnumerable<Token> tokens)
        {
            //define regex rules
            var regexFullConditionalSatement = new Regex(@"(?:(?'Group' %if)|(?'Condition-Group' endif%)|(?! (%if|endif%)).)*(?(Group)(?!))",
                RegexOptions.Compiled | RegexOptions.IgnorePatternWhitespace | RegexOptions.Singleline | RegexOptions.IgnoreCase);
            var regexCondition = new Regex(@"\s*\((?:(?'Group' \()|(?'-Group' \))|[^()])*(?(Group)(?!))\)\s*",
                RegexOptions.Compiled | RegexOptions.IgnorePatternWhitespace | RegexOptions.Singleline | RegexOptions.IgnoreCase);

            //find conditional statements in the original template
            var conditionalStatements = regexFullConditionalSatement.Matches(template).Cast<Match>()
                .SelectMany(match => match.Groups["Condition"].Captures.Cast<Capture>().Select(capture => new
                {
                    Index = capture.Index,
                    FullStatement = capture.Value,
                    Condition = regexCondition.Match(capture.Value).Value
                })).ToList();

            if (!conditionalStatements.Any())
                return template;

            //replace conditional statements
            foreach (var statement in conditionalStatements.OrderBy(statement => statement.Index))
            {
                var conditionIsMet = false;
                if (!string.IsNullOrEmpty(statement.Condition))
                {
                    try
                    {
                        //replace tokens (string values are wrap in quotes)
                        var conditionString = ReplaceTokens(statement.Condition, tokens, stringWithQuotes: true);
                        conditionIsMet = new[] { statement }.Where(conditionString).Any();
                    }
                    catch { }

                }
                template = template.Replace(conditionIsMet ? statement.Condition : statement.FullStatement, string.Empty);
            }
            template = template.Replace("%if", string.Empty).Replace("endif%", string.Empty);

            //return template with resolved conditional statements
            return template;
        }

        #endregion

        #region Methods

        /// <summary>
        /// Replace all of the token key occurences inside the specified template text with corresponded token values
        /// </summary>
        /// <param name="template">The template with token keys inside</param>
        /// <param name="tokens">The sequence of tokens to use</param>
        /// <param name="htmlEncode">The value indicating whether tokens should be HTML encoded</param>
        /// <returns>Text with all token keys replaces by token value</returns>
        public string Replace(string template, IEnumerable<Token> tokens, bool htmlEncode)
        {
            if (string.IsNullOrWhiteSpace(template))
                throw new ArgumentNullException("template");

            if (tokens == null)
                throw new ArgumentNullException("tokens");

            //replace conditional statements
            template = ReplaceConditionalStatements(template, tokens);

            //replace tokens
            template = ReplaceTokens(template, tokens, htmlEncode);

            return template;
        }

        #endregion
    }
}
