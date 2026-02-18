// Accessible mobile navigation toggle
const btn = document.querySelector('.nav-toggle');
const nav = btn ? document.getElementById(btn.getAttribute('aria-controls')) : null;

if (btn && nav) {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });

  // close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      btn.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }
  });

  // close when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      btn.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }
  });
}
