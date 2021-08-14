const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Sport, Game } = require('../../models');

// get all posts
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      // attributes: [
      //   'id',
      //   'post_content',
      //   'title',
      //   'created_at',
      // ],
      // include: [
      //   {
      //       model: User,
      //       attributes: ['username']
      //   },
      //   {
      //     model: User,
      //     attributes: ['username']
      //   }
      // ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// "localhost:3001/api/post/id/27"

// get posts by id
router.get('/id/:id', (req, res) => {
    
    Post.findOne({
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

// "localhost:3001/api/post/user/7"

// get post by id
router.get('/user/:user_id', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.params.user_id
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

  router.post('/', (req, res) => {
    
    if (req.session) {
      Post.create({
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

  router.put('/:id', (req, res) => {
    Post.update(
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
  
  router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Post.destroy({
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