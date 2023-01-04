const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')

const server = express()
server.use(bodyParser.json())

const port = process.env.PORT || 3000

server.get('/test', (req, res) => {
	res.status(200).send({ message: 'College API' })
})

server.listen(port, () => {
	console.info(`Server is running.`)
	console.info(`http://localhost:${port}/`)
})