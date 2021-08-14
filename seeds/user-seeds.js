// const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    area_code: 95123
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123',
    area_code: 85679
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123',
    area_code: 32847
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123',
    area_code: 28756
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123',
    area_code: 19852
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123',
    area_code: 89472
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123',
    area_code: 12348
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123',
    area_code: 48210
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123',
    area_code: 89074
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123',
    area_code: 85472
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;