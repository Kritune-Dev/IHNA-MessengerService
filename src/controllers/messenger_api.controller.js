const fetch = require('node-fetch')
const callService = require('../utils/call_service')

const FACEBOOK_ACCESS_TOKEN = 'EAAGR4IZAk5bkBAD9fzDm5bGx3E8GyOCNPSRgOFv7hV7ZAQ7unAPN2MfTSDrSCuRVpmKlfWScgcRwll3fNCcsFytEzuXV7cW3VWK0U24JHBbec8pZCC8TMtq9B3Og7a3TGWT6b8BnhITAobZCT1pPxEV9nPtpDV8rt2hLO4hf9h6SXkZBKJLRo3rZBuZAm7UgZBYZD'

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
    var message = ""

    switch (event.message.text.toLowerCase()) {
        case "ping" :
            message = "pong"
            break
        case "etats micros-services" :
            message = await callService.callEtaService()
            break
        default:
            message = "Message reçu : " + event.message.text
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