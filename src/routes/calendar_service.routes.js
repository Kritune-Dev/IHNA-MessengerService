const express = require('express')
const messengerController = require('../controllers/messenger_service.controller')
const router = express.Router()

router.get('/', messengerController.getInformation)

module.exports = router