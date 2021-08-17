const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const exphbs = require( 'express-handlebars')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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