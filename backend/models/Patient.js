const { Schema, model } = require('mongoose')

const patientSchema = new Schema(
  {
    name: String,
    lastName: String,
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other']
    },
    age: Number,
    bloodType: String,
    phoneNumber: Number,
    email: String,
    imageProfile: {
      type: String,
      default: 'https://res.cloudinary.com/ironhacker/image/upload/v1569943123/heart_oqfzxu.svg'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Patient', patientSchema)
