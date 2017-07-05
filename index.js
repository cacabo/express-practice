// Require modules
const express = require('express');

// Configure the application
const app = express();

app.set('view engine', 'pug');

// Root path
app.get('/', (req, res) => {
  res.render('index');
});

// Additional route
app.get('/cards', (req, res) => {
  res.locals.prompt = "Who is buried in Grant's tomb?";
  res.locals.hint = "Think about who's tomb it is.";
  res.render('card');
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
