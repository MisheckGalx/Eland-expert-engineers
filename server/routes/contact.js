const express = require('express');
const nodemailer = require('nodemailer');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const router = express.Router();
function getDb() {
  return new sqlite3.Database(path.resolve(process.env.DB_PATH || './server/db/eland.db'));
}
router.post('/', async (req, res) => {
  const { first_name='', last_name='', company='', email='', phone='', service='', message='' } = req.body;
  if (!email.trim() || !message.trim()) {
    return res.status(400).json({ success: false, message: 'Email and project details are required.' });
  }
  let enquiryId;
  try {
    const db = getDb();
    await new Promise((resolve, reject) => {
      db.run('INSERT INTO enquiries (first_name,last_name,company,email,phone,service,message,ip_address) VALUES (?,?,?,?,?,?,?,?)',
        [first_name.trim(),last_name.trim(),company.trim(),email.trim(),phone.trim(),service.trim(),message.trim(),req.ip||'unknown'],
        function(err) { db.close(); if(err) reject(err); else { enquiryId=this.lastID; resolve(); } });
    });
    console.log('✅ Enquiry #' + enquiryId + ' saved');
  } catch(e) { console.error('DB error:', e.message); }
  res.json({ success: true, message: "Enquiry received! We'll be in touch within 1 business day.", enquiry_id: enquiryId });
});
module.exports = router;
