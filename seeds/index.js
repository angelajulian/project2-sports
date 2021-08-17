const seedUsers = require("./user-seeds");
const seedPosts = require("./game-seeds");
const seedComments = require("./comment-seeds");
const seedSignUps = require("./signup-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  await seedPosts();
  console.log("--------------");

  await seedComments();
  console.log("--------------");

  await seedSignUps();
  console.log("--------------");

  process.exit(0);
};

seedAll();
