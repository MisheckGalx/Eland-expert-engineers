const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path    = require('path');
const multer  = require('multer');
const fs      = require('fs');
const router  = express.Router();

const uploadDir = path.join(__dirname, '../../public/images/products');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename:    (req, file, cb) => cb(null, 'product-' + Date.now() + path.extname(file.originalname).toLowerCase())
});

const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    /jpeg|jpg|png|webp/.test(path.extname(file.originalname).toLowerCase()) ? cb(null, true) : cb(new Error('Images only'));
  }
});

const db = () => new sqlite3.Database(path.resolve(process.env.DB_PATH || './server/db/eland.db'));

function checkAuth(req) {
  const admin    = req.body.admin    || req.headers['x-admin'];
  const password = req.body.password || req.headers['x-password'];
  return admin === 'Eland' && password === '007';
}

router.get('/', (req, res) => {
  const d = db();
  d.all('SELECT * FROM products WHERE published=1 ORDER BY sort_order ASC, created_at DESC', (err, rows) => {
    d.close();
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, data: rows });
  });
});

router.post('/', upload.single('image'), (req, res) => {
  if (!checkAuth(req)) return res.status(401).json({ success: false, message: 'Unauthorized' });
  const { name, brand, category, description } = req.body;
  if (!name || !category) return res.status(400).json({ success: false, message: 'Name and category required' });
  const image_path = req.file ? 'images/products/' + req.file.filename : '';
  const d = db();
  d.run('INSERT INTO products (name, brand, category, description, image_path) VALUES (?,?,?,?,?)',
    [name, brand||'', category, description||'', image_path],
    function(err) {
      d.close();
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, id: this.lastID });
    }
  );
});

router.put('/:id', upload.single('image'), (req, res) => {
  if (!checkAuth(req)) return res.status(401).json({ success: false, message: 'Unauthorized' });
  const { name, brand, category, description } = req.body;
  if (!name || !category) return res.status(400).json({ success: false, message: 'Name and category required' });
  const d = db();
  d.get('SELECT image_path FROM products WHERE id=?', [req.params.id], (err, row) => {
    let image_path = row ? row.image_path : '';
    if (req.file) {
      if (image_path) { const old = path.join(__dirname, '../../public', image_path); if (fs.existsSync(old)) fs.unlinkSync(old); }
      image_path = 'images/products/' + req.file.filename;
    }
    d.run('UPDATE products SET name=?, brand=?, category=?, description=?, image_path=? WHERE id=?',
      [name, brand||'', category, description||'', image_path, req.params.id],
      function(err2) {
        d.close();
        if (err2) return res.status(500).json({ success: false, message: err2.message });
        res.json({ success: true });
      }
    );
  });
});

router.delete('/:id', (req, res) => {
  if (!checkAuth(req)) return res.status(401).json({ success: false, message: 'Unauthorized' });
  const d = db();
  d.get('SELECT image_path FROM products WHERE id=?', [req.params.id], (err, row) => {
    if (row && row.image_path) { const f = path.join(__dirname, '../../public', row.image_path); if (fs.existsSync(f)) fs.unlinkSync(f); }
    d.run('DELETE FROM products WHERE id=?', [req.params.id], function(err2) {
      d.close();
      if (err2) return res.status(500).json({ success: false, message: err2.message });
      res.json({ success: true });
    });
  });
});

module.exports = router;
