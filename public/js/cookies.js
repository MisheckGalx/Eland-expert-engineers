(function initCookieBanner() {
  if (localStorage.getItem('eland_cookie_consent')) return;

  var banner = document.createElement('div');
  banner.id = 'cookieBanner';
  banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9999;background:#080d16;border-top:1px solid rgba(255,255,255,0.08);padding:20px 5%;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;box-shadow:0 -8px 40px rgba(0,0,0,0.4);transform:translateY(100%);transition:transform 0.5s ease;';

  banner.innerHTML = '<div style="flex:1;min-width:260px;"><p style="color:rgba(255,255,255,0.65);font-size:13px;line-height:1.65;font-weight:300;"><strong style="color:#fff;">We use cookies</strong> to enhance your experience. By continuing to browse, you agree to our use of cookies for analytics and performance purposes.</p></div><div style="display:flex;align-items:center;gap:12px;flex-shrink:0;"><button id="cookieDecline" style="background:transparent;color:rgba(255,255,255,0.45);border:1px solid rgba(255,255,255,0.12);padding:11px 20px;font-family:inherit;font-size:13px;font-weight:500;border-radius:2px;cursor:pointer;">Decline</button><button id="cookieAccept" style="background:#f4640a;color:#fff;border:none;padding:11px 24px;font-family:inherit;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;border-radius:2px;cursor:pointer;">Accept All</button></div>';

  document.body.appendChild(banner);

  setTimeout(function() {
    banner.style.transform = 'translateY(0)';
  }, 1800);

  document.getElementById('cookieAccept').addEventListener('click', function() {
    localStorage.setItem('eland_cookie_consent', 'accepted');
    banner.style.transform = 'translateY(100%)';
    setTimeout(function() { banner.remove(); }, 500);
  });

  document.getElementById('cookieDecline').addEventListener('click', function() {
    localStorage.setItem('eland_cookie_consent', 'declined');
    banner.style.transform = 'translateY(100%)';
    setTimeout(function() { banner.remove(); }, 500);
  });
})();
