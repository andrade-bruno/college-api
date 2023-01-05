const { Router } = require('express')

const UserController = require('../controllers/UserController')

const usersRoute = Router()

usersRoute
	.get('/users/', UserController.getAllUsers)
	.get('/users/:id', UserController.getUserById)
	.put('/users/:id', UserController.updateUser)
	.post('/users/', UserController.createUser)
	.delete('/users/:id', UserController.deleteUser)
	.get('/users/:student_id/enrollments/', UserController.getEnrollmentsByStudentId)
	.get('/users/:student_id/enrollments/:enrollment_id', UserController.getEnrollmentById)
	.post('/users/:student_id/enrollments/', UserController.createEnrollment)
	.put('/users/:student_id/enrollments/:enrollment_id', UserController.updateEnrollment)
	.delete('/users/:student_id/enrollments/:enrollment_id', UserController.deleteEnrollment)

module.exports = usersRoute
