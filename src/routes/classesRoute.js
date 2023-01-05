const { Router } = require('express')

const ClassController = require('../controllers/ClassController')

const classesRoute = Router()

classesRoute
	.get('/classes', ClassController.getAllClasses)
	.get('/classes/:id', ClassController.getClassById)
	.put('/classes/:id', ClassController.updateClass)
	.post('/classes/', ClassController.createClass)
	.delete('/classes/:id', ClassController.deleteClass)

module.exports = classesRoute
