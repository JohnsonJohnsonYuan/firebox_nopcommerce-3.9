﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Nop.Admin.Extensions;
using Nop.Admin.Models.Logging;
using Nop.Services.Helpers;
using Nop.Services.Localization;
using Nop.Services.Logging;
using Nop.Services.Security;
using Nop.Web.Framework.Kendoui;
using Nop.Web.Framework.Mvc;

namespace Nop.Admin.Controllers
{
    public partial class ActivityLogController : BaseAdminController
    {
        #region Fields

        private readonly ICustomerActivityService _customerActivityService;
        private readonly IDateTimeHelper _dateTimeHelper;
        private readonly ILocalizationService _localizationService;
        private readonly IPermissionService _permissionService;

        #endregion Fields

        #region Constructors

        public ActivityLogController(ICustomerActivityService customerActivityService,
            IDateTimeHelper dateTimeHelper, ILocalizationService localizationService,
            IPermissionService permissionService)
		{
            this._customerActivityService = customerActivityService;
            this._dateTimeHelper = dateTimeHelper;
            this._localizationService = localizationService;
            this._permissionService = permissionService;
		}

		#endregion 

        #region Activity log types

        public virtual ActionResult ListTypes()
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageActivityLog))
                return AccessDeniedView();

            var model = _customerActivityService
                .GetAllActivityTypes()
                .Select(x => x.ToModel())
                .ToList();
            return View(model);
        }

        [HttpPost]
        public virtual ActionResult SaveTypes(FormCollection form)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageActivityLog))
                return AccessDeniedView();

            //activity log
            _customerActivityService.InsertActivity("EditActivityLogTypes", _localizationService.GetResource("ActivityLog.EditActivityLogTypes"));

            string formKey = "checkbox_activity_types";
            var checkedActivityTypes = form[formKey] != null ? form[formKey].Split(new [] { ',' }, StringSplitOptions.RemoveEmptyEntries).Select(x => Convert.ToInt32(x)).ToList() : new List<int>();
            
            var activityTypes = _customerActivityService.GetAllActivityTypes();
            foreach (var activityType in activityTypes)
            {
                activityType.Enabled = checkedActivityTypes.Contains(activityType.Id);
                _customerActivityService.UpdateActivityType(activityType);
            }

            SuccessNotification(_localizationService.GetResource("Admin.Configuration.ActivityLog.ActivityLogType.Updated"));
            return RedirectToAction("ListTypes");
        }

        #endregion

        #region Activity log

        public virtual ActionResult ListLogs()
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageActivityLog))
                return AccessDeniedView();

            var activityLogSearchModel = new ActivityLogSearchModel();
            activityLogSearchModel.ActivityLogType.Add(new SelectListItem
            {
                Value = "0",
                Text = "All"
            });


            foreach (var at in _customerActivityService.GetAllActivityTypes())
            {
                activityLogSearchModel.ActivityLogType.Add(new SelectListItem
                {
                    Value = at.Id.ToString(),
                    Text = at.Name
                });
            }
            return View(activityLogSearchModel);
        }

        [HttpPost]
        public virtual ActionResult ListLogs(DataSourceRequest command, ActivityLogSearchModel model)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageActivityLog))
                return AccessDeniedKendoGridJson();

            DateTime? startDateValue = (model.CreatedOnFrom == null) ? null
                : (DateTime?)_dateTimeHelper.ConvertToUtcTime(model.CreatedOnFrom.Value, _dateTimeHelper.CurrentTimeZone);

            DateTime? endDateValue = (model.CreatedOnTo == null) ? null
                            : (DateTime?)_dateTimeHelper.ConvertToUtcTime(model.CreatedOnTo.Value, _dateTimeHelper.CurrentTimeZone).AddDays(1);

            var activityLog = _customerActivityService.GetAllActivities(startDateValue, endDateValue,null, model.ActivityLogTypeId, command.Page - 1, command.PageSize, model.IpAddress);
            var gridModel = new DataSourceResult
            {
                Data = activityLog.Select(x =>
                {
                    var m = x.ToModel();
                    m.CreatedOn = _dateTimeHelper.ConvertToUserTime(x.CreatedOnUtc, DateTimeKind.Utc);
                    return m;
                    
                }),
                Total = activityLog.TotalCount
            };
            return Json(gridModel);
        }

        public virtual ActionResult AcivityLogDelete(int id)
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageActivityLog))
                return AccessDeniedView();

            var activityLog = _customerActivityService.GetActivityById(id);
            if (activityLog == null)
            {
                throw new ArgumentException("No activity log found with the specified id");
            }
            _customerActivityService.DeleteActivity(activityLog);

            //activity log
            _customerActivityService.InsertActivity("DeleteActivityLog", _localizationService.GetResource("ActivityLog.DeleteActivityLog"));

            return new NullJsonResult();
        }

        public virtual ActionResult ClearAll()
        {
            if (!_permissionService.Authorize(StandardPermissionProvider.ManageActivityLog))
                return AccessDeniedView();

            _customerActivityService.ClearAllActivities();

            //activity log
            _customerActivityService.InsertActivity("DeleteActivityLog", _localizationService.GetResource("ActivityLog.DeleteActivityLog"));

            return RedirectToAction("ListLogs");
        }

        #endregion
    }
}
