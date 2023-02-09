const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',

  },
  phonenumber: {
    type: Number,
    required: true
  },
  address: {
    city: String,
    street: String,
    houseNumber: Number
  }
})
module.exports = mongoose.model('Student', studentSchema)
 