const db = require('../models')

class UserController {
	static getAllUsers = async (req, res) => {
		try {
			const users = await db.User.findAll()
			res.status(200).json(users)
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}
}

module.exports = UserController