'use strict';
module.exports = (sequelize, DataTypes) => {
	const Classes = sequelize.define('Classes', {
		startedDate: DataTypes.DATEONLY
	}, {});
	Classes.associate = function (models) {
		Classes.hasMany(models.Enrollments, {
			foreignKey: 'classId'
		})
		Classes.belongsTo(models.Users, {
			foreignKey: 'teacherId'
		})
		Classes.belongsTo(models.Roles, {
			foreignKey: 'role_id'
		})
	};
	return Classes;
};