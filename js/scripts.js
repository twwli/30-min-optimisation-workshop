/****************************************************
FUNCTIONS
****************************************************/
  
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