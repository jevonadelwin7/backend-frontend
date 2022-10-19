const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('listorder', {
    order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    table_num: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    o_food_name: {
      type: DataTypes.JSON,
      allowNull: true
    },
    o_food_qty: {
      type: DataTypes.JSON,
      allowNull: true
    },
    total_qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'listorder',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "listorder_pkey",
        unique: true,
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
