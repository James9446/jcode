let ecommerceEvents = {};

ecommerceEvents.productsSearched = {
  eventName: 'Products Searched',
  properties: {
    query: 'blue roses'
  }
};

ecommerceEvents.productListViewed = {
  eventName: 'Product List Viewed',
  properties: {
    list_id: 'hot_deals_1',
    category: 'Deals',
    products: [
      {
        product_id: '507f1f77bcf86cd799439011',
        sku: '45790-32',
        name: 'Monopoly: 3rd Edition',
        price: 19,
        position: 1,
        category: 'Games',
        url: 'https://www.example.com/product/path',
        image_url: 'https://www.example.com/product/path.jpg'
      },
      {
        product_id: '505bd76785ebb509fc183733',
        sku: '46493-32',
        name: 'Uno Card Game',
        price: 3,
        position: 2,
        category: 'Games'
      }
    ]
  }
};

ecommerceEvents.productListFiltered = {
  eventName: 'Product List Filtered',
  properties: {
    list_id: 'todays_deals_may_11_2019',
    filters: [
      {
        type: 'department',
        value: 'beauty'
      },
      {
        type: 'price',
        value: 'under-$25'
      },
    ],
    sorts: [
      {
        type: 'price',
        value: 'desc'
      }
    ],
    products: [
      {
        product_id: '507f1f77bcf86cd798439011',
        sku: '45360-32',
        name: 'Special Facial Soap',
        price: 12.60,
        position: 1,
        category: 'Beauty',
        url: 'https://www.example.com/product/path',
        image_url: 'https://www.example.com/product/path.jpg'
      },
      {
        product_id: '505bd76785ebb509fc283733',
        sku: '46573-32',
        name: 'Fancy Hairbrush',
        price: 7.60,
        position: 2,
        category: 'Beauty'
      }
    ]
  }
};

ecommerceEvents.promotionViewed = {
  eventName: 'Promotion Viewed',
  properties: {
    promotion_id: 'promo_1',
    creative: 'top_banner_2',
    name: '75% store-wide shoe sale',
    position: 'home_banner_top'
  }
};

ecommerceEvents.promotionClicked = {
  eventName: 'Promotion Clicked',
  properties: {
    promotion_id: 'promo_1',
    creative: 'top_banner_2',
    name: '75% store-wide shoe sale',
    position: 'home_banner_top'
  }
};

ecommerceEvents.productClicked = {
  eventName: 'Product Clicked',
  properties: {
    product_id: '507f1f77bcf86cd799439011',
    sku: 'G-32',
    category: 'Games',
    name: 'Monopoly: 3rd Edition',
    brand: 'Hasbro',
    variant: '200 pieces',
    price: 18.99,
    quantity: 1,
    coupon: 'MAYDEALS',
    position: 3,
    url: 'https://www.example.com/product/path',
    image_url: 'https://www.example.com/product/path.jpg'
  }
};

ecommerceEvents.productViewed = {
  eventName: 'Product Viewed',
  properties: {
    product_id: '507f1f77bcf86cd799439011',
    sku: 'G-32',
    category: 'Games',
    name: 'Monopoly: 3rd Edition',
    brand: 'Hasbro',
    variant: '200 pieces',
    price: 18.99,
    quantity: 1,
    coupon: 'MAYDEALS',
    currency: 'usd',
    position: 3,
    value: 18.99,
    url: 'https://www.example.com/product/path',
    image_url: 'https://www.example.com/product/path.jpg'
  }
};

ecommerceEvents.productAdded = {
  eventName: 'Product Added',
  properties: {
    cart_id: 'skdjsidjsdkdj29j',
    product_id: '507f1f77bcf86cd799439011',
    sku: 'G-32',
    category: 'Games',
    name: 'Monopoly: 3rd Edition',
    brand: 'Hasbro',
    variant: '200 pieces',
    price: 18.99,
    quantity: 1,
    coupon: 'MAYDEALS',
    position: 3,
    url: 'https://www.example.com/product/path',
    image_url: 'https://www.example.com/product/path.jpg'
  }
};

ecommerceEvents.productRemoved = {
  eventName: 'Product Removed',
  properties: {
    cart_id: 'ksjdj92dj29dj92d2j',
    product_id: '507f1f77bcf86cd799439011',
    sku: 'G-32',
    category: 'Games',
    name: 'Monopoly: 3rd Edition',
    brand: 'Hasbro',
    variant: '200 pieces',
    price: 18.99,
    quantity: 1,
    coupon: 'MAYDEALS',
    position: 3,
    url: 'https://www.example.com/product/path',
    image_url: 'https://www.example.com/product/path.jpg'
  }
};

ecommerceEvents.cartViewed = {
  eventName: 'Cart Viewed',
  properties: {
    cart_id: 'd92jd29jd92jd29j92d92jd',
    products: [
      {
        product_id: '507f1f77bcf86cd799439011',
        sku: '45790-32',
        name: 'Monopoly: 3rd Edition',
        price: 19,
        position: 1,
        category: 'Games',
        url: 'https://www.example.com/product/path',
        image_url: 'https://www.example.com/product/path.jpg'
      },
      {
        product_id: '505bd76785ebb509fc183733',
        sku: '46493-32',
        name: 'Uno Card Game',
        price: 3,
        position: 2,
        category: 'Games'
      }
    ]
  }
};

