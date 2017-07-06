// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Configure the application
const app = express();

// Middleware for handling parsing
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Set the view engine to use pug templating
app.set('view engine', 'pug');

const mainRoutes = require('./routes/app');
const cardRoutes = require('./routes/cardRoutes')

app.use(mainRoutes);
app.use('/cards', cardRoutes);

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
// Listen on the environment's port for production
app.listen(process.env.PORT || 3000, () => {
  console.log(`Application is up and running on ${process.env.PORT || 3000}`);
});
