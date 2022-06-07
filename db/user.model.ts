import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Family from "./family.model";

@Table
class User extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  firstName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  lastName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  type: string;

  @ForeignKey(() => Family)
  @Column
  familyId: number;

  @BelongsTo(() => Family)
  family: Family;
}

export default User;
