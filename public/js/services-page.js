/* ===== SERVICES DETAIL PAGE ===== */
(function buildServicesPage() {
  const mount = document.getElementById('services-content-mount');
  if (!mount) return;

  const services = [
    {
      num: '01', img: 'images/services/service-water.jpg',
      title: 'Water Analysis Engineering',
      desc: 'Advanced analytical instrumentation, water quality monitoring systems, and treatment process control for municipal water authorities and industrial water management operations. We specialise in complex multi-parameter monitoring networks and SCADA-integrated analytical solutions.',
      tags: ['Online Analyzers','SCADA Integration','Dosing Systems','pH &amp; Turbidity','Flow Metering'],
      value: 'Real-time water quality assurance, regulatory compliance automation, and operational efficiency gains through intelligent analytics infrastructure.',
    },
    {
      num: '02', img: 'images/services/service-power.jpg',
      title: 'Power Plant Instrumentation',
      desc: 'Precision measurement and control systems for power generation facilities — from conventional thermal plants to modern renewable energy installations. We design, supply, install, and commission instrumentation systems that maximise plant availability and efficiency.',
      tags: ['Temperature Measurement','Pressure Systems','Level Control','Flame Detection','DCS Integration'],
      value: 'Maximised plant availability, early fault detection, optimised fuel efficiency, and reduced unplanned maintenance through precision instrumentation.',
    },
    {
      num: '03', img: 'images/services/service-automation.jpg',
      title: 'Industrial Automation &amp; E&amp;I Installation',
      desc: 'Full-scope electrical and instrumentation installation services integrated with automation systems for industrial facilities. Our teams execute complex E&amp;I works to specification, on schedule, and with meticulous quality control throughout every phase.',
      tags: ['PLC Programming','MCC Installation','Cable Management','Commissioning','Loop Testing'],
      value: 'Reduced project risk, accelerated commissioning timelines, and seamless integration between automation systems and plant electrical infrastructure.',
    },
    {
      num: '04', img: 'images/services/service-obsolete.jpg',
      title: 'Obsolete Instrumentation Support',
      desc: 'Specialist lifecycle management for legacy instrumentation and control systems no longer supported by original manufacturers. We provide assessment, sourcing, retrofitting, and replacement services that protect operational continuity and extend asset life.',
      tags: ['Lifecycle Assessment','Parts Sourcing','System Retrofit','Migration Planning','Documentation'],
      value: 'Extended asset lifespan, eliminated single-point-of-failure risk, and clear technology migration pathways without disruptive full-system replacement.',
    },
    {
      num: '05', img: 'images/services/service-distribution.jpg',
      title: 'Electrical &amp; Instrumentation Distribution',
      desc: 'Reliable supply and distribution of electrical and instrumentation equipment from world-class manufacturers. We leverage strong supplier relationships to deliver quality equipment with competitive pricing and reliable lead times to support your projects.',
      tags: ['Field Instruments','Control Valves','Transmitters','Cable &amp; Conduit','Switchgear'],
      value: 'Simplified procurement, reduced lead times, quality-assured equipment, and competitive pricing through established distributor partnerships.',
    },
    {
      num: '06', img: 'images/services/service-labour.jpg',
      title: 'Skilled Engineering Labour',
      desc: 'Flexible deployment of qualified E&amp;I engineers, technicians, and artisans for short and long-term project requirements. All personnel are vetted, trained, and managed under our full compliance framework — zero administrative burden for your organisation.',
      tags: ['E&amp;I Technicians','Instrument Mechanics','Project Engineers','Site Supervisors','Commissioning Eng.'],
      value: 'Immediate access to skilled personnel, zero HR overhead, full compliance management, and flexible scaling to match project demand.',
    },
  ];

  const rows = services.map(s => `
    <div class="service-detail-row reveal">
      <div>
        <span class="service-detail-num">${s.num}</span>
        <div class="service-detail-icon-wrap">${s.icon}</div>
      </div>
      <div>
        <div class="service-detail-title">${s.title}</div>
        <p class="service-detail-desc">${s.desc}</p>
        <div class="service-detail-tags">
          ${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="service-detail-value">
        <h5>Value Delivered</h5>
        <p>${s.value}</p>
      </div>
    </div>`).join('');

  mount.innerHTML = `
    <section class="services-detail-section">
      <div class="section-label reveal">What We Do</div>
      <h1 class="section-title reveal reveal-delay-1">
        Our Engineering<br>Service Lines
      </h1>
      <p class="section-sub reveal reveal-delay-2" style="margin-top:12px;">
        Six specialized disciplines unified under one strategic partner.
      </p>
      <div class="services-detail-grid">${rows}</div>
    </section>

    <div class="cta-banner">
      <h2 class="reveal">Need a <span>Custom Solution?</span></h2>
      <p class="reveal reveal-delay-1">
        Speak to our engineering team to design the right solution for your operation.
      </p>
      <a class="btn-primary reveal reveal-delay-2" onclick="showPage('contact')">
        Request a Consultation &rarr;
      </a>
    </div>`;
})();
