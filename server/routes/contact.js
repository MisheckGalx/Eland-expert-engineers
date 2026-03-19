// server/routes/contact.js — Real email sending + DB save
const express    = require('express');
const nodemailer = require('nodemailer');
const Database   = require('better-sqlite3');
const path       = require('path');

const router = express.Router();

// ── DB connection ──────────────────────────────────────
function getDb() {
  const dbPath = process.env.DB_PATH || './server/db/eland.db';
  return new Database(path.resolve(dbPath));
}

// ── Email transporter ──────────────────────────────────
function createTransporter() {
  return nodemailer.createTransport({
    host:   process.env.EMAIL_HOST || 'smtp.gmail.com',
    port:   parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

// ── Validation ─────────────────────────────────────────
function validateEnquiry(body) {
  const errors = [];
  if (!body.first_name?.trim()) errors.push('First name is required');
  if (!body.last_name?.trim())  errors.push('Last name is required');
  if (!body.email?.trim())      errors.push('Email is required');
  if (!body.message?.trim())    errors.push('Project details are required');

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (body.email && !emailRx.test(body.email)) errors.push('Invalid email address');

  if (body.message && body.message.trim().length < 10) errors.push('Please provide more detail about your project');

  return errors;
}

// ── POST /api/contact ──────────────────────────────────
router.post('/', async (req, res) => {
  const {
    first_name, last_name, company = '',
    email, phone = '', service = '', message,
  } = req.body;

  // Validate
  const errors = validateEnquiry(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: errors[0], errors });
  }

  const fullName = `${first_name.trim()} ${last_name.trim()}`;

  // ── 1. Save to database ──────────────────────────────
  let enquiryId;
  try {
    const db = getDb();
    const result = db.prepare(`
      INSERT INTO enquiries
        (first_name, last_name, company, email, phone, service, message, ip_address)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      first_name.trim(), last_name.trim(),
      company.trim(), email.trim(),
      phone.trim(), service.trim(),
      message.trim(),
      req.ip || req.connection.remoteAddress || 'unknown'
    );
    enquiryId = result.lastInsertRowid;
    db.close();
    console.log(`✅ Enquiry #${enquiryId} saved to database`);
  } catch (dbErr) {
    console.error('DB error:', dbErr.message);
    // Continue even if DB fails — still try to send email
  }

  // ── 2. Send notification email ───────────────────────
  let emailSent = false;

  if (process.env.EMAIL_USER && process.env.EMAIL_PASS &&
      process.env.EMAIL_PASS !== 'your_gmail_app_password_here') {
    try {
      const transporter = createTransporter();

      // Email to Eland
      await transporter.sendMail({
        from:    process.env.EMAIL_FROM || `"Eland Website" <${process.env.EMAIL_USER}>`,
        to:      process.env.EMAIL_TO   || process.env.EMAIL_USER,
        subject: `New Enquiry #${enquiryId || 'N/A'} — ${service || 'General'} — ${fullName}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#0b1f3a;padding:24px;border-radius:8px 8px 0 0">
              <h1 style="color:#fff;font-size:20px;margin:0">New Website Enquiry</h1>
              <p style="color:#f4640a;margin:4px 0 0;font-size:13px">Eland Expert Engineers</p>
            </div>
            <div style="border:1px solid #e2e6ed;border-top:none;padding:24px;border-radius:0 0 8px 8px">
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:8px 0;color:#6b7280;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${fullName}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280">Company</td><td style="padding:8px 0">${company || '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:8px 0;color:#6b7280">Phone</td><td style="padding:8px 0">${phone || '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280">Service</td><td style="padding:8px 0">${service || '—'}</td></tr>
              </table>
              <div style="background:#f7f8fa;border-radius:6px;padding:16px;margin-top:16px">
                <p style="font-size:12px;color:#6b7280;margin:0 0 8px;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Project Details</p>
                <p style="margin:0;line-height:1.6;font-size:14px">${message.replace(/\n/g, '<br>')}</p>
              </div>
              <div style="margin-top:20px;padding-top:16px;border-top:1px solid #e2e6ed;font-size:12px;color:#9ca3af">
                Enquiry #${enquiryId || 'N/A'} · Received ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })} SAST
              </div>
            </div>
          </div>
        `,
      });

      // Auto-reply to client
      await transporter.sendMail({
        from:    process.env.EMAIL_FROM || `"Eland Expert Engineers" <${process.env.EMAIL_USER}>`,
        to:      email,
        subject: 'Thank you for contacting Eland Expert Engineers',
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#0b1f3a;padding:24px;border-radius:8px 8px 0 0">
              <h1 style="color:#fff;font-size:20px;margin:0">Thank You, ${first_name}</h1>
              <p style="color:#f4640a;margin:4px 0 0;font-size:13px">We've received your enquiry</p>
            </div>
            <div style="border:1px solid #e2e6ed;border-top:none;padding:24px;border-radius:0 0 8px 8px">
              <p style="font-size:15px;line-height:1.7;color:#374151">
                Thank you for reaching out to <strong>Eland Expert Engineers</strong>.
                We've received your enquiry regarding <strong>${service || 'our engineering services'}</strong>
                and one of our engineers will be in touch within <strong>1 business day</strong>.
              </p>
              <p style="font-size:14px;color:#6b7280;line-height:1.7">
                In the meantime, feel free to call us directly:<br>
                <strong style="color:#0b1f3a">+27 64 748 2526</strong>
              </p>
              <div style="margin-top:24px;padding:16px;background:#f7f8fa;border-radius:6px;font-size:13px;color:#6b7280">
                <strong>Eland Expert Engineers (Pty) Ltd</strong><br>
                45 Annie Road, Fontainebleau, Randburg, 2194<br>
                admin1@eeesa.co.za · www.eeesa.co.za
              </div>
            </div>
          </div>
        `,
      });

      emailSent = true;
      console.log(`✅ Emails sent for enquiry #${enquiryId}`);
    } catch (emailErr) {
      console.error('Email error:', emailErr.message);
      // Don't fail the request — enquiry is saved in DB
    }
  } else {
    console.log('ℹ️  Email not configured — enquiry saved to DB only');
    console.log('   Add EMAIL_USER and EMAIL_PASS to .env to enable emails');
  }

  // ── 3. Respond to client ─────────────────────────────
  res.json({
    success: true,
    message: 'Enquiry received! We\'ll be in touch within 1 business day.',
    enquiry_id: enquiryId,
    email_sent: emailSent,
  });
});

module.exports = router;
