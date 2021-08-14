const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Sport, Game } = require('../../models');

// get all games
router.get('/', (req, res) => {
    console.log('======================');
    Game.findAll({})
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// "localhost:3001/api/post/id/27"

// get games by id
router.get('/id/:id', (req, res) => {
    
    Game.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Create a new game
  router.post('/', (req, res) => {
    
    if (req.session) {
      Game.create({
        title: req.body.title,
        post_content: req.body.post_content,
        user_id: req.session.user_id,
        game_id: req.body.game_id,
        title: req.body.title,
        time_created: req.body.time_created
        
      })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    }
  });

// Update a game
  router.put('/:id', (req, res) => {
    Game.update(
      {
        title: req.body.title,
        post_content: req.body.post_content
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
//   Delete a game by id
  router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Game.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;