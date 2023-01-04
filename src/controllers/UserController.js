const db = require('../models')

class UserController {
	static getAllUsers = async (req, res) => {
		try {
			const users = await db.Users.findAll()
			res.status(200).json(users)
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static getUserById = async (req, res) => {
		const { id } = req.params

		try {
			const user = await db.Users.findOne({ where: { id: Number(id) } })
			res.status(200).json(user)
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static createUser = async (req, res) => {
		const user = req.body

		try {
			const newUser = await db.Users.create(user)
			res.status(201).json({ message: 'User created successfully', user: newUser })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static updateUser = async (req, res) => {
		const { id } = req.params
		const newUser = req.body

		try {
			await db.Users.update(newUser, { where: { id: Number(id) } })
			const updatedUser = await db.Users.findOne({ where: { id: Number(id) } })
			res.status(200).json({ message: 'User updated successfully', user: updatedUser })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static deleteUser = async (req, res) => {
		const { id } = req.params

		try {
			await db.Users.destroy({ where: { id: Number(id) } })
			res.status(200).json({ message: 'User deleted sucessfully' })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}
}

module.exports = UserController