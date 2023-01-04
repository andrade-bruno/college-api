# College API

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

Initializing a seeder

	npx sequelize-cli seed:generate --name demo-users
	
Seeding

	npx sequelize-cli db:seed:all

Reverting last seed

	npx sequelize db:seed:undo

Reverting seed for specific table

	npx sequelize-cli db:seed:undo --seed filename

Reverting all seeds

	npx sequelize-cli db:seed:undo:all