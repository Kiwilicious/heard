import { Sequelize } from "sequelize-typescript";
import Budget from "./budget.model";
import Expense from "./expense.model";
import Family from "./family.model";
import User from "./user.model";

export const sequelizeConnection = new Sequelize({
  database: process.env.DATABASE_NAME,
  dialect: "postgres",
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  define: {
    freezeTableName: true,
  },
});

sequelizeConnection.addModels([User, Family, Budget, Expense]);

export const db = {
  Expense: Expense,
  budget: Budget,
  family: Family,
  user: User,
};
