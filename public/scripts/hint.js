$('#hintReveal').click(() => {
  $('#hintReveal').hide(200);
  $('#hint').fadeIn(200);
});

$('#hintReveal').hover(() => {
  $('#hintReveal').hide();
  $('#hint').fadeIn();
});
