var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar-wrapper');
  var currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // Aşağı kaydırılıyor
    if (currentScroll > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  } else {
    // Yukarı kaydırılıyor
    navbar.classList.remove('scrolled');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Yukarı kaydırma işlemi sıfıra eşitleniyor
});
