const Course = require("../models/Course")
const CourseTask = require("../models/CourseTask")



const createCourse = async (req,res) => {

  const {tittle, description} = req.body

  const isExist = await Course.findOne({tittle})

  if(isExist==null){
    const newCourse = new Course({
      tittle,
      description
    })

    newCourse.save()


    res.json({message: 'Success'}).status(200)
  } else {
    res.json({message: 'Some error'}).status(400)
  }

}

const createTask = async (req,res) => {

  const {course_name, task_type, variant_of_task, description, right_answer} = req.body



  const isCourseExist = await Course.findOne({tittle: course_name})

  if(isCourseExist==null){
    res.json({message: 'Course not found'}).status(400)
  }

  const newTask = new CourseTask({
    course_name,
    task_type,
    variant_of_task,
    description,
    right_answer
  })

  newTask.save()

  res.json({
    message: 'Success'
  }).status(200)

}


const getAllCourse = async (req,res) => {
  const tasks = await Course.find()

  res.json(tasks).status(200)
}



module.exports = {
  createCourse,
  createTask,
  getAllCourse
}