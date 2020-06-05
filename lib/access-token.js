const fetch = require('cross-fetch')

async function vippsAccessToken ({ client }) {
  try {
    const response = await fetch(`${client.config.baseUrl}/accessToken/get`, {
      method: 'POST',
      headers: {
        client_id: client.config.id,
        client_secret: client.config.secret,
        'Ocp-Apim-Subscription-Key': client.config.subscriptionId
      }
    })
    return response.json()
  } catch (error) {
    return {
      error
    }
  }
}

module.exports = vippsAccessToken
