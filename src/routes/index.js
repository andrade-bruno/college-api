const bodyParser = require('body-parser')
const users = require('./usersRoute')
const classes = require('./classesRoute')
const roles = require('./rolesRoute')

module.exports = server => {
	server.use(bodyParser.json())

	server.get('/', (req, res) => {
		res.status(200).send({ message: 'College API' })
	})

	server.use(users, classes, roles)
}