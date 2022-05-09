const { Schema, model } = require('mongoose')

const university = new Schema({
  nameUniversity: String,
  region: String 
})

module.exports = model('University', university)