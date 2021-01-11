const axios = require('axios')
require('dotenv').config()


exports.callEtaService = () => {
  return new Promise((resolve, reject) => {
    axios.get(process.env.APP_SERVICE + '/About')
      .then(response => {
        var message = '------------- Etats des micro-services ------------\n'
        message += getInfos(response.data.IHNA_App, 'Application')
        message += getInfos(response.data.IHNA_CalendarService, 'CalendarService')
        message += getInfos(response.data.IHNA_CalendarWorker, 'CalendarWorker')
        message += getInfos(response.data.IHNA_MessengerService, 'MessengerService')
        resolve(message)            
      })
      .catch(error => {
        reject(error)
      })
  })
}

function getInfos(Name, service) {
  var ret = `${Name.working ? '[🟢]' : '[🔴]'} - ${service} v.${Name.version} - Uptime : ${Name.uptime}\n`
  return ret
}