var {VERIFY_TOKEN} = require('../../../IHNA_Utils/ihna_facebook_key')

exports.verifyWebhook = (req, res) => {
    let mode = req.query['hub.mode']
    let token = req.query['hub.verify_token']
    let challenge = req.query['hub.challenge']

    if (mode && token === VERIFY_TOKEN) {
      res.status(200).send(challenge)
    } else {
        res.sendStatus(403)
      }
  }