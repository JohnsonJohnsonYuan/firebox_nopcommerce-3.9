﻿using System;
using System.Linq;
using System.Web.Mvc;
using Nop.Admin.Extensions;
using Nop.Admin.Models.Customers;
using Nop.Core;
using Nop.Core.Domain.Customers;
using Nop.Services.Customers;
using Nop.Services.Localization;
using Nop.Services.Logging;
using Nop.Services.Security;
using Nop.Web.Framework.Controllers;
using Nop.Web.Framework.Kendoui;
using Nop.Web.Framework.Mvc;

namespace Nop.Admin.Controllers
{
    public partial class CustomerAttributeController : BaseAdminController
    {
        #region Fields

        private readonly ICustomerAttributeService _customerAttributeService;
        private readonly ILanguageService _languageService;
        private readonly ILocalizedEntityService _localizedEntityService;
        private readonly ILocalizationService _localizationService;
        private readonly IWorkContext _workContext;
        private readonly IPermissionService _permissionService;
        private readonly ICustomerActivityService _customerActivityService;

        #endregion

        #region Constructors

        public CustomerAttributeController(ICustomerAttributeService customerAttributeService,
            ILanguageService languageService, 
            ILocalizedEntityService localizedEntityService,
            ILocalizationService localizationService,
            IWorkContext workContext,
            IPermissionService permissionService,
            ICustomerActivityService customerActivityService)
        {
            this._customerAttributeService = customerAttributeService;
            this._languageService = languageService;
            this._localizedEntityService = localizedEntityService;
            this._localizationService = localizationService;
            this._workContext = workContext;
            this._permissionService = permissionService;
            this._customerActivityService = customerActivityService;
        }

        #endregion
        
        #region Utilities

        [NonAction]
        protected virtual void UpdateAttributeLocales(CustomerAttribute customerAttribute, CustomerAttributeModel model)
        {
            foreach (var localized in model.Locales)
            {
                _localizedEntityService.SaveLocalizedValue(customerAttribute,
                                                               x => x.Name,
                                                               localized.Name,
                                                               localized.LanguageId);
            }
        }

        [NonAction]
        protected  virtual void UpdateValueLocales(CustomerAttributeValue customerAttributeValue, CustomerAttributeValueModel model)
        {
            foreach (var localized in model.Locales)
            {
                _localizedEntityService.SaveLocalizedValue(customerAttributeValue,
                                                               x => x.Name,
                                                               localized.Name,
                                                               localized.LanguageId);
            }
        }

        #endregion
        
        #region Customer attributes

        public virtual ActionResult Index()
        {
            return RedirectToAction("List");
        }

        public virtual ActionResult ListBlock()
        {
            return PartialView("ListBlock");
        }

