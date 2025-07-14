import type { Schema, Struct } from '@strapi/strapi';

export interface EcommerceAddress extends Struct.ComponentSchema {
  collectionName: 'components_ecommerce_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    city: Schema.Attribute.String;
    country: Schema.Attribute.String;
    full_name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    pincode: Schema.Attribute.String;
    state: Schema.Attribute.String;
    street: Schema.Attribute.String;
  };
}

export interface EcommerceOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_ecommerce_order_items';
  info: {
    displayName: 'OrderItem';
  };
  attributes: {
    price: Schema.Attribute.Decimal;
    productId: Schema.Attribute.String;
    productName: Schema.Attribute.String;
    quantity: Schema.Attribute.Integer;
    subtotal: Schema.Attribute.Decimal;
  };
}

export interface EcommercePaymentInfo extends Struct.ComponentSchema {
  collectionName: 'components_ecommerce_payment_infos';
  info: {
    displayName: 'PaymentInfo';
  };
  attributes: {
    method: Schema.Attribute.Enumeration<['cod', 'upi', 'card', 'wallet']>;
    paymentstatus: Schema.Attribute.Enumeration<
      ['success', 'pending', 'failed']
    >;
    transactionId: Schema.Attribute.String;
  };
}

export interface EcommerceProductVariant extends Struct.ComponentSchema {
  collectionName: 'components_ecommerce_product_variants';
  info: {
    displayName: 'ProductVariant';
  };
  attributes: {
    Color: Schema.Attribute.Enumeration<['Red', 'Blue']>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PriceAdjustment: Schema.Attribute.Decimal;
    Size: Schema.Attribute.Enumeration<['S', 'M', 'L', 'XL']>;
  };
}

export interface PlatformSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_platform_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ecommerce.address': EcommerceAddress;
      'ecommerce.order-item': EcommerceOrderItem;
      'ecommerce.payment-info': EcommercePaymentInfo;
      'ecommerce.product-variant': EcommerceProductVariant;
      'platform.social-links': PlatformSocialLinks;
    }
  }
}
