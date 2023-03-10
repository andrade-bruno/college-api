'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Enrollments', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			status: {
				type: Sequelize.STRING
			},
			class_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Classes', key: 'id' }
			},
			student_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Users', key: 'id' }
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
		return queryInterface.dropTable('Enrollments');
	}
};