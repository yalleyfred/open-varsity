import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from 'sequelize-typescript';
import {sequelize} from "../Database";

interface StudentI {
  id: number | null;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  gender: string;
  dob: string;
  nationality: string;
  highest_qualifications: string;
  phone: string;
  city: string;
  sponsor_name: string;
  sponsor_email: string;
  sponsor_phone: string;

};

@Table({
   tableName: "Students",
   timestamps: true
})

export default class Student extends Model implements StudentI{

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number

    @AllowNull(false)
    @NotEmpty
    @Column
    first_name!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    last_name!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    email!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    password!: string


    @AllowNull(false)
    @NotEmpty
    @Column
    gender!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    dob!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    nationality!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    highest_qualifications!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    phone!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    city!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    sponsor_name!: string

    @AllowNull(true)
    @NotEmpty
    @Column
    sponsor_email!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    sponsor_phone!: string
}

// import { User } from '@interfaces/users.interface';
// import { Model, Sequelize, DataTypes } from 'sequelize';

// export default class StudentModel extends Model {
//   public id!: number;
//   public name!: string;
//   public email!: string;
//   public password!: string;
//   public passwordResetToken!: string;
//   public passwordResetExpires!: Date;
//   public active!: Boolean;
// }

// export const StudentMap = (sequelize: Sequelize) => {
//   StudentModel.init(
//     {
//       id: {
//         type: DataTypes.BIGINT,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       passwordResetExpires: {
//         type: DataTypes.DATE,
//         allowNull: true,
//       },
//       passwordResetToken: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       active: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false,
//       },
//     },
//     {
//       sequelize,
//       tableName: "Students",
//       timestamps: true,
//     }
//   );
//   StudentModel.sync();
// };





// password: password
// const userModel: User[] = [
//   { id: 1, email: 'example1@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
//   { id: 2, email: 'example2@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
//   { id: 3, email: 'example3@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
//   { id: 4, email: 'example4@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
// ];

// export default userModel;
