/* ===== CONTACT PAGE ===== */
(function buildContact() {
  const mount = document.getElementById('contact-content-mount');
  if (!mount) return;

  const linkedinIcon = `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>`;

  const facebookIcon = `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>`;

  mount.innerHTML = `
    <div style="min-height:100vh;position:relative;">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5!2d27.9968!3d-26.1012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573c8b9b9b9b9%3A0x1234!2s45+Annie+Rd%2C+Fontainebleau%2C+Randburg!5e0!3m2!1sen!2sza!4v1700000000000"
        style="position:fixed;top:0;left:0;width:100%;height:100%;border:0;z-index:0;filter:brightness(0.45);"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <div style="position:relative;z-index:1;">
    <section class="contact-section" style="background:transparent;">
      <div class="section-label reveal">Get In Touch</div>
      <h1 class="section-title reveal reveal-delay-1">
        Start a Conversation<br>with Our Engineers
      </h1>
      <p class="section-sub reveal reveal-delay-2" style="margin-top:12px;">
        Ready to discuss your project? Our team responds within one business day.
      </p>

      <div class="contact-layout">

        <!-- Contact Details -->
        <div class="reveal">
          <div class="contact-detail">
            <div class="contact-detail-icon">📍</div>
            <div>
              <div class="contact-detail-label">Office Address</div>
              <div class="contact-detail-value">
                45 Annie Road, Fontainebleau<br>
                Randburg, South Africa, 2194
              </div>
            </div>
          </div>

          <div class="contact-detail">
            <div class="contact-detail-icon">📞</div>
            <div>
              <div class="contact-detail-label">Phone</div>
              <div class="contact-detail-value">
                <a href="tel:+27647482526" style="color:inherit;">+27 64 748 2526</a>
              </div>
            </div>
          </div>

          <div class="contact-detail">
            <div class="contact-detail-icon">✉️</div>
            <div>
              <div class="contact-detail-label">Email</div>
              <div class="contact-detail-value">
                <a href="mailto:admin1@eeesa.co.za" style="color:inherit;">admin1@eeesa.co.za</a>
              </div>
            </div>
          </div>

          <div class="contact-detail">
            <div class="contact-detail-icon">🌐</div>
            <div>
              <div class="contact-detail-label">Website</div>
              <div class="contact-detail-value">www.eeesa.co.za</div>
            </div>
          </div>

          <!-- Social buttons -->
          <div class="contact-social-row">
            <a href="https://www.linkedin.com/company/eeesa" target="_blank"
               class="contact-social-btn linkedin">
              ${linkedinIcon} LinkedIn
            </a>
            <a href="https://www.facebook.com/eeesa" target="_blank"
               class="contact-social-btn facebook">
              ${facebookIcon} Facebook
            </a>
          </div>

          <!-- Google Map -->
          <div style="margin-top:28px;border-radius:12px;overflow:hidden;height:260px;">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5!2d27.9968!3d-26.1012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573c8b9b9b9b9%3A0x1234!2s45+Annie+Rd%2C+Fontainebleau%2C+Randburg!5e0!3m2!1sen!2sza!4v1700000000000"
              width="100%" height="260" style="border:0;display:block;"
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div style="margin-top:10px;padding:12px 14px;background:#f8f8f8;border-radius:10px;border:1px solid #e8e8ee;">
            <p style="font-size:13px;color:#888;margin:0;">
              <strong style="color:#1a1a2e;">Eland Expert Engineers (Pty) Ltd</strong><br>
              45 Annie Road, Fontainebleau, Randburg, 2194<br>
              <a href="https://maps.google.com/?q=45+Annie+Road+Fontainebleau+Randburg+South+Africa"
                 target="_blank" style="color:#f4640a;font-weight:600;text-decoration:none;">
                Open in Google Maps &rarr;
              </a>
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-wrap reveal reveal-delay-1">
          <div class="form-row">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Smith" />
            </div>
          </div>
          <div class="form-group">
            <label>Company</label>
            <input type="text" placeholder="Your Organisation" />
          </div>
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@company.com" />
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+27 XX XXX XXXX" />
          </div>
          <div class="form-group">
            <label>Service of Interest</label>
            <select>
              <option value="" disabled selected>Select a service…</option>
              <option>Water Analysis Engineering</option>
              <option>Power Plant Instrumentation</option>
              <option>Industrial Automation &amp; E&amp;E</option>
              <option>Obsolete Instrumentation Support</option>
              <option>E&amp;E Distribution</option>
              <option>Skilled Engineering Labour</option>
              <option>General Enquiry</option>
            </select>
          </div>
          <div class="form-group">
            <label>Project Details</label>
            <textarea placeholder="Tell us about your project, timeline, and requirements…"></textarea>
          </div>
          <button class="form-submit" id="contactSubmitBtn" onclick="handleFormSubmit(event)">
            Send Enquiry &rarr;
          </button>
          <p class="form-note">We respond to all enquiries within one business day.</p>
        </div>

      </div>
    </section>`;
})();

/* Form submission handler */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('contactSubmitBtn');
  if (!btn) return;
  btn.textContent = '✓ Enquiry Sent — We\'ll Be in Touch';
  btn.style.background = '#166534';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Enquiry →';
    btn.style.background = '';
    btn.disabled = false;
  }, 4500);
}
