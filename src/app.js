const config = require('./config')
const express = require('express')

const aedes = require('aedes')()
const broker = require('net').createServer(aedes.handle)

async function startServer() {
    const app = express()

    await require('./loaders')(app)

    app.listen(config.port, () => {
        console.log(`💚 ${config.app.name} Express listening on port : http://localhost:${config.port}`)
    })
    .on('error', (err) => {
        console.log(err)
        process.exit(1)
    })

    broker.listen(config.mqtt.port, () => {
        console.log(`💚 ${config.app.name} broker listening on port : mqtt://localhost:${config.mqtt.port}`)
    })
    .on('error', (err) => {
        console.log(err)
        process.exit(1)
    })
}

startServer()