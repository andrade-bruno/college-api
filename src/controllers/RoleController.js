const db = require('../models')

class RoleController {
	static getAllRoles = async (req, res) => {
		try {
			const roles = await db.Roles.findAll()
			res.status(200).json(roles)
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static getRoleById = async (req, res) => {
		const { id } = req.params

		try {
			const role = await db.Roles.findOne({ where: { id: Number(id) } })
			res.status(200).json(role)
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static createRole = async (req, res) => {
		const role = req.body

		try {
			const newRole = await db.Roles.create(role)
			res.status(201).json({ message: 'Role created successfully', role: newRole })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static updateRole = async (req, res) => {
		const { id } = req.params
		const newRole = req.body

		try {
			await db.Roles.update(newRole, { where: { id: Number(id) } })
			const updatedRole = await db.Roles.findOne({ where: { id: Number(id) } })
			res.status(200).json({ message: 'Role updated successfully', role: updatedRole })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static deleteRole = async (req, res) => {
		const { id } = req.params

		try {
			await db.Roles.destroy({ where: { id: Number(id) } })
			res.status(200).json({ message: 'Role deleted sucessfully' })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}
}

module.exports = RoleController