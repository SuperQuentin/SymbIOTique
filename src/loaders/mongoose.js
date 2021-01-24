const mongoose =require('mongoose')
const Db = require('mongodb').Db
const config = require('../config')

module.exports = async () => {
    const connection = await mongoose.connect(config.mongoose.databaseURL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
        })

    return connection
}