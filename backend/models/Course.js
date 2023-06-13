const { Schema, model } = require("mongoose")


const Course = new Schema({
  tittle: { type: String, required: true },
  description: { type: String, required: true }
})


module.exports = model('Course', Course)