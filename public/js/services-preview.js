(function buildServicesAndProducts() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { img:'images/services/service-water.jpg',       num:'01', title:'Water Analysis Engineering',       desc:'Advanced water quality instrumentation and treatment process monitoring for municipal and industrial applications.' },
    { img:'images/services/service-power.jpg',        num:'02', title:'Power Plant Instrumentation',      desc:'Precision measurement and control systems for power generation facilities operating at maximum efficiency.' },
    { img:'images/services/service-automation.jpg',   num:'03', title:'Industrial Automation &amp; E&amp;I', desc:'Full-scope electrical and instrumentation installation with integrated automation for industrial environments.' },
    { img:'images/services/service-obsolete.jpg',     num:'04', title:'Obsolete Instrumentation Support', desc:'Expert lifecycle management, retrofitting, and replacement solutions for legacy systems no longer supported.' },
    { img:'images/services/service-distribution.jpg', num:'05', title:'E&amp;I Distribution',             desc:'Reliable supply of electrical and instrumentation equipment — trusted brands, competitive pricing, rapid delivery.' },
    { img:'images/services/service-labour.jpg',       num:'06', title:'Skilled Engineering Labour',       desc:'Qualified E&amp;I technicians and engineers available for short or long-term deployment on project requirements.' },
  ];

  const products = [
    { img:'images/services/service-water.jpg',        num:'01', title:'Online Water Quality Analysers',      desc:'Multi-parameter analysers for pH, turbidity, dissolved oxygen and conductivity for continuous monitoring.' },
    { img:'images/services/service-automation.jpg',   num:'02', title:'PLC &amp; MCC Systems',               desc:'Programmable logic controllers and motor control centres — supplied, configured and commissioned to specification.' },
    { img:'images/services/service-power.jpg',        num:'03', title:'Turbine &amp; Boiler Instruments',     desc:'Precision temperature, pressure and flow instruments for power generation in the most demanding environments.' },
    { img:'images/services/service-distribution.jpg', num:'04', title:'Field Instruments &amp; Transmitters', desc:'Pressure transmitters, level sensors, control valves and cable systems from world-class manufacturers.' },
  ];

  const serviceCards = services.map((s,i) => `
    <div class="service-card reveal${i%3>0?' reveal-delay-'+i%3:''}" onclick="showPage('services')">
      <div class="service-img-wrap"><img src="${s.img}" alt="${s.title}" loading="lazy"/></div>
      <span class="service-num">${s.num}</span>
      <div class="service-title">${s.title}</div>
      <p class="service-desc">${s.desc}</p>
      <div class="service-arrow">Explore &rarr;</div>
    </div>`).join('');

  const productCards = products.map((p,i) => `
    <div class="service-card reveal${i%3>0?' reveal-delay-'+i%3:''}" onclick="showPage('products')">
      <div class="service-img-wrap"><img src="${p.img}" alt="${p.title}" loading="lazy"/></div>
      <span class="service-num">${p.num}</span>
      <div class="service-title">${p.title}</div>
      <p class="service-desc">${p.desc}</p>
      <div class="service-arrow">View Products &rarr;</div>
    </div>`).join('');

  mount.innerHTML = `
    <section class="services-section">
      <div class="services-header">
        <div>
          <div class="section-label reveal">What We Offer</div>
          <h2 class="section-title reveal reveal-delay-1">Our Services</h2>
        </div>
        <p class="section-sub reveal reveal-delay-2">Six specialized disciplines. One strategic partner. Complete E&amp;I coverage from design to commissioning.</p>
      </div>
      <div class="services-grid">${serviceCards}</div>
    </section>
    <section class="services-section" style="padding-top:0;">
      <div class="services-header">
        <div>
          <div class="section-label reveal">What We Sell</div>
          <h2 class="section-title reveal reveal-delay-1">Our Products</h2>
        </div>
        <p class="section-sub reveal reveal-delay-2">Industry-leading instrumentation and electrical equipment — supplied, installed and commissioned by our engineers.</p>
      </div>
      <div class="services-grid">${productCards}</div>
      <div style="text-align:center;margin-top:40px;" class="reveal">
        <a class="btn-primary" onclick="showPage('products')">View All Products
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
        </a>
      </div>
    </section>`;
})();
