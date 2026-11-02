const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

function setMenuOpen(open) {
  nav.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  const icon = menuButton.querySelector('.menu-icon');
  icon.src = open ? 'assets/icons/close.svg' : 'assets/icons/menu.svg';
}

menuButton.addEventListener('click', () => setMenuOpen(!nav.classList.contains('is-open')));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) {
    setMenuOpen(false);
    menuButton.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-row') && nav.classList.contains('is-open')) setMenuOpen(false);
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 600 && nav.classList.contains('is-open')) setMenuOpen(false);
});

const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  status.textContent = 'Demo only — your input was validated. No message was sent or stored.';
  form.reset();
});
form.querySelectorAll('input, textarea').forEach(field => {
  field.addEventListener('input', () => { status.textContent = ''; });
});
