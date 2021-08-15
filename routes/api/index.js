const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");
const sportRoutes = require("./sport-routes");
const gameRoutes = require("./game-routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/sports", sportRoutes);
router.use("/games", gameRoutes);

module.exports = router;
