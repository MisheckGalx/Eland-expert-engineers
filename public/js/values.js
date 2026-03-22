/* ===== VALUES SECTION ===== */
(function buildValues() {
  const mount = document.getElementById('values-mount');
  if (!mount) return;
  mount.innerHTML = `
    <section class="values-section">
      <div class="values-layout">
        <div>
          <div class="section-label reveal">Why Eland</div>
          <h2 class="section-title reveal reveal-delay-1">Built on Four<br>Core Pillars</h2>
          <p class="section-sub reveal reveal-delay-2" style="margin-top:16px;">
            We don't just deliver projects — we become your long-term engineering partner,
            accountable from concept to handover and beyond.
          </p>
          <div style="margin-top:32px;" class="reveal reveal-delay-3">
            <a class="btn-primary" onclick="showPage('about')">
              Our Story
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </a>
          </div>
        </div>
        <div class="values-props reveal">
          <div class="value-prop"><h4>Integrated Solutions</h4><p>End-to-end E&amp;I delivery — design, procurement, installation, commissioning under one roof.</p></div>
          <div class="value-prop"><h4>Cost Efficiency</h4><p>Single-source accountability eliminates coordination risk and drives measurable savings.</p></div>
          <div class="value-prop"><h4>Proven Reliability</h4><p>200+ projects delivered across power, water, and mining with zero quality compromise.</p></div>
          <div class="value-prop"><h4>Technical Expertise</h4><p>Multidisciplinary engineers with deep knowledge across complex E&amp;I systems.</p></div>
        </div>
      </div>
    </section>`;
})();

/* ===== HOME CTA ===== */
(function buildHomeCta() {
  const mount = document.getElementById('home-cta-mount');
  if (!mount) return;
  mount.innerHTML = `
    <div class="cta-banner">
      <h2 class="reveal">Ready to Unify Your<br><span>E&amp;I Strategy?</span></h2>
      <p class="reveal reveal-delay-1">Let's build something exceptional together.</p>
      <a class="btn-primary reveal reveal-delay-2" onclick="showPage('contact')">
        Start Your Project
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
      </a>
    </div>`;
})();
