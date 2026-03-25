/* ===== PRODUCTS PAGE ===== */
(function buildProducts() {
  var mount = document.getElementById('products-content-mount');
  if (!mount) return;

  var staticProducts = [
    { id:1, category:'Instrumentation', name:'Pressure Transmitters',          brand:'Endress+Hauser / Rosemount', description:'High-accuracy pressure measurement for process and utility applications.', image_path:'' },
    { id:2, category:'Instrumentation', name:'Flow Meters',                    brand:'Yokogawa / ABB',             description:'Electromagnetic, vortex, and coriolis flow measurement solutions.', image_path:'' },
    { id:3, category:'Instrumentation', name:'Online Water Analysers',         brand:'Hach / YSI',                 description:'Real-time water quality monitoring — pH, turbidity, dissolved oxygen, conductivity.', image_path:'' },
    { id:4, category:'Electrical',      name:'Motor Control Centres (MCC)',    brand:'ABB / Schneider Electric',   description:'Custom-built MCC panels for motor control and protection.', image_path:'' },
    { id:5, category:'Electrical',      name:'Variable Speed Drives',          brand:'ABB / Danfoss',              description:'Energy-efficient drives for pump, fan, and motor applications.', image_path:'' },
    { id:6, category:'Automation',      name:'Programmable Logic Controllers', brand:'Siemens / Allen-Bradley',    description:'S7-1200, S7-1500, and CompactLogix PLCs for all control applications.', image_path:'' },
    { id:7, category:'Automation',      name:'SCADA & HMI Systems',            brand:'Wonderware / Ignition',      description:'Real-time monitoring and control systems for industrial processes.', image_path:'' },
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
      '<p class="section-sub reveal reveal-delay-2" style="max-width:600px;margin-bottom:32px;">Premium instrumentation, electrical, and automation equipment from the world\'s leading manufacturers — fully supported by our engineering team.</p>' +
      '<a class="btn-primary" onclick="showPage(\'contact\')" style="display:inline-flex;align-items:center;gap:8px;">Request a Quote &rarr;</a>' +
      '</div>';

    Object.keys(grouped).forEach(function(cat, ci) {
      html += '<section style="padding:60px 5%;' + (ci%2!==0?'background:var(--bg-card);':'') + '">' +
        '<div class="section-label reveal">' + cat + '</div>' +
        '<h2 class="section-title reveal reveal-delay-1" style="margin-bottom:32px;">' + cat + ' Products</h2>' +
        '<div class="industries-grid">';

      grouped[cat].forEach(function(p) {
        var imgHtml = p.image_path
          ? '<div style="width:100%;height:180px;overflow:hidden;border-radius:var(--radius) var(--radius) 0 0;margin:-40px -30px 20px;width:calc(100% + 60px);"><img src="/' + p.image_path + '" alt="' + p.name + '" style="width:100%;height:100%;object-fit:cover;"/></div>'
          : '';
        html += '<div class="industry-card reveal">' +
          imgHtml +
          '<div style="font-size:11px;font-weight:700;letter-spacing:0.15em;color:var(--gold);text-transform:uppercase;margin-bottom:10px;">' + (p.brand||'') + '</div>' +
          '<div class="industry-title" style="font-size:17px;">' + p.name + '</div>' +
          '<p class="industry-desc">' + p.description + '</p>' +
          '<div style="margin-top:16px;"><a class="svc-cta" onclick="showPage(\'contact\')">Request Quote &rarr;</a></div>' +
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
    if (typeof initReveal === 'function') setTimeout(initReveal, 100);
  }

  fetch('/api/products')
    .then(function(r){ return r.json(); })
    .then(function(json){
      if (json.success && json.data.length > 0) renderProducts(json.data);
      else renderProducts(staticProducts);
    })
    .catch(function(){ renderProducts(staticProducts); });
})();
