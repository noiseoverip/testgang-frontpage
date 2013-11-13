$(document).ready(function () {   

   $('.carousel').carousel({
      interval: 3500
   });

   $('ul.nav a').smoothScroll({offset: -70});

   $('.navbar ul li').click(function (e) {
      $('.navbar ul li').removeClass('active');
      $(this).addClass('active');

   });   

});
