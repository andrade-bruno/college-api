'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Roles', [
			{
				description: 'MBA',
				createdAt: "2022-06-08",
				updatedAt: "2022-08-14"
			},
			{
				description: "Bachelor Degree's",
				createdAt: "2022-02-28",
				updatedAt: "2022-01-17"
			}
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Roles', null, {});
	}
};
