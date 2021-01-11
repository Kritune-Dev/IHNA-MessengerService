const fetch = require('node-fetch')
const callService = require('../utils/call_service')
var FACEBOOK_ACCESS_TOKEN = process.env.NODE_ENV === 'test' ? 'foo' : require('../../../IHNA_Utils/ihna_facebook_key').FACEBOOK_ACCESS_TOKEN

exports.sendTextMessage = (userId, text) => {
  return fetch(
    `https://graph.facebook.com/v2.6/me/messages?access_token=${FACEBOOK_ACCESS_TOKEN}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        messaging_type: 'RESPONSE',
        recipient: {
          id: userId,
        },
        message: {
          text,
        },
      }),
    }
  )
}

exports.processMessage = async (event) => {
  const userId = event.sender.id
  var message = ''

  switch (event.message.text.toLowerCase()) {
  case 'ping' :
    message = 'Pong 🏓'
    break
  case 'etats micros-services' :
    message = await callService.callEtaService()
    break
  default:
    message = 'Les commandes disponibles sont : \n' 
      + ' - Ping\n'
      + ' - Etats micros-services'
    break
  }

  this.sendTextMessage(userId, message)
}

exports.messageWebhook = (req, res) => {
  if (req.body.object === 'page') {
    req.body.entry.forEach(entry => {
      entry.messaging.forEach(event => {
        if (event.message && event.message.text) {
          this.processMessage(event)                
        }
      })
    })

    res.status(200).end()
  }
}