import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Budget from "./budget.model";
import User from "./user.model";

@Table
class Expense extends Model {
  @AllowNull(false)
  @Column(DataType.INTEGER)
  amount: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Budget)
  @Column
  budgetId: number;

  @BelongsTo(() => Budget)
  budget: Budget;
}

export default Expense;
