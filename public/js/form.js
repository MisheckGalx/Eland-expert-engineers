/* ===== CONTACT FORM — Real backend via /api/contact ===== */
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

window.handleFormSubmit = async function (e) {
  e.preventDefault();
  const btn = document.getElementById('contactSubmitBtn');
  if (!btn) return;
  const form   = btn.closest('div');
  const inputs = form.querySelectorAll('input, select, textarea');
  const data = {
    first_name: inputs[0]?.value?.trim() || '',
    last_name:  inputs[1]?.value?.trim() || '',
    company:    inputs[2]?.value?.trim() || '',
    email:      inputs[3]?.value?.trim() || '',
    phone:      inputs[4]?.value?.trim() || '',
    service:    inputs[5]?.value?.trim() || '',
    message:    inputs[6]?.value?.trim() || '',
  };
  if (!data.email || !data.message) {
    showStatus(btn, 'error', '⚠ Please fill in your email and project details.');
    return;
  }
  setLoading(btn, true);
  try {
    const res  = await fetch('/api/contact', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (res.ok && json.success) {
      showStatus(btn, 'success', '✓ Enquiry sent! We\'ll be in touch within 1 business day.' + (json.enquiry_id ? ' Ref #' + json.enquiry_id : ''));
      clearForm(inputs);
      return;
    }
    throw new Error(json.message || 'Server error');
  } catch {
    if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name: data.first_name + ' ' + data.last_name, from_email: data.email, service: data.service, message: data.message });
        showStatus(btn, 'success', '✓ Enquiry sent! We\'ll be in touch within 1 business day.');
        clearForm(inputs);
      } catch { showStatus(btn, 'error', '✗ Could not send. Please email admin1@eeesa.co.za directly.'); }
    } else {
      showStatus(btn, 'success', '✓ Demo — start server with: npm run dev');
    }
  }
};
function setLoading(btn, loading) { btn.disabled = loading; btn.textContent = loading ? 'Sending…' : 'Send Enquiry →'; }
function showStatus(btn, type, msg) {
  btn.disabled = false; btn.textContent = msg;
  btn.style.background = type === 'success' ? '#166534' : type === 'error' ? '#991b1b' : '';
  setTimeout(() => { btn.textContent = 'Send Enquiry →'; btn.style.background = ''; }, 6000);
}
function clearForm(inputs) { inputs.forEach(f => { if (f.tagName==='SELECT') f.selectedIndex=0; else f.value=''; }); }
