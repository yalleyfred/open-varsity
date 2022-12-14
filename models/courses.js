'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: DataTypes.STRING,
    image_url: DataTypes.STRING,
    image_id: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    creator: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};