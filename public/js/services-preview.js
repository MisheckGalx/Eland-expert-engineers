(function buildServicesAndProducts() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { img:'images/services/service-water.jpg',      num:'01', title:'Water Analysis Engineering',    desc:'Advanced water quality instrumentation and treatment process monitoring for municipal and industrial applications.' },
    { img:'images/services/service-power.jpg',       num:'02', title:'Power Plant Instrumentation',   desc:'Precision measurement and control systems for power generation facilities operating at maximum efficiency.' },
    { img:'images/services/service-automation.jpg',  num:'03', title:'Industrial Automation &amp; E&amp;I', desc:'Full-scope electrical and instrumentation installation with integrated automation for industrial environments.' },
  ];

  const products = [
    { img:'images/services/service-water.jpg',        num:'01', title:'Online Water Quality Analysers',      desc:'Multi-parameter analysers for pH, turbidity, dissolved oxygen and conductivity for continuous monitoring.' },
    { img:'images/services/service-automation.jpg',   num:'02', title:'PLC &amp; MCC Systems',               desc:'Programmable logic controllers and motor control centres — supplied, configured and commissioned to specification.' },
    { img:'images/services/service-distribution.jpg', num:'03', title:'Field Instruments &amp; Transmitters', desc:'Pressure transmitters, level sensors, control valves and cable systems from world-class manufacturers.' },
  ];

  const makeCards = (items, page, btnText) => items.map((s,i) => `
    <div class="service-card reveal${i>0?' reveal-delay-'+i:''}" onclick="showPage('${page}')">
      <div class="service-img-wrap"><img src="${s.img}" alt="${s.title}" loading="lazy"/></div>
      <span class="service-num">${s.num}</span>
      <div class="service-title">${s.title}</div>
      <p class="service-desc">${s.desc}</p>
      <div class="service-arrow">${btnText} &rarr;</div>
    </div>`).join('');

  mount.innerHTML = `
    <section class="services-section">
      <div class="services-header">
        <div>
          <div class="section-label reveal">What We Offer</div>
          <h2 class="section-title reveal reveal-delay-1">Our Services</h2>
        </div>
        <p class="section-sub reveal reveal-delay-2">Six specialized disciplines. One strategic partner.</p>
      </div>
      <div class="services-grid">${makeCards(services,'services','Explore')}</div>
      <div style="text-align:center;margin-top:32px;" class="reveal">
        <a class="btn-primary" onclick="showPage('services')">View All Services
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
        </a>
      </div>
    </section>

    <section class="services-section" style="padding-top:0;">
      <div class="services-header">
        <div>
          <div class="section-label reveal">What We Sell</div>
          <h2 class="section-title reveal reveal-delay-1">Our Products</h2>
        </div>
        <p class="section-sub reveal reveal-delay-2">Industry-leading instrumentation and electrical equipment.</p>
      </div>
      <div class="services-grid">${makeCards(products,'products','View Product')}</div>
      <div style="text-align:center;margin-top:32px;" class="reveal">
        <a class="btn-primary" onclick="showPage('products')">View All Products
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
        </a>
      </div>
    </section>`;
})();
