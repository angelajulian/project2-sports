const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our Game model
class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // Need to check the date validator is right
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "A date is needed",
        },
        notEmpty: {
          msg: "Please provide a date",
        },
      },
    },

    sport_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "sport",
        key: "id",
      },
    },

    skill_level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    equipments_needed: {
      type: DataTypes.ARRAY,
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    gamers_needed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "game",
  }
);

module.exports = Game;
