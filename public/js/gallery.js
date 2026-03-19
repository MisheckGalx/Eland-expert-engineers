/* ===== PHOTO GALLERY WITH LIGHTBOX =====
 *
 * HOW TO ADD YOUR PHOTOS:
 * 1. Drop your project photos into  public/images/gallery/
 *    Name them: gallery-01.jpg, gallery-02.jpg, etc.
 * 2. Update the GALLERY array below with real paths and captions.
 * 3. The lightbox opens on click with keyboard navigation (← →  Esc).
 */

const GALLERY = [
  { src: '', thumb: '', caption: 'Power Plant Instrumentation', category: 'Power Generation' },
  { src: '', thumb: '', caption: 'Water Treatment SCADA Panel', category: 'Water & Wastewater' },
  { src: '', thumb: '', caption: 'E&I Cable Installation', category: 'Industrial' },
  { src: '', thumb: '', caption: 'Online Analyser Station', category: 'Water & Wastewater' },
  { src: '', thumb: '', caption: 'MCC Panel Build', category: 'Industrial' },
  { src: '', thumb: '', caption: 'Mining Site Commissioning', category: 'Mining' },
  { src: '', thumb: '', caption: 'Control Room Upgrade', category: 'Power Generation' },
  { src: '', thumb: '', caption: 'Field Instrument Installation', category: 'Mining' },
];

const CATEGORIES = ['All', ...new Set(GALLERY.map(g => g.category))];

let lightboxIndex = 0;
let activeCategory = 'All';

/* ── Gradient placeholders (shown when no real photo added) ── */
const GRADIENTS = [
  'linear-gradient(135deg,#0b1f3a,#1a3d6e)',
  'linear-gradient(135deg,#0a2a1a,#0f4a2e)',
  'linear-gradient(135deg,#1a0a00,#3a1800)',
  'linear-gradient(135deg,#0b1f3a,#0f2a4e)',
  'linear-gradient(135deg,#1a0a28,#2a1048)',
  'linear-gradient(135deg,#001a0f,#003320)',
  'linear-gradient(135deg,#0b1628,#1a2d50)',
  'linear-gradient(135deg,#1a1000,#302000)',
];

const ICONS = ['🏭', '💧', '⚙️', '📊', '🔧', '⛏️', '🖥️', '📡'];

function buildGalleryCard(item, index) {
  const hasImage = !!item.src;
  const bg = GRADIENTS[index % GRADIENTS.length];
  const icon = ICONS[index % ICONS.length];

  const imgContent = hasImage
    ? `<img src="${item.src}" alt="${item.caption}" loading="lazy" />`
    : `<div class="gallery-placeholder" style="background:${bg}">
         <span class="gallery-placeholder-icon">${icon}</span>
         <span class="gallery-placeholder-label">Add photo to<br>images/gallery/</span>
       </div>`;

  return `
    <div class="gallery-card reveal" data-category="${item.category}"
         onclick="openLightbox(${index})" role="button" aria-label="${item.caption}">
      <div class="gallery-img-wrap">
        ${imgContent}
        <div class="gallery-overlay">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
               stroke="white" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </div>
      </div>
      <div class="gallery-caption">
        <span class="gallery-cat">${item.category}</span>
        <span class="gallery-title">${item.caption}</span>
      </div>
    </div>`;
}

function filterGallery(category) {
  activeCategory = category;
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === category);
  });
  document.querySelectorAll('.gallery-card').forEach(card => {
    const show = category === 'All' || card.dataset.category === category;
    card.style.display = show ? '' : 'none';
  });
}

/* ── Lightbox ─────────────────────────────────── */
function openLightbox(index) {
  lightboxIndex = index;
  const lb = document.getElementById('galleryLightbox');
  if (!lb) return;
  updateLightbox();
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('galleryLightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + GALLERY.length) % GALLERY.length;
  updateLightbox();
}

function updateLightbox() {
  const item = GALLERY[lightboxIndex];
  const lbImg = document.getElementById('lbImage');
  const lbCap = document.getElementById('lbCaption');
  const lbCount = document.getElementById('lbCount');

  if (lbImg) {
    if (item.src) {
      lbImg.style.backgroundImage = `url(${item.src})`;
      lbImg.style.background = '';
    } else {
      const bg = GRADIENTS[lightboxIndex % GRADIENTS.length];
      const icon = ICONS[lightboxIndex % ICONS.length];
      lbImg.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${bg};font-size:80px;opacity:0.4">${icon}</div>`;
    }
  }
  if (lbCap)   lbCap.textContent  = item.caption;
  if (lbCount) lbCount.textContent = `${lightboxIndex + 1} / ${GALLERY.length}`;
}

/* ── Keyboard navigation ──────────────────────── */
document.addEventListener('keydown', e => {
  const lb = document.getElementById('galleryLightbox');
  if (!lb?.classList.contains('open')) return;
  if (e.key === 'ArrowRight') lightboxNav(1);
  if (e.key === 'ArrowLeft')  lightboxNav(-1);
  if (e.key === 'Escape')     closeLightbox();
});

/* ── Build gallery section ───────────────────── */
(function buildGallery() {
  const mount = document.getElementById('gallery-mount');
  if (!mount) return;

  const filterBtns = CATEGORIES.map(cat =>
    `<button class="gallery-filter-btn${cat === 'All' ? ' active' : ''}"
             data-cat="${cat}"
             onclick="filterGallery('${cat}')">${cat}</button>`
  ).join('');

  const cards = GALLERY.map((item, i) => buildGalleryCard(item, i)).join('');

  mount.innerHTML = `
    <section class="gallery-section">
      <div class="section-label reveal">Project Gallery</div>
      <div class="gallery-header">
        <div>
          <h2 class="section-title reveal reveal-delay-1">Our Work in Pictures</h2>
          <p class="section-sub reveal reveal-delay-2">
            Real projects. Real results. Add your own photos to bring this gallery to life.
          </p>
        </div>
        <div class="gallery-filters reveal reveal-delay-2">${filterBtns}</div>
      </div>
      <div class="gallery-grid">${cards}</div>
    </section>

    <!-- Lightbox -->
    <div id="galleryLightbox" class="lightbox" onclick="closeLightbox()">
      <button class="lb-close" onclick="closeLightbox()" aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <button class="lb-nav lb-prev" onclick="event.stopPropagation();lightboxNav(-1)" aria-label="Previous">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15,18 9,12 15,6"/>
        </svg>
      </button>
      <div class="lb-content" onclick="event.stopPropagation()">
        <div class="lb-img" id="lbImage"></div>
        <div class="lb-info">
          <span id="lbCaption" class="lb-caption"></span>
          <span id="lbCount" class="lb-count"></span>
        </div>
      </div>
      <button class="lb-nav lb-next" onclick="event.stopPropagation();lightboxNav(1)" aria-label="Next">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9,18 15,12 9,6"/>
        </svg>
      </button>
    </div>`;

  if (typeof initReveal === 'function') initReveal();
})();
