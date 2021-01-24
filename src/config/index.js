const dotenv = require('dotenv')
process.env.NODE_ENV = process.env.NODE_ENV || 'developpement'
const envFound = dotenv.config()

if(envFound.error) throw new Error("⚠️  Couldn't find .env file  ⚠️")

module.exports = {
    app: {
      name: process.env.APP_NAME
    },
    port: process.env.PORT,
    mqtt: {
      port: process.env.MQTT_PORT,
    },
    logs: {
      level: process.env.LOG_LEVEL || 'silly'
    },
    api: {
      prefix: '/api'
    },
    mongoose : {
      databaseURL: process.env.MONGODB_URI || 'ngodb+srv://quentin:H0rwh18RcruB8m2m@cluster0.xy51b.mongodb.net/symbiotique?retryWrites=true&w=majority'
    }
  }
