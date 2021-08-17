const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Game, User, Comment, SignUp } = require("../../models");
const withAuth = require("../../utils/auth");

// get all users
router.get("/", (req, res) => {
  console.log("======================");
  Game.findAll({
    attributes: [
      "id",
      "game_locale",
      "title",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM signup WHERE game.id = signup.game_id)"
        ),
        "signup_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "game_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbGameData) => res.json(dbGameData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Game.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "game_locale",
      "title",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM signup WHERE game.id = signup.game_id)"
        ),
        "signup_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "game_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbGameData) => {
      if (!dbGameData) {
        res.status(404).json({ message: "No game found with this id" });
        return;
      }
      res.json(dbGameData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', game_locale: 'https://taskmaster.com/press', user_id: 1}
  Game.create({
    title: req.body.title,
    game_locale: req.body.game_locale,
    user_id: req.session.user_id,
  })
    .then((dbGameData) => res.json(dbGameData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/signup", withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Game.signup(
    { ...req.body, user_id: req.session.user_id },
    { SignUp, Comment, User }
  )
    .then((updatedSignUpData) => res.json(updatedSignUpData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbGameData) => {
      if (!dbGameData) {
        res.status(404).json({ message: "No game found with this id" });
        return;
      }
      res.json(dbGameData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Game.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbGameData) => {
      if (!dbGameData) {
        res.status(404).json({ message: "No game found with this id" });
        return;
      }
      res.json(dbGameData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
