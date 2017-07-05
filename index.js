// Require modules
const express = require('express');

// Configure the application
const app = express();

// Root path
app.get('/', (req, res) => {
  res.send('<h1>Hello world!</h1>');
});

// Additional route
app.get('/about', (req, res) => {
  res.send('<h1>Learn more about me!</h1>');
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
