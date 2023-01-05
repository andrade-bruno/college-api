const db = require('../models')

class ClassController {
	static getAllClasses = async (req, res) => {
		try {
			const classes = await db.Classes.findAll()
			res.status(200).json(classes)
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static getClassById = async (req, res) => {
		const { id } = req.params

		try {
			const classObj = await db.Classes.findOne({ where: { id: Number(id) } })
			res.status(200).json({ class: classObj })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static createClass = async (req, res) => {
		const classObj = req.body

		try {
			const newClass = await db.Classes.create(classObj)
			res.status(201).json({ message: 'Class created successfully', class: newClass })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static updateClass = async (req, res) => {
		const { id } = req.params
		const newClass = req.body

		try {
			await db.Classes.update(newClass, { where: { id: Number(id) } })
			const updatedClass = await db.Classes.findOne({ where: { id: Number(id) } })
			res.status(200).json({ message: 'Class updated successfully', class: updatedClass })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}

	static deleteClass = async (req, res) => {
		const { id } = req.params

		try {
			await db.Classes.destroy({ where: { id: Number(id) } })
			res.status(200).json({ message: 'Class deleted sucessfully' })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	}
}

module.exports = ClassController