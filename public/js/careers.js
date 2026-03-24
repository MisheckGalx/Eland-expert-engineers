(function buildProducts() {
  var mount = document.getElementById('products-content-mount');
  if (!mount) return;

  function renderProducts(products) {
    var html = '<div style="padding:80px 5% 0;">' +
      '<div class="section-label reveal">What We Supply</div>' +
      '<h1 class="section-title reveal reveal-delay-1" style="max-width:640px;">Engineering Products<br>&amp; Equipment</h1>' +
      '<p class="section-sub reveal reveal-delay-2" style="max-width:600px;">Premium instrumentation, electrical, and automation equipment — fully supported by our engineering team.</p>' +
      '<a class="btn-primary" onclick="showPage(\'contact\')" style="margin-top:28px;display:inline-flex;align-items:center;gap:8px;">Request a Quote &rarr;</a>' +
      '</div>';

    if (!products.length) {
      html += '<div style="text-align:center;padding:80px 5%;color:#888;">' +
        '<div style="font-size:48px;margin-bottom:16px;">📦</div>' +
        '<h3 style="font-size:20px;color:#0b1f3a;margin-bottom:8px;">No Products Available</h3>' +
        '<p style="font-size:14px;">Check back soon — new products are being added regularly.</p>' +
        '</div>';
    } else {
      var grouped = products.reduce(function(acc,p){ if(!acc[p.category]) acc[p.category]=[]; acc[p.category].push(p); return acc; },{});
      Object.keys(grouped).forEach(function(cat,ci) {
        html += '<section style="padding:60px 5%;' + (ci%2!==0?'background:#f8f8f8;':'') + '">' +
          '<div class="section-label reveal">' + cat + '</div>' +
          '<h2 class="section-title reveal reveal-delay-1">' + cat + ' Products</h2>' +
          '<div class="industries-grid">';
        grouped[cat].forEach(function(p) {
          var imgHtml = p.image_path ? '<div style="width:calc(100% + 60px);margin:-40px -30px 20px;height:200px;overflow:hidden;border-radius:10px 10px 0 0;"><img src="' + p.image_path + '" alt="' + p.name + '" style="width:100%;height:100%;object-fit:cover;"/></div>' : '';
          html += '<div class="industry-card reveal" style="' + (p.image_path?'padding:0;overflow:hidden;':'') + '">' +
            imgHtml + '<div style="padding:' + (p.image_path?'24px':'0') + ';">' +
            (p.brand?'<div style="font-size:11px;font-weight:700;letter-spacing:0.15em;color:var(--orange);text-transform:uppercase;margin-bottom:10px;">' + p.brand + '</div>':'') +
            '<div class="industry-title" style="font-size:17px;">' + p.name + '</div>' +
            '<p class="industry-desc" style="margin-top:8px;">' + (p.description||'') + '</p>' +
            '</div></div>';
        });
        html += '</div></section>';
      });
    }

    html += '<div class="cta-banner" style="background-image:url(\'images/slider/slide-03.jpg\')">' +
      '<h2 class="reveal">Need a <span>Product Quote?</span></h2>' +
      '<p class="reveal reveal-delay-1">Our team will source the right equipment for your specific application.</p>' +
      '<a class="btn-primary reveal reveal-delay-2" onclick="showPage(\'contact\')">Request a Quote &rarr;</a>' +
      '</div>';

    mount.innerHTML = html;
    if (typeof initReveal === 'function') initReveal();
  }

  fetch('/api/products')
    .then(function(r){ return r.json(); })
    .then(function(json){ renderProducts(json.success ? json.data : []); })
    .catch(function(){ renderProducts([]); });
})();
