'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {

		return queryInterface.bulkInsert('Users', [
			{
				name: "Job",
				email: "breisin0@taobao.com",
				active: true,
				occupation: "Student",
				createdAt: "2022-06-08",
				updatedAt: "2022-08-14"
			}, {
				name: "Fix San",
				email: "kdebney1@e-recht24.de",
				active: false,
				occupation: "Teacher",
				createdAt: "2022-09-08",
				updatedAt: "2022-10-29"
			}, {
				name: "Tresom",
				email: "egowdridge2@mozilla.com",
				active: true,
				occupation: "Caretaker",
				createdAt: "2022-10-26",
				updatedAt: "2022-12-03"
			}, {
				name: "Sonsing",
				email: "droblett3@technorati.com",
				active: false,
				occupation: "Student",
				createdAt: "2022-03-08",
				updatedAt: "2022-09-05"
			}, {
				name: "Tres-Zap",
				email: "echetwin4@hp.com",
				active: true,
				occupation: "Student",
				createdAt: "2022-05-21",
				updatedAt: "2022-03-02"
			}, {
				name: "Sonair",
				email: "jcustard5@google.co.uk",
				active: false,
				occupation: "Supervisor",
				createdAt: "2022-10-12",
				updatedAt: "2022-01-04"
			}, {
				name: "Veribet",
				email: "wtanner6@princeton.edu",
				active: false,
				occupation: "Manager",
				createdAt: "2022-08-27",
				updatedAt: "2022-07-30"
			}, {
				name: "Zaam-Dox",
				email: "hreeves7@noaa.gov",
				active: true,
				occupation: "Caretaker",
				createdAt: "2022-08-11",
				updatedAt: "2022-03-02"
			}, {
				name: "Daltfresh",
				email: "bbrinson8@imgur.com",
				active: false,
				occupation: "Student",
				createdAt: "2022-06-20",
				updatedAt: "2022-06-11"
			}, {
				name: "Sonsing",
				email: "vcrossfield9@google.fr",
				active: true,
				occupation: "Student",
				createdAt: "2022-11-16",
				updatedAt: "2022-02-13"
			}
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
