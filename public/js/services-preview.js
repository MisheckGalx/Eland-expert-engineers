(function buildServicesAndProducts() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { img:'images/services/service-water.jpg',      title:'Water Analysis Engineering',       desc:'Water quality instrumentation and treatment process monitoring for municipal and industrial applications.' },
    { img:'images/services/service-power.jpg',       title:'Power Plant Instrumentation',      desc:'Precision measurement and control systems for power generation facilities operating at maximum efficiency.' },
    { img:'images/services/service-automation.jpg',  title:'Industrial Automation &amp; E&amp;I', desc:'Full-scope electrical and instrumentation installation with integrated automation for industrial environments.' },
  ];


  const positions = ['left','middle','right'];

  const makeCards = services.map((s,i) => `
    <div class="industry-card ${positions[i]}">
      <img src="${s.img}" alt="${s.title}" loading="lazy"/>

      <div class="text-overlay">
        <div class="stars">★★★★★</div>
        <div class="customer">${s.title}</div>
        <div class="role">Client Review</div>
        <p>${s.desc}</p>

  const makeCards = (items, page, arrow) => items.map((s,i) => `
    <div class="svc-preview-card reveal${i>0?' reveal-delay-'+i:''}" onclick="showPage('${page}')">
      <div class="svc-preview-img">
        <img src="${s.img}" alt="${s.title}" loading="lazy"/>
        <div class="svc-preview-overlay"></div>
        <div class="svc-preview-text">
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <span>${arrow} &rarr;</span>
        </div>
      </div>
    </div>`).join('');

  // KEEP YOUR ORIGINAL HEADER + BUTTON
  mount.innerHTML = `
    <section style="padding:60px 5% 20px;">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:32px;">
        <div>
          <div class="section-label">What We Offer</div>
          <h2 class="section-title" style="margin-bottom:0;">Our Services</h2>
        </div>
        <a class="btn-primary" onclick="showPage('services')" style="flex-shrink:0;">
          View All Services
    <section style="padding:60px 5% 60px;">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:28px;">
        <div>
          <div class="section-label reveal">What We Offer</div>
          <h2 class="section-title reveal reveal-delay-1" style="margin-bottom:0;">Our Services</h2>
        </div>
        <a class="btn-primary reveal" onclick="showPage('services')" style="flex-shrink:0;">View All Services
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12,5 19,12 12,19"/>
          </svg>
        </a>
      </div>

      <div class="industries-grid">
        ${makeCards}
      </div>
    </section>
  `;

  // ✅ SCROLL ANIMATION (CORRECT PLACE)
  const cards = mount.querySelectorAll('.industry-card');

  window.addEventListener('scroll', () => {
    const trigger = window.innerHeight / 1.2;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < trigger) {
        card.classList.add('reveal');
      }
    });
  })
      </div>
      <div class="svc-preview-grid">${makeCards(services,'services','Explore')}</div>
    </section>`;
56ef347 (Update services preview script)
})();
