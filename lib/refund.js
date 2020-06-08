function refund ({ client, orderId, body }) {
  return client.fetch({
    uri: `/ecomm/v2/payments/${orderId}/refund`,
    body: body
  })
}

module.exports = refund
