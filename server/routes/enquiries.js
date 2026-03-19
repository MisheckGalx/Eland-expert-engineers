// server/routes/enquiries.js — View saved enquiries (protected)
const express  = require('express');
const Database = require('better-sqlite3');
const path     = require('path');
const router   = express.Router();

function getDb() {
  return new Database(path.resolve(process.env.DB_PATH || './server/db/eland.db'));
}

// Simple token auth — pass ?secret=YOUR_ADMIN_SECRET in URL
function auth(req, res, next) {
  const secret = req.query.secret || req.headers['x-admin-secret'];
  if (!process.env.ADMIN_SECRET || secret === process.env.ADMIN_SECRET) {
    return next();
  }
  res.status(401).json({ success: false, message: 'Unauthorized' });
}

// GET /api/enquiries?secret=xxx — list all enquiries
router.get('/', auth, (req, res) => {
  try {
    const db   = getDb();
    const rows = db.prepare(
      'SELECT id, first_name, last_name, company, email, phone, service, message, status, created_at FROM enquiries ORDER BY created_at DESC'
    ).all();
    db.close();
    res.json({ success: true, count: rows.length, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH /api/enquiries/:id/status — mark as read/resolved
router.patch('/:id/status', auth, (req, res) => {
  const { status } = req.body;
  const allowed = ['new', 'read', 'replied', 'resolved'];
  if (!allowed.includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status' });
  }
  try {
    const db = getDb();
    db.prepare('UPDATE enquiries SET status=? WHERE id=?').run(status, req.params.id);
    db.close();
    res.json({ success: true, message: `Status updated to ${status}` });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
