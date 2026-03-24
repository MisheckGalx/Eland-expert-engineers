(function buildModernServicesPreview() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { img:'images/services/service-water.jpg', title:'Water Analysis Engineering', customer:'John Doe', role:'Project Manager', review:'Excellent precision and reliability in water analysis.' },
    { img:'images/services/service-power.jpg', title:'Power Plant Instrumentation', customer:'Jane Smith', role:'Senior Engineer', review:'Outstanding instrumentation and easy integration.' },
    { img:'images/services/service-automation.jpg', title:'Industrial Automation & E&I', customer:'Michael Lee', role:'Automation Specialist', review:'High-quality automation systems with smooth operation.' }
  ];

  const positions = ['left','middle','right'];

  const makeCards = services.map((s,i) => `
    <div class="industry-card ${positions[i]}">
      <img src="${s.img}" alt="${s.title}" loading="lazy" />
      <div class="text-overlay">
        <div class="stars">★★★★★</div>
        <div class="customer">${s.customer}</div>
        <div class="role">${s.role}</div>
        <p>${s.review}</p>
      </div>
    </div>
  `).join('');

  mount.innerHTML = `
    <section class="services-preview">
      <h2 class="section-title">Our Services</h2>
      <div class="industries-grid">
        ${makeCards}
      </div>
    </section>
  `;

  // Scroll reveal
  const cards = mount.querySelectorAll('.industry-card');
  window.addEventListener('scroll', () => {
    const trigger = window.innerHeight / 1.2;
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < trigger) card.classList.add('reveal');
    });
  });
})();
