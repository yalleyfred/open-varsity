// import { User } from '@interfaces/users.interface';
import { Model, Sequelize, DataTypes } from 'sequelize';

export default class userModel extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public passwordResetToken!: string;
  public passwordResetExpires!: Date;
  public active!: Boolean;
}

export const UserMap = (sequelize: Sequelize) => {
  userModel.init(
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
  userModel.sync();
};
// password: password
// const userModel: User[] = [
//   { id: 1, email: 'example1@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
//   { id: 2, email: 'example2@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
//   { id: 3, email: 'example3@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
//   { id: 4, email: 'example4@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
// ];

// export default userModel;
