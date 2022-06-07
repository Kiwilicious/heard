import { Sequelize } from "sequelize-typescript";

export const sequelizeConnection = new Sequelize({
  database: process.env.DATABASE_NAME,
  dialect: "postgres",
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  define: {
    freezeTableName: true,
  },
});
