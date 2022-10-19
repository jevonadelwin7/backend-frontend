var DataTypes = require("sequelize").DataTypes;
var _food = require("./food");
var _listorder = require("./listorder");

function initModels(sequelize) {
  var food = _food(sequelize, DataTypes);
  var listorder = _listorder(sequelize, DataTypes);


  return {
    food,
    listorder,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
