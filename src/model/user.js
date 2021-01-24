const mongoose = require('mongoose')


const User = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: false },
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