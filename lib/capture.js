function captureOrder ({ client, orderId, captureBody }) {
  return client.fetch({
    uri: `/ecomm/v2/payments/${orderId}/capture`,
    body: captureBody
  })
}

module.exports = captureOrder
