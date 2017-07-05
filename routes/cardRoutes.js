const express = require('express');
const router = express.Router();
const { data } = require('../db/flashcardData.json');
const { cards } = data;

// Routes for displaying cards
router.get('/:id', (req, res) => {
  // Side is either answer or question
  const { side } = req.query;
  const { id } = req.params;
  const text = cards[id][side];
  const { hint } = cards[id];
  const templateData = { id, text };

  if (side === 'question') {
    templateData.hint = hint;
    templateData.sideToShow = 'answer';
  } else {
    templateData.sideToShow = 'question';
  }

  res.render('card', templateData);
});

module.exports = router;
