# node-vipps

Node Vipps SDK for easy Vipps integration in Node.JS. Generic Vipps Node integration with specific support for the [Crystallize headless ecommerce service](https://crystallize.com/).

Crystallize enables you to build your next-gen e-commerce business by the help of [Fast GraphQL API Service](https://crystallize.com/product/graphql-commerce-api) backed by super structured [Product Information Management (PIM)](https://crystallize.com/product/product-information-management)

## Install

```
yarn add @crystallize/node-vipps
```

## Usage

// Initiate the client<br/>

```
const client = new VippsClient({
+id: "MY_VIPPS_CLIENT_ID",
+secret: "MY_VIPPS_CLIENT_SECRET",
+subscriptionId: "MY_VIPPS_SUB_KEY",
+testDrive: isProd ? false : true
});
```

// Initiate a payment<br/>

```
await client.initiatePayment({order:VippsCheckoutModel});
```

<br/>// Capture a payment<br/>

```
await client.capture({ orderId: VippsOrderId, body: VippsCaptureBodyModel });
```

<br/>// Refund a payment<br/>

```
await client.refund({ orderId: VippsOrderId, body: VippsRefundBodyModel });
```

<br/>// Get order payment details<br/>

```
await client.getOrderDetails({ orderId: VippsOrderId});
```

<br/>// Get an access token<br/>

```
await client.getAccessToken();
```
