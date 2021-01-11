const axios = require('axios')
require('dotenv').config()


exports.callEtaService = () => {
  return new Promise((resolve, reject) => {
    axios.get(process.env.APP_SERVICE + '/About')
      .then(response => {
        var message = `Application - v.${response.data.IHNA_App.version} - [🟢] \n`
        message += 'CalendarService' + getInfos(response.data.IHNA_CalendarService)
        message += 'CalendarWorker' + getInfos(response.data.IHNA_CalendarWorker)
        message += 'MessengerService' + getInfos(response.data.IHNA_MessengerService)
        resolve(message)            
      })
      .catch(error => {
        reject(error)
      })
  })
}

function getInfos(Name) {
  return - `v.${Name.version} - ${Name.working ? '[🟢]' : '[🔴]'} - Uptime : ${Name.uptime}\n`
}