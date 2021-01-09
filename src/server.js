const app = require('./app')
const http = require('http')
const https = require('https')
const fs = require('fs')
var path = require('path')

const key = fs.readFileSync(path.resolve('./src/key.pem'))
const cert = fs.readFileSync(path.resolve('./src/cert.pem'))

http.createServer(app).listen(1905)
https.createServer({key: key, cert: cert }, app).listen(1906)