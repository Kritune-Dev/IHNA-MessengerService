const Controller = require('../../src/controllers/messenger_api.controller')
const httpMocks = require('node-mocks-http')

Controller.processMessage = jest.fn()
Controller.sendTextMessage = jest.fn()

let req, res, next

beforeEach(() => {
  req = httpMocks.createRequest()
  res = httpMocks.createResponse()
  next = jest.fn()
  process.env.NODE_ENV = 'test'
})

describe('API Messenger', () => {
  describe('Message Webhook', () => {

    it('Should have a messageWebhook function', () => {
      expect(typeof Controller.messageWebhook).toBe('function')
    })
      
    it('Should return 200 response code', async () => {
      await Controller.messageWebhook(req, res, next)
      
      expect(res.statusCode).toBe(200)
    })
  })

  describe('Process Message', () => {
    it('Should have a processMessage function', () => {
      expect(typeof Controller.processMessage).toBe('function')
    })        
  })
})
