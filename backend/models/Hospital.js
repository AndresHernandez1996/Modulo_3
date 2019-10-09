const { Schema, model } = require('mongoose')

const hospitalSchema = new Schema(
  {
    datasetid: String,
    recordid: String,
    fields: {
      latitud: Number,
      titular: String,
      geopoint: [Number],
      coordenadas: String,
      nombre: String,
      longitud: Number
    },
    geometry: {
      type: { type: String },
      coordinates: [Number]
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Hospital', hospitalSchema)
