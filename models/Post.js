const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');
// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  post_content: {
    type: DataTypes.STRING,
    allowNull: false,
    // validate: {
    //   isURL: true
    // }
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  game_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'game',
      key: 'id'
    }
  },

time_created: {
  type: DataTypes.DATE,
  allowNull: false,
  validate: {
    
  }
},
}, 
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'post'
});

module.exports = Post;


// var Person = sequelize.define('Person', {
//   name: Sequelize.STRING
// });

// var Father = sequelize.define('Father', {

//   age: Sequelize.STRING,
//   //The magic start here
//   personId: {
//     type: Sequelize.INTEGER,
//     references: 'person', // <<< Note, its table's name, not object name
//     referencesKey: 'id' // <<< Note, its a column name
//   }
// });

// Person.hasMany(Father); // Set one to many relationship