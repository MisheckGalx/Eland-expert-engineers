/* ===== SERVICES PREVIEW (Home) ===== */
(function buildServicesPreview() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { img:'images/services/service-water.jpg',        num:'01', title:'Water Analysis Engineering',       desc:'Advanced water quality instrumentation, analytical systems, and treatment process monitoring for municipal and industrial applications.' },
    { img:'images/services/service-power.jpg',         num:'02', title:'Power Plant Instrumentation',      desc:'Precision measurement, control, and monitoring systems for power generation facilities operating at maximum efficiency.' },
    { img:'images/services/service-automation.jpg',    num:'03', title:'Industrial Automation &amp; E&amp;I', desc:'Full-scope electrical and instrumentation installation with integrated automation for industrial environments.' },
    { img:'images/services/service-obsolete.jpg',      num:'04', title:'Obsolete Instrumentation Support', desc:'Expert lifecycle management, retrofitting, and replacement solutions for legacy systems no longer supported.' },
    { img:'images/services/service-distribution.jpg',  num:'05', title:'E&amp;I Distribution',             desc:'Reliable supply of electrical and instrumentation equipment — trusted brands, competitive pricing, rapid delivery.' },
    { img:'images/services/service-labour.jpg',        num:'06', title:'Skilled Engineering Labour',       desc:'Qualified E&amp;I technicians and engineers available for short or long-term deployment on project requirements.' },
  ];

  const cards = services.map((s, i) => `
    <div class="service-card reveal${i%3>0?' reveal-delay-'+i%3:''}" onclick="showPage('services')">
      <div class="service-img-wrap">
        <img src="${s.img}" alt="${s.title}" loading="lazy" />
      </div>
      <span class="service-num">${s.num}</span>
      <div class="service-title">${s.title}</div>
      <p class="service-desc">${s.desc}</p>
      <div class="service-arrow">Explore &rarr;</div>
    </div>`).join('');

  mount.innerHTML = `
    <section class="services-section">
      <div class="services-header">
        <div>
          <div class="section-label reveal">Our Capabilities</div>
          <h2 class="section-title reveal reveal-delay-1">
            Engineered Solutions<br>Across Every Domain
          </h2>
        </div>
        <p class="section-sub reveal reveal-delay-2">
          Six specialized disciplines. One strategic partner.
          Complete E&amp;I coverage from design to commissioning.
        </p>
      </div>
      <div class="services-grid">${cards}</div>
    </section>`;
})();
