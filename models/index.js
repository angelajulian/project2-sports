// import all models
const User = require("./User");
const Post = require("./Post");
const Sport = require("./Sport");
const Game = require("./Game");


 Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
Game.hasMany(Post, {
    foreignKey: 'game_id',
    onDelete: "CASCADE"
});
User.hasMany(Game, {
    foreignKey: 'user_id',
    onDelete: "SET NULL"
});
Sport.hasMany(Game, {
    foreignKey: 'sport_id',
    onDelete: 'CASCADE'
})
module.exports = { User, Post, Sport, Game };
