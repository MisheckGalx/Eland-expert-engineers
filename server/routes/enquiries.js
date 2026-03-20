const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const router = express.Router();
function auth(req, res, next) {
  const secret = req.query.secret || req.headers['x-admin-secret'];
  if (!process.env.ADMIN_SECRET || secret === process.env.ADMIN_SECRET) return next();
  res.status(401).json({ success: false, message: 'Unauthorized' });
}
router.get('/', auth, (req, res) => {
  const db = new sqlite3.Database(path.resolve(process.env.DB_PATH || './server/db/eland.db'));
  db.all('SELECT * FROM enquiries ORDER BY created_at DESC', (err, rows) => {
    db.close();
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, count: rows.length, data: rows });
  });
});
module.exports = router;
