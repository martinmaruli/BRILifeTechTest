'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.data_product, {
        foreignKey: 'product_id',
        targetKey: 'product_id',
        as: 'product'
      })

      this.belongsTo(models.data_user, {
        foreignKey: 'user_id',
        targetKey: 'user_id',
        as: 'user'
      })
    }
  }
  data_transaction.init({
    trans_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    trans_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    user_id: DataTypes.STRING,
    product_id: DataTypes.INTEGER,
    qty_order: DataTypes.INTEGER,
    total_order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'data_transaction',
  });
  return data_transaction;
};