const { Router } = require('express')

const ClassController = require('../controllers/ClassController')

const router = Router()

router.get('/classes', ClassController.getAllClasses)
router.get('/classes/:id', ClassController.getClassById)
router.put('/classes/:id', ClassController.updateClass)
router.post('/classes/', ClassController.createClass)
router.delete('/classes/:id', ClassController.deleteClass)

module.exports = router
