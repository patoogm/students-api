const University = require('../models/university')

const createUniversity = async(req, res) =>{
  const { nameUniversity, region } = req.body
  const newUniversity = new University({
    nameUniversity,
    region
  })
  await newUniversity.save()
  res.json(`University created successfully`)
  } 

const getUniversity = async (req, res) => {
  try {
    const university = await University.find({})
    res.status(200).json(university)
  }
  catch (error) {
    return res.status(404).json({
      message: "Cannot found any University"
    })
  }
}

module.exports = { createUniversity, getUniversity }
