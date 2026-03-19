/* ===== SMOOTH PAGE TRANSITIONS =====
 * Wraps showPage() with a fade-out → swap → fade-in animation.
 * Degrades gracefully if prefers-reduced-motion is set.
 */

(function initPageTransitions() {

  const DURATION = 220; // ms — fast enough to feel snappy, slow enough to feel smooth
  const reduced  = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Inject transition styles */
  const style = document.createElement('style');
  style.textContent = `
    .page-section {
      transition: opacity ${DURATION}ms ease, transform ${DURATION}ms ease;
    }
    .page-section.page-exit {
      opacity: 0;
      transform: translateY(8px);
      pointer-events: none;
    }
    .page-section.page-enter {
      opacity: 0;
      transform: translateY(-8px);
    }
    .page-section.active {
      opacity: 1;
      transform: translateY(0);
    }
    @media (prefers-reduced-motion: reduce) {
      .page-section { transition: none !important; }
    }
  `;
  document.head.appendChild(style);

  /* Wrap the global showPage function with transitions */
  const _showPage = window.showPage;

  window.showPage = function (page) {
    if (reduced) {
      _showPage && _showPage(page);
      return;
    }

    /* Find current active page */
    const current = document.querySelector('.page-section.active');

    if (!current) {
      _showPage && _showPage(page);
      return;
    }

    /* Get target */
    const target = document.getElementById('page-' + page);
    if (!target || target === current) return;

    /* Fade out current */
    current.classList.add('page-exit');

    setTimeout(() => {
      /* Call original showPage (hides old, shows new) */
      _showPage && _showPage(page);

      /* Remove exit class from old page */
      current.classList.remove('page-exit');

      /* Animate new page in */
      if (target) {
        target.classList.add('page-enter');
        /* Force reflow */
        target.offsetHeight; // eslint-disable-line
        target.classList.remove('page-enter');
      }

      /* Scroll to top */
      window.scrollTo({ top: 0, behavior: 'smooth' });

    }, DURATION);
  };

})();
