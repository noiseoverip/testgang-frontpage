$(document).ready(function () {
   console.log("done");

   $('.carousel').carousel({
      interval: 3500
   });
   // Navigation
   $('ul.nav a').smoothScroll();

   $('.navbar ul li').click(function (e) {
      $('.navbar ul li').removeClass('active');
      $(this).addClass('active');

   });
   console.log("done");

});
