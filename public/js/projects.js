/* ===== PROJECTS PAGE ===== */
(function buildProjects() {
  const mount = document.getElementById('projects-content-mount');
  if (!mount) return;

  const projects = [
    { industry:'Water &amp; Wastewater', title:'Municipal SCADA Upgrade — Water Treatment Plant', desc:'Designed and commissioned a full SCADA replacement for a major municipal water treatment facility, integrating 140+ field instruments with a modern HMI control system.', metric:'40%', metricDesc:'reduction in manual operator interventions' },
    { industry:'Power Generation', title:'Turbine Instrumentation Overhaul — Gas Power Station', desc:'Replaced aging turbine instrumentation systems across four generation units during planned outage periods, restoring full measurement redundancy.', metric:'99.7%', metricDesc:'plant availability post-commissioning' },
    { industry:'Mining', title:'E&amp;I Installation — Minerals Processing Facility', desc:'Full electrical and instrumentation installation for a new minerals processing plant, including all MCC, cable management, field instruments, and commissioning.', metric:'3 Wks', metricDesc:'ahead of schedule, zero safety incidents' },
    { industry:'Water &amp; Wastewater', title:'Online Analyser Network — Wastewater Authority', desc:'Deployed a distributed network of online water quality analysers across 12 monitoring points for continuous effluent compliance monitoring.', metric:'100%', metricDesc:'regulatory compliance rate achieved' },
    { industry:'Power Generation', title:'Obsolescence Migration — Boiler Control System', desc:'Phased replacement of a 20-year-old obsolete boiler instrumentation and control system without full plant shutdown, protecting operational continuity.', metric:'R2.4M', metricDesc:'replacement cost avoided through phased migration' },
    { industry:'Industrial', title:'Labour Supply — Refinery Turnaround', desc:'Mobilised and managed a team of 34 qualified E&amp;I technicians for a major refinery planned maintenance turnaround over 6 weeks, with full compliance management.', metric:'34', metricDesc:'engineers deployed, 100% compliance record' },
  ];

  const cards = projects.map((p,i) => `
    <div class="industry-card reveal${i>0?' reveal-delay-'+Math.min(i,3):''}" >
      <div class="section-label" style="margin-bottom:8px;">${p.industry}</div>
      <div class="industry-title">${p.title}</div>
      <p class="industry-desc">${p.desc}</p>
      <div style="margin-top:16px;padding-top:16px;border-top:1px solid rgba(0,0,0,0.08);">
        <span style="font-size:2rem;font-weight:700;color:var(--orange);">${p.metric}</span>
        <p style="font-size:13px;color:#666;margin-top:4px;">${p.metricDesc}</p>
      </div>
    </div>`).join('');

  mount.innerHTML = `
    <section class="industries-section">
      <div class="section-label reveal">Our Work</div>
      <h1 class="section-title reveal reveal-delay-1" style="margin-bottom:48px;">Projects &amp; Case Studies</h1>
      <div class="industries-grid">${cards}</div>
    </section>`;
})();
