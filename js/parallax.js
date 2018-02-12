// JavaScript Document

$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop()


  $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.002)+'em');


  $('.parallax--box').css('top', 0 + (wScroll*.001)+'em')

}