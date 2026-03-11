document.addEventListener('DOMContentLoaded', () => {
  // 导航栏滚动效果
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-md');
      navbar.classList.remove('bg-light');
      navbar.classList.add('bg-white');
    } else {
      navbar.classList.remove('shadow-md');
      navbar.classList.add('bg-light');
      navbar.classList.remove('bg-white');
    }
  });

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});