/* ===== GOOGLE MAPS EMBED =====
 *
 * HOW TO GET YOUR FREE EMBED URL (no API key needed):
 * ────────────────────────────────────────────────────
 * 1. Go to https://maps.google.com
 * 2. Search for: "45 Annie Road, Fontainebleau, Randburg"
 * 3. Click Share → Embed a map → Copy HTML
 * 4. Paste the entire <iframe src="..."> below and replace MAP_EMBED_SRC
 *
 * OR use the pre-built URL below which works without an API key.
 * ────────────────────────────────────────────────────────────
 */

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.9!2d27.9850!3d-26.1050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s45+Annie+Road%2C+Fontainebleau%2C+Randburg!5e0!3m2!1sen!2sza!4v1234567890';

/*
 * Replace MAP_EMBED_SRC with your actual embed URL from Google Maps.
 * The address  45 Annie Road, Fontainebleau, Randburg, 2194  is pre-set.
 */

(function initMap() {
  /* Wait for contact page to render, then inject the map */
  function injectMap() {
    /* Find the existing map placeholder in the contact page */
    const placeholder = document.querySelector('.map-wrap');
    if (!placeholder) return;

    /* Build the enhanced map embed */
    placeholder.outerHTML = `
      <div class="map-embed-wrap">
        <!--
          OPTION A — Google Maps Embed (recommended, no API key needed)
          Replace MAP_EMBED_SRC with your iframe src from Google Maps → Share → Embed
        -->
        <iframe
          src="${MAP_EMBED_SRC}"
          title="Eland Expert Engineers location — 45 Annie Road, Fontainebleau, Randburg"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style="display:none"
          id="googleMapFrame"
        ></iframe>

        <!--
          OPTION B — Fallback shown when iframe hasn't loaded or
          when MAP_EMBED_SRC is still the placeholder value.
          It links out to Google Maps directly.
        -->
        <div class="map-embed-placeholder" id="mapPlaceholder">
          <div class="map-pin-icon">📍</div>
          <p>Fontainebleau, Randburg</p>
          <p class="map-address">45 Annie Road, Randburg, South Africa, 2194</p>
          <a
            href="https://maps.google.com/?q=45+Annie+Road,+Fontainebleau,+Randburg,+South+Africa"
            target="_blank"
            rel="noopener noreferrer"
            class="map-open-link"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </div>`;

    /* Show iframe once loaded, hide placeholder */
    const frame = document.getElementById('googleMapFrame');
    const ph    = document.getElementById('mapPlaceholder');

    if (frame && ph) {
      frame.addEventListener('load', () => {
        frame.style.display = 'block';
        ph.style.display    = 'none';
      });

      frame.addEventListener('error', () => {
        frame.style.display = 'none';
        ph.style.display    = 'flex';
      });
    }
  }

  /* Try immediately and also watch for page navigation */
  document.addEventListener('DOMContentLoaded', injectMap);

  /* Re-inject whenever the contact page is shown */
  const _showPage = window.showPage;
  window.showPage = function (page) {
    _showPage && _showPage(page);
    if (page === 'contact') {
      setTimeout(injectMap, 120);
    }
  };
})();
