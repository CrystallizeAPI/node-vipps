const fetch = require('cross-fetch')
const ow = require('ow')
const initiatePayment = require('./lib/initiate-payment')
const capture = require('./lib/capture')
const refund = require('./lib/refund')
const getAccessToken = require('./lib/access-token')
const getOrderDetails = require('./lib/order-details')

const URL_LIVE = 'https://api.vipps.no'
const URL_TEST = 'https://apitest.vipps.no'

module.exports = class VippsClient {
  constructor (config) {
    ow(config.id, ow.string)
    ow(config.secret, ow.string)
    ow(config.subscriptionId, ow.string)

    this.config = {
      ...config,
      baseUrl: config.testDrive ? URL_TEST : URL_LIVE
    }
  }

  async fetch ({ uri, body, method = 'POST' }) {
    const { access_token } = await this.getAccessToken()

    try {
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': this.config.subscriptionId,
          Authorization: `Bearer ${access_token}`
        },
        method,
        body: JSON.stringify(body)
      }

      const response = await fetch(`${this.config.baseUrl}${uri}`, options)

      return response.json()
    } catch (error) {
      return {
        error
      }
    }
  }

  initiatePayment ({ order }) {
    return initiatePayment({ client: this, order })
  }

  capture ({ orderId, body }) {
    return capture({ client: this, orderId, body })
  }

  refund ({ orderId, body }) {
    return refund({ client: this, orderId, body })
  }

  getAccessToken () {
    return getAccessToken({ client: this })
  }

  getOrderDetails ({ orderId }) {
    return getOrderDetails({ client: this, orderId })
  }
}
