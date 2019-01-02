// REQUIRES
const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

// DATABASE
const db = require('./models');

// CONSTANTS
const PORT = 3000;

// SETTINGS
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(layouts);
app.use(express.static(__dirname + '/static'));

// ROUTES
app.get('/', (req, res) => {
  res.render('home');
});


// CONTROLLERS
app.use('/auth', require('./controllers/auth'));


// LISTEN
app.listen(PORT);
