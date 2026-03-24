/* ===== IMAGE SLIDER ===== */

const SLIDES = [
  { img: 'images/slider/slide-01.jpg', industry: 'Power Generation',       title: 'Instrumentation Overhaul' },
  { img: 'images/slider/slide-02.jpg', industry: 'Water Treatment',         title: 'Municipal SCADA Upgrade' },
  { img: 'images/slider/slide-03.jpg', industry: 'Mining',                  title: 'E&amp;I Installation — Processing Plant' },
  { img: 'images/slider/slide-04.jpg', industry: 'Industrial Automation',   title: 'PLC &amp; MCC Installation' },
  { img: 'images/slider/slide-05.jpg', industry: 'Obsolescence Support',    title: 'Boiler Control System Migration' },
  { img: 'images/slider/slide-06.jpg', industry: 'Water Analytics',         title: 'Online Analyser Network — 12 Sites' },
];

let currentSlide = 0;
let autoTimer = null;

function visibleCount() {
  if (window.innerWidth < 768)  return 1;
  if (window.innerWidth < 1100) return 2;
  return 3;
}

function maxSlide() {
  return Math.max(0, SLIDES.length - visibleCount());
}

function updateSlider() {
  const track = document.getElementById('sliderTrack');
  if (!track) return;
  const cards = track.querySelectorAll('.slide-card');
  if (!cards.length) return;
  const cardW = cards[0].offsetWidth + 18;
  const clamped = Math.min(currentSlide, maxSlide());
  track.style.transform = `translateX(-${clamped * cardW}px)`;
  document.querySelectorAll('.slider-dot').forEach((d, i) => {
    d.classList.toggle('active', i === clamped);
  });
}

function slideBy(dir) {
  currentSlide = Math.min(Math.max(currentSlide + dir, 0), maxSlide());
  updateSlider();
  resetAuto();
}

function goToSlide(i) {
  currentSlide = i;
  updateSlider();
  resetAuto();
}

function resetAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => {
    currentSlide = currentSlide >= maxSlide() ? 0 : currentSlide + 1;
    updateSlider();
  }, 4500);
}

(function buildSlider() {
  const mount = document.getElementById('slider-mount');
  if (!mount) return;

  const slideHTML = SLIDES.map(s => `
    <div class="slide-card">
      <img src="${s.img}" alt="${s.industry}" loading="lazy" />
      <div class="slide-overlay"></div>
      <div class="slide-label">
        <span>${s.industry}</span>
        <h4>${s.title}</h4>
      </div>
    </div>`).join('');

  const dotsHTML = SLIDES.map((_, i) =>
    `<div class="slider-dot${i===0?' active':''}" onclick="goToSlide(${i})"></div>`
  ).join('');

  mount.innerHTML = `
    <div class="slider-section">
      <div class="slider-header">
        <div class="section-label reveal">Our Projects in Action</div>
        <h2 class="section-title reveal reveal-delay-1" style="color:var(--navy);">
          Engineering Excellence<br>in the Field
        </h2>
      </div>
      <div class="slider-track-wrap">
        <div class="slider-track" id="sliderTrack">${slideHTML}</div>
      </div>
      <div class="slider-controls">
        <div class="slider-dots" id="sliderDots">${dotsHTML}</div>
        <button class="slider-btn" onclick="slideBy(-1)" aria-label="Previous">&#8592;</button>
        <button class="slider-btn" onclick="slideBy(1)"  aria-label="Next">&#8594;</button>
      </div>
    </div>`;

  window.addEventListener('resize', updateSlider);
  resetAuto();
  setTimeout(updateSlider, 50);
})();
