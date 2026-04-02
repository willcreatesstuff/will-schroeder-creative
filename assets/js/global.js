// ── CURSOR ──────────────────────────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .case-card').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('expand'); ring.classList.add('expand'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('expand'); ring.classList.remove('expand'); });
});

// ── NAV SCROLL ───────────────────────────────────────────────────────────────
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });
}

// ── SCROLL REVEAL ────────────────────────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-img, .reveal-dream, .reveal-card, .reveal-principle, .modes-word');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => obs.observe(el));
}
initReveal();
