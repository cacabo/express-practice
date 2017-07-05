const express = require('express');
const router = express.Router();

// Root path
router.get('/', (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.render('index', { name });
  } else {
    res.redirect('/hello');
  }
});

// Route for taking user input to get the user's name
router.get('/hello', (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
});

// Create name cookie
router.post('/hello', (req, res) => {
  res.cookie('name', req.body.name);
  res.redirect('/');
});

// Delete name cookie
router.post('/logout', (req, res) => {
  res.clearCookie('name');
  res.redirect('/hello');
});

module.exports = router;
