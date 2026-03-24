(function buildServicesPreview() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { img:'images/services/service-water.jpg', title:'Water Analysis Engineering', desc:'High quality engineering service with excellent performance.' },
    { img:'images/services/service-power.jpg', title:'Power Plant Instrumentation', desc:'Reliable instrumentation solutions for power systems.' },
    { img:'images/services/service-automation.jpg', title:'Industrial Automation & E&I', desc:'Advanced automation with seamless integration.' }
  ];

  // Build card HTML
  const makeCards = (items, page) => items.map((s) => `
    <div class="industry-card" onclick="showPage('${page}')">
      <img src="${s.img}" alt="${s.title}" loading="lazy"/>
      <div class="text-overlay">
        <div class="title">${s.title}</div>
        <div class="desc">${s.desc}</div>
      </div>
    </div>
  `).join('');

  // Inject HTML
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
        ${makeCards(services,'services')}
      </div>
    </section>
  `;

  // Scroll animation that triggers every time
  const cards = mount.querySelectorAll('.industry-card');

  function revealOnScroll() {
    const trigger = window.innerHeight * 0.8;

    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;

      if (top < trigger && top > -card.offsetHeight) {
        card.classList.add('visible');
      } else {
        card.classList.remove('visible'); // triggers animation again when scrolling back
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('resize', revealOnScroll);
  revealOnScroll(); // trigger on page load
})();
