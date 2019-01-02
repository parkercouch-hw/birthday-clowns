const express = require('express');
const router = express.Router();

// LOGIN - /auth/login
router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', (req, res) => {
  res.send('logging in...');
});

// SIGNUP - /auth/signup
router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res) => {
  res.send('signing up...');
});






module.exports = router;
