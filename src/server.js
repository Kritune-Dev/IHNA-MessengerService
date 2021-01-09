const app = require('./app')
const http = require('http')
const https = require('https')
var {portMessengerHttp, portMessengerHttps} = require('../../IHNA_Utils/ihna_port')

if(process.env.NODE_ENV === 'production') {
    var {key, cert} = require('../../IHNA_Utils/ihna_pathCredential')
    https.createServer({key: key, cert: cert }, app).listen(portMessengerHttps, () => {console.log("Serveur https ouvert sur le port " + portMessengerHttps)})
}

http.createServer(app).listen(portMessengerHttp, () => {console.log("Serveur https ouvert sur le port " + portMessengerHttp)})
