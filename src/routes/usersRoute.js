const { Router } = require('express')

const UserController = require('../controllers/UserController')

const router = Router()

router.get('/users/', UserController.getAllUsers)
router.get('/users/:id', UserController.getUserById)
router.put('/users/:id', UserController.updateUser)
router.post('/users/', UserController.createUser)
router.delete('/users/:id', UserController.deleteUser)

router.get('/users/:student_id/enrollments/', UserController.getEnrollmentsByStudentId)
router.get('/users/:student_id/enrollments/:enrollment_id', UserController.getEnrollmentById)
router.post('/users/:student_id/enrollments/', UserController.createEnrollment)

module.exports = router
