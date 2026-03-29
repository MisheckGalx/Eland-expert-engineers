const express  = require('express');
const Database = require('better-sqlite3');
const path     = require('path');
const router   = express.Router();
const db = () => new Database(path.resolve(process.env.DB_PATH || './server/db/eland.db'));

router.get('/', (req, res) => {
  try {
    const d = db();
    const rows = d.prepare('SELECT * FROM enquiries ORDER BY created_at DESC').all();
    d.close();
    res.json({ success: true, data: rows });
  } catch(e) {
    res.status(500).json({ success: false, message: e.message });
  }
});
module.exports = router;
