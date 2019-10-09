const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')
const User = require('../models/User')

router.post('/create-contact', (req, res, next) => {
  Contact.create({ ...req.body.contact, parent: [req.user.id] })
    .then(contact => res.status(201).json({ contact }))
    .catch(err => res.status(500).json({ err }))
})

router.get('/contacts', (req, res, next) => {
  Contact.find()
    .then(contact => res.status(201).json({ contact }))
    .catch(err => res.status(500).json({ err }))
})

router.delete('/contacts/:id', (req, res, next) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(contact => res.status(200).json({ contact }))
    .catch(error => res.status(500).json({ error }))
})

router.get('/qrCodeEmergency/:id', (req, res, next) => {
  Contact.find()
    .then(contact => res.status(201).json({ contact }))
    .catch(err => res.status(500).json({ err }))
})

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' })
}

module.exports = router
