/****************************************************
FUNCTIONS
****************************************************/
  
jQuery(document).ready(function($) {
  
  /* Flickity */
  $('.main-carousel').flickity({
    prevNextButtons: false,
    wrapAround: true
  });
    
  /* MOBILE NAV */
  
  $('.toggle-menu').click (function(){
    $(this).toggleClass('active');
    $('#mobile-nav-wrapper, #mobile-nav').toggleClass('open');
    $("#mobile-nav-wrapper, #mobile-nav li").each(function(i, li) {
        var $list = $(this).closest('ul');
        $list.delay(100).queue(function() {
            $(li).toggleClass('anim fadeInUp');
            $list.dequeue();
        });
      });
    $('body').toggleClass('no-overflow');
  });
  
}); /* end of as page load scripts */