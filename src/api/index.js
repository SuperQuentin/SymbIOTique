const {Router}  = require('express')
const devices = require('./routes/devices')

const app = Router()
app.use('/device', devices)

module.exports = app;