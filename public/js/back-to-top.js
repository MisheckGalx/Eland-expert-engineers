/* ===== BACK TO TOP BUTTON ===== */

(function initBackToTop() {

  const btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2.5"
         stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"/>
      <polyline points="5 12 12 5 19 12"/>
    </svg>
  `;

  document.body.appendChild(btn);

  /* Show after scrolling 400px */
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

})();

/* Hide back-to-top on products page */
var _origShowPage = window.showPage;
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('backToTop');
  if (!btn) return;
  var origScroll = window.onscroll;
  window.addEventListener('scroll', function() {
    var onProducts = document.getElementById('page-careers') &&
      document.getElementById('page-careers').classList.contains('active');
    if (onProducts) { btn.style.display = 'none'; return; }
  });
});
