const express = require('express')
const messengerController = require('../controllers/messenger_service.controller')
const verifyWebhookController = require('../controllers/messenger_verifyWebhook.controller')
const apiController = require('../controllers/messenger_api.controller')
const router = express.Router()

router.get('/', messengerController.getInformation)
router.get('/bot', verifyWebhookController.verifyWebhook)
router.post('/bot', apiController.messageWebhook)

module.exports = router