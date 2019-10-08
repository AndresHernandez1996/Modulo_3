const express = require('express')
const router = express.Router()
const Prescription = require('../models/Prescription')

router.post('/create-prescription', (req, res, next) => {
  Prescription.create(req.body)
    .then(prescription => res.status(201).json({ prescription }))
    .catch(err => res.status(500).json({ err }))
})

module.exports = router
