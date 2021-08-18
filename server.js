const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require( 'express-handlebars')

const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
<<<<<<< HEAD
=======

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
>>>>>>> main

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at ${PORT}`));
});

// set Handlebars Middleware
app.engine('handlebars', exphbs)
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
  res.render('home');
});