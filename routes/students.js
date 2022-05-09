const { Router } = require('express')
const route = Router()
const { createStudent, getStudents } = require('../controllers/student')

route
  .get('/',
    getStudents
  )

route
  .post('/',
    createStudent
  )

module.exports = route
