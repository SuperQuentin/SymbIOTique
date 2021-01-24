const mongoose = require('mongoose')

const Device = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    deviceName: { type: String, default: "SymbIOT_GenDev", required: true },
    description: { type: String, required: false},
    mqttClientId: {type: String, required: true, unique: true},
    salt: { type: String },
    brand: { type: String, required: false, default: 'generic'},
    model: { type: String, required: false, default: 'symb-101'},
  },
  { timestamps: true }
)

module.exports = mongoose.model('Device', Device)