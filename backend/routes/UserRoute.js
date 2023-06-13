const {Router} = require('express')
const UserController = require('../controllers/UserController')


const router = Router()

router.post('/auth/registration', UserController.createUser)
router.get('/auth/login', UserController.loginUser)


module.exports = router