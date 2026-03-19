/* ===== COOKIE CONSENT BANNER ===== */

(function initCookieBanner() {

  /* Don't show if already answered */
  if (localStorage.getItem('eland_cookie_consent')) return;

  const banner = document.createElement('div');
  banner.id = 'cookieBanner';
  banner.innerHTML = `
    <div class="cookie-text">
      <p>
        <strong>We use cookies</strong> to enhance your experience on our website.
        By continuing to browse, you agree to our use of cookies for analytics
        and performance purposes.
        <a onclick="showCookiePolicy()">Learn more</a>
      </p>
    </div>
    <div class="cookie-actions">
      <button class="cookie-btn-decline" onclick="declineCookies()">Decline</button>
      <button class="cookie-btn-accept" onclick="acceptCookies()">Accept All</button>
    </div>
  `;

  document.body.appendChild(banner);

  /* Slide in after short delay */
  setTimeout(() => banner.classList.add('visible'), 1800);

  /* ── Handlers (global so onclick="" works) ── */
  window.acceptCookies = function () {
    localStorage.setItem('eland_cookie_consent', 'accepted');
    hideBanner();
    /* TODO: initialise analytics (Google Analytics, etc.) here */
  };

  window.declineCookies = function () {
    localStorage.setItem('eland_cookie_consent', 'declined');
    hideBanner();
  };

  window.showCookiePolicy = function () {
    alert(
      'Cookie Policy\n\n' +
      'Eland Expert Engineers uses cookies to:\n' +
      '• Analyse site traffic and usage patterns\n' +
      '• Remember your preferences\n' +
      '• Improve website performance\n\n' +
      'We do not sell your data to third parties.\n' +
      'Contact: admin1@eeesa.co.za'
    );
  };

  function hideBanner() {
    banner.classList.remove('visible');
    banner.addEventListener('transitionend', () => banner.remove(), { once: true });
  }

})();
