const Student = require('../models/student')

const createStudent = async(req, res) =>{
  const { nameStudent, age, university, note } = req.body
  const newStudent = new Student({
    nameStudent,
    age,
    university,
    note
  })
  await newStudent.save()
  res.json(`Student created successfully`)
  } 

const getStudents = async (req, res) => {
  try {
    const students = await Student.find({})
    const promo = students.filter((note) => note.value > 3)
    const noPromo = students.filter((note) => note.value <= 3)
    res.status(200).json({
      promo,
      noPromo
    })
  }
  catch (error) {
    return res.status(404).json({
      message: "Cannot found any Student"
    })
  }
}

module.exports = { createStudent, getStudents }
