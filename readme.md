# Library API

Building an NodeJS server for a college/high school management, using MySQL local instance database

Consumed tools
- Sequelize
- Body Parser
- Express
- Dotenv
- Nodemon

Course: Alura - ORM with NodeJS: API with Sequelize and MySQL

[Certificate](https://cursos.alura.com.br/user/bruno-andrade18/course/orm-nodejs-api-sequelize-mysql/certificate)

Creating models

	npx sequelize-cli model:create --name Users --attributes name:string,email:string,active:boolean,role:string
	npx sequelize-cli model:create --name Roles --attributes description:string
	npx sequelize-cli model:create --name Classes --attributes startedDate:dateonly
	npx sequelize-cli model:create --name Enrollments --attributes status:string

Migrations

	npx sequelize-cli db:migrate

Reverting the last migration

	npx sequelize-cli db:migrate:undo

Reverting the last migration by executed time

	db:migrate:undo --name [date-hour]-create-[table-name].js

Reverting all migrations

	npx sequelize-cli db:migrate:undo:all

Initializing a seeder

	npx sequelize-cli seed:generate --name demo-users
	
Seeding

	npx sequelize-cli db:seed:all

Reverting last seed

	npx sequelize-cli db:seed:undo

Reverting seed for specific table

	npx sequelize-cli db:seed:undo --seed filename

Reverting all seeds

	npx sequelize-cli db:seed:undo:all