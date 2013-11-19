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

$('#form-contact').submit(function () { // catch the form's submit event
   $.ajax({ // create an AJAX call...
      data: $(this).serialize(), // get the form data
      type: $(this).attr('method'), // GET or POST
      url: $(this).attr('action'), // the file to call
      success: function (response) { // on success..
         $('#feedback-body').html(response); // update the DIV
      }
   });
   return false; // cancel original event to prevent form submitting
});