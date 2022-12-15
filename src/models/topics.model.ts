import { isArray } from 'class-validator';
import { DataTypes } from 'sequelize';
import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, IsArray, DataType} from 'sequelize-typescript';
import {sequelize} from "../Database";

interface TopicI {
   id: number | null;
   heading: string;
   paragraph: string[];
   illustration: string;
   video: string;
   reference: string;
   course_id: number | null;
};

@Table({
   tableName: "Topics",
   timestamps: true
})

export default class Topic extends Model implements TopicI{

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number

    @AllowNull(false)
    @NotEmpty
    @Column
    heading!: string

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.ARRAY(DataType.STRING))
    paragraph!: Array<string>

    @AllowNull(false)
    @NotEmpty
    @Column
    illustration!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    video!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    reference!: string

    @AllowNull(true)
    @Column
    course_id: number 
}


// import { Model, Sequelize, DataTypes } from 'sequelize';

// export default class TopicModel extends Model {
//   public id!: number;
//   public heading!: string;
//   public paragragh!: string[];
//   public illustration!: string;
//   public video!: string;
//   public reference!: string;
// }

// export const TopicMap = (sequelize: Sequelize) => {
//   TopicModel.init(
//     {
//       id: {
//         type: DataTypes.BIGINT,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       heading: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       paragragh: {
//         type: DataTypes.ARRAY(DataTypes.STRING),
//         allowNull: false,
//       },
//       illustration: {
//         type: DataTypes.STRING,
//       },
//       video: {
//         type: DataTypes.STRING,
//       },
//       reference: {
//         type: DataTypes.STRING,
//       }
//     },
//     {
//       sequelize,
//       tableName: "Topics",
//       timestamps: true,
//     }
//   );
//   TopicModel.sync();
// };