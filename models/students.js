'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Students.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.STRING,
    nationality: DataTypes.STRING,
    highest_qualifications: DataTypes.STRING,
    phone: DataTypes.STRING,
    city: DataTypes.STRING,
    sponsor_name: DataTypes.STRING,
    sponsor_email: DataTypes.STRING,
    sponsor_phone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Students',
  });
  return Students;
};