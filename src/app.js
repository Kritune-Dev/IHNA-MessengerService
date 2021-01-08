const express = require('express')
const app = express()
const messengerRoutes = require('./routes/messenger_service.routes')

app.use(express.json())

app.use('/api/MessengerService', messengerRoutes)

app.use((error, req, res) => {
    res.status(500).json({message: error.message})
})

module.exports = app