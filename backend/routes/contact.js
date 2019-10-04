const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')

router.post('/create-contact', (req, res, next) => {
  Contact.create(req.body)
    .then(contact => res.status(201).json({ contact }))
    .catch(err => res.status(500).json({ err }))
})

router.post('/create-contact', (req, res, next) => {
  Contact.create(req.body)
    .then(contact => res.status(201).json({ contact }))
    .catch(err => res.status(500).json({ err }))
})

module.exports = router
