const {
  Game
} = require('../models');

const gamedata = [{
    sport_id: 1,
    user_id: 6,
    date: Date.now(),
    skill_level: 'Beginner',
    equipment_needed: '',
    location: 92123,
    gamers_needed: 6

  },
  {
    sport_id: 5,
    user_id: 6,
    date: Date.now(),
    skill_level: 'Advanced',
    equipment_needed: '',
    location: 92123,
    gamers_needed: 10

  },
  {
    sport_id: 2,
    user_id: 3,
    date: Date.now(),
    skill_level: 'Intermediate',
    equipment_needed: '',
    location: 92123,
    gamers_needed: 2

  },
  {
    sport_id: 2,
    user_id: 3,
    date: Date.now(),
    skill_level: 'Experienced',
    equipment_needed: '',
    location: 92123,
    gamers_needed: 6

  },
  {
    sport_id: 1,
    user_id: 7,
    date: Date.now(),
    skill_level: 'Intermediate',
    equipment_needed: '',
    location: 92123,
    gamers_needed: 12

  },
  {
    sport_id: 6,
    user_id: 1,
    date: Date.now(),
    skill_level: 'Experienced',
    equipment_needed: '',
    location: 92123,
    gamers_needed: 45

  },
  {
    sport_id: 4,
    user_id: 6,
    date: Date.now(),
    skill_level: 'Beginner',
    equipment_needed: '',
    location: 92123,
    gamers_needed: 18

  },
  {
    sport_id: 1,
    user_id: 7,
    date: Date.now(),
    skill_level: 'intermediate',
    equipment_needed: '',
    location: 92123,
    gamers_needed: 9

  },
  {
    sport_id: 3,
    user_id: 6,
    date: Date.now(),
    skill_level: 'Experienced',
    equipment_needed: '',
    location: 92123,
    gamers_needed: 5

  },
  {
    sport_id: 3,
    user_id: 6,
    date: Date.now(),
    skill_level: 'Beginner',
    equipment_needed: '',
    location: 92123,
    gamers_needed: 7

  }
];

const seedGames = () => Game.bulkCreate(gamedata);

module.exports = seedGames;