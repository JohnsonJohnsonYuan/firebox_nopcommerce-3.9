﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web.Mvc;
using Nop.Core;
using Nop.Core.Domain.Customers;
using Nop.Core.Domain.Orders;
using Nop.Services.Common;
using Nop.Services.Orders;
using Nop.Services.Payments;
using Nop.Services.Shipping;
using Nop.Web.Factories;
using Nop.Web.Framework.Controllers;
using Nop.Web.Framework.Security;

namespace Nop.Web.Controllers
{
    public partial class OrderController : BasePublicController
    {
        #region Fields

        private readonly IOrderModelFactory _orderModelFactory;
        private readonly IOrderService _orderService;
        private readonly IShipmentService _shipmentService;
        private readonly IWorkContext _workContext;
        private readonly IOrderProcessingService _orderProcessingService;
        private readonly IPaymentService _paymentService;
        private readonly IPdfService _pdfService;
        private readonly IWebHelper _webHelper;
        private readonly RewardPointsSettings _rewardPointsSettings;

        #endregion

		#region Constructors

        public OrderController(IOrderModelFactory orderModelFactory,
            IOrderService orderService, 
            IShipmentService shipmentService, 
            IWorkContext workContext,
            IOrderProcessingService orderProcessingService, 
            IPaymentService paymentService, 
            IPdfService pdfService, 
            IWebHelper webHelper,
            RewardPointsSettings rewardPointsSettings)
        {
            this._orderModelFactory = orderModelFactory;
            this._orderService = orderService;
            this._shipmentService = shipmentService;
            this._workContext = workContext;
            this._orderProcessingService = orderProcessingService;
            this._paymentService = paymentService;
            this._pdfService = pdfService;
            this._webHelper = webHelper;
            this._rewardPointsSettings = rewardPointsSettings;
        }

        #endregion

        #region Methods

        //My account / Orders
        [NopHttpsRequirement(SslRequirement.Yes)]
        public virtual ActionResult CustomerOrders()
        {
            if (!_workContext.CurrentCustomer.IsRegistered())
                return new HttpUnauthorizedResult();

            var model = _orderModelFactory.PrepareCustomerOrderListModel();
            return View(model);
        }

        //My account / Orders / Cancel recurring order
        [HttpPost, ActionName("CustomerOrders")]
        [PublicAntiForgery]
        [FormValueRequired(FormValueRequirement.StartsWith, "cancelRecurringPayment")]
        public virtual ActionResult CancelRecurringPayment(FormCollection form)
        {
            if (!_workContext.CurrentCustomer.IsRegistered())
                return new HttpUnauthorizedResult();

            //get recurring payment identifier
            int recurringPaymentId = 0;
            foreach (var formValue in form.AllKeys)
                if (formValue.StartsWith("cancelRecurringPayment", StringComparison.InvariantCultureIgnoreCase))
                    recurringPaymentId = Convert.ToInt32(formValue.Substring("cancelRecurringPayment".Length));

            var recurringPayment = _orderService.GetRecurringPaymentById(recurringPaymentId);
            if (recurringPayment == null)
            {
                return RedirectToRoute("CustomerOrders");
            }

            if (_orderProcessingService.CanCancelRecurringPayment(_workContext.CurrentCustomer, recurringPayment))
            {
                var errors = _orderProcessingService.CancelRecurringPayment(recurringPayment);

                var model = _orderModelFactory.PrepareCustomerOrderListModel();
                model.RecurringPaymentErrors = errors;

                return View(model);
            }
            else
            {
                return RedirectToRoute("CustomerOrders");
            }
        }

        //My account / Orders / Retry last recurring order
        [HttpPost, ActionName("CustomerOrders")]
        [PublicAntiForgery]
        [FormValueRequired(FormValueRequirement.StartsWith, "retryLastPayment")]
        public virtual ActionResult RetryLastRecurringPayment(FormCollection form)
        {
            if (!_workContext.CurrentCustomer.IsRegistered())
                return new HttpUnauthorizedResult();

            //get recurring payment identifier
            var recurringPaymentId = 0;
            if (!form.AllKeys.Any(formValue => formValue.StartsWith("retryLastPayment", StringComparison.InvariantCultureIgnoreCase) &&
                int.TryParse(formValue.Substring(formValue.IndexOf('_') + 1), out recurringPaymentId)))
            {
                return RedirectToRoute("CustomerOrders");
            }

            var recurringPayment = _orderService.GetRecurringPaymentById(recurringPaymentId);
            if (recurringPayment == null)
                return RedirectToRoute("CustomerOrders");

            if (!_orderProcessingService.CanRetryLastRecurringPayment(_workContext.CurrentCustomer, recurringPayment))
                return RedirectToRoute("CustomerOrders");

            var errors = _orderProcessingService.ProcessNextRecurringPayment(recurringPayment);
            var model = _orderModelFactory.PrepareCustomerOrderListModel();
            model.RecurringPaymentErrors = errors.ToList();

            return View(model);
        }

