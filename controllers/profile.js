const express = require('express');
const router = express.Router();
const db = require('../models');

// MIDDLEWARE
const loggedIn = require('../middleware/loggedIn');
const isAdmin = require('../middleware/isAdmin');

// GET /profile -- show user profile
router.get('/', loggedIn, (req, res) => {
  res.render('profile');
});

// GET /profile/admins -- show admin page
router.get('/admins', isAdmin, (req, res) => {
  res.render('admin');
});

module.exports = router;
