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

  /* VANILLA JS */

  document.querySelector('.toggle-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    
    const wrapper = document.getElementById('mobile-nav-wrapper');
    const nav = document.getElementById('mobile-nav');
    const body = document.body;

    wrapper.classList.toggle('open');
    nav.classList.toggle('open');
    body.classList.toggle('no-overflow');

    const navItems = nav.querySelectorAll('li');
    
    navItems.forEach((li, i) => {
        setTimeout(() => {
            li.classList.toggle('anim');
        }, i * 100);  // Délai progressif pour chaque élément
    });
});

  
}); /* end of as page load scripts */