'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Classes', [
			{
				startedDate: '2022-07-01',
				role_id: 1,
				teacher_id: 6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				startedDate: '2023-01-01',
				role_id: 2,
				teacher_id: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			}
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Classes', null, {});
	}
};
