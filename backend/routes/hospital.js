const express = require('express')
const router = express.Router()
const Hospital = require('../models/Hospital')

router.get('/hospitals', (req, res, next) => {
  Hospital.find()
    .then(hospital => res.status(201).json({ hospital }))
    .catch(err => res.status(500).json({ err }))
})

module.exports = router
