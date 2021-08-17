const router = require("express").Router();
const sequelize = require("../config/connection");
const { Game, User, Comment, SignUp } = require("../models");
const withAuth = require("../utils/auth");

// get all games for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");
  Game.findAll({
    where: {
      user_id: req.session.user_id,
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
      const games = dbGameData.map((game) => game.get({ plain: true }));
      res.render("dashboard", { games, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Game.findByPk(req.params.id, {
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
      if (dbGameData) {
        const game = dbGameData.get({ plain: true });

        res.render("edit-game", {
          game,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
