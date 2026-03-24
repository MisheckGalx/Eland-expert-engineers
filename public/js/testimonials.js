(function buildProductsPreview() {
  var mount = document.getElementById('testimonials-mount');
  if (!mount) return;

  function renderPreview(products) {
    var html = '<section style="padding:60px 5%;">' +
      '<div style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:32px;">' +
      '<div><div class="section-label reveal">What We Sell</div>' +
      '<h2 class="section-title reveal reveal-delay-1" style="margin-bottom:0;">Our Products</h2></div>' +
      '<a class="btn-primary reveal" onclick="showPage(\'products\')" style="flex-shrink:0;">View All Products <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg></a>' +
      '</div>';

    if (!products.length) {
      html += '<div style="text-align:center;padding:48px;border:1.5px dashed #e0e0e0;border-radius:12px;">' +
        '<p style="font-size:15px;font-weight:500;color:#0b1f3a;margin-bottom:6px;">No Products Available</p>' +
        '<p style="font-size:13px;color:#aaa;">Check back soon — new products are being added regularly.</p>' +
        '</div>';
    } else {
      html += '<div class="industries-grid">';
      products.slice(0,3).forEach(function(p,i) {
        var imgHtml = p.image_path ? '<div style="width:calc(100% + 60px);margin:-40px -30px 20px;height:190px;overflow:hidden;border-radius:10px 10px 0 0;"><img src="' + p.image_path + '" alt="' + p.name + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;"/></div>' : '';
        html += '<div class="industry-card reveal' + (i>0?' reveal-delay-'+i:'') + '" onclick="showPage(\'products\')" style="cursor:pointer;' + (p.image_path?'padding:0;overflow:hidden;':'') + '">' +
          imgHtml + '<div style="padding:' + (p.image_path?'20px':'0') + ';">' +
          (p.brand?'<div style="font-size:10px;font-weight:700;letter-spacing:0.15em;color:var(--orange);text-transform:uppercase;margin-bottom:8px;">' + p.brand + '</div>':'') +
          '<div class="industry-title" style="font-size:16px;">' + p.name + '</div>' +
          '<p class="industry-desc" style="margin-top:6px;font-size:13px;">' + (p.description||'') + '</p>' +
          '<div style="margin-top:12px;font-size:12px;font-weight:600;color:var(--orange);">View Product &rarr;</div>' +
          '</div></div>';
      });
      html += '</div>';
    }
    html += '</section>';
    mount.innerHTML = html;
    if (typeof initReveal === 'function') initReveal();
  }

  fetch('/api/products')
    .then(function(r){ return r.json(); })
    .then(function(json){ renderPreview(json.success ? json.data : []); })
    .catch(function(){ renderPreview([]); });
})();
