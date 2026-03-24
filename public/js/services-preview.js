(function buildHeroAndServices() {
  var mount = document.getElementById('services-preview-mount');
  if (!mount) return;

  mount.innerHTML = `
    <div style="width:100%;padding:64px 5% 72px;overflow:hidden;position:relative;" id="heroStage">
      <style>
        .hcard{position:relative;border-radius:14px;overflow:hidden;flex-shrink:0;cursor:pointer;transition:transform 0.7s cubic-bezier(.22,.68,0,1.2),box-shadow 0.5s,opacity 0.6s;}
        .hcard::after{content:'';position:absolute;inset:0;border-radius:14px;border:1px solid rgba(255,255,255,0.12);}
        .hcard-lbl{position:absolute;bottom:0;left:0;right:0;padding:16px 18px 14px;background:linear-gradient(to top,rgba(10,20,35,0.9) 0%,transparent 100%);}
        .hcard-lbl p{font-size:13px;font-weight:600;color:#fff;margin:0 0 2px;}
        .hcard-lbl span{font-size:11px;color:rgba(255,255,255,0.55);}
        .hcard img{width:100%;height:100%;object-fit:cover;display:block;filter:brightness(0.88);}
        .hcard-c{width:300px;height:340px;z-index:3;box-shadow:0 24px 60px -10px rgba(0,0,0,0.4);}
        .hcard-s{width:220px;height:278px;z-index:2;box-shadow:0 12px 32px -8px rgba(0,0,0,0.28);}
        .el{opacity:0;transform:translateX(40px) translateY(40px) rotateY(6deg) scale(0.88);}
        .er{opacity:0;transform:translateX(-40px) translateY(40px) rotateY(-6deg) scale(0.88);}
        .ec{opacity:0;transform:translateY(50px) scale(0.9);}
        .al{opacity:1!important;transform:translateX(36px) translateY(20px) rotateY(6deg) scale(0.95)!important;}
        .ar{opacity:1!important;transform:translateX(-36px) translateY(20px) rotateY(-6deg) scale(0.95)!important;}
        .ac{opacity:1!important;transform:translateY(0) scale(1)!important;}
        .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px;}
        .svc-card{border:1px solid var(--gray-200,#e5e7eb);border-radius:12px;padding:0;overflow:hidden;cursor:pointer;transition:all 0.3s;}
        .svc-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,0.1);}
        .svc-card:hover::before{height:100%;}
        .svc-card::before{content:'';position:absolute;top:0;left:0;width:3px;height:0;background:#f4640a;transition:height 0.4s;border-radius:0;}
        .svc-card{position:relative;}
        .svc-img{width:100%;height:160px;object-fit:cover;display:block;}
        .svc-body{padding:20px;}
        .svc-num{font-size:10px;letter-spacing:0.2em;color:#aaa;font-weight:600;margin-bottom:8px;display:block;}
        .svc-title{font-size:15px;font-weight:600;color:var(--navy,#0b1f3a);margin-bottom:8px;line-height:1.3;}
        .svc-desc{font-size:13px;color:#666;line-height:1.65;}
        .svc-arrow{font-size:12px;font-weight:600;color:#f4640a;margin-top:12px;display:block;}
        @media(max-width:700px){.svc-grid{grid-template-columns:1fr;}.cards-perspective{flex-direction:column;align-items:center;gap:12px!important;}.hcard-s{width:260px!important;height:200px!important;transform:none!important;margin:0!important;opacity:1!important;}.hcard-c{width:260px!important;height:240px!important;}}
      </style>

      <!-- Hero text -->
      <div style="text-align:center;margin-bottom:52px;">
        <div style="font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#f4640a;margin-bottom:12px;">&#9679; Engineering Excellence</div>
        <h2 style="font-size:clamp(24px,4vw,40px);font-weight:700;color:var(--navy,#0b1f3a);line-height:1.2;margin-bottom:14px;font-family:'Syne',sans-serif;">Single-Source <span style="color:#f4640a;">E&amp;I Solutions</span><br>for Industrial Leaders</h2>
        <p style="font-size:15px;color:#666;max-width:520px;margin:0 auto;line-height:1.65;">From water treatment to power generation — integrated electrical and instrumentation engineering, concept to commissioning.</p>
      </div>

      <!-- Three image cards -->
      <div class="cards-perspective" style="display:flex;align-items:flex-end;justify-content:center;perspective:1200px;gap:0;margin-bottom:8px;">
        <div class="hcard hcard-s el" id="hcl" style="margin-right:-36px;" onclick="showPage('services')">
          <img src="images/services/service-water.jpg" alt="Water treatment"
               onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#0a2a1a,#0f4a2e)'"/>
          <div class="hcard-lbl"><p>Water Treatment</p><span>SCADA &amp; Analytics</span></div>
        </div>
        <div class="hcard hcard-c ec" id="hcc" onclick="showPage('services')">
          <img src="images/services/service-power.jpg" alt="Power generation"
               onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#0b1f3a,#1a3d6e)'"/>
          <div class="hcard-lbl"><p>Power Generation</p><span>Turbine Instrumentation</span></div>
        </div>
        <div class="hcard hcard-s er" id="hcr" style="margin-left:-36px;" onclick="showPage('services')">
          <img src="images/services/service-automation.jpg" alt="Industrial automation"
               onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#1a0a00,#3a1800)'"/>
          <div class="hcard-lbl"><p>Industrial Automation</p><span>PLC &amp; E&amp;I Systems</span></div>
        </div>
      </div>

      <!-- Services + Products -->
      <div style="margin-top:56px;">
        <div style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:24px;">
          <div>
            <div style="font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#f4640a;margin-bottom:6px;">What We Offer</div>
            <h3 style="font-size:24px;font-weight:700;color:var(--navy,#0b1f3a);font-family:'Syne',sans-serif;margin:0;">Our Services</h3>
          </div>
          <a onclick="showPage('services')" style="font-size:13px;font-weight:600;color:#f4640a;cursor:pointer;white-space:nowrap;">View All Services &rarr;</a>
        </div>
        <div class="svc-grid">
          <div class="svc-card" onclick="showPage('services')">
            <img class="svc-img" src="images/services/service-water.jpg" alt="Water Analysis"/>
            <div class="svc-body">
              <span class="svc-num">01</span>
              <div class="svc-title">Water Analysis Engineering</div>
              <p class="svc-desc">Water quality instrumentation and treatment process monitoring for municipal and industrial applications.</p>
              <span class="svc-arrow">Explore &rarr;</span>
            </div>
          </div>
          <div class="svc-card" onclick="showPage('services')">
            <img class="svc-img" src="images/services/service-power.jpg" alt="Power Plant"/>
            <div class="svc-body">
              <span class="svc-num">02</span>
              <div class="svc-title">Power Plant Instrumentation</div>
              <p class="svc-desc">Precision measurement and control systems for power generation facilities operating at maximum efficiency.</p>
              <span class="svc-arrow">Explore &rarr;</span>
            </div>
          </div>
          <div class="svc-card" onclick="showPage('services')">
            <img class="svc-img" src="images/services/service-automation.jpg" alt="Automation"/>
            <div class="svc-body">
              <span class="svc-num">03</span>
              <div class="svc-title">Industrial Automation &amp; E&amp;I</div>
              <p class="svc-desc">Full-scope electrical and instrumentation installation with integrated automation for industrial environments.</p>
              <span class="svc-arrow">Explore &rarr;</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Products preview -->
      <div style="margin-top:48px;">
        <div style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:24px;">
          <div>
            <div style="font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#f4640a;margin-bottom:6px;">What We Sell</div>
            <h3 style="font-size:24px;font-weight:700;color:var(--navy,#0b1f3a);font-family:'Syne',sans-serif;margin:0;">Our Products</h3>
          </div>
          <a onclick="showPage('products')" style="font-size:13px;font-weight:600;color:#f4640a;cursor:pointer;white-space:nowrap;">View All Products &rarr;</a>
        </div>
        <div class="svc-grid" id="productsPreviewGrid">
          <div style="text-align:center;padding:40px;border:1.5px dashed #e0e0e0;border-radius:12px;grid-column:1/-1;color:#aaa;">
            <p style="font-size:15px;font-weight:500;color:#0b1f3a;margin-bottom:6px;">No Products Available</p>
            <p style="font-size:13px;">Check back soon.</p>
          </div>
        </div>
      </div>
    </div>`;

  // Scroll animation
  var triggered = false;
  function animate() {
    if (triggered) return;
    triggered = true;
    setTimeout(function(){ var c=document.getElementById('hcc'); if(c){c.classList.remove('ec');c.classList.add('ac');} }, 80);
    setTimeout(function(){ var l=document.getElementById('hcl'); if(l){l.classList.remove('el');l.classList.add('al');} }, 240);
    setTimeout(function(){ var r=document.getElementById('hcr'); if(r){r.classList.remove('er');r.classList.add('ar');} }, 380);
  }

  var obs = window.IntersectionObserver && new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting) animate(); });
  }, { threshold: 0.1 });
  if (obs) obs.observe(document.getElementById('heroStage'));

  window.addEventListener('scroll', function(){
    var el = document.getElementById('heroStage');
    if (!el) return;
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) animate();
    if (rect.top > window.innerHeight * 1.3) {
      triggered = false;
      ['hcc','hcl','hcr'].forEach(function(id){
        var n=document.getElementById(id); if(!n) return;
        n.classList.remove('ac','al','ar');
        if(id==='hcc') n.classList.add('ec');
        else if(id==='hcl') n.classList.add('el');
        else n.classList.add('er');
      });
    }
  });

  setTimeout(animate, 500);

  // Load products
  fetch('/api/products')
    .then(function(r){ return r.json(); })
    .then(function(json){
      var products = json.success ? json.data : [];
      var grid = document.getElementById('productsPreviewGrid');
      if (!grid || !products.length) return;
      var html = '';
      products.slice(0,3).forEach(function(p,i){
        html += '<div class="svc-card" onclick="showPage(\'products\')">' +
          (p.image_path ? '<img class="svc-img" src="'+p.image_path+'" alt="'+p.name+'"/>' :
            '<div style="height:160px;background:linear-gradient(135deg,#f0f2f5,#e0e4ea);display:flex;align-items:center;justify-content:center;font-size:32px;">&#128230;</div>') +
          '<div class="svc-body">' +
          '<span class="svc-num">0'+(i+1)+'</span>' +
          '<div class="svc-title">'+p.name+'</div>' +
          (p.brand ? '<div style="font-size:11px;font-weight:700;letter-spacing:0.1em;color:#f4640a;text-transform:uppercase;margin-bottom:6px;">'+p.brand+'</div>' : '') +
          '<p class="svc-desc">'+(p.description||'')+'</p>' +
          '<span class="svc-arrow">View Product &rarr;</span>' +
          '</div></div>';
      });
      grid.innerHTML = html;
    })
    .catch(function(){});
})();
