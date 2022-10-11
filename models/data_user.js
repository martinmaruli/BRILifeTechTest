'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  data_user.init({
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    }, 
    user_name: DataTypes.STRING,
    active: DataTypes.BOOLEAN 
  }, {
    sequelize,
    modelName: 'data_user',
  });
  return data_user;
};