        //My account / Reward points
        [NopHttpsRequirement(SslRequirement.Yes)]
        public virtual ActionResult CustomerRewardPoints(int? page)
        {
            if (!_workContext.CurrentCustomer.IsRegistered())
                return new HttpUnauthorizedResult();

            if (!_rewardPointsSettings.Enabled)
                return RedirectToRoute("CustomerInfo");

            var model = _orderModelFactory.PrepareCustomerRewardPoints(page);
            return View(model);
        }

        //My account / Order details page
        [NopHttpsRequirement(SslRequirement.Yes)]
        public virtual ActionResult Details(int orderId)
        {
            var order = _orderService.GetOrderById(orderId);
            if (order == null || order.Deleted || _workContext.CurrentCustomer.Id != order.CustomerId)
                return new HttpUnauthorizedResult();

            var model = _orderModelFactory.PrepareOrderDetailsModel(order);
            return View(model);
        }

        //My account / Order details page / Print
        [NopHttpsRequirement(SslRequirement.Yes)]
        public virtual ActionResult PrintOrderDetails(int orderId)
        {
            var order = _orderService.GetOrderById(orderId);
            if (order == null || order.Deleted || _workContext.CurrentCustomer.Id != order.CustomerId)
                return new HttpUnauthorizedResult();

            var model = _orderModelFactory.PrepareOrderDetailsModel(order);
            model.PrintMode = true;

            return View("Details", model);
        }

        //My account / Order details page / PDF invoice
        public virtual ActionResult GetPdfInvoice(int orderId)
        {
            var order = _orderService.GetOrderById(orderId);
            if (order == null || order.Deleted || _workContext.CurrentCustomer.Id != order.CustomerId)
                return new HttpUnauthorizedResult();

            var orders = new List<Order>();
            orders.Add(order);
            byte[] bytes;
            using (var stream = new MemoryStream())
            {
                _pdfService.PrintOrdersToPdf(stream, orders, _workContext.WorkingLanguage.Id);
                bytes = stream.ToArray();
            }
            return File(bytes, MimeTypes.ApplicationPdf, string.Format("order_{0}.pdf", order.Id));
        }

        //My account / Order details page / re-order
        public virtual ActionResult ReOrder(int orderId)
        {
            var order = _orderService.GetOrderById(orderId);
            if (order == null || order.Deleted || _workContext.CurrentCustomer.Id != order.CustomerId)
                return new HttpUnauthorizedResult();

            _orderProcessingService.ReOrder(order);
            return RedirectToRoute("ShoppingCart");
        }

        //My account / Order details page / Complete payment
        [HttpPost, ActionName("Details")]
        [PublicAntiForgery]
        [FormValueRequired("repost-payment")]
        public virtual ActionResult RePostPayment(int orderId)
        {
            var order = _orderService.GetOrderById(orderId);
            if (order == null || order.Deleted || _workContext.CurrentCustomer.Id != order.CustomerId)
                return new HttpUnauthorizedResult();

            if (!_paymentService.CanRePostProcessPayment(order))
                return RedirectToRoute("OrderDetails", new { orderId = orderId });

            var postProcessPaymentRequest = new PostProcessPaymentRequest
            {
                Order = order
            };
            _paymentService.PostProcessPayment(postProcessPaymentRequest);

            if (_webHelper.IsRequestBeingRedirected || _webHelper.IsPostBeingDone)
            {
                //redirection or POST has been done in PostProcessPayment
                return Content("Redirected");
            }

            //if no redirection has been done (to a third-party payment page)
            //theoretically it's not possible
            return RedirectToRoute("OrderDetails", new { orderId = orderId });
        }

        //My account / Order details page / Shipment details page
        [NopHttpsRequirement(SslRequirement.Yes)]
        public virtual ActionResult ShipmentDetails(int shipmentId)
        {
            var shipment = _shipmentService.GetShipmentById(shipmentId);
            if (shipment == null)
                return new HttpUnauthorizedResult();

            var order = shipment.Order;
            if (order == null || order.Deleted || _workContext.CurrentCustomer.Id != order.CustomerId)
                return new HttpUnauthorizedResult();

            var model = _orderModelFactory.PrepareShipmentDetailsModel(shipment);
            return View(model);
        }

        #endregion
    }
}
