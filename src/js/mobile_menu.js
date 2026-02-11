const menu = document.querySelector('[data-menu]');
const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');

openBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
  document.body.style.overflow = 'hidden'; // блокуємо скрол бекграунда
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
  document.body.style.overflow = '';
});

// Закриття по кліку на лінк
menu.addEventListener('click', e => {
  if (e.target.classList.contains('mobile-nav-link')) {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});

// Закриття по Esc
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});
