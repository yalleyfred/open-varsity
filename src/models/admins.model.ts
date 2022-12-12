import { Model, Sequelize, DataTypes } from 'sequelize';

export default class AdminModel extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public passwordResetToken!: string;
  public passwordResetExpires!: Date;
  public active!: Boolean;
}

export const AdminMap = (sequelize: Sequelize) => {
  AdminModel.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      passwordResetExpires: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      passwordResetToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "Admin",
      timestamps: true,
    }
  );
  AdminModel.sync();
};