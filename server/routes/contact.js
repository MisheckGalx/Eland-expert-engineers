const express    = require('express');
const nodemailer = require('nodemailer');
const sqlite3    = require('sqlite3').verbose();
const path       = require('path');
const router     = express.Router();

function getDb() {
  return new sqlite3.Database(path.resolve(process.env.DB_PATH || './server/db/eland.db'));
}

/* ── Email transporter ── */
function createTransporter() {
  return nodemailer.createTransport({
    host:   process.env.EMAIL_HOST  || 'smtp.gmail.com',
    port:   parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

router.post('/', async (req, res) => {
  const {
    first_name = '', last_name = '', company = '',
    email = '', phone = '', service = '', message = ''
  } = req.body;

  if (!email.trim() || !message.trim()) {
    return res.status(400).json({ success: false, message: 'Email and project details are required.' });
  }

  /* ── 1. Save to database ── */
  let enquiryId;
  try {
    const db = getDb();
    await new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO enquiries (first_name,last_name,company,email,phone,service,message,ip_address) VALUES (?,?,?,?,?,?,?,?)',
        [first_name.trim(), last_name.trim(), company.trim(), email.trim(), phone.trim(), service.trim(), message.trim(), req.ip || 'unknown'],
        function (err) { db.close(); if (err) reject(err); else { enquiryId = this.lastID; resolve(); } }
      );
    });
    console.log('✅ Enquiry #' + enquiryId + ' saved to DB');
  } catch (e) {
    console.error('DB error:', e.message);
  }

  /* ── 2. Send email to info@elandexpertengineers.com ── */
  try {
    const transporter = createTransporter();
    const fullName    = [first_name.trim(), last_name.trim()].filter(Boolean).join(' ') || 'Unknown';

    /* Email to the company — notification */
    await transporter.sendMail({
      from:    process.env.EMAIL_FROM || 'Eland Expert Engineers <info@elandexpertengineers.com>',
      to:      process.env.EMAIL_TO   || 'info@elandexpertengineers.com',
      replyTo: email.trim(),
      subject: `New Enquiry from ${fullName}${company.trim() ? ' — ' + company.trim() : ''} | Ref #${enquiryId || 'N/A'}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f5f5f7;padding:32px 24px;">
          <div style="background:#0b1f3a;padding:24px 28px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;font-size:20px;margin:0;font-weight:700;">New Website Enquiry</h1>
            <p style="color:rgba(255,255,255,0.5);font-size:13px;margin:6px 0 0;">Ref #${enquiryId || 'N/A'} · elandexpertengineers.com</p>
          </div>
          <div style="background:#fff;padding:28px;border-radius:0 0 12px 12px;border:1px solid #e8e8ed;border-top:none;">

            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;width:140px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:15px;color:#1d1d1f;font-weight:600;">${fullName}</td>
              </tr>
              ${company.trim() ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Company</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:15px;color:#1d1d1f;">${company.trim()}</td>
              </tr>` : ''}
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:15px;"><a href="mailto:${email.trim()}" style="color:#0071e3;">${email.trim()}</a></td>
              </tr>
              ${phone.trim() ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:15px;"><a href="tel:${phone.trim()}" style="color:#0071e3;">${phone.trim()}</a></td>
              </tr>` : ''}
              ${service.trim() ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Service</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:15px;color:#1d1d1f;">${service.trim()}</td>
              </tr>` : ''}
            </table>

            <div style="background:#f5f5f7;border-radius:10px;padding:20px;border-left:4px solid #0071e3;">
              <p style="font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 10px;">Project Details</p>
              <p style="font-size:15px;color:#1d1d1f;line-height:1.7;margin:0;">${message.trim().replace(/\n/g, '<br>')}</p>
            </div>

            <div style="margin-top:24px;padding-top:20px;border-top:1px solid #f0f0f0;display:flex;gap:12px;">
              <a href="mailto:${email.trim()}?subject=Re: Your enquiry to Eland Expert Engineers"
                 style="background:#0b1f3a;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:600;">
                Reply to ${fullName}
              </a>
              ${phone.trim() ? `<a href="tel:${phone.trim()}" style="background:#25D366;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:600;">Call Now</a>` : ''}
            </div>

          </div>
          <p style="text-align:center;font-size:12px;color:#aaa;margin-top:16px;">Eland Expert Engineers · elandexpertengineers.com</p>
        </div>
      `,
    });

    /* Auto-reply to the client */
    await transporter.sendMail({
      from:    process.env.EMAIL_FROM || 'Eland Expert Engineers <info@elandexpertengineers.com>',
      to:      email.trim(),
      subject: `We received your enquiry — Eland Expert Engineers`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f5f5f7;padding:32px 24px;">
          <div style="background:#0b1f3a;padding:24px 28px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;font-size:20px;margin:0;font-weight:700;">Thank you, ${first_name.trim() || 'there'}!</h1>
            <p style="color:rgba(255,255,255,0.5);font-size:13px;margin:6px 0 0;">Eland Expert Engineers</p>
          </div>
          <div style="background:#fff;padding:28px;border-radius:0 0 12px 12px;border:1px solid #e8e8ed;border-top:none;">
            <p style="font-size:15px;color:#1d1d1f;line-height:1.75;">
              We have received your enquiry and our engineering team will get back to you
              <strong>within one business day.</strong>
            </p>
            <p style="font-size:15px;color:#1d1d1f;line-height:1.75;">
              If your matter is urgent, please call us directly at
              <a href="tel:+27647482526" style="color:#0071e3;font-weight:600;">+27 64 748 2526</a>.
            </p>
            <div style="background:#f5f5f7;border-radius:10px;padding:20px;margin:24px 0;">
              <p style="font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px;">Your message</p>
              <p style="font-size:14px;color:#555;line-height:1.7;margin:0;">${message.trim().replace(/\n/g, '<br>')}</p>
            </div>
            <p style="font-size:13px;color:#888;">
              Best regards,<br>
              <strong style="color:#1d1d1f;">Eland Expert Engineers (Pty) Ltd</strong><br>
              45 Annie Road, Fontainebleau, Randburg, 2194<br>
              <a href="https://elandexpertengineers.com" style="color:#0071e3;">elandexpertengineers.com</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log('✅ Emails sent for enquiry #' + enquiryId);
  } catch (emailErr) {
    console.error('Email error:', emailErr.message);
    /* Still return success — enquiry was saved to DB */
  }

  res.json({
    success: true,
    message: "Enquiry received! We'll be in touch within 1 business day.",
    enquiry_id: enquiryId,
  });
});

module.exports = router;
