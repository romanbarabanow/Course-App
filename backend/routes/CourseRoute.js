const {Router} = require('express')
const CourseController = require('../controllers/CourseController')


const router = Router()



router.get('/course', CourseController.getAllCourse)
router.post('/course', CourseController.createCourse)
router.post('/course/task', CourseController.createTask)



module.exports = router