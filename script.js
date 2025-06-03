document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const bg   = document.querySelector('.page-bg');

  // Выбор фона по классу страницы
  if (body.classList.contains('page-ps3')) {
    bg.style.backgroundImage = "url('images/3.png')";
    bg.style.display = 'block';
  } else if (body.classList.contains('page-ps4')) {
    bg.style.backgroundImage = "url('images/4.png')";
    bg.style.display = 'block';
  } else if (body.classList.contains('page-ps5')) {
    bg.style.backgroundImage = "url('images/5.png')";
    bg.style.display = 'block';
  }

  // Активный пункт меню
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });
});
