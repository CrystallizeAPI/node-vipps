function captureOrder ({ client, orderId, body }) {
  return client.fetch({
    uri: `/ecomm/v2/payments/${orderId}/capture`,
    body: body
  })
}

module.exports = captureOrder
