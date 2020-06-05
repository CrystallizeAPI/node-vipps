function initiatePayment ({ client, order }) {
  return client.fetch({
    uri: '/ecomm/v2/payments',
    body: order
  })
}

module.exports = initiatePayment
