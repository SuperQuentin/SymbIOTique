const config = require('./config')
const express = require('express')

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
}

startServer()