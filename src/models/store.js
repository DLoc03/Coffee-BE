"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Store.hasOne(models.User,{
        foreignKey:"id",
        as:"userData"
      });
    }
  }
  Store.init(
    {
      name: DataTypes.STRING,
      userID: DataTypes.STRING,
      image: DataTypes.BLOB("long"),
      url: DataTypes.STRING,
      telephone: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Store",
    }
  );
  return Store;
};
