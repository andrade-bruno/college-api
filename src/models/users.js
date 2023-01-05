'use strict';

module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('Users', {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		active: DataTypes.BOOLEAN,
		occupation: DataTypes.STRING
	}, {});
	Users.associate = function (models) {
		Users.hasMany(models.Classes, {
			foreignKey: 'teacher_id'
		})
		Users.hasMany(models.Enrollments, {
			foreignKey: 'student_id'
		})

	};
	return Users;
};