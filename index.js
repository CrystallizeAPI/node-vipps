const fetch = require('cross-fetch')
const initiatePayment = require('./lib/initiate-payment')
const capture = require('./lib/capture')
const getAccessToken = require('./lib/access-token')

const URL_LIVE = 'https://api.vipps.no'
const URL_TEST = 'https://apitest.vipps.no'

module.exports = class VippsClient {
  constructor (config) {
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

  capture ({ orderId, captureBody }) {
    return capture({ client: this, orderId, captureBody })
  }

  getAccessToken () {
    return getAccessToken({ client: this })
  }
}
