# College API

Creating Users model

 npx sequelize-cli model:create --name User --attributes name:string,email:string,active:boolean,role:string

Seeding

	npx sequelize-cli seed:generate --name demo-users
	npx sequelize-cli db:seed:all
