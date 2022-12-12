import { Model, Sequelize, DataTypes } from 'sequelize';

export default class CourseModel extends Model {
  public id?: number;
  public title!: string;
  public topics!: Array<string>;
  public category!: string;
  public price!: string;
  public creators!: Array<string>;
}

export const CourseMap = (sequelize: Sequelize) => {
  CourseModel.init(
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
      tableName: "Users",
      timestamps: true,
    }
  );
  CourseModel.sync();
};