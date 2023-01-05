'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Classes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			startedDate: {
				type: Sequelize.DATEONLY
			},
			teacher_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Users', key: 'id' }
			},
			role_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Roles', key: 'id' }
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Classes');
	}
};