const axios = require('axios')

const ihna_AppService = 'http://212.227.203.247:1900/api/App'

exports.callEtaService = () => {
    return new Promise((resolve, reject) => {
        axios.get(ihna_AppService + '/About')
        .then(response => {
            var message = `Application - v.${response.data.IHNA_App.version} - [🟢] \n` + 
                `CalendarService - v.${response.data.IHNA_CalendarService.version} - ${response.data.IHNA_CalendarService.working ? "[🟢]" : "[🔴]"}\n` +
                `CalendarWorker - v.${response.data.IHNA_CalendarWorker.version} - ${response.data.IHNA_CalendarWorker.working ? "[🟢]" : "[🔴]"}\n`
            resolve(message)            
        })
        .catch(error => {
            reject(error)
        })
    })
}