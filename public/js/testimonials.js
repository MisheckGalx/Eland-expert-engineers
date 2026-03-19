/* ===== TESTIMONIALS SECTION =====
 * Fetches from /api/testimonials and renders star-rated client cards.
 * Falls back to static data if server is not running.
 */

const STATIC_TESTIMONIALS = [
  {
    name:    'Gerhard van Niekerk',
    company: 'Eskom Holdings',
    role:    'Plant Manager',
    content: 'Eland Expert Engineers delivered our turbine instrumentation overhaul on schedule and with zero safety incidents. Their technical depth and single-source accountability made this the smoothest project we\'ve run in years.',
    rating:  5,
  },
  {
    name:    'Nomvula Dlamini',
    company: 'Rand Water',
    role:    'Engineering Director',
    content: 'The SCADA upgrade Eland delivered transformed our water treatment operations. Real-time visibility across all monitoring points — we reduced manual interventions by 40%. Outstanding work.',
    rating:  5,
  },
  {
    name:    'Pieter Botha',
    company: 'Anglo American',
    role:    'Project Engineer',
    content: 'We\'ve worked with many E&I contractors. Eland is different — they actually understand our process, not just the wiring. Their obsolete instrumentation support saved us months of downtime.',
    rating:  5,
  },
];

function buildStars(rating) {
  return Array.from({ length: 5 }, (_, i) =>
    `<svg width="14" height="14" viewBox="0 0 24 24"
      fill="${i < rating ? '#f4640a' : 'none'}"
      stroke="${i < rating ? '#f4640a' : '#d1d5db'}"
      stroke-width="1.5">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
    </svg>`
  ).join('');
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function renderTestimonials(list) {
  const mount = document.getElementById('testimonials-mount');
  if (!mount) return;

  const cards = list.map((t, i) => `
    <div class="testimonial-card reveal${i > 0 ? ' reveal-delay-' + Math.min(i, 3) : ''}">
      <div class="testimonial-quote">&ldquo;</div>
      <p class="testimonial-content">${t.content}</p>
      <div class="testimonial-stars">${buildStars(t.rating)}</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${getInitials(t.name)}</div>
        <div class="testimonial-meta">
          <span class="testimonial-name">${t.name}</span>
          <span class="testimonial-role">${t.role}${t.company ? ' · ' + t.company : ''}</span>
        </div>
      </div>
    </div>`).join('');

  mount.innerHTML = `
    <section class="testimonials-section">
      <div class="section-label reveal">Client Testimonials</div>
      <h2 class="section-title reveal reveal-delay-1">
        What Our Clients Say
      </h2>
      <p class="section-sub reveal reveal-delay-2" style="margin-bottom:48px;">
        Trusted by power stations, water authorities, and mining operations across Southern Africa.
      </p>
      <div class="testimonials-grid">${cards}</div>
    </section>`;

  if (typeof initReveal === 'function') initReveal();
}

(async function initTestimonials() {
  try {
    const res  = await fetch('/api/testimonials');
    const json = await res.json();
    if (json.success && json.data.length > 0) {
      renderTestimonials(json.data);
    } else {
      renderTestimonials(STATIC_TESTIMONIALS);
    }
  } catch {
    // Server not running — use static fallback
    renderTestimonials(STATIC_TESTIMONIALS);
  }
})();
