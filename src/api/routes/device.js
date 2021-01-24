const Router = require('express').Router
const deviceController = require('../controller/device')

const { celebrate, Joi } = require('celebrate')

const routes = Router()

routes.get('/', (req, res) => {
    deviceController.all(req,res)
})

routes.post('/', celebrate({
    body : Joi.object({
        deviceName: Joi.string().required(),
        mqttClientId: Joi.string().required(),
        description: Joi.string().optional(),
        brand: Joi.string().optional(),
        model: Joi.string().optional(),
        topics: Joi.array().items(Joi.string()).required(),
    })
}),
(req, res) => {
    deviceController.create(req,res)
})

routes.post('/update', celebrate({
    body : Joi.object({
        id: Joi.string().required(),
        deviceName: Joi.string().optional(),
        mqttClientId: Joi.string().optional(),
        description: Joi.string().optional(),
        brand: Joi.string().optional(),
        model: Joi.string().optional(),
        topics: Joi.array().items(Joi.string()).optional(),
    })
}),
(req, res) => {
    deviceController.update(req,res)
})

routes.get('/:id', (req, res) => {
    deviceController.find(req,res)
})

routes.post('/remove',celebrate({
    body : Joi.object({
        id: Joi.string().required()
    })
}),
(req, res) => {
    deviceController.delete(req,res)
})

module.exports = routes