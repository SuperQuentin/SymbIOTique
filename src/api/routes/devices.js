const Router = require('express').Router

const routes = Router()

routes.get('/', (req, res) => {
    res.status(200).json('you are number one')
})

module.exports = routes