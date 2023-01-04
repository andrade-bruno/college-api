'use strict';
module.exports = (sequelize, DataTypes) => {
	const Enrollments = sequelize.define('Enrollments', {
		status: DataTypes.STRING
	}, {});
	Enrollments.associate = function (models) {
		// associations can be defined here
	};
	return Enrollments;
};