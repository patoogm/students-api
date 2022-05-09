const { Schema, model } = require('mongoose')

const student = new Schema({
  nameStudent: String,
  age: Number,
  university: String,
  note: [{
    courseName: String,
    value: Number    
  }] 
})

module.exports = model('Student', student)