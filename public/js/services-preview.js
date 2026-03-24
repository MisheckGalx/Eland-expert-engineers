(function buildServicesPreview() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { img:'images/services/service-water.jpg', title:'Water Analysis Engineering', desc:'High quality engineering service with excellent performance.' },
    { img:'images/services/service-power.jpg', title:'Power Plant Instrumentation', desc:'Reliable instrumentation solutions for power systems.' },
    { img:'images/services/service-automation.jpg', title:'Industrial Automation & E&I', desc:'Advanced automation with seamless integration.' }
  ];

  const positions = ['left','middle','right'];

  const makeCards = (items, page) => items.map((s) => `
    <div class="industry-card reveal" onclick="showPage('${page}')">
    
      <img src="${s.img}" alt="${s.title}" loading="lazy"/>

      <div class="text-overlay">
        <div class="title">${s.title}</div>
        <div class="desc">${s.desc || 'High quality engineering solutions built for performance.'}</div>
      </div>

  </div>
`).join('');

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
  });
