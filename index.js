require('dotenv').config()
const Express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// DONE: import routers 

const logger = require('./middleware/logger')
const authRouter = require('./auth/authRouter')
const userRouter = require('./routes/userRouter')
const bowtieRouter = require('./routes/bowtieRouter')
const auth = require('./auth/authMiddleware')

const app = new Express()

// DONE: app.use Middleware(bodyparser, cors)



app.use(bodyParser.json())
app.use(cors())
app.use(logger)

// TODO: Create routes

app.use('/api/auth', authRouter)
app.use('/api/bowtie', auth.tokenHandler, bowtieRouter)


// TODO: Run server

app.listen(process.env.SERVER_PORT, () => {
    let currentTime = new Date(Date.now()).toLocaleTimeString()
    console.log(`🎀 ${currentTime}: express server listening on port ${process.env.SERVER_PORT} 🎀`)
})
    .on('error', (error) => {
        console.log('Your ties undone!')
        console.log(error)
    })

