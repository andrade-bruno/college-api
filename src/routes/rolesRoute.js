const { Router } = require('express')

const RoleController = require('../controllers/RoleController')

const rolesRoute = Router()

rolesRoute
	.get('/roles', RoleController.getAllRoles)
	.get('/roles/:id', RoleController.getRoleById)
	.put('/roles/:id', RoleController.updateRole)
	.post('/roles/', RoleController.createRole)
	.delete('/roles/:id', RoleController.deleteRole)

module.exports = rolesRoute
