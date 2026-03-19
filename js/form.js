/* ===== REAL CONTACT FORM — powered by EmailJS (free tier) =====
 *
 * HOW TO SET UP (5 minutes, free):
 * ─────────────────────────────────────────────────────────────
 * 1. Go to https://www.emailjs.com and create a free account
 *
 * 2. Add an Email Service:
 *    Dashboard → Email Services → Add New Service
 *    Choose Gmail (or any other provider)
 *    Connect your email account
 *    Copy the SERVICE ID  → paste below as EMAILJS_SERVICE_ID
 *
 * 3. Create an Email Template:
 *    Dashboard → Email Templates → Create New Template
 *    Use these variables in your template:
 *      {{from_name}}     ← sender's full name
 *      {{from_email}}    ← sender's email
 *      {{from_company}}  ← sender's company
 *      {{from_phone}}    ← sender's phone
 *      {{service}}       ← service of interest
 *      {{message}}       ← project details
 *    Copy the TEMPLATE ID → paste below as EMAILJS_TEMPLATE_ID
 *
 * 4. Get your Public Key:
 *    Dashboard → Account → General → Public Key
 *    Paste below as EMAILJS_PUBLIC_KEY
 *
 * 5. That's it — forms will email admin1@eeesa.co.za on submit!
 * ─────────────────────────────────────────────────────────────
 */

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // ← paste here
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // ← paste here
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // ← paste here

/* Load EmailJS SDK */
(function loadEmailJS() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  script.onload = () => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    console.log('EmailJS ready ✓');
  };
  document.head.appendChild(script);
})();


/* ── Form submission ── */
window.handleFormSubmit = function (e) {
  e.preventDefault();

  const btn = document.getElementById('contactSubmitBtn');
  if (!btn) return;

  /* Collect field values */
  const fields   = btn.closest('div').querySelectorAll('input, select, textarea');
  const getValue = (placeholder) => {
    for (const f of fields) {
      if (f.placeholder === placeholder || f.tagName === 'SELECT') {
        if (f.tagName === 'SELECT') continue;
        if (f.placeholder === placeholder) return f.value.trim();
      }
    }
    return '';
  };

  /* Build params object matching your EmailJS template variables */
  const allInputs = Array.from(fields);
  const params = {
    from_name:    (allInputs[0]?.value || '') + ' ' + (allInputs[1]?.value || ''),
    from_company: allInputs[2]?.value  || '',
    from_email:   allInputs[3]?.value  || '',
    from_phone:   allInputs[4]?.value  || '',
    service:      allInputs[5]?.value  || 'Not specified',
    message:      allInputs[6]?.value  || '',
  };

  /* Basic validation */
  if (!params.from_email || !params.message) {
    showFormStatus(btn, 'error', '⚠ Please fill in your email and project details.');
    return;
  }

  /* Check keys are configured */
  if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    /* Demo mode — show success without sending */
    simulateSuccess(btn, params);
    return;
  }

  /* Send via EmailJS */
  showFormStatus(btn, 'loading', 'Sending…');

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
    .then(() => {
      showFormStatus(btn, 'success', '✓ Enquiry sent! We\'ll be in touch within 1 business day.');
      clearForm(fields);
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      showFormStatus(btn, 'error', '✗ Something went wrong. Please email us directly at admin1@eeesa.co.za');
    });
};


/* ── Helpers ── */

function showFormStatus(btn, type, message) {
  btn.textContent = message;
  btn.disabled = (type === 'loading');

  const colors = {
    loading: 'var(--navy)',
    success: '#166534',
    error:   '#991b1b',
  };

  btn.style.background = colors[type] || 'var(--navy)';

  if (type === 'success') {
    setTimeout(() => resetBtn(btn), 6000);
  } else if (type === 'error') {
    setTimeout(() => resetBtn(btn), 5000);
  }
}

function resetBtn(btn) {
  btn.textContent = 'Send Enquiry →';
  btn.style.background = '';
  btn.disabled = false;
}

function clearForm(fields) {
  fields.forEach(f => {
    if (f.tagName === 'SELECT') f.selectedIndex = 0;
    else f.value = '';
  });
}

function simulateSuccess(btn, params) {
  showFormStatus(btn, 'loading', 'Sending…');
  setTimeout(() => {
    console.log('📧 [Demo mode] Would send:', params);
    showFormStatus(btn, 'success',
      '✓ Demo mode — add your EmailJS keys in js/form.js to send real emails.');
  }, 1200);
}
