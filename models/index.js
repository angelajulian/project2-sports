// import all models
const Post = require("./Post");
const User = require("./User");
const SignUp = require("./SignUp");

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

User.belongsToMany(Post, {
  through: SignUp,
  as: "sign_ups",
  foreignKey: "user_id",
});

Post.belongsToMany(User, {
  through: SignUp,
  as: "sign_ups",
  foreignKey: "post_id",
});

SignUp.belongsTo(User, {
  foreignKey: "user_id",
});

SignUp.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(SignUp, {
  foreignKey: "user_id",
});

Post.hasMany(SignUp, {
  foreignKey: "post_id",
});

module.exports = { User, Post, SignUp };
