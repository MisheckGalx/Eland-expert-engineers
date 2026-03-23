/* ===== SERVICES DETAIL PAGE ===== */
(function buildServicesPage() {
  const mount = document.getElementById('services-content-mount');
  if (!mount) return;

  const services = [
    {
      num: '01', img: 'images/services/service-water.jpg',
      title: 'Water Analysis Engineering',
      desc: 'Advanced analytical instrumentation, water quality monitoring systems, and treatment process control for municipal water authorities and industrial water management operations.',
      tags: ['Online Analyzers','SCADA Integration','Dosing Systems','pH &amp; Turbidity','Flow Metering']
    },
    {
      num: '02', img: 'images/services/service-power.jpg',
      title: 'Power Plant Instrumentation',
      desc: 'Precision measurement and control systems for power generation facilities — from conventional thermal plants to modern renewable energy installations.',
      tags: ['Temperature Measurement','Pressure Systems','Level Control','Flame Detection','DCS Integration']
    },
    {
      num: '03', img: 'images/services/service-automation.jpg',
      title: 'Industrial Automation &amp; E&amp;I Installation',
      desc: 'Full-scope electrical and instrumentation installation services integrated with automation systems for industrial facilities.',
      tags: ['PLC Programming','MCC Installation','Cable Management','Commissioning','Loop Testing']
    },
    {
      num: '04', img: 'images/services/service-obsolete.jpg',
      title: 'Obsolete Instrumentation Support',
      desc: 'Specialist lifecycle management for legacy instrumentation and control systems no longer supported by original manufacturers.',
      tags: ['Lifecycle Assessment','Parts Sourcing','System Retrofit','Migration Planning','Documentation']
    },
    {
      num: '05', img: 'images/services/service-distribution.jpg',
      title: 'Electrical &amp; Instrumentation Distribution',
      desc: 'Reliable supply and distribution of electrical and instrumentation equipment from world-class manufacturers.',
      tags: ['Field Instruments','Control Valves','Transmitters','Cable &amp; Conduit','Switchgear']
    },
    {
      num: '06', img: 'images/services/service-labour.jpg',
      title: 'Skilled Engineering Labour',
      desc: 'Flexible deployment of qualified E&amp;I engineers, technicians, and artisans for short and long-term project requirements.',
      tags: ['E&amp;I Technicians','Instrument Mechanics','Project Engineers','Site Supervisors','Commissioning Eng.']
    },
  ];

  const rows = services.map(s => `
    <div class="service-detail-row reveal">
      <div class="service-detail-img-wrap">
        <img src="${s.img}" alt="${s.title}" loading="lazy" />
        <span class="service-detail-num">${s.num}</span>
      </div>
      <div>
        <div class="service-detail-title">${s.title}</div>
        <p class="service-detail-desc">${s.desc}</p>
        <div class="service-detail-tags">
          ${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>`).join('');

  mount.innerHTML = `
    <section class="services-detail-section">
      <div class="section-label reveal">What We Do</div>
      <h1 class="section-title reveal reveal-delay-1">Our Engineering<br>Service Lines</h1>
      <p class="section-sub reveal reveal-delay-2" style="margin-top:12px;">
        Six specialized disciplines unified under one strategic partner.
      </p>
      <div class="services-detail-grid">${rows}</div>
    </section>
    <div class="cta-banner" style="background-image:url('images/slider/slide-04.jpg')">
      <h2 class="reveal">Need a <span>Custom Solution?</span></h2>
      <p class="reveal reveal-delay-1">Speak to our engineering team to design the right solution for your operation.</p>
      <a class="btn-primary reveal reveal-delay-2" onclick="showPage('contact')">Request a Consultation &rarr;</a>
    </div>`;
})();
