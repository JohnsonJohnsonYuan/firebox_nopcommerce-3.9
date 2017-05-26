﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Nop.Core;
using Nop.Core.Caching;
using Nop.Core.Domain.Catalog;
using Nop.Core.Domain.Customers;
using Nop.Core.Domain.Media;
using Nop.Core.Domain.Orders;
using Nop.Core.Domain.Seo;
using Nop.Core.Domain.Vendors;
using Nop.Services.Catalog;
using Nop.Services.Customers;
using Nop.Services.Directory;
using Nop.Services.Helpers;
using Nop.Services.Localization;
using Nop.Services.Media;
using Nop.Services.Security;
using Nop.Services.Seo;
using Nop.Services.Shipping.Date;
using Nop.Services.Stores;
using Nop.Services.Tax;
using Nop.Services.Vendors;
using Nop.Web.Framework.Security.Captcha;
using Nop.Web.Infrastructure.Cache;
using Nop.Web.Models.Catalog;
using Nop.Web.Models.Common;
using Nop.Web.Models.Media;

namespace Nop.Web.Factories
{
    /// <summary>
    /// Represents the product model factory
    /// </summary>
    public partial class ProductModelFactory : IProductModelFactory
    {
        #region Fields
        
        private readonly ISpecificationAttributeService _specificationAttributeService;
        private readonly ICategoryService _categoryService;
        private readonly IManufacturerService _manufacturerService;
        private readonly IProductService _productService;
        private readonly IVendorService _vendorService;
        private readonly IProductTemplateService _productTemplateService;
        private readonly IProductAttributeService _productAttributeService;
        private readonly IWorkContext _workContext;
        private readonly IStoreContext _storeContext;
        private readonly ITaxService _taxService;
        private readonly ICurrencyService _currencyService;
        private readonly IPictureService _pictureService;
        private readonly ILocalizationService _localizationService;
        private readonly IMeasureService _measureService;
        private readonly IPriceCalculationService _priceCalculationService;
        private readonly IPriceFormatter _priceFormatter;
        private readonly IWebHelper _webHelper;
        private readonly IDateTimeHelper _dateTimeHelper;
        private readonly IProductTagService _productTagService;
        private readonly IAclService _aclService;
        private readonly IStoreMappingService _storeMappingService;
        private readonly IPermissionService _permissionService;
        private readonly IDownloadService _downloadService;
        private readonly IProductAttributeParser _productAttributeParser;
        private readonly IDateRangeService _dateRangeService;
        private readonly MediaSettings _mediaSettings;
        private readonly CatalogSettings _catalogSettings;
        private readonly VendorSettings _vendorSettings;
        private readonly CustomerSettings _customerSettings;
        private readonly CaptchaSettings _captchaSettings;
        private readonly SeoSettings _seoSettings;
        private readonly ICacheManager _cacheManager;

        #endregion

        #region Constructors

        public ProductModelFactory(ISpecificationAttributeService specificationAttributeService,
            ICategoryService categoryService,
            IManufacturerService manufacturerService,
            IProductService productService,
            IVendorService vendorService,
            IProductTemplateService productTemplateService,
            IProductAttributeService productAttributeService,
            IWorkContext workContext,
            IStoreContext storeContext,
            ITaxService taxService,
            ICurrencyService currencyService,
            IPictureService pictureService,
            ILocalizationService localizationService,
            IMeasureService measureService,
            IPriceCalculationService priceCalculationService,
            IPriceFormatter priceFormatter,
            IWebHelper webHelper,
            IDateTimeHelper dateTimeHelper,
            IProductTagService productTagService,
            IAclService aclService,
            IStoreMappingService storeMappingService,
            IPermissionService permissionService,
            IDownloadService downloadService,
            IProductAttributeParser productAttributeParser,
            IDateRangeService dateRangeService,
            MediaSettings mediaSettings,
            CatalogSettings catalogSettings,
            VendorSettings vendorSettings,
            CustomerSettings customerSettings,
            CaptchaSettings captchaSettings,
            SeoSettings seoSettings,
            ICacheManager cacheManager)
        {
            this._specificationAttributeService = specificationAttributeService;
            this._categoryService = categoryService;
            this._manufacturerService = manufacturerService;
            this._productService = productService;
            this._vendorService = vendorService;
            this._productTemplateService = productTemplateService;
            this._productAttributeService = productAttributeService;
            this._workContext = workContext;
            this._storeContext = storeContext;
            this._taxService = taxService;
            this._currencyService = currencyService;
            this._pictureService = pictureService;
            this._localizationService = localizationService;
            this._measureService = measureService;
            this._priceCalculationService = priceCalculationService;
            this._priceFormatter = priceFormatter;
            this._webHelper = webHelper;
            this._dateTimeHelper = dateTimeHelper;
            this._productTagService = productTagService;
            this._aclService = aclService;
            this._storeMappingService = storeMappingService;
            this._permissionService = permissionService;
            this._downloadService = downloadService;
            this._productAttributeParser = productAttributeParser;
            this._dateRangeService = dateRangeService;
            this._mediaSettings = mediaSettings;
            this._catalogSettings = catalogSettings;
            this._vendorSettings = vendorSettings;
            this._customerSettings = customerSettings;
            this._captchaSettings = captchaSettings;
            this._seoSettings = seoSettings;
            this._cacheManager = cacheManager;
        }

        #endregion

        #region Utilities

        /// <summary>
        /// Prepare the product review overview model
        /// </summary>
        /// <param name="product">Product</param>
        /// <returns>Product review overview model</returns>
        protected virtual ProductReviewOverviewModel PrepareProductReviewOverviewModel(Product product)
        {
            ProductReviewOverviewModel productReview;

            if (_catalogSettings.ShowProductReviewsPerStore)
            {
                string cacheKey = string.Format(ModelCacheEventConsumer.PRODUCT_REVIEWS_MODEL_KEY, product.Id, _storeContext.CurrentStore.Id);

                productReview = _cacheManager.Get(cacheKey, () =>
                {
                    return new ProductReviewOverviewModel
                    {
                        RatingSum = product.ProductReviews
                                .Where(pr => pr.IsApproved && pr.StoreId == _storeContext.CurrentStore.Id)
                                .Sum(pr => pr.Rating),
                        TotalReviews = product
                                .ProductReviews
                                .Count(pr => pr.IsApproved && pr.StoreId == _storeContext.CurrentStore.Id)
                    };
                });
            }
            else
            {
                productReview = new ProductReviewOverviewModel()
                {
                    RatingSum = product.ApprovedRatingSum,
                    TotalReviews = product.ApprovedTotalReviews
                };
            }
            if (productReview != null)
            {
                productReview.ProductId = product.Id;
                productReview.AllowCustomerReviews = product.AllowCustomerReviews;
            }
            return productReview;
        }

