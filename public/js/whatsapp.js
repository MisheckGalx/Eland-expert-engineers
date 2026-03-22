/* ===== WHATSAPP FLOAT BUTTON — Premium design ===== */
(function initWhatsApp() {
  var PHONE   = '27647482526';
  var MESSAGE = 'Hi Eland Expert Engineers, I would like to enquire about your services.';

  var btn = document.createElement('a');
  btn.id   = 'whatsappFloat';
  btn.href = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(MESSAGE);
  btn.target = '_blank';
  btn.rel    = 'noopener noreferrer';
  btn.setAttribute('aria-label', 'Chat on WhatsApp');

  btn.innerHTML =
    '<svg width="22" height="22" viewBox="0 0 32 32" fill="white">' +
      '<path d="M16 1C7.716 1 1 7.716 1 16c0 2.628.672 5.1 1.852 7.256L1 31l7.98-1.82A14.94 14.94 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1zm6.776 20.156c-.372-.188-2.196-1.084-2.536-1.208-.34-.12-.588-.184-.836.184-.248.368-.964 1.208-1.18 1.456-.216.244-.436.276-.808.092-.372-.184-1.572-.58-2.992-1.848-1.108-.988-1.856-2.208-2.072-2.58-.216-.372-.024-.572.16-.756.168-.164.372-.436.556-.652.184-.216.244-.368.368-.616.12-.248.06-.464-.032-.652-.092-.184-.836-2.016-1.144-2.76-.304-.724-.608-.624-.836-.636-.216-.012-.464-.016-.712-.016s-.652.092-.992.464c-.34.372-1.304 1.272-1.304 3.104s1.336 3.6 1.52 3.848c.184.248 2.628 4.016 6.372 5.632.892.384 1.588.612 2.128.784.892.284 1.708.244 2.352.148.716-.108 2.196-.896 2.508-1.764.308-.868.308-1.612.216-1.764-.092-.152-.34-.244-.712-.432z"/>' +
    '</svg>' +
    '<span class="wa-label">Chat with us</span>';

  document.body.appendChild(btn);
})();
