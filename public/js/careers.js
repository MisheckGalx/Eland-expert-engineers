/* ==========================================================
   ELAND EXPERT ENGINEERS — PRODUCTS PAGE
   File: public/js/careers.js  (this module builds the products page)

   WHAT THIS FILE DOES:
   1. Shows a shimmer skeleton instantly while fetching from /api/products
   2. If products exist  → renders them grouped by category
   3. If NO products     → shows a centred empty-state box with 📦 emoji
   4. Always ends with a CTA banner

   EMPTY STATE TRIGGER:
   The empty state fires when:
     - The API returns  { success: true, data: [] }   (DB empty)
     - The API returns  { success: false }             (DB error)
     - The fetch fails entirely                        (server down)
   ========================================================== */

(function buildProducts() {

  var mount = document.getElementById('products-content-mount');
  if (!mount) return;

  /* ── Shimmer keyframe (injected once) ── */
  if (!document.getElementById('shimmer-style')) {
    var styleTag = document.createElement('style');
    styleTag.id  = 'shimmer-style';
    styleTag.textContent =
      '@keyframes shimmer{' +
        '0%  { background-position: 200% 0 }' +
        '100%{ background-position: -200% 0 }' +
      '}';
    document.head.appendChild(styleTag);
  }

  /* ── Helper: one shimmer bar ── */
  function shimBar(w, h, delay) {
    return '<div style="' +
      'height:' + h + 'px;width:' + w + ';border-radius:4px;margin-bottom:10px;' +
      'background:linear-gradient(90deg,' +
        'rgba(0,0,0,0.06) 25%,' +
        'rgba(0,0,0,0.12) 50%,' +
        'rgba(0,0,0,0.06) 75%);' +
      'background-size:200% 100%;' +
      'animation:shimmer 1.4s ' + (delay || '0s') + ' infinite;' +
    '"></div>';
  }

  /* ── Step 1: Paint skeleton immediately (no waiting) ── */
  mount.innerHTML =
    pageHeader() +
    '<section style="padding:48px 5% 80px;">' +
      '<div class="industries-grid">' +
        [1, 2, 3].map(function () {
          return '<div class="industry-card" style="pointer-events:none;opacity:0.7;">' +
            shimBar('45%', 11, '0s') +
            shimBar('75%', 20, '0.05s') +
            shimBar('100%', 12, '0.1s') +
            shimBar('80%',  12, '0.15s') +
            shimBar('55%',  12, '0.2s') +
          '</div>';
        }).join('') +
      '</div>' +
    '</section>';

  /* ── Step 2: Fetch real products ── */
  fetch('/api/products')
    .then(function (r)    { return r.json(); })
    .then(function (json) {
      var products = (json.success && Array.isArray(json.data)) ? json.data : [];
      renderProducts(products);
    })
    .catch(function () {
      /* Server down — show empty state, not a broken page */
      renderProducts([]);
    });

  /* ─────────────────────────────────────────────────
     RENDER FUNCTIONS
  ───────────────────────────────────────────────── */

  function renderProducts(products) {
    var html = pageHeader();

    if (products.length === 0) {
      /* ══ EMPTY STATE ══ */
      html += emptyState();
    } else {
      /* ══ PRODUCT GRID grouped by category ══ */
      var grouped = groupByCategory(products);
      Object.keys(grouped).forEach(function (cat, ci) {
        var altBg = ci % 2 !== 0 ? 'background:#f5f5f7;' : '';
        html +=
          '<section style="padding:60px 5%;' + altBg + '">' +
            '<div class="section-label reveal">' + escHtml(cat) + '</div>' +
            '<h2 class="section-title reveal reveal-delay-1" style="margin-bottom:32px;">' +
              escHtml(cat) + ' Products' +
            '</h2>' +
            '<div class="industries-grid">' +
              grouped[cat].map(productCard).join('') +
            '</div>' +
          '</section>';
      });
    }

    /* CTA banner always shown */
    html += ctaBanner();

    mount.innerHTML = html;
    if (typeof initReveal === 'function') setTimeout(initReveal, 100);
  }

  /* ─────────────────────────────────────────────────
     EMPTY STATE COMPONENT
     A centred card with a dashed border, 📦 icon,
     heading, copy, and a contact CTA.
  ───────────────────────────────────────────────── */
  function emptyState() {
    return (
      '<section style="padding:80px 5%;">' +
        '<div style="' +
          'display:flex;' +
          'justify-content:center;' +
          'align-items:center;' +
        '">' +
          '<div style="' +
            'text-align:center;' +
            'max-width:520px;' +
            'width:100%;' +
            'padding:64px 48px;' +
            'border:2px dashed #d2d2d7;' +
            'border-radius:20px;' +
            'background:#f5f5f7;' +
          '">' +

            /* ── Icon ── */
            '<div style="' +
              'font-size:80px;' +
              'line-height:1;' +
              'margin-bottom:24px;' +
              'display:block;' +
            '">📦</div>' +

            /* ── Heading ── */
            '<h3 style="' +
              'font-family:\'Space Grotesk\',sans-serif;' +
              'font-size:24px;' +
              'font-weight:700;' +
              'color:#1d1d1f;' +
              'letter-spacing:-0.02em;' +
              'margin-bottom:14px;' +
            '">No Equipment Listed Yet</h3>' +

            /* ── Body copy ── */
            '<p style="' +
              'font-size:15px;' +
              'color:#6e6e73;' +
              'line-height:1.7;' +
              'max-width:380px;' +
              'margin:0 auto 32px;' +
            '">' +
              'Our product catalogue is being updated. ' +
              'Contact our team for the latest availability ' +
              'and to request a custom quote for your project.' +
            '</p>' +

            /* ── CTA button ── */
            '<a class="btn-primary" ' +
               'onclick="showPage(\'contact\')" ' +
               'style="display:inline-flex;align-items:center;gap:8px;cursor:pointer;">' +
              'Contact Us for Stock' +
              '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" ' +
                   'stroke="currentColor" stroke-width="2.5">' +
                '<line x1="5" y1="12" x2="19" y2="12"/>' +
                '<polyline points="12,5 19,12 12,19"/>' +
              '</svg>' +
            '</a>' +

          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  /* ─────────────────────────────────────────────────
     PRODUCT CARD
  ───────────────────────────────────────────────── */
  function productCard(p) {
    var imgHtml = p.image_path
      ? '<div style="' +
          'width:calc(100% + 72px);margin:-40px -36px 24px;' +
          'height:190px;overflow:hidden;' +
          'border-radius:14px 14px 0 0;' +
        '">' +
          '<img src="/' + escHtml(p.image_path) + '" ' +
               'alt="' + escHtml(p.name) + '" ' +
               'loading="lazy" ' +
               'style="width:100%;height:100%;object-fit:cover;"/>' +
        '</div>'
      : '';

    return '<div class="industry-card reveal">' +
      imgHtml +
      (p.brand
        ? '<div style="' +
            'font-size:10px;font-weight:700;letter-spacing:0.15em;' +
            'color:#0071e3;text-transform:uppercase;margin-bottom:10px;' +
          '">' + escHtml(p.brand) + '</div>'
        : '') +
      '<div class="industry-title" style="font-size:18px;">' +
        escHtml(p.name) +
      '</div>' +
      '<p class="industry-desc" style="margin-top:8px;">' +
        escHtml(p.description || '') +
      '</p>' +
      '<div style="margin-top:18px;">' +
        '<a class="svc-cta" onclick="showPage(\'contact\')">Request Quote &rarr;</a>' +
      '</div>' +
    '</div>';
  }

  /* ─────────────────────────────────────────────────
     SHARED BLOCKS
  ───────────────────────────────────────────────── */

  function pageHeader() {
    return (
      '<div style="padding:100px 5% 0;">' +
        '<div class="section-label reveal">What We Supply</div>' +
        '<h1 class="section-title reveal reveal-delay-1" style="max-width:640px;">' +
          'Engineering Products<br>&amp; Equipment' +
        '</h1>' +
        '<p class="section-sub reveal reveal-delay-2" ' +
           'style="max-width:580px;margin-bottom:36px;">' +
          'Premium instrumentation, electrical, and automation equipment ' +
          'from the world\'s leading manufacturers — ' +
          'fully supported by our engineering team.' +
        '</p>' +
        '<a class="btn-primary reveal reveal-delay-3" ' +
           'onclick="showPage(\'contact\')" ' +
           'style="display:inline-flex;align-items:center;gap:8px;cursor:pointer;">' +
          'Request a Quote &rarr;' +
        '</a>' +
      '</div>'
    );
  }

  function ctaBanner() {
    return (
      '<div class="cta-banner" ' +
           'style="background-image:url(\'images/slider/slide-03.jpg\')">' +
        '<h2 class="reveal">' +
          'Need a <span>Product Quote?</span>' +
        '</h2>' +
        '<p class="reveal reveal-delay-1">' +
          'Our team will source the right equipment for your ' +
          'specific application and budget.' +
        '</p>' +
        '<a class="btn-primary reveal reveal-delay-2" ' +
           'onclick="showPage(\'contact\')" ' +
           'style="cursor:pointer;">' +
          'Request a Quote &rarr;' +
        '</a>' +
      '</div>'
    );
  }

  /* ─────────────────────────────────────────────────
     UTILITIES
  ───────────────────────────────────────────────── */

  function groupByCategory(products) {
    return products.reduce(function (acc, p) {
      var cat = p.category || 'Other';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(p);
      return acc;
    }, {});
  }

  /* Prevent XSS from DB content */
  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

})();
