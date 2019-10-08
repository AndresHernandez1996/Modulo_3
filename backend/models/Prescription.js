const { Schema, model } = require('mongoose')

const prescriptionSchema = new Schema(
  {
    genericDenomination: String,
    doseAndFrequency: String,
    presentation: String,
    date: Date,
    patientSymptoms: String,
    routeOfAdministration: String,
    duration: String,
    height: Number,
    weight: Number,
    bodyMassIndex: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Prescription', prescriptionSchema)
