import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from 'sequelize-typescript';
import {sequelize} from "../Database";

interface CourseI {
  id?: number | null;
  title: string;
  banner: string;
  category: string;
  price: number;
  creator: string;

};

@Table({
   tableName: "Courses",
   timestamps: true
})

export default class User extends Model implements CourseI{

    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @AllowNull(false)
    @NotEmpty
    @Column
    title!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    banner!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    category!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    price!: number

    @AllowNull(false)
    @NotEmpty
    @Column
    creator!: string
}


