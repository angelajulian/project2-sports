const { Sport } = require('../models');

const sportdata = [
  {
    game_name: 'Baseball'
  },
  {
    game_name: 'Football'
  },
  {
    game_name: 'Basketball'
  },
  {
    game_name: 'Soccer'
  },
  {
    game_name: 'Golf'
  },
  
];

const seedSports = () => Sport.bulkCreate(sportdata);

module.exports = seedSports;