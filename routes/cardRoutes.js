const express = require('express');
const router = express.Router();

// Additional route for displaying cards
router.get('/', (req, res) => {
  res.locals.prompt = "Who is buried in Grant's tomb?";
  res.locals.hint = "Think about who's tomb it is.";
  res.render('card');
});

module.exports = router;
