import { table } from 'console';
import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from 'sequelize-typescript';
import {sequelize} from "../Database";

interface CourseI {
  id: number | null;
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
    id: number

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


// export const Courses: ModelDefined<CourseAttributes, CourseCreationAttributes> = sequelize.define('Courses', {
//   // Model attributes are defined here
//   id: {
//     type: DataTypes.BIGINT,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   banner: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   category: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   price: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   creators: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   }
// }, {
//   // Other model options go here
// });


// module.exports = Course
// export default class CourseModel extends Model {
//   public id!: number;
//   public title!: string;
//   public banner!: string;
//   public category!: string;
//   public price!: string;
//   public creator!: string;
// }

// export const CourseMap = (sequelize: Sequelize) => {
//   CourseModel.init(
//     {
//       id: {
//         type: DataTypes.BIGINT,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       title: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       banner: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       category: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       price: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       creators: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       }
//     },
//     {
//       sequelize,
//       tableName: "Courses",
//       timestamps: true,
//     }
//   );
//   CourseModel.sync();
// };