        /// <summary>
        /// Prepare the product overview price model
        /// </summary>
        /// <param name="product">Product</param>
        /// <param name="forceRedirectionAfterAddingToCart">Whether to force redirection after adding to cart</param>
        /// <returns>Product overview price model</returns>
        protected virtual ProductOverviewModel.ProductPriceModel PrepareProductOverviewPriceModel(Product product, bool forceRedirectionAfterAddingToCart = false)
        {
            if (product == null)
                throw new ArgumentNullException("product");

            var priceModel = new ProductOverviewModel.ProductPriceModel
            {
                ForceRedirectionAfterAddingToCart = forceRedirectionAfterAddingToCart
            };

            switch (product.ProductType)
            {
                case ProductType.GroupedProduct:
                {
                    #region Grouped product

                    var associatedProducts = _productService.GetAssociatedProducts(product.Id,
                        _storeContext.CurrentStore.Id);

                    //add to cart button (ignore "DisableBuyButton" property for grouped products)
                    priceModel.DisableBuyButton =
                        !_permissionService.Authorize(StandardPermissionProvider.EnableShoppingCart) ||
                        !_permissionService.Authorize(StandardPermissionProvider.DisplayPrices);

                    //add to wishlist button (ignore "DisableWishlistButton" property for grouped products)
                    priceModel.DisableWishlistButton =
                        !_permissionService.Authorize(StandardPermissionProvider.EnableWishlist) ||
                        !_permissionService.Authorize(StandardPermissionProvider.DisplayPrices);

                    //compare products
                    priceModel.DisableAddToCompareListButton = !_catalogSettings.CompareProductsEnabled;
                    switch (associatedProducts.Count)
                    {
                        case 0:
                        {
                            //no associated products
                        }
                            break;
                        default:
                        {
                            //we have at least one associated product
                            //compare products
                            priceModel.DisableAddToCompareListButton = !_catalogSettings.CompareProductsEnabled;
                            //priceModel.AvailableForPreOrder = false;

                            if (_permissionService.Authorize(StandardPermissionProvider.DisplayPrices))
                            {
                                //find a minimum possible price
                                decimal? minPossiblePrice = null;
                                Product minPriceProduct = null;
                                foreach (var associatedProduct in associatedProducts)
                                {
                                    var tmpMinPossiblePrice = _priceCalculationService.GetFinalPrice(associatedProduct, _workContext.CurrentCustomer);

                                    if (associatedProduct.HasTierPrices)
                                    {
                                        //calculate price for the maximum quantity if we have tier prices, and choose minimal
                                        tmpMinPossiblePrice = Math.Min(tmpMinPossiblePrice, 
                                            _priceCalculationService.GetFinalPrice(associatedProduct, _workContext.CurrentCustomer, quantity: int.MaxValue));
                                    }

                                    if (!minPossiblePrice.HasValue || tmpMinPossiblePrice < minPossiblePrice.Value)
                                    {
                                        minPriceProduct = associatedProduct;
                                        minPossiblePrice = tmpMinPossiblePrice;
                                    }
                                }
                                if (minPriceProduct != null && !minPriceProduct.CustomerEntersPrice)
                                {
                                    if (minPriceProduct.CallForPrice)
                                    {
                                        priceModel.OldPrice = null;
                                        priceModel.Price = _localizationService.GetResource("Products.CallForPrice");
                                    }
                                    else if (minPossiblePrice.HasValue)
                                    {
                                        //calculate prices
                                        decimal taxRate;
                                        decimal finalPriceBase = _taxService.GetProductPrice(minPriceProduct, minPossiblePrice.Value, out taxRate);
                                        decimal finalPrice = _currencyService.ConvertFromPrimaryStoreCurrency(finalPriceBase, _workContext.WorkingCurrency);

                                        priceModel.OldPrice = null;
                                        priceModel.Price = String.Format(_localizationService.GetResource("Products.PriceRangeFrom"), _priceFormatter.FormatPrice(finalPrice));
                                        priceModel.PriceValue = finalPrice;

                                        //PAngV baseprice (used in Germany)
                                        priceModel.BasePricePAngV = product.FormatBasePrice(finalPrice,
                                            _localizationService, _measureService, _currencyService, _workContext,
                                            _priceFormatter);
                                    }
                                    else
                                    {
                                        //Actually it's not possible (we presume that minimalPrice always has a value)
                                        //We never should get here
                                        Debug.WriteLine("Cannot calculate minPrice for product #{0}", product.Id);
                                    }
                                }
                            }
                            else
                            {
                                //hide prices
                                priceModel.OldPrice = null;
                                priceModel.Price = null;
                            }
                        }
                            break;
                    }

                    #endregion
                }
                    break;
                case ProductType.SimpleProduct:
                default:
                {
                    #region Simple product

                    //add to cart button
                    priceModel.DisableBuyButton = product.DisableBuyButton ||
                                                  !_permissionService.Authorize(StandardPermissionProvider.EnableShoppingCart) ||
                                                  !_permissionService.Authorize(StandardPermissionProvider.DisplayPrices);

                    //add to wishlist button
                    priceModel.DisableWishlistButton = product.DisableWishlistButton ||
                                                       !_permissionService.Authorize(StandardPermissionProvider.EnableWishlist) ||
                                                       !_permissionService.Authorize(StandardPermissionProvider.DisplayPrices);
                    //compare products
                    priceModel.DisableAddToCompareListButton = !_catalogSettings.CompareProductsEnabled;

                    //rental
                    priceModel.IsRental = product.IsRental;

                    //pre-order
                    if (product.AvailableForPreOrder)
                    {
                        priceModel.AvailableForPreOrder = !product.PreOrderAvailabilityStartDateTimeUtc.HasValue ||
                                                          product.PreOrderAvailabilityStartDateTimeUtc.Value >=
                                                          DateTime.UtcNow;
                        priceModel.PreOrderAvailabilityStartDateTimeUtc = product.PreOrderAvailabilityStartDateTimeUtc;
                    }

                    //prices
                    if (_permissionService.Authorize(StandardPermissionProvider.DisplayPrices))
                    {
                        if (!product.CustomerEntersPrice)
                        {
                            if (product.CallForPrice)
                            {
                                //call for price
                                priceModel.OldPrice = null;
                                priceModel.Price = _localizationService.GetResource("Products.CallForPrice");
                            }
                            else
                            {
                                //prices
                                var minPossiblePrice = _priceCalculationService.GetFinalPrice(product, _workContext.CurrentCustomer);

                                if (product.HasTierPrices)
                                {
                                    //calculate price for the maximum quantity if we have tier prices, and choose minimal
                                    minPossiblePrice = Math.Min(minPossiblePrice, 
                                        _priceCalculationService.GetFinalPrice(product, _workContext.CurrentCustomer, quantity: int.MaxValue));
                                }

                                decimal taxRate;
                                decimal oldPriceBase = _taxService.GetProductPrice(product, product.OldPrice, out taxRate);
                                decimal finalPriceBase = _taxService.GetProductPrice(product, minPossiblePrice, out taxRate);

                                decimal oldPrice = _currencyService.ConvertFromPrimaryStoreCurrency(oldPriceBase, _workContext.WorkingCurrency);
                                decimal finalPrice = _currencyService.ConvertFromPrimaryStoreCurrency(finalPriceBase, _workContext.WorkingCurrency);

                                //do we have tier prices configured?
                                var tierPrices = new List<TierPrice>();
                                if (product.HasTierPrices)
                                {
                                    tierPrices.AddRange(product.TierPrices.OrderBy(tp => tp.Quantity)
                                        .FilterByStore(_storeContext.CurrentStore.Id)
                                        .FilterForCustomer(_workContext.CurrentCustomer)
                                        .FilterByDate()
                                        .RemoveDuplicatedQuantities());
                                }
                                //When there is just one tier price (with  qty 1), there are no actual savings in the list.
                                var displayFromMessage = tierPrices.Any() &&
                                                         !(tierPrices.Count == 1 && tierPrices[0].Quantity <= 1);
                                if (displayFromMessage)
                                {
                                    priceModel.OldPrice = null;
                                    priceModel.Price = String.Format(_localizationService.GetResource("Products.PriceRangeFrom"), _priceFormatter.FormatPrice(finalPrice));
                                    priceModel.PriceValue = finalPrice;
                                }
                                else
                                {
                                    if (finalPriceBase != oldPriceBase && oldPriceBase != decimal.Zero)
                                    {
                                        priceModel.OldPrice = _priceFormatter.FormatPrice(oldPrice);
                                        priceModel.Price = _priceFormatter.FormatPrice(finalPrice);
                                        priceModel.PriceValue = finalPrice;
                                    }
                                    else
                                    {
                                        priceModel.OldPrice = null;
                                        priceModel.Price = _priceFormatter.FormatPrice(finalPrice);
                                        priceModel.PriceValue = finalPrice;
                                    }
                                }
                                if (product.IsRental)
                                {
                                    //rental product
                                    priceModel.OldPrice = _priceFormatter.FormatRentalProductPeriod(product,
                                        priceModel.OldPrice);
                                    priceModel.Price = _priceFormatter.FormatRentalProductPeriod(product,
                                        priceModel.Price);
                                }


                                //property for German market
                                //we display tax/shipping info only with "shipping enabled" for this product
                                //we also ensure this it's not free shipping
                                priceModel.DisplayTaxShippingInfo = _catalogSettings.DisplayTaxShippingInfoProductBoxes
                                                                    && product.IsShipEnabled &&
                                                                    !product.IsFreeShipping;


                                //PAngV baseprice (used in Germany)
                                priceModel.BasePricePAngV = product.FormatBasePrice(finalPrice,
                                    _localizationService, _measureService, _currencyService, _workContext,
                                    _priceFormatter);
                            }
                        }
                    }
                    else
                    {
                        //hide prices
                        priceModel.OldPrice = null;
                        priceModel.Price = null;
                    }

                    #endregion
                }
                    break;
            }

            return priceModel;
        }

