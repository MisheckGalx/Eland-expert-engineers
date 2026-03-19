/* ===== EXPERTS / TEAM SECTION ===== */

/*
 * HOW TO ADD YOUR TEAM:
 * 1. Place each person's photo in /images/experts/
 *    e.g.  images/experts/johan.jpg
 * 2. Set the  photo  field below to that path.
 * 3. Update name, role, bio, and LinkedIn URL.
 * 4. Add more objects to the array for more experts.
 */

const EXPERTS = [
  {
    photo:    '',   // ← e.g. 'images/experts/johan.jpg'
    name:     'Johan van der Merwe',
    role:     'Managing Director &amp; Lead Engineer',
    bio:      '20+ years in electrical and instrumentation engineering across power generation, mining, and water treatment. Specialist in complex control system design and project delivery.',
    linkedin: 'https://www.linkedin.com/in/',
    email:    'admin1@eeesa.co.za',
  },
  {
    photo:    '',
    name:     'Thandi Mokoena',
    role:     'Senior Instrumentation Engineer',
    bio:      'Specialist in water analytics and SCADA systems with 12 years of municipal and industrial project experience. Expert in online analyser networks and process control.',
    linkedin: 'https://www.linkedin.com/in/',
    email:    'admin1@eeesa.co.za',
  },
  {
    photo:    '',
    name:     'Sipho Dlamini',
    role:     'Automation &amp; E&amp;I Project Manager',
    bio:      '15 years delivering large-scale E&amp;I installation and automation projects in mining and power sectors. Proven track record in on-time, on-budget project execution.',
    linkedin: 'https://www.linkedin.com/in/',
    email:    'admin1@eeesa.co.za',
  },
];

(function buildExperts() {
  const mount = document.getElementById('experts-mount');
  if (!mount) return;

  const linkedinIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>`;

  const emailIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
  </svg>`;

  const cards = EXPERTS.map((e, i) => {
    const photoContent = e.photo
      ? `<img src="${e.photo}" alt="${e.name}" loading="lazy" />`
      : `<div class="expert-placeholder">
           <div class="expert-avatar-ring">👤</div>
           <span>Add photo to<br>images/experts/</span>
         </div>`;

    return `
      <div class="expert-card reveal${i > 0 ? ' reveal-delay-' + i : ''}">
        <div class="expert-photo">
          ${photoContent}
          <div class="expert-accent"></div>
        </div>
        <div class="expert-info">
          <div class="expert-name">${e.name}</div>
          <div class="expert-role">${e.role}</div>
          <p class="expert-bio">${e.bio}</p>
          <div class="expert-socials">
            <a href="${e.linkedin}" target="_blank"
               class="expert-social-btn linkedin" title="LinkedIn">
              ${linkedinIcon}
            </a>
            <a href="mailto:${e.email}"
               class="expert-social-btn" title="Email">
              ${emailIcon}
            </a>
          </div>
        </div>
      </div>`;
  }).join('');

  mount.innerHTML = `
    <section class="experts-section">
      <div class="experts-header">
        <div>
          <div class="section-label reveal">Our People</div>
          <h2 class="section-title reveal reveal-delay-1">
            Meet the Experts<br>Behind the Work
          </h2>
        </div>
        <p class="section-sub reveal reveal-delay-2">
          World-class engineers with deep domain knowledge and a commitment
          to precision on every project.
        </p>
      </div>
      <div class="experts-grid">${cards}</div>
    </section>`;
})();
