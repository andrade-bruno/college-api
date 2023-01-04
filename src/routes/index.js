const bodyParser = require('body-parser')
const users = require('./usersRoute')

module.exports = server => {
	server.use(bodyParser.json())

	server.get('/', (req, res) => {
		res.status(200).send({ message: 'College API' })
	})

	server.use(users)
}