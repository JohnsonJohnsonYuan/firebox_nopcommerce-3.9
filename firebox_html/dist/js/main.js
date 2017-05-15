! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = Q.type(e);
        return "function" !== n && !Q.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function r(e, t, n) {
        if (Q.isFunction(t)) return Q.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Q.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (se.test(t)) return Q.filter(t, e, n);
            t = Q.filter(t, e)
        }
        return Q.grep(e, function(e) {
            return $.call(t, e) >= 0 !== n
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function i(e) {
        var t = he[e] = {};
        return Q.each(e.match(de) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        J.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Q.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Q.expando + s.uid++
    }

    function l(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(_e, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : be.test(n) ? Q.parseJSON(n) : n)
                } catch (o) {}
                me.set(e, t, n)
            } else n = void 0;
        return n
    }

    function u() {
        return !0
    }

    function c() {
        return !1
    }

    function p() {
        try {
            return J.activeElement
        } catch (e) {}
    }

    function f(e, t) {
        return Q.nodeName(e, "table") && Q.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Re.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function y(e, t) {
        for (var n = 0, r = e.length; r > n; n++) ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"))
    }

    function v(e, t) {
        var n, r, o, i, a, s, l, u;
        if (1 === t.nodeType) {
            if (ge.hasData(e) && (i = ge.access(e), a = ge.set(t, i), u = i.events)) {
                delete a.handle, a.events = {};
                for (o in u)
                    for (n = 0, r = u[o].length; r > n; n++) Q.event.add(t, o, u[o][n])
            }
            me.hasData(e) && (s = me.access(e), l = Q.extend({}, s), me.set(t, l))
        }
    }

    function g(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Q.nodeName(e, t) ? Q.merge([e], n) : n
    }

    function m(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ee.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function b(t, n) {
        var r, o = Q(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(o[0])) ? r.display : Q.css(o[0], "display");
        return o.detach(), i
    }

    function _(e) {
        var t = J,
            n = Be[e];
        return n || (n = b(e, t), "none" !== n && n || (He = (He || Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = He[0].contentDocument, t.write(), t.close(), n = b(e, t), He.detach()), Be[e] = n), n
    }

    function T(e, t, n) {
        var r, o, i, a, s = e.style;
        return n = n || We(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Q.contains(e.ownerDocument, e) || (a = Q.style(e, t)), qe.test(a) && Ve.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
    }

    function w(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, o = Ge.length; o--;)
            if (t = Ge[o] + n, t in e) return t;
        return r
    }

    function E(e, t, n) {
        var r = Ue.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, o) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += Q.css(e, n + we[i], !0, o)), r ? ("content" === n && (a -= Q.css(e, "padding" + we[i], !0, o)), "margin" !== n && (a -= Q.css(e, "border" + we[i] + "Width", !0, o))) : (a += Q.css(e, "padding" + we[i], !0, o), "padding" !== n && (a += Q.css(e, "border" + we[i] + "Width", !0, o)));
        return a
    }

    function x(e, t, n) {
        var r = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = We(e),
            a = "border-box" === Q.css(e, "boxSizing", !1, i);
        if (0 >= o || null == o) {
            if (o = T(e, t, i), (0 > o || null == o) && (o = e.style[t]), qe.test(o)) return o;
            r = a && (K.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + k(e, t, n || (a ? "border" : "content"), r, i) + "px"
    }

    function S(e, t) {
        for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (i[a] = ge.get(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (i[a] = ge.access(r, "olddisplay", _(r.nodeName)))) : (o = Ce(r), "none" === n && o || ge.set(r, "olddisplay", o ? n : Q.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
        return e
    }

    function O(e, t, n, r, o) {
        return new O.prototype.init(e, t, n, r, o)
    }

    function j() {
        return setTimeout(function() {
            Ke = void 0
        }), Ke = Q.now()
    }

    function P(e, t) {
        var n, r = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = we[r], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function M(e, t, n) {
        for (var r, o = (nt[t] || []).concat(nt["*"]), i = 0, a = o.length; a > i; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function A(e, t, n) {
        var r, o, i, a, s, l, u, c, p = this,
            f = {},
            d = e.style,
            h = e.nodeType && Ce(e),
            y = ge.get(e, "fxshow");
        n.queue || (s = Q._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, p.always(function() {
            p.always(function() {
                s.unqueued--, Q.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = Q.css(e, "display"), c = "none" === u ? ge.get(e, "olddisplay") || _(e.nodeName) : u, "inline" === c && "none" === Q.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", p.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (o = t[r], Ze.exec(o)) {
                if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !y || void 0 === y[r]) continue;
                    h = !0
                }
                f[r] = y && y[r] || Q.style(e, r)
            } else u = void 0;
        if (Q.isEmptyObject(f)) "inline" === ("none" === u ? _(e.nodeName) : u) && (d.display = u);
        else {
            y ? "hidden" in y && (h = y.hidden) : y = ge.access(e, "fxshow", {}), i && (y.hidden = !h), h ? Q(e).show() : p.done(function() {
                Q(e).hide()
            }), p.done(function() {
                var t;
                ge.remove(e, "fxshow");
                for (t in f) Q.style(e, t, f[t])
            });
            for (r in f) a = M(h ? y[r] : 0, r, p), r in y || (y[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function N(e, t) {
        var n, r, o, i, a;
        for (n in e)
            if (r = Q.camelCase(n), o = t[r], i = e[n], Q.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = Q.cssHooks[r], a && "expand" in a) {
                i = a.expand(i), delete e[r];
                for (n in i) n in e || (e[n] = i[n], t[n] = o)
            } else t[r] = o
    }

    function I(e, t, n) {
        var r, o, i = 0,
            a = tt.length,
            s = Q.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = Ke || j(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, i = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(i);
                return s.notifyWith(e, [u, i, n]), 1 > i && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: Q.extend({}, t),
                opts: Q.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ke || j(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = Q.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (N(c, u.opts.specialEasing); a > i; i++)
            if (r = tt[i].call(u, e, c, u.opts)) return r;
        return Q.map(c, M, u), Q.isFunction(u.opts.start) && u.opts.start.call(e, u), Q.fx.timer(Q.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function D(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
                i = t.toLowerCase().match(de) || [];
            if (Q.isFunction(n))
                for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function R(e, t, n, r) {
        function o(s) {
            var l;
            return i[s] = !0, Q.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || i[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var i = {},
            a = e === bt;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function L(e, t) {
        var n, r, o = Q.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Q.extend(!0, e, r), e
    }

    function F(e, t, n) {
        for (var r, o, i, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (o in s)
                if (s[o] && s[o].test(r)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) i = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    i = o;
                    break
                }
                a || (a = o)
            }
            i = i || a
        }
        return i ? (i !== l[0] && l.unshift(i), n[i]) : void 0
    }

    function H(e, t, n, r) {
        var o, i, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (i = c.shift(); i;)
            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = c.shift())
                if ("*" === i) i = l;
                else if ("*" !== l && l !== i) {
            if (a = u[l + " " + i] || u["* " + i], !a)
                for (o in u)
                    if (s = o.split(" "), s[1] === i && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[o] : u[o] !== !0 && (i = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: a ? p : "No conversion from " + l + " to " + i
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function B(e, t, n, r) {
        var o;
        if (Q.isArray(t)) Q.each(t, function(t, o) {
            n || Et.test(e) ? r(e, o) : B(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
        });
        else if (n || "object" !== Q.type(t)) r(e, t);
        else
            for (o in t) B(e + "[" + o + "]", t[o], n, r)
    }

    function V(e) {
        return Q.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var q = [],
        W = q.slice,
        z = q.concat,
        U = q.push,
        $ = q.indexOf,
        X = {},
        Y = X.toString,
        G = X.hasOwnProperty,
        K = {},
        J = e.document,
        Z = "2.1.4",
        Q = function(e, t) {
            return new Q.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function(e, t) {
            return t.toUpperCase()
        };
    Q.fn = Q.prototype = {
        jquery: Z,
        constructor: Q,
        selector: "",
        length: 0,
        toArray: function() {
            return W.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : W.call(this)
        },
        pushStack: function(e) {
            var t = Q.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Q.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Q.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(W.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: q.sort,
        splice: q.splice
    }, Q.extend = Q.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || Q.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], r = e[t], a !== r && (u && r && (Q.isPlainObject(r) || (o = Q.isArray(r))) ? (o ? (o = !1, i = n && Q.isArray(n) ? n : []) : i = n && Q.isPlainObject(n) ? n : {}, a[t] = Q.extend(u, i, r)) : void 0 !== r && (a[t] = r));
        return a
    }, Q.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Q.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Q.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" === Q.type(e) && !e.nodeType && !Q.isWindow(e) && !(e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? X[Y.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Q.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var o, i = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > i && (o = t.apply(e[i], r), o !== !1); i++);
                else
                    for (i in e)
                        if (o = t.apply(e[i], r), o === !1) break
            } else if (s)
                for (; a > i && (o = t.call(e[i], i, e[i]), o !== !1); i++);
            else
                for (i in e)
                    if (o = t.call(e[i], i, e[i]), o === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Q.merge(r, "string" == typeof e ? [e] : e) : U.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : $.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r, o = [], i = 0, a = e.length, s = !n; a > i; i++) r = !t(e[i], i), r !== s && o.push(e[i]);
            return o
        },
        map: function(e, t, r) {
            var o, i = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > i; i++) o = t(e[i], i, r), null != o && l.push(o);
            else
                for (i in e) o = t(e[i], i, r), null != o && l.push(o);
            return z.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), Q.isFunction(e) ? (r = W.call(arguments, 2), o = function() {
                return e.apply(t || this, r.concat(W.call(arguments)))
            }, o.guid = e.guid = e.guid || Q.guid++, o) : void 0
        },
        now: Date.now,
        support: K
    }), Q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        X["[object " + t + "]"] = t.toLowerCase()
    });
    var oe = function(e) {
        function t(e, t, n, r) {
            var o, i, a, s, l, u, p, d, h, y;
            if ((t ? t.ownerDocument || t : B) !== A && M(t), t = t || A, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && I) {
                if (11 !== s && (o = me.exec(e)))
                    if (a = o[1]) {
                        if (9 === s) {
                            if (i = t.getElementById(a), !i || !i.parentNode) return n;
                            if (i.id === a) return n.push(i), n
                        } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && F(t, i) && i.id === a) return n.push(i), n
                    } else {
                        if (o[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = o[3]) && T.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                    }
                if (T.qsa && (!D || !D.test(e))) {
                    if (d = p = H, h = t, y = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = k(e), (p = t.getAttribute("id")) ? d = p.replace(_e, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + f(u[l]);
                        h = be.test(e) && c(t.parentNode) || t, y = u.join(",")
                    }
                    if (y) try {
                        return Z.apply(n, h.querySelectorAll(y)), n
                    } catch (v) {} finally {
                        p || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(le, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[H] = !0, e
        }

        function o(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function i(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) w.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function p() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                o = n && "parentNode" === r,
                i = q++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || o) return e(t, n, i)
            } : function(t, n, a) {
                var s, l, u = [V, i];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || o) {
                            if (l = t[H] || (t[H] = {}), (s = l[r]) && s[0] === V && s[1] === i) return u[2] = s[2];
                            if (l[r] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function y(e, n, r) {
            for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
            return r
        }

        function v(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(i = e[s]) && (!n || n(i, r, o)) && (a.push(i), u && t.push(s));
            return a
        }

        function g(e, t, n, o, i, a) {
            return o && !o[H] && (o = g(o)), i && !i[H] && (i = g(i, a)), r(function(r, a, s, l) {
                var u, c, p, f = [],
                    d = [],
                    h = a.length,
                    g = r || y(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !r && t ? g : v(g, f, e, s, l),
                    b = n ? i || (r ? e : h || o) ? [] : a : m;
                if (n && n(m, b, s, l), o)
                    for (u = v(b, d), o(u, [], s, l), c = u.length; c--;)(p = u[c]) && (b[d[c]] = !(m[d[c]] = p));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (u = [], c = b.length; c--;)(p = b[c]) && u.push(m[c] = p);
                            i(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(p = b[c]) && (u = i ? ee(r, p) : f[c]) > -1 && (r[u] = !(a[u] = p))
                    }
                } else b = v(b === a ? b.splice(h, b.length) : b), i ? i(null, a, b, l) : Z.apply(a, b)
            })
        }

        function m(e) {
            for (var t, n, r, o = e.length, i = w.relative[e[0].type], a = i || w.relative[" "], s = i ? 1 : 0, l = d(function(e) {
                    return e === t
                }, a, !0), u = d(function(e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var o = !i && (r || n !== O) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                    return t = null, o
                }]; o > s; s++)
                if (n = w.relative[e[s].type]) c = [d(h(c), n)];
                else {
                    if (n = w.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                        for (r = ++s; o > r && !w.relative[e[r].type]; r++);
                        return g(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, r > s && m(e.slice(s, r)), o > r && m(e = e.slice(r)), o > r && f(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var o = n.length > 0,
                i = e.length > 0,
                a = function(r, a, s, l, u) {
                    var c, p, f, d = 0,
                        h = "0",
                        y = r && [],
                        g = [],
                        m = O,
                        b = r || i && w.find.TAG("*", u),
                        _ = V += null == m ? 1 : Math.random() || .1,
                        T = b.length;
                    for (u && (O = a !== A && a); h !== T && null != (c = b[h]); h++) {
                        if (i && c) {
                            for (p = 0; f = e[p++];)
                                if (f(c, a, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (V = _)
                        }
                        o && ((c = !f && c) && d--, r && y.push(c))
                    }
                    if (d += h, o && h !== d) {
                        for (p = 0; f = n[p++];) f(y, g, a, s);
                        if (r) {
                            if (d > 0)
                                for (; h--;) y[h] || g[h] || (g[h] = K.call(l));
                            g = v(g)
                        }
                        Z.apply(l, g), u && !r && g.length > 0 && d + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (V = _, O = m), y
                };
            return o ? r(a) : a
        }
        var _, T, w, C, E, k, x, S, O, j, P, M, A, N, I, D, R, L, F, H = "sizzle" + 1 * new Date,
            B = e.document,
            V = 0,
            q = 0,
            W = n(),
            z = n(),
            U = n(),
            $ = function(e, t) {
                return e === t && (P = !0), 0
            },
            X = 1 << 31,
            Y = {}.hasOwnProperty,
            G = [],
            K = G.pop,
            J = G.push,
            Z = G.push,
            Q = G.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = re.replace("w", "w#"),
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(ae),
            de = new RegExp("^" + oe + "$"),
            he = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ye = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            _e = /'|\\/g,
            Te = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Ce = function() {
                M()
            };
        try {
            Z.apply(G = Q.call(B.childNodes), B.childNodes), G[B.childNodes.length].nodeType
        } catch (Ee) {
            Z = {
                apply: G.length ? function(e, t) {
                    J.apply(e, Q.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        T = t.support = {}, E = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, M = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : B;
            return r !== A && 9 === r.nodeType && r.documentElement ? (A = r, N = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), I = !E(r), T.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), T.getElementsByTagName = o(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), T.getElementsByClassName = ge.test(r.getElementsByClassName), T.getById = o(function(e) {
                return N.appendChild(e).id = H, !r.getElementsByName || !r.getElementsByName(H).length
            }), T.getById ? (w.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, w.filter.ID = function(e) {
                var t = e.replace(Te, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function(e) {
                var t = e.replace(Te, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), w.find.TAG = T.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }, w.find.CLASS = T.getElementsByClassName && function(e, t) {
                return I ? t.getElementsByClassName(e) : void 0
            }, R = [], D = [], (T.qsa = ge.test(r.querySelectorAll)) && (o(function(e) {
                N.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || D.push("~="), e.querySelectorAll(":checked").length || D.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || D.push(".#.+[+~]")
            }), o(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
            })), (T.matchesSelector = ge.test(L = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && o(function(e) {
                T.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), R.push("!=", ae)
            }), D = D.length && new RegExp(D.join("|")), R = R.length && new RegExp(R.join("|")), t = ge.test(N.compareDocumentPosition), F = t || ge.test(N.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, $ = t ? function(e, t) {
                if (e === t) return P = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === B && F(B, e) ? -1 : t === r || t.ownerDocument === B && F(B, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return P = !0, 0;
                var n, o = 0,
                    i = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!i || !s) return e === r ? -1 : t === r ? 1 : i ? -1 : s ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (i === s) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[o] === u[o];) o++;
                return o ? a(l[o], u[o]) : l[o] === B ? -1 : u[o] === B ? 1 : 0
            }, r) : A
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== A && M(e), n = n.replace(pe, "='$1']"), !(!T.matchesSelector || !I || R && R.test(n) || D && D.test(n))) try {
                var r = L.call(e, n);
                if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (o) {}
            return t(n, A, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== A && M(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== A && M(e);
            var n = w.attrHandle[t.toLowerCase()],
                r = n && Y.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== r ? r : T.attributes || !I ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                o = 0;
            if (P = !T.detectDuplicates, j = !T.sortStable && e.slice(0), e.sort($), P) {
                for (; t = e[o++];) t === e[o] && (r = n.push(o));
                for (; r--;) e.splice(n[r], 1)
            }
            return j = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Te, we), e[3] = (e[3] || e[4] || e[5] || "").replace(Te, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Te, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, p, f, d, h, y = i !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            m = !l && !s;
                        if (v) {
                            if (i) {
                                for (; y;) {
                                    for (p = t; p = p[y];)
                                        if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    h = y = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && m) {
                                for (c = v[H] || (v[H] = {}), u = c[e] || [], d = u[0] === V && u[1], f = u[0] === V && u[2], p = d && v.childNodes[d]; p = ++d && p && p[y] || (f = d = 0) || h.pop();)
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [V, d, f];
                                        break
                                    }
                            } else if (m && (u = (t[H] || (t[H] = {}))[e]) && u[0] === V) f = u[1];
                            else
                                for (;
                                    (p = ++d && p && p[y] || (f = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++f || (m && ((p[H] || (p[H] = {}))[e] = [V, f]), p !== t)););
                            return f -= o, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, i = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[H] ? i(n) : i.length > 1 ? (o = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, o = i(e, n), a = o.length; a--;) r = ee(e, o[a]), e[r] = !(t[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, o)
                    }) : i
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        o = x(e.replace(le, "$1"));
                    return o[H] ? r(function(e, t, n, r) {
                        for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, r, i) {
                        return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(Te, we),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Te, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === N
                },
                focus: function(e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return ve.test(e.nodeName)
                },
                input: function(e) {
                    return ye.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[_] = s(_);
        for (_ in {
                submit: !0,
                reset: !0
            }) w.pseudos[_] = l(_);
        return p.prototype = w.filters = w.pseudos, w.setFilters = new p, k = t.tokenize = function(e, n) {
            var r, o, i, a, s, l, u, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = w.preFilter; s;) {
                (!r || (o = ue.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(i = [])), r = !1, (o = ce.exec(s)) && (r = o.shift(), i.push({
                    value: r,
                    type: o[0].replace(le, " ")
                }), s = s.slice(r.length));
                for (a in w.filter) !(o = he[a].exec(s)) || u[a] && !(o = u[a](o)) || (r = o.shift(), i.push({
                    value: r,
                    type: a,
                    matches: o
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
        }, x = t.compile = function(e, t) {
            var n, r = [],
                o = [],
                i = U[e + " "];
            if (!i) {
                for (t || (t = k(e)), n = t.length; n--;) i = m(t[n]), i[H] ? r.push(i) : o.push(i);
                i = U(e, b(o, r)), i.selector = e
            }
            return i
        }, S = t.select = function(e, t, n, r) {
            var o, i, a, s, l, u = "function" == typeof e && e,
                p = !r && k(e = u.selector || e);
            if (n = n || [], 1 === p.length) {
                if (i = p[0] = p[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && T.getById && 9 === t.nodeType && I && w.relative[i[1].type]) {
                    if (t = (w.find.ID(a.matches[0].replace(Te, we), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (o = he.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !w.relative[s = a.type]);)
                    if ((l = w.find[s]) && (r = l(a.matches[0].replace(Te, we), be.test(i[0].type) && c(t.parentNode) || t))) {
                        if (i.splice(o, 1), e = r.length && f(i), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return (u || x(e, p))(r, t, !I, n, be.test(e) && c(t.parentNode) || t), n
        }, T.sortStable = H.split("").sort($).join("") === H, T.detectDuplicates = !!P, M(), T.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(A.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), T.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || i(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Q.find = oe, Q.expr = oe.selectors, Q.expr[":"] = Q.expr.pseudos, Q.unique = oe.uniqueSort, Q.text = oe.getText, Q.isXMLDoc = oe.isXML, Q.contains = oe.contains;
    var ie = Q.expr.match.needsContext,
        ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        se = /^.[^:#\[\.,]*$/;
    Q.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Q.find.matchesSelector(r, e) ? [r] : [] : Q.find.matches(e, Q.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Q.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(Q(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (Q.contains(o[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Q.find(e, o[t], r);
            return r = this.pushStack(n > 1 ? Q.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ie.test(e) ? Q(e) : e || [], !1).length
        }
    });
    var le, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = Q.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ue.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Q ? t[0] : t, Q.merge(this, Q.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), ae.test(n[1]) && Q.isPlainObject(t))
                        for (n in t) Q.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Q.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(Q) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Q.makeArray(e, this))
        };
    ce.prototype = Q.fn, le = Q(J);
    var pe = /^(?:parents|prev(?:Until|All))/,
        fe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Q.extend({
        dir: function(e, t, n) {
            for (var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && Q(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Q.fn.extend({
        has: function(e) {
            var t = Q(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Q.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, o = this.length, i = [], a = ie.test(e) || "string" != typeof e ? Q(e, t || this.context) : 0; o > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Q.find.matchesSelector(n, e))) {
                        i.push(n);
                        break
                    }
            return this.pushStack(i.length > 1 ? Q.unique(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? $.call(Q(e), this[0]) : $.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Q.unique(Q.merge(this.get(), Q(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Q.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Q.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Q.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return Q.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Q.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Q.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Q.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Q.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Q.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Q.merge([], e.childNodes)
        }
    }, function(e, t) {
        Q.fn[e] = function(n, r) {
            var o = Q.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = Q.filter(r, o)), this.length > 1 && (fe[e] || Q.unique(o), pe.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var de = /\S+/g,
        he = {};
    Q.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || i(e) : Q.extend({}, e);
        var t, n, r, o, a, s, l = [],
            u = !e.once && [],
            c = function(i) {
                for (t = e.memory && i, n = !0, s = o || 0, o = 0, a = l.length, r = !0; l && a > s; s++)
                    if (l[s].apply(i[0], i[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function i(t) {
                            Q.each(t, function(t, n) {
                                var r = Q.type(n);
                                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        }(arguments), r ? a = l.length : t && (o = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return l && Q.each(arguments, function(e, t) {
                        for (var n;
                            (n = Q.inArray(t, l, n)) > -1;) l.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                    }), this
                },
                has: function(e) {
                    return e ? Q.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], a = 0, this
                },
                disable: function() {
                    return l = u = t = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, t || p.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !l || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return p
    }, Q.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Q.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Q.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Q.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Q.Deferred(function(n) {
                            Q.each(t, function(t, i) {
                                var a = Q.isFunction(e[t]) && e[t];
                                o[i[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && Q.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Q.extend(e, r) : r
                    }
                },
                o = {};
            return r.pipe = r.then, Q.each(t, function(e, i) {
                var a = i[2],
                    s = i[3];
                r[i[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? r : this, arguments), this
                }, o[i[0] + "With"] = a.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, r, o = 0,
                i = W.call(arguments),
                a = i.length,
                s = 1 !== a || e && Q.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : Q.Deferred(),
                u = function(e, n, r) {
                    return function(o) {
                        n[e] = this, r[e] = arguments.length > 1 ? W.call(arguments) : o, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) i[o] && Q.isFunction(i[o].promise) ? i[o].promise().done(u(o, r, i)).fail(l.reject).progress(u(o, n, t)) : --s;
            return s || l.resolveWith(r, i), l.promise()
        }
    });
    var ye;
    Q.fn.ready = function(e) {
        return Q.ready.promise().done(e), this
    }, Q.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Q.readyWait++ : Q.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Q.readyWait : Q.isReady) || (Q.isReady = !0, e !== !0 && --Q.readyWait > 0 || (ye.resolveWith(J, [Q]), Q.fn.triggerHandler && (Q(J).triggerHandler("ready"), Q(J).off("ready"))))
        }
    }), Q.ready.promise = function(t) {
        return ye || (ye = Q.Deferred(), "complete" === J.readyState ? setTimeout(Q.ready) : (J.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), ye.promise(t)
    }, Q.ready.promise();
    var ve = Q.access = function(e, t, n, r, o, i, a) {
        var s = 0,
            l = e.length,
            u = null == n;
        if ("object" === Q.type(n)) {
            o = !0;
            for (s in n) Q.access(e, t, s, n[s], !0, i, a)
        } else if (void 0 !== r && (o = !0, Q.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                return u.call(Q(e), n)
            })), t))
            for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : i
    };
    Q.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = Q.acceptData, s.prototype = {
        key: function(e) {
            if (!s.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Q.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, o = this.key(e),
                i = this.cache[o];
            if ("string" == typeof t) i[t] = n;
            else if (Q.isEmptyObject(i)) Q.extend(this.cache[o], t);
            else
                for (r in t) i[r] = t[r];
            return i
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Q.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, o, i = this.key(e),
                a = this.cache[i];
            if (void 0 === t) this.cache[i] = {};
            else {
                Q.isArray(t) ? r = t.concat(t.map(Q.camelCase)) : (o = Q.camelCase(t), t in a ? r = [t, o] : (r = o, r = r in a ? [r] : r.match(de) || [])), n = r.length;
                for (; n--;) delete a[r[n]]
            }
        },
        hasData: function(e) {
            return !Q.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ge = new s,
        me = new s,
        be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /([A-Z])/g;
    Q.extend({
        hasData: function(e) {
            return me.hasData(e) || ge.hasData(e)
        },
        data: function(e, t, n) {
            return me.access(e, t, n)
        },
        removeData: function(e, t) {
            me.remove(e, t)
        },
        _data: function(e, t, n) {
            return ge.access(e, t, n)
        },
        _removeData: function(e, t) {
            ge.remove(e, t)
        }
    }), Q.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0],
                a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = me.get(i), 1 === i.nodeType && !ge.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Q.camelCase(r.slice(5)), l(i, r, o[r])));
                    ge.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                me.set(this, e)
            }) : ve(this, function(t) {
                var n, r = Q.camelCase(e);
                if (i && void 0 === t) {
                    if (n = me.get(i, e), void 0 !== n) return n;
                    if (n = me.get(i, r), void 0 !== n) return n;
                    if (n = l(i, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = me.get(this, r);
                    me.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && me.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                me.remove(this, e)
            })
        }
    }), Q.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ge.get(e, t), n && (!r || Q.isArray(n) ? r = ge.access(e, t, Q.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Q.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = Q._queueHooks(e, t),
                a = function() {
                    Q.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ge.get(e, n) || ge.access(e, n, {
                empty: Q.Callbacks("once memory").add(function() {
                    ge.remove(e, [t + "queue", n])
                })
            })
        }
    }), Q.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Q.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Q.queue(this, e, t);
                Q._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Q.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Q.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                o = Q.Deferred(),
                i = this,
                a = this.length,
                s = function() {
                    --r || o.resolveWith(i, [i])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ge.get(i[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        we = ["Top", "Right", "Bottom", "Left"],
        Ce = function(e, t) {
            return e = t || e, "none" === Q.css(e, "display") || !Q.contains(e.ownerDocument, e)
        },
        Ee = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = J.createDocumentFragment(),
            t = e.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), K.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = "undefined";
    K.focusinBubbles = "onfocusin" in e;
    var xe = /^key/,
        Se = /^(?:mouse|pointer|contextmenu)|click/,
        Oe = /^(?:focusinfocus|focusoutblur)$/,
        je = /^([^.]*)(?:\.(.+)|)$/;
    Q.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, s, l, u, c, p, f, d, h, y, v = ge.get(e);
            if (v)
                for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = Q.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                        return typeof Q !== ke && Q.event.triggered !== t.type ? Q.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(de) || [""], u = t.length; u--;) s = je.exec(t[u]) || [], d = y = s[1], h = (s[2] || "").split(".").sort(), d && (p = Q.event.special[d] || {}, d = (o ? p.delegateType : p.bindType) || d, p = Q.event.special[d] || {}, c = Q.extend({
                    type: d,
                    origType: y,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && Q.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, i), (f = l[d]) || (f = l[d] = [], f.delegateCount = 0, p.setup && p.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), Q.event.global[d] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, l, u, c, p, f, d, h, y, v = ge.hasData(e) && ge.get(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(de) || [""], u = t.length; u--;)
                    if (s = je.exec(t[u]) || [], d = y = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (p = Q.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = l[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = f.length; i--;) c = f[i], !o && y !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(i, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
                        a && !f.length && (p.teardown && p.teardown.call(e, h, v.handle) !== !1 || Q.removeEvent(e, d, v.handle), delete l[d])
                    } else
                        for (d in l) Q.event.remove(e, d + t[u], n, r, !0);
                Q.isEmptyObject(l) && (delete v.handle, ge.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, o) {
            var i, a, s, l, u, c, p, f = [r || J],
                d = G.call(t, "type") ? t.type : t,
                h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !Oe.test(d + Q.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, t = t[Q.expando] ? t : new Q.Event(d, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Q.makeArray(n, [t]), p = Q.event.special[d] || {}, o || !p.trigger || p.trigger.apply(r, n) !== !1)) {
                if (!o && !p.noBubble && !Q.isWindow(r)) {
                    for (l = p.delegateType || d, Oe.test(l + d) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                    s === (r.ownerDocument || J) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (i = 0;
                    (a = f[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? l : p.bindType || d, c = (ge.get(a, "events") || {})[t.type] && ge.get(a, "handle"), c && c.apply(a, n), c = u && a[u], c && c.apply && Q.acceptData(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = d, o || t.isDefaultPrevented() || p._default && p._default.apply(f.pop(), n) !== !1 || !Q.acceptData(r) || u && Q.isFunction(r[d]) && !Q.isWindow(r) && (s = r[u], s && (r[u] = null), Q.event.triggered = d, r[d](), Q.event.triggered = void 0, s && (r[u] = s)), t.result
            }
        },
        dispatch: function(e) {
            e = Q.event.fix(e);
            var t, n, r, o, i, a = [],
                s = W.call(arguments),
                l = (ge.get(this, "events") || {})[e.type] || [],
                u = Q.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = Q.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((Q.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; s > n; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? Q(o, this).index(l) >= 0 : Q.find(o, this, null, [l]).length), r[o] && r.push(i);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, o, i = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Q.expando]) return e;
            var t, n, r, o = e.type,
                i = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Se.test(o) ? this.mouseHooks : xe.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Q.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, i) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Q.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Q.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var o = Q.extend(new Q.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Q.event.trigger(o, null, t) : Q.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, Q.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Q.Event = function(e, t) {
        return this instanceof Q.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? u : c) : this.type = e, t && Q.extend(this, t), this.timeStamp = e && e.timeStamp || Q.now(), void(this[Q.expando] = !0)) : new Q.Event(e, t)
    }, Q.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = u, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Q.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Q.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                return (!o || o !== r && !Q.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), K.focusinBubbles || Q.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Q.event.simulate(t, e.target, Q.event.fix(e), !0)
        };
        Q.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    o = ge.access(r, t);
                o || r.addEventListener(e, n, !0), ge.access(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    o = ge.access(r, t) - 1;
                o ? ge.access(r, t, o) : (r.removeEventListener(e, n, !0), ge.remove(r, t))
            }
        }
    }), Q.fn.extend({
        on: function(e, t, n, r, o) {
            var i, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], o);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === o && (i = r, r = function(e) {
                return Q().off(e), i.apply(this, arguments)
            }, r.guid = i.guid || (i.guid = Q.guid++)), this.each(function() {
                Q.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Q(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                Q.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Q.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Q.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Me = /<([\w:]+)/,
        Ae = /<|&#?\w+;/,
        Ne = /<(?:script|style|link)/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^$|\/(?:java|ecma)script/i,
        Re = /^true\/(.*)/,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td, Q.extend({
        clone: function(e, t, n) {
            var r, o, i, a, s = e.cloneNode(!0),
                l = Q.contains(e.ownerDocument, e);
            if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Q.isXMLDoc(e)))
                for (a = g(s), i = g(e), r = 0, o = i.length; o > r; r++) m(i[r], a[r]);
            if (t)
                if (n)
                    for (i = i || g(e), a = a || g(s), r = 0, o = i.length; o > r; r++) v(i[r], a[r]);
                else v(e, s);
            return a = g(s, "script"), a.length > 0 && y(a, !l && g(e, "script")), s
        },
        buildFragment: function(e, t, n, r) {
            for (var o, i, a, s, l, u, c = t.createDocumentFragment(), p = [], f = 0, d = e.length; d > f; f++)
                if (o = e[f], o || 0 === o)
                    if ("object" === Q.type(o)) Q.merge(p, o.nodeType ? [o] : o);
                    else if (Ae.test(o)) {
                for (i = i || c.appendChild(t.createElement("div")), a = (Me.exec(o) || ["", ""])[1].toLowerCase(), s = Fe[a] || Fe._default, i.innerHTML = s[1] + o.replace(Pe, "<$1></$2>") + s[2], u = s[0]; u--;) i = i.lastChild;
                Q.merge(p, i.childNodes), i = c.firstChild, i.textContent = ""
            } else p.push(t.createTextNode(o));
            for (c.textContent = "", f = 0; o = p[f++];)
                if ((!r || -1 === Q.inArray(o, r)) && (l = Q.contains(o.ownerDocument, o), i = g(c.appendChild(o), "script"), l && y(i), n))
                    for (u = 0; o = i[u++];) De.test(o.type || "") && n.push(o);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, o, i = Q.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (Q.acceptData(n) && (o = n[ge.expando], o && (t = ge.cache[o]))) {
                    if (t.events)
                        for (r in t.events) i[r] ? Q.event.remove(n, r) : Q.removeEvent(n, r, t.handle);
                    ge.cache[o] && delete ge.cache[o]
                }
                delete me.cache[n[me.expando]]
            }
        }
    }), Q.fn.extend({
        text: function(e) {
            return ve(this, function(e) {
                return void 0 === e ? Q.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Q.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || Q.cleanData(g(n)), n.parentNode && (t && Q.contains(n.ownerDocument, n) && y(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Q.cleanData(g(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return Q.clone(this, e, t)
            })
        },
        html: function(e) {
            return ve(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !Fe[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Pe, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Q.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Q.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = z.apply([], e);
            var n, r, o, i, a, s, l = 0,
                u = this.length,
                c = this,
                p = u - 1,
                f = e[0],
                y = Q.isFunction(f);
            if (y || u > 1 && "string" == typeof f && !K.checkClone && Ie.test(f)) return this.each(function(n) {
                var r = c.eq(n);
                y && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
            });
            if (u && (n = Q.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (o = Q.map(g(n, "script"), d), i = o.length; u > l; l++) a = n, l !== p && (a = Q.clone(a, !0, !0), i && Q.merge(o, g(a, "script"))), t.call(this[l], a, l);
                if (i)
                    for (s = o[o.length - 1].ownerDocument, Q.map(o, h), l = 0; i > l; l++) a = o[l], De.test(a.type || "") && !ge.access(a, "globalEval") && Q.contains(s, a) && (a.src ? Q._evalUrl && Q._evalUrl(a.src) : Q.globalEval(a.textContent.replace(Le, "")))
            }
            return this
        }
    }), Q.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Q.fn[e] = function(e) {
            for (var n, r = [], o = Q(e), i = o.length - 1, a = 0; i >= a; a++) n = a === i ? this : this.clone(!0), Q(o[a])[t](n), U.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var He, Be = {},
        Ve = /^margin/,
        qe = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
        We = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", o.appendChild(i);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, r = "4px" === t.width, o.removeChild(i)
        }
        var n, r, o = J.documentElement,
            i = J.createElement("div"),
            a = J.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === a.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(a), e.getComputedStyle && Q.extend(K, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(J.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", o.appendChild(i), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(i), a.removeChild(n), t
            }
        }))
    }(), Q.swap = function(e, t, n, r) {
        var o, i, a = {};
        for (i in t) a[i] = e.style[i], e.style[i] = t[i];
        o = n.apply(e, r || []);
        for (i in t) e.style[i] = a[i];
        return o
    };
    var ze = /^(none|table(?!-c[ea]).+)/,
        Ue = new RegExp("^(" + Te + ")(.*)$", "i"),
        $e = new RegExp("^([+-])=(" + Te + ")", "i"),
        Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "O", "Moz", "ms"];
    Q.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = T(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = Q.camelCase(t),
                    l = e.style;
                return t = Q.cssProps[s] || (Q.cssProps[s] = C(l, s)), a = Q.cssHooks[t] || Q.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t] : (i = typeof n, "string" === i && (o = $e.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Q.css(e, t)), i = "number"), void(null != n && n === n && ("number" !== i || Q.cssNumber[s] || (n += "px"), K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = Q.camelCase(t);
            return t = Q.cssProps[s] || (Q.cssProps[s] = C(e.style, s)), a = Q.cssHooks[t] || Q.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = T(e, t, r)), "normal" === o && t in Ye && (o = Ye[t]), "" === n || n ? (i = parseFloat(o), n === !0 || Q.isNumeric(i) ? i || 0 : o) : o
        }
    }), Q.each(["height", "width"], function(e, t) {
        Q.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? ze.test(Q.css(e, "display")) && 0 === e.offsetWidth ? Q.swap(e, Xe, function() {
                    return x(e, t, r)
                }) : x(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var o = r && We(e);
                return E(e, n, r ? k(e, t, r, "border-box" === Q.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), Q.cssHooks.marginRight = w(K.reliableMarginRight, function(e, t) {
        return t ? Q.swap(e, {
            display: "inline-block"
        }, T, [e, "marginRight"]) : void 0
    }), Q.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Q.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + we[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, Ve.test(e) || (Q.cssHooks[e + t].set = E)
    }), Q.fn.extend({
        css: function(e, t) {
            return ve(this, function(e, t, n) {
                var r, o, i = {},
                    a = 0;
                if (Q.isArray(t)) {
                    for (r = We(e), o = t.length; o > a; a++) i[t[a]] = Q.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? Q.style(e, t, n) : Q.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ce(this) ? Q(this).show() : Q(this).hide()
            })
        }
    }), Q.Tween = O, O.prototype = {
        constructor: O,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (Q.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = O.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Q.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Q.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Q.fx.step[e.prop] ? Q.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Q.cssProps[e.prop]] || Q.cssHooks[e.prop]) ? Q.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Q.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Q.fx = O.prototype.init, Q.fx.step = {};
    var Ke, Je, Ze = /^(?:toggle|show|hide)$/,
        Qe = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [A],
        nt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    o = Qe.exec(t),
                    i = o && o[3] || (Q.cssNumber[e] ? "" : "px"),
                    a = (Q.cssNumber[e] || "px" !== i && +r) && Qe.exec(Q.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== i) {
                    i = i || a[3], o = o || [], a = +r || 1;
                    do s = s || ".5", a /= s, Q.style(n.elem, e, a + i); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    Q.Animation = Q.extend(I, {
            tweener: function(e, t) {
                Q.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, o = e.length; o > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), Q.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Q.extend({}, e) : {
                complete: n || !n && t || Q.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Q.isFunction(t) && t
            };
            return r.duration = Q.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Q.fx.speeds ? Q.fx.speeds[r.duration] : Q.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                Q.isFunction(r.old) && r.old.call(this), r.queue && Q.dequeue(this, r.queue)
            }, r
        }, Q.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Ce).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var o = Q.isEmptyObject(e),
                    i = Q.speed(t, n, r),
                    a = function() {
                        var t = I(this, Q.extend({}, e), i);
                        (o || ge.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        i = Q.timers,
                        a = ge.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && et.test(o) && r(a[o]);
                    for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                    (t || !n) && Q.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ge.get(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = Q.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, Q.queue(this, e, []), o && o.stop && o.stop.call(this, !0),
                        t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Q.each(["toggle", "show", "hide"], function(e, t) {
            var n = Q.fn[t];
            Q.fn[t] = function(e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, o)
            }
        }), Q.each({
            slideDown: P("show"),
            slideUp: P("hide"),
            slideToggle: P("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Q.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Q.timers = [], Q.fx.tick = function() {
            var e, t = 0,
                n = Q.timers;
            for (Ke = Q.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Q.fx.stop(), Ke = void 0
        }, Q.fx.timer = function(e) {
            Q.timers.push(e), e() ? Q.fx.start() : Q.timers.pop()
        }, Q.fx.interval = 13, Q.fx.start = function() {
            Je || (Je = setInterval(Q.fx.tick, Q.fx.interval))
        }, Q.fx.stop = function() {
            clearInterval(Je), Je = null
        }, Q.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Q.fn.delay = function(e, t) {
            return e = Q.fx ? Q.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = J.createElement("input"),
                t = J.createElement("select"),
                n = t.appendChild(J.createElement("option"));
            e.type = "checkbox", K.checkOn = "" !== e.value, K.optSelected = n.selected, t.disabled = !0, K.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", K.radioValue = "t" === e.value
        }();
    var rt, ot, it = Q.expr.attrHandle;
    Q.fn.extend({
        attr: function(e, t) {
            return ve(this, Q.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Q.removeAttr(this, e)
            })
        }
    }), Q.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (e && 3 !== i && 8 !== i && 2 !== i) return typeof e.getAttribute === ke ? Q.prop(e, t, n) : (1 === i && Q.isXMLDoc(e) || (t = t.toLowerCase(), r = Q.attrHooks[t] || (Q.expr.match.bool.test(t) ? ot : rt)), void 0 === n ? r && "get" in r && null !== (o = r.get(e, t)) ? o : (o = Q.find.attr(e, t), null == o ? void 0 : o) : null !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void Q.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, o = 0,
                i = t && t.match(de);
            if (i && 1 === e.nodeType)
                for (; n = i[o++];) r = Q.propFix[n] || n, Q.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!K.radioValue && "radio" === t && Q.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), ot = {
        set: function(e, t, n) {
            return t === !1 ? Q.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Q.each(Q.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = it[t] || Q.find.attr;
        it[t] = function(e, t, r) {
            var o, i;
            return r || (i = it[t], it[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, it[t] = i), o
        }
    });
    var at = /^(?:input|select|textarea|button)$/i;
    Q.fn.extend({
        prop: function(e, t) {
            return ve(this, Q.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Q.propFix[e] || e]
            })
        }
    }), Q.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, o, i, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return i = 1 !== a || !Q.isXMLDoc(e), i && (t = Q.propFix[t] || t, o = Q.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), K.optSelected || (Q.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Q.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Q.propFix[this.toLowerCase()] = this
    });
    var st = /[\t\r\n\f]/g;
    Q.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, s = "string" == typeof e && e,
                l = 0,
                u = this.length;
            if (Q.isFunction(e)) return this.each(function(t) {
                Q(this).addClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(de) || []; u > l; l++)
                    if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                        for (i = 0; o = t[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = Q.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, s = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                u = this.length;
            if (Q.isFunction(e)) return this.each(function(t) {
                Q(this).removeClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(de) || []; u > l; l++)
                    if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                        for (i = 0; o = t[i++];)
                            for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
                        a = e ? Q.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Q.isFunction(e) ? function(n) {
                Q(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, o = Q(this), i = e.match(de) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === ke || "boolean" === n) && (this.className && ge.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ge.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var lt = /\r/g;
    Q.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = Q.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = r ? e.call(this, n, Q(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Q.isArray(o) && (o = Q.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), t = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = Q.valHooks[o.type] || Q.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)) : void 0
        }
    }), Q.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Q.find.attr(e, "value");
                    return null != t ? t : Q.trim(Q.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, l = 0 > o ? s : i ? o : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== o || (K.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Q.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Q(n).val(), i) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = Q.makeArray(t), a = o.length; a--;) r = o[a], (r.selected = Q.inArray(r.value, i) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), Q.each(["radio", "checkbox"], function() {
        Q.valHooks[this] = {
            set: function(e, t) {
                return Q.isArray(t) ? e.checked = Q.inArray(Q(e).val(), t) >= 0 : void 0
            }
        }, K.checkOn || (Q.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Q.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Q.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ut = Q.now(),
        ct = /\?/;
    Q.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Q.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Q.error("Invalid XML: " + e), t
    };
    var pt = /#.*$/,
        ft = /([?&])_=[^&]*/,
        dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        yt = /^(?:GET|HEAD)$/,
        vt = /^\/\//,
        gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        mt = {},
        bt = {},
        _t = "*/".concat("*"),
        Tt = e.location.href,
        wt = gt.exec(Tt.toLowerCase()) || [];
    Q.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt,
            type: "GET",
            isLocal: ht.test(wt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Q.parseJSON,
                "text xml": Q.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? L(L(e, Q.ajaxSettings), t) : L(Q.ajaxSettings, e)
        },
        ajaxPrefilter: D(mt),
        ajaxTransport: D(bt),
        ajax: function(e, t) {
            function n(e, t, n, a) {
                var l, c, g, m, _, w = t;
                2 !== b && (b = 2, s && clearTimeout(s), r = void 0, i = a || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (m = F(p, T, n)), m = H(p, m, T, l), l ? (p.ifModified && (_ = T.getResponseHeader("Last-Modified"), _ && (Q.lastModified[o] = _), _ = T.getResponseHeader("etag"), _ && (Q.etag[o] = _)), 204 === e || "HEAD" === p.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = m.state, c = m.data, g = m.error, l = !g)) : (g = w, (e || !w) && (w = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || w) + "", l ? h.resolveWith(f, [c, w, T]) : h.rejectWith(f, [T, w, g]), T.statusCode(v), v = void 0, u && d.trigger(l ? "ajaxSuccess" : "ajaxError", [T, p, l ? c : g]), y.fireWith(f, [T, w]), u && (d.trigger("ajaxComplete", [T, p]), --Q.active || Q.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, o, i, a, s, l, u, c, p = Q.ajaxSetup({}, t),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? Q(f) : Q.event,
                h = Q.Deferred(),
                y = Q.Callbacks("once memory"),
                v = p.statusCode || {},
                g = {},
                m = {},
                b = 0,
                _ = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; t = dt.exec(i);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? i : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = m[n] = m[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || _;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (h.promise(T).complete = y.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || Tt) + "").replace(pt, "").replace(vt, wt[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = Q.trim(p.dataType || "*").toLowerCase().match(de) || [""], null == p.crossDomain && (l = gt.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === wt[1] && l[2] === wt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (wt[3] || ("http:" === wt[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = Q.param(p.data, p.traditional)), R(mt, p, t, T), 2 === b) return T;
            u = Q.event && p.global, u && 0 === Q.active++ && Q.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !yt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (ct.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = ft.test(o) ? o.replace(ft, "$1_=" + ut++) : o + (ct.test(o) ? "&" : "?") + "_=" + ut++)), p.ifModified && (Q.lastModified[o] && T.setRequestHeader("If-Modified-Since", Q.lastModified[o]), Q.etag[o] && T.setRequestHeader("If-None-Match", Q.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : p.accepts["*"]);
            for (c in p.headers) T.setRequestHeader(c, p.headers[c]);
            if (p.beforeSend && (p.beforeSend.call(f, T, p) === !1 || 2 === b)) return T.abort();
            _ = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[c](p[c]);
            if (r = R(bt, p, t, T)) {
                T.readyState = 1, u && d.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, r.send(g, n)
                } catch (w) {
                    if (!(2 > b)) throw w;
                    n(-1, w)
                }
            } else n(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return Q.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Q.get(e, void 0, t, "script")
        }
    }), Q.each(["get", "post"], function(e, t) {
        Q[t] = function(e, n, r, o) {
            return Q.isFunction(n) && (o = o || r, r = n, n = void 0), Q.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            })
        }
    }), Q._evalUrl = function(e) {
        return Q.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Q.fn.extend({
        wrapAll: function(e) {
            var t;
            return Q.isFunction(e) ? this.each(function(t) {
                Q(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Q(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(Q.isFunction(e) ? function(t) {
                Q(this).wrapInner(e.call(this, t))
            } : function() {
                var t = Q(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Q.isFunction(e);
            return this.each(function(n) {
                Q(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Q.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Q.expr.filters.visible = function(e) {
        return !Q.expr.filters.hidden(e)
    };
    var Ct = /%20/g,
        Et = /\[\]$/,
        kt = /\r?\n/g,
        xt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;
    Q.param = function(e, t) {
        var n, r = [],
            o = function(e, t) {
                t = Q.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Q.ajaxSettings && Q.ajaxSettings.traditional), Q.isArray(e) || e.jquery && !Q.isPlainObject(e)) Q.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) B(n, e[n], t, o);
        return r.join("&").replace(Ct, "+")
    }, Q.fn.extend({
        serialize: function() {
            return Q.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Q.prop(this, "elements");
                return e ? Q.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Q(this).is(":disabled") && St.test(this.nodeName) && !xt.test(e) && (this.checked || !Ee.test(e))
            }).map(function(e, t) {
                var n = Q(this).val();
                return null == n ? null : Q.isArray(n) ? Q.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    }), Q.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Ot = 0,
        jt = {},
        Pt = {
            0: 200,
            1223: 204
        },
        Mt = Q.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in jt) jt[e]()
    }), K.cors = !!Mt && "withCredentials" in Mt, K.ajax = Mt = !!Mt, Q.ajaxTransport(function(e) {
        var t;
        return K.cors || Mt && !e.crossDomain ? {
            send: function(n, r) {
                var o, i = e.xhr(),
                    a = ++Ot;
                if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) i[o] = e.xhrFields[o];
                e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) i.setRequestHeader(o, n[o]);
                t = function(e) {
                    return function() {
                        t && (delete jt[a], t = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? r(i.status, i.statusText) : r(Pt[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
                            text: i.responseText
                        } : void 0, i.getAllResponseHeaders()))
                    }
                }, i.onload = t(), i.onerror = t("error"), t = jt[a] = t("abort");
                try {
                    i.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (t) throw s
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), Q.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Q.globalEval(e), e
            }
        }
    }), Q.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Q.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, o) {
                    t = Q("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var At = [],
        Nt = /(=)\?(?=&|$)|\?\?/;
    Q.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = At.pop() || Q.expando + "_" + ut++;
            return this[e] = !0, e
        }
    }), Q.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, a, s = t.jsonp !== !1 && (Nt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = Q.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Nt, "$1" + o) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || Q.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
            a = arguments
        }, r.always(function() {
            e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, At.push(o)), a && Q.isFunction(i) && i(a[0]), a = i = void 0
        }), "script") : void 0
    }), Q.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var r = ae.exec(e),
            o = !n && [];
        return r ? [t.createElement(r[1])] : (r = Q.buildFragment([e], t, o), o && o.length && Q(o).remove(), Q.merge([], r.childNodes))
    };
    var It = Q.fn.load;
    Q.fn.load = function(e, t, n) {
        if ("string" != typeof e && It) return It.apply(this, arguments);
        var r, o, i, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = Q.trim(e.slice(s)), e = e.slice(0, s)), Q.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && Q.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? Q("<div>").append(Q.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, Q.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Q.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Q.expr.filters.animated = function(e) {
        return Q.grep(Q.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Dt = e.document.documentElement;
    Q.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, l, u, c = Q.css(e, "position"),
                p = Q(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = p.offset(), i = Q.css(e, "top"), l = Q.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (i + l).indexOf("auto") > -1, u ? (r = p.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(l) || 0), Q.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : p.css(f)
        }
    }, Q.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Q.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                i = r && r.ownerDocument;
            return i ? (t = i.documentElement, Q.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (o = r.getBoundingClientRect()), n = V(i), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Q.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Q.nodeName(e[0], "html") || (r = e.offset()), r.top += Q.css(e[0], "borderTopWidth", !0), r.left += Q.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Q.css(n, "marginTop", !0),
                    left: t.left - r.left - Q.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Dt; e && !Q.nodeName(e, "html") && "static" === Q.css(e, "position");) e = e.offsetParent;
                return e || Dt
            })
        }
    }), Q.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        Q.fn[t] = function(o) {
            return ve(this, function(t, o, i) {
                var a = V(t);
                return void 0 === i ? a ? a[n] : t[o] : void(a ? a.scrollTo(r ? e.pageXOffset : i, r ? i : e.pageYOffset) : t[o] = i)
            }, t, o, arguments.length, null)
        }
    }), Q.each(["top", "left"], function(e, t) {
        Q.cssHooks[t] = w(K.pixelPosition, function(e, n) {
            return n ? (n = T(e, t), qe.test(n) ? Q(e).position()[t] + "px" : n) : void 0
        })
    }), Q.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Q.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Q.fn[r] = function(r, o) {
                var i = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || o === !0 ? "margin" : "border");
                return ve(this, function(t, n, r) {
                    var o;
                    return Q.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? Q.css(t, n, a) : Q.style(t, n, r, a)
                }, t, i ? r : void 0, i, null)
            }
        })
    }), Q.fn.size = function() {
        return this.length
    }, Q.fn.andSelf = Q.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Q
    });
    var Rt = e.jQuery,
        Lt = e.$;
    return Q.noConflict = function(t) {
        return e.$ === Q && (e.$ = Lt), t && e.jQuery === Q && (e.jQuery = Rt), Q
    }, typeof t === ke && (e.jQuery = e.$ = Q), Q
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
    var t, n, r, o, i, a, s = "Close",
        l = "BeforeClose",
        u = "AfterClose",
        c = "BeforeAppend",
        p = "MarkupParse",
        f = "Open",
        d = "Change",
        h = "mfp",
        y = "." + h,
        v = "mfp-ready",
        g = "mfp-removing",
        m = "mfp-prevent-close",
        b = function() {},
        _ = !!window.jQuery,
        T = e(window),
        w = function(e, n) {
            t.ev.on(h + e + y, n)
        },
        C = function(t, n, r, o) {
            var i = document.createElement("div");
            return i.className = "mfp-" + t, r && (i.innerHTML = r), o ? n && n.appendChild(i) : (i = e(i), n && i.appendTo(n)), i
        },
        E = function(n, r) {
            t.ev.triggerHandler(h + n, r), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(r) ? r : [r]))
        },
        k = function(n) {
            return n === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = n), t.currTemplate.closeBtn
        },
        x = function() {
            e.magnificPopup.instance || (t = new b, t.init(), e.magnificPopup.instance = t)
        },
        S = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    b.prototype = {
        constructor: b,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), r = e(document), t.popupsCache = {}
        },
        open: function(n) {
            var o;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var a, s = n.items;
                for (o = 0; o < s.length; o++)
                    if (a = s[o], a.parsed && (a = a.el[0]), a === n.el[0]) {
                        t.index = o;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], i = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = r, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = C("bg").on("click" + y, function() {
                t.close()
            }), t.wrap = C("wrap").attr("tabindex", -1).on("click" + y, function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = C("container", t.wrap)), t.contentContainer = C("content"), t.st.preloader && (t.preloader = C("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (o = 0; o < l.length; o++) {
                var u = l[o];
                u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t)
            }
            E("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (w(p, function(e, t, n, r) {
                n.close_replaceWith = k(r.type)
            }), i += " mfp-close-btn-in") : t.wrap.append(k())), t.st.alignTop && (i += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: T.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: r.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && r.on("keyup" + y, function(e) {
                27 === e.keyCode && t.close()
            }), T.on("resize" + y, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (i += " mfp-auto-cursor"), i && t.wrap.addClass(i);
            var c = t.wH = T.height(),
                d = {};
            if (t.fixedContentPos && t._hasScrollBar(c)) {
                var h = t._getScrollbarSize();
                h && (d.marginRight = h)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : d.overflow = "hidden");
            var g = t.st.mainClass;
            return t.isIE7 && (g += " mfp-ie7"), g && t._addClassToMFP(g), t.updateItemHTML(), E("BuildControls"), e("html").css(d), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), r.on("focusin" + y, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(c), E(f), n
        },
        close: function() {
            t.isOpen && (E(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(g), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            E(s);
            var n = g + " " + v + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
            }
            r.off("keyup" + y + " focusin" + y), t.ev.off(y), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, E(u)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    r = window.innerHeight * n;
                t.wrap.css("height", r), t.wH = r
            } else t.wH = e || T.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), E("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var r = n.type;
            if (E("BeforeChange", [t.currItem ? t.currItem.type : "", r]), t.currItem = n, !t.currTemplate[r]) {
                var i = !!t.st[r] && t.st[r].markup;
                E("FirstMarkupParse", i), i ? t.currTemplate[r] = e(i) : t.currTemplate[r] = !0
            }
            o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
            var a = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](n, t.currTemplate[r]);
            t.appendContent(a, r), n.preloaded = !0, E(d, n), o = n.type, t.container.prepend(t.contentContainer), E("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(k()) : t.content = e : t.content = "", E(c), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var r, o = t.items[n];
            if (o.tagName ? o = {
                    el: e(o)
                } : (r = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var i = t.types, a = 0; a < i.length; a++)
                    if (o.el.hasClass("mfp-" + i[a])) {
                        r = i[a];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = r || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, E("ElementParse", o), t.items[n]
        },
        addGroup: function(e, n) {
            var r = function(r) {
                r.mfpEl = this, t._openClick(r, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, r)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, r) : (n.items = e, e.off(o).on(o, r)))
        },
        _openClick: function(n, r, o) {
            var i = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (i || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t)) return !0
                    } else if (T.width() < a) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = r.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function(e, r) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), r || "loading" !== e || (r = t.st.tLoading);
                var o = {
                    status: e,
                    text: r
                };
                E("UpdateStatus", o), e = o.status, r = o.text, t.preloader.html(r), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(m)) {
                var r = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (r && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (r) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? r.height() : document.body.scrollHeight) > (e || T.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, n, r) {
            var o;
            r.data && (n = e.extend(r.data, n)), E(p, [t, n, r]), e.each(n, function(e, n) {
                if (void 0 === n || n === !1) return !0;
                if (o = e.split("_"), o.length > 1) {
                    var r = t.find(y + "-" + o[0]);
                    if (r.length > 0) {
                        var i = o[1];
                        "replaceWith" === i ? r[0] !== n[0] && r.replaceWith(n) : "img" === i ? r.is("img") ? r.attr("src", n) : r.replaceWith('<img src="' + n + '" class="' + r.attr("class") + '" />') : r.attr(o[1], n)
                    }
                } else t.find(y + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: b.prototype,
        modules: [],
        open: function(t, n) {
            return x(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function(n) {
        x();
        var r = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, i = _ ? r.data("magnificPopup") : r[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                i.items ? o = i.items[a] : (o = r, i.delegate && (o = o.find(i.delegate)), o = o.eq(a)), t._openClick({
                    mfpEl: o
                }, r, i)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), _ ? r.data("magnificPopup", n) : r[0].magnificPopup = n, t.addGroup(r, n);
        return r
    };
    var O, j, P, M = "inline",
        A = function() {
            P && (j.after(P.addClass(O)).detach(), P = null)
        };
    e.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(M), w(s + "." + M, function() {
                    A()
                })
            },
            getInline: function(n, r) {
                if (A(), n.src) {
                    var o = t.st.inline,
                        i = e(n.src);
                    if (i.length) {
                        var a = i[0].parentNode;
                        a && a.tagName && (j || (O = o.hiddenClass, j = C(O), O = "mfp-" + O), P = i.after(j).detach().removeClass(O)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), i = e("<div>");
                    return n.inlineElement = i, i
                }
                return t.updateStatus("ready"), t._parseMarkup(r, {}, n), r
            }
        }
    });
    var N, I = "ajax",
        D = function() {
            N && e(document.body).removeClass(N)
        },
        R = function() {
            D(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(I), N = t.st.ajax.cursor, w(s + "." + I, R), w("BeforeChange." + I, R)
            },
            getAjax: function(n) {
                N && e(document.body).addClass(N), t.updateStatus("loading");
                var r = e.extend({
                    url: n.src,
                    success: function(r, o, i) {
                        var a = {
                            data: r,
                            xhr: i
                        };
                        E("ParseAjax", a), t.appendContent(e(a.data), I), n.finished = !0, D(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass(v)
                        }, 16), t.updateStatus("ready"), E("AjaxContentAdded")
                    },
                    error: function() {
                        D(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(r), ""
            }
        }
    });
    var L, F = function(n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var r = t.st.image.titleSrc;
        if (r) {
            if (e.isFunction(r)) return r.call(t, n);
            if (n.el) return n.el.attr(r) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var n = t.st.image,
                    r = ".image";
                t.types.push("image"), w(f + r, function() {
                    "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
                }), w(s + r, function() {
                    n.cursor && e(document.body).removeClass(n.cursor), T.off("resize" + y)
                }), w("Resize" + r, t.resizeImage), t.isLowIE && w("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, L && clearInterval(L), e.isCheckingImgSize = !1, E("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    r = e.img[0],
                    o = function(i) {
                        L && clearInterval(L), L = setInterval(function() {
                            return r.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(L), n++, void(3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                        }, i)
                    };
                o(1)
            },
            getImage: function(n, r) {
                var o = 0,
                    i = function() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, E("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(i, 100) : a()))
                    },
                    a = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    l = r.find(".mfp-img");
                if (l.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img", n.el && n.el.find("img").length && (u.alt = n.el.find("img").attr("alt")), n.img = e(u).on("load.mfploader", i).on("error.mfploader", a), u.src = n.src, l.is("img") && (n.img = n.img.clone()), u = n.img[0], u.naturalWidth > 0 ? n.hasSize = !0 : u.width || (n.hasSize = !1)
                }
                return t._parseMarkup(r, {
                    title: F(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (L && clearInterval(L), n.loadError ? (r.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (r.removeClass("mfp-loading"), t.updateStatus("ready")), r) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, r.addClass("mfp-loading"), t.findImageSize(n)), r)
            }
        }
    });
    var H, B = function() {
        return void 0 === H && (H = void 0 !== document.createElement("p").style.MozTransform), H
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    r = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, i, a = n.duration,
                        u = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                r = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                i = "transition";
                            return o["-webkit-" + i] = o["-moz-" + i] = o["-o-" + i] = o[i] = r, t.css(o), t
                        },
                        c = function() {
                            t.content.css("visibility", "visible")
                        };
                    w("BuildControls" + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void c();
                            i = u(e), i.css(t._getOffset()), t.wrap.append(i), o = setTimeout(function() {
                                i.css(t._getOffset(!0)), o = setTimeout(function() {
                                    c(), setTimeout(function() {
                                        i.remove(), e = i = null, E("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), w(l + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = a, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                i = u(e)
                            }
                            i.css(t._getOffset(!0)), t.wrap.append(i), t.content.css("visibility", "hidden"), setTimeout(function() {
                                i.css(t._getOffset())
                            }, 16)
                        }
                    }), w(s + r, function() {
                        t._allowZoom() && (c(), i && i.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function(n) {
                var r;
                r = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = r.offset(),
                    i = parseInt(r.css("padding-top"), 10),
                    a = parseInt(r.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - i;
                var s = {
                    width: r.width(),
                    height: (_ ? r.innerHeight() : r[0].offsetHeight) - a - i
                };
                return B() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }
        }
    });
    var V = "iframe",
        q = "//about:blank",
        W = function(e) {
            if (t.currTemplate[V]) {
                var n = t.currTemplate[V].find("iframe");
                n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(V, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(V), w("BeforeChange", function(e, t, n) {
                    t !== n && (t === V ? W() : n === V && W(!0))
                }), w(s + "." + V, function() {
                    W()
                })
            },
            getIframe: function(n, r) {
                var o = n.src,
                    i = t.st.iframe;
                e.each(i.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var a = {};
                return i.srcAction && (a[i.srcAction] = o), t._parseMarkup(r, a, n), t.updateStatus("ready"), r
            }
        }
    });
    var z = function(e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : 0 > e ? n + e : e
        },
        U = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    o = ".mfp-gallery",
                    a = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, !(!n || !n.enabled) && (i += " mfp-gallery", w(f + o, function() {
                    n.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), r.on("keydown" + o, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), w("UpdateStatus" + o, function(e, n) {
                    n.text && (n.text = U(n.text, t.currItem.index, t.items.length))
                }), w(p + o, function(e, r, o, i) {
                    var a = t.items.length;
                    o.counter = a > 1 ? U(n.tCounter, i.index, a) : ""
                }), w("BuildControls" + o, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var r = n.arrowMarkup,
                            o = t.arrowLeft = e(r.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(m),
                            i = t.arrowRight = e(r.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(m),
                            s = a ? "mfpFastClick" : "click";
                        o[s](function() {
                            t.prev()
                        }), i[s](function() {
                            t.next()
                        }), t.isIE7 && (C("b", o[0], !1, !0), C("a", o[0], !1, !0), C("b", i[0], !1, !0), C("a", i[0], !1, !0)), t.container.append(o.add(i))
                    }
                }), w(d + o, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), void w(s + o, function() {
                    r.off(o), t.wrap.off("click" + o), t.arrowLeft && a && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                }))
            },
            next: function() {
                t.direction = !0, t.index = z(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = z(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    r = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : r); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? r : o); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = z(n), !t.items[n].preloaded) {
                    var r = t.items[n];
                    r.parsed || (r = t.parseEl(n)), E("LazyLoad", r), "image" === r.type && (r.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        r.hasSize = !0
                    }).on("error.mfploader", function() {
                        r.hasSize = !0, r.loadError = !0, E("LazyLoadError", r)
                    }).attr("src", r.src)), r.preloaded = !0
                }
            }
        }
    });
    var $ = "retina";
    e.magnificPopup.registerModule($, {
            options: {
                replaceSrc: function(e) {
                    return e.src.replace(/\.\w+$/, function(e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            n = e.ratio;
                        n = isNaN(n) ? n() : n, n > 1 && (w("ImageHasSize." + $, function(e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        }), w("ElementParse." + $, function(t, r) {
                            r.src = e.replaceSrc(r, n)
                        }))
                    }
                }
            }
        }),
        function() {
            var t = 1e3,
                n = "ontouchstart" in window,
                r = function() {
                    T.off("touchmove" + i + " touchend" + i)
                },
                o = "mfpFastClick",
                i = "." + o;
            e.fn.mfpFastClick = function(o) {
                return e(this).each(function() {
                    var a, s = e(this);
                    if (n) {
                        var l, u, c, p, f, d;
                        s.on("touchstart" + i, function(e) {
                            p = !1, d = 1, f = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], u = f.clientX, c = f.clientY, T.on("touchmove" + i, function(e) {
                                f = e.originalEvent ? e.originalEvent.touches : e.touches, d = f.length, f = f[0], (Math.abs(f.clientX - u) > 10 || Math.abs(f.clientY - c) > 10) && (p = !0, r())
                            }).on("touchend" + i, function(e) {
                                r(), p || d > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                    a = !1
                                }, t), o())
                            })
                        })
                    }
                    s.on("click" + i, function() {
                        a || o()
                    })
                })
            }, e.fn.destroyMfpFastClick = function() {
                e(this).off("touchstart" + i + " click" + i), n && T.off("touchmove" + i + " touchend" + i)
            }
        }(), x()
}),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.videojs = e()
    }
}(function() {
    var e;
    return function t(e, n, r) {
        function o(a, s) {
            if (!n[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (i) return i(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = n[a] = {
                    exports: {}
                };
                e[a][0].call(c.exports, function(t) {
                    var n = e[a][1][t];
                    return o(n ? n : t)
                }, c, c.exports, t, e, n, r)
            }
            return n[a].exports
        }
        for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
        return o
    }({
        1: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(2),
                l = r(s),
                u = e(5),
                c = r(u),
                p = function(e) {
                    function t() {
                        return o(this, t), i(this, e.apply(this, arguments))
                    }
                    return a(t, e), t.prototype.buildCSSClass = function() {
                        return "vjs-big-play-button"
                    }, t.prototype.handleClick = function(e) {
                        this.player_.play()
                    }, t
                }(l["default"]);
            p.prototype.controlText_ = "Play Video", c["default"].registerComponent("BigPlayButton", p), n["default"] = p
        }, {
            2: 2,
            5: 5
        }],
        2: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(3),
                l = r(s),
                u = e(5),
                c = r(u),
                p = e(86),
                f = r(p),
                d = e(88),
                h = function(e) {
                    function t() {
                        return o(this, t), i(this, e.apply(this, arguments))
                    }
                    return a(t, e), t.prototype.createEl = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "button",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        t = (0, d.assign)({
                            className: this.buildCSSClass()
                        }, t), "button" !== e && (f["default"].warn("Creating a Button with an HTML element of " + e + " is deprecated; use ClickableComponent instead."), t = (0, d.assign)({
                            tabIndex: 0
                        }, t), n = (0, d.assign)({
                            role: "button"
                        }, n)), n = (0, d.assign)({
                            type: "button",
                            "aria-live": "polite"
                        }, n);
                        var r = c["default"].prototype.createEl.call(this, e, t, n);
                        return this.createControlTextEl(r), r
                    }, t.prototype.addChild = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this.constructor.name;
                        return f["default"].warn("Adding an actionable (user controllable) child to a Button (" + n + ") is not supported; use a ClickableComponent instead."), c["default"].prototype.addChild.call(this, e, t)
                    }, t.prototype.enable = function() {
                        e.prototype.enable.call(this), this.el_.removeAttribute("disabled")
                    }, t.prototype.disable = function() {
                        e.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
                    }, t.prototype.handleKeyPress = function(t) {
                        32 !== t.which && 13 !== t.which && e.prototype.handleKeyPress.call(this, t)
                    }, t
                }(l["default"]);
            c["default"].registerComponent("Button", h), n["default"] = h
        }, {
            3: 3,
            5: 5,
            86: 86,
            88: 88
        }],
        3: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(5),
                u = o(l),
                c = e(81),
                p = r(c),
                f = e(82),
                d = r(f),
                h = e(83),
                y = r(h),
                v = e(86),
                g = o(v),
                m = e(94),
                b = o(m),
                _ = e(88),
                T = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.emitTapEvents(), o.enable(), o
                    }
                    return s(t, e), t.prototype.createEl = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        n = (0, _.assign)({
                            className: this.buildCSSClass(),
                            tabIndex: 0
                        }, n), "button" === t && g["default"].error("Creating a ClickableComponent with an HTML element of " + t + " is not supported; use a Button instead."), r = (0, _.assign)({
                            role: "button",
                            "aria-live": "polite"
                        }, r), this.tabIndex_ = n.tabIndex;
                        var o = e.prototype.createEl.call(this, t, n, r);
                        return this.createControlTextEl(o), o
                    }, t.prototype.createControlTextEl = function(e) {
                        return this.controlTextEl_ = p.createEl("span", {
                            className: "vjs-control-text"
                        }), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_
                    }, t.prototype.controlText = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
                        if (!e) return this.controlText_ || "Need Text";
                        var n = this.localize(e);
                        return this.controlText_ = e, this.controlTextEl_.innerHTML = n, t.setAttribute("title", n), this
                    }, t.prototype.buildCSSClass = function() {
                        return "vjs-control vjs-button " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.enable = function() {
                        return this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), "undefined" != typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on("tap", this.handleClick), this.on("click", this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this
                    }, t.prototype.disable = function() {
                        return this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), "undefined" != typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off("tap", this.handleClick), this.off("click", this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this
                    }, t.prototype.handleClick = function(e) {}, t.prototype.handleFocus = function(e) {
                        d.on(b["default"], "keydown", y.bind(this, this.handleKeyPress))
                    }, t.prototype.handleKeyPress = function(t) {
                        32 === t.which || 13 === t.which ? (t.preventDefault(), this.handleClick(t)) : e.prototype.handleKeyPress && e.prototype.handleKeyPress.call(this, t)
                    }, t.prototype.handleBlur = function(e) {
                        d.off(b["default"], "keydown", y.bind(this, this.handleKeyPress))
                    }, t
                }(u["default"]);
            u["default"].registerComponent("ClickableComponent", T), n["default"] = T
        }, {
            5: 5,
            81: 81,
            82: 82,
            83: 83,
            86: 86,
            88: 88,
            94: 94
        }],
        4: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(2),
                l = r(s),
                u = e(5),
                c = r(u),
                p = function(e) {
                    function t(n, r) {
                        o(this, t);
                        var a = i(this, e.call(this, n, r));
                        return a.controlText(r && r.controlText || a.localize("Close")), a
                    }
                    return a(t, e), t.prototype.buildCSSClass = function() {
                        return "vjs-close-button " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.handleClick = function(e) {
                        this.trigger({
                            type: "close",
                            bubbles: !1
                        })
                    }, t
                }(l["default"]);
            c["default"].registerComponent("CloseButton", p), n["default"] = p
        }, {
            2: 2,
            5: 5
        }],
        5: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.__esModule = !0;
            var a = e(95),
                s = o(a),
                l = e(81),
                u = r(l),
                c = e(83),
                p = r(c),
                f = e(85),
                d = r(f),
                h = e(82),
                y = r(h),
                v = e(86),
                g = o(v),
                m = e(91),
                b = o(m),
                _ = e(87),
                T = o(_),
                w = function() {
                    function e(t, n, r) {
                        if (i(this, e), !t && this.play ? this.player_ = t = this : this.player_ = t, this.options_ = (0, T["default"])({}, this.options_), n = this.options_ = (0, T["default"])(this.options_, n), this.id_ = n.id || n.el && n.el.id, !this.id_) {
                            var o = t && t.id && t.id() || "no_player";
                            this.id_ = o + "_component_" + d.newGUID()
                        }
                        this.name_ = n.name || null, n.el ? this.el_ = n.el : n.createEl !== !1 && (this.el_ = this.createEl()), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, n.initChildren !== !1 && this.initChildren(), this.ready(r), n.reportTouchActivity !== !1 && this.enableTouchActivity()
                    }
                    return e.prototype.dispose = function() {
                        if (this.trigger({
                                type: "dispose",
                                bubbles: !1
                            }), this.children_)
                            for (var e = this.children_.length - 1; e >= 0; e--) this.children_[e].dispose && this.children_[e].dispose();
                        this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), u.removeElData(this.el_), this.el_ = null
                    }, e.prototype.player = function() {
                        return this.player_
                    }, e.prototype.options = function(e) {
                        return g["default"].warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), e ? (this.options_ = (0, T["default"])(this.options_, e), this.options_) : this.options_
                    }, e.prototype.el = function() {
                        return this.el_
                    }, e.prototype.createEl = function(e, t, n) {
                        return u.createEl(e, t, n)
                    }, e.prototype.localize = function(e) {
                        var t = this.player_.language && this.player_.language(),
                            n = this.player_.languages && this.player_.languages();
                        if (!t || !n) return e;
                        var r = n[t];
                        if (r && r[e]) return r[e];
                        var o = t.split("-")[0],
                            i = n[o];
                        return i && i[e] ? i[e] : e
                    }, e.prototype.contentEl = function() {
                        return this.contentEl_ || this.el_
                    }, e.prototype.id = function() {
                        return this.id_
                    }, e.prototype.name = function() {
                        return this.name_
                    }, e.prototype.children = function() {
                        return this.children_
                    }, e.prototype.getChildById = function(e) {
                        return this.childIndex_[e]
                    }, e.prototype.getChild = function(e) {
                        if (e) return e = (0, b["default"])(e), this.childNameIndex_[e]
                    }, e.prototype.addChild = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length,
                            o = void 0,
                            i = void 0;
                        if ("string" == typeof t) {
                            i = (0, b["default"])(t), n || (n = {}), n === !0 && (g["default"].warn("Initializing a child component with `true` is deprecated.Children should be defined in an array when possible, but if necessary use an object instead of `true`."), n = {});
                            var a = n.componentClass || i;
                            n.name = i;
                            var s = e.getComponent(a);
                            if (!s) throw new Error("Component " + a + " does not exist");
                            if ("function" != typeof s) return null;
                            o = new s(this.player_ || this, n)
                        } else o = t;
                        if (this.children_.splice(r, 0, o), "function" == typeof o.id && (this.childIndex_[o.id()] = o), i = i || o.name && o.name(), i && (this.childNameIndex_[i] = o), "function" == typeof o.el && o.el()) {
                            var l = this.contentEl().children,
                                u = l[r] || null;
                            this.contentEl().insertBefore(o.el(), u)
                        }
                        return o
                    }, e.prototype.removeChild = function(e) {
                        if ("string" == typeof e && (e = this.getChild(e)), e && this.children_) {
                            for (var t = !1, n = this.children_.length - 1; n >= 0; n--)
                                if (this.children_[n] === e) {
                                    t = !0, this.children_.splice(n, 1);
                                    break
                                }
                            if (t) {
                                this.childIndex_[e.id()] = null, this.childNameIndex_[e.name()] = null;
                                var r = e.el();
                                r && r.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
                            }
                        }
                    }, e.prototype.initChildren = function() {
                        var t = this,
                            n = this.options_.children;
                        n && ! function() {
                            var r = t.options_,
                                o = function(e) {
                                    var n = e.name,
                                        o = e.opts;
                                    if (void 0 !== r[n] && (o = r[n]), o !== !1) {
                                        o === !0 && (o = {}), o.playerOptions = t.options_.playerOptions;
                                        var i = t.addChild(n, o);
                                        i && (t[n] = i)
                                    }
                                },
                                i = void 0,
                                a = e.getComponent("Tech");
                            i = Array.isArray(n) ? n : Object.keys(n), i.concat(Object.keys(t.options_).filter(function(e) {
                                return !i.some(function(t) {
                                    return "string" == typeof t ? e === t : e === t.name
                                })
                            })).map(function(e) {
                                var r = void 0,
                                    o = void 0;
                                return "string" == typeof e ? (r = e, o = n[r] || t.options_[r] || {}) : (r = e.name, o = e), {
                                    name: r,
                                    opts: o
                                }
                            }).filter(function(t) {
                                var n = e.getComponent(t.opts.componentClass || (0, b["default"])(t.name));
                                return n && !a.isTech(n)
                            }).forEach(o)
                        }()
                    }, e.prototype.buildCSSClass = function() {
                        return ""
                    }, e.prototype.on = function(e, t, n) {
                        var r = this;
                        return "string" == typeof e || Array.isArray(e) ? y.on(this.el_, e, p.bind(this, t)) : ! function() {
                            var o = e,
                                i = t,
                                a = p.bind(r, n),
                                s = function() {
                                    return r.off(o, i, a)
                                };
                            s.guid = a.guid, r.on("dispose", s);
                            var l = function() {
                                return r.off("dispose", s)
                            };
                            l.guid = a.guid, e.nodeName ? (y.on(o, i, a), y.on(o, "dispose", l)) : "function" == typeof e.on && (o.on(i, a), o.on("dispose", l))
                        }(), this
                    }, e.prototype.off = function(e, t, n) {
                        if (!e || "string" == typeof e || Array.isArray(e)) y.off(this.el_, e, t);
                        else {
                            var r = e,
                                o = t,
                                i = p.bind(this, n);
                            this.off("dispose", i), e.nodeName ? (y.off(r, o, i), y.off(r, "dispose", i)) : (r.off(o, i), r.off("dispose", i))
                        }
                        return this
                    }, e.prototype.one = function(e, t, n) {
                        var r = this,
                            o = arguments;
                        return "string" == typeof e || Array.isArray(e) ? y.one(this.el_, e, p.bind(this, t)) : ! function() {
                            var i = e,
                                a = t,
                                s = p.bind(r, n),
                                l = function u() {
                                    r.off(i, a, u), s.apply(null, o)
                                };
                            l.guid = s.guid, r.on(i, a, l)
                        }(), this
                    }, e.prototype.trigger = function(e, t) {
                        return y.trigger(this.el_, e, t), this
                    }, e.prototype.ready = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return e && (this.isReady_ ? t ? e.call(this) : this.setTimeout(e, 1) : (this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(e))), this
                    }, e.prototype.triggerReady = function() {
                        this.isReady_ = !0, this.setTimeout(function() {
                            var e = this.readyQueue_;
                            this.readyQueue_ = [], e && e.length > 0 && e.forEach(function(e) {
                                e.call(this)
                            }, this), this.trigger("ready")
                        }, 1)
                    }, e.prototype.$ = function(e, t) {
                        return u.$(e, t || this.contentEl())
                    }, e.prototype.$$ = function(e, t) {
                        return u.$$(e, t || this.contentEl())
                    }, e.prototype.hasClass = function(e) {
                        return u.hasElClass(this.el_, e)
                    }, e.prototype.addClass = function(e) {
                        return u.addElClass(this.el_, e), this
                    }, e.prototype.removeClass = function(e) {
                        return u.removeElClass(this.el_, e), this
                    }, e.prototype.toggleClass = function(e, t) {
                        return u.toggleElClass(this.el_, e, t), this
                    }, e.prototype.show = function() {
                        return this.removeClass("vjs-hidden"), this
                    }, e.prototype.hide = function() {
                        return this.addClass("vjs-hidden"), this
                    }, e.prototype.lockShowing = function() {
                        return this.addClass("vjs-lock-showing"), this
                    }, e.prototype.unlockShowing = function() {
                        return this.removeClass("vjs-lock-showing"), this
                    }, e.prototype.getAttribute = function(e) {
                        return u.getAttribute(this.el_, e)
                    }, e.prototype.setAttribute = function(e, t) {
                        return u.setAttribute(this.el_, e, t), this
                    }, e.prototype.removeAttribute = function(e) {
                        return u.removeAttribute(this.el_, e), this
                    }, e.prototype.width = function(e, t) {
                        return this.dimension("width", e, t)
                    }, e.prototype.height = function(e, t) {
                        return this.dimension("height", e, t)
                    }, e.prototype.dimensions = function(e, t) {
                        return this.width(e, !0).height(t)
                    }, e.prototype.dimension = function(e, t, n) {
                        if (void 0 !== t) return null !== t && t === t || (t = 0), ("" + t).indexOf("%") !== -1 || ("" + t).indexOf("px") !== -1 ? this.el_.style[e] = t : "auto" === t ? this.el_.style[e] = "" : this.el_.style[e] = t + "px", n || this.trigger("resize"), this;
                        if (!this.el_) return 0;
                        var r = this.el_.style[e],
                            o = r.indexOf("px");
                        return o !== -1 ? parseInt(r.slice(0, o), 10) : parseInt(this.el_["offset" + (0, b["default"])(e)], 10)
                    }, e.prototype.currentDimension = function(e) {
                        var t = 0;
                        if ("width" !== e && "height" !== e) throw new Error("currentDimension only accepts width or height value");
                        if ("function" == typeof s["default"].getComputedStyle) {
                            var n = s["default"].getComputedStyle(this.el_);
                            t = n.getPropertyValue(e) || n[e]
                        }
                        if (t = parseFloat(t), 0 === t) {
                            var r = "offset" + (0, b["default"])(e);
                            t = this.el_[r]
                        }
                        return t
                    }, e.prototype.currentDimensions = function() {
                        return {
                            width: this.currentDimension("width"),
                            height: this.currentDimension("height")
                        }
                    }, e.prototype.currentWidth = function() {
                        return this.currentDimension("width")
                    }, e.prototype.currentHeight = function() {
                        return this.currentDimension("height")
                    }, e.prototype.emitTapEvents = function() {
                        var e = 0,
                            t = null,
                            n = 10,
                            r = 200,
                            o = void 0;
                        this.on("touchstart", function(n) {
                            1 === n.touches.length && (t = {
                                pageX: n.touches[0].pageX,
                                pageY: n.touches[0].pageY
                            }, e = (new Date).getTime(), o = !0)
                        }), this.on("touchmove", function(e) {
                            if (e.touches.length > 1) o = !1;
                            else if (t) {
                                var r = e.touches[0].pageX - t.pageX,
                                    i = e.touches[0].pageY - t.pageY,
                                    a = Math.sqrt(r * r + i * i);
                                a > n && (o = !1)
                            }
                        });
                        var i = function() {
                            o = !1
                        };
                        this.on("touchleave", i), this.on("touchcancel", i), this.on("touchend", function(n) {
                            if (t = null, o === !0) {
                                var i = (new Date).getTime() - e;
                                i < r && (n.preventDefault(), this.trigger("tap"))
                            }
                        })
                    }, e.prototype.enableTouchActivity = function() {
                        if (this.player() && this.player().reportUserActivity) {
                            var e = p.bind(this.player(), this.player().reportUserActivity),
                                t = void 0;
                            this.on("touchstart", function() {
                                e(), this.clearInterval(t), t = this.setInterval(e, 250)
                            });
                            var n = function(n) {
                                e(), this.clearInterval(t)
                            };
                            this.on("touchmove", e), this.on("touchend", n), this.on("touchcancel", n)
                        }
                    }, e.prototype.setTimeout = function(e, t) {
                        e = p.bind(this, e);
                        var n = s["default"].setTimeout(e, t),
                            r = function() {
                                this.clearTimeout(n)
                            };
                        return r.guid = "vjs-timeout-" + n, this.on("dispose", r), n
                    }, e.prototype.clearTimeout = function(e) {
                        s["default"].clearTimeout(e);
                        var t = function() {};
                        return t.guid = "vjs-timeout-" + e, this.off("dispose", t), e
                    }, e.prototype.setInterval = function(e, t) {
                        e = p.bind(this, e);
                        var n = s["default"].setInterval(e, t),
                            r = function() {
                                this.clearInterval(n)
                            };
                        return r.guid = "vjs-interval-" + n, this.on("dispose", r), n
                    }, e.prototype.clearInterval = function(e) {
                        s["default"].clearInterval(e);
                        var t = function() {};
                        return t.guid = "vjs-interval-" + e, this.off("dispose", t), e
                    }, e.registerComponent = function(t, n) {
                        if (t) return t = (0, b["default"])(t), e.components_ || (e.components_ = {}), "Player" === t && e.components_[t] && ! function() {
                            var n = e.components_[t];
                            if (n.players && Object.keys(n.players).length > 0 && Object.keys(n.players).map(function(e) {
                                    return n.players[e]
                                }).every(Boolean)) throw new Error("Can not register Player component after player has been created")
                        }(), e.components_[t] = n, n
                    }, e.getComponent = function(t) {
                        if (t) return t = (0, b["default"])(t), e.components_ && e.components_[t] ? e.components_[t] : s["default"] && s["default"].videojs && s["default"].videojs[t] ? (g["default"].warn("The " + t + " component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)"), s["default"].videojs[t]) : void 0
                    }, e.extend = function(t) {
                        t = t || {}, g["default"].warn("Component.extend({}) has been deprecated,  use videojs.extend(Component, {}) instead");
                        var n = t.init || t.init || this.prototype.init || this.prototype.init || function() {},
                            r = function() {
                                n.apply(this, arguments)
                            };
                        r.prototype = Object.create(this.prototype), r.prototype.constructor = r, r.extend = e.extend;
                        for (var o in t) t.hasOwnProperty(o) && (r.prototype[o] = t[o]);
                        return r
                    }, e
                }();
            w.registerComponent("Component", w), n["default"] = w
        }, {
            81: 81,
            82: 82,
            83: 83,
            85: 85,
            86: 86,
            87: 87,
            91: 91,
            95: 95
        }],
        6: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(36),
                l = r(s),
                u = e(5),
                c = r(u),
                p = e(7),
                f = r(p),
                d = function(e) {
                    function t(n) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        o(this, t), r.tracks = n.audioTracks && n.audioTracks();
                        var a = i(this, e.call(this, n, r));
                        return a.el_.setAttribute("aria-label", "Audio Menu"), a
                    }
                    return a(t, e), t.prototype.buildCSSClass = function() {
                        return "vjs-audio-button " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.createItems = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = this.player_.audioTracks && this.player_.audioTracks();
                        if (!t) return e;
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            e.push(new f["default"](this.player_, {
                                track: r,
                                selectable: !0
                            }))
                        }
                        return e
                    }, t
                }(l["default"]);
            d.prototype.controlText_ = "Audio Track", c["default"].registerComponent("AudioTrackButton", d), n["default"] = d
        }, {
            36: 36,
            5: 5,
            7: 7
        }],
        7: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(48),
                u = o(l),
                c = e(5),
                p = o(c),
                f = e(83),
                d = r(f),
                h = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = r.track,
                            s = n.audioTracks();
                        r.label = o.label || o.language || "Unknown", r.selected = o.enabled;
                        var l = a(this, e.call(this, n, r));
                        return l.track = o, s && ! function() {
                            var e = d.bind(l, l.handleTracksChange);
                            s.addEventListener("change", e), l.on("dispose", function() {
                                s.removeEventListener("change", e)
                            })
                        }(), l
                    }
                    return s(t, e), t.prototype.handleClick = function(t) {
                        var n = this.player_.audioTracks();
                        if (e.prototype.handleClick.call(this, t), n)
                            for (var r = 0; r < n.length; r++) {
                                var o = n[r];
                                o.enabled = o === this.track
                            }
                    }, t.prototype.handleTracksChange = function(e) {
                        this.selected(this.track.enabled)
                    }, t
                }(u["default"]);
            p["default"].registerComponent("AudioTrackMenuItem", h), n["default"] = h
        }, {
            48: 48,
            5: 5,
            83: 83
        }],
        8: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(5),
                l = r(s);
            e(12), e(32), e(33), e(35), e(34), e(10), e(18), e(9), e(38), e(40), e(11), e(25), e(27), e(29), e(24), e(6), e(13), e(21);
            var u = function(e) {
                function t() {
                    return o(this, t), i(this, e.apply(this, arguments))
                }
                return a(t, e), t.prototype.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-control-bar",
                        dir: "ltr"
                    }, {
                        role: "group"
                    })
                }, t
            }(l["default"]);
            u.prototype.options_ = {
                children: ["playToggle", "volumeMenuButton", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subtitlesButton", "captionsButton", "audioTrackButton", "fullscreenToggle"]
            }, l["default"].registerComponent("ControlBar", u), n["default"] = u
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            18: 18,
            21: 21,
            24: 24,
            25: 25,
            27: 27,
            29: 29,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            38: 38,
            40: 40,
            5: 5,
            6: 6,
            9: 9
        }],
        9: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(2),
                l = r(s),
                u = e(5),
                c = r(u),
                p = function(e) {
                    function t(n, r) {
                        o(this, t);
                        var a = i(this, e.call(this, n, r));
                        return a.on(n, "fullscreenchange", a.handleFullscreenChange), a
                    }
                    return a(t, e), t.prototype.buildCSSClass = function() {
                        return "vjs-fullscreen-control " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.handleFullscreenChange = function(e) {
                        this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
                    }, t.prototype.handleClick = function(e) {
                        this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
                    }, t
                }(l["default"]);
            p.prototype.controlText_ = "Fullscreen", c["default"].registerComponent("FullscreenToggle", p), n["default"] = p
        }, {
            2: 2,
            5: 5
        }],
        10: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(5),
                u = o(l),
                c = e(81),
                p = r(c),
                f = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.updateShowing(), o.on(o.player(), "durationchange", o.updateShowing), o
                    }
                    return s(t, e), t.prototype.createEl = function() {
                        var t = e.prototype.createEl.call(this, "div", {
                            className: "vjs-live-control vjs-control"
                        });
                        return this.contentEl_ = p.createEl("div", {
                            className: "vjs-live-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE")
                        }, {
                            "aria-live": "off"
                        }), t.appendChild(this.contentEl_), t
                    }, t.prototype.updateShowing = function(e) {
                        this.player().duration() === 1 / 0 ? this.show() : this.hide()
                    }, t
                }(u["default"]);
            u["default"].registerComponent("LiveDisplay", f), n["default"] = f
        }, {
            5: 5,
            81: 81
        }],
        11: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(2),
                u = o(l),
                c = e(5),
                p = o(c),
                f = e(81),
                d = r(f),
                h = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.on(n, "volumechange", o.update), n.tech_ && n.tech_.featuresVolumeControl === !1 && o.addClass("vjs-hidden"), o.on(n, "loadstart", function() {
                            this.update(), n.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                        }), o
                    }
                    return s(t, e), t.prototype.buildCSSClass = function() {
                        return "vjs-mute-control " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.handleClick = function(e) {
                        this.player_.muted(!this.player_.muted())
                    }, t.prototype.update = function(e) {
                        var t = this.player_.volume(),
                            n = 3;
                        0 === t || this.player_.muted() ? n = 0 : t < .33 ? n = 1 : t < .67 && (n = 2);
                        var r = this.player_.muted() ? "Unmute" : "Mute";
                        this.controlText() !== r && this.controlText(r);
                        for (var o = 0; o < 4; o++) d.removeElClass(this.el_, "vjs-vol-" + o);
                        d.addElClass(this.el_, "vjs-vol-" + n)
                    }, t
                }(u["default"]);
            h.prototype.controlText_ = "Mute", p["default"].registerComponent("MuteToggle", h), n["default"] = h
        }, {
            2: 2,
            5: 5,
            81: 81
        }],
        12: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(2),
                l = r(s),
                u = e(5),
                c = r(u),
                p = function(e) {
                    function t(n, r) {
                        o(this, t);
                        var a = i(this, e.call(this, n, r));
                        return a.on(n, "play", a.handlePlay), a.on(n, "pause", a.handlePause), a
                    }
                    return a(t, e), t.prototype.buildCSSClass = function() {
                        return "vjs-play-control " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.handleClick = function(e) {
                        this.player_.paused() ? this.player_.play() : this.player_.pause()
                    }, t.prototype.handlePlay = function(e) {
                        this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
                    }, t.prototype.handlePause = function(e) {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
                    }, t
                }(l["default"]);
            p.prototype.controlText_ = "Play", c["default"].registerComponent("PlayToggle", p), n["default"] = p
        }, {
            2: 2,
            5: 5
        }],
        13: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(47),
                u = o(l),
                c = e(49),
                p = o(c),
                f = e(14),
                d = o(f),
                h = e(5),
                y = o(h),
                v = e(81),
                g = r(v),
                m = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.updateVisibility(), o.updateLabel(), o.on(n, "loadstart", o.updateVisibility), o.on(n, "ratechange", o.updateLabel), o
                    }
                    return s(t, e), t.prototype.createEl = function() {
                        var t = e.prototype.createEl.call(this);
                        return this.labelEl_ = g.createEl("div", {
                            className: "vjs-playback-rate-value",
                            innerHTML: 1
                        }), t.appendChild(this.labelEl_), t
                    }, t.prototype.buildCSSClass = function() {
                        return "vjs-playback-rate " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.createMenu = function() {
                        var e = new p["default"](this.player()),
                            t = this.playbackRates();
                        if (t)
                            for (var n = t.length - 1; n >= 0; n--) e.addChild(new d["default"](this.player(), {
                                rate: t[n] + "x"
                            }));
                        return e
                    }, t.prototype.updateARIAAttributes = function() {
                        this.el().setAttribute("aria-valuenow", this.player().playbackRate())
                    }, t.prototype.handleClick = function(e) {
                        for (var t = this.player().playbackRate(), n = this.playbackRates(), r = n[0], o = 0; o < n.length; o++)
                            if (n[o] > t) {
                                r = n[o];
                                break
                            }
                        this.player().playbackRate(r)
                    }, t.prototype.playbackRates = function() {
                        return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
                    }, t.prototype.playbackRateSupported = function() {
                        return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
                    }, t.prototype.updateVisibility = function(e) {
                        this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                    }, t.prototype.updateLabel = function(e) {
                        this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
                    }, t
                }(u["default"]);
            m.prototype.controlText_ = "Playback Rate", y["default"].registerComponent("PlaybackRateMenuButton", m), n["default"] = m
        }, {
            14: 14,
            47: 47,
            49: 49,
            5: 5,
            81: 81
        }],
        14: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(48),
                l = r(s),
                u = e(5),
                c = r(u),
                p = function(e) {
                    function t(n, r) {
                        o(this, t);
                        var a = r.rate,
                            s = parseFloat(a, 10);
                        r.label = a, r.selected = 1 === s;
                        var l = i(this, e.call(this, n, r));
                        return l.label = a, l.rate = s, l.on(n, "ratechange", l.update), l
                    }
                    return a(t, e), t.prototype.handleClick = function(t) {
                        e.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
                    }, t.prototype.update = function(e) {
                        this.selected(this.player().playbackRate() === this.rate)
                    }, t
                }(l["default"]);
            p.prototype.contentElType = "button", c["default"].registerComponent("PlaybackRateMenuItem", p), n["default"] = p
        }, {
            48: 48,
            5: 5
        }],
        15: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(5),
                u = o(l),
                c = e(81),
                p = r(c),
                f = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.partEls_ = [], o.on(n, "progress", o.update), o
                    }
                    return s(t, e), t.prototype.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-load-progress",
                            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
                        })
                    }, t.prototype.update = function(e) {
                        var t = this.player_.buffered(),
                            n = this.player_.duration(),
                            r = this.player_.bufferedEnd(),
                            o = this.partEls_,
                            i = function(e, t) {
                                var n = e / t || 0;
                                return 100 * (n >= 1 ? 1 : n) + "%"
                            };
                        this.el_.style.width = i(r, n);
                        for (var a = 0; a < t.length; a++) {
                            var s = t.start(a),
                                l = t.end(a),
                                u = o[a];
                            u || (u = this.el_.appendChild(p.createEl()), o[a] = u), u.style.left = i(s, r), u.style.width = i(l - s, r)
                        }
                        for (var c = o.length; c > t.length; c--) this.el_.removeChild(o[c - 1]);
                        o.length = t.length
                    }, t
                }(u["default"]);
            u["default"].registerComponent("LoadProgressBar", f), n["default"] = f
        }, {
            5: 5,
            81: 81
        }],
        16: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(5),
                u = o(l),
                c = e(81),
                p = r(c),
                f = e(83),
                d = r(f),
                h = e(84),
                y = o(h),
                v = e(80),
                g = o(v),
                m = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return r.playerOptions && r.playerOptions.controlBar && r.playerOptions.controlBar.progressControl && r.playerOptions.controlBar.progressControl.keepTooltipsInside && (o.keepTooltipsInside = r.playerOptions.controlBar.progressControl.keepTooltipsInside), o.keepTooltipsInside && (o.tooltip = p.createEl("div", {
                            className: "vjs-time-tooltip"
                        }), o.el().appendChild(o.tooltip), o.addClass("vjs-keep-tooltips-inside")), o.update(0, 0), n.on("ready", function() {
                            o.on(n.controlBar.progressControl.el(), "mousemove", d.throttle(d.bind(o, o.handleMouseMove), 25))
                        }), o
                    }
                    return s(t, e), t.prototype.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-mouse-display"
                        })
                    }, t.prototype.handleMouseMove = function(e) {
                        var t = this.player_.duration(),
                            n = this.calculateDistance(e) * t,
                            r = e.pageX - p.findElPosition(this.el().parentNode).left;
                        this.update(n, r)
                    }, t.prototype.update = function(e, t) {
                        var n = (0, y["default"])(e, this.player_.duration());
                        if (this.el().style.left = t + "px", this.el().setAttribute("data-current-time", n), this.keepTooltipsInside) {
                            var r = this.clampPosition_(t),
                                o = t - r + 1,
                                i = parseFloat((0, g["default"])(this.tooltip, "width")),
                                a = i / 2;
                            this.tooltip.innerHTML = n, this.tooltip.style.right = "-" + (a - o) + "px"
                        }
                    }, t.prototype.calculateDistance = function(e) {
                        return p.getPointerPosition(this.el().parentNode, e).x
                    }, t.prototype.clampPosition_ = function(e) {
                        if (!this.keepTooltipsInside) return e;
                        var t = parseFloat((0, g["default"])(this.player().el(), "width")),
                            n = parseFloat((0, g["default"])(this.tooltip, "width")),
                            r = n / 2,
                            o = e;
                        return e < r ? o = Math.ceil(r) : e > t - r && (o = Math.floor(t - r)), o
                    }, t
                }(u["default"]);
            u["default"].registerComponent("MouseTimeDisplay", m), n["default"] = m
        }, {
            5: 5,
            80: 80,
            81: 81,
            83: 83,
            84: 84
        }],
        17: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(5),
                u = o(l),
                c = e(83),
                p = r(c),
                f = e(84),
                d = o(f),
                h = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.updateDataAttr(), o.on(n, "timeupdate", o.updateDataAttr), n.ready(p.bind(o, o.updateDataAttr)), r.playerOptions && r.playerOptions.controlBar && r.playerOptions.controlBar.progressControl && r.playerOptions.controlBar.progressControl.keepTooltipsInside && (o.keepTooltipsInside = r.playerOptions.controlBar.progressControl.keepTooltipsInside), o.keepTooltipsInside && o.addClass("vjs-keep-tooltips-inside"), o
                    }
                    return s(t, e), t.prototype.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-play-progress vjs-slider-bar",
                            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                        })
                    }, t.prototype.updateDataAttr = function(e) {
                        var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                        this.el_.setAttribute("data-current-time", (0, d["default"])(t, this.player_.duration()))
                    }, t
                }(u["default"]);
            u["default"].registerComponent("PlayProgressBar", h), n["default"] = h
        }, {
            5: 5,
            83: 83,
            84: 84
        }],
        18: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(5),
                l = r(s);
            e(19), e(16);
            var u = function(e) {
                function t() {
                    return o(this, t), i(this, e.apply(this, arguments))
                }
                return a(t, e), t.prototype.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-progress-control vjs-control"
                    })
                }, t
            }(l["default"]);
            u.prototype.options_ = {
                children: ["seekBar"]
            }, l["default"].registerComponent("ProgressControl", u), n["default"] = u
        }, {
            16: 16,
            19: 19,
            5: 5
        }],
        19: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(57),
                u = o(l),
                c = e(5),
                p = o(c),
                f = e(83),
                d = r(f),
                h = e(84),
                y = o(h),
                v = e(80),
                g = o(v);
            e(15), e(17), e(20);
            var m = function(e) {
                function t(n, r) {
                    i(this, t);
                    var o = a(this, e.call(this, n, r));
                    return o.on(n, "timeupdate", o.updateProgress), o.on(n, "ended", o.updateProgress), n.ready(d.bind(o, o.updateProgress)), r.playerOptions && r.playerOptions.controlBar && r.playerOptions.controlBar.progressControl && r.playerOptions.controlBar.progressControl.keepTooltipsInside && (o.keepTooltipsInside = r.playerOptions.controlBar.progressControl.keepTooltipsInside), o.keepTooltipsInside && (o.tooltipProgressBar = o.addChild("TooltipProgressBar")), o
                }
                return s(t, e), t.prototype.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-progress-holder"
                    }, {
                        "aria-label": "progress bar"
                    })
                }, t.prototype.updateProgress = function(e) {
                    if (this.updateAriaAttributes(this.el_), this.keepTooltipsInside) {
                        this.updateAriaAttributes(this.tooltipProgressBar.el_), this.tooltipProgressBar.el_.style.width = this.bar.el_.style.width;
                        var t = parseFloat((0, g["default"])(this.player().el(), "width")),
                            n = parseFloat((0, g["default"])(this.tooltipProgressBar.tooltip, "width")),
                            r = this.tooltipProgressBar.el().style;
                        r.maxWidth = Math.floor(t - n / 2) + "px", r.minWidth = Math.ceil(n / 2) + "px", r.right = "-" + n / 2 + "px"
                    }
                }, t.prototype.updateAriaAttributes = function(e) {
                    var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                    e.setAttribute("aria-valuenow", (100 * this.getPercent()).toFixed(2)), e.setAttribute("aria-valuetext", (0, y["default"])(t, this.player_.duration()))
                }, t.prototype.getPercent = function() {
                    var e = this.player_.currentTime() / this.player_.duration();
                    return e >= 1 ? 1 : e
                }, t.prototype.handleMouseDown = function(t) {
                    this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), e.prototype.handleMouseDown.call(this, t)
                }, t.prototype.handleMouseMove = function(e) {
                    var t = this.calculateDistance(e) * this.player_.duration();
                    t === this.player_.duration() && (t -= .1), this.player_.currentTime(t)
                }, t.prototype.handleMouseUp = function(t) {
                    e.prototype.handleMouseUp.call(this, t), this.player_.scrubbing(!1), this.videoWasPlaying && this.player_.play()
                }, t.prototype.stepForward = function() {
                    this.player_.currentTime(this.player_.currentTime() + 5)
                }, t.prototype.stepBack = function() {
                    this.player_.currentTime(this.player_.currentTime() - 5)
                }, t
            }(u["default"]);
            m.prototype.options_ = {
                children: ["loadProgressBar", "mouseTimeDisplay", "playProgressBar"],
                barName: "playProgressBar"
            }, m.prototype.playerEvent = "timeupdate", p["default"].registerComponent("SeekBar", m), n["default"] = m
        }, {
            15: 15,
            17: 17,
            20: 20,
            5: 5,
            57: 57,
            80: 80,
            83: 83,
            84: 84
        }],
        20: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(5),
                u = o(l),
                c = e(83),
                p = r(c),
                f = e(84),
                d = o(f),
                h = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.updateDataAttr(), o.on(n, "timeupdate", o.updateDataAttr), n.ready(p.bind(o, o.updateDataAttr)), o
                    }
                    return s(t, e), t.prototype.createEl = function() {
                        var t = e.prototype.createEl.call(this, "div", {
                            className: "vjs-tooltip-progress-bar vjs-slider-bar",
                            innerHTML: '<div class="vjs-time-tooltip"></div>\n        <span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                        });
                        return this.tooltip = t.querySelector(".vjs-time-tooltip"), t
                    }, t.prototype.updateDataAttr = function(e) {
                        var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
                            n = (0, d["default"])(t, this.player_.duration());
                        this.el_.setAttribute("data-current-time", n), this.tooltip.innerHTML = n
                    }, t
                }(u["default"]);
            u["default"].registerComponent("TooltipProgressBar", h), n["default"] = h
        }, {
            5: 5,
            83: 83,
            84: 84
        }],
        21: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(22),
                l = r(s),
                u = e(5),
                c = r(u),
                p = function(e) {
                    function t() {
                        return o(this, t), i(this, e.apply(this, arguments))
                    }
                    return a(t, e), t.prototype.buildCSSClass = function() {
                        return "vjs-custom-control-spacer " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.createEl = function() {
                        var t = e.prototype.createEl.call(this, {
                            className: this.buildCSSClass()
                        });
                        return t.innerHTML = "&nbsp;", t
                    }, t
                }(l["default"]);
            c["default"].registerComponent("CustomControlSpacer", p), n["default"] = p
        }, {
            22: 22,
            5: 5
        }],
        22: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(5),
                l = r(s),
                u = function(e) {
                    function t() {
                        return o(this, t), i(this, e.apply(this, arguments))
                    }
                    return a(t, e), t.prototype.buildCSSClass = function() {
                        return "vjs-spacer " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, t
                }(l["default"]);
            l["default"].registerComponent("Spacer", u), n["default"] = u
        }, {
            5: 5
        }],
        23: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(31),
                l = r(s),
                u = e(5),
                c = r(u),
                p = function(e) {
                    function t(n, r) {
                        o(this, t), r.track = {
                            player: n,
                            kind: r.kind,
                            label: r.kind + " settings",
                            selectable: !1,
                            "default": !1,
                            mode: "disabled"
                        }, r.selectable = !1;
                        var a = i(this, e.call(this, n, r));
                        return a.addClass("vjs-texttrack-settings"), a.controlText(", opens " + r.kind + " settings dialog"), a
                    }
                    return a(t, e), t.prototype.handleClick = function(e) {
                        this.player().getChild("textTrackSettings").show(), this.player().getChild("textTrackSettings").el_.focus()
                    }, t
                }(l["default"]);
            c["default"].registerComponent("CaptionSettingsMenuItem", p), n["default"] = p
        }, {
            31: 31,
            5: 5
        }],
        24: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(30),
                l = r(s),
                u = e(5),
                c = r(u),
                p = e(23),
                f = r(p),
                d = function(e) {
                    function t(n, r, a) {
                        o(this, t);
                        var s = i(this, e.call(this, n, r, a));
                        return s.el_.setAttribute("aria-label", "Captions Menu"), s
                    }
                    return a(t, e), t.prototype.buildCSSClass = function() {
                        return "vjs-captions-button " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.update = function(t) {
                        var n = 2;
                        e.prototype.update.call(this), this.player().tech_ && this.player().tech_.featuresNativeTextTracks && (n = 1), this.items && this.items.length > n ? this.show() : this.hide()
                    }, t.prototype.createItems = function() {
                        var t = [];
                        return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || t.push(new f["default"](this.player_, {
                            kind: this.kind_
                        })), e.prototype.createItems.call(this, t)
                    }, t
                }(l["default"]);
            d.prototype.kind_ = "captions", d.prototype.controlText_ = "Captions", c["default"].registerComponent("CaptionsButton", d), n["default"] = d
        }, {
            23: 23,
            30: 30,
            5: 5
        }],
        25: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(30),
                l = r(s),
                u = e(5),
                c = r(u),
                p = e(26),
                f = r(p),
                d = e(91),
                h = r(d),
                y = function(e) {
                    function t(n, r, a) {
                        o(this, t);
                        var s = i(this, e.call(this, n, r, a));
                        return s.el_.setAttribute("aria-label", "Chapters Menu"), s
                    }
                    return a(t, e), t.prototype.buildCSSClass = function() {
                        return "vjs-chapters-button " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.update = function(t) {
                        this.track_ && (!t || "addtrack" !== t.type && "removetrack" !== t.type) || this.setTrack(this.findChaptersTrack()), e.prototype.update.call(this)
                    }, t.prototype.setTrack = function(e) {
                        if (this.track_ !== e) {
                            if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                                var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                                t && t.removeEventListener("load", this.updateHandler_), this.track_ = null
                            }
                            if (this.track_ = e, this.track_) {
                                this.track_.mode = "hidden";
                                var n = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                                n && n.addEventListener("load", this.updateHandler_)
                            }
                        }
                    }, t.prototype.findChaptersTrack = function() {
                        for (var e = this.player_.textTracks() || [], t = e.length - 1; t >= 0; t--) {
                            var n = e[t];
                            if (n.kind === this.kind_) return n
                        }
                    }, t.prototype.getMenuCaption = function() {
                        return this.track_ && this.track_.label ? this.track_.label : this.localize((0, h["default"])(this.kind_))
                    }, t.prototype.createMenu = function() {
                        return this.options_.title = this.getMenuCaption(), e.prototype.createMenu.call(this)
                    }, t.prototype.createItems = function() {
                        var e = [];
                        if (!this.track_) return e;
                        var t = this.track_.cues;
                        if (!t) return e;
                        for (var n = 0, r = t.length; n < r; n++) {
                            var o = t[n],
                                i = new f["default"](this.player_, {
                                    track: this.track_,
                                    cue: o
                                });
                            e.push(i)
                        }
                        return e
                    }, t
                }(l["default"]);
            y.prototype.kind_ = "chapters", y.prototype.controlText_ = "Chapters", c["default"].registerComponent("ChaptersButton", y), n["default"] = y
        }, {
            26: 26,
            30: 30,
            5: 5,
            91: 91
        }],
        26: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(48),
                u = o(l),
                c = e(5),
                p = o(c),
                f = e(83),
                d = r(f),
                h = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = r.track,
                            s = r.cue,
                            l = n.currentTime();
                        r.selectable = !0, r.label = s.text, r.selected = s.startTime <= l && l < s.endTime;
                        var u = a(this, e.call(this, n, r));
                        return u.track = o, u.cue = s, o.addEventListener("cuechange", d.bind(u, u.update)), u
                    }
                    return s(t, e), t.prototype.handleClick = function(t) {
                        e.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
                    }, t.prototype.update = function(e) {
                        var t = this.cue,
                            n = this.player_.currentTime();
                        this.selected(t.startTime <= n && n < t.endTime)
                    }, t
                }(u["default"]);
            p["default"].registerComponent("ChaptersTrackMenuItem", h), n["default"] = h
        }, {
            48: 48,
            5: 5,
            83: 83
        }],
        27: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(30),
                u = o(l),
                c = e(5),
                p = o(c),
                f = e(83),
                d = r(f),
                h = function(e) {
                    function t(n, r, o) {
                        i(this, t);
                        var s = a(this, e.call(this, n, r, o));
                        s.el_.setAttribute("aria-label", "Descriptions Menu");
                        var l = n.textTracks();
                        return l && ! function() {
                            var e = d.bind(s, s.handleTracksChange);
                            l.addEventListener("change", e), s.on("dispose", function() {
                                l.removeEventListener("change", e)
                            })
                        }(), s
                    }
                    return s(t, e), t.prototype.handleTracksChange = function(e) {
                        for (var t = this.player().textTracks(), n = !1, r = 0, o = t.length; r < o; r++) {
                            var i = t[r];
                            if (i.kind !== this.kind_ && "showing" === i.mode) {
                                n = !0;
                                break
                            }
                        }
                        n ? this.disable() : this.enable()
                    }, t.prototype.buildCSSClass = function() {
                        return "vjs-descriptions-button " + e.prototype.buildCSSClass.call(this)
                    }, t
                }(u["default"]);
            h.prototype.kind_ = "descriptions", h.prototype.controlText_ = "Descriptions", p["default"].registerComponent("DescriptionsButton", h), n["default"] = h
        }, {
            30: 30,
            5: 5,
            83: 83
        }],
        28: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(31),
                l = r(s),
                u = e(5),
                c = r(u),
                p = function(e) {
                    function t(n, r) {
                        o(this, t), r.track = {
                            player: n,
                            kind: r.kind,
                            label: r.kind + " off",
                            "default": !1,
                            mode: "disabled"
                        }, r.selectable = !0;
                        var a = i(this, e.call(this, n, r));
                        return a.selected(!0), a
                    }
                    return a(t, e), t.prototype.handleTracksChange = function(e) {
                        for (var t = this.player().textTracks(), n = !0, r = 0, o = t.length; r < o; r++) {
                            var i = t[r];
                            if (i.kind === this.track.kind && "showing" === i.mode) {
                                n = !1;
                                break
                            }
                        }
                        this.selected(n)
                    }, t
                }(l["default"]);
            c["default"].registerComponent("OffTextTrackMenuItem", p), n["default"] = p
        }, {
            31: 31,
            5: 5
        }],
        29: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(30),
                l = r(s),
                u = e(5),
                c = r(u),
                p = function(e) {
                    function t(n, r, a) {
                        o(this, t);
                        var s = i(this, e.call(this, n, r, a));
                        return s.el_.setAttribute("aria-label", "Subtitles Menu"), s
                    }
                    return a(t, e), t.prototype.buildCSSClass = function() {
                        return "vjs-subtitles-button " + e.prototype.buildCSSClass.call(this)
                    }, t
                }(l["default"]);
            p.prototype.kind_ = "subtitles", p.prototype.controlText_ = "Subtitles", c["default"].registerComponent("SubtitlesButton", p), n["default"] = p
        }, {
            30: 30,
            5: 5
        }],
        30: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(36),
                l = r(s),
                u = e(5),
                c = r(u),
                p = e(31),
                f = r(p),
                d = e(28),
                h = r(d),
                y = function(e) {
                    function t(n) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return o(this, t), r.tracks = n.textTracks(), i(this, e.call(this, n, r))
                    }
                    return a(t, e), t.prototype.createItems = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        e.push(new h["default"](this.player_, {
                            kind: this.kind_
                        }));
                        var t = this.player_.textTracks();
                        if (!t) return e;
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.kind === this.kind_ && e.push(new f["default"](this.player_, {
                                track: r,
                                selectable: !0
                            }))
                        }
                        return e
                    }, t
                }(l["default"]);
            c["default"].registerComponent("TextTrackButton", y), n["default"] = y
        }, {
            28: 28,
            31: 31,
            36: 36,
            5: 5
        }],
        31: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                u = e(48),
                c = o(u),
                p = e(5),
                f = o(p),
                d = e(83),
                h = r(d),
                y = e(95),
                v = o(y),
                g = e(94),
                m = o(g),
                b = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = r.track,
                            s = n.textTracks();
                        r.label = o.label || o.language || "Unknown", r.selected = o["default"] || "showing" === o.mode;
                        var u = a(this, e.call(this, n, r));
                        return u.track = o, s && ! function() {
                            var e = h.bind(u, u.handleTracksChange);
                            s.addEventListener("change", e), u.on("dispose", function() {
                                s.removeEventListener("change", e)
                            })
                        }(), s && void 0 === s.onchange && ! function() {
                            var e = void 0;
                            u.on(["tap", "click"], function() {
                                if ("object" !== l(v["default"].Event)) try {
                                    e = new v["default"].Event("change")
                                } catch (t) {}
                                e || (e = m["default"].createEvent("Event"), e.initEvent("change", !0, !0)), s.dispatchEvent(e)
                            })
                        }(), u
                    }
                    return s(t, e), t.prototype.handleClick = function(t) {
                        var n = this.track.kind,
                            r = this.player_.textTracks();
                        if (e.prototype.handleClick.call(this, t), r)
                            for (var o = 0; o < r.length; o++) {
                                var i = r[o];
                                i.kind === n && (i === this.track ? i.mode = "showing" : i.mode = "disabled")
                            }
                    }, t.prototype.handleTracksChange = function(e) {
                        this.selected("showing" === this.track.mode)
                    }, t
                }(c["default"]);
            f["default"].registerComponent("TextTrackMenuItem", b), n["default"] = b
        }, {
            48: 48,
            5: 5,
            83: 83,
            94: 94,
            95: 95
        }],
        32: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(5),
                u = o(l),
                c = e(81),
                p = r(c),
                f = e(84),
                d = o(f),
                h = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.on(n, "timeupdate", o.updateContent), o
                    }
                    return s(t, e), t.prototype.createEl = function() {
                        var t = e.prototype.createEl.call(this, "div", {
                            className: "vjs-current-time vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = p.createEl("div", {
                            className: "vjs-current-time-display",
                            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00'
                        }, {
                            "aria-live": "off"
                        }), t.appendChild(this.contentEl_), t
                    }, t.prototype.updateContent = function(e) {
                        var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
                            n = this.localize("Current Time"),
                            r = (0, d["default"])(t, this.player_.duration());
                        r !== this.formattedTime_ && (this.formattedTime_ = r, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + n + "</span> " + r)
                    }, t
                }(u["default"]);
            u["default"].registerComponent("CurrentTimeDisplay", h), n["default"] = h
        }, {
            5: 5,
            81: 81,
            84: 84
        }],
        33: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(5),
                u = o(l),
                c = e(81),
                p = r(c),
                f = e(84),
                d = o(f),
                h = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.on(n, "durationchange", o.updateContent), o.on(n, "timeupdate", o.updateContent), o.on(n, "loadedmetadata", o.updateContent), o
                    }
                    return s(t, e), t.prototype.createEl = function() {
                        var t = e.prototype.createEl.call(this, "div", {
                            className: "vjs-duration vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = p.createEl("div", {
                            className: "vjs-duration-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> 0:00"
                        }, {
                            "aria-live": "off"
                        }), t.appendChild(this.contentEl_), t
                    }, t.prototype.updateContent = function(e) {
                        var t = this.player_.duration();
                        if (t && this.duration_ !== t) {
                            this.duration_ = t;
                            var n = this.localize("Duration Time"),
                                r = (0, d["default"])(t);
                            this.contentEl_.innerHTML = '<span class="vjs-control-text">' + n + "</span> " + r
                        }
                    }, t
                }(u["default"]);
            u["default"].registerComponent("DurationDisplay", h), n["default"] = h
        }, {
            5: 5,
            81: 81,
            84: 84
        }],
        34: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(5),
                u = o(l),
                c = e(81),
                p = r(c),
                f = e(84),
                d = o(f),
                h = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.on(n, "timeupdate", o.updateContent), o.on(n, "durationchange", o.updateContent), o
                    }
                    return s(t, e), t.prototype.createEl = function() {
                        var t = e.prototype.createEl.call(this, "div", {
                            className: "vjs-remaining-time vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = p.createEl("div", {
                            className: "vjs-remaining-time-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -0:00"
                        }, {
                            "aria-live": "off"
                        }), t.appendChild(this.contentEl_), t
                    }, t.prototype.updateContent = function(e) {
                        if (this.player_.duration()) {
                            var t = this.localize("Remaining Time"),
                                n = (0, d["default"])(this.player_.remainingTime());
                            n !== this.formattedTime_ && (this.formattedTime_ = n, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + t + "</span> -" + n)
                        }
                    }, t
                }(u["default"]);
            u["default"].registerComponent("RemainingTimeDisplay", h), n["default"] = h
        }, {
            5: 5,
            81: 81,
            84: 84
        }],
        35: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(5),
                l = r(s),
                u = function(e) {
                    function t() {
                        return o(this, t), i(this, e.apply(this, arguments))
                    }
                    return a(t, e), t.prototype.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-time-control vjs-time-divider",
                            innerHTML: "<div><span>/</span></div>"
                        })
                    }, t
                }(l["default"]);
            l["default"].registerComponent("TimeDivider", u), n["default"] = u
        }, {
            5: 5
        }],
        36: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(47),
                u = o(l),
                c = e(5),
                p = o(c),
                f = e(83),
                d = r(f),
                h = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = r.tracks,
                            s = a(this, e.call(this, n, r));
                        if (s.items.length <= 1 && s.hide(), !o) return a(s);
                        var l = d.bind(s, s.update);
                        return o.addEventListener("removetrack", l), o.addEventListener("addtrack", l), s.player_.on("dispose", function() {
                            o.removeEventListener("removetrack", l), o.removeEventListener("addtrack", l)
                        }), s
                    }
                    return s(t, e), t
                }(u["default"]);
            p["default"].registerComponent("TrackButton", h), n["default"] = h
        }, {
            47: 47,
            5: 5,
            83: 83
        }],
        37: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(57),
                u = o(l),
                c = e(5),
                p = o(c),
                f = e(83),
                d = r(f);
            e(39);
            var h = function(e) {
                function t(n, r) {
                    i(this, t);
                    var o = a(this, e.call(this, n, r));
                    return o.on(n, "volumechange", o.updateARIAAttributes), n.ready(d.bind(o, o.updateARIAAttributes)), o
                }
                return s(t, e), t.prototype.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-bar vjs-slider-bar"
                    }, {
                        "aria-label": "volume level"
                    })
                }, t.prototype.handleMouseMove = function(e) {
                    this.checkMuted(), this.player_.volume(this.calculateDistance(e))
                }, t.prototype.checkMuted = function() {
                    this.player_.muted() && this.player_.muted(!1)
                }, t.prototype.getPercent = function() {
                    return this.player_.muted() ? 0 : this.player_.volume()
                }, t.prototype.stepForward = function() {
                    this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
                }, t.prototype.stepBack = function() {
                    this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
                }, t.prototype.updateARIAAttributes = function(e) {
                    var t = (100 * this.player_.volume()).toFixed(2);
                    this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
                }, t
            }(u["default"]);
            h.prototype.options_ = {
                children: ["volumeLevel"],
                barName: "volumeLevel"
            }, h.prototype.playerEvent = "volumechange", p["default"].registerComponent("VolumeBar", h), n["default"] = h
        }, {
            39: 39,
            5: 5,
            57: 57,
            83: 83
        }],
        38: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(5),
                l = r(s);
            e(37);
            var u = function(e) {
                function t(n, r) {
                    o(this, t);
                    var a = i(this, e.call(this, n, r));
                    return n.tech_ && n.tech_.featuresVolumeControl === !1 && a.addClass("vjs-hidden"), a.on(n, "loadstart", function() {
                        n.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                    }), a
                }
                return a(t, e), t.prototype.createEl = function() {
                    return e.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-control vjs-control"
                    })
                }, t
            }(l["default"]);
            u.prototype.options_ = {
                children: ["volumeBar"]
            }, l["default"].registerComponent("VolumeControl", u), n["default"] = u
        }, {
            37: 37,
            5: 5
        }],
        39: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(5),
                l = r(s),
                u = function(e) {
                    function t() {
                        return o(this, t), i(this, e.apply(this, arguments))
                    }
                    return a(t, e), t.prototype.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-level",
                            innerHTML: '<span class="vjs-control-text"></span>'
                        })
                    }, t
                }(l["default"]);
            l["default"].registerComponent("VolumeLevel", u), n["default"] = u
        }, {
            5: 5
        }],
        40: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(83),
                u = o(l),
                c = e(5),
                p = r(c),
                f = e(54),
                d = r(f),
                h = e(53),
                y = r(h),
                v = e(11),
                g = r(v),
                m = e(37),
                b = r(m),
                _ = function(e) {
                    function t(n) {
                        function r() {
                            n.tech_ && n.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                        }
                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(this, t), void 0 === o.inline && (o.inline = !0), void 0 === o.vertical && (o.inline ? o.vertical = !1 : o.vertical = !0), o.volumeBar = o.volumeBar || {}, o.volumeBar.vertical = !!o.vertical;
                        var s = a(this, e.call(this, n, o));
                        return s.on(n, "volumechange", s.volumeUpdate), s.on(n, "loadstart", s.volumeUpdate), r.call(s), s.on(n, "loadstart", r), s.on(s.volumeBar, ["slideractive", "focus"], function() {
                            this.addClass("vjs-slider-active")
                        }), s.on(s.volumeBar, ["sliderinactive", "blur"], function() {
                            this.removeClass("vjs-slider-active")
                        }), s.on(s.volumeBar, ["focus"], function() {
                            this.addClass("vjs-lock-showing")
                        }), s.on(s.volumeBar, ["blur"], function() {
                            this.removeClass("vjs-lock-showing")
                        }), s
                    }
                    return s(t, e), t.prototype.buildCSSClass = function() {
                        var t = "";
                        return t = this.options_.vertical ? "vjs-volume-menu-button-vertical" : "vjs-volume-menu-button-horizontal", "vjs-volume-menu-button " + e.prototype.buildCSSClass.call(this) + " " + t
                    }, t.prototype.createPopup = function() {
                        var e = new d["default"](this.player_, {
                                contentElType: "div"
                            }),
                            t = new b["default"](this.player_, this.options_.volumeBar);
                        return e.addChild(t), this.menuContent = e, this.volumeBar = t, this.attachVolumeBarEvents(), e
                    }, t.prototype.handleClick = function(t) {
                        g["default"].prototype.handleClick.call(this), e.prototype.handleClick.call(this)
                    }, t.prototype.attachVolumeBarEvents = function() {
                        this.menuContent.on(["mousedown", "touchdown"], u.bind(this, this.handleMouseDown))
                    }, t.prototype.handleMouseDown = function(e) {
                        this.on(["mousemove", "touchmove"], u.bind(this.volumeBar, this.volumeBar.handleMouseMove)), this.on(this.el_.ownerDocument, ["mouseup", "touchend"], this.handleMouseUp)
                    }, t.prototype.handleMouseUp = function(e) {
                        this.off(["mousemove", "touchmove"], u.bind(this.volumeBar, this.volumeBar.handleMouseMove))
                    }, t
                }(y["default"]);
            _.prototype.volumeUpdate = g["default"].prototype.update, _.prototype.controlText_ = "Mute", p["default"].registerComponent("VolumeMenuButton", _), n["default"] = _
        }, {
            11: 11,
            37: 37,
            5: 5,
            53: 53,
            54: 54,
            83: 83
        }],
        41: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(5),
                l = r(s),
                u = e(50),
                c = r(u),
                p = e(87),
                f = r(p),
                d = function(e) {
                    function t(n, r) {
                        o(this, t);
                        var a = i(this, e.call(this, n, r));
                        return a.on(n, "error", a.open), a
                    }
                    return a(t, e), t.prototype.buildCSSClass = function() {
                        return "vjs-error-display " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.content = function() {
                        var e = this.player().error();
                        return e ? this.localize(e.message) : ""
                    }, t
                }(c["default"]);
            d.prototype.options_ = (0, f["default"])(c["default"].prototype.options_, {
                fillAlways: !0,
                temporary: !1,
                uncloseable: !0
            }), l["default"].registerComponent("ErrorDisplay", d), n["default"] = d
        }, {
            5: 5,
            50: 50,
            87: 87
        }],
        42: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }
            n.__esModule = !0;
            var o = e(82),
                i = r(o),
                a = function() {};
            a.prototype.allowedEvents_ = {}, a.prototype.on = function(e, t) {
                var n = this.addEventListener;
                this.addEventListener = function() {}, i.on(this, e, t), this.addEventListener = n
            }, a.prototype.addEventListener = a.prototype.on, a.prototype.off = function(e, t) {
                i.off(this, e, t)
            }, a.prototype.removeEventListener = a.prototype.off, a.prototype.one = function(e, t) {
                var n = this.addEventListener;
                this.addEventListener = function() {}, i.one(this, e, t), this.addEventListener = n
            }, a.prototype.trigger = function(e) {
                var t = e.type || e;
                "string" == typeof e && (e = {
                    type: t
                }), e = i.fixEvent(e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), i.trigger(this, e)
            }, a.prototype.dispatchEvent = a.prototype.trigger, n["default"] = a
        }, {
            82: 82
        }],
        43: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            n.__esModule = !0;
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                i = e(86),
                a = r(i),
                s = e(88),
                l = function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : o(t)));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (e.super_ = t)
                },
                u = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = function() {
                            e.apply(this, arguments)
                        },
                        r = {};
                    (0, s.isObject)(t) ? ("function" == typeof t.init && (a["default"].warn("Constructor logic via init() is deprecated; please use constructor() instead."), t.constructor = t.init), t.constructor !== Object.prototype.constructor && (n = t.constructor), r = t) : "function" == typeof t && (n = t), l(n, e);
                    for (var o in r) r.hasOwnProperty(o) && (n.prototype[o] = r[o]);
                    return n
                };
            n["default"] = u
        }, {
            86: 86,
            88: 88
        }],
        44: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            n.__esModule = !0;
            for (var o = e(94), i = r(o), a = {}, s = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], l = s[0], u = void 0, c = 0; c < s.length; c++)
                if (s[c][1] in i["default"]) {
                    u = s[c];
                    break
                }
            if (u)
                for (var p = 0; p < u.length; p++) a[l[p]] = u[p];
            n["default"] = a
        }, {
            94: 94
        }],
        45: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(5),
                l = r(s),
                u = function(e) {
                    function t() {
                        return o(this, t), i(this, e.apply(this, arguments))
                    }
                    return a(t, e), t.prototype.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-loading-spinner",
                            dir: "ltr"
                        })
                    }, t
                }(l["default"]);
            l["default"].registerComponent("LoadingSpinner", u), n["default"] = u
        }, {
            5: 5
        }],
        46: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e instanceof r ? e : ("number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : (0, o.isObject)(e) && ("number" == typeof e.code && (this.code = e.code), (0, o.assign)(this, e)), void(this.message || (this.message = r.defaultMessages[this.code] || "")))
            }
            n.__esModule = !0;
            var o = e(88);
            r.prototype.code = 0, r.prototype.message = "", r.prototype.status = null, r.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], r.defaultMessages = {
                1: "You aborted the media playback",
                2: "A network error caused the media download to fail part-way.",
                3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
                5: "The media is encrypted and we do not have the keys to decrypt it."
            };
            for (var i = 0; i < r.errorTypes.length; i++) r[r.errorTypes[i]] = i, r.prototype[r.errorTypes[i]] = i;
            n["default"] = r
        }, {
            88: 88
        }],
        47: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(3),
                u = o(l),
                c = e(5),
                p = o(c),
                f = e(49),
                d = o(f),
                h = e(81),
                y = r(h),
                v = e(83),
                g = r(v),
                m = e(91),
                b = o(m),
                _ = function(e) {
                    function t(n) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.update(), o.enabled_ = !0, o.el_.setAttribute("aria-haspopup", "true"), o.el_.setAttribute("role", "menuitem"), o.on("keydown", o.handleSubmenuKeyPress), o
                    }
                    return s(t, e), t.prototype.update = function() {
                        var e = this.createMenu();
                        this.menu && this.removeChild(this.menu), this.menu = e, this.addChild(e), this.buttonPressed_ = !1, this.el_.setAttribute("aria-expanded", "false"), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                    }, t.prototype.createMenu = function() {
                        var e = new d["default"](this.player_);
                        if (this.options_.title) {
                            var t = y.createEl("li", {
                                className: "vjs-menu-title",
                                innerHTML: (0, b["default"])(this.options_.title),
                                tabIndex: -1
                            });
                            e.children_.unshift(t), y.insertElFirst(t, e.contentEl())
                        }
                        if (this.items = this.createItems(), this.items)
                            for (var n = 0; n < this.items.length; n++) e.addItem(this.items[n]);
                        return e
                    }, t.prototype.createItems = function() {}, t.prototype.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, t.prototype.buildCSSClass = function() {
                        var t = "vjs-menu-button";
                        return t += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + t + " " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.handleClick = function(e) {
                        this.one(this.menu.contentEl(), "mouseleave", g.bind(this, function(e) {
                            this.unpressButton(),
                                this.el_.blur()
                        })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
                    }, t.prototype.handleKeyPress = function(t) {
                        27 === t.which || 9 === t.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && t.preventDefault()) : 38 === t.which || 40 === t.which ? this.buttonPressed_ || (this.pressButton(), t.preventDefault()) : e.prototype.handleKeyPress.call(this, t)
                    }, t.prototype.handleSubmenuKeyPress = function(e) {
                        27 !== e.which && 9 !== e.which || (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && e.preventDefault())
                    }, t.prototype.pressButton = function() {
                        this.enabled_ && (this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-expanded", "true"), this.menu.focus())
                    }, t.prototype.unpressButton = function() {
                        this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.el_.focus())
                    }, t.prototype.disable = function() {
                        return this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.enabled_ = !1, e.prototype.disable.call(this)
                    }, t.prototype.enable = function() {
                        return this.enabled_ = !0, e.prototype.enable.call(this)
                    }, t
                }(u["default"]);
            p["default"].registerComponent("MenuButton", _), n["default"] = _
        }, {
            3: 3,
            49: 49,
            5: 5,
            81: 81,
            83: 83,
            91: 91
        }],
        48: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(3),
                l = r(s),
                u = e(5),
                c = r(u),
                p = e(88),
                f = function(e) {
                    function t(n, r) {
                        o(this, t);
                        var a = i(this, e.call(this, n, r));
                        return a.selectable = r.selectable, a.selected(r.selected), a.selectable ? a.el_.setAttribute("role", "menuitemcheckbox") : a.el_.setAttribute("role", "menuitem"), a
                    }
                    return a(t, e), t.prototype.createEl = function(t, n, r) {
                        return e.prototype.createEl.call(this, "li", (0, p.assign)({
                            className: "vjs-menu-item",
                            innerHTML: this.localize(this.options_.label),
                            tabIndex: -1
                        }, n), r)
                    }, t.prototype.handleClick = function(e) {
                        this.selected(!0)
                    }, t.prototype.selected = function(e) {
                        this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected")) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(" ")))
                    }, t
                }(l["default"]);
            c["default"].registerComponent("MenuItem", f), n["default"] = f
        }, {
            3: 3,
            5: 5,
            88: 88
        }],
        49: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(5),
                u = o(l),
                c = e(81),
                p = r(c),
                f = e(83),
                d = r(f),
                h = e(82),
                y = r(h),
                v = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.focusedChild_ = -1, o.on("keydown", o.handleKeyPress), o
                    }
                    return s(t, e), t.prototype.addItem = function(e) {
                        this.addChild(e), e.on("click", d.bind(this, function(e) {
                            this.unlockShowing()
                        }))
                    }, t.prototype.createEl = function() {
                        var t = this.options_.contentElType || "ul";
                        this.contentEl_ = p.createEl(t, {
                            className: "vjs-menu-content"
                        }), this.contentEl_.setAttribute("role", "menu");
                        var n = e.prototype.createEl.call(this, "div", {
                            append: this.contentEl_,
                            className: "vjs-menu"
                        });
                        return n.setAttribute("role", "presentation"), n.appendChild(this.contentEl_), y.on(n, "click", function(e) {
                            e.preventDefault(), e.stopImmediatePropagation()
                        }), n
                    }, t.prototype.handleKeyPress = function(e) {
                        37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepForward()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepBack())
                    }, t.prototype.stepForward = function() {
                        var e = 0;
                        void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e)
                    }, t.prototype.stepBack = function() {
                        var e = 0;
                        void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e)
                    }, t.prototype.focus = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = this.children().slice(),
                            n = t.length && t[0].className && /vjs-menu-title/.test(t[0].className);
                        n && t.shift(), t.length > 0 && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), this.focusedChild_ = e, t[e].el_.focus())
                    }, t
                }(u["default"]);
            u["default"].registerComponent("Menu", v), n["default"] = v
        }, {
            5: 5,
            81: 81,
            82: 82,
            83: 83
        }],
        50: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(81),
                u = o(l),
                c = e(83),
                p = o(c),
                f = e(5),
                d = r(f),
                h = "vjs-modal-dialog",
                y = 27,
                v = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.opened_ = o.hasBeenOpened_ = o.hasBeenFilled_ = !1, o.closeable(!o.options_.uncloseable), o.content(o.options_.content), o.contentEl_ = u.createEl("div", {
                            className: h + "-content"
                        }, {
                            role: "document"
                        }), o.descEl_ = u.createEl("p", {
                            className: h + "-description vjs-offscreen",
                            id: o.el().getAttribute("aria-describedby")
                        }), u.textContent(o.descEl_, o.description()), o.el_.appendChild(o.descEl_), o.el_.appendChild(o.contentEl_), o
                    }
                    return s(t, e), t.prototype.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass(),
                            tabIndex: -1
                        }, {
                            "aria-describedby": this.id() + "_description",
                            "aria-hidden": "true",
                            "aria-label": this.label(),
                            role: "dialog"
                        })
                    }, t.prototype.buildCSSClass = function() {
                        return h + " vjs-hidden " + e.prototype.buildCSSClass.call(this)
                    }, t.prototype.handleKeyPress = function(e) {
                        e.which === y && this.closeable() && this.close()
                    }, t.prototype.label = function() {
                        return this.options_.label || this.localize("Modal Window")
                    }, t.prototype.description = function() {
                        var e = this.options_.description || this.localize("This is a modal window.");
                        return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e
                    }, t.prototype.open = function() {
                        if (!this.opened_) {
                            var e = this.player();
                            this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !e.paused(), this.wasPlaying_ && e.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", p.bind(this, this.handleKeyPress)), e.controls(!1), this.show(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                        }
                        return this
                    }, t.prototype.opened = function(e) {
                        return "boolean" == typeof e && this[e ? "open" : "close"](), this.opened_
                    }, t.prototype.close = function() {
                        if (this.opened_) {
                            var e = this.player();
                            this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && e.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", p.bind(this, this.handleKeyPress)), e.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.options_.temporary && this.dispose()
                        }
                        return this
                    }, t.prototype.closeable = function n(e) {
                        if ("boolean" == typeof e) {
                            var n = this.closeable_ = !!e,
                                t = this.getChild("closeButton");
                            if (n && !t) {
                                var r = this.contentEl_;
                                this.contentEl_ = this.el_, t = this.addChild("closeButton", {
                                    controlText: "Close Modal Dialog"
                                }), this.contentEl_ = r, this.on(t, "close", this.close)
                            }!n && t && (this.off(t, "close", this.close), this.removeChild(t), t.dispose())
                        }
                        return this.closeable_
                    }, t.prototype.fill = function() {
                        return this.fillWith(this.content())
                    }, t.prototype.fillWith = function(e) {
                        var t = this.contentEl(),
                            n = t.parentNode,
                            r = t.nextSibling;
                        return this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, n.removeChild(t), this.empty(), u.insertContent(t, e), this.trigger("modalfill"), r ? n.insertBefore(t, r) : n.appendChild(t), this
                    }, t.prototype.empty = function() {
                        return this.trigger("beforemodalempty"), u.emptyEl(this.contentEl()), this.trigger("modalempty"), this
                    }, t.prototype.content = function(e) {
                        return "undefined" != typeof e && (this.content_ = e), this.content_
                    }, t
                }(d["default"]);
            v.prototype.options_ = {
                temporary: !0
            }, d["default"].registerComponent("ModalDialog", v), n["default"] = v
        }, {
            5: 5,
            81: 81,
            83: 83
        }],
        51: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(5),
                u = o(l),
                c = e(94),
                p = o(c),
                f = e(95),
                d = o(f),
                h = e(82),
                y = r(h),
                v = e(81),
                g = r(v),
                m = e(83),
                b = r(m),
                _ = e(85),
                T = r(_),
                w = e(78),
                C = r(w),
                E = e(86),
                k = o(E),
                x = e(91),
                S = o(x),
                O = e(90),
                j = e(79),
                P = e(89),
                M = r(P),
                A = e(44),
                N = o(A),
                I = e(46),
                D = o(I),
                R = e(97),
                L = o(R),
                F = e(88),
                H = e(87),
                B = o(H),
                V = e(69),
                q = o(V),
                W = e(50),
                z = o(W),
                U = e(62),
                $ = o(U),
                X = e(63),
                Y = o(X),
                G = e(76),
                K = o(G);
            e(61), e(59), e(55), e(68), e(45), e(1), e(4), e(8), e(41), e(71), e(60);
            var J = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "ratechange", "volumechange", "texttrackchange"],
                Z = function(e) {
                    function t(n, r, o) {
                        if (i(this, t), n.id = n.id || "vjs_video_" + T.newGUID(), r = (0, F.assign)(t.getTagSettings(n), r), r.initChildren = !1, r.createEl = !1, r.reportTouchActivity = !1, !r.language)
                            if ("function" == typeof n.closest) {
                                var s = n.closest("[lang]");
                                s && (r.language = s.getAttribute("lang"))
                            } else
                                for (var l = n; l && 1 === l.nodeType;) {
                                    if (g.getElAttributes(l).hasOwnProperty("lang")) {
                                        r.language = l.getAttribute("lang");
                                        break
                                    }
                                    l = l.parentNode
                                }
                        var u = a(this, e.call(this, null, r, o));
                        if (!u.options_ || !u.options_.techOrder || !u.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                        u.tag = n, u.tagAttributes = n && g.getElAttributes(n), u.language(u.options_.language), r.languages ? ! function() {
                            var e = {};
                            Object.getOwnPropertyNames(r.languages).forEach(function(t) {
                                e[t.toLowerCase()] = r.languages[t]
                            }), u.languages_ = e
                        }() : u.languages_ = t.prototype.options_.languages, u.cache_ = {}, u.poster_ = r.poster || "", u.controls_ = !!r.controls, n.controls = !1, u.scrubbing_ = !1, u.el_ = u.createEl();
                        var c = (0, B["default"])(u.options_);
                        return r.plugins && ! function() {
                            var e = r.plugins;
                            Object.getOwnPropertyNames(e).forEach(function(t) {
                                "function" == typeof this[t] ? this[t](e[t]) : k["default"].error("Unable to find plugin:", t)
                            }, u)
                        }(), u.options_.playerOptions = c, u.initChildren(), u.isAudio("audio" === n.nodeName.toLowerCase()), u.controls() ? u.addClass("vjs-controls-enabled") : u.addClass("vjs-controls-disabled"), u.el_.setAttribute("role", "region"), u.isAudio() ? u.el_.setAttribute("aria-label", "audio player") : u.el_.setAttribute("aria-label", "video player"), u.isAudio() && u.addClass("vjs-audio"), u.flexNotSupported_() && u.addClass("vjs-no-flex"), C.IS_IOS || u.addClass("vjs-workinghover"), t.players[u.id_] = u, u.userActive(!0), u.reportUserActivity(), u.listenForUserActivity_(), u.on("fullscreenchange", u.handleFullscreenChange_), u.on("stageclick", u.handleStageClick_), u
                    }
                    return s(t, e), t.prototype.dispose = function() {
                        this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && this.styleEl_.parentNode.removeChild(this.styleEl_), t.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && this.tech_.dispose(), e.prototype.dispose.call(this)
                    }, t.prototype.createEl = function() {
                        var t = this.tag,
                            n = void 0,
                            r = this.playerElIngest_ = t.parentNode && t.parentNode.hasAttribute && t.parentNode.hasAttribute("data-vjs-player");
                        n = r ? this.el_ = t.parentNode : this.el_ = e.prototype.createEl.call(this, "div"), t.removeAttribute("width"), t.removeAttribute("height");
                        var o = g.getElAttributes(t);
                        if (Object.getOwnPropertyNames(o).forEach(function(e) {
                                "class" === e ? n.className += " " + o[e] : n.setAttribute(e, o[e])
                            }), t.playerId = t.id, t.id += "_html5_api", t.className = "vjs-tech", t.player = n.player = this, this.addClass("vjs-paused"), d["default"].VIDEOJS_NO_DYNAMIC_STYLE !== !0) {
                            this.styleEl_ = M.createStyleElement("vjs-styles-dimensions");
                            var i = g.$(".vjs-styles-defaults"),
                                a = g.$("head");
                            a.insertBefore(this.styleEl_, i ? i.nextSibling : a.firstChild)
                        }
                        this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                        for (var s = t.getElementsByTagName("a"), l = 0; l < s.length; l++) {
                            var u = s.item(l);
                            g.addElClass(u, "vjs-hidden"), u.setAttribute("hidden", "hidden")
                        }
                        return t.initNetworkState_ = t.networkState, t.parentNode && !r && t.parentNode.insertBefore(n, t), g.insertElFirst(t, n), this.children_.unshift(t), this.el_ = n, n
                    }, t.prototype.width = function(e) {
                        return this.dimension("width", e)
                    }, t.prototype.height = function(e) {
                        return this.dimension("height", e)
                    }, t.prototype.dimension = function(e, t) {
                        var n = e + "_";
                        if (void 0 === t) return this[n] || 0;
                        if ("" === t) this[n] = void 0;
                        else {
                            var r = parseFloat(t);
                            if (isNaN(r)) return k["default"].error('Improper value "' + t + '" supplied for for ' + e), this;
                            this[n] = r
                        }
                        return this.updateStyleEl_(), this
                    }, t.prototype.fluid = function(e) {
                        return void 0 === e ? !!this.fluid_ : (this.fluid_ = !!e, e ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), void this.updateStyleEl_())
                    }, t.prototype.aspectRatio = function(e) {
                        if (void 0 === e) return this.aspectRatio_;
                        if (!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                        this.aspectRatio_ = e, this.fluid(!0), this.updateStyleEl_()
                    }, t.prototype.updateStyleEl_ = function() {
                        if (d["default"].VIDEOJS_NO_DYNAMIC_STYLE === !0) {
                            var e = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                                t = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                                n = this.tech_ && this.tech_.el();
                            return void(n && (e >= 0 && (n.width = e), t >= 0 && (n.height = t)))
                        }
                        var r = void 0,
                            o = void 0,
                            i = void 0,
                            a = void 0;
                        i = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
                        var s = i.split(":"),
                            l = s[1] / s[0];
                        r = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / l : this.videoWidth() || 300, o = void 0 !== this.height_ ? this.height_ : r * l, a = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(a), M.setTextContent(this.styleEl_, "\n      ." + a + " {\n        width: " + r + "px;\n        height: " + o + "px;\n      }\n\n      ." + a + ".vjs-fluid {\n        padding-top: " + 100 * l + "%;\n      }\n    ")
                    }, t.prototype.loadTech_ = function(e, t) {
                        var n = this;
                        this.tech_ && this.unloadTech_(), "Html5" !== e && this.tag && ($["default"].getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = e, this.isReady_ = !1;
                        var r = (0, F.assign)({
                            source: t,
                            nativeControlsForTouch: this.options_.nativeControlsForTouch,
                            playerId: this.id(),
                            techId: this.id() + "_" + e + "_api",
                            videoTracks: this.videoTracks_,
                            textTracks: this.textTracks_,
                            audioTracks: this.audioTracks_,
                            autoplay: this.options_.autoplay,
                            preload: this.options_.preload,
                            loop: this.options_.loop,
                            muted: this.options_.muted,
                            poster: this.poster(),
                            language: this.language(),
                            playerElIngest: this.playerElIngest_ || !1,
                            "vtt.js": this.options_["vtt.js"]
                        }, this.options_[e.toLowerCase()]);
                        this.tag && (r.tag = this.tag), t && (this.currentType_ = t.type, t.src === this.cache_.src && this.cache_.currentTime > 0 && (r.startTime = this.cache_.currentTime), this.cache_.sources = null, this.cache_.source = t, this.cache_.src = t.src);
                        var o = $["default"].getTech(e);
                        o || (o = u["default"].getComponent(e)), this.tech_ = new o(r), this.tech_.ready(b.bind(this, this.handleTechReady_), !0), q["default"].jsonToTextTracks(this.textTracksJson_ || [], this.tech_), J.forEach(function(e) {
                            n.on(n.tech_, e, n["handleTech" + (0, S["default"])(e) + "_"])
                        }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "canplay", this.handleTechCanPlay_), this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_), this.on(this.tech_, "playing", this.handleTechPlaying_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "seeked", this.handleTechSeeked_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === e && this.tag || g.insertElFirst(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                    }, t.prototype.unloadTech_ = function() {
                        this.videoTracks_ = this.videoTracks(), this.textTracks_ = this.textTracks(), this.audioTracks_ = this.audioTracks(), this.textTracksJson_ = q["default"].textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1
                    }, t.prototype.tech = function(e) {
                        if (e && e.IWillNotUseThisInPlugins) return this.tech_;
                        var t = "\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    ";
                        throw d["default"].alert(t), new Error(t)
                    }, t.prototype.addTechControlsListeners_ = function() {
                        this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                    }, t.prototype.removeTechControlsListeners_ = function() {
                        this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
                    }, t.prototype.handleTechReady_ = function() {
                        if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) {
                            try {
                                delete this.tag.poster
                            } catch (e) {
                                (0, k["default"])("deleting tag.poster throws in some browsers", e)
                            }
                            this.play()
                        }
                    }, t.prototype.handleTechLoadStart_ = function() {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay"))
                    }, t.prototype.hasStarted = function(e) {
                        return void 0 !== e ? (this.hasStarted_ !== e && (this.hasStarted_ = e, e ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")), this) : !!this.hasStarted_
                    }, t.prototype.handleTechPlay_ = function() {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                    }, t.prototype.handleTechWaiting_ = function() {
                        var e = this;
                        this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function() {
                            return e.removeClass("vjs-waiting")
                        })
                    }, t.prototype.handleTechCanPlay_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("canplay")
                    }, t.prototype.handleTechCanPlayThrough_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                    }, t.prototype.handleTechPlaying_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("playing")
                    }, t.prototype.handleTechSeeking_ = function() {
                        this.addClass("vjs-seeking"), this.trigger("seeking")
                    }, t.prototype.handleTechSeeked_ = function() {
                        this.removeClass("vjs-seeking"), this.trigger("seeked")
                    }, t.prototype.handleTechFirstPlay_ = function() {
                        this.options_.starttime && (k["default"].warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
                    }, t.prototype.handleTechPause_ = function() {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                    }, t.prototype.handleTechEnded_ = function() {
                        this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                    }, t.prototype.handleTechDurationChange_ = function() {
                        this.duration(this.techGet_("duration"))
                    }, t.prototype.handleTechClick_ = function(e) {
                        0 === e.button && this.controls() && (this.paused() ? this.play() : this.pause())
                    }, t.prototype.handleTechTap_ = function() {
                        this.userActive(!this.userActive())
                    }, t.prototype.handleTechTouchStart_ = function() {
                        this.userWasActive = this.userActive()
                    }, t.prototype.handleTechTouchMove_ = function() {
                        this.userWasActive && this.reportUserActivity()
                    }, t.prototype.handleTechTouchEnd_ = function(e) {
                        e.preventDefault()
                    }, t.prototype.handleFullscreenChange_ = function() {
                        this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                    }, t.prototype.handleStageClick_ = function() {
                        this.reportUserActivity()
                    }, t.prototype.handleTechFullscreenChange_ = function(e, t) {
                        t && this.isFullscreen(t.isFullscreen), this.trigger("fullscreenchange")
                    }, t.prototype.handleTechError_ = function() {
                        var e = this.tech_.error();
                        this.error(e)
                    }, t.prototype.handleTechTextData_ = function() {
                        var e = null;
                        arguments.length > 1 && (e = arguments[1]), this.trigger("textdata", e)
                    }, t.prototype.getCache = function() {
                        return this.cache_
                    }, t.prototype.techCall_ = function(e, t) {
                        if (this.tech_ && !this.tech_.isReady_) this.tech_.ready(function() {
                            this[e](t)
                        }, !0);
                        else try {
                            this.tech_ && this.tech_[e](t)
                        } catch (n) {
                            throw (0, k["default"])(n), n
                        }
                    }, t.prototype.techGet_ = function(e) {
                        if (this.tech_ && this.tech_.isReady_) try {
                            return this.tech_[e]()
                        } catch (t) {
                            throw void 0 === this.tech_[e] ? (0, k["default"])("Video.js: " + e + " method not defined for " + this.techName_ + " playback technology.", t) : "TypeError" === t.name ? ((0, k["default"])("Video.js: " + e + " unavailable on " + this.techName_ + " playback technology element.", t), this.tech_.isReady_ = !1) : (0, k["default"])(t), t
                        }
                    }, t.prototype.play = function() {
                        return this.src() || this.currentSrc() ? this.techCall_("play") : this.tech_.one("loadstart", function() {
                            this.play()
                        }), this
                    }, t.prototype.pause = function() {
                        return this.techCall_("pause"), this
                    }, t.prototype.paused = function() {
                        return this.techGet_("paused") !== !1
                    }, t.prototype.scrubbing = function(e) {
                        return void 0 !== e ? (this.scrubbing_ = !!e, e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing"), this) : this.scrubbing_
                    }, t.prototype.currentTime = function(e) {
                        return void 0 !== e ? (this.techCall_("setCurrentTime", e), this) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
                    }, t.prototype.duration = function(e) {
                        return void 0 === e ? this.cache_.duration || 0 : (e = parseFloat(e) || 0, e < 0 && (e = 1 / 0), e !== this.cache_.duration && (this.cache_.duration = e, e === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange")), this)
                    }, t.prototype.remainingTime = function() {
                        return this.duration() - this.currentTime()
                    }, t.prototype.buffered = function n() {
                        var n = this.techGet_("buffered");
                        return n && n.length || (n = (0, O.createTimeRange)(0, 0)), n
                    }, t.prototype.bufferedPercent = function() {
                        return (0, j.bufferedPercent)(this.buffered(), this.duration())
                    }, t.prototype.bufferedEnd = function() {
                        var e = this.buffered(),
                            t = this.duration(),
                            n = e.end(e.length - 1);
                        return n > t && (n = t), n
                    }, t.prototype.volume = function(e) {
                        var t = void 0;
                        return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall_("setVolume", t), this) : (t = parseFloat(this.techGet_("volume")), isNaN(t) ? 1 : t)
                    }, t.prototype.muted = function(e) {
                        return void 0 !== e ? (this.techCall_("setMuted", e), this) : this.techGet_("muted") || !1
                    }, t.prototype.supportsFullScreen = function() {
                        return this.techGet_("supportsFullScreen") || !1
                    }, t.prototype.isFullscreen = function(e) {
                        return void 0 !== e ? (this.isFullscreen_ = !!e, this) : !!this.isFullscreen_
                    }, t.prototype.requestFullscreen = function() {
                        var e = N["default"];
                        return this.isFullscreen(!0), e.requestFullscreen ? (y.on(p["default"], e.fullscreenchange, b.bind(this, function t(n) {
                            this.isFullscreen(p["default"][e.fullscreenElement]), this.isFullscreen() === !1 && y.off(p["default"], e.fullscreenchange, t), this.trigger("fullscreenchange")
                        })), this.el_[e.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
                    }, t.prototype.exitFullscreen = function() {
                        var e = N["default"];
                        return this.isFullscreen(!1), e.requestFullscreen ? p["default"][e.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
                    }, t.prototype.enterFullWindow = function() {
                        this.isFullWindow = !0, this.docOrigOverflow = p["default"].documentElement.style.overflow, y.on(p["default"], "keydown", b.bind(this, this.fullWindowOnEscKey)), p["default"].documentElement.style.overflow = "hidden", g.addElClass(p["default"].body, "vjs-full-window"), this.trigger("enterFullWindow")
                    }, t.prototype.fullWindowOnEscKey = function(e) {
                        27 === e.keyCode && (this.isFullscreen() === !0 ? this.exitFullscreen() : this.exitFullWindow())
                    }, t.prototype.exitFullWindow = function() {
                        this.isFullWindow = !1, y.off(p["default"], "keydown", this.fullWindowOnEscKey), p["default"].documentElement.style.overflow = this.docOrigOverflow, g.removeElClass(p["default"].body, "vjs-full-window"), this.trigger("exitFullWindow")
                    }, t.prototype.canPlayType = function(e) {
                        for (var t = void 0, n = 0, r = this.options_.techOrder; n < r.length; n++) {
                            var o = (0, S["default"])(r[n]),
                                i = $["default"].getTech(o);
                            if (i || (i = u["default"].getComponent(o)), i) {
                                if (i.isSupported() && (t = i.canPlayType(e))) return t
                            } else k["default"].error('The "' + o + '" tech is undefined. Skipped browser support check for that tech.')
                        }
                        return ""
                    }, t.prototype.selectSource = function(e) {
                        var t = this,
                            n = this.options_.techOrder.map(S["default"]).map(function(e) {
                                return [e, $["default"].getTech(e) || u["default"].getComponent(e)]
                            }).filter(function(e) {
                                var t = e[0],
                                    n = e[1];
                                return n ? n.isSupported() : (k["default"].error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                            }),
                            r = function(e, t, n) {
                                var r = void 0;
                                return e.some(function(e) {
                                    return t.some(function(t) {
                                        if (r = n(e, t)) return !0
                                    })
                                }), r
                            },
                            o = void 0,
                            i = function(e) {
                                return function(t, n) {
                                    return e(n, t)
                                }
                            },
                            a = function(e, n) {
                                var r = e[0],
                                    o = e[1];
                                if (o.canPlaySource(n, t.options_[r.toLowerCase()])) return {
                                    source: n,
                                    tech: r
                                }
                            };
                        return o = this.options_.sourceOrder ? r(e, n, i(a)) : r(n, e, a), o || !1
                    }, t.prototype.src = function(e) {
                        if (void 0 === e) return this.techGet_("src");
                        var t = $["default"].getTech(this.techName_);
                        return t || (t = u["default"].getComponent(this.techName_)), Array.isArray(e) ? this.sourceList_(e) : "string" == typeof e ? this.src({
                            src: e
                        }) : e instanceof Object && (e.type && !t.canPlaySource(e, this.options_[this.techName_.toLowerCase()]) ? this.sourceList_([e]) : (this.cache_.sources = null, this.cache_.source = e, this.cache_.src = e.src, this.currentType_ = e.type || "", this.ready(function() {
                            t.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), "auto" === this.options_.preload && this.load(), this.options_.autoplay && this.play()
                        }, !0))), this
                    }, t.prototype.sourceList_ = function(e) {
                        var t = this.selectSource(e);
                        t ? (t.tech === this.techName_ ? this.src(t.source) : this.loadTech_(t.tech, t.source), this.cache_.sources = e) : (this.setTimeout(function() {
                            this.error({
                                code: 4,
                                message: this.localize(this.options_.notSupportedMessage)
                            })
                        }, 0), this.triggerReady())
                    }, t.prototype.load = function() {
                        return this.techCall_("load"), this
                    }, t.prototype.reset = function() {
                        return this.loadTech_((0, S["default"])(this.options_.techOrder[0]), null), this.techCall_("reset"), this
                    }, t.prototype.currentSources = function() {
                        var e = this.currentSource(),
                            t = [];
                        return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t
                    }, t.prototype.currentSource = function() {
                        var e = {},
                            t = this.currentSrc();
                        return t && (e.src = t), this.cache_.source || e
                    }, t.prototype.currentSrc = function() {
                        return this.techGet_("currentSrc") || this.cache_.src || ""
                    }, t.prototype.currentType = function() {
                        return this.currentType_ || ""
                    }, t.prototype.preload = function(e) {
                        return void 0 !== e ? (this.techCall_("setPreload", e), this.options_.preload = e, this) : this.techGet_("preload")
                    }, t.prototype.autoplay = function(e) {
                        return void 0 !== e ? (this.techCall_("setAutoplay", e), this.options_.autoplay = e, this) : this.techGet_("autoplay", e)
                    }, t.prototype.loop = function(e) {
                        return void 0 !== e ? (this.techCall_("setLoop", e), this.options_.loop = e, this) : this.techGet_("loop")
                    }, t.prototype.poster = function(e) {
                        return void 0 === e ? this.poster_ : (e || (e = ""), this.poster_ = e, this.techCall_("setPoster", e), this.trigger("posterchange"), this)
                    }, t.prototype.handleTechPosterChange_ = function() {
                        !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "", this.trigger("posterchange"))
                    }, t.prototype.controls = function(e) {
                        return void 0 !== e ? (e = !!e, this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), e ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_())), this) : !!this.controls_
                    }, t.prototype.usingNativeControls = function(e) {
                        return void 0 !== e ? (e = !!e, this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, e ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))), this) : !!this.usingNativeControls_
                    }, t.prototype.error = function(e) {
                        return void 0 === e ? this.error_ || null : null === e ? (this.error_ = e, this.removeClass("vjs-error"), this.errorDisplay && this.errorDisplay.close(), this) : (this.error_ = new D["default"](e), this.addClass("vjs-error"), k["default"].error("(CODE:" + this.error_.code + " " + D["default"].errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this.trigger("error"), this)
                    }, t.prototype.reportUserActivity = function(e) {
                        this.userActivity_ = !0
                    }, t.prototype.userActive = function(e) {
                        return void 0 !== e ? (e = !!e, e !== this.userActive_ && (this.userActive_ = e, e ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.userActivity_ = !1, this.tech_ && this.tech_.one("mousemove", function(e) {
                            e.stopPropagation(), e.preventDefault();
                        }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive"))), this) : this.userActive_
                    }, t.prototype.listenForUserActivity_ = function() {
                        var e = void 0,
                            t = void 0,
                            n = void 0,
                            r = b.bind(this, this.reportUserActivity),
                            o = function(e) {
                                e.screenX === t && e.screenY === n || (t = e.screenX, n = e.screenY, r())
                            },
                            i = function() {
                                r(), this.clearInterval(e), e = this.setInterval(r, 250)
                            },
                            a = function(t) {
                                r(), this.clearInterval(e)
                            };
                        this.on("mousedown", i), this.on("mousemove", o), this.on("mouseup", a), this.on("keydown", r), this.on("keyup", r);
                        var s = void 0;
                        this.setInterval(function() {
                            if (this.userActivity_) {
                                this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(s);
                                var e = this.options_.inactivityTimeout;
                                e > 0 && (s = this.setTimeout(function() {
                                    this.userActivity_ || this.userActive(!1)
                                }, e))
                            }
                        }, 250)
                    }, t.prototype.playbackRate = function(e) {
                        return void 0 !== e ? (this.techCall_("setPlaybackRate", e), this) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : 1
                    }, t.prototype.isAudio = function(e) {
                        return void 0 !== e ? (this.isAudio_ = !!e, this) : !!this.isAudio_
                    }, t.prototype.videoTracks = function() {
                        return this.tech_ ? this.tech_.videoTracks() : (this.videoTracks_ = this.videoTracks_ || new K["default"], this.videoTracks_)
                    }, t.prototype.audioTracks = function() {
                        return this.tech_ ? this.tech_.audioTracks() : (this.audioTracks_ = this.audioTracks_ || new Y["default"], this.audioTracks_)
                    }, t.prototype.textTracks = function() {
                        if (this.tech_) return this.tech_.textTracks()
                    }, t.prototype.remoteTextTracks = function() {
                        if (this.tech_) return this.tech_.remoteTextTracks()
                    }, t.prototype.remoteTextTrackEls = function() {
                        if (this.tech_) return this.tech_.remoteTextTrackEls()
                    }, t.prototype.addTextTrack = function(e, t, n) {
                        if (this.tech_) return this.tech_.addTextTrack(e, t, n)
                    }, t.prototype.addRemoteTextTrack = function(e, t) {
                        if (this.tech_) return this.tech_.addRemoteTextTrack(e, t)
                    }, t.prototype.removeRemoteTextTrack = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.track,
                            n = void 0 === t ? arguments[0] : t;
                        if (this.tech_) return this.tech_.removeRemoteTextTrack(n)
                    }, t.prototype.videoWidth = function() {
                        return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                    }, t.prototype.videoHeight = function() {
                        return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                    }, t.prototype.language = function(e) {
                        return void 0 === e ? this.language_ : (this.language_ = String(e).toLowerCase(), this)
                    }, t.prototype.languages = function() {
                        return (0, B["default"])(t.prototype.options_.languages, this.languages_)
                    }, t.prototype.toJSON = function() {
                        var e = (0, B["default"])(this.options_),
                            t = e.tracks;
                        e.tracks = [];
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r = (0, B["default"])(r), r.player = void 0, e.tracks[n] = r
                        }
                        return e
                    }, t.prototype.createModal = function(e, t) {
                        var n = this;
                        t = t || {}, t.content = e || "";
                        var r = new z["default"](this, t);
                        return this.addChild(r), r.on("dispose", function() {
                            n.removeChild(r)
                        }), r.open()
                    }, t.getTagSettings = function(e) {
                        var t = {
                                sources: [],
                                tracks: []
                            },
                            n = g.getElAttributes(e),
                            r = n["data-setup"];
                        if (g.hasElClass(e, "vjs-fluid") && (n.fluid = !0), null !== r) {
                            var o = (0, L["default"])(r || "{}"),
                                i = o[0],
                                a = o[1];
                            i && k["default"].error(i), (0, F.assign)(n, a)
                        }
                        if ((0, F.assign)(t, n), e.hasChildNodes())
                            for (var s = e.childNodes, l = 0, u = s.length; l < u; l++) {
                                var c = s[l],
                                    p = c.nodeName.toLowerCase();
                                "source" === p ? t.sources.push(g.getElAttributes(c)) : "track" === p && t.tracks.push(g.getElAttributes(c))
                            }
                        return t
                    }, t.prototype.flexNotSupported_ = function() {
                        var e = p["default"].createElement("i");
                        return !("flexBasis" in e.style || "webkitFlexBasis" in e.style || "mozFlexBasis" in e.style || "msFlexBasis" in e.style || "msFlexOrder" in e.style)
                    }, t
                }(u["default"]);
            Z.players = {};
            var Q = d["default"].navigator;
            Z.prototype.options_ = {
                techOrder: ["html5", "flash"],
                html5: {},
                flash: {},
                defaultVolume: 0,
                inactivityTimeout: 2e3,
                playbackRates: [],
                children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
                language: Q && (Q.languages && Q.languages[0] || Q.userLanguage || Q.language) || "en",
                languages: {},
                notSupportedMessage: "No compatible source was found for this media."
            }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function(e) {
                Z.prototype[e] = function() {
                    return this.techGet_(e)
                }
            }), J.forEach(function(e) {
                Z.prototype["handleTech" + (0, S["default"])(e) + "_"] = function() {
                    return this.trigger(e)
                }
            }), u["default"].registerComponent("Player", Z), n["default"] = Z
        }, {
            1: 1,
            4: 4,
            41: 41,
            44: 44,
            45: 45,
            46: 46,
            5: 5,
            50: 50,
            55: 55,
            59: 59,
            60: 60,
            61: 61,
            62: 62,
            63: 63,
            68: 68,
            69: 69,
            71: 71,
            76: 76,
            78: 78,
            79: 79,
            8: 8,
            81: 81,
            82: 82,
            83: 83,
            85: 85,
            86: 86,
            87: 87,
            88: 88,
            89: 89,
            90: 90,
            91: 91,
            94: 94,
            95: 95,
            97: 97
        }],
        52: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            n.__esModule = !0;
            var o = e(51),
                i = r(o),
                a = function(e, t) {
                    i["default"].prototype[e] = t
                };
            n["default"] = a
        }, {
            51: 51
        }],
        53: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(3),
                l = r(s),
                u = e(5),
                c = r(u),
                p = function(e) {
                    function t(n) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        o(this, t);
                        var a = i(this, e.call(this, n, r));
                        return a.update(), a
                    }
                    return a(t, e), t.prototype.update = function() {
                        var e = this.createPopup();
                        this.popup && this.removeChild(this.popup), this.popup = e, this.addChild(e), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                    }, t.prototype.createPopup = function() {}, t.prototype.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, t.prototype.buildCSSClass = function() {
                        var t = "vjs-menu-button";
                        return t += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + t + " " + e.prototype.buildCSSClass.call(this)
                    }, t
                }(l["default"]);
            c["default"].registerComponent("PopupButton", p), n["default"] = p
        }, {
            3: 3,
            5: 5
        }],
        54: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(5),
                u = o(l),
                c = e(81),
                p = r(c),
                f = e(83),
                d = r(f),
                h = e(82),
                y = r(h),
                v = function(e) {
                    function t() {
                        return i(this, t), a(this, e.apply(this, arguments))
                    }
                    return s(t, e), t.prototype.addItem = function(e) {
                        this.addChild(e), e.on("click", d.bind(this, function() {
                            this.unlockShowing()
                        }))
                    }, t.prototype.createEl = function() {
                        var t = this.options_.contentElType || "ul";
                        this.contentEl_ = p.createEl(t, {
                            className: "vjs-menu-content"
                        });
                        var n = e.prototype.createEl.call(this, "div", {
                            append: this.contentEl_,
                            className: "vjs-menu"
                        });
                        return n.appendChild(this.contentEl_), y.on(n, "click", function(e) {
                            e.preventDefault(), e.stopImmediatePropagation()
                        }), n
                    }, t
                }(u["default"]);
            u["default"].registerComponent("Popup", v), n["default"] = v
        }, {
            5: 5,
            81: 81,
            82: 82,
            83: 83
        }],
        55: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(3),
                u = o(l),
                c = e(5),
                p = o(c),
                f = e(83),
                d = r(f),
                h = e(81),
                y = r(h),
                v = e(78),
                g = r(v),
                m = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.update(), n.on("posterchange", d.bind(o, o.update)), o
                    }
                    return s(t, e), t.prototype.dispose = function() {
                        this.player().off("posterchange", this.update), e.prototype.dispose.call(this)
                    }, t.prototype.createEl = function() {
                        var e = y.createEl("div", {
                            className: "vjs-poster",
                            tabIndex: -1
                        });
                        return g.BACKGROUND_SIZE_SUPPORTED || (this.fallbackImg_ = y.createEl("img"), e.appendChild(this.fallbackImg_)), e
                    }, t.prototype.update = function(e) {
                        var t = this.player().poster();
                        this.setSrc(t), t ? this.show() : this.hide()
                    }, t.prototype.setSrc = function(e) {
                        if (this.fallbackImg_) this.fallbackImg_.src = e;
                        else {
                            var t = "";
                            e && (t = 'url("' + e + '")'), this.el_.style.backgroundImage = t
                        }
                    }, t.prototype.handleClick = function(e) {
                        this.player_.controls() && (this.player_.paused() ? this.player_.play() : this.player_.pause())
                    }, t
                }(u["default"]);
            p["default"].registerComponent("PosterImage", m), n["default"] = m
        }, {
            3: 3,
            5: 5,
            78: 78,
            81: 81,
            83: 83
        }],
        56: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function i(e, t) {
                t && (y = t), d["default"].setTimeout(v, e)
            }
            n.__esModule = !0, n.hasLoaded = n.autoSetupTimeout = n.autoSetup = void 0;
            var a = e(81),
                s = o(a),
                l = e(82),
                u = o(l),
                c = e(94),
                p = r(c),
                f = e(95),
                d = r(f),
                h = !1,
                y = void 0,
                v = function() {
                    if (s.isReal()) {
                        var e = p["default"].getElementsByTagName("video"),
                            t = p["default"].getElementsByTagName("audio"),
                            n = [];
                        if (e && e.length > 0)
                            for (var r = 0, o = e.length; r < o; r++) n.push(e[r]);
                        if (t && t.length > 0)
                            for (var a = 0, l = t.length; a < l; a++) n.push(t[a]);
                        if (n && n.length > 0)
                            for (var u = 0, c = n.length; u < c; u++) {
                                var f = n[u];
                                if (!f || !f.getAttribute) {
                                    i(1);
                                    break
                                }
                                if (void 0 === f.player) {
                                    var d = f.getAttribute("data-setup");
                                    null !== d && y(f)
                                }
                            } else h || i(1)
                    }
                };
            s.isReal() && "complete" === p["default"].readyState ? h = !0 : u.one(d["default"], "load", function() {
                h = !0
            });
            var g = function() {
                return h
            };
            n.autoSetup = v, n.autoSetupTimeout = i, n.hasLoaded = g
        }, {
            81: 81,
            82: 82,
            94: 94,
            95: 95
        }],
        57: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(5),
                u = o(l),
                c = e(81),
                p = r(c),
                f = e(88),
                d = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return o.bar = o.getChild(o.options_.barName), o.vertical(!!o.options_.vertical), o.on("mousedown", o.handleMouseDown), o.on("touchstart", o.handleMouseDown), o.on("focus", o.handleFocus), o.on("blur", o.handleBlur), o.on("click", o.handleClick), o.on(n, "controlsvisible", o.update), o.on(n, o.playerEvent, o.update), o
                    }
                    return s(t, e), t.prototype.createEl = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return n.className = n.className + " vjs-slider", n = (0, f.assign)({
                            tabIndex: 0
                        }, n), r = (0, f.assign)({
                            role: "slider",
                            "aria-valuenow": 0,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            tabIndex: 0
                        }, r), e.prototype.createEl.call(this, t, n, r)
                    }, t.prototype.handleMouseDown = function(e) {
                        var t = this.bar.el_.ownerDocument;
                        e.preventDefault(), p.blockTextSelection(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchmove", this.handleMouseMove), this.on(t, "touchend", this.handleMouseUp), this.handleMouseMove(e)
                    }, t.prototype.handleMouseMove = function(e) {}, t.prototype.handleMouseUp = function() {
                        var e = this.bar.el_.ownerDocument;
                        p.unblockTextSelection(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.update()
                    }, t.prototype.update = function() {
                        if (this.el_) {
                            var e = this.getPercent(),
                                t = this.bar;
                            if (t) {
                                ("number" != typeof e || e !== e || e < 0 || e === 1 / 0) && (e = 0);
                                var n = (100 * e).toFixed(2) + "%";
                                this.vertical() ? t.el().style.height = n : t.el().style.width = n
                            }
                        }
                    }, t.prototype.calculateDistance = function(e) {
                        var t = p.getPointerPosition(this.el_, e);
                        return this.vertical() ? t.y : t.x
                    }, t.prototype.handleFocus = function() {
                        this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                    }, t.prototype.handleKeyPress = function(e) {
                        37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepBack()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepForward())
                    }, t.prototype.handleBlur = function() {
                        this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                    }, t.prototype.handleClick = function(e) {
                        e.stopImmediatePropagation(), e.preventDefault()
                    }, t.prototype.vertical = function(e) {
                        return void 0 === e ? this.vertical_ || !1 : (this.vertical_ = !!e, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal"), this)
                    }, t
                }(u["default"]);
            u["default"].registerComponent("Slider", d), n["default"] = d
        }, {
            5: 5,
            81: 81,
            88: 88
        }],
        58: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e.streamingFormats = {
                    "rtmp/mp4": "MP4",
                    "rtmp/flv": "FLV"
                }, e.streamFromParts = function(e, t) {
                    return e + "&" + t
                }, e.streamToParts = function(e) {
                    var t = {
                        connection: "",
                        stream: ""
                    };
                    if (!e) return t;
                    var n = e.search(/&(?!\w+=)/),
                        r = void 0;
                    return n !== -1 ? r = n + 1 : (n = r = e.lastIndexOf("/") + 1, 0 === n && (n = r = e.length)), t.connection = e.substring(0, n), t.stream = e.substring(r, e.length), t
                }, e.isStreamingType = function(t) {
                    return t in e.streamingFormats
                }, e.RTMP_RE = /^rtmp[set]?:\/\//i, e.isStreamingSrc = function(t) {
                    return e.RTMP_RE.test(t)
                }, e.rtmpSourceHandler = {}, e.rtmpSourceHandler.canPlayType = function(t) {
                    return e.isStreamingType(t) ? "maybe" : ""
                }, e.rtmpSourceHandler.canHandleSource = function(t, n) {
                    var r = e.rtmpSourceHandler.canPlayType(t.type);
                    return r ? r : e.isStreamingSrc(t.src) ? "maybe" : ""
                }, e.rtmpSourceHandler.handleSource = function(t, n, r) {
                    var o = e.streamToParts(t.src);
                    n.setRtmpConnection(o.connection), n.setRtmpStream(o.stream)
                }, e.registerSourceHandler(e.rtmpSourceHandler), e
            }
            n.__esModule = !0, n["default"] = r
        }, {}],
        59: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function l(e) {
                var t = e.charAt(0).toUpperCase() + e.slice(1);
                x["set" + t] = function(t) {
                    return this.el_.vjs_setProperty(e, t)
                }
            }

            function u(e) {
                x[e] = function() {
                    return this.el_.vjs_getProperty(e)
                }
            }
            n.__esModule = !0;
            for (var c = e(62), p = o(c), f = e(81), d = r(f), h = e(92), y = r(h), v = e(90), g = e(58), m = o(g), b = e(5), _ = o(b), T = e(95), w = o(T), C = e(88), E = w["default"].navigator, k = function(e) {
                    function t(n, r) {
                        i(this, t);
                        var o = a(this, e.call(this, n, r));
                        return n.source && o.ready(function() {
                            this.setSource(n.source)
                        }, !0), n.startTime && o.ready(function() {
                            this.load(), this.play(), this.currentTime(n.startTime)
                        }, !0), w["default"].videojs = w["default"].videojs || {}, w["default"].videojs.Flash = w["default"].videojs.Flash || {}, w["default"].videojs.Flash.onReady = t.onReady, w["default"].videojs.Flash.onEvent = t.onEvent, w["default"].videojs.Flash.onError = t.onError, o.on("seeked", function() {
                            this.lastSeekTarget_ = void 0
                        }), o
                    }
                    return s(t, e), t.prototype.createEl = function() {
                        var e = this.options_;
                        if (!e.swf) {
                            var n = "5.1.0";
                            e.swf = "//vjs.zencdn.net/swf/" + n + "/video-js.swf"
                        }
                        var r = e.techId,
                            o = (0, C.assign)({
                                readyFunction: "videojs.Flash.onReady",
                                eventProxyFunction: "videojs.Flash.onEvent",
                                errorEventProxyFunction: "videojs.Flash.onError",
                                autoplay: e.autoplay,
                                preload: e.preload,
                                loop: e.loop,
                                muted: e.muted
                            }, e.flashVars),
                            i = (0, C.assign)({
                                wmode: "opaque",
                                bgcolor: "#000000"
                            }, e.params),
                            a = (0, C.assign)({
                                id: r,
                                name: r,
                                "class": "vjs-tech"
                            }, e.attributes);
                        return this.el_ = t.embed(e.swf, o, i, a), this.el_.tech = this, this.el_
                    }, t.prototype.play = function() {
                        this.ended() && this.setCurrentTime(0), this.el_.vjs_play()
                    }, t.prototype.pause = function() {
                        this.el_.vjs_pause()
                    }, t.prototype.src = function(e) {
                        return void 0 === e ? this.currentSrc() : this.setSrc(e)
                    }, t.prototype.setSrc = function(e) {
                        var t = this;
                        e = y.getAbsoluteURL(e), this.el_.vjs_src(e), this.autoplay() && this.setTimeout(function() {
                            return t.play()
                        }, 0)
                    }, t.prototype.seeking = function() {
                        return void 0 !== this.lastSeekTarget_
                    }, t.prototype.setCurrentTime = function(t) {
                        var n = this.seekable();
                        n.length && (t = t > n.start(0) ? t : n.start(0), t = t < n.end(n.length - 1) ? t : n.end(n.length - 1), this.lastSeekTarget_ = t, this.trigger("seeking"), this.el_.vjs_setProperty("currentTime", t), e.prototype.setCurrentTime.call(this))
                    }, t.prototype.currentTime = function() {
                        return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime")
                    }, t.prototype.currentSrc = function() {
                        return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc")
                    }, t.prototype.duration = function n() {
                        if (0 === this.readyState()) return NaN;
                        var n = this.el_.vjs_getProperty("duration");
                        return n >= 0 ? n : 1 / 0
                    }, t.prototype.load = function() {
                        this.el_.vjs_load()
                    }, t.prototype.poster = function() {
                        this.el_.vjs_getProperty("poster")
                    }, t.prototype.setPoster = function() {}, t.prototype.seekable = function() {
                        var e = this.duration();
                        return 0 === e ? (0, v.createTimeRange)() : (0, v.createTimeRange)(0, e)
                    }, t.prototype.buffered = function() {
                        var e = this.el_.vjs_getProperty("buffered");
                        return 0 === e.length ? (0, v.createTimeRange)() : (0, v.createTimeRange)(e[0][0], e[0][1])
                    }, t.prototype.supportsFullScreen = function() {
                        return !1
                    }, t.prototype.enterFullScreen = function() {
                        return !1
                    }, t
                }(p["default"]), x = k.prototype, S = "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","), O = "networkState,readyState,initialTime,startOffsetTime,paused,ended,videoWidth,videoHeight".split(","), j = 0; j < S.length; j++) u(S[j]), l(S[j]);
            for (var P = 0; P < O.length; P++) u(O[P]);
            k.isSupported = function() {
                return k.version()[0] >= 10
            }, p["default"].withSourceHandlers(k), k.nativeSourceHandler = {}, k.nativeSourceHandler.canPlayType = function(e) {
                return e in k.formats ? "maybe" : ""
            }, k.nativeSourceHandler.canHandleSource = function(e, t) {
                function n(e) {
                    var t = y.getFileExtension(e);
                    return t ? "video/" + t : ""
                }
                var r = void 0;
                return r = e.type ? e.type.replace(/;.*/, "").toLowerCase() : n(e.src), k.nativeSourceHandler.canPlayType(r)
            }, k.nativeSourceHandler.handleSource = function(e, t, n) {
                t.setSrc(e.src)
            }, k.nativeSourceHandler.dispose = function() {}, k.registerSourceHandler(k.nativeSourceHandler), k.formats = {
                "video/flv": "FLV",
                "video/x-flv": "FLV",
                "video/mp4": "MP4",
                "video/m4v": "MP4"
            }, k.onReady = function(e) {
                var t = d.getEl(e),
                    n = t && t.tech;
                n && n.el() && k.checkReady(n)
            }, k.checkReady = function(e) {
                e.el() && (e.el().vjs_getProperty ? e.triggerReady() : this.setTimeout(function() {
                    k.checkReady(e)
                }, 50))
            }, k.onEvent = function(e, t) {
                var n = d.getEl(e).tech,
                    r = Array.prototype.slice.call(arguments, 2);
                n.setTimeout(function() {
                    n.trigger(t, r)
                }, 1)
            }, k.onError = function(e, t) {
                var n = d.getEl(e).tech;
                return "srcnotfound" === t ? n.error(4) : void n.error("FLASH: " + t)
            }, k.version = function() {
                var e = "0,0,0";
                try {
                    e = new w["default"].ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                } catch (t) {
                    try {
                        E.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = (E.plugins["Shockwave Flash 2.0"] || E.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                    } catch (n) {}
                }
                return e.split(",")
            }, k.embed = function(e, t, n, r) {
                var o = k.getEmbedCode(e, t, n, r),
                    i = d.createEl("div", {
                        innerHTML: o
                    }).childNodes[0];
                return i
            }, k.getEmbedCode = function(e, t, n, r) {
                var o = '<object type="application/x-shockwave-flash" ',
                    i = "",
                    a = "",
                    s = "";
                return t && Object.getOwnPropertyNames(t).forEach(function(e) {
                    i += e + "=" + t[e] + "&amp;"
                }), n = (0, C.assign)({
                    movie: e,
                    flashvars: i,
                    allowScriptAccess: "always",
                    allowNetworking: "all"
                }, n), Object.getOwnPropertyNames(n).forEach(function(e) {
                    a += '<param name="' + e + '" value="' + n[e] + '" />'
                }), r = (0, C.assign)({
                    data: e,
                    width: "100%",
                    height: "100%"
                }, r), Object.getOwnPropertyNames(r).forEach(function(e) {
                    s += e + '="' + r[e] + '" '
                }), "" + o + s + ">" + a + "</object>"
            }, (0, m["default"])(k), _["default"].registerComponent("Flash", k), p["default"].registerTech("Flash", k), n["default"] = k
        }, {
            5: 5,
            58: 58,
            62: 62,
            81: 81,
            88: 88,
            90: 90,
            92: 92,
            95: 95
        }],
        60: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                return e.raw = t, e
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function l(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                c = i(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
                p = e(62),
                f = o(p),
                d = e(5),
                h = o(d),
                y = e(81),
                v = r(y),
                g = e(92),
                m = r(g),
                b = e(83),
                _ = r(b),
                T = e(86),
                w = o(T),
                C = e(98),
                E = o(C),
                k = e(78),
                x = r(k),
                S = e(94),
                O = o(S),
                j = e(95),
                P = o(j),
                M = e(88),
                A = e(87),
                N = o(A),
                I = e(91),
                D = o(I),
                R = function(e) {
                    function t(n, r) {
                        a(this, t);
                        var o = s(this, e.call(this, n, r)),
                            i = n.source,
                            l = !1;
                        if (i && (o.el_.currentSrc !== i.src || n.tag && 3 === n.tag.initNetworkState_) ? o.setSource(i) : o.handleLateInit_(o.el_), o.el_.hasChildNodes()) {
                            for (var u = o.el_.childNodes, p = u.length, f = []; p--;) {
                                var d = u[p],
                                    h = d.nodeName.toLowerCase();
                                "track" === h && (o.featuresNativeTextTracks ? (o.remoteTextTrackEls().addTrackElement_(d), o.remoteTextTracks().addTrack_(d.track), l || o.el_.hasAttribute("crossorigin") || !m.isCrossOrigin(d.src) || (l = !0)) : f.push(d))
                            }
                            for (var y = 0; y < f.length; y++) o.el_.removeChild(f[y])
                        }
                        var v = ["audio", "video"];
                        return v.forEach(function(e) {
                            var t = o.el()[e + "Tracks"],
                                n = o[e + "Tracks"](),
                                r = (0, D["default"])(e);
                            o["featuresNative" + r + "Tracks"] && t && t.addEventListener && (o["handle" + r + "TrackChange_"] = function(e) {
                                n.trigger({
                                    type: "change",
                                    target: n,
                                    currentTarget: n,
                                    srcElement: n
                                })
                            }, o["handle" + r + "TrackAdd_"] = function(e) {
                                return n.addTrack(e.track)
                            }, o["handle" + r + "TrackRemove_"] = function(e) {
                                return n.removeTrack(e.track)
                            }, t.addEventListener("change", o["handle" + r + "TrackChange_"]), t.addEventListener("addtrack", o["handle" + r + "TrackAdd_"]), t.addEventListener("removetrack", o["handle" + r + "TrackRemove_"]), o["removeOld" + r + "Tracks_"] = function(e) {
                                return o.removeOldTracks_(n, t)
                            }, o.on("loadstart", o["removeOld" + r + "Tracks_"]))
                        }), o.featuresNativeTextTracks && (l && w["default"].warn((0, E["default"])(c)), o.handleTextTrackChange_ = _.bind(o, o.handleTextTrackChange), o.handleTextTrackAdd_ = _.bind(o, o.handleTextTrackAdd), o.handleTextTrackRemove_ = _.bind(o, o.handleTextTrackRemove), o.proxyNativeTextTracks_()), (x.TOUCH_ENABLED || x.IS_IPHONE || x.IS_NATIVE_ANDROID) && n.nativeControlsForTouch === !0 && o.setControls(!0), o.proxyWebkitFullscreen_(), o.triggerReady(), o
                    }
                    return l(t, e), t.prototype.dispose = function() {
                        var n = this;
                        ["audio", "video", "text"].forEach(function(e) {
                            var t = (0, D["default"])(e),
                                r = n.el_[e + "Tracks"];
                            r && r.removeEventListener && (r.removeEventListener("change", n["handle" + t + "TrackChange_"]), r.removeEventListener("addtrack", n["handle" + t + "TrackAdd_"]), r.removeEventListener("removetrack", n["handle" + t + "TrackRemove_"])), r && n.off("loadstart", n["removeOld" + t + "Tracks_"])
                        }), t.disposeMediaElement(this.el_), e.prototype.dispose.call(this)
                    }, t.prototype.createEl = function() {
                        var e = this.options_.tag;
                        if (!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                            if (e) {
                                var n = e.cloneNode(!0);
                                e.parentNode && e.parentNode.insertBefore(n, e), t.disposeMediaElement(e), e = n
                            } else {
                                e = O["default"].createElement("video");
                                var r = this.options_.tag && v.getElAttributes(this.options_.tag),
                                    o = (0, N["default"])({}, r);
                                x.TOUCH_ENABLED && this.options_.nativeControlsForTouch === !0 || delete o.controls, v.setElAttributes(e, (0, M.assign)(o, {
                                    id: this.options_.techId,
                                    "class": "vjs-tech"
                                }))
                            }
                            e.playerId = this.options_.playerId
                        }
                        for (var i = ["autoplay", "preload", "loop", "muted"], a = i.length - 1; a >= 0; a--) {
                            var s = i[a],
                                l = {};
                            "undefined" != typeof this.options_[s] && (l[s] = this.options_[s]), v.setElAttributes(e, l)
                        }
                        return e
                    }, t.prototype.handleLateInit_ = function(e) {
                        var t = this;
                        if (0 !== e.networkState && 3 !== e.networkState) {
                            if (0 === e.readyState) {
                                var n = function() {
                                    var e = !1,
                                        n = function() {
                                            e = !0
                                        };
                                    t.on("loadstart", n);
                                    var r = function() {
                                        e || this.trigger("loadstart")
                                    };
                                    return t.on("loadedmetadata", r), t.ready(function() {
                                        this.off("loadstart", n), this.off("loadedmetadata", r), e || this.trigger("loadstart")
                                    }), {
                                        v: void 0
                                    }
                                }();
                                if ("object" === ("undefined" == typeof n ? "undefined" : u(n))) return n.v
                            }
                            var r = ["loadstart"];
                            r.push("loadedmetadata"), e.readyState >= 2 && r.push("loadeddata"), e.readyState >= 3 && r.push("canplay"), e.readyState >= 4 && r.push("canplaythrough"), this.ready(function() {
                                r.forEach(function(e) {
                                    this.trigger(e)
                                }, this)
                            })
                        }
                    }, t.prototype.proxyNativeTextTracks_ = function() {
                        var e = this.el().textTracks;
                        if (e) {
                            for (var t = 0; t < e.length; t++) this.textTracks().addTrack_(e[t]);
                            e.addEventListener && (e.addEventListener("change", this.handleTextTrackChange_), e.addEventListener("addtrack", this.handleTextTrackAdd_), e.addEventListener("removetrack", this.handleTextTrackRemove_)), this.on("loadstart", this.removeOldTextTracks_)
                        }
                    }, t.prototype.handleTextTrackChange = function(e) {
                        var t = this.textTracks();
                        this.textTracks().trigger({
                            type: "change",
                            target: t,
                            currentTarget: t,
                            srcElement: t
                        })
                    }, t.prototype.handleTextTrackAdd = function(e) {
                        this.textTracks().addTrack_(e.track)
                    }, t.prototype.handleTextTrackRemove = function(e) {
                        this.textTracks().removeTrack_(e.track)
                    }, t.prototype.removeOldTracks_ = function(e, t) {
                        var n = [];
                        if (t) {
                            for (var r = 0; r < e.length; r++) {
                                for (var o = e[r], i = !1, a = 0; a < t.length; a++)
                                    if (t[a] === o) {
                                        i = !0;
                                        break
                                    }
                                i || n.push(o)
                            }
                            for (var s = 0; s < n.length; s++) {
                                var l = n[s];
                                e.removeTrack_(l)
                            }
                        }
                    }, t.prototype.removeOldTextTracks_ = function(e) {
                        var t = this.textTracks(),
                            n = this.el().textTracks;
                        this.removeOldTracks_(t, n)
                    }, t.prototype.play = function() {
                        var e = this.el_.play();
                        void 0 !== e && "function" == typeof e.then && e.then(null, function(e) {})
                    }, t.prototype.setCurrentTime = function(e) {
                        try {
                            this.el_.currentTime = e
                        } catch (t) {
                            (0, w["default"])(t, "Video is not ready. (Video.js)")
                        }
                    }, t.prototype.duration = function() {
                        var e = this;
                        if (this.el_.duration === 1 / 0 && x.IS_ANDROID && x.IS_CHROME && 0 === this.el_.currentTime) {
                            var t = function() {
                                var t = function n() {
                                    e.el_.currentTime > 0 && (e.el_.duration === 1 / 0 && e.trigger("durationchange"), e.off("timeupdate", n))
                                };
                                return e.on("timeupdate", t), {
                                    v: NaN
                                }
                            }();
                            if ("object" === ("undefined" == typeof t ? "undefined" : u(t))) return t.v
                        }
                        return this.el_.duration || NaN
                    }, t.prototype.width = function() {
                        return this.el_.offsetWidth
                    }, t.prototype.height = function() {
                        return this.el_.offsetHeight
                    }, t.prototype.proxyWebkitFullscreen_ = function() {
                        var e = this;
                        if ("webkitDisplayingFullscreen" in this.el_) {
                            var t = function() {
                                    this.trigger("fullscreenchange", {
                                        isFullscreen: !1
                                    })
                                },
                                n = function() {
                                    this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", {
                                        isFullscreen: !0
                                    })
                                };
                            this.on("webkitbeginfullscreen", n), this.on("dispose", function() {
                                e.off("webkitbeginfullscreen", n), e.off("webkitendfullscreen", t)
                            })
                        }
                    }, t.prototype.supportsFullScreen = function() {
                        if ("function" == typeof this.el_.webkitEnterFullScreen) {
                            var e = P["default"].navigator && P["default"].navigator.userAgent || "";
                            if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return !0
                        }
                        return !1
                    }, t.prototype.enterFullScreen = function() {
                        var e = this.el_;
                        e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function() {
                            e.pause(), e.webkitEnterFullScreen()
                        }, 0)) : e.webkitEnterFullScreen()
                    }, t.prototype.exitFullScreen = function() {
                        this.el_.webkitExitFullScreen()
                    }, t.prototype.src = function(e) {
                        return void 0 === e ? this.el_.src : void this.setSrc(e)
                    }, t.prototype.reset = function() {
                        t.resetMediaElement(this.el_)
                    }, t.prototype.currentSrc = function() {
                        return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                    }, t.prototype.setControls = function(e) {
                        this.el_.controls = !!e
                    }, t.prototype.addTextTrack = function(t, n, r) {
                        return this.featuresNativeTextTracks ? this.el_.addTextTrack(t, n, r) : e.prototype.addTextTrack.call(this, t, n, r)
                    }, t.prototype.createRemoteTextTrack = function(t) {
                        if (!this.featuresNativeTextTracks) return e.prototype.createRemoteTextTrack.call(this, t);
                        var n = O["default"].createElement("track");
                        return t.kind && (n.kind = t.kind), t.label && (n.label = t.label), (t.language || t.srclang) && (n.srclang = t.language || t.srclang), t["default"] && (n["default"] = t["default"]), t.id && (n.id = t.id), t.src && (n.src = t.src), n
                    }, t.prototype.addRemoteTextTrack = function(t, n) {
                        var r = e.prototype.addRemoteTextTrack.call(this, t, n);
                        return this.featuresNativeTextTracks && this.el().appendChild(r), r
                    }, t.prototype.removeRemoteTextTrack = function(t) {
                        if (e.prototype.removeRemoteTextTrack.call(this, t), this.featuresNativeTextTracks)
                            for (var n = this.$$("track"), r = n.length; r--;) t !== n[r] && t !== n[r].track || this.el().removeChild(n[r])
                    }, t
                }(f["default"]);
            if (v.isReal()) {
                R.TEST_VID = O["default"].createElement("video");
                var L = O["default"].createElement("track");
                L.kind = "captions", L.srclang = "en", L.label = "English", R.TEST_VID.appendChild(L)
            }
            R.isSupported = function() {
                    try {
                        R.TEST_VID.volume = .5
                    } catch (e) {
                        return !1
                    }
                    return !(!R.TEST_VID || !R.TEST_VID.canPlayType)
                }, R.canControlVolume = function() {
                    try {
                        var e = R.TEST_VID.volume;
                        return R.TEST_VID.volume = e / 2 + .1, e !== R.TEST_VID.volume
                    } catch (t) {
                        return !1
                    }
                }, R.canControlPlaybackRate = function() {
                    if (x.IS_ANDROID && x.IS_CHROME) return !1;
                    try {
                        var e = R.TEST_VID.playbackRate;
                        return R.TEST_VID.playbackRate = e / 2 + .1, e !== R.TEST_VID.playbackRate
                    } catch (t) {
                        return !1
                    }
                }, R.supportsNativeTextTracks = function() {
                    return x.IS_ANY_SAFARI
                }, R.supportsNativeVideoTracks = function() {
                    return !(!R.TEST_VID || !R.TEST_VID.videoTracks)
                }, R.supportsNativeAudioTracks = function() {
                    return !(!R.TEST_VID || !R.TEST_VID.audioTracks)
                }, R.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "volumechange"], R.prototype.featuresVolumeControl = R.canControlVolume(), R.prototype.featuresPlaybackRate = R.canControlPlaybackRate(),
                R.prototype.movingMediaElementInDOM = !x.IS_IOS, R.prototype.featuresFullscreenResize = !0, R.prototype.featuresProgressEvents = !0, R.prototype.featuresTimeupdateEvents = !0, R.prototype.featuresNativeTextTracks = R.supportsNativeTextTracks(), R.prototype.featuresNativeVideoTracks = R.supportsNativeVideoTracks(), R.prototype.featuresNativeAudioTracks = R.supportsNativeAudioTracks();
            var F = R.TEST_VID && R.TEST_VID.constructor.prototype.canPlayType,
                H = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
                B = /^video\/mp4/i;
            R.patchCanPlayType = function() {
                x.ANDROID_VERSION >= 4 && !x.IS_FIREFOX ? R.TEST_VID.constructor.prototype.canPlayType = function(e) {
                    return e && H.test(e) ? "maybe" : F.call(this, e)
                } : x.IS_OLD_ANDROID && (R.TEST_VID.constructor.prototype.canPlayType = function(e) {
                    return e && B.test(e) ? "maybe" : F.call(this, e)
                })
            }, R.unpatchCanPlayType = function() {
                var e = R.TEST_VID.constructor.prototype.canPlayType;
                return R.TEST_VID.constructor.prototype.canPlayType = F, e
            }, R.patchCanPlayType(), R.disposeMediaElement = function(e) {
                if (e) {
                    for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
                    e.removeAttribute("src"), "function" == typeof e.load && ! function() {
                        try {
                            e.load()
                        } catch (t) {}
                    }()
                }
            }, R.resetMediaElement = function(e) {
                if (e) {
                    for (var t = e.querySelectorAll("source"), n = t.length; n--;) e.removeChild(t[n]);
                    e.removeAttribute("src"), "function" == typeof e.load && ! function() {
                        try {
                            e.load()
                        } catch (t) {}
                    }()
                }
            }, ["paused", "currentTime", "buffered", "volume", "muted", "poster", "preload", "autoplay", "controls", "loop", "error", "seeking", "seekable", "ended", "defaultMuted", "playbackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function(e) {
                R.prototype[e] = function() {
                    return this.el_[e]
                }
            }), ["volume", "muted", "src", "poster", "preload", "autoplay", "loop", "playbackRate"].forEach(function(e) {
                R.prototype["set" + (0, D["default"])(e)] = function(t) {
                    this.el_[e] = t
                }
            }), ["pause", "load"].forEach(function(e) {
                R.prototype[e] = function() {
                    return this.el_[e]()
                }
            }), f["default"].withSourceHandlers(R), R.nativeSourceHandler = {}, R.nativeSourceHandler.canPlayType = function(e) {
                try {
                    return R.TEST_VID.canPlayType(e)
                } catch (t) {
                    return ""
                }
            }, R.nativeSourceHandler.canHandleSource = function(e, t) {
                if (e.type) return R.nativeSourceHandler.canPlayType(e.type);
                if (e.src) {
                    var n = m.getFileExtension(e.src);
                    return R.nativeSourceHandler.canPlayType("video/" + n)
                }
                return ""
            }, R.nativeSourceHandler.handleSource = function(e, t, n) {
                t.setSrc(e.src)
            }, R.nativeSourceHandler.dispose = function() {}, R.registerSourceHandler(R.nativeSourceHandler), h["default"].registerComponent("Html5", R), f["default"].registerTech("Html5", R), n["default"] = R
        }, {
            5: 5,
            62: 62,
            78: 78,
            81: 81,
            83: 83,
            86: 86,
            87: 87,
            88: 88,
            91: 91,
            92: 92,
            94: 94,
            95: 95,
            98: 98
        }],
        61: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var s = e(5),
                l = r(s),
                u = e(62),
                c = r(u),
                p = e(91),
                f = r(p),
                d = function(e) {
                    function t(n, r, a) {
                        o(this, t);
                        var s = i(this, e.call(this, n, r, a));
                        if (r.playerOptions.sources && 0 !== r.playerOptions.sources.length) n.src(r.playerOptions.sources);
                        else
                            for (var u = 0, p = r.playerOptions.techOrder; u < p.length; u++) {
                                var d = (0, f["default"])(p[u]),
                                    h = c["default"].getTech(d);
                                if (d || (h = l["default"].getComponent(d)), h && h.isSupported()) {
                                    n.loadTech_(d);
                                    break
                                }
                            }
                        return s
                    }
                    return a(t, e), t
                }(l["default"]);
            l["default"].registerComponent("MediaLoader", d), n["default"] = d
        }, {
            5: 5,
            62: 62,
            91: 91
        }],
        62: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function l(e, t, n, r) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                    i = e.textTracks();
                o.kind = t, n && (o.label = n), r && (o.language = r), o.tech = e;
                var a = new b["default"](o);
                return i.addTrack_(a), a
            }
            n.__esModule = !0;
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                c = e(5),
                p = o(c),
                f = e(66),
                d = o(f),
                h = e(65),
                y = o(h),
                v = e(87),
                g = o(v),
                m = e(72),
                b = o(m),
                _ = e(70),
                T = o(_),
                w = e(76),
                C = o(w),
                E = e(63),
                k = o(E),
                x = e(83),
                S = r(x),
                O = e(86),
                j = o(O),
                P = e(90),
                M = e(79),
                A = e(46),
                N = o(A),
                I = e(95),
                D = o(I),
                R = e(94),
                L = o(R),
                F = e(88),
                H = function(t) {
                    function n() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                        i(this, n), e.reportTouchActivity = !1;
                        var o = a(this, t.call(this, null, e, r));
                        return o.hasStarted_ = !1, o.on("playing", function() {
                            this.hasStarted_ = !0
                        }), o.on("loadstart", function() {
                            this.hasStarted_ = !1
                        }), o.textTracks_ = e.textTracks, o.videoTracks_ = e.videoTracks, o.audioTracks_ = e.audioTracks, o.featuresProgressEvents || o.manualProgressOn(), o.featuresTimeupdateEvents || o.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function(t) {
                            e["native" + t + "Tracks"] === !1 && (o["featuresNative" + t + "Tracks"] = !1)
                        }), e.nativeCaptions === !1 && (o.featuresNativeTextTracks = !1), o.featuresNativeTextTracks || o.emulateTextTracks(), o.autoRemoteTextTracks_ = new T["default"], o.initTextTrackListeners(), o.initTrackListeners(), e.nativeControlsForTouch || o.emitTapEvents(), o.constructor && (o.name_ = o.constructor.name || "Unknown Tech"), o
                    }
                    return s(n, t), n.prototype.manualProgressOn = function() {
                        this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
                    }, n.prototype.manualProgressOff = function() {
                        this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
                    }, n.prototype.trackProgress = function(e) {
                        this.stopTrackingProgress(), this.progressInterval = this.setInterval(S.bind(this, function() {
                            var e = this.bufferedPercent();
                            this.bufferedPercent_ !== e && this.trigger("progress"), this.bufferedPercent_ = e, 1 === e && this.stopTrackingProgress()
                        }), 500)
                    }, n.prototype.onDurationChange = function(e) {
                        this.duration_ = this.duration()
                    }, n.prototype.buffered = function() {
                        return (0, P.createTimeRange)(0, 0)
                    }, n.prototype.bufferedPercent = function() {
                        return (0, M.bufferedPercent)(this.buffered(), this.duration_)
                    }, n.prototype.stopTrackingProgress = function() {
                        this.clearInterval(this.progressInterval)
                    }, n.prototype.manualTimeUpdatesOn = function() {
                        this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
                    }, n.prototype.manualTimeUpdatesOff = function() {
                        this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
                    }, n.prototype.trackCurrentTime = function() {
                        this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
                            this.trigger({
                                type: "timeupdate",
                                target: this,
                                manuallyTriggered: !0
                            })
                        }, 250)
                    }, n.prototype.stopTrackingCurrentTime = function() {
                        this.clearInterval(this.currentTimeInterval), this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, n.prototype.dispose = function() {
                        this.clearTracks(["audio", "video", "text"]), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
                    }, n.prototype.clearTracks = function(e) {
                        var t = this;
                        e = [].concat(e), e.forEach(function(e) {
                            for (var n = t[e + "Tracks"]() || [], r = n.length; r--;) {
                                var o = n[r];
                                "text" === e && t.removeRemoteTextTrack(o), n.removeTrack_(o)
                            }
                        })
                    }, n.prototype.cleanupAutoTextTracks = function() {
                        for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--;) {
                            var n = e[t];
                            this.removeRemoteTextTrack(n)
                        }
                    }, n.prototype.reset = function() {}, n.prototype.error = function(e) {
                        return void 0 !== e && (this.error_ = new N["default"](e), this.trigger("error")), this.error_
                    }, n.prototype.played = function() {
                        return this.hasStarted_ ? (0, P.createTimeRange)(0, 0) : (0, P.createTimeRange)()
                    }, n.prototype.setCurrentTime = function() {
                        this.manualTimeUpdates && this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, n.prototype.initTextTrackListeners = function() {
                        var e = S.bind(this, function() {
                                this.trigger("texttrackchange")
                            }),
                            t = this.textTracks();
                        t && (t.addEventListener("removetrack", e), t.addEventListener("addtrack", e), this.on("dispose", S.bind(this, function() {
                            t.removeEventListener("removetrack", e), t.removeEventListener("addtrack", e)
                        })))
                    }, n.prototype.initTrackListeners = function() {
                        var e = this,
                            t = ["video", "audio"];
                        t.forEach(function(t) {
                            var n = function() {
                                    e.trigger(t + "trackchange")
                                },
                                r = e[t + "Tracks"]();
                            r.addEventListener("removetrack", n), r.addEventListener("addtrack", n), e.on("dispose", function() {
                                r.removeEventListener("removetrack", n), r.removeEventListener("addtrack", n)
                            })
                        })
                    }, n.prototype.addWebVttScript_ = function() {
                        var t = this;
                        if (!D["default"].WebVTT && null !== this.el().parentNode && void 0 !== this.el().parentNode) {
                            var n = function() {
                                var n = e(99);
                                if (!t.options_["vtt.js"] && (0, F.isPlain)(n) && Object.keys(n).length > 0) return Object.keys(n).forEach(function(e) {
                                    D["default"][e] = n[e]
                                }), t.trigger("vttjsloaded"), {
                                    v: void 0
                                };
                                var r = L["default"].createElement("script");
                                r.src = t.options_["vtt.js"] || "https://cdn.rawgit.com/gkatsev/vtt.js/vjs-v0.12.1/dist/vtt.min.js", r.onload = function() {
                                    t.trigger("vttjsloaded")
                                }, r.onerror = function() {
                                    t.trigger("vttjserror")
                                }, t.on("dispose", function() {
                                    r.onload = null, r.onerror = null
                                }), D["default"].WebVTT = !0, t.el().parentNode.appendChild(r)
                            }();
                            if ("object" === ("undefined" == typeof n ? "undefined" : u(n))) return n.v
                        }
                    }, n.prototype.emulateTextTracks = function() {
                        var e = this,
                            t = this.textTracks();
                        if (t) {
                            this.remoteTextTracks().on("addtrack", function(t) {
                                e.textTracks().addTrack_(t.track)
                            }), this.remoteTextTracks().on("removetrack", function(t) {
                                e.textTracks().removeTrack_(t.track)
                            }), this.on("ready", this.addWebVttScript_);
                            var n = function() {
                                    return e.trigger("texttrackchange")
                                },
                                r = function() {
                                    n();
                                    for (var e = 0; e < t.length; e++) {
                                        var r = t[e];
                                        r.removeEventListener("cuechange", n), "showing" === r.mode && r.addEventListener("cuechange", n)
                                    }
                                };
                            r(), t.addEventListener("change", r), this.on("dispose", function() {
                                t.removeEventListener("change", r)
                            })
                        }
                    }, n.prototype.videoTracks = function() {
                        return this.videoTracks_ = this.videoTracks_ || new C["default"], this.videoTracks_
                    }, n.prototype.audioTracks = function() {
                        return this.audioTracks_ = this.audioTracks_ || new k["default"], this.audioTracks_
                    }, n.prototype.textTracks = function() {
                        return this.textTracks_ = this.textTracks_ || new T["default"], this.textTracks_
                    }, n.prototype.remoteTextTracks = function() {
                        return this.remoteTextTracks_ = this.remoteTextTracks_ || new T["default"], this.remoteTextTracks_
                    }, n.prototype.remoteTextTrackEls = function() {
                        return this.remoteTextTrackEls_ = this.remoteTextTrackEls_ || new y["default"], this.remoteTextTrackEls_
                    }, n.prototype.addTextTrack = function(e, t, n) {
                        if (!e) throw new Error("TextTrack kind is required but was not provided");
                        return l(this, e, t, n)
                    }, n.prototype.createRemoteTextTrack = function(e) {
                        var t = (0, g["default"])(e, {
                            tech: this
                        });
                        return new d["default"](t)
                    }, n.prototype.addRemoteTextTrack = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments[1],
                            n = this.createRemoteTextTrack(e);
                        return t !== !0 && t !== !1 && (j["default"].warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), t = !0), this.remoteTextTrackEls().addTrackElement_(n), this.remoteTextTracks().addTrack_(n.track), t !== !0 && this.autoRemoteTextTracks_.addTrack_(n.track), n
                    }, n.prototype.removeRemoteTextTrack = function(e) {
                        var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
                        this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack_(e), this.autoRemoteTextTracks_.removeTrack_(e)
                    }, n.prototype.setPoster = function() {}, n.prototype.canPlayType = function() {
                        return ""
                    }, n.isTech = function(e) {
                        return e.prototype instanceof n || e instanceof n || e === n
                    }, n.registerTech = function(e, t) {
                        if (n.techs_ || (n.techs_ = {}), !n.isTech(t)) throw new Error("Tech " + e + " must be a Tech");
                        return n.techs_[e] = t, t
                    }, n.getTech = function(e) {
                        return n.techs_ && n.techs_[e] ? n.techs_[e] : D["default"] && D["default"].videojs && D["default"].videojs[e] ? (j["default"].warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), D["default"].videojs[e]) : void 0
                    }, n
                }(p["default"]);
            H.prototype.textTracks_, H.prototype.audioTracks_, H.prototype.videoTracks_, H.prototype.featuresVolumeControl = !0, H.prototype.featuresFullscreenResize = !1, H.prototype.featuresPlaybackRate = !1, H.prototype.featuresProgressEvents = !1, H.prototype.featuresTimeupdateEvents = !1, H.prototype.featuresNativeTextTracks = !1, H.withSourceHandlers = function(e) {
                e.registerSourceHandler = function(t, n) {
                    var r = e.sourceHandlers;
                    r || (r = e.sourceHandlers = []), void 0 === n && (n = r.length), r.splice(n, 0, t)
                }, e.canPlayType = function(t) {
                    for (var n = e.sourceHandlers || [], r = void 0, o = 0; o < n.length; o++)
                        if (r = n[o].canPlayType(t)) return r;
                    return ""
                }, e.selectSourceHandler = function(t, n) {
                    for (var r = e.sourceHandlers || [], o = void 0, i = 0; i < r.length; i++)
                        if (o = r[i].canHandleSource(t, n)) return r[i];
                    return null
                }, e.canPlaySource = function(t, n) {
                    var r = e.selectSourceHandler(t, n);
                    return r ? r.canHandleSource(t, n) : ""
                };
                var t = ["seekable", "duration"];
                t.forEach(function(e) {
                    var t = this[e];
                    "function" == typeof t && (this[e] = function() {
                        return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments)
                    })
                }, e.prototype), e.prototype.setSource = function(t) {
                    var n = e.selectSourceHandler(t, this.options_);
                    return n || (e.nativeSourceHandler ? n = e.nativeSourceHandler : j["default"].error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), n !== e.nativeSourceHandler && (this.currentSource_ = t, this.off(this.el_, "loadstart", e.prototype.firstLoadStartListener_), this.off(this.el_, "loadstart", e.prototype.successiveLoadStartListener_), this.one(this.el_, "loadstart", e.prototype.firstLoadStartListener_)), this.sourceHandler_ = n.handleSource(t, this, this.options_), this.on("dispose", this.disposeSourceHandler), this
                }, e.prototype.firstLoadStartListener_ = function() {
                    this.one(this.el_, "loadstart", e.prototype.successiveLoadStartListener_)
                }, e.prototype.successiveLoadStartListener_ = function() {
                    this.disposeSourceHandler(), this.one(this.el_, "loadstart", e.prototype.successiveLoadStartListener_)
                }, e.prototype.disposeSourceHandler = function() {
                    this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.off(this.el_, "loadstart", e.prototype.firstLoadStartListener_), this.off(this.el_, "loadstart", e.prototype.successiveLoadStartListener_), this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
                }
            }, p["default"].registerComponent("Tech", H), p["default"].registerComponent("MediaTechController", H), H.registerTech("Tech", H), n["default"] = H
        }, {
            46: 46,
            5: 5,
            63: 63,
            65: 65,
            66: 66,
            70: 70,
            72: 72,
            76: 76,
            79: 79,
            83: 83,
            86: 86,
            87: 87,
            88: 88,
            90: 90,
            94: 94,
            95: 95,
            99: 99
        }],
        63: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(74),
                u = o(l),
                c = e(78),
                p = r(c),
                f = e(94),
                d = o(f),
                h = function(e, t) {
                    for (var n = 0; n < e.length; n++) t.id !== e[n].id && (e[n].enabled = !1)
                },
                y = function(e) {
                    function t() {
                        var n, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        i(this, t);
                        for (var s = void 0, l = o.length - 1; l >= 0; l--)
                            if (o[l].enabled) {
                                h(o, o[l]);
                                break
                            }
                        if (p.IS_IE8) {
                            s = d["default"].createElement("custom");
                            for (var c in u["default"].prototype) "constructor" !== c && (s[c] = u["default"].prototype[c]);
                            for (var f in t.prototype) "constructor" !== f && (s[f] = t.prototype[f])
                        }
                        return s = n = a(this, e.call(this, o, s)), s.changing_ = !1, r = s, a(n, r)
                    }
                    return s(t, e), t.prototype.addTrack_ = function(t) {
                        var n = this;
                        t.enabled && h(this, t), e.prototype.addTrack_.call(this, t), t.addEventListener && t.addEventListener("enabledchange", function() {
                            n.changing_ || (n.changing_ = !0, h(n, t), n.changing_ = !1, n.trigger("change"))
                        })
                    }, t.prototype.addTrack = function(e) {
                        this.addTrack_(e)
                    }, t.prototype.removeTrack = function(t) {
                        e.prototype.removeTrack_.call(this, t)
                    }, t
                }(u["default"]);
            n["default"] = y
        }, {
            74: 74,
            78: 78,
            94: 94
        }],
        64: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(73),
                u = e(75),
                c = o(u),
                p = e(87),
                f = o(p),
                d = e(78),
                h = r(d),
                y = function(e) {
                    function t() {
                        var n, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, t);
                        var s = (0, f["default"])(o, {
                                kind: l.AudioTrackKind[o.kind] || ""
                            }),
                            u = n = a(this, e.call(this, s)),
                            c = !1;
                        if (h.IS_IE8)
                            for (var p in t.prototype) "constructor" !== p && (u[p] = t.prototype[p]);
                        return Object.defineProperty(u, "enabled", {
                            get: function() {
                                return c
                            },
                            set: function(e) {
                                "boolean" == typeof e && e !== c && (c = e, this.trigger("enabledchange"))
                            }
                        }), s.enabled && (u.enabled = s.enabled), u.loaded_ = !0, r = u, a(n, r)
                    }
                    return s(t, e), t
                }(c["default"]);
            n["default"] = y
        }, {
            73: 73,
            75: 75,
            78: 78,
            87: 87
        }],
        65: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.__esModule = !0;
            var a = e(78),
                s = o(a),
                l = e(94),
                u = r(l),
                c = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        i(this, e);
                        var n = this;
                        if (s.IS_IE8) {
                            n = u["default"].createElement("custom");
                            for (var r in e.prototype) "constructor" !== r && (n[r] = e.prototype[r])
                        }
                        n.trackElements_ = [], Object.defineProperty(n, "length", {
                            get: function() {
                                return this.trackElements_.length
                            }
                        });
                        for (var o = 0, a = t.length; o < a; o++) n.addTrackElement_(t[o]);
                        if (s.IS_IE8) return n
                    }
                    return e.prototype.addTrackElement_ = function(e) {
                        var t = this.trackElements_.length;
                        "" + t in this || Object.defineProperty(this, t, {
                            get: function() {
                                return this.trackElements_[t]
                            }
                        }), this.trackElements_.indexOf(e) === -1 && this.trackElements_.push(e)
                    }, e.prototype.getTrackElementByTrack_ = function(e) {
                        for (var t = void 0, n = 0, r = this.trackElements_.length; n < r; n++)
                            if (e === this.trackElements_[n].track) {
                                t = this.trackElements_[n];
                                break
                            }
                        return t
                    }, e.prototype.removeTrackElement_ = function(e) {
                        for (var t = 0, n = this.trackElements_.length; t < n; t++)
                            if (e === this.trackElements_[t]) {
                                this.trackElements_.splice(t, 1);
                                break
                            }
                    }, e
                }();
            n["default"] = c
        }, {
            78: 78,
            94: 94
        }],
        66: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(78),
                u = o(l),
                c = e(94),
                p = r(c),
                f = e(42),
                d = r(f),
                h = e(72),
                y = r(h),
                v = 0,
                g = 1,
                m = 2,
                b = 3,
                _ = function(e) {
                    function t() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, t);
                        var r = a(this, e.call(this)),
                            o = void 0,
                            s = r;
                        if (u.IS_IE8) {
                            s = p["default"].createElement("custom");
                            for (var l in t.prototype) "constructor" !== l && (s[l] = t.prototype[l])
                        }
                        var c = new y["default"](n);
                        if (s.kind = c.kind, s.src = c.src, s.srclang = c.language, s.label = c.label, s["default"] = c["default"], Object.defineProperty(s, "readyState", {
                                get: function() {
                                    return o
                                }
                            }), Object.defineProperty(s, "track", {
                                get: function() {
                                    return c
                                }
                            }), o = v, c.addEventListener("loadeddata", function() {
                                o = m, s.trigger({
                                    type: "load",
                                    target: s
                                })
                            }), u.IS_IE8) {
                            var f;
                            return f = s, a(r, f)
                        }
                        return r
                    }
                    return s(t, e), t
                }(d["default"]);
            _.prototype.allowedEvents_ = {
                load: "load"
            }, _.NONE = v, _.LOADING = g, _.LOADED = m, _.ERROR = b, n["default"] = _
        }, {
            42: 42,
            72: 72,
            78: 78,
            94: 94
        }],
        67: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.__esModule = !0;
            var a = e(78),
                s = o(a),
                l = e(94),
                u = r(l),
                c = function() {
                    function e(t) {
                        i(this, e);
                        var n = this;
                        if (s.IS_IE8) {
                            n = u["default"].createElement("custom");
                            for (var r in e.prototype) "constructor" !== r && (n[r] = e.prototype[r])
                        }
                        if (e.prototype.setCues_.call(n, t), Object.defineProperty(n, "length", {
                                get: function() {
                                    return this.length_
                                }
                            }), s.IS_IE8) return n
                    }
                    return e.prototype.setCues_ = function(e) {
                        var t = this.length || 0,
                            n = 0,
                            r = e.length;
                        this.cues_ = e, this.length_ = e.length;
                        var o = function(e) {
                            "" + e in this || Object.defineProperty(this, "" + e, {
                                get: function() {
                                    return this.cues_[e]
                                }
                            })
                        };
                        if (t < r)
                            for (n = t; n < r; n++) o.call(this, n)
                    }, e.prototype.getCueById = function(e) {
                        for (var t = null, n = 0, r = this.length; n < r; n++) {
                            var o = this[n];
                            if (o.id === e) {
                                t = o;
                                break
                            }
                        }
                        return t
                    }, e
                }();
            n["default"] = c
        }, {
            78: 78,
            94: 94
        }],
        68: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function l(e, t) {
                return "rgba(" + parseInt(e[1] + e[1], 16) + "," + parseInt(e[2] + e[2], 16) + "," + parseInt(e[3] + e[3], 16) + "," + t + ")"
            }

            function u(e, t, n) {
                try {
                    e.style[t] = n
                } catch (r) {
                    return
                }
            }
            n.__esModule = !0;
            var c = e(5),
                p = o(c),
                f = e(83),
                d = r(f),
                h = e(95),
                y = o(h),
                v = "#222",
                g = "#ccc",
                m = {
                    monospace: "monospace",
                    sansSerif: "sans-serif",
                    serif: "serif",
                    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                    monospaceSerif: '"Courier New", monospace',
                    proportionalSansSerif: "sans-serif",
                    proportionalSerif: "serif",
                    casual: '"Comic Sans MS", Impact, fantasy',
                    script: '"Monotype Corsiva", cursive',
                    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
                },
                b = function(e) {
                    function t(n, r, o) {
                        i(this, t);
                        var s = a(this, e.call(this, n, r, o));
                        return n.on("loadstart", d.bind(s, s.toggleDisplay)), n.on("texttrackchange", d.bind(s, s.updateDisplay)), n.ready(d.bind(s, function() {
                            if (n.tech_ && n.tech_.featuresNativeTextTracks) return void this.hide();
                            n.on("fullscreenchange", d.bind(this, this.updateDisplay));
                            for (var e = this.options_.playerOptions.tracks || [], t = 0; t < e.length; t++) this.player_.addRemoteTextTrack(e[t], !0);
                            var r = {
                                    captions: 1,
                                    subtitles: 1
                                },
                                o = this.player_.textTracks(),
                                i = void 0,
                                a = void 0;
                            if (o) {
                                for (var s = 0; s < o.length; s++) {
                                    var l = o[s];
                                    l["default"] && ("descriptions" !== l.kind || i ? l.kind in r && !a && (a = l) : i = l)
                                }
                                a ? a.mode = "showing" : i && (i.mode = "showing")
                            }
                        })), s
                    }
                    return s(t, e), t.prototype.toggleDisplay = function() {
                        this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
                    }, t.prototype.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-text-track-display"
                        }, {
                            "aria-live": "off",
                            "aria-atomic": "true"
                        })
                    }, t.prototype.clearDisplay = function() {
                        "function" == typeof y["default"].WebVTT && y["default"].WebVTT.processCues(y["default"], [], this.el_)
                    }, t.prototype.updateDisplay = function() {
                        var e = this.player_.textTracks();
                        if (this.clearDisplay(), e) {
                            for (var t = null, n = null, r = e.length; r--;) {
                                var o = e[r];
                                "showing" === o.mode && ("descriptions" === o.kind ? t = o : n = o)
                            }
                            n ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(n)) : t && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(t))
                        }
                    }, t.prototype.updateForTrack = function(e) {
                        if ("function" == typeof y["default"].WebVTT && e.activeCues) {
                            for (var t = this.player_.textTrackSettings.getValues(), n = [], r = 0; r < e.activeCues.length; r++) n.push(e.activeCues[r]);
                            y["default"].WebVTT.processCues(y["default"], n, this.el_);
                            for (var o = n.length; o--;) {
                                var i = n[o];
                                if (i) {
                                    var a = i.displayState;
                                    if (t.color && (a.firstChild.style.color = t.color), t.textOpacity && u(a.firstChild, "color", l(t.color || "#fff", t.textOpacity)), t.backgroundColor && (a.firstChild.style.backgroundColor = t.backgroundColor), t.backgroundOpacity && u(a.firstChild, "backgroundColor", l(t.backgroundColor || "#000", t.backgroundOpacity)), t.windowColor && (t.windowOpacity ? u(a, "backgroundColor", l(t.windowColor, t.windowOpacity)) : a.style.backgroundColor = t.windowColor), t.edgeStyle && ("dropshadow" === t.edgeStyle ? a.firstChild.style.textShadow = "2px 2px 3px " + v + ", 2px 2px 4px " + v + ", 2px 2px 5px " + v : "raised" === t.edgeStyle ? a.firstChild.style.textShadow = "1px 1px " + v + ", 2px 2px " + v + ", 3px 3px " + v : "depressed" === t.edgeStyle ? a.firstChild.style.textShadow = "1px 1px " + g + ", 0 1px " + g + ", -1px -1px " + v + ", 0 -1px " + v : "uniform" === t.edgeStyle && (a.firstChild.style.textShadow = "0 0 4px " + v + ", 0 0 4px " + v + ", 0 0 4px " + v + ", 0 0 4px " + v)), t.fontPercent && 1 !== t.fontPercent) {
                                        var s = y["default"].parseFloat(a.style.fontSize);
                                        a.style.fontSize = s * t.fontPercent + "px", a.style.height = "auto", a.style.top = "auto", a.style.bottom = "2px"
                                    }
                                    t.fontFamily && "default" !== t.fontFamily && ("small-caps" === t.fontFamily ? a.firstChild.style.fontVariant = "small-caps" : a.firstChild.style.fontFamily = m[t.fontFamily])
                                }
                            }
                        }
                    }, t
                }(p["default"]);
            p["default"].registerComponent("TextTrackDisplay", b), n["default"] = b
        }, {
            5: 5,
            83: 83,
            95: 95
        }],
        69: [function(e, t, n) {
            "use strict";
            n.__esModule = !0;
            var r = function(e) {
                    var t = ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(t, n, r) {
                        return e[n] && (t[n] = e[n]), t
                    }, {
                        cues: e.cues && Array.prototype.map.call(e.cues, function(e) {
                            return {
                                startTime: e.startTime,
                                endTime: e.endTime,
                                text: e.text,
                                id: e.id
                            }
                        })
                    });
                    return t
                },
                o = function(e) {
                    var t = e.$$("track"),
                        n = Array.prototype.map.call(t, function(e) {
                            return e.track
                        }),
                        o = Array.prototype.map.call(t, function(e) {
                            var t = r(e.track);
                            return e.src && (t.src = e.src), t
                        });
                    return o.concat(Array.prototype.filter.call(e.textTracks(), function(e) {
                        return n.indexOf(e) === -1
                    }).map(r))
                },
                i = function(e, t) {
                    return e.forEach(function(e) {
                        var n = t.addRemoteTextTrack(e).track;
                        !e.src && e.cues && e.cues.forEach(function(e) {
                            return n.addCue(e)
                        })
                    }), t.textTracks()
                };
            n["default"] = {
                textTracksToJson: o,
                jsonToTextTracks: i,
                trackToJson_: r
            }
        }, {}],
        70: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(74),
                u = o(l),
                c = e(83),
                p = r(c),
                f = e(78),
                d = r(f),
                h = e(94),
                y = o(h),
                v = function(e) {
                    function t() {
                        var n, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        i(this, t);
                        var s = void 0;
                        if (d.IS_IE8) {
                            s = y["default"].createElement("custom");
                            for (var l in u["default"].prototype) "constructor" !== l && (s[l] = u["default"].prototype[l]);
                            for (var c in t.prototype) "constructor" !== c && (s[c] = t.prototype[c])
                        }
                        return s = n = a(this, e.call(this, o, s)), r = s, a(n, r)
                    }
                    return s(t, e), t.prototype.addTrack_ = function(t) {
                        e.prototype.addTrack_.call(this, t), t.addEventListener("modechange", p.bind(this, function() {
                            this.trigger("change")
                        }))
                    }, t
                }(u["default"]);
            n["default"] = v
        }, {
            74: 74,
            78: 78,
            83: 83,
            94: 94
        }],
        71: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function l(e, t) {
                if (t && (e = t(e)), e && "none" !== e) return e
            }

            function u(e, t) {
                var n = e.options[e.options.selectedIndex].value;
                return l(n, t)
            }

            function c(e, t, n) {
                if (t)
                    for (var r = 0; r < e.options.length; r++)
                        if (l(e.options[r].value, n) === t) {
                            e.selectedIndex = r;
                            break
                        }
            }
            n.__esModule = !0;
            var p = e(95),
                f = o(p),
                d = e(5),
                h = o(d),
                y = e(81),
                v = e(83),
                g = r(v),
                m = e(88),
                b = r(m),
                _ = e(86),
                T = o(_),
                w = "vjs-text-track-settings",
                C = ["#000", "Black"],
                E = ["#00F", "Blue"],
                k = ["#0FF", "Cyan"],
                x = ["#0F0", "Green"],
                S = ["#F0F", "Magenta"],
                O = ["#F00", "Red"],
                j = ["#FFF", "White"],
                P = ["#FF0", "Yellow"],
                M = ["1", "Opaque"],
                A = ["0.5", "Semi-Transparent"],
                N = ["0", "Transparent"],
                I = {
                    backgroundColor: {
                        selector: ".vjs-bg-color > select",
                        id: "captions-background-color-%s",
                        label: "Color",
                        options: [C, j, O, x, E, P, S, k]
                    },
                    backgroundOpacity: {
                        selector: ".vjs-bg-opacity > select",
                        id: "captions-background-opacity-%s",
                        label: "Transparency",
                        options: [M, A, N]
                    },
                    color: {
                        selector: ".vjs-fg-color > select",
                        id: "captions-foreground-color-%s",
                        label: "Color",
                        options: [j, C, O, x, E, P, S, k]
                    },
                    edgeStyle: {
                        selector: ".vjs-edge-style > select",
                        id: "%s",
                        label: "Text Edge Style",
                        options: [
                            ["none", "None"],
                            ["raised", "Raised"],
                            ["depressed", "Depressed"],
                            ["uniform", "Uniform"],
                            ["dropshadow", "Dropshadow"]
                        ]
                    },
                    fontFamily: {
                        selector: ".vjs-font-family > select",
                        id: "captions-font-family-%s",
                        label: "Font Family",
                        options: [
                            ["proportionalSansSerif", "Proportional Sans-Serif"],
                            ["monospaceSansSerif", "Monospace Sans-Serif"],
                            ["proportionalSerif", "Proportional Serif"],
                            ["monospaceSerif", "Monospace Serif"],
                            ["casual", "Casual"],
                            ["script", "Script"],
                            ["small-caps", "Small Caps"]
                        ]
                    },
                    fontPercent: {
                        selector: ".vjs-font-percent > select",
                        id: "captions-font-size-%s",
                        label: "Font Size",
                        options: [
                            ["0.50", "50%"],
                            ["0.75", "75%"],
                            ["1.00", "100%"],
                            ["1.25", "125%"],
                            ["1.50", "150%"],
                            ["1.75", "175%"],
                            ["2.00", "200%"],
                            ["3.00", "300%"],
                            ["4.00", "400%"]
                        ],
                        "default": 2,
                        parser: function(e) {
                            return "1.00" === e ? null : Number(e)
                        }
                    },
                    textOpacity: {
                        selector: ".vjs-text-opacity > select",
                        id: "captions-foreground-opacity-%s",
                        label: "Transparency",
                        options: [M, A]
                    },
                    windowColor: {
                        selector: ".vjs-window-color > select",
                        id: "captions-window-color-%s",
                        label: "Color"
                    },
                    windowOpacity: {
                        selector: ".vjs-window-opacity > select",
                        id: "captions-window-opacity-%s",
                        label: "Transparency",
                        options: [N, A, M]
                    }
                };
            I.windowColor.options = I.backgroundColor.options;
            var D = function(e) {
                function t(n, r) {
                    i(this, t);
                    var o = a(this, e.call(this, n, r));
                    return o.setDefaults(), o.hide(), o.updateDisplay = g.bind(o, o.updateDisplay), void 0 === r.persistTextTrackSettings && (o.options_.persistTextTrackSettings = o.options_.playerOptions.persistTextTrackSettings), o.on(o.$(".vjs-done-button"), "click", function() {
                        o.saveSettings(), o.hide()
                    }), o.on(o.$(".vjs-default-button"), "click", function() {
                        o.setDefaults(), o.updateDisplay()
                    }), b.each(I, function(e) {
                        o.on(o.$(e.selector), "change", o.updateDisplay)
                    }), o.options_.persistTextTrackSettings && o.restoreSettings(), o
                }
                return s(t, e), t.prototype.createElSelect_ = function(e) {
                    var t = this,
                        n = I[e],
                        r = n.id.replace("%s", this.id_);
                    return [(0, y.createEl)("label", {
                        className: "vjs-label",
                        textContent: n.label
                    }, {
                        "for": r
                    }), (0, y.createEl)("select", {
                        id: r
                    }, void 0, n.options.map(function(e) {
                        return (0, y.createEl)("option", {
                            textContent: t.localize(e[1]),
                            value: e[0]
                        })
                    }))]
                }, t.prototype.createElFgColor_ = function() {
                    var e = (0, y.createEl)("legend", {
                            textContent: this.localize("Text")
                        }),
                        t = this.createElSelect_("color"),
                        n = (0, y.createEl)("span", {
                            className: "vjs-text-opacity vjs-opacity"
                        }, void 0, this.createElSelect_("textOpacity"));
                    return (0, y.createEl)("fieldset", {
                        className: "vjs-fg-color vjs-tracksetting"
                    }, void 0, [e].concat(t, n))
                }, t.prototype.createElBgColor_ = function() {
                    var e = (0, y.createEl)("legend", {
                            textContent: this.localize("Background")
                        }),
                        t = this.createElSelect_("backgroundColor"),
                        n = (0, y.createEl)("span", {
                            className: "vjs-bg-opacity vjs-opacity"
                        }, void 0, this.createElSelect_("backgroundOpacity"));
                    return (0, y.createEl)("fieldset", {
                        className: "vjs-bg-color vjs-tracksetting"
                    }, void 0, [e].concat(t, n))
                }, t.prototype.createElWinColor_ = function() {
                    var e = (0, y.createEl)("legend", {
                            textContent: this.localize("Window")
                        }),
                        t = this.createElSelect_("windowColor"),
                        n = (0, y.createEl)("span", {
                            className: "vjs-window-opacity vjs-opacity"
                        }, void 0, this.createElSelect_("windowOpacity"));
                    return (0, y.createEl)("fieldset", {
                        className: "vjs-window-color vjs-tracksetting"
                    }, void 0, [e].concat(t, n))
                }, t.prototype.createElColors_ = function() {
                    return (0, y.createEl)("div", {
                        className: "vjs-tracksettings-colors"
                    }, void 0, [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()])
                }, t.prototype.createElFont_ = function() {
                    var e = (0, y.createEl)("div", {
                            className: "vjs-font-percent vjs-tracksetting"
                        }, void 0, this.createElSelect_("fontPercent")),
                        t = (0, y.createEl)("div", {
                            className: "vjs-edge-style vjs-tracksetting"
                        }, void 0, this.createElSelect_("edgeStyle")),
                        n = (0, y.createEl)("div", {
                            className: "vjs-font-family vjs-tracksetting"
                        }, void 0, this.createElSelect_("fontFamily"));
                    return (0, y.createEl)("div", {
                        className: "vjs-tracksettings-font"
                    }, void 0, [e, t, n])
                }, t.prototype.createElControls_ = function() {
                    var e = (0, y.createEl)("button", {
                            className: "vjs-default-button",
                            textContent: this.localize("Defaults")
                        }),
                        t = (0, y.createEl)("button", {
                            className: "vjs-done-button",
                            textContent: "Done"
                        });
                    return (0, y.createEl)("div", {
                        className: "vjs-tracksettings-controls"
                    }, void 0, [e, t])
                }, t.prototype.createEl = function() {
                    var e = (0, y.createEl)("div", {
                            className: "vjs-tracksettings"
                        }, void 0, [this.createElColors_(), this.createElFont_(), this.createElControls_()]),
                        t = (0, y.createEl)("div", {
                            className: "vjs-control-text",
                            id: "TTsettingsDialogLabel-" + this.id_,
                            textContent: "Caption Settings Dialog"
                        }, {
                            "aria-level": "1",
                            role: "heading"
                        }),
                        n = (0, y.createEl)("div", {
                            className: "vjs-control-text",
                            id: "TTsettingsDialogDescription-" + this.id_,
                            textContent: "Beginning of dialog window. Escape will cancel and close the window."
                        }),
                        r = (0, y.createEl)("div", void 0, {
                            role: "document"
                        }, [t, n, e]);
                    return (0, y.createEl)("div", {
                        className: "vjs-caption-settings vjs-modal-overlay",
                        tabIndex: -1
                    }, {
                        role: "dialog",
                        "aria-labelledby": t.id,
                        "aria-describedby": n.id
                    }, r)
                }, t.prototype.getValues = function() {
                    var e = this;
                    return b.reduce(I, function(t, n, r) {
                        var o = u(e.$(n.selector), n.parser);
                        return void 0 !== o && (t[r] = o), t
                    }, {})
                }, t.prototype.setValues = function(e) {
                    var t = this;
                    b.each(I, function(n, r) {
                        c(t.$(n.selector), e[r], n.parser)
                    })
                }, t.prototype.setDefaults = function() {
                    var e = this;
                    b.each(I, function(t) {
                        var n = t.hasOwnProperty("default") ? t["default"] : 0;
                        e.$(t.selector).selectedIndex = n
                    })
                }, t.prototype.restoreSettings = function() {
                    var e = void 0;
                    try {
                        e = JSON.parse(f["default"].localStorage.getItem(w))
                    } catch (t) {
                        T["default"].warn(t)
                    }
                    e && this.setValues(e)
                }, t.prototype.saveSettings = function() {
                    if (this.options_.persistTextTrackSettings) {
                        var e = this.getValues();
                        try {
                            Object.keys(e).length ? f["default"].localStorage.setItem(w, JSON.stringify(e)) : f["default"].localStorage.removeItem(w)
                        } catch (t) {
                            T["default"].warn(t)
                        }
                    }
                }, t.prototype.updateDisplay = function() {
                    var e = this.player_.getChild("textTrackDisplay");
                    e && e.updateDisplay()
                }, t
            }(h["default"]);
            h["default"].registerComponent("TextTrackSettings", D), n["default"] = D
        }, {
            5: 5,
            81: 81,
            83: 83,
            86: 86,
            88: 88,
            95: 95
        }],
        72: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(67),
                u = o(l),
                c = e(83),
                p = r(c),
                f = e(73),
                d = e(86),
                h = o(d),
                y = e(95),
                v = o(y),
                g = e(75),
                m = o(g),
                b = e(92),
                _ = e(105),
                T = o(_),
                w = e(87),
                C = o(w),
                E = e(78),
                k = r(E),
                x = function(e, t) {
                    var n = new v["default"].WebVTT.Parser(v["default"], v["default"].vttjs, v["default"].WebVTT.StringDecoder()),
                        r = [];
                    n.oncue = function(e) {
                        t.addCue(e)
                    }, n.onparsingerror = function(e) {
                        r.push(e)
                    }, n.onflush = function() {
                        t.trigger({
                            type: "loadeddata",
                            target: t
                        })
                    }, n.parse(e), r.length > 0 && (v["default"].console && v["default"].console.groupCollapsed && v["default"].console.groupCollapsed("Text Track parsing errors for " + t.src), r.forEach(function(e) {
                        return h["default"].error(e)
                    }), v["default"].console && v["default"].console.groupEnd && v["default"].console.groupEnd()), n.flush()
                },
                S = function(e, t) {
                    var n = {
                            uri: e
                        },
                        r = (0, b.isCrossOrigin)(e);
                    r && (n.cors = r), (0, T["default"])(n, p.bind(this, function(e, n, r) {
                        return e ? h["default"].error(e, n) : (t.loaded_ = !0, void("function" != typeof v["default"].WebVTT ? t.tech_ && ! function() {
                            var e = function() {
                                return x(r, t)
                            };
                            t.tech_.on("vttjsloaded", e), t.tech_.on("vttjserror", function() {
                                h["default"].error("vttjs failed to load, stopping trying to process " + t.src), t.tech_.off("vttjsloaded", e)
                            })
                        }() : x(r, t)))
                    }))
                },
                O = function(e) {
                    function t() {
                        var n, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (i(this, t), !o.tech) throw new Error("A tech was not provided.");
                        var s = (0, C["default"])(o, {
                                kind: f.TextTrackKind[o.kind] || "subtitles",
                                language: o.language || o.srclang || ""
                            }),
                            l = f.TextTrackMode[s.mode] || "disabled",
                            c = s["default"];
                        "metadata" !== s.kind && "chapters" !== s.kind || (l = "hidden");
                        var d = n = a(this, e.call(this, s));
                        if (d.tech_ = s.tech, k.IS_IE8)
                            for (var h in t.prototype) "constructor" !== h && (d[h] = t.prototype[h]);
                        d.cues_ = [], d.activeCues_ = [];
                        var y = new u["default"](d.cues_),
                            v = new u["default"](d.activeCues_),
                            g = !1,
                            m = p.bind(d, function() {
                                this.activeCues, g && (this.trigger("cuechange"), g = !1)
                            });
                        return "disabled" !== l && d.tech_.on("timeupdate", m), Object.defineProperty(d, "default", {
                            get: function() {
                                return c
                            },
                            set: function() {}
                        }), Object.defineProperty(d, "mode", {
                            get: function() {
                                return l
                            },
                            set: function(e) {
                                f.TextTrackMode[e] && (l = e, "showing" === l && this.tech_.on("timeupdate", m), this.trigger("modechange"))
                            }
                        }), Object.defineProperty(d, "cues", {
                            get: function() {
                                return this.loaded_ ? y : null
                            },
                            set: function() {}
                        }), Object.defineProperty(d, "activeCues", {
                            get: function() {
                                if (!this.loaded_) return null;
                                if (0 === this.cues.length) return v;
                                for (var e = this.tech_.currentTime(), t = [], n = 0, r = this.cues.length; n < r; n++) {
                                    var o = this.cues[n];
                                    o.startTime <= e && o.endTime >= e ? t.push(o) : o.startTime === o.endTime && o.startTime <= e && o.startTime + .5 >= e && t.push(o)
                                }
                                if (g = !1, t.length !== this.activeCues_.length) g = !0;
                                else
                                    for (var i = 0; i < t.length; i++) this.activeCues_.indexOf(t[i]) === -1 && (g = !0);
                                return this.activeCues_ = t, v.setCues_(this.activeCues_), v
                            },
                            set: function() {}
                        }), s.src ? (d.src = s.src, S(s.src, d)) : d.loaded_ = !0, r = d, a(n, r)
                    }
                    return s(t, e), t.prototype.addCue = function(e) {
                        var t = this.tech_.textTracks();
                        if (t)
                            for (var n = 0; n < t.length; n++) t[n] !== this && t[n].removeCue(e);
                        this.cues_.push(e), this.cues.setCues_(this.cues_)
                    }, t.prototype.removeCue = function(e) {
                        for (var t = !1, n = 0, r = this.cues_.length; n < r; n++) {
                            var o = this.cues_[n];
                            o === e && (this.cues_.splice(n, 1), t = !0)
                        }
                        t && this.cues.setCues_(this.cues_)
                    }, t
                }(m["default"]);
            O.prototype.allowedEvents_ = {
                cuechange: "cuechange"
            }, n["default"] = O
        }, {
            105: 105,
            67: 67,
            73: 73,
            75: 75,
            78: 78,
            83: 83,
            86: 86,
            87: 87,
            92: 92,
            95: 95
        }],
        73: [function(e, t, n) {
            "use strict";
            n.__esModule = !0;
            n.VideoTrackKind = {
                alternative: "alternative",
                captions: "captions",
                main: "main",
                sign: "sign",
                subtitles: "subtitles",
                commentary: "commentary"
            }, n.AudioTrackKind = {
                alternative: "alternative",
                descriptions: "descriptions",
                main: "main",
                "main-desc": "main-desc",
                translation: "translation",
                commentary: "commentary"
            }, n.TextTrackKind = {
                subtitles: "subtitles",
                captions: "captions",
                descriptions: "descriptions",
                chapters: "chapters",
                metadata: "metadata"
            }, n.TextTrackMode = {
                disabled: "disabled",
                hidden: "hidden",
                showing: "showing"
            }
        }, {}],
        74: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(42),
                u = o(l),
                c = e(78),
                p = r(c),
                f = e(94),
                d = o(f),
                h = function(e) {
                    function t() {
                        var n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        i(this, t);
                        var s = a(this, e.call(this));
                        if (!o && (o = s, p.IS_IE8)) {
                            o = d["default"].createElement("custom");
                            for (var l in t.prototype) "constructor" !== l && (o[l] = t.prototype[l])
                        }
                        o.tracks_ = [], Object.defineProperty(o, "length", {
                            get: function() {
                                return this.tracks_.length
                            }
                        });
                        for (var u = 0; u < r.length; u++) o.addTrack_(r[u]);
                        return n = o, a(s, n)
                    }
                    return s(t, e), t.prototype.addTrack_ = function(e) {
                        var t = this.tracks_.length;
                        "" + t in this || Object.defineProperty(this, t, {
                            get: function() {
                                return this.tracks_[t]
                            }
                        }), this.tracks_.indexOf(e) === -1 && (this.tracks_.push(e), this.trigger({
                            track: e,
                            type: "addtrack"
                        }))
                    }, t.prototype.removeTrack_ = function(e) {
                        for (var t = void 0, n = 0, r = this.length; n < r; n++)
                            if (this[n] === e) {
                                t = this[n], t.off && t.off(), this.tracks_.splice(n, 1);
                                break
                            }
                        t && this.trigger({
                            track: t,
                            type: "removetrack"
                        })
                    }, t.prototype.getTrackById = function(e) {
                        for (var t = null, n = 0, r = this.length; n < r; n++) {
                            var o = this[n];
                            if (o.id === e) {
                                t = o;
                                break
                            }
                        }
                        return t
                    }, t
                }(u["default"]);
            h.prototype.allowedEvents_ = {
                change: "change",
                addtrack: "addtrack",
                removetrack: "removetrack"
            };
            for (var y in h.prototype.allowedEvents_) h.prototype["on" + y] = null;
            n["default"] = h
        }, {
            42: 42,
            78: 78,
            94: 94
        }],
        75: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(78),
                u = o(l),
                c = e(94),
                p = r(c),
                f = e(85),
                d = o(f),
                h = e(42),
                y = r(h),
                v = function(e) {
                    function t() {
                        var n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, t);
                        var o = a(this, e.call(this)),
                            s = o;
                        if (u.IS_IE8) {
                            s = p["default"].createElement("custom");
                            for (var l in t.prototype) "constructor" !== l && (s[l] = t.prototype[l])
                        }
                        var c = {
                                id: r.id || "vjs_track_" + d.newGUID(),
                                kind: r.kind || "",
                                label: r.label || "",
                                language: r.language || ""
                            },
                            f = function(e) {
                                Object.defineProperty(s, e, {
                                    get: function() {
                                        return c[e]
                                    },
                                    set: function() {}
                                })
                            };
                        for (var h in c) f(h);
                        return n = s, a(o, n)
                    }
                    return s(t, e), t
                }(y["default"]);
            n["default"] = v
        }, {
            42: 42,
            78: 78,
            85: 85,
            94: 94
        }],
        76: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(74),
                u = o(l),
                c = e(78),
                p = r(c),
                f = e(94),
                d = o(f),
                h = function(e, t) {
                    for (var n = 0; n < e.length; n++) t.id !== e[n].id && (e[n].selected = !1)
                },
                y = function(e) {
                    function t() {
                        var n, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        i(this, t);
                        for (var s = void 0, l = o.length - 1; l >= 0; l--)
                            if (o[l].selected) {
                                h(o, o[l]);
                                break
                            }
                        if (p.IS_IE8) {
                            s = d["default"].createElement("custom");
                            for (var c in u["default"].prototype) "constructor" !== c && (s[c] = u["default"].prototype[c]);
                            for (var f in t.prototype) "constructor" !== f && (s[f] = t.prototype[f])
                        }
                        return s = n = a(this, e.call(this, o, s)), s.changing_ = !1, Object.defineProperty(s, "selectedIndex", {
                            get: function() {
                                for (var e = 0; e < this.length; e++)
                                    if (this[e].selected) return e;
                                return -1
                            },
                            set: function() {}
                        }), r = s, a(n, r)
                    }
                    return s(t, e), t.prototype.addTrack_ = function(t) {
                        var n = this;
                        t.selected && h(this, t), e.prototype.addTrack_.call(this, t), t.addEventListener && t.addEventListener("selectedchange", function() {
                            n.changing_ || (n.changing_ = !0, h(n, t), n.changing_ = !1, n.trigger("change"))
                        })
                    }, t.prototype.addTrack = function(e) {
                        this.addTrack_(e)
                    }, t.prototype.removeTrack = function(t) {
                        e.prototype.removeTrack_.call(this, t)
                    }, t
                }(u["default"]);
            n["default"] = y
        }, {
            74: 74,
            78: 78,
            94: 94
        }],
        77: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            n.__esModule = !0;
            var l = e(73),
                u = e(75),
                c = o(u),
                p = e(87),
                f = o(p),
                d = e(78),
                h = r(d),
                y = function(e) {
                    function t() {
                        var n, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, t);
                        var s = (0, f["default"])(o, {
                                kind: l.VideoTrackKind[o.kind] || ""
                            }),
                            u = n = a(this, e.call(this, s)),
                            c = !1;
                        if (h.IS_IE8)
                            for (var p in t.prototype) "constructor" !== p && (u[p] = t.prototype[p]);
                        return Object.defineProperty(u, "selected", {
                            get: function() {
                                return c
                            },
                            set: function(e) {
                                "boolean" == typeof e && e !== c && (c = e, this.trigger("selectedchange"))
                            }
                        }), s.selected && (u.selected = s.selected), r = u, a(n, r)
                    }
                    return s(t, e), t
                }(c["default"]);
            n["default"] = y
        }, {
            73: 73,
            75: 75,
            78: 78,
            87: 87
        }],
        78: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }
            n.__esModule = !0, n.BACKGROUND_SIZE_SUPPORTED = n.TOUCH_ENABLED = n.IS_ANY_SAFARI = n.IS_SAFARI = n.IE_VERSION = n.IS_IE8 = n.IS_CHROME = n.IS_EDGE = n.IS_FIREFOX = n.IS_NATIVE_ANDROID = n.IS_OLD_ANDROID = n.ANDROID_VERSION = n.IS_ANDROID = n.IOS_VERSION = n.IS_IOS = n.IS_IPOD = n.IS_IPHONE = n.IS_IPAD = void 0;
            var i = e(81),
                a = o(i),
                s = e(95),
                l = r(s),
                u = l["default"].navigator && l["default"].navigator.userAgent || "",
                c = /AppleWebKit\/([\d.]+)/i.exec(u),
                p = c ? parseFloat(c.pop()) : null,
                f = n.IS_IPAD = /iPad/i.test(u),
                d = n.IS_IPHONE = /iPhone/i.test(u) && !f,
                h = n.IS_IPOD = /iPod/i.test(u),
                y = n.IS_IOS = d || f || h,
                v = (n.IOS_VERSION = function() {
                    var e = u.match(/OS (\d+)_/i);
                    return e && e[1] ? e[1] : null
                }(), n.IS_ANDROID = /Android/i.test(u)),
                g = n.ANDROID_VERSION = function() {
                    var e = u.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                    if (!e) return null;
                    var t = e[1] && parseFloat(e[1]),
                        n = e[2] && parseFloat(e[2]);
                    return t && n ? parseFloat(e[1] + "." + e[2]) : t ? t : null
                }(),
                m = (n.IS_OLD_ANDROID = v && /webkit/i.test(u) && g < 2.3, n.IS_NATIVE_ANDROID = v && g < 5 && p < 537, n.IS_FIREFOX = /Firefox/i.test(u), n.IS_EDGE = /Edge/i.test(u)),
                b = n.IS_CHROME = !m && /Chrome/i.test(u),
                _ = (n.IS_IE8 = /MSIE\s8\.0/.test(u), n.IE_VERSION = function(e) {
                    return e && parseFloat(e[1])
                }(/MSIE\s(\d+)\.\d/.exec(u)), n.IS_SAFARI = /Safari/i.test(u) && !b && !v && !m);
            n.IS_ANY_SAFARI = _ || y, n.TOUCH_ENABLED = a.isReal() && ("ontouchstart" in l["default"] || l["default"].DocumentTouch && l["default"].document instanceof l["default"].DocumentTouch), n.BACKGROUND_SIZE_SUPPORTED = a.isReal() && "backgroundSize" in l["default"].document.createElement("video").style
        }, {
            81: 81,
            95: 95
        }],
        79: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = 0,
                    r = void 0,
                    i = void 0;
                if (!t) return 0;
                e && e.length || (e = (0, o.createTimeRange)(0, 0));
                for (var a = 0; a < e.length; a++) r = e.start(a), i = e.end(a), i > t && (i = t), n += i - r;
                return n / t
            }
            n.__esModule = !0, n.bufferedPercent = r;
            var o = e(90)
        }, {
            90: 90
        }],
        80: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t) {
                if (!e || !t) return "";
                if ("function" == typeof a["default"].getComputedStyle) {
                    var n = a["default"].getComputedStyle(e);
                    return n ? n[t] : ""
                }
                return e.currentStyle[t] || ""
            }
            n.__esModule = !0, n["default"] = o;
            var i = e(95),
                a = r(i)
        }, {
            95: 95
        }],
        81: [function(e, t, n) {
            "use strict";

            function r(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function i(e, t) {
                return e.raw = t, e
            }

            function a(e) {
                return "string" == typeof e && /\S/.test(e)
            }

            function s(e) {
                if (/\s/.test(e)) throw new Error("class has illegal whitespace characters")
            }

            function l(e) {
                return new RegExp("(^|\\s)" + e + "($|\\s)")
            }

            function u() {
                return H["default"] === V["default"].document && "undefined" != typeof H["default"].createElement
            }

            function c(e) {
                return (0, Y.isObject)(e) && 1 === e.nodeType
            }

            function p(e) {
                return function(t, n) {
                    if (!a(t)) return H["default"][e](null);
                    a(n) && (n = H["default"].querySelector(n));
                    var r = c(n) ? n : H["default"];
                    return r[e] && r[e](t)
                }
            }

            function f(e) {
                return 0 === e.indexOf("#") && (e = e.slice(1)), H["default"].getElementById(e)
            }

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments[3],
                    o = H["default"].createElement(e);
                return Object.getOwnPropertyNames(t).forEach(function(e) {
                    var n = t[e];
                    e.indexOf("aria-") !== -1 || "role" === e || "type" === e ? (U["default"].warn((0, X["default"])(L, e, n)), o.setAttribute(e, n)) : "textContent" === e ? h(o, n) : o[e] = n
                }), Object.getOwnPropertyNames(n).forEach(function(e) {
                    o.setAttribute(e, n[e])
                }), r && D(o, r), o
            }

            function h(e, t) {
                return "undefined" == typeof e.textContent ? e.innerText = t : e.textContent = t, e
            }

            function y(e, t) {
                t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
            }

            function v(e) {
                var t = e[K];
                return t || (t = e[K] = W.newGUID()), G[t] || (G[t] = {}), G[t]
            }

            function g(e) {
                var t = e[K];
                return !!t && !!Object.getOwnPropertyNames(G[t]).length
            }

            function m(e) {
                var t = e[K];
                if (t) {
                    delete G[t];
                    try {
                        delete e[K]
                    } catch (n) {
                        e.removeAttribute ? e.removeAttribute(K) : e[K] = null
                    }
                }
            }

            function b(e, t) {
                return s(t), e.classList ? e.classList.contains(t) : l(t).test(e.className)
            }

            function _(e, t) {
                return e.classList ? e.classList.add(t) : b(e, t) || (e.className = (e.className + " " + t).trim()), e
            }

            function T(e, t) {
                return e.classList ? e.classList.remove(t) : (s(t), e.className = e.className.split(/\s+/).filter(function(e) {
                    return e !== t
                }).join(" ")), e
            }

            function w(e, t, n) {
                var r = b(e, t);
                if ("function" == typeof n && (n = n(e, t)), "boolean" != typeof n && (n = !r), n !== r) return n ? _(e, t) : T(e, t), e
            }

            function C(e, t) {
                Object.getOwnPropertyNames(t).forEach(function(n) {
                    var r = t[n];
                    null === r || "undefined" == typeof r || r === !1 ? e.removeAttribute(n) : e.setAttribute(n, r === !0 ? "" : r)
                })
            }

            function E(e) {
                var t = {},
                    n = ",autoplay,controls,loop,muted,default,";
                if (e && e.attributes && e.attributes.length > 0)
                    for (var r = e.attributes, o = r.length - 1; o >= 0; o--) {
                        var i = r[o].name,
                            a = r[o].value;
                        "boolean" != typeof e[i] && n.indexOf("," + i + ",") === -1 || (a = null !== a), t[i] = a
                    }
                return t
            }

            function k(e, t) {
                return e.getAttribute(t)
            }

            function x(e, t, n) {
                e.setAttribute(t, n)
            }

            function S(e, t) {
                e.removeAttribute(t)
            }

            function O() {
                H["default"].body.focus(), H["default"].onselectstart = function() {
                    return !1
                }
            }

            function j() {
                H["default"].onselectstart = function() {
                    return !0
                }
            }

            function P(e) {
                var t = void 0;
                if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), !t) return {
                    left: 0,
                    top: 0
                };
                var n = H["default"].documentElement,
                    r = H["default"].body,
                    o = n.clientLeft || r.clientLeft || 0,
                    i = V["default"].pageXOffset || r.scrollLeft,
                    a = t.left + i - o,
                    s = n.clientTop || r.clientTop || 0,
                    l = V["default"].pageYOffset || r.scrollTop,
                    u = t.top + l - s;
                return {
                    left: Math.round(a),
                    top: Math.round(u)
                }
            }

            function M(e, t) {
                var n = {},
                    r = P(e),
                    o = e.offsetWidth,
                    i = e.offsetHeight,
                    a = r.top,
                    s = r.left,
                    l = t.pageY,
                    u = t.pageX;
                return t.changedTouches && (u = t.changedTouches[0].pageX, l = t.changedTouches[0].pageY), n.y = Math.max(0, Math.min(1, (a - l + i) / i)), n.x = Math.max(0, Math.min(1, (u - s) / o)), n
            }

            function A(e) {
                return (0, Y.isObject)(e) && 3 === e.nodeType
            }

            function N(e) {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                return e
            }

            function I(e) {
                return "function" == typeof e && (e = e()), (Array.isArray(e) ? e : [e]).map(function(e) {
                    return "function" == typeof e && (e = e()), c(e) || A(e) ? e : "string" == typeof e && /\S/.test(e) ? H["default"].createTextNode(e) : void 0
                }).filter(function(e) {
                    return e
                })
            }

            function D(e, t) {
                return I(t).forEach(function(t) {
                    return e.appendChild(t)
                }), e
            }

            function R(e, t) {
                return D(N(e), t)
            }
            n.__esModule = !0, n.$$ = n.$ = void 0;
            var L = i(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);
            n.isReal = u, n.isEl = c, n.getEl = f, n.createEl = d, n.textContent = h, n.insertElFirst = y, n.getElData = v, n.hasElData = g, n.removeElData = m, n.hasElClass = b, n.addElClass = _, n.removeElClass = T, n.toggleElClass = w, n.setElAttributes = C, n.getElAttributes = E, n.getAttribute = k, n.setAttribute = x, n.removeAttribute = S, n.blockTextSelection = O, n.unblockTextSelection = j, n.findElPosition = P, n.getPointerPosition = M, n.isTextNode = A, n.emptyEl = N, n.normalizeContent = I, n.appendContent = D, n.insertContent = R;
            var F = e(94),
                H = o(F),
                B = e(95),
                V = o(B),
                q = e(85),
                W = r(q),
                z = e(86),
                U = o(z),
                $ = e(98),
                X = o($),
                Y = e(88),
                G = {},
                K = "vdata" + (new Date).getTime();
            n.$ = p("querySelector"), n.$$ = p("querySelectorAll")
        }, {
            85: 85,
            86: 86,
            88: 88,
            94: 94,
            95: 95,
            98: 98
        }],
        82: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function i(e, t) {
                var n = d.getElData(e);
                0 === n.handlers[t].length && (delete n.handlers[t], e.removeEventListener ? e.removeEventListener(t, n.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, n.dispatcher)), Object.getOwnPropertyNames(n.handlers).length <= 0 && (delete n.handlers, delete n.dispatcher, delete n.disabled), 0 === Object.getOwnPropertyNames(n).length && d.removeElData(e)
            }

            function a(e, t, n, r) {
                n.forEach(function(n) {
                    e(t, n, r)
                })
            }

            function s(e) {
                function t() {
                    return !0
                }

                function n() {
                    return !1
                }
                return e && e.isPropagationStopped || ! function() {
                    var r = e || b["default"].event;
                    e = {};
                    for (var o in r) "layerX" !== o && "layerY" !== o && "keyLocation" !== o && "webkitMovementX" !== o && "webkitMovementY" !== o && ("returnValue" === o && r.preventDefault || (e[o] = r[o]));
                    if (e.target || (e.target = e.srcElement || T["default"]), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), e.preventDefault = function() {
                            r.preventDefault && r.preventDefault(), e.returnValue = !1, r.returnValue = !1, e.defaultPrevented = !0
                        }, e.defaultPrevented = !1, e.stopPropagation = function() {
                            r.stopPropagation && r.stopPropagation(), e.cancelBubble = !0, r.cancelBubble = !0, e.isPropagationStopped = t
                        }, e.isPropagationStopped = n, e.stopImmediatePropagation = function() {
                            r.stopImmediatePropagation && r.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation()
                        }, e.isImmediatePropagationStopped = n, null !== e.clientX && void 0 !== e.clientX) {
                        var i = T["default"].documentElement,
                            a = T["default"].body;
                        e.pageX = e.clientX + (i && i.scrollLeft || a && a.scrollLeft || 0) - (i && i.clientLeft || a && a.clientLeft || 0), e.pageY = e.clientY + (i && i.scrollTop || a && a.scrollTop || 0) - (i && i.clientTop || a && a.clientTop || 0)
                    }
                    e.which = e.charCode || e.keyCode, null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
                }(), e
            }

            function l(e, t, n) {
                if (Array.isArray(t)) return a(l, e, t, n);
                var r = d.getElData(e);
                r.handlers || (r.handlers = {}), r.handlers[t] || (r.handlers[t] = []), n.guid || (n.guid = y.newGUID()), r.handlers[t].push(n), r.dispatcher || (r.disabled = !1, r.dispatcher = function(t, n) {
                    if (!r.disabled) {
                        t = s(t);
                        var o = r.handlers[t.type];
                        if (o)
                            for (var i = o.slice(0), a = 0, l = i.length; a < l && !t.isImmediatePropagationStopped(); a++) try {
                                i[a].call(e, t, n)
                            } catch (u) {
                                g["default"].error(u)
                            }
                    }
                }), 1 === r.handlers[t].length && (e.addEventListener ? e.addEventListener(t, r.dispatcher, !1) : e.attachEvent && e.attachEvent("on" + t, r.dispatcher))
            }

            function u(e, t, n) {
                if (d.hasElData(e)) {
                    var r = d.getElData(e);
                    if (r.handlers) {
                        if (Array.isArray(t)) return a(u, e, t, n);
                        var o = function(t) {
                            r.handlers[t] = [], i(e, t)
                        };
                        if (t) {
                            var s = r.handlers[t];
                            if (s) {
                                if (!n) return void o(t);
                                if (n.guid)
                                    for (var l = 0; l < s.length; l++) s[l].guid === n.guid && s.splice(l--, 1);
                                i(e, t)
                            }
                        } else
                            for (var c in r.handlers) o(c)
                    }
                }
            }

            function c(e, t, n) {
                var r = d.hasElData(e) ? d.getElData(e) : {},
                    o = e.parentNode || e.ownerDocument;
                if ("string" == typeof t && (t = {
                        type: t,
                        target: e
                    }), t = s(t), r.dispatcher && r.dispatcher.call(e, t, n), o && !t.isPropagationStopped() && t.bubbles === !0) c.call(null, o, t, n);
                else if (!o && !t.defaultPrevented) {
                    var i = d.getElData(t.target);
                    t.target[t.type] && (i.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), i.disabled = !1)
                }
                return !t.defaultPrevented
            }

            function p(e, t, n) {
                if (Array.isArray(t)) return a(p, e, t, n);
                var r = function o() {
                    u(e, t, o), n.apply(this, arguments)
                };
                r.guid = n.guid = n.guid || y.newGUID(), l(e, t, r)
            }
            n.__esModule = !0, n.fixEvent = s, n.on = l, n.off = u, n.trigger = c, n.one = p;
            var f = e(81),
                d = o(f),
                h = e(85),
                y = o(h),
                v = e(86),
                g = r(v),
                m = e(95),
                b = r(m),
                _ = e(94),
                T = r(_)
        }, {
            81: 81,
            85: 85,
            86: 86,
            94: 94,
            95: 95
        }],
        83: [function(e, t, n) {
            "use strict";
            n.__esModule = !0, n.throttle = n.bind = void 0;
            var r = e(85);
            n.bind = function(e, t, n) {
                t.guid || (t.guid = (0, r.newGUID)());
                var o = function() {
                    return t.apply(e, arguments)
                };
                return o.guid = n ? n + "_" + t.guid : t.guid, o
            }, n.throttle = function(e, t) {
                var n = Date.now(),
                    r = function() {
                        var r = Date.now();
                        r - n >= t && (e.apply(void 0, arguments), n = r)
                    };
                return r
            }
        }, {
            85: 85
        }],
        84: [function(e, t, n) {
            "use strict";

            function r(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                e = e < 0 ? 0 : e;
                var n = Math.floor(e % 60),
                    r = Math.floor(e / 60 % 60),
                    o = Math.floor(e / 3600),
                    i = Math.floor(t / 60 % 60),
                    a = Math.floor(t / 3600);
                return (isNaN(e) || e === 1 / 0) && (o = r = n = "-"), o = o > 0 || a > 0 ? o + ":" : "", r = ((o || i >= 10) && r < 10 ? "0" + r : r) + ":", n = n < 10 ? "0" + n : n, o + r + n
            }
            n.__esModule = !0, n["default"] = r
        }, {}],
        85: [function(e, t, n) {
            "use strict";

            function r() {
                return o++
            }
            n.__esModule = !0, n.newGUID = r;
            var o = 1
        }, {}],
        86: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            n.__esModule = !0, n.logByType = void 0;
            var o = e(95),
                i = r(o),
                a = e(78),
                s = e(88),
                l = void 0,
                u = n.logByType = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !!a.IE_VERSION && a.IE_VERSION < 11;
                    "log" !== e && t.unshift(e.toUpperCase() + ":"), l.history.push(t), t.unshift("VIDEOJS:");
                    var r = i["default"].console && i["default"].console[e];
                    r && (n && (t = t.map(function(e) {
                        if ((0, s.isObject)(e) || Array.isArray(e)) try {
                            return JSON.stringify(e)
                        } catch (t) {
                            return String(e)
                        }
                        return String(e)
                    }).join(" ")), r.apply ? r[Array.isArray(t) ? "apply" : "call"](i["default"].console, t) : r(t))
                };
            l = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                u("log", t)
            }, l.history = [], l.error = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return u("error", t)
            }, l.warn = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return u("warn", t)
            }, n["default"] = l
        }, {
            78: 78,
            88: 88,
            95: 95
        }],
        87: [function(e, t, n) {
            "use strict";

            function r() {
                for (var e = {}, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return n.forEach(function(t) {
                    t && (0, o.each)(t, function(t, n) {
                        return (0, o.isPlain)(t) ? ((0, o.isPlain)(e[n]) || (e[n] = {}), void(e[n] = r(e[n], t))) : void(e[n] = t)
                    })
                }), e
            }
            n.__esModule = !0, n["default"] = r;
            var o = e(88)
        }, {
            88: 88
        }],
        88: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                Object.keys(e).forEach(function(n) {
                    return t(e[n], n)
                })
            }

            function o(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return Object.keys(e).reduce(function(n, r) {
                    return t(n, e[r], r)
                }, n)
            }

            function i(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                return Object.assign ? Object.assign.apply(Object, [e].concat(n)) : (n.forEach(function(t) {
                    t && r(t, function(t, n) {
                        e[n] = t
                    })
                }), e)
            }

            function a(e) {
                return !!e && "object" === ("undefined" == typeof e ? "undefined" : l(e))
            }

            function s(e) {
                return a(e) && "[object Object]" === u.call(e) && e.constructor === Object
            }
            n.__esModule = !0;
            var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            n.each = r, n.reduce = o, n.assign = i, n.isObject = a, n.isPlain = s;
            var u = Object.prototype.toString;
        }, {}],
        89: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            n.__esModule = !0, n.setTextContent = n.createStyleElement = void 0;
            var o = e(94),
                i = r(o);
            n.createStyleElement = function(e) {
                var t = i["default"].createElement("style");
                return t.className = e, t
            }, n.setTextContent = function(e, t) {
                e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t
            }
        }, {
            94: 94
        }],
        90: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function o(e, t, n) {
                if (t < 0 || t > n) throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is greater than or equal to the maximum bound (" + n + ").")
            }

            function i(e, t, n, r) {
                return void 0 === r && (u["default"].warn("DEPRECATED: Function '" + e + "' on 'TimeRanges' called without an index argument."), r = 0), o(e, r, n.length - 1), n[r][t]
            }

            function a(e) {
                return void 0 === e || 0 === e.length ? {
                    length: 0,
                    start: function() {
                        throw new Error("This TimeRanges object is empty")
                    },
                    end: function() {
                        throw new Error("This TimeRanges object is empty")
                    }
                } : {
                    length: e.length,
                    start: i.bind(null, "start", 0, e),
                    end: i.bind(null, "end", 1, e)
                }
            }

            function s(e, t) {
                return Array.isArray(e) ? a(e) : void 0 === e || void 0 === t ? a() : a([
                    [e, t]
                ])
            }
            n.__esModule = !0, n.createTimeRange = void 0, n.createTimeRanges = s;
            var l = e(86),
                u = r(l);
            n.createTimeRange = s
        }, {
            86: 86
        }],
        91: [function(e, t, n) {
            "use strict";

            function r(e) {
                return "string" != typeof e ? e : e.charAt(0).toUpperCase() + e.slice(1)
            }
            n.__esModule = !0, n["default"] = r
        }, {}],
        92: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            n.__esModule = !0, n.isCrossOrigin = n.getFileExtension = n.getAbsoluteURL = n.parseUrl = void 0;
            var o = e(94),
                i = r(o),
                a = e(95),
                s = r(a),
                l = n.parseUrl = function(e) {
                    var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                        n = i["default"].createElement("a");
                    n.href = e;
                    var r = "" === n.host && "file:" !== n.protocol,
                        o = void 0;
                    r && (o = i["default"].createElement("div"), o.innerHTML = '<a href="' + e + '"></a>', n = o.firstChild, o.setAttribute("style", "display:none; position:absolute;"), i["default"].body.appendChild(o));
                    for (var a = {}, s = 0; s < t.length; s++) a[t[s]] = n[t[s]];
                    return "http:" === a.protocol && (a.host = a.host.replace(/:80$/, "")), "https:" === a.protocol && (a.host = a.host.replace(/:443$/, "")), r && i["default"].body.removeChild(o), a
                };
            n.getAbsoluteURL = function(e) {
                if (!e.match(/^https?:\/\//)) {
                    var t = i["default"].createElement("div");
                    t.innerHTML = '<a href="' + e + '">x</a>', e = t.firstChild.href
                }
                return e
            }, n.getFileExtension = function(e) {
                if ("string" == typeof e) {
                    var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i,
                        n = t.exec(e);
                    if (n) return n.pop().toLowerCase()
                }
                return ""
            }, n.isCrossOrigin = function(e) {
                var t = s["default"].location,
                    n = l(e),
                    r = ":" === n.protocol ? t.protocol : n.protocol,
                    o = r + n.host !== t.protocol + t.host;
                return o
            }
        }, {
            94: 94,
            95: 95
        }],
        93: [function(t, n, r) {
            "use strict";

            function o(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }

            function i(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }

            function a(e, t, n) {
                var r = void 0;
                if ("string" == typeof e) {
                    if (0 === e.indexOf("#") && (e = e.slice(1)), a.getPlayers()[e]) return t && B["default"].warn('Player "' + e + '" is already initialised. Options will not be applied.'), n && a.getPlayers()[e].ready(n), a.getPlayers()[e];
                    r = q.getEl(e)
                } else r = e;
                if (!r || !r.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
                if (r.player || C["default"].players[r.playerId]) return r.player || C["default"].players[r.playerId];
                t = t || {}, a.hooks("beforesetup").forEach(function(e) {
                    var n = e(r, (0, S["default"])(t));
                    return !(0, X.isObject)(n) || Array.isArray(n) ? void B["default"].error("please return an object in beforesetup hooks") : void(t = (0, S["default"])(t, n))
                });
                var o = g["default"].getComponent("Player"),
                    i = new o(r, t, n);
                return a.hooks("setup").forEach(function(e) {
                    return e(i)
                }), i
            }
            r.__esModule = !0;
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                l = t(95),
                u = i(l),
                c = t(94),
                p = i(c),
                f = t(56),
                d = o(f),
                h = t(89),
                y = o(h),
                v = t(5),
                g = i(v),
                m = t(42),
                b = i(m),
                _ = t(82),
                T = o(_),
                w = t(51),
                C = i(w),
                E = t(52),
                k = i(E),
                x = t(87),
                S = i(x),
                O = t(83),
                j = o(O),
                P = t(72),
                M = i(P),
                A = t(64),
                N = i(A),
                I = t(77),
                D = i(I),
                R = t(90),
                L = t(84),
                F = i(L),
                H = t(86),
                B = i(H),
                V = t(81),
                q = o(V),
                W = t(78),
                z = o(W),
                U = t(92),
                $ = o(U),
                X = t(88),
                Y = t(80),
                G = i(Y),
                K = t(43),
                J = i(K),
                Z = t(105),
                Q = i(Z),
                ee = t(62),
                te = i(ee);
            if ("undefined" == typeof HTMLVideoElement && q.isReal() && (p["default"].createElement("video"), p["default"].createElement("audio"), p["default"].createElement("track")), a.hooks_ = {}, a.hooks = function(e, t) {
                    return a.hooks_[e] = a.hooks_[e] || [], t && (a.hooks_[e] = a.hooks_[e].concat(t)), a.hooks_[e]
                }, a.hook = function(e, t) {
                    a.hooks(e, t)
                }, a.removeHook = function(e, t) {
                    var n = a.hooks(e).indexOf(t);
                    return !(n <= -1) && (a.hooks_[e] = a.hooks_[e].slice(), a.hooks_[e].splice(n, 1), !0)
                }, u["default"].VIDEOJS_NO_DYNAMIC_STYLE !== !0 && q.isReal()) {
                var ne = q.$(".vjs-styles-defaults");
                if (!ne) {
                    ne = y.createStyleElement("vjs-styles-defaults");
                    var re = q.$("head");
                    re && re.insertBefore(ne, re.firstChild), y.setTextContent(ne, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
                }
            }
            d.autoSetupTimeout(1, a), a.VERSION = "5.16.0", a.options = C["default"].prototype.options_, a.getPlayers = function() {
                return C["default"].players
            }, a.players = C["default"].players, a.getComponent = g["default"].getComponent, a.registerComponent = function(e, t) {
                te["default"].isTech(t) && B["default"].warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), g["default"].registerComponent.call(g["default"], e, t)
            }, a.getTech = te["default"].getTech, a.registerTech = te["default"].registerTech, a.browser = z, a.TOUCH_ENABLED = z.TOUCH_ENABLED, a.extend = J["default"], a.mergeOptions = S["default"], a.bind = j.bind, a.plugin = k["default"], a.addLanguage = function(e, t) {
                var n;
                return e = ("" + e).toLowerCase(), a.options.languages = (0, S["default"])(a.options.languages, (n = {}, n[e] = t, n)), a.options.languages[e]
            }, a.log = B["default"], a.createTimeRange = a.createTimeRanges = R.createTimeRanges, a.formatTime = F["default"], a.parseUrl = $.parseUrl, a.isCrossOrigin = $.isCrossOrigin, a.EventTarget = b["default"], a.on = T.on, a.one = T.one, a.off = T.off, a.trigger = T.trigger, a.xhr = Q["default"], a.TextTrack = M["default"], a.AudioTrack = N["default"], a.VideoTrack = D["default"], a.isEl = q.isEl, a.isTextNode = q.isTextNode, a.createEl = q.createEl, a.hasClass = q.hasElClass, a.addClass = q.addElClass, a.removeClass = q.removeElClass, a.toggleClass = q.toggleElClass, a.setAttributes = q.setElAttributes, a.getAttributes = q.getElAttributes, a.emptyEl = q.emptyEl, a.appendContent = q.appendContent, a.insertContent = q.insertContent, a.computedStyle = G["default"], "function" == typeof e && e.amd ? e("videojs", [], function() {
                return a
            }) : "object" === ("undefined" == typeof r ? "undefined" : s(r)) && "object" === ("undefined" == typeof n ? "undefined" : s(n)) && (n.exports = a), r["default"] = a
        }, {
            105: 105,
            42: 42,
            43: 43,
            5: 5,
            51: 51,
            52: 52,
            56: 56,
            62: 62,
            64: 64,
            72: 72,
            77: 77,
            78: 78,
            80: 80,
            81: 81,
            82: 82,
            83: 83,
            84: 84,
            86: 86,
            87: 87,
            88: 88,
            89: 89,
            90: 90,
            92: 92,
            94: 94,
            95: 95
        }],
        94: [function(e, t, n) {
            (function(n) {
                var r = "undefined" != typeof n ? n : "undefined" != typeof window ? window : {},
                    o = e(96);
                if ("undefined" != typeof document) t.exports = document;
                else {
                    var i = r["__GLOBAL_DOCUMENT_CACHE@4"];
                    i || (i = r["__GLOBAL_DOCUMENT_CACHE@4"] = o), t.exports = i
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            96: 96
        }],
        95: [function(e, t, n) {
            (function(e) {
                "undefined" != typeof window ? t.exports = window : "undefined" != typeof e ? t.exports = e : "undefined" != typeof self ? t.exports = self : t.exports = {}
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        96: [function(e, t, n) {}, {}],
        97: [function(e, t, n) {
            function r(e, t) {
                var n, r = null;
                try {
                    n = JSON.parse(e, t)
                } catch (o) {
                    r = o
                }
                return [r, n]
            }
            t.exports = r
        }, {}],
        98: [function(e, t, n) {
            function r(e) {
                return e.replace(/\n\r?\s*/g, "")
            }
            t.exports = function(e) {
                for (var t = "", n = 0; n < arguments.length; n++) t += r(e[n]) + (arguments[n + 1] || "");
                return t
            }
        }, {}],
        99: [function(e, t, n) {
            t.exports = {
                WebVTT: e(100).WebVTT,
                VTTCue: e(101).VTTCue,
                VTTRegion: e(103).VTTRegion
            }
        }, {
            100: 100,
            101: 101,
            103: 103
        }],
        100: [function(e, t, n) {
            ! function(e) {
                function t(e, t) {
                    this.name = "ParsingError", this.code = e.code, this.message = t || e.message
                }

                function n(e) {
                    function t(e, t, n, r) {
                        return 3600 * (0 | e) + 60 * (0 | t) + (0 | n) + (0 | r) / 1e3
                    }
                    var n = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                    return n ? n[3] ? t(n[1], n[2], n[3].replace(":", ""), n[4]) : n[1] > 59 ? t(n[1], n[2], 0, n[4]) : t(0, n[1], n[2], n[4]) : null
                }

                function r() {
                    this.values = h(null)
                }

                function o(e, t, n, r) {
                    var o = r ? e.split(r) : [e];
                    for (var i in o)
                        if ("string" == typeof o[i]) {
                            var a = o[i].split(n);
                            if (2 === a.length) {
                                var s = a[0],
                                    l = a[1];
                                t(s, l)
                            }
                        }
                }

                function i(e, i, a) {
                    function s() {
                        var r = n(e);
                        if (null === r) throw new t(t.Errors.BadTimeStamp, "Malformed timestamp: " + c);
                        return e = e.replace(/^[^\sa-zA-Z-]+/, ""), r
                    }

                    function l(e, t) {
                        var n = new r;
                        o(e, function(e, t) {
                            switch (e) {
                                case "region":
                                    for (var r = a.length - 1; r >= 0; r--)
                                        if (a[r].id === t) {
                                            n.set(e, a[r].region);
                                            break
                                        }
                                    break;
                                case "vertical":
                                    n.alt(e, t, ["rl", "lr"]);
                                    break;
                                case "line":
                                    var o = t.split(","),
                                        i = o[0];
                                    n.integer(e, i), n.percent(e, i) ? n.set("snapToLines", !1) : null, n.alt(e, i, ["auto"]), 2 === o.length && n.alt("lineAlign", o[1], ["start", "middle", "end"]);
                                    break;
                                case "position":
                                    o = t.split(","), n.percent(e, o[0]), 2 === o.length && n.alt("positionAlign", o[1], ["start", "middle", "end"]);
                                    break;
                                case "size":
                                    n.percent(e, t);
                                    break;
                                case "align":
                                    n.alt(e, t, ["start", "middle", "end", "left", "right"])
                            }
                        }, /:/, /\s/), t.region = n.get("region", null), t.vertical = n.get("vertical", ""), t.line = n.get("line", "auto"), t.lineAlign = n.get("lineAlign", "start"), t.snapToLines = n.get("snapToLines", !0), t.size = n.get("size", 100), t.align = n.get("align", "middle"), t.position = n.get("position", {
                            start: 0,
                            left: 0,
                            middle: 50,
                            end: 100,
                            right: 100
                        }, t.align), t.positionAlign = n.get("positionAlign", {
                            start: "start",
                            left: "start",
                            middle: "middle",
                            end: "end",
                            right: "end"
                        }, t.align)
                    }

                    function u() {
                        e = e.replace(/^\s+/, "")
                    }
                    var c = e;
                    if (u(), i.startTime = s(), u(), "-->" !== e.substr(0, 3)) throw new t(t.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + c);
                    e = e.substr(3), u(), i.endTime = s(), u(), l(e, i)
                }

                function a(e, t) {
                    function r() {
                        function e(e) {
                            return t = t.substr(e.length), e
                        }
                        if (!t) return null;
                        var n = t.match(/^([^<]*)(<[^>]+>?)?/);
                        return e(n[1] ? n[1] : n[2])
                    }

                    function o(e) {
                        return y[e]
                    }

                    function i(e) {
                        for (; h = e.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) e = e.replace(h[0], o);
                        return e
                    }

                    function a(e, t) {
                        return !m[t.localName] || m[t.localName] === e.localName
                    }

                    function s(t, n) {
                        var r = v[t];
                        if (!r) return null;
                        var o = e.document.createElement(r);
                        o.localName = r;
                        var i = g[t];
                        return i && n && (o[i] = n.trim()), o
                    }
                    for (var l, u = e.document.createElement("div"), c = u, p = []; null !== (l = r());)
                        if ("<" !== l[0]) c.appendChild(e.document.createTextNode(i(l)));
                        else {
                            if ("/" === l[1]) {
                                p.length && p[p.length - 1] === l.substr(2).replace(">", "") && (p.pop(), c = c.parentNode);
                                continue
                            }
                            var f, d = n(l.substr(1, l.length - 2));
                            if (d) {
                                f = e.document.createProcessingInstruction("timestamp", d), c.appendChild(f);
                                continue
                            }
                            var h = l.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                            if (!h) continue;
                            if (f = s(h[1], h[3]), !f) continue;
                            if (!a(c, f)) continue;
                            h[2] && (f.className = h[2].substr(1).replace(".", " ")), p.push(h[1]), c.appendChild(f), c = f
                        }
                    return u
                }

                function s(e) {
                    function t(e, t) {
                        for (var n = t.childNodes.length - 1; n >= 0; n--) e.push(t.childNodes[n])
                    }

                    function n(e) {
                        if (!e || !e.length) return null;
                        var r = e.pop(),
                            o = r.textContent || r.innerText;
                        if (o) {
                            var i = o.match(/^.*(\n|\r)/);
                            return i ? (e.length = 0, i[0]) : o
                        }
                        return "ruby" === r.tagName ? n(e) : r.childNodes ? (t(e, r), n(e)) : void 0
                    }
                    var r, o = [],
                        i = "";
                    if (!e || !e.childNodes) return "ltr";
                    for (t(o, e); i = n(o);)
                        for (var a = 0; a < i.length; a++) {
                            r = i.charCodeAt(a);
                            for (var s = 0; s < b.length; s++)
                                if (b[s] === r) return "rtl"
                        }
                    return "ltr"
                }

                function l(e) {
                    if ("number" == typeof e.line && (e.snapToLines || e.line >= 0 && e.line <= 100)) return e.line;
                    if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return -1;
                    for (var t = e.track, n = t.textTrackList, r = 0, o = 0; o < n.length && n[o] !== t; o++) "showing" === n[o].mode && r++;
                    return ++r * -1
                }

                function u() {}

                function c(e, t, n) {
                    var r = /MSIE\s8\.0/.test(navigator.userAgent),
                        o = "rgba(255, 255, 255, 1)",
                        i = "rgba(0, 0, 0, 0.8)";
                    r && (o = "rgb(255, 255, 255)", i = "rgb(0, 0, 0)"), u.call(this), this.cue = t, this.cueDiv = a(e, t.text);
                    var l = {
                        color: o,
                        backgroundColor: i,
                        position: "relative",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        display: "inline"
                    };
                    r || (l.writingMode = "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl", l.unicodeBidi = "plaintext"), this.applyStyles(l, this.cueDiv), this.div = e.document.createElement("div"), l = {
                        textAlign: "middle" === t.align ? "center" : t.align,
                        font: n.font,
                        whiteSpace: "pre-line",
                        position: "absolute"
                    }, r || (l.direction = s(this.cueDiv), l.writingMode = "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(l), this.div.appendChild(this.cueDiv);
                    var c = 0;
                    switch (t.positionAlign) {
                        case "start":
                            c = t.position;
                            break;
                        case "middle":
                            c = t.position - t.size / 2;
                            break;
                        case "end":
                            c = t.position - t.size
                    }
                    "" === t.vertical ? this.applyStyles({
                        left: this.formatStyle(c, "%"),
                        width: this.formatStyle(t.size, "%")
                    }) : this.applyStyles({
                        top: this.formatStyle(c, "%"),
                        height: this.formatStyle(t.size, "%")
                    }), this.move = function(e) {
                        this.applyStyles({
                            top: this.formatStyle(e.top, "px"),
                            bottom: this.formatStyle(e.bottom, "px"),
                            left: this.formatStyle(e.left, "px"),
                            right: this.formatStyle(e.right, "px"),
                            height: this.formatStyle(e.height, "px"),
                            width: this.formatStyle(e.width, "px")
                        })
                    }
                }

                function p(e) {
                    var t, n, r, o, i = /MSIE\s8\.0/.test(navigator.userAgent);
                    if (e.div) {
                        n = e.div.offsetHeight, r = e.div.offsetWidth, o = e.div.offsetTop;
                        var a = (a = e.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
                        e = e.div.getBoundingClientRect(), t = a ? Math.max(a[0] && a[0].height || 0, e.height / a.length) : 0
                    }
                    this.left = e.left, this.right = e.right, this.top = e.top || o, this.height = e.height || n, this.bottom = e.bottom || o + (e.height || n), this.width = e.width || r, this.lineHeight = void 0 !== t ? t : e.lineHeight, i && !this.lineHeight && (this.lineHeight = 13)
                }

                function f(e, t, n, r) {
                    function o(e, t) {
                        for (var o, i = new p(e), a = 1, s = 0; s < t.length; s++) {
                            for (; e.overlapsOppositeAxis(n, t[s]) || e.within(n) && e.overlapsAny(r);) e.move(t[s]);
                            if (e.within(n)) return e;
                            var l = e.intersectPercentage(n);
                            a > l && (o = new p(e), a = l), e = new p(i)
                        }
                        return o || i
                    }
                    var i = new p(t),
                        a = t.cue,
                        s = l(a),
                        u = [];
                    if (a.snapToLines) {
                        var c;
                        switch (a.vertical) {
                            case "":
                                u = ["+y", "-y"], c = "height";
                                break;
                            case "rl":
                                u = ["+x", "-x"], c = "width";
                                break;
                            case "lr":
                                u = ["-x", "+x"], c = "width"
                        }
                        var f = i.lineHeight,
                            d = f * Math.round(s),
                            h = n[c] + f,
                            y = u[0];
                        Math.abs(d) > h && (d = d < 0 ? -1 : 1, d *= Math.ceil(h / f) * f), s < 0 && (d += "" === a.vertical ? n.height : n.width, u = u.reverse()), i.move(y, d)
                    } else {
                        var v = i.lineHeight / n.height * 100;
                        switch (a.lineAlign) {
                            case "middle":
                                s -= v / 2;
                                break;
                            case "end":
                                s -= v
                        }
                        switch (a.vertical) {
                            case "":
                                t.applyStyles({
                                    top: t.formatStyle(s, "%")
                                });
                                break;
                            case "rl":
                                t.applyStyles({
                                    left: t.formatStyle(s, "%")
                                });
                                break;
                            case "lr":
                                t.applyStyles({
                                    right: t.formatStyle(s, "%")
                                })
                        }
                        u = ["+y", "-x", "+x", "-y"], i = new p(t)
                    }
                    var g = o(i, u);
                    t.move(g.toCSSCompatValues(n))
                }

                function d() {}
                var h = Object.create || function() {
                    function e() {}
                    return function(t) {
                        if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
                        return e.prototype = t, new e
                    }
                }();
                t.prototype = h(Error.prototype), t.prototype.constructor = t, t.Errors = {
                    BadSignature: {
                        code: 0,
                        message: "Malformed WebVTT signature."
                    },
                    BadTimeStamp: {
                        code: 1,
                        message: "Malformed time stamp."
                    }
                }, r.prototype = {
                    set: function(e, t) {
                        this.get(e) || "" === t || (this.values[e] = t)
                    },
                    get: function(e, t, n) {
                        return n ? this.has(e) ? this.values[e] : t[n] : this.has(e) ? this.values[e] : t
                    },
                    has: function(e) {
                        return e in this.values
                    },
                    alt: function(e, t, n) {
                        for (var r = 0; r < n.length; ++r)
                            if (t === n[r]) {
                                this.set(e, t);
                                break
                            }
                    },
                    integer: function(e, t) {
                        /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
                    },
                    percent: function(e, t) {
                        var n;
                        return !!((n = t.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (t = parseFloat(t), t >= 0 && t <= 100)) && (this.set(e, t), !0)
                    }
                };
                var y = {
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&lrm;": "?",
                        "&rlm;": "?",
                        "&nbsp;": " "
                    },
                    v = {
                        c: "span",
                        i: "i",
                        b: "b",
                        u: "u",
                        ruby: "ruby",
                        rt: "rt",
                        v: "span",
                        lang: "span"
                    },
                    g = {
                        v: "title",
                        lang: "lang"
                    },
                    m = {
                        rt: "ruby"
                    },
                    b = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
                u.prototype.applyStyles = function(e, t) {
                    t = t || this.div;
                    for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n])
                }, u.prototype.formatStyle = function(e, t) {
                    return 0 === e ? 0 : e + t
                }, c.prototype = h(u.prototype), c.prototype.constructor = c, p.prototype.move = function(e, t) {
                    switch (t = void 0 !== t ? t : this.lineHeight, e) {
                        case "+x":
                            this.left += t, this.right += t;
                            break;
                        case "-x":
                            this.left -= t, this.right -= t;
                            break;
                        case "+y":
                            this.top += t, this.bottom += t;
                            break;
                        case "-y":
                            this.top -= t, this.bottom -= t
                    }
                }, p.prototype.overlaps = function(e) {
                    return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top
                }, p.prototype.overlapsAny = function(e) {
                    for (var t = 0; t < e.length; t++)
                        if (this.overlaps(e[t])) return !0;
                    return !1
                }, p.prototype.within = function(e) {
                    return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right
                }, p.prototype.overlapsOppositeAxis = function(e, t) {
                    switch (t) {
                        case "+x":
                            return this.left < e.left;
                        case "-x":
                            return this.right > e.right;
                        case "+y":
                            return this.top < e.top;
                        case "-y":
                            return this.bottom > e.bottom
                    }
                }, p.prototype.intersectPercentage = function(e) {
                    var t = Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)),
                        n = Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)),
                        r = t * n;
                    return r / (this.height * this.width)
                }, p.prototype.toCSSCompatValues = function(e) {
                    return {
                        top: this.top - e.top,
                        bottom: e.bottom - this.bottom,
                        left: this.left - e.left,
                        right: e.right - this.right,
                        height: this.height,
                        width: this.width
                    }
                }, p.getSimpleBoxPosition = function(e) {
                    var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0,
                        n = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0,
                        r = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
                    e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e;
                    var o = {
                        left: e.left,
                        right: e.right,
                        top: e.top || r,
                        height: e.height || t,
                        bottom: e.bottom || r + (e.height || t),
                        width: e.width || n
                    };
                    return o
                }, d.StringDecoder = function() {
                    return {
                        decode: function(e) {
                            if (!e) return "";
                            if ("string" != typeof e) throw new Error("Error - expected string data.");
                            return decodeURIComponent(encodeURIComponent(e))
                        }
                    }
                }, d.convertCueToDOMTree = function(e, t) {
                    return e && t ? a(e, t) : null
                };
                var _ = .05,
                    T = "sans-serif",
                    w = "1.5%";
                d.processCues = function(e, t, n) {
                    function r(e) {
                        for (var t = 0; t < e.length; t++)
                            if (e[t].hasBeenReset || !e[t].displayState) return !0;
                        return !1
                    }
                    if (!e || !t || !n) return null;
                    for (; n.firstChild;) n.removeChild(n.firstChild);
                    var o = e.document.createElement("div");
                    if (o.style.position = "absolute", o.style.left = "0", o.style.right = "0", o.style.top = "0", o.style.bottom = "0", o.style.margin = w, n.appendChild(o), r(t)) {
                        var i = [],
                            a = p.getSimpleBoxPosition(o),
                            s = Math.round(a.height * _ * 100) / 100,
                            l = {
                                font: s + "px " + T
                            };
                        ! function() {
                            for (var n, r, s = 0; s < t.length; s++) r = t[s], n = new c(e, r, l), o.appendChild(n.div), f(e, n, a, i), r.displayState = n.div, i.push(p.getSimpleBoxPosition(n))
                        }()
                    } else
                        for (var u = 0; u < t.length; u++) o.appendChild(t[u].displayState)
                }, d.Parser = function(e, t, n) {
                    n || (n = t, t = {}), t || (t = {}), this.window = e, this.vttjs = t, this.state = "INITIAL", this.buffer = "", this.decoder = n || new TextDecoder("utf8"), this.regionList = []
                }, d.Parser.prototype = {
                    reportOrThrowError: function(e) {
                        if (!(e instanceof t)) throw e;
                        this.onparsingerror && this.onparsingerror(e)
                    },
                    parse: function(e) {
                        function n() {
                            for (var e = l.buffer, t = 0; t < e.length && "\r" !== e[t] && "\n" !== e[t];) ++t;
                            var n = e.substr(0, t);
                            return "\r" === e[t] && ++t, "\n" === e[t] && ++t, l.buffer = e.substr(t), n
                        }

                        function a(e) {
                            var t = new r;
                            if (o(e, function(e, n) {
                                    switch (e) {
                                        case "id":
                                            t.set(e, n);
                                            break;
                                        case "width":
                                            t.percent(e, n);
                                            break;
                                        case "lines":
                                            t.integer(e, n);
                                            break;
                                        case "regionanchor":
                                        case "viewportanchor":
                                            var o = n.split(",");
                                            if (2 !== o.length) break;
                                            var i = new r;
                                            if (i.percent("x", o[0]), i.percent("y", o[1]), !i.has("x") || !i.has("y")) break;
                                            t.set(e + "X", i.get("x")), t.set(e + "Y", i.get("y"));
                                            break;
                                        case "scroll":
                                            t.alt(e, n, ["up"])
                                    }
                                }, /=/, /\s/), t.has("id")) {
                                var n = new(l.vttjs.VTTRegion || l.window.VTTRegion);
                                n.width = t.get("width", 100), n.lines = t.get("lines", 3), n.regionAnchorX = t.get("regionanchorX", 0), n.regionAnchorY = t.get("regionanchorY", 100), n.viewportAnchorX = t.get("viewportanchorX", 0), n.viewportAnchorY = t.get("viewportanchorY", 100), n.scroll = t.get("scroll", ""), l.onregion && l.onregion(n), l.regionList.push({
                                    id: t.get("id"),
                                    region: n
                                })
                            }
                        }

                        function s(e) {
                            o(e, function(e, t) {
                                switch (e) {
                                    case "Region":
                                        a(t)
                                }
                            }, /:/)
                        }
                        var l = this;
                        e && (l.buffer += l.decoder.decode(e, {
                            stream: !0
                        }));
                        try {
                            var u;
                            if ("INITIAL" === l.state) {
                                if (!/\r\n|\n/.test(l.buffer)) return this;
                                u = n();
                                var c = u.match(/^WEBVTT([ \t].*)?$/);
                                if (!c || !c[0]) throw new t(t.Errors.BadSignature);
                                l.state = "HEADER"
                            }
                            for (var p = !1; l.buffer;) {
                                if (!/\r\n|\n/.test(l.buffer)) return this;
                                switch (p ? p = !1 : u = n(), l.state) {
                                    case "HEADER":
                                        /:/.test(u) ? s(u) : u || (l.state = "ID");
                                        continue;
                                    case "NOTE":
                                        u || (l.state = "ID");
                                        continue;
                                    case "ID":
                                        if (/^NOTE($|[ \t])/.test(u)) {
                                            l.state = "NOTE";
                                            break
                                        }
                                        if (!u) continue;
                                        if (l.cue = new(l.vttjs.VTTCue || l.window.VTTCue)(0, 0, ""), l.state = "CUE", u.indexOf("-->") === -1) {
                                            l.cue.id = u;
                                            continue
                                        }
                                    case "CUE":
                                        try {
                                            i(u, l.cue, l.regionList)
                                        } catch (f) {
                                            l.reportOrThrowError(f), l.cue = null, l.state = "BADCUE";
                                            continue
                                        }
                                        l.state = "CUETEXT";
                                        continue;
                                    case "CUETEXT":
                                        var d = u.indexOf("-->") !== -1;
                                        if (!u || d && (p = !0)) {
                                            l.oncue && l.oncue(l.cue), l.cue = null, l.state = "ID";
                                            continue
                                        }
                                        l.cue.text && (l.cue.text += "\n"), l.cue.text += u;
                                        continue;
                                    case "BADCUE":
                                        u || (l.state = "ID");
                                        continue
                                }
                            }
                        } catch (f) {
                            l.reportOrThrowError(f), "CUETEXT" === l.state && l.cue && l.oncue && l.oncue(l.cue), l.cue = null, l.state = "INITIAL" === l.state ? "BADWEBVTT" : "BADCUE"
                        }
                        return this
                    },
                    flush: function() {
                        var e = this;
                        try {
                            if (e.buffer += e.decoder.decode(), (e.cue || "HEADER" === e.state) && (e.buffer += "\n\n", e.parse()), "INITIAL" === e.state) throw new t(t.Errors.BadSignature)
                        } catch (n) {
                            e.reportOrThrowError(n)
                        }
                        return e.onflush && e.onflush(), this
                    }
                }, e.WebVTT = d
            }(this, this.vttjs || {})
        }, {}],
        101: [function(e, t, n) {
            "undefined" != typeof t && t.exports && (this.VTTCue = this.VTTCue || e(102).VTTCue),
                function(e) {
                    e.VTTCue.prototype.toJSON = function() {
                        var e = {},
                            t = this;
                        return Object.keys(this).forEach(function(n) {
                            "getCueAsHTML" !== n && "hasBeenReset" !== n && "displayState" !== n && (e[n] = t[n])
                        }), e
                    }, e.VTTCue.create = function(t) {
                        if (!t.hasOwnProperty("startTime") || !t.hasOwnProperty("endTime") || !t.hasOwnProperty("text")) throw new Error("You must at least have start time, end time, and text.");
                        var n = new e.VTTCue(t.startTime, t.endTime, t.text);
                        for (var r in t) n.hasOwnProperty(r) && (n[r] = t[r]);
                        return n
                    }, e.VTTCue.fromJSON = function(e) {
                        return this.create(JSON.parse(e))
                    }
                }(this)
        }, {
            102: 102
        }],
        102: [function(e, t, n) {
            ! function(e, t) {
                function n(e) {
                    if ("string" != typeof e) return !1;
                    var t = s[e.toLowerCase()];
                    return !!t && e.toLowerCase()
                }

                function r(e) {
                    if ("string" != typeof e) return !1;
                    var t = l[e.toLowerCase()];
                    return !!t && e.toLowerCase()
                }

                function o(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) e[r] = n[r]
                    }
                    return e
                }

                function i(e, t, i) {
                    var s = this,
                        l = /MSIE\s8\.0/.test(navigator.userAgent),
                        u = {};
                    l ? s = document.createElement("custom") : u.enumerable = !0, s.hasBeenReset = !1;
                    var c = "",
                        p = !1,
                        f = e,
                        d = t,
                        h = i,
                        y = null,
                        v = "",
                        g = !0,
                        m = "auto",
                        b = "start",
                        _ = 50,
                        T = "middle",
                        w = 50,
                        C = "middle";
                    if (Object.defineProperty(s, "id", o({}, u, {
                            get: function() {
                                return c
                            },
                            set: function(e) {
                                c = "" + e
                            }
                        })), Object.defineProperty(s, "pauseOnExit", o({}, u, {
                            get: function() {
                                return p
                            },
                            set: function(e) {
                                p = !!e
                            }
                        })), Object.defineProperty(s, "startTime", o({}, u, {
                            get: function() {
                                return f
                            },
                            set: function(e) {
                                if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                                f = e, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "endTime", o({}, u, {
                            get: function() {
                                return d
                            },
                            set: function(e) {
                                if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                                d = e, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "text", o({}, u, {
                            get: function() {
                                return h
                            },
                            set: function(e) {
                                h = "" + e, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "region", o({}, u, {
                            get: function() {
                                return y
                            },
                            set: function(e) {
                                y = e, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "vertical", o({}, u, {
                            get: function() {
                                return v
                            },
                            set: function(e) {
                                var t = n(e);
                                if (t === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                                v = t, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "snapToLines", o({}, u, {
                            get: function() {
                                return g
                            },
                            set: function(e) {
                                g = !!e, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "line", o({}, u, {
                            get: function() {
                                return m
                            },
                            set: function(e) {
                                if ("number" != typeof e && e !== a) throw new SyntaxError("An invalid number or illegal string was specified.");
                                m = e, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "lineAlign", o({}, u, {
                            get: function() {
                                return b
                            },
                            set: function(e) {
                                var t = r(e);
                                if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                                b = t, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "position", o({}, u, {
                            get: function() {
                                return _
                            },
                            set: function(e) {
                                if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                                _ = e, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "positionAlign", o({}, u, {
                            get: function() {
                                return T
                            },
                            set: function(e) {
                                var t = r(e);
                                if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                                T = t, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "size", o({}, u, {
                            get: function() {
                                return w
                            },
                            set: function(e) {
                                if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                                w = e, this.hasBeenReset = !0
                            }
                        })), Object.defineProperty(s, "align", o({}, u, {
                            get: function() {
                                return C
                            },
                            set: function(e) {
                                var t = r(e);
                                if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                                C = t, this.hasBeenReset = !0
                            }
                        })), s.displayState = void 0, l) return s
                }
                var a = "auto",
                    s = {
                        "": !0,
                        lr: !0,
                        rl: !0
                    },
                    l = {
                        start: !0,
                        middle: !0,
                        end: !0,
                        left: !0,
                        right: !0
                    };
                i.prototype.getCueAsHTML = function() {
                    return WebVTT.convertCueToDOMTree(window, this.text)
                }, e.VTTCue = e.VTTCue || i, t.VTTCue = i
            }(this, this.vttjs || {})
        }, {}],
        103: [function(e, t, n) {
            "undefined" != typeof t && t.exports && (this.VTTRegion = e(104).VTTRegion),
                function(e) {
                    e.VTTRegion.create = function(t) {
                        var n = new e.VTTRegion;
                        for (var r in t) n.hasOwnProperty(r) && (n[r] = t[r]);
                        return n
                    }, e.VTTRegion.fromJSON = function(e) {
                        return this.create(JSON.parse(e))
                    }
                }(this)
        }, {
            104: 104
        }],
        104: [function(e, t, n) {
            ! function(e, t) {
                function n(e) {
                    if ("string" != typeof e) return !1;
                    var t = i[e.toLowerCase()];
                    return !!t && e.toLowerCase()
                }

                function r(e) {
                    return "number" == typeof e && e >= 0 && e <= 100
                }

                function o() {
                    var e = 100,
                        t = 3,
                        o = 0,
                        i = 100,
                        a = 0,
                        s = 100,
                        l = "";
                    Object.defineProperties(this, {
                        width: {
                            enumerable: !0,
                            get: function() {
                                return e
                            },
                            set: function(t) {
                                if (!r(t)) throw new Error("Width must be between 0 and 100.");
                                e = t
                            }
                        },
                        lines: {
                            enumerable: !0,
                            get: function() {
                                return t
                            },
                            set: function(e) {
                                if ("number" != typeof e) throw new TypeError("Lines must be set to a number.");
                                t = e
                            }
                        },
                        regionAnchorY: {
                            enumerable: !0,
                            get: function() {
                                return i
                            },
                            set: function(e) {
                                if (!r(e)) throw new Error("RegionAnchorX must be between 0 and 100.");
                                i = e
                            }
                        },
                        regionAnchorX: {
                            enumerable: !0,
                            get: function() {
                                return o
                            },
                            set: function(e) {
                                if (!r(e)) throw new Error("RegionAnchorY must be between 0 and 100.");
                                o = e
                            }
                        },
                        viewportAnchorY: {
                            enumerable: !0,
                            get: function() {
                                return s
                            },
                            set: function(e) {
                                if (!r(e)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                                s = e
                            }
                        },
                        viewportAnchorX: {
                            enumerable: !0,
                            get: function() {
                                return a
                            },
                            set: function(e) {
                                if (!r(e)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                                a = e
                            }
                        },
                        scroll: {
                            enumerable: !0,
                            get: function() {
                                return l
                            },
                            set: function(e) {
                                var t = n(e);
                                if (t === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                                l = t
                            }
                        }
                    })
                }
                var i = {
                    "": !0,
                    up: !0
                };
                e.VTTRegion = e.VTTRegion || o, t.VTTRegion = o
            }(this, this.vttjs || {})
        }, {}],
        105: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < e.length; n++) t(e[n])
            }

            function o(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            }

            function i(e, t, n) {
                var r = e;
                return p(t) ? (n = t, "string" == typeof e && (r = {
                    uri: e
                })) : r = d(t, {
                    uri: e
                }), r.callback = n, r
            }

            function a(e, t, n) {
                return t = i(e, t, n), s(t)
            }

            function s(e) {
                function t() {
                    4 === p.readyState && i()
                }

                function n() {
                    var e = void 0;
                    if (e = p.response ? p.response : p.responseText || l(p), T) try {
                        e = JSON.parse(e)
                    } catch (t) {}
                    return e
                }

                function r(e) {
                    return clearTimeout(y), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, u(e, c)
                }

                function i() {
                    if (!h) {
                        var t;
                        clearTimeout(y), t = e.useXDR && void 0 === p.status ? 200 : 1223 === p.status ? 204 : p.status;
                        var r = c,
                            o = null;
                        return 0 !== t ? (r = {
                            body: n(),
                            statusCode: t,
                            method: g,
                            headers: {},
                            url: v,
                            rawRequest: p
                        }, p.getAllResponseHeaders && (r.headers = f(p.getAllResponseHeaders()))) : o = new Error("Internal XMLHttpRequest Error"), u(o, r, r.body)
                    }
                }
                if ("undefined" == typeof e.callback) throw new Error("callback argument missing");
                var s = !1,
                    u = function(t, n, r) {
                        s || (s = !0, e.callback(t, n, r))
                    },
                    c = {
                        body: void 0,
                        headers: {},
                        statusCode: 0,
                        method: g,
                        url: v,
                        rawRequest: p
                    },
                    p = e.xhr || null;
                p || (p = e.cors || e.useXDR ? new a.XDomainRequest : new a.XMLHttpRequest);
                var d, h, y, v = p.url = e.uri || e.url,
                    g = p.method = e.method || "GET",
                    m = e.body || e.data || null,
                    b = p.headers = e.headers || {},
                    _ = !!e.sync,
                    T = !1;
                if ("json" in e && (T = !0, b.accept || b.Accept || (b.Accept = "application/json"), "GET" !== g && "HEAD" !== g && (b["content-type"] || b["Content-Type"] || (b["Content-Type"] = "application/json"), m = JSON.stringify(e.json))), p.onreadystatechange = t, p.onload = i, p.onerror = r, p.onprogress = function() {}, p.ontimeout = r, p.open(g, v, !_, e.username, e.password), _ || (p.withCredentials = !!e.withCredentials), !_ && e.timeout > 0 && (y = setTimeout(function() {
                        h = !0, p.abort("timeout");
                        var e = new Error("XMLHttpRequest timeout");
                        e.code = "ETIMEDOUT", r(e)
                    }, e.timeout)), p.setRequestHeader)
                    for (d in b) b.hasOwnProperty(d) && p.setRequestHeader(d, b[d]);
                else if (e.headers && !o(e.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
                return "responseType" in e && (p.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(p), p.send(m), p
            }

            function l(e) {
                if ("document" === e.responseType) return e.responseXML;
                var t = 204 === e.status && e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                return "" !== e.responseType || t ? null : e.responseXML
            }

            function u() {}
            var c = e(95),
                p = e(106),
                f = e(109),
                d = e(110);
            t.exports = a, a.XMLHttpRequest = c.XMLHttpRequest || u, a.XDomainRequest = "withCredentials" in new a.XMLHttpRequest ? a.XMLHttpRequest : c.XDomainRequest, r(["get", "put", "post", "patch", "head", "delete"], function(e) {
                a["delete" === e ? "del" : e] = function(t, n, r) {
                    return n = i(t, n, r), n.method = e.toUpperCase(), s(n)
                }
            })
        }, {
            106: 106,
            109: 109,
            110: 110,
            95: 95
        }],
        106: [function(e, t, n) {
            function r(e) {
                var t = o.call(e);
                return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
            }
            t.exports = r;
            var o = Object.prototype.toString
        }, {}],
        107: [function(e, t, n) {
            function r(e, t, n) {
                if (!s(t)) throw new TypeError("iterator must be a function");
                arguments.length < 3 && (n = this), "[object Array]" === l.call(e) ? o(e, t, n) : "string" == typeof e ? i(e, t, n) : a(e, t, n)
            }

            function o(e, t, n) {
                for (var r = 0, o = e.length; r < o; r++) u.call(e, r) && t.call(n, e[r], r, e)
            }

            function i(e, t, n) {
                for (var r = 0, o = e.length; r < o; r++) t.call(n, e.charAt(r), r, e)
            }

            function a(e, t, n) {
                for (var r in e) u.call(e, r) && t.call(n, e[r], r, e)
            }
            var s = e(106);
            t.exports = r;
            var l = Object.prototype.toString,
                u = Object.prototype.hasOwnProperty
        }, {
            106: 106
        }],
        108: [function(e, t, n) {
            function r(e) {
                return e.replace(/^\s*|\s*$/g, "")
            }
            n = t.exports = r, n.left = function(e) {
                return e.replace(/^\s*/, "")
            }, n.right = function(e) {
                return e.replace(/\s*$/, "")
            }
        }, {}],
        109: [function(e, t, n) {
            var r = e(108),
                o = e(107),
                i = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                };
            t.exports = function(e) {
                if (!e) return {};
                var t = {};
                return o(r(e).split("\n"), function(e) {
                    var n = e.indexOf(":"),
                        o = r(e.slice(0, n)).toLowerCase(),
                        a = r(e.slice(n + 1));
                    "undefined" == typeof t[o] ? t[o] = a : i(t[o]) ? t[o].push(a) : t[o] = [t[o], a]
                }), t
            }
        }, {
            107: 107,
            108: 108
        }],
        110: [function(e, t, n) {
            function r() {
                for (var e = {}, t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) o.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            t.exports = r;
            var o = Object.prototype.hasOwnProperty
        }, {}]
    }, {}, [93])(93)
}),
function() {
    "use strict";

    function e(t, r) {
        function o(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        var i;
        if (r = r || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = r.touchBoundary || 10, this.layer = t, this.tapDelay = r.tapDelay || 200, this.tapTimeout = r.tapTimeout || 700, !e.notNeeded(t)) {
            for (var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = this, l = 0, u = a.length; l < u; l++) s[a[l]] = o(s[a[l]], s);
            n && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, r) {
                var o = Node.prototype.removeEventListener;
                "click" === e ? o.call(t, e, n.hijacked || n, r) : o.call(t, e, n, r)
            }, t.addEventListener = function(e, n, r) {
                var o = Node.prototype.addEventListener;
                "click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function(e) {
                    e.propagationStopped || n(e)
                }), r) : o.call(t, e, n, r)
            }), "function" == typeof t.onclick && (i = t.onclick, t.addEventListener("click", function(e) {
                i(e)
            }, !1), t.onclick = null)
        }
    }
    var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
        n = navigator.userAgent.indexOf("Android") > 0 && !t,
        r = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
        o = r && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        i = r && /OS [6-7]_\d/.test(navigator.userAgent),
        a = navigator.userAgent.indexOf("BB10") > 0;
    e.prototype.needsClick = function(e) {
        switch (e.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (e.disabled) return !0;
                break;
            case "input":
                if (r && "file" === e.type || e.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(e.className)
    }, e.prototype.needsFocus = function(e) {
        switch (e.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !n;
            case "input":
                switch (e.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }, e.prototype.sendClick = function(e, t) {
        var n, r;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
    }, e.prototype.determineEventType = function(e) {
        return n && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }, e.prototype.focus = function(e) {
        var t;
        r && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, e.prototype.updateScrollParent = function(e) {
        var t, n;
        if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n, e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }, e.prototype.getTargetElementFromEventTarget = function(e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, e.prototype.onTouchStart = function(e) {
        var t, n, i;
        if (e.targetTouches.length > 1) return !0;
        if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], r) {
            if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
            if (!o) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
    }, e.prototype.touchHasMoved = function(e) {
        var t = e.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
    }, e.prototype.onTouchMove = function(e) {
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
    }, e.prototype.findControl = function(e) {
        return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, e.prototype.onTouchEnd = function(e) {
        var t, a, s, l, u, c = this.targetElement;
        if (!this.trackingClick) return !0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, a = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, i && (u = e.changedTouches[0], c = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || c, c.fastClickScrollParent = this.targetElement.fastClickScrollParent), s = c.tagName.toLowerCase(), "label" === s) {
            if (t = this.findControl(c)) {
                if (this.focus(c), n) return !1;
                c = t
            }
        } else if (this.needsFocus(c)) return e.timeStamp - a > 100 || r && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, e), r && "select" === s || (this.targetElement = null, e.preventDefault()), !1);
        return !(!r || o || (l = c.fastClickScrollParent, !l || l.fastClickLastScrollTop === l.scrollTop)) || (this.needsClick(c) || (e.preventDefault(), this.sendClick(c, e)), !1)
    }, e.prototype.onTouchCancel = function() {
        this.trackingClick = !1, this.targetElement = null
    }, e.prototype.onMouse = function(e) {
        return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
    }, e.prototype.onClick = function(e) {
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
    }, e.prototype.destroy = function() {
        var e = this.layer;
        n && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, e.notNeeded = function(e) {
        var t, r, o, i;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!n) return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (t.content.indexOf("user-scalable=no") !== -1) return !0;
                if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (a && (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), o[1] >= 10 && o[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
            if (t.content.indexOf("user-scalable=no") !== -1) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (i = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(i >= 27 && (t = document.querySelector("meta[name=viewport]"), t && (t.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
    }, e.attach = function(t, n) {
        return new e(t, n)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
}();