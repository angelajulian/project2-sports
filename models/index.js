// import all models
const Game = require("./Game");
const User = require("./User");
const SignUp = require("./SignUp");
const Comment = require("./Comment");

// create associations
User.hasMany(Game, {
  foreignKey: "user_id",
});

Game.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.belongsToMany(Game, {
  through: SignUp,
  as: "signupd_games",

  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Game.belongsToMany(User, {
  through: SignUp,
  as: "signupd_games",
  foreignKey: "game_id",
  onDelete: "SET NULL",
});

SignUp.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

SignUp.belongsTo(Game, {
  foreignKey: "game_id",
  onDelete: "SET NULL",
});

User.hasMany(SignUp, {
  foreignKey: "user_id",
});

Game.hasMany(SignUp, {
  foreignKey: "game_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Game, {
  foreignKey: "game_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Game.hasMany(Comment, {
  foreignKey: "game_id",
});

module.exports = { User, Game, SignUp, Comment };
