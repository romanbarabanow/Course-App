const express =  require('express')
const mongoose = require('mongoose')
const cors = require('cors')




const UserRoute = require('./routes/UserRoute')
const CourseRoute = require('./routes/CourseRoute')




const app = express()

app.use(express.json())
app.use(cors({ origin: "*" }))


app.use('/api', CourseRoute)
app.use('/api', UserRoute)


mongoose
  .connect("mongodb://localhost:27017/expressmongo", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


app.listen(4000, () => {
  console.log('Server is running')
})