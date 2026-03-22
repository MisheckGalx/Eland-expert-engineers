/* ===== PRODUCTS PAGE ===== */
(function buildProducts() {
  var mount = document.getElementById('careers-content-mount');
  if (!mount) return;

  var categories = [
    {
      label: 'Instrumentation',
      title: 'Field Instruments & Analysers',
      desc: 'Premium instrumentation products for process measurement and control across all industries.',
      products: [
        { name: 'Pressure Transmitters', brand: 'Endress+Hauser / Rosemount', desc: 'High-accuracy pressure measurement for process and utility applications.' },
        { name: 'Flow Meters', brand: 'Yokogawa / ABB', desc: 'Electromagnetic, vortex, and coriolis flow measurement solutions.' },
        { name: 'Level Instruments', brand: 'VEGA / Siemens', desc: 'Radar, ultrasonic, and guided wave radar level measurement.' },
        { name: 'Temperature Sensors', brand: 'Wika / Honeywell', desc: 'RTDs, thermocouples, and temperature transmitters for all process conditions.' },
        { name: 'Online Water Analysers', brand: 'Hach / YSI', desc: 'Real-time water quality monitoring — pH, turbidity, dissolved oxygen, conductivity.' },
        { name: 'Gas Detectors', brand: 'MSA / Draeger', desc: 'Fixed and portable gas detection systems for safety-critical environments.' },
      ]
    },
    {
      label: 'Electrical',
      title: 'Electrical Equipment & Distribution',
      desc: 'Quality electrical products for industrial installation, distribution, and control.',
      products: [
        { name: 'Motor Control Centres (MCC)', brand: 'ABB / Schneider Electric', desc: 'Custom-built MCC panels for motor control and protection.' },
        { name: 'Variable Speed Drives', brand: 'ABB / Danfoss', desc: 'Energy-efficient drives for pump, fan, and motor applications.' },
        { name: 'Circuit Breakers & Switchgear', brand: 'Eaton / Legrand', desc: 'LV and MV switchgear for safe electrical distribution.' },
        { name: 'Cable Management Systems', brand: 'Niedax / Legrand', desc: 'Cable trays, conduit, and management accessories.' },
        { name: 'Control & Instrumentation Cable', brand: 'Aberdare / Prysmian', desc: 'Multi-core, screened, and armoured cable for E&E applications.' },
        { name: 'Power Quality Equipment', brand: 'Fluke / Socomec', desc: 'Power analysers, UPS systems, and power conditioning equipment.' },
      ]
    },
    {
      label: 'Automation',
      title: 'Automation & Control Systems',
      desc: 'PLC, SCADA, and automation components for intelligent process control.',
      products: [
        { name: 'Programmable Logic Controllers', brand: 'Siemens / Allen-Bradley', desc: 'S7-1200, S7-1500, and CompactLogix PLCs for all control applications.' },
        { name: 'SCADA & HMI Systems', brand: 'Wonderware / Ignition', desc: 'Real-time monitoring and control systems for industrial processes.' },
        { name: 'Remote I/O Systems', brand: 'Wago / Phoenix Contact', desc: 'Distributed I/O modules for remote signal collection and control.' },
        { name: 'Industrial Networking', brand: 'Cisco / Moxa', desc: 'Industrial Ethernet switches, routers, and wireless solutions.' },
        { name: 'Control Panels & Enclosures', brand: 'Rittal / Schneider', desc: 'Custom-built control panels and stainless steel enclosures.' },
        { name: 'Safety Systems (SIS)', brand: 'Hima / Pilz', desc: 'Safety instrumented systems and emergency shutdown solutions.' },
      ]
    }
  ];

  var html = '<div class="products-section">';

  // Page header
  html += '<div style="padding:96px 6% 48px;background:#fff;border-bottom:1px solid #e8e8ee;">' +
    '<div class="section-label">What We Supply</div>' +
    '<h1 class="section-title" style="max-width:640px">Engineering Products<br>& Equipment</h1>' +
    '<p class="section-sub" style="max-width:600px">We supply premium instrumentation, electrical, and automation equipment from the world\'s leading manufacturers — fully supported by our engineering team.</p>' +
    '<a class="btn-primary" href="javascript:void(0)" onclick="showPage(\'contact\')" style="margin-top:28px;display:inline-flex;align-items:center;gap:8px;">Request a Quote &rarr;</a>' +
    '</div>';

  // Product categories
  categories.forEach(function(cat, ci) {
    var bg = ci % 2 === 0 ? '#ffffff' : '#f8f8f8';
    html += '<section style="padding:72px 6%;background:' + bg + ';border-bottom:1px solid #e8e8ee;">' +
      '<div class="section-label">' + cat.label + '</div>' +
      '<h2 class="section-title">' + cat.title + '</h2>' +
      '<p class="section-sub" style="margin-bottom:40px">' + cat.desc + '</p>' +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">';

    cat.products.forEach(function(p) {
      html += '<div style="background:#fff;border:1.5px solid #e8e8ee;border-radius:16px;padding:28px 24px;transition:all 0.3s;cursor:default;" ' +
        'onmouseenter="this.style.borderColor=\'#c0181e\';this.style.transform=\'translateY(-4px)\';this.style.boxShadow=\'0 16px 48px rgba(0,0,0,0.1)\'" ' +
        'onmouseleave="this.style.borderColor=\'#e8e8ee\';this.style.transform=\'\';this.style.boxShadow=\'\'">' +
        '<div style="font-size:10px;font-weight:700;letter-spacing:0.15em;color:#c0181e;text-transform:uppercase;margin-bottom:10px;">' + p.brand + '</div>' +
        '<h4 style="font-family:\'Space Grotesk\',sans-serif;font-size:16px;font-weight:600;color:#1a1a2e;margin-bottom:10px;letter-spacing:-0.01em;">' + p.name + '</h4>' +
        '<p style="font-size:13.5px;color:#888899;line-height:1.7;">' + p.desc + '</p>' +
        '</div>';
    });

    html += '</div></section>';
  });

  // CTA
  html += '<div class="cta-banner" style="background-image:url(\'images/slider/slide-03.jpg\')">' +
    '<h2 class="reveal">Need a <span>Product Quote?</span></h2>' +
    '<p class="reveal reveal-delay-1">Our team will source the right equipment for your specific application and budget.</p>' +
    '<a class="btn-primary reveal reveal-delay-2" href="javascript:void(0)" onclick="showPage(\'contact\')">Request a Quote &rarr;</a>' +
    '</div>';

  html += '</div>';
  mount.innerHTML = html;
})();
