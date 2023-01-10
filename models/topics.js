'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Topics.init({
    heading: DataTypes.STRING,
    paragraph: DataTypes.ARRAY(DataTypes.STRING),
    illustration: DataTypes.STRING,
    video: DataTypes.STRING,
    reference: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Topics',
  });
  return Topics;
};