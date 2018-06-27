require('dotenv').config()
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
    
    // TODO: Get email, password from req

    // TODO: Check email against User db, 
    // find the associated user

    // TODO: Check the req.password against the
    // User.password. If good, send back the user ID
    // in a nice lil jwt 🎀❤️😄
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: '🎀 🎀 🎀'
    }, process.env.JWT_SECRET);

    res.status(200).json(token)

})

module.exports = router