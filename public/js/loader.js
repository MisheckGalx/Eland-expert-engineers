/* ===== LOADING SCREEN ===== */

(function initLoader() {

  /* Inject loader HTML before everything else */
  const loader = document.createElement('div');
  loader.id = 'loader';
  loader.innerHTML = `
    <div class="loader-logo">
      <div class="loader-hex">EE</div>
      <div class="loader-brand">
        <span class="name">Eland Expert Engineers</span>
        <span class="sub">E&amp;I Solutions &nbsp;·&nbsp; eeesa.co.za</span>
      </div>
    </div>
    <div class="loader-bar-wrap">
      <div class="loader-bar" id="loaderBar"></div>
    </div>
    <span class="loader-tagline">Engineering Excellence</span>
  `;
  document.body.prepend(loader);

  /* Animate progress bar 0 → 100% in ~1.4s */
  const bar = document.getElementById('loaderBar');
  let progress = 0;
  const steps = [
    { target: 30,  delay: 80  },
    { target: 60,  delay: 200 },
    { target: 85,  delay: 350 },
    { target: 100, delay: 500 },
  ];

  steps.forEach(({ target, delay }) => {
    setTimeout(() => {
      bar.style.width = target + '%';
    }, delay);
  });

  /* Hide loader once page is ready */
  function hideLoader() {
    setTimeout(() => {
      loader.classList.add('hidden');
      /* Remove from DOM after transition ends */
      loader.addEventListener('transitionend', () => {
        loader.remove();
      }, { once: true });
    }, 1100); /* Minimum display time */
  }

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader);
  }

})();
