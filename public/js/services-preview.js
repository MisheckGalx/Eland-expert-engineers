(function buildServicesAndProducts() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { num:'01', img:'images/services/service-water.jpg',      title:'Water Analysis Engineering',       desc:'' },
    { num:'02', img:'images/services/service-power.jpg',       title:'Power Plant Instrumentation',      desc:'' },
    { num:'03', img:'images/services/service-automation.jpg',  title:'Industrial Automation &amp; E&amp;I', desc:'' },
  ];

  const positions = ['left','middle','right'];

  const makeCards = (items, page, arrow) => items.map((s,i) => `
    <div class="industry-card ${positions[i]}" onclick="showPage('${page}')" style="padding:0;overflow:hidden;">
      <img src="${s.img}" alt="${s.title}" loading="lazy"/>
      <div class="text-overlay">
        <div class="stars">★★★★★</div>
        <div class="customer">${s.title}</div>
        <div class="role">Customer Role</div>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join('');

  // Only include the Services section
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
    </section>`;
})();
