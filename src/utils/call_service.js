const axios = require('axios')
const {AppService} = require('../../../IHNA_Utils/ihna_service')


exports.callEtaService = () => {
    return new Promise((resolve, reject) => {
        axios.get(AppService + '/About')
        .then(response => {
            var message = `Application - v.${response.data.IHNA_App.version} - [🟢] \n` + 
                `CalendarService - v.${response.data.IHNA_CalendarService.version} - ${response.data.IHNA_CalendarService.working ? "[🟢]" : "[🔴]"}\n` +
                `CalendarWorker - v.${response.data.IHNA_CalendarWorker.version} - ${response.data.IHNA_CalendarWorker.working ? "[🟢]" : "[🔴]"}\n` +
                `MessengerService - v.${response.data.IHNA_MessengerService.version} - ${response.data.IHNA_MessengerService.working ? "[🟢]" : "[🔴]"}\n`
            resolve(message)            
        })
        .catch(error => {
            reject(error)
        })
    })
}