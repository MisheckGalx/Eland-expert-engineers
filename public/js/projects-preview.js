/* ===== PROJECTS PREVIEW (Homepage) — Fast Image Loading ===== */
(function buildProjectsPreview() {
  var mount = document.getElementById('projects-preview-mount');
  if (!mount) return;

  /*
   * Each project has a real slider image baked in as a CSS background.
   * No JS image loading delay — the browser starts fetching these
   * as soon as the stylesheet/preload hints hit (see <head>).
   * The image is a decorative BG; text is always readable on top.
   */
  var projects = [
    {
      img:        'images/slider/slide-02.jpg',
      industry:   'Water &amp; Wastewater',
      title:      'Municipal SCADA Upgrade — Water Treatment Plant',
      metric:     '40%',
      metricDesc: 'reduction in manual operator interventions',
    },
    {
      img:        'images/slider/slide-01.jpg',
      industry:   'Power Generation',
      title:      'Turbine Instrumentation Overhaul — Gas Power Station',
      metric:     '99.7%',
      metricDesc: 'plant availability post-commissioning',
    },
    {
      img:        'images/slider/slide-03.jpg',
      industry:   'Mining',
      title:      'E&amp;I Installation — Minerals Processing Facility',
      metric:     '3 Wks',
      metricDesc: 'ahead of schedule, zero safety incidents',
    },
  ];

  /* ── Card: image as CSS background, text overlaid ── */
  var cards = projects.map(function(p, i) {
    return (
      '<div class="proj-prev-card reveal' + (i > 0 ? ' reveal-delay-' + i : '') + '" ' +
           'style="' +
             'position:relative;overflow:hidden;border-radius:16px;' +
             'min-height:320px;display:flex;flex-direction:column;justify-content:flex-end;' +
             'cursor:pointer;' +
           '" ' +
           'onclick="showPage(\'projects\')">' +

        /* Background image — rendered via CSS background-image, NO <img> tag,
           so there is zero layout shift and no loading= attribute needed.
           The browser can paint the colour instantly then swap in the image. */
        '<div style="' +
          'position:absolute;inset:0;' +
          'background-color:#0b1f3a;' +                          /* placeholder colour shown instantly */
          'background-image:url(\'' + p.img + '\');' +
          'background-size:cover;background-position:center;' +
          'transform:scale(1.0);transition:transform 0.6s ease;' +
        '" class="proj-bg"></div>' +

        /* Dark gradient overlay so text is always readable */
        '<div style="' +
          'position:absolute;inset:0;' +
          'background:linear-gradient(' +
            'to top,' +
            'rgba(0,0,0,0.88) 0%,' +
            'rgba(0,0,0,0.45) 55%,' +
            'rgba(0,0,0,0.15) 100%' +
          ');' +
        '"></div>' +

        /* Content */
        '<div style="position:relative;z-index:1;padding:28px 28px 24px;">' +
          '<div style="' +
            'font-size:10px;font-weight:700;letter-spacing:0.18em;' +
            'text-transform:uppercase;color:#66b2ff;margin-bottom:10px;' +
            'display:flex;align-items:center;gap:8px;' +
          '">' +
            '<span style="display:inline-block;width:18px;height:2px;background:#66b2ff;border-radius:2px;"></span>' +
            p.industry +
          '</div>' +
          '<div style="' +
            'font-family:\'Space Grotesk\',sans-serif;' +
            'font-size:17px;font-weight:700;color:#fff;' +
            'line-height:1.28;letter-spacing:-0.018em;margin-bottom:18px;' +
          '">' + p.title + '</div>' +
          '<div style="' +
            'padding-top:16px;' +
            'border-top:1px solid rgba(255,255,255,0.15);' +
          '">' +
            '<span style="' +
              'font-family:\'Space Grotesk\',sans-serif;' +
              'font-size:2.4rem;font-weight:800;color:#fff;' +
              'letter-spacing:-0.04em;line-height:1;' +
            '">' + p.metric + '</span>' +
            '<p style="' +
              'font-size:12.5px;color:rgba(255,255,255,0.6);' +
              'margin-top:5px;letter-spacing:-0.003em;' +
            '">' + p.metricDesc + '</p>' +
          '</div>' +
        '</div>' +

      '</div>'
    );
  }).join('');

  mount.innerHTML =
    '<section style="padding:80px 5%;">' +
      '<div style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:40px;">' +
        '<div>' +
          '<div class="section-label reveal">Our Work</div>' +
          '<h2 class="section-title reveal reveal-delay-1" style="margin-bottom:0;">' +
            'Engineering Excellence<br>in the Field' +
          '</h2>' +
        '</div>' +
        '<a class="btn-primary reveal reveal-delay-2" onclick="showPage(\'projects\')" style="flex-shrink:0;cursor:pointer;">' +
          'View All Projects' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">' +
            '<line x1="5" y1="12" x2="19" y2="12"/>' +
            '<polyline points="12,5 19,12 12,19"/>' +
          '</svg>' +
        '</a>' +
      '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">' +
        cards +
      '</div>' +
    '</section>';

  /* Hover zoom on the background div */
  mount.querySelectorAll('.proj-prev-card').forEach(function(card) {
    var bg = card.querySelector('.proj-bg');
    card.addEventListener('mouseenter', function() {
      if (bg) bg.style.transform = 'scale(1.06)';
    });
    card.addEventListener('mouseleave', function() {
      if (bg) bg.style.transform = 'scale(1.0)';
    });
  });

  /* Mobile: single column */
  function applyGrid() {
    var grid = mount.querySelector('div[style*="grid-template-columns"]');
    if (!grid) return;
    if (window.innerWidth < 768) {
      grid.style.gridTemplateColumns = '1fr';
    } else if (window.innerWidth < 1100) {
      grid.style.gridTemplateColumns = 'repeat(2,1fr)';
    } else {
      grid.style.gridTemplateColumns = 'repeat(3,1fr)';
    }
  }
  applyGrid();
  window.addEventListener('resize', applyGrid);

  if (typeof initReveal === 'function') initReveal();
})();
