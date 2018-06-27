require('dotenv').config()
const Express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = new Express()

// TODO: import routers

// TODO: app.use Middleware(bodyparser, cors)

// TODO: Create routes

// TODO: Run server

app.listen(process.env.SERVER_PORT, () => {
    let currentTime = new Date(Date.now()).toLocaleTimeString()
    console.log(`${currentTime}: express server listening on port ${process.env.SERVER_PORT}🎀`)
})
    .on('error', (error) => {
        console.log('Your ties undone!')
        console.log(error)
    })

