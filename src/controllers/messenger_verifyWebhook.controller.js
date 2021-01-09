exports.verifyWebhook = (req, res) => {
    let VERIFY_TOKEN = 'grbfoncq5643znrnn5463uo9678HGJ09678kbvjkbhv493'

    let mode = req.query['hub.mode']
    let token = req.query['hub.verify_token']
    let challenge = req.query['hub.challenge']

    if (mode && token === VERIFY_TOKEN) {
      res.status(200).send(challenge)
    } else {
        res.sendStatus(403)
      }
  }