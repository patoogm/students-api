const { Router } = require('express')
const route = Router()
const { createUniversity, getUniversity } = require('../controllers/university')

route
  .get('/',
    getUniversity
  )

route
  .post('/',
    createUniversity
  )

module.exports = route
