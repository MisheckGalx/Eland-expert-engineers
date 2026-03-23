(function buildServicesAndProducts() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { num:'01', title:'Water Analysis Engineering',       desc:'Water quality instrumentation and treatment process monitoring for municipal and industrial applications.' },
    { num:'02', title:'Power Plant Instrumentation',      desc:'Precision measurement and control systems for power generation facilities operating at maximum efficiency.' },
    { num:'03', title:'Industrial Automation &amp; E&amp;I', desc:'Full-scope electrical and instrumentation installation with integrated automation for industrial environments.' },
  ];

  const products = [
    { num:'01', title:'Online Water Quality Analysers',       desc:'Multi-parameter analysers for pH, turbidity, dissolved oxygen and conductivity for continuous monitoring.' },
    { num:'02', title:'PLC &amp; MCC Systems',                desc:'Programmable logic controllers and motor control centres — supplied, configured and commissioned to specification.' },
    { num:'03', title:'Field Instruments &amp; Transmitters', desc:'Pressure transmitters, level sensors, control valves and cable systems from world-class manufacturers.' },
  ];

  const makeCards = (items, page, arrow) => items.map((s,i) => `
    <div class="industry-card reveal${i>0?' reveal-delay-'+i:''}" onclick="showPage('${page}')" style="cursor:pointer;">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:11px;letter-spacing:0.22em;color:var(--gray-400);margin-bottom:12px;">${s.num}</div>
      <div class="industry-title" style="font-size:17px;">${s.title}</div>
      <p class="industry-desc">${s.desc}</p>
      <div style="margin-top:16px;font-size:13px;font-weight:600;color:var(--orange);">${arrow} &rarr;</div>
    </div>`).join('');

  mount.innerHTML = `
    <section style="padding:60px 5% 20px;">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:32px;">
        <div>
          <div class="section-label reveal">What We Offer</div>
          <h2 class="section-title reveal reveal-delay-1" style="margin-bottom:0;">Our Services</h2>
        </div>
        <a class="btn-primary reveal" onclick="showPage('services')" style="flex-shrink:0;">View All Services
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
        </a>
      </div>
      <div class="industries-grid">${makeCards(services,'services','Explore')}</div>
    </section>
    <section style="padding:20px 5% 60px;">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:32px;">
        <div>
          <div class="section-label reveal">What We Sell</div>
          <h2 class="section-title reveal reveal-delay-1" style="margin-bottom:0;">Our Products</h2>
        </div>
        <a class="btn-primary reveal" onclick="showPage('products')" style="flex-shrink:0;">View All Products
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
        </a>
      </div>
      <div class="industries-grid">${makeCards(products,'products','View Product')}</div>
    </section>`;
})();
