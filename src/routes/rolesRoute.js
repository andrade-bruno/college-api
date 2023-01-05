const { Router } = require('express')

const RoleController = require('../controllers/RoleController')

const router = Router()

router.get('/roles', RoleController.getAllRoles)
router.get('/roles/:id', RoleController.getRoleById)
router.put('/roles/:id', RoleController.updateRole)
router.post('/roles/', RoleController.createRole)
router.delete('/roles/:id', RoleController.deleteRole)

module.exports = router
