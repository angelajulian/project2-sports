const { Model, DataTypes } = require("sequelize");
const sequelize = require("..config/connection");

class User extends Model {}

User.init(
  {
    //Table column definitions
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
      validate: {
        isEmail: true,
      },
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // TODO: include password complexity checks later
        len: [6],
      },
    }, //,
    // blocklist: {
    //     type: DataTypes.ARRAY
    //     //validate array of integers
    // }
    //TODO: birthdate and age gating?
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
