const express = require('express')

const cors = require('cors')

const routes = require('../api')
const config = require('../config')

module.exports = async (app) => {
    app.enable('trust proxy')
    app.use(cors())
    app.use(express.json())
    app.use(config.api.prefix, routes)
    return app
}