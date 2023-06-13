const { Schema, model } = require("mongoose")


const UsersCourse = new Schema({
  user_email: { type: String, required: true },
  tittle: { type: String, required: true },
  completed: { type: Boolean, default: false }
})



module.exports = model('UsersCourse', UsersCourse)