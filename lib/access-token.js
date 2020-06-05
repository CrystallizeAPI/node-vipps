export async function vippsAccessToken (client) {
  try {
    const response = await client.fetch(`${client.baseUrl}/accessToken/get`, {
      method: 'POST',
      headers: {
        client_id: client.id,
        client_secret: client.secret,
        'Ocp-Apim-Subscription-Key': client.subscriptionId
      }
    })

    return response.json()
  } catch (error) {
    return {
      error
    }
  }
}
