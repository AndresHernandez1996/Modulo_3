const { Schema, model } = require('mongoose')

const contactSchema = new Schema(
  {
    name: String,
    lastName: String,
    age: Number,
    familyRelationship: {
      type: String,
      enum: ['Mother', 'Father', 'Son', 'Uncle', 'Aunt', 'Cousin', 'Friend']
    },
    phoneNumber: Number,
    imageProfile: {
      type: String,
      default: 'https://res.cloudinary.com/ironhacker/image/upload/v1569943485/eye_qv6bmf.svg'
    },
    parent: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Contact', contactSchema)
