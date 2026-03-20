function showPage(page) {
  document.querySelectorAll('.page-section').forEach(function(p) {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  var target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    target.style.display = 'block';
  }
  window.scrollTo(0, 0);
  setTimeout(function() { if (typeof initReveal === 'function') initReveal(); }, 100);
  var mob = document.getElementById('mobileNav');
  if (mob) mob.classList.remove('open');
}
function toggleMobile() {
  document.getElementById('mobileNav').classList.toggle('open');
}
window.addEventListener('scroll', function() {
  var nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});
