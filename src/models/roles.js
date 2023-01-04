'use strict';
module.exports = (sequelize, DataTypes) => {
	const Roles = sequelize.define('Roles', {
		description: DataTypes.STRING
	}, {});
	Roles.associate = function (models) {
		Roles.hasMany(models.Classes, {
			foreignKey: 'role_id'
		})
	};
	return Roles;
};