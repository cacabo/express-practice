// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Configure the application
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');

app.use((req, res, next) => {
  console.log('Hello');
  const err = new Error('Oh no!');
  next(err);
});

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

app.post('/hello', (req, res) => {
  res.cookie('name', req.body.name);
  res.redirect('/');
});

app.post('/logout', (req, res) => {
  res.clearCookie('name');
  res.redirect('/hello');
});

app.use((err, req, res, next) => {
  res.render('error', { err });
})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
