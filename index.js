require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const router = require('./app/routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(helmet())

// routes all endpoints
router(app)

app.get('/', (req, res) => res.status(404).send({ message: 'page not found' }))

app.listen(process.env.PORT, () => console.info('Server launched'))
