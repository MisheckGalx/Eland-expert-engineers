const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const router = express.Router();
router.get('/', (req, res) => {
  const db = new sqlite3.Database(path.resolve(process.env.DB_PATH || './server/db/eland.db'));
  db.all('SELECT id,name,company,role,content,rating FROM testimonials WHERE approved=1 ORDER BY id', (err, rows) => {
    db.close();
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, data: rows });
  });
});
module.exports = router;
