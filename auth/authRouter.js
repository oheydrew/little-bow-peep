require('dotenv').config()
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
    
    const user = {
        email: 'kenny@loggins.com',
        pw: 'dangerzone'
    }

    // TODO: Get email, password from req
    if(user.email === req.body.email && user.pw === req.body.pw) {
        const token = JWTGen(user.email)
        res.status(200).json(token)
    }  

    // TODO: Check email against User db, 
    // find the associated user


    // TODO: Check the req.password against the
    // User.password. If good, send back the user ID
    // in a nice lil jwt 🎀❤️😄
    function JWTGen(email) {
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: email
        }, process.env.JWT_SECRET);
        return token
    }




})

module.exports = router