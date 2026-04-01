const express  = require('express');
const Database = require('better-sqlite3');
const path     = require('path');
const router   = express.Router();
const db = () => new Database(path.resolve(process.env.DB_PATH || './server/db/eland.db'));

router.post('/', (req, res) => {
  const { first_name, last_name, company, email, phone, service, message } = req.body;
  if (!email || !message) return res.status(400).json({ success: false, message: 'Email and message required' });
  try {
    const d = db();
    d.prepare('INSERT INTO enquiries (first_name,last_name,company,email,phone,service,message,ip_address) VALUES (?,?,?,?,?,?,?,?)')
      .run(first_name||'', last_name||'', company||'', email, phone||'', service||'', message, req.ip||'');
    d.close();
    res.json({ success: true, message: 'Enquiry received' });
  } catch(e) {
    res.status(500).json({ success: false, message: e.message });
  }
});
module.exports = router;
