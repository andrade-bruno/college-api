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

	static getUserById = async (req, res) => {
		const { id } = req.params

		try {
			const user = await db.User.findOne({ where: { id: Number(id) } })
			res.status(200).json(user)
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static createUser = async (req, res) => {
		const user = req.body

		try {
			const newUser = await db.User.create(user)
			res.status(200).json(newUser)
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}
}

module.exports = UserController