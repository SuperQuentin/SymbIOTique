const Router = require('express').Router
const userController = require('../controller/user')

const { celebrate, Joi } = require('celebrate')

const routes = Router()

routes.get('/', (req, res) => {
    userController.all(req,res)
})

routes.post('/', celebrate({
    body : Joi.object({
        username: Joi.string().required(),
        password: Joi.string().optional()
    })
}),
(req,res) => {
    userController.create(req,res)
})

routes.post('/update', celebrate({
    body : Joi.object({
        id: Joi.string().required(),
        username: Joi.string().optional(),
        password: Joi.string().optional(),
    })
}),
(req, res) => {
    userController.update(req,res)
})

routes.get('/:id', (req, res) => {
    userController.find(req,res)
})

routes.post('/remove',celebrate({
    body : Joi.object({
        id: Joi.string().required()
    })
}),
(req, res) => {
    userController.delete(req,res)
})

routes.post('/device',celebrate({
    body : Joi.object({
        id: Joi.string().required(),
        deviceId: Joi.string().required()
    })
}),
(req, res) => {
    userController.addDevice(req,res)
})

routes.delete('/device',celebrate({
    body : Joi.object({
        id: Joi.string().required(),
        deviceId: Joi.string().required()
    })
}),
(req, res) => {
    userController.removeDevice(req,res)
})

module.exports = routes