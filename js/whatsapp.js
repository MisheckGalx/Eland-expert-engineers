/* ===== WHATSAPP FLOATING BUTTON ===== */

/*
 * HOW TO CONFIGURE:
 * Change WHATSAPP_NUMBER to your number in international format (no + or spaces).
 * Change WHATSAPP_MESSAGE to your preferred pre-filled message.
 */

const WHATSAPP_NUMBER  = '27647482526';   // ← your number here
const WHATSAPP_MESSAGE = 'Hi Eland Expert Engineers! I would like to enquire about your engineering services.';

(function initWhatsApp() {

  const encodedMsg = encodeURIComponent(WHATSAPP_MESSAGE);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

  const btn = document.createElement('a');
  btn.id   = 'whatsappBtn';
  btn.href = waUrl;
  btn.target = '_blank';
  btn.rel    = 'noopener noreferrer';
  btn.setAttribute('aria-label', 'Chat on WhatsApp');

  btn.innerHTML = `
    <!-- WhatsApp SVG icon -->
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 1C7.716 1 1 7.716 1 16c0 2.628.672 5.1 1.852 7.256L1 31l7.98-1.82A14.94 14.94 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1zm0 27.4a12.33 12.33 0 01-6.3-1.728l-.452-.268-4.736 1.08 1.1-4.616-.296-.476A12.36 12.36 0 013.6 16C3.6 9.148 9.148 3.6 16 3.6S28.4 9.148 28.4 16 22.852 28.4 16 28.4zm6.776-9.244c-.372-.188-2.196-1.084-2.536-1.208-.34-.12-.588-.184-.836.184-.248.368-.964 1.208-1.18 1.456-.216.244-.436.276-.808.092-.372-.184-1.572-.58-2.992-1.848-1.108-.988-1.856-2.208-2.072-2.58-.216-.372-.024-.572.16-.756.168-.164.372-.436.556-.652.184-.216.244-.368.368-.616.12-.248.06-.464-.032-.652-.092-.184-.836-2.016-1.144-2.76-.304-.724-.608-.624-.836-.636-.216-.012-.464-.016-.712-.016s-.652.092-.992.464c-.34.372-1.304 1.272-1.304 3.104s1.336 3.6 1.52 3.848c.184.248 2.628 4.016 6.372 5.632.892.384 1.588.612 2.128.784.892.284 1.708.244 2.352.148.716-.108 2.196-.896 2.508-1.764.308-.868.308-1.612.216-1.764-.092-.152-.34-.244-.712-.432z"/>
    </svg>
    <span class="wa-tooltip">Chat with us</span>
  `;

  document.body.appendChild(btn);
})();
