// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Configure the application
const app = express();

// Middleware for handling parsing
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to use pug templating
app.set('view engine', 'pug');

// Root path
app.get('/', (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.render('index', { name });
  } else {
    res.redirect('/hello');
  }
});

// Additional route for displaying cards
app.get('/cards', (req, res) => {
  res.locals.prompt = "Who is buried in Grant's tomb?";
  res.locals.hint = "Think about who's tomb it is.";
  res.render('card');
});

// Route for taking user input to get the user's name
app.get('/hello', (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
});

// Create name cookie
app.post('/hello', (req, res) => {
  res.cookie('name', req.body.name);
  res.redirect('/');
});

// Delete name cookie
app.post('/logout', (req, res) => {
  res.clearCookie('name');
  res.redirect('/hello');
});

// Any request that does reaches this point will throw a 404 error as it didn't match any of the above routes
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

// Handle and display errors
app.use((err, req, res, next) => {
  res.status(err.status);
  res.render('error', { err });
})

// Listen on port 3000 for development
app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
