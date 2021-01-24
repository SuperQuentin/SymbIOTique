const mongoose = require('mongoose')

let randPwd = Math.random().toString(36).slice(-8)

const User = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true },
    password: { type: String, required: true, default: randPwd },
    devices: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Device",
            unique: true
        }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', User)