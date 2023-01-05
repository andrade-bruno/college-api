'use strict';
module.exports = (sequelize, DataTypes) => {
	const Enrollments = sequelize.define('Enrollments', {
		status: DataTypes.STRING
	}, {});
	Enrollments.associate = function (models) {
		Enrollments.belongsTo(models.Classes, {
			foreignKey: 'class_id'
		})
		Enrollments.belongsTo(models.Users, {
			foreignKey: 'student_id'
		})
	};
	return Enrollments;
};