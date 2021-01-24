const {Router}  = require('express')
const device = require('./routes/device')

const app = Router()
app.use('/device', device)

module.exports = app;