ecommerceEvents.checkoutStarted = {
  eventName: 'Checkout Started',
  properties: {
    order_id: '50314b8e9bcf000000000000',
    affiliation: 'Google Store',
    value: 30,
    revenue: 25.00,
    shipping: 3,
    tax: 2,
    discount: 2.5,
    coupon: 'hasbros',
    currency: 'USD',
    products: [
      {
        product_id: '507f1f77bcf86cd799439011',
        sku: '45790-32',
        name: 'Monopoly: 3rd Edition',
        price: 19,
        quantity: 1,
        category: 'Games',
        url: 'https://www.example.com/product/path',
        image_url: 'https://www.example.com/product/path.jpg'
      },
      {
        product_id: '505bd76785ebb509fc183733',
        sku: '46493-32',
        name: 'Uno Card Game',
        price: 3,
        quantity: 2,
        category: 'Games'
      }
    ]
  }
};

ecommerceEvents.checkoutStepViewed = {
  eventName: 'Checkout Step Viewed',
  properties: {
    checkout_id: '50314b8e9bcf000000000000',
    step: 2,
    shipping_method: 'Fedex',
    payment_method: 'Visa'
  }
};

ecommerceEvents.checkoutStepCompleted = {
  eventName: 'Checkout Step Completed',
  properties: {
    checkout_id: '50314b8e9bcf000000000000',
    step: 2,
    shipping_method: 'Fedex',
    payment_method: 'Visa'
  }
};

ecommerceEvents.paymentInfoEntered = {
  eventName: 'Payment Info Entered',
  properties: {
    checkout_id: '39f39fj39f3jf93fj9fj39fj3f',
    order_id: 'dkfsjidfjsdifsdfksdjfkdsfjsdfkdsf'
  }
};

ecommerceEvents.orderCompleted = {
  eventName: 'Order Completed',
  properties: {
    checkout_id: 'fksdjfsdjfisjf9sdfjsd9f',
    order_id: '50314b8e9bcf000000000000',
    affiliation: 'Google Store',
    total: 27.50,
    subtotal: 22.50,
    revenue: 25.00,
    shipping: 3,
    tax: 2,
    discount: 2.5,
    coupon: 'hasbros',
    currency: 'USD',
    products: [
      {
        product_id: '507f1f77bcf86cd799439011',
        sku: '45790-32',
        name: 'Monopoly: 3rd Edition',
        price: 19,
        quantity: 1,
        category: 'Games',
        url: 'https://www.example.com/product/path',
        image_url: 'https:///www.example.com/product/path.jpg'
      },
      {
        product_id: '505bd76785ebb509fc183733',
        sku: '46493-32',
        name: 'Uno Card Game',
        price: 3,
        quantity: 2,
        category: 'Games'
      }
    ]
  }
};

ecommerceEvents.orderUpdated = {
  eventName: 'Order Updated',
  properties: {
    order_id: '50314b8e9bcf000000000000',
    affiliation: 'Google Store',
    total: 27.50,
    revenue: 25.00,
    shipping: 3,
    tax: 2,
    discount: 2.5,
    coupon: 'hasbros',
    currency: 'USD',
    products: [
      {
        product_id: '507f1f77bcf86cd799439011',
        sku: '45790-32',
        name: 'Monopoly: 3rd Edition',
        price: 19,
        quantity: 1,
        category: 'Games',
        url: 'https://www.example.com/product/path',
image_url: 'https://www.example.com/product/path.jpg'
      },
      {
        product_id: '505bd76785ebb509fc183733',
        sku: '46493-32',
        name: 'Uno Card Game',
        price: 3,
        quantity: 2,
        category: 'Games'
      }
    ]
  }
};

ecommerceEvents.orderRefunded = {
  eventName: 'Order Refunded',
  properties: {
    order_id: '50314b8e9bcf000000000000',
    total: 30,
    currency: 'USD',
    products: [
      {
        product_id: '507f1f77bcf86cd799439011',
        sku: '45790-32',
        name: 'Monopoly: 3rd Edition',
        price: 19,
        quantity: 1,
        category: 'Games',
        url: 'https://www.example.com/product/path',
        image_url: 'https://www.example.com/product/path.jpg'
      },
      {
        product_id: '505bd76785ebb509fc183733',
        sku: '46493-32',
        name: 'Uno Card Game',
        price: 3,
        quantity: 2,
        category: 'Games'
      }
    ]
  }
};

