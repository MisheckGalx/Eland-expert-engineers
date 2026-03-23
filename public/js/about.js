(function buildAbout() {
  const mount = document.getElementById('about-content-mount');
  if (!mount) return;
  mount.innerHTML = `
    <section class="about-section">
      <div class="section-label reveal">About Eland</div>
      <h1 class="section-title reveal reveal-delay-1" style="max-width:680px;margin-bottom:68px;">
        Engineering Authority.<br>Industrial Intelligence.
      </h1>
      <div class="about-layout">
        <div class="about-visual reveal">
          <div class="about-visual-main">
            <div class="about-bg" style="background-image:url('images/about-main.jpg');background-size:cover;background-position:center;position:absolute;inset:0;border-radius:inherit;"></div>
            <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.1) 60%);border-radius:inherit;z-index:1;"></div>
            <div style="position:absolute;bottom:22px;left:22px;z-index:2;">
              <div style="font-size:9.5px;letter-spacing:0.22em;text-transform:uppercase;color:var(--orange);margin-bottom:3px;font-weight:700;">Headquarters</div>
              <div style="font-family:'Bebas Neue',sans-serif;font-size:32px;color:var(--white);line-height:1;">Randburg, SA</div>
            </div>
          </div>
          <div class="about-badge">
            <span class="num">15<span style="color:rgba(255,255,255,0.45);font-size:28px;">+</span></span>
            <span class="lbl">Years of Excellence</span>
          </div>
        </div>
        <div class="about-content reveal reveal-delay-1">
          <p>Eland Expert Engineers (Pty) Ltd is a specialist electrical and instrumentation engineering company based in Randburg, South Africa. We are not simply a service provider — we are a strategic engineering partner for industrial clients who demand precision, performance, and complete accountability.</p>
          <p>Our multidisciplinary team brings deep expertise across power generation, water analytics, industrial automation, and instrumentation systems. From concept through commissioning and beyond, we deliver integrated solutions that eliminate the complexity of managing multiple engineering vendors.</p>
          <p>Our philosophy is simple: every system we engineer must deliver measurable performance improvement, operational reliability, and long-term value to our clients.</p>
          <div class="about-highlights">
            <div class="highlight"><div class="highlight-dot"></div><span>Single-source engineering accountability from design to handover</span></div>
            <div class="highlight"><div class="highlight-dot"></div><span>Multidisciplinary expertise across six core E&amp;I disciplines</span></div>
            <div class="highlight"><div class="highlight-dot"></div><span>Full payroll, insurance, and regulatory compliance management</span></div>
            <div class="highlight"><div class="highlight-dot"></div><span>Industry-standard safety training and site-specific compliance</span></div>
            <div class="highlight"><div class="highlight-dot"></div><span>Serving power, water, and mining sectors across Southern Africa</span></div>
          </div>
        </div>
      </div>
    </section>

    <div class="compliance-panel">
      <div class="compliance-block">
        <div style="width:100%;height:220px;overflow:hidden;border-radius:12px;margin-bottom:28px;">
          <img src="images/about/compliance.jpg" alt="Compliance" loading="lazy" style="width:100%;height:100%;object-fit:cover;"/>
        </div>
        <div class="section-label reveal">Compliance</div>
        <h2 class="section-title reveal reveal-delay-1" style="font-size:clamp(24px,2.8vw,38px);">Full Regulatory<br>Compliance</h2>
        <p style="color:var(--text-light);font-size:14px;line-height:1.7;font-weight:300;margin-top:10px;max-width:400px;" class="reveal reveal-delay-2">We manage every layer of legal, payroll, and insurance compliance so your project runs without risk.</p>
        <div class="compliance-list">
          <div class="compliance-item reveal">Payroll management and labour law compliance</div>
          <div class="compliance-item reveal reveal-delay-1">Full insurance coverage for all deployed staff</div>
          <div class="compliance-item reveal reveal-delay-2">Legal compliance across Southern African regulations</div>
          <div class="compliance-item reveal reveal-delay-3">Risk-reduction through single-source accountability</div>
        </div>
      </div>
      <div class="compliance-block">
        <div style="width:100%;height:220px;overflow:hidden;border-radius:12px;margin-bottom:28px;">
          <img src="images/about/safety.jpg" alt="Safety" loading="lazy" style="width:100%;height:100%;object-fit:cover;"/>
        </div>
        <div class="section-label reveal">Safety</div>
        <h2 class="section-title reveal reveal-delay-1" style="font-size:clamp(24px,2.8vw,38px);">Safety-First<br>Engineering Culture</h2>
        <p style="color:var(--text-light);font-size:14px;line-height:1.7;font-weight:300;margin-top:10px;max-width:400px;" class="reveal reveal-delay-2">Every engineer deployed by Eland operates under industry-leading safety standards and site-specific protocols.</p>
        <div class="compliance-list">
          <div class="compliance-item reveal">Industry-standard safety training for all personnel</div>
          <div class="compliance-item reveal reveal-delay-1">Site-specific health and safety compliance</div>
          <div class="compliance-item reveal reveal-delay-2">Zero-incident culture embedded in operations</div>
          <div class="compliance-item reveal reveal-delay-3">Continuous safety competency assessment</div>
        </div>
      </div>
    </div>

    <div class="cta-banner" style="background-image:url('images/slider/slide-02.jpg')">
      <h2 class="reveal">Partner with <span>Eland</span></h2>
      <p class="reveal reveal-delay-1">Discover what a true single-source engineering partner can deliver for your operation.</p>
      <a class="btn-primary reveal reveal-delay-2" onclick="showPage('contact')">Get in Touch &rarr;</a>
    </div>`;
})();
