(function() {
  var loader = document.createElement('div');
  loader.id = 'site-loader';
  loader.innerHTML = `
    <div class="loader-inner">
      <img src="images/logo.png" alt="Eland Expert Engineers" class="loader-logo"/>
      <div class="loader-bar"><div class="loader-fill"></div></div>
      <p class="loader-text">ENGINEERING EXCELLENCE</p>
    </div>`;
  document.body.prepend(loader);

  var style = document.createElement('style');
  style.textContent = `
    #site-loader {
      position:fixed;inset:0;z-index:99999;
      background:#0b1f3a;
      display:flex;align-items:center;justify-content:center;
      transition:opacity 0.6s ease, visibility 0.6s ease;
    }
    #site-loader.hide { opacity:0;visibility:hidden; }
    .loader-inner { text-align:center;display:flex;flex-direction:column;align-items:center;gap:24px; }
    .loader-logo {
      width:180px;height:auto;
      animation:logoPulse 1.2s ease-in-out infinite alternate;
    }
    @keyframes logoPulse {
      from { opacity:0.7;transform:scale(0.97); }
      to   { opacity:1;transform:scale(1.03); }
    }
    .loader-bar {
      width:160px;height:2px;
      background:rgba(255,255,255,0.1);
      border-radius:2px;overflow:hidden;
    }
    .loader-fill {
      height:100%;width:0%;
      background:linear-gradient(90deg,#f4640a,#fbbf24);
      border-radius:2px;
      animation:loadFill 1.8s ease forwards;
    }
    @keyframes loadFill { to { width:100%; } }
    .loader-text {
      font-size:10px;letter-spacing:0.3em;
      color:rgba(255,255,255,0.35);
      font-family:'Segoe UI',sans-serif;
      font-weight:600;
    }
  `;
  document.head.appendChild(style);

  window.addEventListener('load', function() {
    setTimeout(function() {
      loader.classList.add('hide');
      setTimeout(function(){ loader.remove(); }, 700);
    }, 2000);
  });
})();
