/* ===== ROUTER — Page Navigation ===== */

function showPage(page) {
  // Hide all pages
  document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));

  // Show target
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-run reveal animations
  setTimeout(initReveal, 100);

  // Close mobile menu if open
  const mob = document.getElementById('mobileNav');
  if (mob) mob.classList.remove('open');
}

// Mobile menu toggle
function toggleMobile() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// Sticky nav on scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});
