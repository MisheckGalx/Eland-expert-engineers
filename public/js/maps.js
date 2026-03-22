/* ===== GOOGLE MAPS — 45 Annie Road, Fontainebleau, Randburg ===== */
(function initMap() {
  var mount = document.getElementById('map-mount');
  if (!mount) return;

  mount.innerHTML =
    '<div class="map-wrap" style="border-radius:12px;overflow:hidden;height:340px;">' +
      '<iframe ' +
        'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.0!2d27.9968!3d-26.1012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573f3e0f3d3d3%3A0x1234!2s45+Annie+Rd%2C+Fontainebleau%2C+Randburg%2C+2194!5e0!3m2!1sen!2sza!4v1234567890" ' +
        'width="100%" height="340" style="border:0;display:block;" ' +
        'allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">' +
      '</iframe>' +
    '</div>' +
    '<div style="margin-top:12px;padding:14px 16px;background:#f8f8f8;border-radius:10px;border:1.5px solid #e8e8ee;">' +
      '<p style="font-size:13px;color:#888899;margin:0;">' +
        '<strong style="color:#1a1a2e;">Eland Expert Engineers (Pty) Ltd</strong><br>' +
        '45 Annie Road, Fontainebleau, Randburg, 2194, South Africa<br>' +
        '<a href="https://maps.google.com/?q=45+Annie+Road+Fontainebleau+Randburg+South+Africa" target="_blank" style="color:#c0181e;font-weight:600;text-decoration:none;">Open in Google Maps &rarr;</a>' +
      '</p>' +
    '</div>';
})();
