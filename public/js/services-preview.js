(function buildServicesPreview() {
  const mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  const services = [
    { img:'images/services/service-water.jpg', title:'Water Analysis Engineering', desc:'High quality engineering service with excellent performance.' },
    { img:'images/services/service-power.jpg', title:'Power Plant Instrumentation', desc:'Reliable instrumentation solutions for power systems.' },
    { img:'images/services/service-automation.jpg', title:'Industrial Automation & E&I', desc:'Advanced automation with seamless integration.' }
  ];

  const positions = ['left','middle','right'];

  const makeCards = services.map((s,i) => `
    <div class="industry-image ${positions[i]}">
      <img src="${s.img}" alt="${s.title}" loading="lazy"/>
      <div class="text-overlay">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join('');

  mount.innerHTML = `
    <section style="padding:60px 5% 20px;">
      <div class="industries-grid">
        ${makeCards}
      </div>
    </section>
  `;

  // SCROLL ANIMATION
  const cards = mount.querySelectorAll('.industry-image');

  const revealOnScroll = () => {
    const trigger = window.innerHeight / 1.2;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < trigger) {
        card.classList.add('reveal');
      } else {
        card.classList.remove('reveal'); // allows scroll-up magic
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // reveal if already in view
})();
