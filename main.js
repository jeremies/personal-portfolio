$(document).ready(function () {

  'use strict';

  $('.scrollable').click(function (event) {
    event.preventDefault();

    // for smooth scrolling
    var top = $(event.target.hash).offset().top - 50;
    var duration = 800;
    $('html, body').animate({
      scrollTop: top
    }, duration);

    // will make menu disappear when a nav link is clicked
    var menuBtn = $('.navbar-toggle');
    if (menuBtn.is(':visible') && !menuBtn.hasClass('collapsed')) {
      menuBtn.trigger('click');
    }
  });

});