        /// <summary>
        /// Prepare the product overview picture model
        /// </summary>
        /// <param name="product">Product</param>
        /// <param name="productThumbPictureSize">Product thumb picture size (longest side); pass null to use the default value of media settings</param>
        /// <returns>Picture model</returns>
        protected virtual PictureModel PrepareProductOverviewPictureModel(Product product, int? productThumbPictureSize = null)
        {
            if (product == null)
                throw new ArgumentNullException("product");

            var productName = product.GetLocalized(x => x.Name);
            //If a size has been set in the view, we use it in priority
            int pictureSize = productThumbPictureSize.HasValue
                ? productThumbPictureSize.Value
                : _mediaSettings.ProductThumbPictureSize;

            //prepare picture model
            var cacheKey = string.Format(ModelCacheEventConsumer.PRODUCT_DEFAULTPICTURE_MODEL_KEY,
                product.Id, pictureSize, true, _workContext.WorkingLanguage.Id, _webHelper.IsCurrentConnectionSecured(),
                _storeContext.CurrentStore.Id);

            PictureModel defaultPictureModel = _cacheManager.Get(cacheKey, () =>
            {
                var picture = _pictureService.GetPicturesByProductId(product.Id, 1).FirstOrDefault();
                var pictureModel = new PictureModel
                {
                    ImageUrl = _pictureService.GetPictureUrl(picture, pictureSize),
                    FullSizeImageUrl = _pictureService.GetPictureUrl(picture)
                };
                //"title" attribute
                pictureModel.Title = (picture != null && !string.IsNullOrEmpty(picture.TitleAttribute))
                    ? picture.TitleAttribute
                    : string.Format(_localizationService.GetResource("Media.Product.ImageLinkTitleFormat"), productName);
                //"alt" attribute
                pictureModel.AlternateText = (picture != null && !string.IsNullOrEmpty(picture.AltAttribute))
                    ? picture.AltAttribute
                    : string.Format(_localizationService.GetResource("Media.Product.ImageAlternateTextFormat"),
                        productName);

                return pictureModel;
            });

            return defaultPictureModel;
        }

        /// <summary>
        /// Prepare the product breadcrumb model
        /// </summary>
        /// <param name="product">Product</param>
        /// <returns>Product breadcrumb model</returns>
        protected virtual ProductDetailsModel.ProductBreadcrumbModel PrepareProductBreadcrumbModel(Product product)
        {
            if (product == null)
                throw new ArgumentNullException("product");

            var cacheKey = string.Format(ModelCacheEventConsumer.PRODUCT_BREADCRUMB_MODEL_KEY,
                    product.Id,
                    _workContext.WorkingLanguage.Id,
                    string.Join(",", _workContext.CurrentCustomer.GetCustomerRoleIds()),
                    _storeContext.CurrentStore.Id);
            var cachedModel = _cacheManager.Get(cacheKey, () =>
            {
                var breadcrumbModel = new ProductDetailsModel.ProductBreadcrumbModel
                {
                    Enabled = _catalogSettings.CategoryBreadcrumbEnabled,
                    ProductId = product.Id,
                    ProductName = product.GetLocalized(x => x.Name),
                    ProductSeName = product.GetSeName()
                };
                var productCategories = _categoryService.GetProductCategoriesByProductId(product.Id);
                if (productCategories.Any())
                {
                    var category = productCategories[0].Category;
                    if (category != null)
                    {
                        foreach (var catBr in category.GetCategoryBreadCrumb(_categoryService, _aclService, _storeMappingService))
                        {
                            breadcrumbModel.CategoryBreadcrumb.Add(new CategorySimpleModel
                            {
                                Id = catBr.Id,
                                Name = catBr.GetLocalized(x => x.Name),
                                SeName = catBr.GetSeName(),
                                IncludeInTopMenu = catBr.IncludeInTopMenu
                            });
                        }
                    }
                }
                return breadcrumbModel;
            });
            return cachedModel;
        }

        /// <summary>
        /// Prepare the product tag models
        /// </summary>
        /// <param name="product">Product</param>
        /// <returns>List of product tag model</returns>
        protected virtual IList<ProductTagModel> PrepareProductTagModels(Product product)
        {
            if (product == null)
                throw new ArgumentNullException("product");

            var productTagsCacheKey = string.Format(ModelCacheEventConsumer.PRODUCTTAG_BY_PRODUCT_MODEL_KEY, product.Id, _workContext.WorkingLanguage.Id, _storeContext.CurrentStore.Id);
            var model = _cacheManager.Get(productTagsCacheKey, () =>
                product.ProductTags
                //filter by store
                .Where(x => _productTagService.GetProductCount(x.Id, _storeContext.CurrentStore.Id) > 0)
                .Select(x => new ProductTagModel
                {
                    Id = x.Id,
                    Name = x.GetLocalized(y => y.Name),
                    SeName = x.GetSeName(),
                    ProductCount = _productTagService.GetProductCount(x.Id, _storeContext.CurrentStore.Id)
                })
                .ToList());

            return model;
        }

        /// <summary>
        /// Prepare the product price model
        /// </summary>
        /// <param name="product">Product</param>
        /// <returns>Product price model</returns>
        protected virtual ProductDetailsModel.ProductPriceModel PrepareProductPriceModel(Product product)
        {
            if (product == null)
                throw new ArgumentNullException("product");

            var model = new ProductDetailsModel.ProductPriceModel();

            model.ProductId = product.Id;
            if (_permissionService.Authorize(StandardPermissionProvider.DisplayPrices))
            {
                model.HidePrices = false;
                if (product.CustomerEntersPrice)
                {
                    model.CustomerEntersPrice = true;
                }
                else
                {
                    if (product.CallForPrice)
                    {
                        model.CallForPrice = true;
                    }
                    else
                    {
                        decimal taxRate;
                        decimal oldPriceBase = _taxService.GetProductPrice(product, product.OldPrice, out taxRate);
                        decimal finalPriceWithoutDiscountBase = _taxService.GetProductPrice(product, _priceCalculationService.GetFinalPrice(product, _workContext.CurrentCustomer, includeDiscounts: false), out taxRate);
                        decimal finalPriceWithDiscountBase = _taxService.GetProductPrice(product, _priceCalculationService.GetFinalPrice(product, _workContext.CurrentCustomer, includeDiscounts: true), out taxRate);

                        decimal oldPrice = _currencyService.ConvertFromPrimaryStoreCurrency(oldPriceBase, _workContext.WorkingCurrency);
                        decimal finalPriceWithoutDiscount = _currencyService.ConvertFromPrimaryStoreCurrency(finalPriceWithoutDiscountBase, _workContext.WorkingCurrency);
                        decimal finalPriceWithDiscount = _currencyService.ConvertFromPrimaryStoreCurrency(finalPriceWithDiscountBase, _workContext.WorkingCurrency);

                        if (finalPriceWithoutDiscountBase != oldPriceBase && oldPriceBase > decimal.Zero)
                            model.OldPrice = _priceFormatter.FormatPrice(oldPrice);

                        model.Price = _priceFormatter.FormatPrice(finalPriceWithoutDiscount);

                        if (finalPriceWithoutDiscountBase != finalPriceWithDiscountBase)
                            model.PriceWithDiscount = _priceFormatter.FormatPrice(finalPriceWithDiscount);

                        model.PriceValue = finalPriceWithDiscount;

                        //property for German market
                        //we display tax/shipping info only with "shipping enabled" for this product
                        //we also ensure this it's not free shipping
                        model.DisplayTaxShippingInfo = _catalogSettings.DisplayTaxShippingInfoProductDetailsPage
                            && product.IsShipEnabled &&
                            !product.IsFreeShipping;

                        //PAngV baseprice (used in Germany)
                        model.BasePricePAngV = product.FormatBasePrice(finalPriceWithDiscountBase,
                            _localizationService, _measureService, _currencyService, _workContext, _priceFormatter);

                        //currency code
                        model.CurrencyCode = _workContext.WorkingCurrency.CurrencyCode;

                        //rental
                        if (product.IsRental)
                        {
                            model.IsRental = true;
                            var priceStr = _priceFormatter.FormatPrice(finalPriceWithDiscount);
                            model.RentalPrice = _priceFormatter.FormatRentalProductPeriod(product, priceStr);
                        }
                    }
                }
            }
            else
            {
                model.HidePrices = true;
                model.OldPrice = null;
                model.Price = null;
            }

            return model;
        }

