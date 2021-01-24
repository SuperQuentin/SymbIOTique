const {Router}  = require('express')
const device = require('./routes/device')
const user = require('./routes/user')

const app = Router()
app.use('/device', device)
app.use('/user', user)

module.exports = app;