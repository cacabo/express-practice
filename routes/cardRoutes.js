const express = require('express');
const router = express.Router();
const { data } = require('../db/flashcardData.json');
const { cards } = data;

router.get('/', (req, res) => {
  const id = Math.floor(Math.random() * cards.length);
  res.redirect(`/cards/${id}?side=question`);
});

// Routes for displaying cards
router.get('/:id', (req, res) => {
  // Side is either answer or question
  const { side } = req.query;
  const { id } = req.params;

  // If no side was provided, automatically redirect to the question side of the card
  if (!side) {
    res.redirect(`/cards/${id}?side=question`);
  } else if (side !== 'question' && side !== 'answer') {
    res.redirect(`/cards/${id}?side=question`);
  }

  const text = cards[id][side];
  const { hint } = cards[id];
  const templateData = { id, text };

  if (side === 'question') {
    templateData.hint = hint;
    templateData.sideToShow = 'answer';
  } else {
    templateData.sideToShow = 'question';
  }

  if (id != cards.length - 1) {
    templateData.next = `/cards/${parseInt(id) + 1}?side=question`;
  }

  if (id != 0) {
    templateData.prev = `/cards/${parseInt(id) - 1}?side=question`;
  }

  templateData.name = req.cookies.name;

  res.render('card', templateData);
});

module.exports = router;
