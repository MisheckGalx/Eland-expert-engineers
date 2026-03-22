/* ===== INDUSTRIES SECTION ===== */
(function buildIndustries() {
  const mount = document.getElementById('industries-mount');
  if (!mount) return;
  const industries = [
    { title:'Water &amp; Wastewater', desc:'Water analytics, SCADA integration, and treatment monitoring for municipalities and industrial water management.' },
    { title:'Mining &amp; Heavy Industry', desc:'Robust E&amp;I systems designed for extreme conditions in mining, minerals processing, and heavy industrial environments.' },
    { title:'Single-Source Accountability', desc:'One partner. Full accountability from concept to handover — design, procurement, installation, and commissioning.' },
    { title:'Fully Compliant &amp; Certified', desc:'All work delivered to South African and international engineering standards with full documentation and certification.' },
  ];
  const cards = industries.map((ind, i) => `
    <div class="industry-card reveal${i>0?' reveal-delay-'+i:''}">
      <div class="industry-title">${ind.title}</div>
      <p class="industry-desc">${ind.desc}</p>
    </div>`).join('');
  mount.innerHTML = `
    <section class="industries-section">
      <div class="section-label reveal">Industries Served</div>
      <h2 class="section-title reveal reveal-delay-1">Where We Operate</h2>
      <div class="industries-grid">${cards}</div>
    </section>`;
})();
