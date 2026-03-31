(function buildValues() {
  var mount = document.getElementById('values-mount');
  if (!mount) return;
  mount.innerHTML =
    '<section class="values-section">' +
      '<div class="values-layout">' +
        '<div>' +
          '<div class="section-label reveal">Why Eland</div>' +
          '<h2 class="section-title reveal reveal-delay-1">Built on Four<br>Core Pillars</h2>' +
          '<p class="section-sub reveal reveal-delay-2" style="margin-top:16px;color:rgba(255,255,255,0.55)">We become your long term engineering partner accountable from concept to handover and beyond.</p>' +
          '<div style="margin-top:32px;" class="reveal reveal-delay-3"><a class="btn-primary" href="javascript:void(0)" onclick="showPage(\'about\')">Our Story &rarr;</a></div>' +
        '</div>' +
        '<div class="values-props reveal">' +
          '<div class="value-prop"><h4>Integrated Solutions</h4><p>End to end EEE delivery design, procurement, installation, commissioning under one roof.</p></div>' +
          '<div class="value-prop"><h4>Cost Efficiency</h4><p>Single source accountability eliminates coordination risk and drives measurable savings.</p></div>' +
          '<div class="value-prop"><h4>Proven Reliability</h4><p>Projects delivered across power, water, and mining with zero quality compromise.</p></div>' +
          '<div class="value-prop"><h4>Technical Expertise</h4><p>Multidisciplinary engineers with deep knowledge across complex EEE systems.</p></div>' +
        '</div>' +
      '</div>' +
    '</section>';
})();

(function buildHomeCta() {
  var mount = document.getElementById('home-cta-mount');
  if (!mount) return;
  mount.innerHTML =
    '<div class="cta-banner" style="background-image:url(\'images/slider/slide-01.jpg\')">' +
      '<h2 class="reveal">Ready to Unify Your<br><span>E&amp;E Strategy?</span></h2>' +
      '<p class="reveal reveal-delay-1">Let\'s build something exceptional together.</p>' +
      '<a class="btn-primary reveal reveal-delay-2" href="javascript:void(0)" onclick="showPage(\'contact\')">Start Your Project &rarr;</a>' +
    '</div>';
})();
