/* ===== PROJECTS PREVIEW (Homepage) ===== */
(function buildProjectsPreview() {
  const mount = document.getElementById('projects-preview-mount');
  if (!mount) return;

  const projects = [
    {
      industry: 'Water & Wastewater',
      title: 'Municipal SCADA Upgrade — Water Treatment Plant',
      metric: '40%', metricDesc: 'reduction in manual operator interventions',
    },
    {
      industry: 'Power Generation',
      title: 'Turbine Instrumentation Overhaul — Gas Power Station',
      metric: '99.7%', metricDesc: 'plant availability post-commissioning',
    },
    {
      industry: 'Mining',
      title: 'E&I Installation — Minerals Processing Facility',
      metric: '3 Wks', metricDesc: 'ahead of schedule, zero safety incidents',
    },
  ];

  const cards = projects.map((p, i) => `
    <div class="industry-card reveal${i>0?' reveal-delay-'+i:''}">
      <div class="section-label" style="margin-bottom:10px;">${p.industry}</div>
      <div class="industry-title">${p.title}</div>
      <div style="margin-top:16px;">
        <span style="font-size:2rem;font-weight:700;color:var(--gold);">${p.metric}</span>
        <p class="industry-desc" style="margin-top:4px;">${p.metricDesc}</p>
      </div>
    </div>`).join('');

  mount.innerHTML = `
    <section class="industries-section">
      <div class="section-label reveal">Our Projects in Action</div>
      <h2 class="section-title reveal reveal-delay-1">Engineering Excellence in the Field</h2>
      <div class="industries-grid">${cards}</div>
      <div style="text-align:center;margin-top:40px;" class="reveal">
        <a class="btn-primary" onclick="showPage('projects')">
          View All Projects
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
        </a>
      </div>
    </section>`;
})();
