const router = require("express").Router();
const sequelize = require("../config/connection");
const { Game, User, Comment, SignUp } = require("../models");

// get all games for homepage
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
    .then((dbGameData) => {
      const games = dbGameData.map((game) => game.get({ plain: true }));

      res.render("homepage", {
        games,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single game
router.get("/game/:id", (req, res) => {
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

      const game = dbGameData.get({ plain: true });

      res.render("single-game", {
        game,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
