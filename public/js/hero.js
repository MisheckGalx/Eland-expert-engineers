/* ===== HERO SECTION ===== */

(function buildHero() {
  const mount = document.getElementById('hero-mount');
  if (!mount) return;

  mount.innerHTML = `
    <section class="hero">

      <!-- VIDEO LAYER -->
      <div class="hero-video-wrap">
        <!--
          HOW TO ADD YOUR VIDEO:
          1. Place your video file in /images/hero/  (e.g. hero-video.mp4)
          2. Change the src below to: images/hero/hero-video.mp4
          3. The fallback gradient will disappear automatically once video loads.
        -->
        <video
          id="heroVideo"
          autoplay muted loop playsinline
          style="display:none; width:100%; height:100%; object-fit:cover;"
        >
          <source src="images/hero/hero-video.mp4" type="video/mp4" />
        </video>

        <!-- Fallback shown when no video file exists -->
        <div class="hero-video-fallback" id="heroFallback">
          <!-- Decorative industrial SVG -->
          <svg style="position:absolute;inset:0;width:100%;height:100%;opacity:0.06;"
               viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#f4640a"/>
                <stop offset="100%" stop-color="#1a3d6e"/>
              </linearGradient>
            </defs>
            <circle cx="950" cy="180" r="320" fill="none" stroke="url(#g1)" stroke-width="1"/>
            <circle cx="950" cy="180" r="220" fill="none" stroke="#f4640a" stroke-width="0.6"/>
            <circle cx="950" cy="180" r="120" fill="none" stroke="#f4640a" stroke-width="0.4"/>
            <line x1="600" y1="0"   x2="1200" y2="380" stroke="#f4640a"  stroke-width="0.5"/>
            <line x1="0"   y1="380" x2="680"  y2="0"   stroke="#ffffff"  stroke-width="0.3"/>
            <rect x="80"  y="420" width="190" height="240" fill="none" stroke="#ffffff"  stroke-width="0.4"/>
            <rect x="310" y="460" width="140" height="200" fill="none" stroke="#ffffff"  stroke-width="0.3"/>
            <rect x="140" y="310" width="55"  height="110" fill="none" stroke="#f4640a" stroke-width="0.5"/>
            <rect x="220" y="340" width="40"  height="80"  fill="none" stroke="#f4640a" stroke-width="0.4"/>
          </svg>
          <!-- Dot-grid overlay -->
          <svg style="position:absolute;inset:0;width:100%;height:100%;opacity:0.04;"
               viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <pattern id="dots" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
              <circle cx="2.5" cy="2.5" r="0.5" fill="white"/>
            </pattern>
            <rect width="100" height="100" fill="url(#dots)"/>
          </svg>
        </div>
      </div>

      <div class="hero-overlay"></div>
      <div class="hero-grid-lines"></div>

      <!-- CONTENT -->
      <div class="hero-content">
        <div class="hero-badge">South Africa's Elite E&amp;E Engineering Partner</div>

        <h1>
          Engineering<br>
          <span class="accent">Excellence</span>
          <span class="indent">in E&amp;E Solutions</span>
        </h1>

        <p class="hero-sub">
          Integrated solutions for power systems, automation, and water analytics 
          engineered from concept to commissioning with uncompromising precision.
        </p>

        <div class="hero-actions">
          <a class="btn-primary" onclick="showPage('contact')">
            Request a Consultation
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12,5 19,12 12,19"/>
            </svg>
          </a>
          <a class="btn-outline" onclick="showPage('services')">View Our Services</a>
        </div>
      </div>

      <div class="hero-scroll">
        <div class="scroll-line"></div>
        Scroll to explore
      </div>
    </section>
  `;

  // Video fallback logic
  const video = document.getElementById('heroVideo');
  if (video) {
    video.addEventListener('canplay', () => {
      video.style.display = 'block';
      const fb = document.getElementById('heroFallback');
      if (fb) fb.style.opacity = '0.25';
    });
    video.onerror = () => { video.style.display = 'none'; };
  }
})();
