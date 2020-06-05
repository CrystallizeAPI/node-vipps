export default function capture ({ client, orderId, captureBody }) {
  return client.fetch({
    uri: `/ecomm/v2/payments/${orderId}/capture`,
    body: captureBody
  })
}
