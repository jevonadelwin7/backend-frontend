const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "food",
    {
      food_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      food_name: {
        type: DataTypes.STRING(70),
        allowNull: true,
      },
      food_image: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      food_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      food_qty: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: "food",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "food_pkey",
          unique: true,
          fields: [{ name: "food_id" }],
        },
      ],
    }
  );
};
