/* ===== SERVICES PREVIEW (Home) ===== */
(function buildServicesPreview() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { num:'01', icon:'💧', title:'Water Analysis Engineering',            desc:'Advanced water quality instrumentation, analytical systems, and treatment process monitoring for municipal and industrial applications.' },
    { num:'02', icon:'🏭', title:'Power Plant Instrumentation',           desc:'Precision measurement, control, and monitoring systems for power generation facilities operating at maximum efficiency.' },
    { num:'03', icon:'⚙️', title:'Industrial Automation &amp; E&amp;I',  desc:'Full-scope electrical and instrumentation installation with integrated automation for industrial environments.' },
    { num:'04', icon:'🔧', title:'Obsolete Instrumentation Support',      desc:'Expert lifecycle management, retrofitting, and replacement solutions for legacy systems no longer supported.' },
    { num:'05', icon:'📦', title:'E&amp;I Distribution',                  desc:'Reliable supply of electrical and instrumentation equipment — trusted brands, competitive pricing, rapid delivery.' },
    { num:'06', icon:'👷', title:'Skilled Engineering Labour',            desc:'Qualified E&amp;I technicians and engineers available for short or long-term deployment on project requirements.' },
  ];

  const cards = services.map((s, i) => `
    <div class="service-card reveal${i%3>0?' reveal-delay-'+i%3:''}" onclick="showPage('services')">
      <span class="service-num">${s.num}</span>
      <span class="service-icon">${s.icon}</span>
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
