(function buildFeaturedEquipment() {
  const mount = document.getElementById('testimonials-mount');
  if (!mount) return;
  const products = [
    { img:'images/services/service-water.jpg', category:'Water Analytics', name:'Online Water Quality Analysers', desc:'Multi-parameter online analysers for pH, turbidity, dissolved oxygen, and conductivity — designed for continuous industrial and municipal monitoring.' },
    { img:'images/services/service-automation.jpg', category:'Automation & Control', name:'PLC & MCC Systems', desc:'Programmable logic controllers and motor control centres for industrial automation — supplied, configured, and commissioned to your specification.' },
    { img:'images/services/service-power.jpg', category:'Power Instrumentation', name:'Turbine & Boiler Instruments', desc:'Precision temperature, pressure, and flow measurement instruments for power generation — reliable in the most demanding plant environments.' },
    { img:'images/services/service-distribution.jpg', category:'E&I Distribution', name:'Field Instruments & Transmitters', desc:'Full range of field instruments including pressure transmitters, level sensors, control valves, and cable systems from world-class manufacturers.' },
  ];
  const cards = products.map((p,i) => `
    <div class="industry-card reveal${i>0?' reveal-delay-'+Math.min(i,3):''}" onclick="showPage('products')" style="cursor:pointer;">
      <div class="service-img-wrap"><img src="${p.img}" alt="${p.name}" loading="lazy"/></div>
      <div class="section-label" style="margin:14px 0 6px;">${p.category}</div>
      <div class="industry-title">${p.name}</div>
      <p class="industry-desc">${p.desc}</p>
    </div>`).join('');
  mount.innerHTML = `
    <section class="industries-section">
      <div class="section-label reveal">Products & Equipment</div>
      <h2 class="section-title reveal reveal-delay-1">Equipment We Supply &amp; Install</h2>
      <p class="section-sub reveal reveal-delay-2" style="margin-bottom:40px;">Industry-leading instrumentation and electrical equipment — supplied, installed, and commissioned by our engineers.</p>
      <div class="industries-grid">${cards}</div>
      <div style="text-align:center;margin-top:40px;" class="reveal">
        <a class="btn-primary" onclick="showPage('products')">View All Products
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
        </a>
      </div>
    </section>`;
})();
