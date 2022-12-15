// 

import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, Default } from 'sequelize-typescript';
import {sequelize} from "../Database";

interface AdminI {
  id: number | null;
   name: string;
   email: string;
   password: string;
   passwordResetToken: string;
   passwordResetExpires: Date;
   active: Boolean;

};

@Table({
   tableName: "Admins",
   timestamps: true
})

export default class Admin extends Model implements AdminI{

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number

    @AllowNull(false)
    @NotEmpty
    @Column
    name!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    email!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    password!: string

    @AllowNull(true)
    @Column
    passwordResetExpires!: Date

    @AllowNull(true)
    @Column
    passwordResetToken!: string

    @AllowNull(false)
    @Default(false)
    @Column
    active!: boolean
}