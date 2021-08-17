const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our Game model
class Game extends Model {
  static signup(body, models) {
    return models.SignUp.create({
      user_id: body.user_id,
      game_id: body.game_id,
    }).then(() => {
      return Game.findOne({
        where: {
          id: body.game_id,
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
            model: models.Comment,
            attributes: [
              "id",
              "comment_text",
              "game_id",
              "user_id",
              "created_at",
            ],
            include: {
              model: models.User,
              attributes: ["username"],
            },
          },
        ],
      });
    });
  }
}

// create fields/columns for Game model
Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    game_locale: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "game",
  }
);

module.exports = Game;