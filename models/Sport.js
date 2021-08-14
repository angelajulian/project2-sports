const {
    Model,
    DataTypes
  } = require('sequelize');
  const sequelize = require('../config/connection');
  // create our Sport model
  class Sport extends Model {}
  
  // create fields/columns for Sport model
  Sport.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    game_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, 
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'sport'
  });
  
  module.exports = Sport;