        /// <summary>
        /// Prepare the product add to cart model
        /// </summary>
        /// <param name="product">Product</param>
        /// <param name="updatecartitem">Updated shopping cart item</param>
        /// <returns>Product add to cart model</returns>
        protected virtual ProductDetailsModel.AddToCartModel PrepareProductAddToCartModel(Product product, ShoppingCartItem updatecartitem)
        {
            if (product == null)
                throw new ArgumentNullException("product");

            var model = new ProductDetailsModel.AddToCartModel();


            model.ProductId = product.Id;
            if (updatecartitem != null)
            {
                model.UpdatedShoppingCartItemId = updatecartitem.Id;
                model.UpdateShoppingCartItemType = updatecartitem.ShoppingCartType;
            }

            //quantity
            model.EnteredQuantity = updatecartitem != null ? updatecartitem.Quantity : product.OrderMinimumQuantity;
            //allowed quantities
            var allowedQuantities = product.ParseAllowedQuantities();
            foreach (var qty in allowedQuantities)
            {
                model.AllowedQuantities.Add(new SelectListItem
                {
                    Text = qty.ToString(),
                    Value = qty.ToString(),
                    Selected = updatecartitem != null && updatecartitem.Quantity == qty
                });
            }
            //minimum quantity notification
            if (product.OrderMinimumQuantity > 1)
            {
                model.MinimumQuantityNotification = string.Format(_localizationService.GetResource("Products.MinimumQuantityNotification"), product.OrderMinimumQuantity);
            }

            //'add to cart', 'add to wishlist' buttons
            model.DisableBuyButton = product.DisableBuyButton || !_permissionService.Authorize(StandardPermissionProvider.EnableShoppingCart);
            model.DisableWishlistButton = product.DisableWishlistButton || !_permissionService.Authorize(StandardPermissionProvider.EnableWishlist);
            if (!_permissionService.Authorize(StandardPermissionProvider.DisplayPrices))
            {
                model.DisableBuyButton = true;
                model.DisableWishlistButton = true;
            }
            //pre-order
            if (product.AvailableForPreOrder)
            {
                model.AvailableForPreOrder = !product.PreOrderAvailabilityStartDateTimeUtc.HasValue ||
                    product.PreOrderAvailabilityStartDateTimeUtc.Value >= DateTime.UtcNow;
                model.PreOrderAvailabilityStartDateTimeUtc = product.PreOrderAvailabilityStartDateTimeUtc;
            }
            //rental
            model.IsRental = product.IsRental;

            //customer entered price
            model.CustomerEntersPrice = product.CustomerEntersPrice;
            if (model.CustomerEntersPrice)
            {
                decimal minimumCustomerEnteredPrice = _currencyService.ConvertFromPrimaryStoreCurrency(product.MinimumCustomerEnteredPrice, _workContext.WorkingCurrency);
                decimal maximumCustomerEnteredPrice = _currencyService.ConvertFromPrimaryStoreCurrency(product.MaximumCustomerEnteredPrice, _workContext.WorkingCurrency);

                model.CustomerEnteredPrice = updatecartitem != null ? updatecartitem.CustomerEnteredPrice : minimumCustomerEnteredPrice;
                model.CustomerEnteredPriceRange = string.Format(_localizationService.GetResource("Products.EnterProductPrice.Range"),
                    _priceFormatter.FormatPrice(minimumCustomerEnteredPrice, false, false),
                    _priceFormatter.FormatPrice(maximumCustomerEnteredPrice, false, false));
            }

            return model;
        }

