/* ===== INDUSTRIES SECTION — clean, no emojis ===== */
(function buildIndustries() {
  var mount = document.getElementById('industries-mount');
  if (!mount) return;

  var industries = [
    {
      icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
      title: 'Power Generation',
      desc: 'Instrumentation and control systems for coal, gas, and renewable energy facilities. We keep power flowing reliably at scale.',
    },
    {
      icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 6v6l4 2"/><path d="M2 12h4M18 12h4M12 2v4M12 18v4"/></svg>',
      title: 'Water &amp; Wastewater',
      desc: 'Water analytics, SCADA integration, and treatment monitoring solutions for municipalities and industrial water management.',
    },
    {
      icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v3M8 12v3M16 12v3"/></svg>',
      title: 'Mining &amp; Heavy Industry',
      desc: 'Robust E&amp;I systems engineered for extreme operating conditions in mining, minerals processing, and heavy industrial environments.',
    },
  ];

  var cards = industries.map(function(ind, i) {
    return '<div class="industry-card reveal' + (i > 0 ? ' reveal-delay-' + i : '') + '">' +
      '<div class="industry-icon">' + ind.icon + '</div>' +
      '<div class="industry-title">' + ind.title + '</div>' +
      '<p class="industry-desc">' + ind.desc + '</p>' +
      '</div>';
  }).join('');

  mount.innerHTML =
    '<section class="industries-section">' +
      '<div class="section-label reveal">Industries Served</div>' +
      '<h2 class="section-title reveal reveal-delay-1">Where We Operate</h2>' +
      '<p class="section-sub reveal reveal-delay-2" style="margin-bottom:48px">Trusted across three of South Africa\'s most demanding industrial sectors.</p>' +
      '<div class="industries-grid">' + cards + '</div>' +
    '</section>';

  if (typeof initReveal === 'function') initReveal();
})();
