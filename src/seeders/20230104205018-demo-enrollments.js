'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Enrollments', [
			{
				status: 'Active',
				student_id: 1,
				class_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				status: 'Active',
				student_id: 4,
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
