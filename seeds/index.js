const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
// const seedGames = require('./game-seeds');
// const seedSports = require('./sport-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  
  await seedSports();
  console.log('--------------');

  // await seedGames();
  // console.log('--------------');

  // await seedPosts();
  // console.log('--------------');

  process.exit(0);
};

seedAll();
