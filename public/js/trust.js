/* ===== TRUST STRIP ===== */
(function buildTrust() {
  const mount = document.getElementById('trust-mount');
  if (!mount) return;

  const items = [
    { icon: '⚡', label: 'Power Generation' },
    { icon: '💧', label: 'Water &amp; Wastewater' },
    { icon: '⛏️', label: 'Mining &amp; Heavy Industry' },
    { icon: '🛡️', label: 'Single-Source Accountability' },
    { icon: '📋', label: 'Fully Compliant &amp; Certified' },
  ];

  const inner = items.map((item, i) =>
    `<div class="trust-item">
       <div class="trust-icon">${item.icon}</div>
       ${item.label}
     </div>
     ${i < items.length - 1 ? '<div class="trust-div"></div>' : ''}`
  ).join('');

  mount.innerHTML = `<div class="trust-strip">${inner}</div>`;
})();
