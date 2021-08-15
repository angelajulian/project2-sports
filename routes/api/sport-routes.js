const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Sport, Game } = require('../../models');

// get all sports
router.get('/', (req, res) => {
    console.log('======================');
    Sport.findAll({})
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// "localhost:3001/api/post/id/27"

// get sport by id
router.get('/:id', (req, res) => {
    
    Sport.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No sport found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// "localhost:3001/api/sport/user/7"

// get sport by id
// router.get('/id', (req, res) => {
//     Sport.findAll({
//         where: {
//             user_id: req.params.user_id
//         }
//     })
//     .then(dbPostData => {
//         if (!dbPostData) {
//           res.status(404).json({ message: 'No sport found with this id' });
//           return;
//         }
//         res.json(dbPostData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

  router.post('/', (req, res) => {
    
    // if (req.session) {
    if (true) { // THIS IS ONLY FOR TESTING!!!
      Sport.create({
        game_name: req.body.game_name,
      })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    }
  });

  router.put('/:id', (req, res) => {
    Sport.update(
      {
        game_name: req.body.game_name,
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No sport found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Sport.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No sport found with this id' });
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