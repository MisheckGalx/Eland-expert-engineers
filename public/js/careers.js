/* ===== PRODUCTS PAGE ===== */
(function buildProducts() {
  var mount = document.getElementById('products-content-mount');
  if (!mount) return;

  var staticProducts = [
    { id:1, category:'Instrumentation', name:'Pressure Transmitters',         brand:'Endress+Hauser / Rosemount', description:'High-accuracy pressure measurement for process and utility applications.' },
    { id:2, category:'Instrumentation', name:'Flow Meters',                   brand:'Yokogawa / ABB',             description:'Electromagnetic, vortex, and coriolis flow measurement solutions.' },
    { id:3, category:'Instrumentation', name:'Level Instruments',             brand:'VEGA / Siemens',             description:'Radar, ultrasonic, and guided wave radar level measurement.' },
    { id:4, category:'Instrumentation', name:'Online Water Analysers',        brand:'Hach / YSI',                 description:'Real-time water quality monitoring — pH, turbidity, dissolved oxygen, conductivity.' },
    { id:5, category:'Electrical',      name:'Motor Control Centres (MCC)',   brand:'ABB / Schneider Electric',   description:'Custom-built MCC panels for motor control and protection.' },
    { id:6, category:'Electrical',      name:'Variable Speed Drives',         brand:'ABB / Danfoss',              description:'Energy-efficient drives for pump, fan, and motor applications.' },
    { id:7, category:'Electrical',      name:'Cable Management Systems',      brand:'Niedax / Legrand',           description:'Cable trays, conduit, and management accessories.' },
    { id:8, category:'Automation',      name:'Programmable Logic Controllers',brand:'Siemens / Allen-Bradley',    description:'S7-1200, S7-1500, and CompactLogix PLCs for all control applications.' },
    { id:9, category:'Automation',      name:'SCADA & HMI Systems',           brand:'Wonderware / Ignition',      description:'Real-time monitoring and control systems for industrial processes.' },
    { id:10,category:'Automation',      name:'Control Panels & Enclosures',   brand:'Rittal / Schneider',         description:'Custom-built control panels and stainless steel enclosures.' },
  ];

  function groupByCategory(products) {
    return products.reduce(function(acc, p) {
      if (!acc[p.category]) acc[p.category] = [];
      acc[p.category].push(p);
      return acc;
    }, {});
  }

  function renderProducts(products) {
    var grouped = groupByCategory(products);
    var html = '<div style="padding:80px 5% 0;">' +
      '<div class="section-label reveal">What We Supply</div>' +
      '<h1 class="section-title reveal reveal-delay-1" style="max-width:640px;">Engineering Products<br>&amp; Equipment</h1>' +
      '<p class="section-sub reveal reveal-delay-2" style="max-width:600px;">Premium instrumentation, electrical, and automation equipment from the world\'s leading manufacturers — fully supported by our engineering team.</p>' +
      '<a class="btn-primary" onclick="showPage(\'contact\')" style="margin-top:28px;display:inline-flex;align-items:center;gap:8px;">Request a Quote &rarr;</a>' +
      '</div>';

    Object.keys(grouped).forEach(function(cat, ci) {
      html += '<section style="padding:60px 5%;' + (ci%2!==0?'background:#f8f8f8;':'') + '">' +
        '<div class="section-label reveal">' + cat + '</div>' +
        '<h2 class="section-title reveal reveal-delay-1">' + cat + ' Products</h2>' +
        '<div class="industries-grid">';

      grouped[cat].forEach(function(p) {
        html += '<div class="industry-card reveal">' +
          '<div style="font-size:11px;font-weight:700;letter-spacing:0.15em;color:var(--orange);text-transform:uppercase;margin-bottom:10px;">' + (p.brand||'') + '</div>' +
          '<div class="industry-title" style="font-size:17px;">' + p.name + '</div>' +
          '<p class="industry-desc">' + p.description + '</p>' +
          '</div>';
      });

      html += '</div></section>';
    });

    html += '<div class="cta-banner" style="background-image:url(\'images/slider/slide-03.jpg\')">' +
      '<h2 class="reveal">Need a <span>Product Quote?</span></h2>' +
      '<p class="reveal reveal-delay-1">Our team will source the right equipment for your specific application and budget.</p>' +
      '<a class="btn-primary reveal reveal-delay-2" onclick="showPage(\'contact\')">Request a Quote &rarr;</a>' +
      '</div>';

    mount.innerHTML = html;
    if (typeof initReveal === 'function') initReveal();
  }

  fetch('/api/products')
    .then(function(r){ return r.json(); })
    .then(function(json){
      if (json.success && json.data.length > 0) renderProducts(json.data);
      else renderProducts(staticProducts);
    })
    .catch(function(){ renderProducts(staticProducts); });
})();
