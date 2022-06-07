import { ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import User from "./user.model";

@Table
class Family extends Model {
  @HasMany(() => User)
  familyMembers: User[];
}

export default Family;
