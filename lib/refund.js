function refund ({ client, orderId, refundBody }) {
  return client.fetch({
    uri: `/ecomm/v2/payments/${orderId}/refund`,
    body: refundBody
  })
}

module.exports = refund
