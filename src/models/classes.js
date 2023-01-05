'use strict';
module.exports = (sequelize, DataTypes) => {
	const Classes = sequelize.define('Classes', {
		startedDate: DataTypes.DATEONLY
	}, {});
	Classes.associate = function (models) {
		Classes.hasMany(models.Enrollments, {
			foreignKey: 'class_id'
		})
		Classes.belongsTo(models.Users, {
			foreignKey: 'teacher_id'
		})
		Classes.belongsTo(models.Roles, {
			foreignKey: 'role_id'
		})
	};
	return Classes;
};