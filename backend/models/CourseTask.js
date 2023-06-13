const { Schema, model } = require("mongoose")


const CourseTask = new Schema({
  course_name: { type: String, required: true },
  task_type: { required: true, type: String },
  variant_of_task: { type: String, required: true },
  description: { type: String, required: true },
  right_answer: { type: String }
})


module.exports = model('CourseTask', CourseTask)