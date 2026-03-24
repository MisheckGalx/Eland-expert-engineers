(function buildServicesPreview() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { img:'images/services/service-water.jpg', title:'Water Analysis Engineering', desc:'High quality engineering service with excellent performance.' },
    { img:'images/services/service-power.jpg', title:'Power Plant Instrumentation', desc:'Reliable instrumentation solutions for power systems.' },
    { img:'images/services/service-automation.jpg', title:'Industrial Automation & E&I', desc:'Advanced automation with seamless integration.' }
  ];

  const positions = ['left','middle','right'];

  const makeImages = services.map((s,i) => `
    <div class="industry-image ${positions[i]}" style="background-image:url('${s.img}');">
      <div class="text-overlay">
        <div class="title">${s.title}</div>
        <div class="desc">${s.desc}</div>
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
        <a class="btn-primary" onclick="showPage('services')" style="flex-shrink:0;">
          View All Services
        </a>
      </div>
      <div class="industries-grid">
        ${makeImages}
      </div>
    </section>
  `;

  const cards = mount.querySelectorAll('.industry-image');

  const scrollReveal = () => {
    const trigger = window.innerHeight / 1.2;
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if(cardTop < trigger && cardTop > -card.offsetHeight) {
        card.classList.add('reveal');
      } else {
        card.classList.remove('reveal'); // repeat animation when scrolling up
      }
    });
  };

  window.addEventListener('scroll', scrollReveal);
  scrollReveal(); // initial check
})();
