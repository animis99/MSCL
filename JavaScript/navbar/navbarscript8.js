(function($){
  'use strict';
  
  $(document).ready(function(){
    // DropDown menu on mobile devices
    $('#mobile-menu__opener').on('click touchstart', function(e){
      e.preventDefault();
      
      if (!$('#menu').hasClass('menu_slide_up')) {
        $('#menu').addClass('menu_slide_up');
      } 
      
      $('#menu').toggleClass('menu_slide_down');
      $(this).toggleClass('mobile-menu__opener_menu_open');
    });
    
    // For resize window on desktop devices
    $(window).resize(function() {
      if ($(window).width() > 768) {
        if ($('#menu').hasClass('menu_slide_up')) {
          $('#menu').removeClass('menu_slide_up');
        } 
        
        if ($('#menu').hasClass('menu_slide_down')) {
          $('#menu').removeClass('menu_slide_down');
          $('#mobile-menu__opener').removeClass('mobile-menu__opener_menu_open');
        } 
      }
    });
  });
  
})(jQuery);