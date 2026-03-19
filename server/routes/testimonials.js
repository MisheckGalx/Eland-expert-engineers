// server/routes/testimonials.js
const express  = require('express');
const Database = require('better-sqlite3');
const path     = require('path');
const router   = express.Router();

function getDb() {
  return new Database(path.resolve(process.env.DB_PATH || './server/db/eland.db'));
}

// GET /api/testimonials — returns all approved testimonials
router.get('/', (req, res) => {
  try {
    const db = getDb();
    const rows = db.prepare(
      'SELECT id, name, company, role, content, rating FROM testimonials WHERE approved=1 ORDER BY id'
    ).all();
    db.close();
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
