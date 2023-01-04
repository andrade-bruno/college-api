# College API

Creating Users model

	npx sequelize-cli model:create --name User --attributes name:string,email:string,active:boolean,role:string

Migrations

	npx sequelize-cli db:migrate

Reverting the last migration

	npx sequelize-cli db:migrate:undo

Reverting the last migration by executed time

	db:migrate:undo --name [date-hour]-create-[table-name].js

Initialized a seeder

	npx sequelize-cli seed:generate --name demo-users
	
Seeding

	npx sequelize-cli db:seed:all

Reverting last seed

	npx sequelize db:seed:undo

Reverting seed for specific table

	npx sequelize-cli db:seed:undo --seed filename

Reverting all seeds

	npx sequelize-cli db:seed:undo:all