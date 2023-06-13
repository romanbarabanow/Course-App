const UsersCourse = require("../models/UsersCourse")






const startCourse = async (req,res) => {

  const {tittle, user_email} = req.body

  const newCourse = new UsersCourse({
    tittle,
    user_email
  })

  newCourse.save()


  res.json({message: 'Success'}).status(200)
}


const getMyCourse = async (req,res) => {
  const {user_email} = req.body

  const data = await UsersCourse.find({user_email})

  res.json(data).status(200)
}


const completedCourse = async (req,res) => {

  const {id} = req.body

  await UsersCourse.findOneAndUpdate({_id: id},{completed: true})

  res.json({message: 'Success'}).status(200)

}



module.exports = {
  startCourse,
  getMyCourse,
  completedCourse
}