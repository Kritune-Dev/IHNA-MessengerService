const app = require('./app')
const http = require('http')
const https = require('https')
const fs = require('fs')
var path = require('path')

const key = fs.readFileSync(path.resolve('/etc/letsencrypt/archive/ihna-service.com/privkey1.pem'))
const cert = fs.readFileSync(path.resolve('/etc/letsencrypt/archive/ihna-service.com/fullchain1.pem'))

http.createServer(app).listen(1905, () => {console.log("Serveur http ouvert sur le port 1905")})
https.createServer({key: key, cert: cert }, app).listen(1906, () => {console.log("Serveur https ouvert sur le port 1906")})