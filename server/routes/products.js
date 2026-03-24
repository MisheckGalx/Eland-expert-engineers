const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path    = require('path');
const router  = express.Router();

const db = () => new sqlite3.Database(path.resolve(process.env.DB_PATH || './server/db/eland.db'));

// GET all products
router.get('/', (req, res) => {
  const d = db();
  d.all('SELECT * FROM products WHERE published=1 ORDER BY sort_order, created_at DESC', (err, rows) => {
    d.close();
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, data: rows });
  });
});

// POST add product (admin)
router.post('/', (req, res) => {
  const { name, brand, category, description, admin, password } = req.body;
  if (admin !== 'Eland' || password !== '007')
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  if (!name || !category)
    return res.status(400).json({ success: false, message: 'Name and category required' });
  const d = db();
  d.run('INSERT INTO products (name, brand, category, description) VALUES (?,?,?,?)',
    [name, brand || '', category, description || ''],
    function(err) {
      d.close();
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, id: this.lastID });
    }
  );
});

// DELETE product (admin)
router.delete('/:id', (req, res) => {
  const { admin, password } = req.body;
  if (admin !== 'Eland' || password !== '007')
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  const d = db();
  d.run('DELETE FROM products WHERE id=?', [req.params.id], function(err) {
    d.close();
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true });
  });
});

module.exports = router;
