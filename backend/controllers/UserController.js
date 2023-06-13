const User = require('../models/User')


const createUser = async (req,res) => {
  const {name, email, password} = req.body
  const isExist = await User.findOne({email})
  if(isExist){
    res.json(
      {message: 'Some error'}
    ).status(400)
  } else {
    const user = new User({
      name, password, email
    })
    user.save()
    res.json({
      email, password, name
    }).status(200)
  }
}


const loginUser = async (req,res) => {
  const {password,email} = req.body
  const user = await User.findOne({email, password})
  if(user){
    res.json(user).status(200)
  } else {
    res.json({message: 'Auth Error'}).status(400)
  }
}

module.exports = {
  createUser,
  loginUser
}