        public virtual ActionResult List()
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageSettings))
                return AccessDeniedView();

            //we just redirect a user to the customer settings page

            //select "customer form fields" tab
            SaveSelectedTabName("tab-customerformfields");
            return RedirectToAction("CustomerUser", "Setting");
        }

        [HttpPost]
        public virtual ActionResult List(DataSourceRequest command)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageSettings))
                return AccessDeniedKendoGridJson();

            var customerAttributes = _customerAttributeService.GetAllCustomerAttributes();
            var gridModel = new DataSourceResult
            {
                Data = customerAttributes.Select(x =>
                {
                    var attributeModel = x.ToModel();
                    attributeModel.AttributeControlTypeName = x.AttributeControlType.GetLocalizedEnum(_localizationService, _workContext);
                    return attributeModel;
                }),
                Total = customerAttributes.Count()
            };
            return Json(gridModel);
        }
        
        //create
        public virtual ActionResult Create()
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageSettings))
                return AccessDeniedView();

            var model = new CustomerAttributeModel();
            //locales
            AddLocales(_languageService, model.Locales);
            return View(model);
        }

        [HttpPost, ParameterBasedOnFormName("save-continue", "continueEditing")]
        public virtual ActionResult Create(CustomerAttributeModel model, bool continueEditing)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageSettings))
                return AccessDeniedView();

            if (ModelState.IsValid)
            {
                var customerAttribute = model.ToEntity();
                _customerAttributeService.InsertCustomerAttribute(customerAttribute);

                //activity log
                _customerActivityService.InsertActivity("AddNewCustomerAttribute", _localizationService.GetResource("ActivityLog.AddNewCustomerAttribute"), customerAttribute.Id);

                //locales
                UpdateAttributeLocales(customerAttribute, model);

                SuccessNotification(_localizationService.GetResource("Admin.Customers.CustomerAttributes.Added"));

                if (continueEditing)
                {
                    //selected tab
                    SaveSelectedTabName();

                    return RedirectToAction("Edit", new { id = customerAttribute.Id });
                }
                return RedirectToAction("List");
            }

            //If we got this far, something failed, redisplay form
            return View(model);
        }

        //edit
        public virtual ActionResult Edit(int id)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageSettings))
                return AccessDeniedView();

            var customerAttribute = _customerAttributeService.GetCustomerAttributeById(id);
            if (customerAttribute == null)
                //No customer attribute found with the specified id
                return RedirectToAction("List");

            var model = customerAttribute.ToModel();
            //locales
            AddLocales(_languageService, model.Locales, (locale, languageId) =>
            {
                locale.Name = customerAttribute.GetLocalized(x => x.Name, languageId, false, false);
            });
            return View(model);
        }

        [HttpPost, ParameterBasedOnFormName("save-continue", "continueEditing")]
        public virtual ActionResult Edit(CustomerAttributeModel model, bool continueEditing)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageSettings))
                return AccessDeniedView();

            var customerAttribute = _customerAttributeService.GetCustomerAttributeById(model.Id);
            if (customerAttribute == null)
                //No customer attribute found with the specified id
                return RedirectToAction("List");

            if (ModelState.IsValid)
            {
                customerAttribute = model.ToEntity(customerAttribute);
                _customerAttributeService.UpdateCustomerAttribute(customerAttribute);

                //activity log
                _customerActivityService.InsertActivity("EditCustomerAttribute", _localizationService.GetResource("ActivityLog.EditCustomerAttribute"), customerAttribute.Id);

                //locales
                UpdateAttributeLocales(customerAttribute, model);

                SuccessNotification(_localizationService.GetResource("Admin.Customers.CustomerAttributes.Updated"));
                if (continueEditing)
                {
                    //selected tab
                    SaveSelectedTabName();

                    return RedirectToAction("Edit", new {id = customerAttribute.Id});
                }
                return RedirectToAction("List");
            }

            //If we got this far, something failed, redisplay form
            return View(model);
        }

        //delete
        [HttpPost]
        public virtual ActionResult Delete(int id)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageSettings))
                return AccessDeniedView();

            var customerAttribute = _customerAttributeService.GetCustomerAttributeById(id);
            _customerAttributeService.DeleteCustomerAttribute(customerAttribute);

            //activity log
            _customerActivityService.InsertActivity("DeleteCustomerAttribute", _localizationService.GetResource("ActivityLog.DeleteCustomerAttribute"), customerAttribute.Id);

            SuccessNotification(_localizationService.GetResource("Admin.Customers.CustomerAttributes.Deleted"));
            return RedirectToAction("List");
        }

        #endregion

        #region Customer attribute values

        //list
        [HttpPost]
        public virtual ActionResult ValueList(int customerAttributeId, DataSourceRequest command)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageSettings))
                return AccessDeniedKendoGridJson();

            var values = _customerAttributeService.GetCustomerAttributeValues(customerAttributeId);
            var gridModel = new DataSourceResult
            {
                Data = values.Select(x => new CustomerAttributeValueModel
                {
                    Id = x.Id,
                    CustomerAttributeId = x.CustomerAttributeId,
                    Name = x.Name,
                    IsPreSelected = x.IsPreSelected,
                    DisplayOrder = x.DisplayOrder,
                }),
                Total = values.Count()
            };
            return Json(gridModel);
        }

        //create
        public virtual ActionResult ValueCreatePopup(int customerAttributeId)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageSettings))
                return AccessDeniedView();

            var customerAttribute = _customerAttributeService.GetCustomerAttributeById(customerAttributeId);
            if (customerAttribute == null)
                //No customer attribute found with the specified id
                return RedirectToAction("List");

            var model = new CustomerAttributeValueModel();
            model.CustomerAttributeId = customerAttributeId;
            //locales
            AddLocales(_languageService, model.Locales);
            return View(model);
        }

        [HttpPost]
        public virtual ActionResult ValueCreatePopup(string btnId, string formId, CustomerAttributeValueModel model)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageSettings))
                return AccessDeniedView();

            var customerAttribute = _customerAttributeService.GetCustomerAttributeById(model.CustomerAttributeId);
            if (customerAttribute == null)
                //No customer attribute found with the specified id
                return RedirectToAction("List");
            
            if (ModelState.IsValid)
            {
                var cav = new CustomerAttributeValue
                {
                    CustomerAttributeId = model.CustomerAttributeId,
                    Name = model.Name,
                    IsPreSelected = model.IsPreSelected,
                    DisplayOrder = model.DisplayOrder
                };

                _customerAttributeService.InsertCustomerAttributeValue(cav);

                //activity log
                _customerActivityService.InsertActivity("AddNewCustomerAttributeValue", _localizationService.GetResource("ActivityLog.AddNewCustomerAttributeValue"), cav.Id);

                UpdateValueLocales(cav, model);

                ViewBag.RefreshPage = true;
                ViewBag.btnId = btnId;
                ViewBag.formId = formId;
                return View(model);
            }

            //If we got this far, something failed, redisplay form
            return View(model);
        }

        //edit
        public virtual ActionResult ValueEditPopup(int id)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageSettings))
                return AccessDeniedView();

            var cav = _customerAttributeService.GetCustomerAttributeValueById(id);
            if (cav == null)
                //No customer attribute value found with the specified id
                return RedirectToAction("List");

            var model = new CustomerAttributeValueModel
            {
                CustomerAttributeId = cav.CustomerAttributeId,
                Name = cav.Name,
                IsPreSelected = cav.IsPreSelected,
                DisplayOrder = cav.DisplayOrder
            };

            //locales
            AddLocales(_languageService, model.Locales, (locale, languageId) =>
            {
                locale.Name = cav.GetLocalized(x => x.Name, languageId, false, false);
            });

            return View(model);
        }

        [HttpPost]
        public virtual ActionResult ValueEditPopup(string btnId, string formId, CustomerAttributeValueModel model)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageSettings))
                return AccessDeniedView();

            var cav = _customerAttributeService.GetCustomerAttributeValueById(model.Id);
            if (cav == null)
                //No customer attribute value found with the specified id
                return RedirectToAction("List");

            if (ModelState.IsValid)
            {
                cav.Name = model.Name;
                cav.IsPreSelected = model.IsPreSelected;
                cav.DisplayOrder = model.DisplayOrder;
                _customerAttributeService.UpdateCustomerAttributeValue(cav);

                //activity log
                _customerActivityService.InsertActivity("EditCustomerAttributeValue", _localizationService.GetResource("ActivityLog.EditCustomerAttributeValue"), cav.Id);

                UpdateValueLocales(cav, model);

                ViewBag.RefreshPage = true;
                ViewBag.btnId = btnId;
                ViewBag.formId = formId;
                return View(model);
            }

            //If we got this far, something failed, redisplay form
            return View(model);
        }

        //delete
        [HttpPost]
        public virtual ActionResult ValueDelete(int id)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageSettings))
                return AccessDeniedView();

            var cav = _customerAttributeService.GetCustomerAttributeValueById(id);
            if (cav == null)
                throw new ArgumentException("No customer attribute value found with the specified id");
            _customerAttributeService.DeleteCustomerAttributeValue(cav);

            //activity log
            _customerActivityService.InsertActivity("DeleteCustomerAttributeValue", _localizationService.GetResource("ActivityLog.DeleteCustomerAttributeValue"), cav.Id);

            return new NullJsonResult();
        }


        #endregion
    }
}
