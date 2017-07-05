// Require modules
const express = require('express');

// Configure the application
const app = express();

app.set('view engine', 'pug');

// Root path
app.get('/', (req, res) => {
  res.render('index');
});

// Additional route for displaying cards
app.get('/cards', (req, res) => {
  res.locals.prompt = "Who is buried in Grant's tomb?";
  res.locals.hint = "Think about who's tomb it is.";
  res.render('card');
});

// Route for taking user input to get the user's name
app.get('/hello', (req, res) => {
  res.render('hello');
});

app.post('/hello', (req, res) => {
  res.render('hello');
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
