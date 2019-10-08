const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')
const User = require('../models/User')

router.post('/create-contact', (req, res, next) => {
  // console.log('>>>>>>>>>>>>vengo del back', req.body)
  Contact.create({ ...req.body.contact, parent: [req.user.id] })
    .then(contact => res.status(201).json({ contact }))
    .catch(err => res.status(500).json({ err }))
})

router.get('/contacts', (req, res, next) => {
  Contact.find()
    .then(contact => res.status(201).json({ contact }))
    .catch(err => res.status(500).json({ err }))
})

module.exports = router