ecommerceEvents.orderCancelled = {
  eventName: 'Order Cancelled',
  properties: {
    order_id: '50314b8e9bcf000000000000',
    affiliation: 'Google Store',
    total: 30,
    revenue: 25.00,
    shipping: 3,
    tax: 2,
    discount: 2.5,
    coupon: 'hasbros',
    currency: 'USD',
    products: [
      {
        product_id: '507f1f77bcf86cd799439011',
        sku: '45790-32',
        name: 'Monopoly: 3rd Edition',
        price: 19,
        quantity: 1,
        category: 'Games',
        url: 'https://www.example.com/product/path',
        image_url: 'https://www.example.com/product/path.jpg'
      },
      {
        product_id: '505bd76785ebb509fc183733',
        sku: '46493-32',
        name: 'Uno Card Game',
        price: 3,
        quantity: 2,
        category: 'Games'
      }
    ]
  }
};

ecommerceEvents.couponEntered = {
  eventName: 'Coupon Entered',
  properties: {
    order_id: '50314b8e9bcf000000000000',
    cart_id: '923923929jd29jd92dj9j93fj3',
    coupon_id: 'may_deals_2016'
  }
};

ecommerceEvents.couponApplied = {
  eventName: 'Coupon Applied',
  properties: {
    order_id: '50314b8e9bcf000000000000',
    cart_id: '923923929jd29jd92dj9j93fj3',
    coupon_id: 'may_deals_2016',
    coupon_name: 'May Deals 2016',
    discount: 23.32
  }
};

ecommerceEvents.couponDenied = {
  eventName: 'Coupon Denied',
  properties: {
    order_id: '50314b8e9bcf000000000000',
    cart_id: '923923929jd29jd92dj9j93fj3',
    coupon: 'may_deals_2016',
    reason: 'Coupon expired'
  }
};

ecommerceEvents.couponRemoved = {
  eventName: 'Coupon Removed',
  properties: {
    order_id: '50314b8e9bcf000000000000',
    cart_id: '923923929jd29jd92dj9j93fj3',
    coupon_id: 'may_deals_2016',
    coupon_name: 'May Deals 2016',
    discount: 23.32
  }
};

ecommerceEvents.productAddedToWishlist = {
  eventName: 'Product Added to Wishlist',
  properties: {
    wishlist_id: 'skdjsidjsdkdj29j',
    wishlist_name: 'Loved Games',
    product_id: '507f1f77bcf86cd799439011',
    sku: 'G-32',
    category: 'Games',
    name: 'Monopoly: 3rd Edition',
    brand: 'Hasbro',
    variant: '200 pieces',
    price: 18.99,
    quantity: 1,
    coupon: 'MAYDEALS',
    position: 3,
    url: 'https://www.example.com/product/path',
    image_url: 'https://www.example.com/product/path.jpg'
  }
};

ecommerceEvents.productRemovedFromWishlist = {
  eventName: 'Product Removed from Wishlist',
  properties: {
    wishlist_id: 'skdjsidjsdkdj29j',
    wishlist_name: 'Loved Games',
    product_id: '507f1f77bcf86cd799439011',
    sku: 'G-32',
    category: 'Games',
    name: 'Monopoly: 3rd Edition',
    brand: 'Hasbro',
    variant: '200 pieces',
    price: 18.99,
    quantity: 1,
    coupon: 'MAYDEALS',
    position: 3,
    url: 'https://www.example.com/product/path',
    image_url: 'https://www.example.com/product/path.jpg'
  }
};

ecommerceEvents.wishlistProductAddedToCart = {
  eventName: 'Wishlist Product Added to Cart',
  properties: {
    wishlist_id: 'skdjsidjsdkdj29j',
    wishlist_name: 'Loved Games',
    cart_id: '99j2d92j9dj29dj29d2d',
    product_id: '507f1f77bcf86cd799439011',
    sku: 'G-32',
    category: 'Games',
    name: 'Monopoly: 3rd Edition',
    brand: 'Hasbro',
    variant: '200 pieces',
    price: 18.99,
    quantity: 1,
    coupon: 'MAYDEALS',
    position: 3,
    url: 'https://www.example.com/product/path',
    image_url: 'https://www.example.com/product/path.jpg'
  }
};

ecommerceEvents.productShared = {
  eventName: 'Product Shared',
  properties: {
    share_via: 'email',
    share_message: 'Hey, check out this item',
    recipient: 'friend@example.com',
    product_id: '507f1f77bcf86cd799439011',
    sku: 'G-32',
    category: 'Games',
    name: 'Monopoly: 3rd Edition',
    brand: 'Hasbro',
    variant: '200 pieces',
    price: 18.99,
    url: 'https://www.example.com/product/path',
    image_url: 'https://www.example.com/product/path.jpg'
  }
};

ecommerceEvents.cartShared = {
  eventName: 'Cart Shared',
  properties: {
    share_via: 'email',
    share_message: 'Hey, check out this item',
    recipient: 'friend@example.com',
    cart_id: 'd92jd29jd92jd29j92d92jd',
    products: [
      { product_id: '507f1f77bcf86cd799439011' },
      { product_id: '505bd76785ebb509fc183733' }
    ]
  }
};

ecommerceEvents.productReviewed = {
  eventName: 'Product Reviewed',
  properties: {
    product_id: '507f1f77bcf86cd799439011',
    review_id: 'kdfjrj39fj39jf3',
    review_body: 'I love this product',
    rating: '5'
  }
};