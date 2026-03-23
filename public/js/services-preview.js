(function buildServicesAndProducts() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { img:'images/services/service-water.jpg',     num:'01', title:'Water Analysis Engineering',       desc:'Water quality instrumentation and treatment process monitoring for municipal and industrial applications.' },
    { img:'images/services/service-power.jpg',      num:'02', title:'Power Plant Instrumentation',      desc:'Precision measurement and control systems for power generation facilities at maximum efficiency.' },
    { img:'images/services/service-automation.jpg', num:'03', title:'Industrial Automation &amp; E&amp;I', desc:'Full-scope electrical and instrumentation installation with integrated automation.' },
  ];

  const products = [
    { img:'images/services/service-water.jpg',        num:'01', title:'Online Water Quality Analysers',      desc:'Multi-parameter analysers for pH, turbidity, dissolved oxygen and conductivity.' },
    { img:'images/services/service-automation.jpg',   num:'02', title:'PLC &amp; MCC Systems',               desc:'Programmable logic controllers and motor control centres — configured and commissioned to specification.' },
    { img:'images/services/service-distribution.jpg', num:'03', title:'Field Instruments &amp; Transmitters', desc:'Pressure transmitters, level sensors, control valves and cable systems from world-class manufacturers.' },
  ];

  const makeCards = (items, page, btnText) => items.map((s,i) => `
    <div class="sp-card reveal${i>0?' reveal-delay-'+i:''}" onclick="showPage('${page}')">
      <div class="sp-img"><img src="${s.img}" alt="${s.title}" loading="lazy"/><span class="sp-num">${s.num}</span></div>
      <div class="sp-body">
        <div class="sp-title">${s.title}</div>
        <p class="sp-desc">${s.desc}</p>
        <div class="sp-link">${btnText} &rarr;</div>
      </div>
    </div>`).join('');

  mount.innerHTML = `
    <section class="sp-section">
      <div class="sp-header">
        <div>
          <div class="section-label reveal">What We Offer</div>
          <h2 class="section-title reveal reveal-delay-1">Our Services</h2>
        </div>
        <a class="btn-outline reveal" onclick="showPage('services')">View All Services &rarr;</a>
      </div>
      <div class="sp-grid">${makeCards(services,'services','Explore')}</div>
    </section>

    <section class="sp-section" style="padding-top:24px;">
      <div class="sp-header">
        <div>
          <div class="section-label reveal">What We Sell</div>
          <h2 class="section-title reveal reveal-delay-1">Our Products</h2>
        </div>
        <a class="btn-outline reveal" onclick="showPage('products')">View All Products &rarr;</a>
      </div>
      <div class="sp-grid">${makeCards(products,'products','View Product')}</div>
    </section>`;
})();
