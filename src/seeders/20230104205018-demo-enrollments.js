'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Enrollments', [
			{
				student_id: 1,
				status: 'Active',
				class_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				student_id: 4,
				status: 'Active',
				class_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Enrollments', null, {});
	}
};
