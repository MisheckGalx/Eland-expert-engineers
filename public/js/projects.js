/* ===== PROJECTS PAGE ===== */
(function buildProjects() {
  const mount = document.getElementById('projects-content-mount');
  if (!mount) return;

  const projects = [
    {
      industry: 'Water &amp; Wastewater',
      title: 'Municipal SCADA Upgrade — Water Treatment Plant',
      desc: 'Designed and commissioned a full SCADA replacement for a major municipal water treatment facility, integrating 140+ field instruments with a modern HMI control system.',
      metric: '40%', metricDesc: 'reduction in manual operator interventions',
    },
    {
      industry: 'Power Generation',
      title: 'Turbine Instrumentation Overhaul — Gas Power Station',
      desc: 'Replaced aging turbine instrumentation systems across four generation units during planned outage periods, restoring full measurement redundancy.',
      metric: '99.7%', metricDesc: 'plant availability post-commissioning',
    },
    {
      industry: 'Mining',
      title: 'E&amp;E Installation — Minerals Processing Facility',
      desc: 'Full electrical and instrumentation installation for a new minerals processing plant, including all MCC, cable management, field instruments, and commissioning.',
      metric: '3 Wks', metricDesc: 'ahead of schedule, zero safety incidents',
    },
    {
      industry: 'Water &amp; Wastewater',
      title: 'Online Analyser Network — Wastewater Authority',
      desc: 'Deployed a distributed network of online water quality analysers across 12 monitoring points for continuous effluent compliance monitoring.',
      metric: '100%', metricDesc: 'regulatory compliance rate achieved',
    },
    {
      industry: 'Power Generation',
      title: 'Obsolescence Migration — Boiler Control System',
      desc: 'Phased replacement of a 20-year-old obsolete boiler instrumentation and control system without full plant shutdown, protecting operational continuity.',
      metric: 'R2.4M', metricDesc: 'replacement cost avoided through phased migration',
    },
    {
      industry: 'Industrial',
      title: 'Labour Supply — Refinery Turnaround',
      desc: 'Mobilised and managed a team of 34 qualified E&amp;E technicians for a major refinery planned maintenance turnaround over 6 weeks, with full compliance management.',
      metric: '34', metricDesc: 'engineers deployed, zero compliance incidents',
    },
  ];

  const delays = [0, 1, 2, 0, 1, 2];

  const cards = projects.map((p, i) => `
    <div class="project-card reveal${delays[i] > 0 ? ' reveal-delay-' + delays[i] : ''}">
      <span class="project-industry">${p.industry}</span>
      <div class="project-title">${p.title}</div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-metric">
        <span class="value">${p.metric}</span>
        <span class="desc">${p.metricDesc}</span>
      </div>
    </div>`).join('');

  mount.innerHTML = `
    <section class="projects-section">
      <div class="section-label reveal">Case Studies</div>
      <h1 class="section-title reveal reveal-delay-1">
        Engineering Impact<br>in the Field
      </h1>
      <p class="section-sub reveal reveal-delay-2" style="margin-top:12px;">
        Real-world engineering challenges. Measurable outcomes. Lasting partnerships.
      </p>
      <div class="projects-grid">${cards}</div>
    </section>

    <div class="cta-banner" style="background-image:url('images/slider/slide-05.jpg')">
      <h2 class="reveal">Your Project<br><span>Starts Here</span></h2>
      <p class="reveal reveal-delay-1">
        Ready to discuss your next engineering challenge?
      </p>
      <a class="btn-primary reveal reveal-delay-2" onclick="showPage('contact')">
        Start Your Project &rarr;
      </a>
    </div>`;
})();
