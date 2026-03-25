(function buildServicesPreview() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { img:'images/services/service-water.jpg', title:'Water Analysis Engineering', desc:'High quality engineering service with excellent performance.' },
    { img:'images/services/service-power.jpg', title:'Power Plant Instrumentation', desc:'Reliable instrumentation solutions for power systems.' },
    { img:'images/services/service-automation.jpg', title:'Industrial Automation & E&I', desc:'Advanced automation with seamless integration.' }
  ];

  const positions = ['left','middle','right'];

  // Build full-image blocks
  const makeCards = services.map((s,i) => `
    <div class="industry-image ${positions[i]}">
      <div class="background" style="background-image:url('${s.img}');"></div>
      <div class="text-overlay">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join('');

  mount.innerHTML = `
    <section style="padding:60px 5% 20px;">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:32px;">
        <div>
          <div class="section-label">What We Offer</div>
          <h2 class="section-title" style="margin-bottom:0;">Our Services</h2>
        </div>
      </div>
      <div class="industries-grid">
        ${makeCards}
      </div>
    </section>
  `;

  // Scroll animation: triggers both on scroll down & up
  const cards = mount.querySelectorAll('.industry-image');

  function handleScroll() {
    const trigger = window.innerHeight / 1.2;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < trigger) {
        card.classList.add('reveal');
      } else {
        card.classList.remove('reveal'); // allows repeating animation
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll); // trigger on page load
})();
