//Back to top button
var up = $('#buttonTop');
//aparecer botão depois de descer 150px
$(window).scroll(function() {
  if ($(window).scrollTop() > 150) {
    up.addClass('show');
  } else {
    up.removeClass('show');
  }
});
//função
up.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '700', 'swing');
  return false;
});    