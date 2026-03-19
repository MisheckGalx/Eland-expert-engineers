/* ===== CAREERS PAGE ===== */
(function buildCareers() {
  const mount = document.getElementById('careers-content-mount');
  if (!mount) return;

  const culture = [
    { icon:'🎯', title:'A Place for Serious Engineers',    body:'We hire engineers who are as committed to excellence as we are. If you take your craft seriously, you belong at Eland.' },
    { icon:'📈', title:'Real Growth Opportunities',        body:'Work across complex, diverse projects that build genuine expertise. We invest in training, certification, and career progression.' },
    { icon:'🛡️', title:'Safety-First Culture',            body:'Every Eland engineer is trained to the highest safety standards — protecting our people on every site, every day, without exception.' },
    { icon:'🌍', title:'Meaningful Industry Impact',       body:'Work on projects that matter — power generation, water treatment, and infrastructure that serves communities across Southern Africa.' },
  ];

  const roles = [
    { title:'Senior Instrumentation Engineer', meta:'Johannesburg · Permanent · Full-time' },
    { title:'E&amp;I Technician (Water Sector)', meta:'Randburg · Contract · Full-time' },
    { title:'Automation Engineer',              meta:'Gauteng · Permanent · Full-time' },
    { title:'Site Supervisor — Power Projects', meta:'Various Sites · Contract' },
    { title:'Junior Instrument Mechanic',       meta:'Randburg · Permanent · Full-time' },
  ];

  const cultureHTML = culture.map((c, i) => `
    <div class="culture-point reveal${i>0?' reveal-delay-'+i:''}">
      <div class="culture-icon">${c.icon}</div>
      <div>
        <h4>${c.title}</h4>
        <p>${c.body}</p>
      </div>
    </div>`).join('');

  const rolesHTML = roles.map(r => `
    <div class="role-card">
      <div>
        <div class="role-title">${r.title}</div>
        <div class="role-meta">${r.meta}</div>
      </div>
      <span class="role-arrow">&rarr;</span>
    </div>`).join('');

  mount.innerHTML = `
    <section class="careers-section">
      <div class="section-label reveal">Join the Team</div>
      <h1 class="section-title reveal reveal-delay-1">
        Engineering Careers<br>Built to Last
      </h1>
      <p class="section-sub reveal reveal-delay-2" style="margin-top:12px;">
        We build careers the same way we build systems — with precision, purpose,
        and long-term performance in mind.
      </p>

      <div class="careers-layout">
        <!-- Culture -->
        <div>${cultureHTML}</div>

        <!-- Roles -->
        <div class="reveal reveal-delay-1">
          <div class="roles-title">Open Roles</div>
          ${rolesHTML}
          <div class="no-role-box">
            <h4>Don't see your role?</h4>
            <p>We're always looking for exceptional engineers. Send your CV and we'll keep
               you in mind for upcoming opportunities.</p>
            <a class="btn-dark" onclick="showPage('contact')">Submit Your CV</a>
          </div>
        </div>
      </div>
    </section>`;
})();
