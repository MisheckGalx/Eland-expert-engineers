// server/routes/projects.js
const express  = require('express');
const Database = require('better-sqlite3');
const path     = require('path');
const router   = express.Router();

function getDb() {
  return new Database(path.resolve(process.env.DB_PATH || './server/db/eland.db'));
}

// GET /api/projects
router.get('/', (req, res) => {
  try {
    const db   = getDb();
    const rows = db.prepare(
      'SELECT * FROM projects WHERE published=1 ORDER BY sort_order'
    ).all();
    db.close();
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
