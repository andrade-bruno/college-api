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
			const status = await db.Users.destroy({ where: { id: Number(id) } })

			if (status == 0) res.status(404).json({ message: `User #${id} does'nt exists` })
			else res.status(200).json({ message: 'User deleted sucessfully' })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static getEnrollmentsByStudentId = async (req, res) => {
		const { student_id } = req.params

		try {
			const enrollments = await db.Enrollments.findAll({
				where: { student_id: Number(student_id) }
			})
			res.status(200).json(enrollments)
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static getEnrollmentById = async (req, res) => {
		const { student_id, enrollment_id } = req.params

		try {
			const enrollment = await db.Enrollments.findOne({
				where: {
					id: Number(enrollment_id),
					student_id: Number(student_id)
				}
			})
			res.status(200).json(enrollment)
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static createEnrollment = async (req, res) => {
		const { student_id } = req.params
		const enrollment = { ...req.body, student_id }

		try {
			const newEnrollment = await db.Enrollments.create(enrollment)
			res.status(201).json({ message: 'Enrollment created successfully', enrollment: newEnrollment })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static updateEnrollment = async (req, res) => {
		const { student_id, enrollment_id } = req.params
		const newEnrollment = req.body

		try {
			await db.Enrollments.update(newEnrollment, {
				where: {
					id: Number(enrollment_id),
					student_id: Number(student_id)
				}
			})
			const updatedEnrollment = await db.Enrollments.findOne({ where: { id: Number(enrollment_id) } })
			res.status(200).json({ message: 'Enrollment updated successfully', enrollment: updatedEnrollment })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static deleteEnrollment = async (req, res) => {
		const { student_id, enrollment_id } = req.params

		try {
			const status = await db.Enrollments.destroy({
				where: {
					id: Number(enrollment_id),
					student_id: Number(student_id)
				}
			})
			if (status == 0) res.status(404).json({ message: `Enrollment #${enrollment_id} does'nt exists` })
			else res.status(200).json({ message: 'Enrollment deleted sucessfully' })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}
}

module.exports = UserController