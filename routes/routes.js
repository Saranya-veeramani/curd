const express = require('express')
const router = express.Router()
const Student = require('../models/students')

// Getting all
router.get('/', async (req, res) => {
  try {
    const students = await students.find()
    res.json(students)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getStudent, (req, res) => {
  res.json(res.students)
})

// Creating one
router.post('/', async (req, res) => {
  const students = new Student({
    name: req.body.name,
    email: req.body.email,
    phonenumber:req.body.phonenumber,
    address:req.body.address
  })
  try {
    const newStudent = await student.save()
    res.status(201).json(newStudent)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getStudent, async (req, res) => {
  if (req.body.name != null) {
    res.students.name = req.body.name
  }
  if (req.body.email != null) {
    res.students.email = req.body.email
  }
    if (req.body.phonenumber != null) {
        res.students.phonenumber = req.body.phonenumber
      }
      if (req.body.address != null) {
        res.students.address = req.body.address
  }
  try {
    const updatedstudents= await res.students.save()
    res.json(updatedStudents)
  } 
  catch (err) {
    res.status(400).json({ message: err.message })
  }
    })
    

// Deleting One
router.delete('/:id', getStudent, async (req, res) => {
  try {
    await res.student.remove()
    res.json({ message: 'Deleted Student' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getStudent(req, res, next) {
  let student
  try {
    student = await Student.findById(req.params.id)
    if (student == null) {
      return res.status(404).json({ message: 'Cannot find student' })
    }
  } 
  catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.student = student
  next()
}
module.exports = router

