const express = require('express')
const dotenv = require('dotenv').config()
const routes = require('./routes')

const server = express()
const port = process.env.PORT

routes(server)

server.listen(port, () => {
	console.info(`\nServer is running.`)
	console.info(`http://localhost:${port}/\n`)
})

module.exports = server