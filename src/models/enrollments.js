'use strict';
module.exports = (sequelize, DataTypes) => {
	const Enrollments = sequelize.define('Enrollments', {
		status: DataTypes.STRING
	}, {});
	Enrollments.associate = function (models) {
		Enrollments.belongsTo(models.Users, {
			foreignkey: 'teacher_id'
		})
		Enrollments.belongsTo(models.Classes, {
			foreignkey: 'class_id'
		})
	};
	return Enrollments;
};