        /// <summary>
        /// Prepare the product attribute models
        /// </summary>
        /// <param name="product">Product</param>
        /// <param name="updatecartitem">Updated shopping cart item</param>
        /// <returns>List of product attribute model</returns>
        protected virtual IList<ProductDetailsModel.ProductAttributeModel> PrepareProductAttributeModels(Product product, ShoppingCartItem updatecartitem)
        {
            if (product == null)
                throw new ArgumentNullException("product");

            //performance optimization
            //We cache a value indicating whether a product has attributes
            IList<ProductAttributeMapping> productAttributeMapping = null;
            string cacheKey = string.Format(ModelCacheEventConsumer.PRODUCT_HAS_PRODUCT_ATTRIBUTES_KEY, product.Id);
            var hasProductAttributesCache = _cacheManager.Get<bool?>(cacheKey);
            if (!hasProductAttributesCache.HasValue)
            {
                //no value in the cache yet
                //let's load attributes and cache the result (true/false)
                productAttributeMapping = _productAttributeService.GetProductAttributeMappingsByProductId(product.Id);
                hasProductAttributesCache = productAttributeMapping.Any();
                _cacheManager.Set(cacheKey, hasProductAttributesCache, 60);
            }
            if (hasProductAttributesCache.Value && productAttributeMapping == null)
            {
                //cache indicates that the product has attributes
                //let's load them
                productAttributeMapping = _productAttributeService.GetProductAttributeMappingsByProductId(product.Id);
            }
            if (productAttributeMapping == null)
            {
                productAttributeMapping = new List<ProductAttributeMapping>();
            }

            var model = new List<ProductDetailsModel.ProductAttributeModel>();

            foreach (var attribute in productAttributeMapping)
            {
                var attributeModel = new ProductDetailsModel.ProductAttributeModel
                {
                    Id = attribute.Id,
                    ProductId = product.Id,
                    ProductAttributeId = attribute.ProductAttributeId,
                    Name = attribute.ProductAttribute.GetLocalized(x => x.Name),
                    Description = attribute.ProductAttribute.GetLocalized(x => x.Description),
                    TextPrompt = attribute.TextPrompt,
                    IsRequired = attribute.IsRequired,
                    AttributeControlType = attribute.AttributeControlType,
                    DefaultValue = updatecartitem != null ? null : attribute.DefaultValue,
                    HasCondition = !String.IsNullOrEmpty(attribute.ConditionAttributeXml)
                };
                if (!String.IsNullOrEmpty(attribute.ValidationFileAllowedExtensions))
                {
                    attributeModel.AllowedFileExtensions = attribute.ValidationFileAllowedExtensions
                        .Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
                        .ToList();
                }

                if (attribute.ShouldHaveValues())
                {
                    //values
                    var attributeValues = _productAttributeService.GetProductAttributeValues(attribute.Id);
                    foreach (var attributeValue in attributeValues)
                    {
                        var valueModel = new ProductDetailsModel.ProductAttributeValueModel
                        {
                            Id = attributeValue.Id,
                            Name = attributeValue.GetLocalized(x => x.Name),
                            ColorSquaresRgb = attributeValue.ColorSquaresRgb, //used with "Color squares" attribute type
                            IsPreSelected = attributeValue.IsPreSelected,
                            CustomerEntersQty = attributeValue.CustomerEntersQty,
                            Quantity = attributeValue.Quantity
                        };
                        attributeModel.Values.Add(valueModel);

                        //display price if allowed
                        if (_permissionService.Authorize(StandardPermissionProvider.DisplayPrices))
                        {
                            decimal taxRate;
                            decimal attributeValuePriceAdjustment = _priceCalculationService.GetProductAttributeValuePriceAdjustment(attributeValue);
                            decimal priceAdjustmentBase = _taxService.GetProductPrice(product, attributeValuePriceAdjustment, out taxRate);
                            decimal priceAdjustment = _currencyService.ConvertFromPrimaryStoreCurrency(priceAdjustmentBase, _workContext.WorkingCurrency);
                            if (priceAdjustmentBase > decimal.Zero)
                                valueModel.PriceAdjustment = "+" + _priceFormatter.FormatPrice(priceAdjustment, false, false);
                            else if (priceAdjustmentBase < decimal.Zero)
                                valueModel.PriceAdjustment = "-" + _priceFormatter.FormatPrice(-priceAdjustment, false, false);

                            valueModel.PriceAdjustmentValue = priceAdjustment;
                        }

                        //"image square" picture (with with "image squares" attribute type only)
                        if (attributeValue.ImageSquaresPictureId > 0)
                        {
                            var productAttributeImageSquarePictureCacheKey = string.Format(ModelCacheEventConsumer.PRODUCTATTRIBUTE_IMAGESQUARE_PICTURE_MODEL_KEY,
                                   attributeValue.ImageSquaresPictureId,
                                   _webHelper.IsCurrentConnectionSecured(),
                                   _storeContext.CurrentStore.Id);
                            valueModel.ImageSquaresPictureModel = _cacheManager.Get(productAttributeImageSquarePictureCacheKey, () =>
                            {
                                var imageSquaresPicture = _pictureService.GetPictureById(attributeValue.ImageSquaresPictureId);
                                if (imageSquaresPicture != null)
                                {
                                    return new PictureModel
                                    {
                                        FullSizeImageUrl = _pictureService.GetPictureUrl(imageSquaresPicture),
                                        ImageUrl = _pictureService.GetPictureUrl(imageSquaresPicture, _mediaSettings.ImageSquarePictureSize)
                                    };
                                }
                                return new PictureModel();
                            });
                        }

                        //picture of a product attribute value
                        valueModel.PictureId = attributeValue.PictureId;
                    }

                }

                //set already selected attributes (if we're going to update the existing shopping cart item)
                if (updatecartitem != null)
                {
                    switch (attribute.AttributeControlType)
                    {
                        case AttributeControlType.DropdownList:
                        case AttributeControlType.RadioList:
                        case AttributeControlType.Checkboxes:
                        case AttributeControlType.ColorSquares:
                        case AttributeControlType.ImageSquares:
                            {
                                if (!String.IsNullOrEmpty(updatecartitem.AttributesXml))
                                {
                                    //clear default selection
                                    foreach (var item in attributeModel.Values)
                                        item.IsPreSelected = false;

                                    //select new values
                                    var selectedValues = _productAttributeParser.ParseProductAttributeValues(updatecartitem.AttributesXml);
                                    foreach (var attributeValue in selectedValues)
                                        foreach (var item in attributeModel.Values)
                                            if (attributeValue.Id == item.Id)
                                            {
                                                item.IsPreSelected = true;

                                                //set customer entered quantity
                                                if (attributeValue.CustomerEntersQty)
                                                    item.Quantity = attributeValue.Quantity;
                                            }
                                }
                            }
                            break;
                        case AttributeControlType.ReadonlyCheckboxes:
                            {
                                //values are already pre-set

                                //set customer entered quantity
                                if (!string.IsNullOrEmpty(updatecartitem.AttributesXml))
                                {
                                    foreach (var attributeValue in _productAttributeParser.ParseProductAttributeValues(updatecartitem.AttributesXml)
                                        .Where(value => value.CustomerEntersQty))
                                    {
                                        var item = attributeModel.Values.FirstOrDefault(value => value.Id == attributeValue.Id);
                                        if (item != null)
                                            item.Quantity = attributeValue.Quantity;
                                    }
                                }
                            }
                            break;
                        case AttributeControlType.TextBox:
                        case AttributeControlType.MultilineTextbox:
                            {
                                if (!String.IsNullOrEmpty(updatecartitem.AttributesXml))
                                {
                                    var enteredText = _productAttributeParser.ParseValues(updatecartitem.AttributesXml, attribute.Id);
                                    if (enteredText.Any())
                                        attributeModel.DefaultValue = enteredText[0];
                                }
                            }
                            break;
                        case AttributeControlType.Datepicker:
                            {
                                //keep in mind my that the code below works only in the current culture
                                var selectedDateStr = _productAttributeParser.ParseValues(updatecartitem.AttributesXml, attribute.Id);
                                if (selectedDateStr.Any())
                                {
                                    DateTime selectedDate;
                                    if (DateTime.TryParseExact(selectedDateStr[0], "D", CultureInfo.CurrentCulture,
                                                           DateTimeStyles.None, out selectedDate))
                                    {
                                        //successfully parsed
                                        attributeModel.SelectedDay = selectedDate.Day;
                                        attributeModel.SelectedMonth = selectedDate.Month;
                                        attributeModel.SelectedYear = selectedDate.Year;
                                    }
                                }

                            }
                            break;
                        case AttributeControlType.FileUpload:
                            {
                                if (!String.IsNullOrEmpty(updatecartitem.AttributesXml))
                                {
                                    var downloadGuidStr = _productAttributeParser.ParseValues(updatecartitem.AttributesXml, attribute.Id).FirstOrDefault();
                                    Guid downloadGuid;
                                    Guid.TryParse(downloadGuidStr, out downloadGuid);
                                    var download = _downloadService.GetDownloadByGuid(downloadGuid);
                                    if (download != null)
                                        attributeModel.DefaultValue = download.DownloadGuid.ToString();
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }

                model.Add(attributeModel);
            }

            return model;
        }

        /// <summary>
        /// Prepare the product tier price models
        /// </summary>
        /// <param name="product">Product</param>
        /// <returns>List of tier price model</returns>
        protected virtual IList<ProductDetailsModel.TierPriceModel> PrepareProductTierPriceModels(Product product)
        {
            if (product == null)
                throw new ArgumentNullException("product");

            var model = product.TierPrices.OrderBy(x => x.Quantity)
                   .FilterByStore(_storeContext.CurrentStore.Id)
                   .FilterForCustomer(_workContext.CurrentCustomer)
                   .FilterByDate()
                   .RemoveDuplicatedQuantities()
                   .Select(tierPrice =>
                   {
                       decimal taxRate;
                       var priceBase = _taxService.GetProductPrice(product, _priceCalculationService.GetFinalPrice(product,
                           _workContext.CurrentCustomer, decimal.Zero, _catalogSettings.DisplayTierPricesWithDiscounts, tierPrice.Quantity), out taxRate);
                       var price = _currencyService.ConvertFromPrimaryStoreCurrency(priceBase, _workContext.WorkingCurrency);

                       return new ProductDetailsModel.TierPriceModel
                       {
                           Quantity = tierPrice.Quantity,
                           Price = _priceFormatter.FormatPrice(price, false, false)
                       };
                   }).ToList();

            return model;
        }

        /// <summary>
        /// Prepare the product manufacturer models
        /// </summary>
        /// <param name="product">Product</param>
        /// <returns>List of manufacturer brief info model</returns>
        protected virtual IList<ManufacturerBriefInfoModel> PrepareProductManufacturerModels(Product product)
        {
            if (product == null)
                throw new ArgumentNullException("product");

            string manufacturersCacheKey = string.Format(ModelCacheEventConsumer.PRODUCT_MANUFACTURERS_MODEL_KEY,
                     product.Id,
                     _workContext.WorkingLanguage.Id,
                     string.Join(",", _workContext.CurrentCustomer.GetCustomerRoleIds()),
                     _storeContext.CurrentStore.Id);
            var model = _cacheManager.Get(manufacturersCacheKey,
                () => _manufacturerService.GetProductManufacturersByProductId(product.Id)
                    .Select(pm =>
                    {
                        var manufacturer = pm.Manufacturer;
                        var modelMan = new ManufacturerBriefInfoModel
                        {
                            Id = manufacturer.Id,
                            Name = manufacturer.GetLocalized(x => x.Name),
                            SeName = manufacturer.GetSeName()
                        };
                        return modelMan;
                    })
                    .ToList()
                );

            return model;
        }

        /// <summary>
        /// Prepare the product details picture model
        /// </summary>
        /// <param name="product">Product</param>
        /// <param name="isAssociatedProduct">Whether the product is associated</param>
        /// <returns>Picture model for the default picture and list of picture models for all product pictures</returns>
        protected virtual dynamic PrepareProductDetailsPictureModel(Product product, bool isAssociatedProduct = false)
        {
            if (product == null)
                throw new ArgumentNullException("product");

            //default picture size
            var defaultPictureSize = isAssociatedProduct ?
                _mediaSettings.AssociatedProductPictureSize :
                _mediaSettings.ProductDetailsPictureSize;

            //prepare picture models
            var productPicturesCacheKey = string.Format(ModelCacheEventConsumer.PRODUCT_DETAILS_PICTURES_MODEL_KEY, product.Id, defaultPictureSize, isAssociatedProduct, _workContext.WorkingLanguage.Id, _webHelper.IsCurrentConnectionSecured(), _storeContext.CurrentStore.Id);
            var cachedPictures = _cacheManager.Get(productPicturesCacheKey, () =>
            {
                var productName = product.GetLocalized(x => x.Name);

                var pictures = _pictureService.GetPicturesByProductId(product.Id);
                var defaultPicture = pictures.FirstOrDefault();
                var defaultPictureModel = new PictureModel
                {
                    ImageUrl = _pictureService.GetPictureUrl(defaultPicture, defaultPictureSize, !isAssociatedProduct),
                    FullSizeImageUrl = _pictureService.GetPictureUrl(defaultPicture, 0, !isAssociatedProduct)
                };
                //"title" attribute
                defaultPictureModel.Title = (defaultPicture != null && !string.IsNullOrEmpty(defaultPicture.TitleAttribute)) ?
                    defaultPicture.TitleAttribute :
                    string.Format(_localizationService.GetResource("Media.Product.ImageLinkTitleFormat.Details"), productName);
                //"alt" attribute
                defaultPictureModel.AlternateText = (defaultPicture != null && !string.IsNullOrEmpty(defaultPicture.AltAttribute)) ?
                    defaultPicture.AltAttribute :
                    string.Format(_localizationService.GetResource("Media.Product.ImageAlternateTextFormat.Details"), productName);

                //all pictures
                var pictureModels = new List<PictureModel>();
                foreach (var picture in pictures)
                {
                    var pictureModel = new PictureModel
                    {
                        ImageUrl = _pictureService.GetPictureUrl(picture, defaultPictureSize, !isAssociatedProduct),
                        ThumbImageUrl = _pictureService.GetPictureUrl(picture, _mediaSettings.ProductThumbPictureSizeOnProductDetailsPage),
                        FullSizeImageUrl = _pictureService.GetPictureUrl(picture),
                        Title = string.Format(_localizationService.GetResource("Media.Product.ImageLinkTitleFormat.Details"), productName),
                        AlternateText = string.Format(_localizationService.GetResource("Media.Product.ImageAlternateTextFormat.Details"), productName),
                    };
                    //"title" attribute
                    pictureModel.Title = !string.IsNullOrEmpty(picture.TitleAttribute) ?
                        picture.TitleAttribute :
                        string.Format(_localizationService.GetResource("Media.Product.ImageLinkTitleFormat.Details"), productName);
                    //"alt" attribute
                    pictureModel.AlternateText = !string.IsNullOrEmpty(picture.AltAttribute) ?
                        picture.AltAttribute :
                        string.Format(_localizationService.GetResource("Media.Product.ImageAlternateTextFormat.Details"), productName);

                    pictureModels.Add(pictureModel);
                }

                return new { DefaultPictureModel = defaultPictureModel, PictureModels = pictureModels };
            });

            return cachedPictures;
        }

        #endregion

        #region Methods

        /// <summary>
        /// Get the product template view path
        /// </summary>
        /// <param name="product">Product</param>
        /// <returns>View path</returns>
        public virtual string PrepareProductTemplateViewPath(Product product)
        {
            if (product == null)
                throw new ArgumentNullException("product");

            var templateCacheKey = string.Format(ModelCacheEventConsumer.PRODUCT_TEMPLATE_MODEL_KEY, product.ProductTemplateId);
            var productTemplateViewPath = _cacheManager.Get(templateCacheKey, () =>
            {
                var template = _productTemplateService.GetProductTemplateById(product.ProductTemplateId);
                if (template == null)
                    template = _productTemplateService.GetAllProductTemplates().FirstOrDefault();
                if (template == null)
                    throw new Exception("No default template could be loaded");
                return template.ViewPath;
            });

            return productTemplateViewPath;
        }

        /// <summary>
        /// Prepare the product overview models
        /// </summary>
        /// <param name="products">Collection of products</param>
        /// <param name="preparePriceModel">Whether to prepare the price model</param>
        /// <param name="preparePictureModel">Whether to prepare the picture model</param>
        /// <param name="productThumbPictureSize">Product thumb picture size (longest side); pass null to use the default value of media settings</param>
        /// <param name="prepareSpecificationAttributes">Whether to prepare the specification attribute models</param>
        /// <param name="forceRedirectionAfterAddingToCart">Whether to force redirection after adding to cart</param>
        /// <returns>Collection of product overview model</returns>
        public virtual IEnumerable<ProductOverviewModel> PrepareProductOverviewModels(IEnumerable<Product> products,
            bool preparePriceModel = true, bool preparePictureModel = true,
            int? productThumbPictureSize = null, bool prepareSpecificationAttributes = false,
            bool forceRedirectionAfterAddingToCart = false)
        {
            if (products == null)
                throw new ArgumentNullException("products");

            var models = new List<ProductOverviewModel>();
            foreach (var product in products)
            {
                var model = new ProductOverviewModel
                {
                    Id = product.Id,
                    Name = product.GetLocalized(x => x.Name),
                    ShortDescription = product.GetLocalized(x => x.ShortDescription),
                    FullDescription = product.GetLocalized(x => x.FullDescription),
                    SeName = product.GetSeName(),
                    Sku = product.Sku,
                    ProductType = product.ProductType,
                    MarkAsNew = product.MarkAsNew &&
                        (!product.MarkAsNewStartDateTimeUtc.HasValue || product.MarkAsNewStartDateTimeUtc.Value < DateTime.UtcNow) &&
                        (!product.MarkAsNewEndDateTimeUtc.HasValue || product.MarkAsNewEndDateTimeUtc.Value > DateTime.UtcNow)
                };

                //price
                if (preparePriceModel)
                {
                    model.ProductPrice = PrepareProductOverviewPriceModel(product, forceRedirectionAfterAddingToCart);
                }

                //picture
                if (preparePictureModel)
                {
                    model.DefaultPictureModel = PrepareProductOverviewPictureModel(product, productThumbPictureSize);
                }

                //specs
                if (prepareSpecificationAttributes)
                {
                    model.SpecificationAttributeModels = PrepareProductSpecificationModel(product);
                }

                //reviews
                model.ReviewOverviewModel = PrepareProductReviewOverviewModel(product);

                models.Add(model);
            }
            return models;
        }

        /// <summary>
        /// Prepare the product details model
        /// </summary>
        /// <param name="product">Product</param>
        /// <param name="updatecartitem">Updated shopping cart item</param>
        /// <param name="isAssociatedProduct">Whether the product is associated</param>
        /// <returns>Product details model</returns>
        public virtual ProductDetailsModel PrepareProductDetailsModel(Product product,
            ShoppingCartItem updatecartitem = null, bool isAssociatedProduct = false)
        {
            if (product == null)
                throw new ArgumentNullException("product");

            //standard properties
            var model = new ProductDetailsModel
            {
                Id = product.Id,
                Name = product.GetLocalized(x => x.Name),
                ShortDescription = product.GetLocalized(x => x.ShortDescription),
                FullDescription = product.GetLocalized(x => x.FullDescription),
                MetaKeywords = product.GetLocalized(x => x.MetaKeywords),
                MetaDescription = product.GetLocalized(x => x.MetaDescription),
                MetaTitle = product.GetLocalized(x => x.MetaTitle),
                SeName = product.GetSeName(),
                ProductType = product.ProductType,
                ShowSku = _catalogSettings.ShowSkuOnProductDetailsPage,
                Sku = product.Sku,
                ShowManufacturerPartNumber = _catalogSettings.ShowManufacturerPartNumber,
                FreeShippingNotificationEnabled = _catalogSettings.ShowFreeShippingNotification,
                ManufacturerPartNumber = product.ManufacturerPartNumber,
                ShowGtin = _catalogSettings.ShowGtin,
                Gtin = product.Gtin,
                ManageInventoryMethod = product.ManageInventoryMethod,
                StockAvailability = product.FormatStockMessage("", _localizationService, _productAttributeParser, _dateRangeService),
                HasSampleDownload = product.IsDownload && product.HasSampleDownload,
                DisplayDiscontinuedMessage = !product.Published && _catalogSettings.DisplayDiscontinuedMessageForUnpublishedProducts
            };

            //automatically generate product description?
            if (_seoSettings.GenerateProductMetaDescription && String.IsNullOrEmpty(model.MetaDescription))
            {
                //based on short description
                model.MetaDescription = model.ShortDescription;
            }

            //shipping info
            model.IsShipEnabled = product.IsShipEnabled;
            if (product.IsShipEnabled)
            {
                model.IsFreeShipping = product.IsFreeShipping;
                //delivery date
                var deliveryDate = _dateRangeService.GetDeliveryDateById(product.DeliveryDateId);
                if (deliveryDate != null)
                {
                    model.DeliveryDate = deliveryDate.GetLocalized(dd => dd.Name);
                }
            }

            //email a friend
            model.EmailAFriendEnabled = _catalogSettings.EmailAFriendEnabled;
            //compare products
            model.CompareProductsEnabled = _catalogSettings.CompareProductsEnabled;
            //store name
            model.CurrentStoreName = _storeContext.CurrentStore.GetLocalized(x => x.Name);

            //vendor details
            if (_vendorSettings.ShowVendorOnProductDetailsPage)
            {
                var vendor = _vendorService.GetVendorById(product.VendorId);
                if (vendor != null && !vendor.Deleted && vendor.Active)
                {
                    model.ShowVendor = true;

                    model.VendorModel = new VendorBriefInfoModel
                    {
                        Id = vendor.Id,
                        Name = vendor.GetLocalized(x => x.Name),
                        SeName = vendor.GetSeName(),
                    };
                }
            }

            //page sharing
            if (_catalogSettings.ShowShareButton && !String.IsNullOrEmpty(_catalogSettings.PageShareCode))
            {
                var shareCode = _catalogSettings.PageShareCode;
                if (_webHelper.IsCurrentConnectionSecured())
                {
                    //need to change the addthis link to be https linked when the page is, so that the page doesnt ask about mixed mode when viewed in https...
                    shareCode = shareCode.Replace("http://", "https://");
                }
                model.PageShareCode = shareCode;
            }

            //back in stock subscriptions
            if (product.ManageInventoryMethod == ManageInventoryMethod.ManageStock &&
                product.BackorderMode == BackorderMode.NoBackorders &&
                product.AllowBackInStockSubscriptions &&
                product.GetTotalStockQuantity() <= 0)
            {
                //out of stock
                model.DisplayBackInStockSubscription = true;
            }

            //breadcrumb
            //do not prepare this model for the associated products. anyway it's not used
            if (_catalogSettings.CategoryBreadcrumbEnabled && !isAssociatedProduct)
            {
                model.Breadcrumb = PrepareProductBreadcrumbModel(product);
            }

            //product tags
            //do not prepare this model for the associated products. anyway it's not used
            if (!isAssociatedProduct)
            {
                model.ProductTags = PrepareProductTagModels(product);
            }
            
           //pictures
            model.DefaultPictureZoomEnabled = _mediaSettings.DefaultPictureZoomEnabled;
            var pictureModels = PrepareProductDetailsPictureModel(product, isAssociatedProduct);
            model.DefaultPictureModel = pictureModels.DefaultPictureModel;
            model.PictureModels = pictureModels.PictureModels;

            //price
            model.ProductPrice = PrepareProductPriceModel(product);

            //'Add to cart' model
            model.AddToCart = PrepareProductAddToCartModel(product, updatecartitem);

            //gift card
            if (product.IsGiftCard)
            {
                model.GiftCard.IsGiftCard = true;
                model.GiftCard.GiftCardType = product.GiftCardType;

                if (updatecartitem == null)
                {
                    model.GiftCard.SenderName = _workContext.CurrentCustomer.GetFullName();
                    model.GiftCard.SenderEmail = _workContext.CurrentCustomer.Email;
                }
                else
                {
                    string giftCardRecipientName, giftCardRecipientEmail, giftCardSenderName, giftCardSenderEmail, giftCardMessage;
                    _productAttributeParser.GetGiftCardAttribute(updatecartitem.AttributesXml,
                        out giftCardRecipientName, out giftCardRecipientEmail,
                        out giftCardSenderName, out giftCardSenderEmail, out giftCardMessage);

                    model.GiftCard.RecipientName = giftCardRecipientName;
                    model.GiftCard.RecipientEmail = giftCardRecipientEmail;
                    model.GiftCard.SenderName = giftCardSenderName;
                    model.GiftCard.SenderEmail = giftCardSenderEmail;
                    model.GiftCard.Message = giftCardMessage;
                }
            }

            //product attributes
            model.ProductAttributes = PrepareProductAttributeModels(product, updatecartitem);
            
            //product specifications
            //do not prepare this model for the associated products. anyway it's not used
            if (!isAssociatedProduct)
            {
                model.ProductSpecifications = PrepareProductSpecificationModel(product);
            }

            //product review overview
            model.ProductReviewOverview = PrepareProductReviewOverviewModel(product);

            //tier prices
            if (product.HasTierPrices && _permissionService.Authorize(StandardPermissionProvider.DisplayPrices))
            {
                model.TierPrices = PrepareProductTierPriceModels(product);
            }

            //manufacturers
            //do not prepare this model for the associated products. anywway it's not used
            if (!isAssociatedProduct)
            {
                model.ProductManufacturers = PrepareProductManufacturerModels(product);
            }

            //rental products
            if (product.IsRental)
            {
                model.IsRental = true;
                //set already entered dates attributes (if we're going to update the existing shopping cart item)
                if (updatecartitem != null)
                {
                    model.RentalStartDate = updatecartitem.RentalStartDateUtc;
                    model.RentalEndDate = updatecartitem.RentalEndDateUtc;
                }
            }

            //associated products
            if (product.ProductType == ProductType.GroupedProduct)
            {
                //ensure no circular references
                if (!isAssociatedProduct)
                {
                    var associatedProducts = _productService.GetAssociatedProducts(product.Id, _storeContext.CurrentStore.Id);
                    foreach (var associatedProduct in associatedProducts)
                        model.AssociatedProducts.Add(PrepareProductDetailsModel(associatedProduct, null, true));
                }
            }

            return model;
        }

        /// <summary>
        /// Prepare the product reviews model
        /// </summary>
        /// <param name="model">Product reviews model</param>
        /// <param name="product">Product</param>
        /// <returns>Product reviews model</returns>
        public virtual ProductReviewsModel PrepareProductReviewsModel(ProductReviewsModel model, Product product)
        {
            if (model == null)
                throw new ArgumentNullException("model");

            if (product == null)
                throw new ArgumentNullException("product");

            model.ProductId = product.Id;
            model.ProductName = product.GetLocalized(x => x.Name);
            model.ProductSeName = product.GetSeName();

            var productReviews = _catalogSettings.ShowProductReviewsPerStore
                ? product.ProductReviews.Where(pr => pr.IsApproved && pr.StoreId == _storeContext.CurrentStore.Id).OrderBy(pr => pr.CreatedOnUtc)
                : product.ProductReviews.Where(pr => pr.IsApproved).OrderBy(pr => pr.CreatedOnUtc);
            foreach (var pr in productReviews)
            {
                var customer = pr.Customer;
                model.Items.Add(new ProductReviewModel
                {
                    Id = pr.Id,
                    CustomerId = pr.CustomerId,
                    CustomerName = customer.FormatUserName(),
                    AllowViewingProfiles = _customerSettings.AllowViewingProfiles && customer != null && !customer.IsGuest(),
                    Title = pr.Title,
                    ReviewText = pr.ReviewText,
                    ReplyText = pr.ReplyText,
                    Rating = pr.Rating,
                    Helpfulness = new ProductReviewHelpfulnessModel
                    {
                        ProductReviewId = pr.Id,
                        HelpfulYesTotal = pr.HelpfulYesTotal,
                        HelpfulNoTotal = pr.HelpfulNoTotal,
                    },
                    WrittenOnStr = _dateTimeHelper.ConvertToUserTime(pr.CreatedOnUtc, DateTimeKind.Utc).ToString("g"),
                });
            }

            model.AddProductReview.CanCurrentCustomerLeaveReview = _catalogSettings.AllowAnonymousUsersToReviewProduct || !_workContext.CurrentCustomer.IsGuest();
            model.AddProductReview.DisplayCaptcha = _captchaSettings.Enabled && _captchaSettings.ShowOnProductReviewPage;

            return model;
        }

        /// <summary>
        /// Prepare the customer product reviews model
        /// </summary>
        /// <param name="page">Number of items page; pass null to load the first page</param>
        /// <returns>Customer product reviews model</returns>
        public virtual CustomerProductReviewsModel PrepareCustomerProductReviewsModel(int? page)
        {
            var pageSize = _catalogSettings.ProductReviewsPageSizeOnAccountPage;
            int pageIndex = 0;

            if (page > 0)
            {
                pageIndex = page.Value - 1;
            }

            var list = _productService.GetAllProductReviews(customerId: _workContext.CurrentCustomer.Id, 
                approved: null, 
                pageIndex: pageIndex, 
                pageSize: pageSize);

            var productReviews = new List<CustomerProductReviewModel>();

            foreach (var review in list)
            {
                var product = review.Product;
                var productReviewModel = new CustomerProductReviewModel
                {
                    Title = review.Title,
                    ProductId = product.Id,
                    ProductName = product.GetLocalized(p => p.Name),
                    ProductSeName = product.GetSeName(),
                    Rating = review.Rating,
                    ReviewText = review.ReviewText,
                    ReplyText = review.ReplyText,
                    WrittenOnStr = _dateTimeHelper.ConvertToUserTime(product.CreatedOnUtc, DateTimeKind.Utc).ToString("g")
                };

                if (_catalogSettings.ProductReviewsMustBeApproved)
                {
                    productReviewModel.ApprovalStatus = review.IsApproved
                        ? _localizationService.GetResource("Account.CustomerProductReviews.ApprovalStatus.Approved")
                        : _localizationService.GetResource("Account.CustomerProductReviews.ApprovalStatus.Pending");
                }
                productReviews.Add(productReviewModel);
            }

            var pagerModel = new PagerModel
            {
                PageSize = list.PageSize,
                TotalRecords = list.TotalCount,
                PageIndex = list.PageIndex,
                ShowTotalSummary = false,
                RouteActionName = "CustomerProductReviewsPaged",
                UseRouteLinks = true,
                RouteValues = new CustomerProductReviewsModel.CustomerProductReviewsRouteValues { page = pageIndex }
            };

            var model = new CustomerProductReviewsModel
            {
                ProductReviews = productReviews,
                PagerModel = pagerModel
            };

            return model;
        }

        /// <summary>
        /// Prepare the product email a friend model
        /// </summary>
        /// <param name="model">Product email a friend model</param>
        /// <param name="product">Product</param>
        /// <param name="excludeProperties">Whether to exclude populating of model properties from the entity</param>
        /// <returns>product email a friend model</returns>
        public virtual ProductEmailAFriendModel PrepareProductEmailAFriendModel(ProductEmailAFriendModel model, Product product, bool excludeProperties)
        {
            if (model == null)
                throw new ArgumentNullException("model");

            if (product == null)
                throw new ArgumentNullException("product");

            model.ProductId = product.Id;
            model.ProductName = product.GetLocalized(x => x.Name);
            model.ProductSeName = product.GetSeName();
            model.DisplayCaptcha = _captchaSettings.Enabled && _captchaSettings.ShowOnEmailProductToFriendPage;
            if (!excludeProperties)
            {
                model.YourEmailAddress = _workContext.CurrentCustomer.Email;
            }

            return model;
        }

        /// <summary>
        /// Prepare the product specification models
        /// </summary>
        /// <param name="product">Product</param>
        /// <returns>List of product specification model</returns>
        public virtual IList<ProductSpecificationModel> PrepareProductSpecificationModel(Product product)
        {
            if (product == null)
                throw new ArgumentNullException("product");

            string cacheKey = string.Format(ModelCacheEventConsumer.PRODUCT_SPECS_MODEL_KEY, product.Id, _workContext.WorkingLanguage.Id);
            return _cacheManager.Get(cacheKey, () =>
                _specificationAttributeService.GetProductSpecificationAttributes(product.Id, 0, null, true)
                .Select(psa =>
                {
                    var m = new ProductSpecificationModel
                    {
                        SpecificationAttributeId = psa.SpecificationAttributeOption.SpecificationAttributeId,
                        SpecificationAttributeName = psa.SpecificationAttributeOption.SpecificationAttribute.GetLocalized(x => x.Name),
                        ColorSquaresRgb = psa.SpecificationAttributeOption.ColorSquaresRgb
                    };

                    switch (psa.AttributeType)
                    {
                        case SpecificationAttributeType.Option:
                            m.ValueRaw = HttpUtility.HtmlEncode(psa.SpecificationAttributeOption.GetLocalized(x => x.Name));
                            break;
                        case SpecificationAttributeType.CustomText:
                            m.ValueRaw = HttpUtility.HtmlEncode(psa.CustomValue);
                            break;
                        case SpecificationAttributeType.CustomHtmlText:
                            m.ValueRaw = psa.CustomValue;
                            break;
                        case SpecificationAttributeType.Hyperlink:
                            m.ValueRaw = string.Format("<a href='{0}' target='_blank'>{0}</a>", psa.CustomValue);
                            break;
                        default:
                            break;
                    }
                    return m;
                }).ToList()
            );
        }

        #endregion
    }
}
