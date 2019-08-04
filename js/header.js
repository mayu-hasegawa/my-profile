$(function() {

  $('.js_headerbtn').on("click", function(){
    if("close" == $(this).attr("data-status")) {
          $(this).attr('data-status', 'open');
    } else {
        $(this).attr('data-status', 'close');
      }

      $(".header_nav a").on("click", function(){
          $('.js_headerbtn').trigger('click');
      });
  });

});
