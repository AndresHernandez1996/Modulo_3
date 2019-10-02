const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    lastName: String,
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other']
    },
    professionalId: String,
    medicalspeciality: String,
    university: String,
    age: Number,
    phoneNumber: Number,
    email: String,
    imageProfile: {
      type: String,
      default: 'https://res.cloudinary.com/ironhacker/image/upload/v1569942864/medic_wulijh.svg'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)
