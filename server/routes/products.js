const express  = require('express');
const Database = require('better-sqlite3');
const path     = require('path');
const multer   = require('multer');
const fs       = require('fs');
const router   = express.Router();

const uploadDir = path.join(__dirname, '../../public/images/products');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename:    (req, file, cb) => cb(null, 'product-' + Date.now() + path.extname(file.originalname).toLowerCase())
});
const upload = multer({ storage, limits: { fileSize: 15 * 1024 * 1024 } });
const db = () => new Database(path.resolve(process.env.DB_PATH || './server/db/eland.db'));

function checkAuth(req) {
  const admin    = req.body.admin    || req.headers['x-admin'];
  const password = req.body.password || req.headers['x-password'];
  return admin === 'Eland' && password === '007';
}

router.get('/', (req, res) => {
  try {
    const d = db();
    const rows = d.prepare('SELECT * FROM products WHERE published=1 ORDER BY sort_order ASC, created_at DESC').all();
    d.close();
    res.json({ success: true, data: rows });
  } catch(e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

router.post('/', upload.single('image'), (req, res) => {
  if (!checkAuth(req)) return res.status(401).json({ success: false, message: 'Unauthorized' });
  const { name, brand, category, description } = req.body;
  if (!name || !category) return res.status(400).json({ success: false, message: 'Name and category required' });
  const image_path = req.file ? 'images/products/' + req.file.filename : '';
  try {
    const d = db();
    const result = d.prepare('INSERT INTO products (name,brand,category,description,image_path) VALUES (?,?,?,?,?)')
      .run(name, brand||'', category, description||'', image_path);
    d.close();
    res.json({ success: true, id: result.lastInsertRowid });
  } catch(e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

router.delete('/:id', (req, res) => {
  if (!checkAuth(req)) return res.status(401).json({ success: false, message: 'Unauthorized' });
  try {
    const d = db();
    const row = d.prepare('SELECT image_path FROM products WHERE id=?').get(req.params.id);
    if (row && row.image_path) {
      const imgFile = path.join(__dirname, '../../public', row.image_path);
      if (fs.existsSync(imgFile)) fs.unlinkSync(imgFile);
    }
    d.prepare('DELETE FROM products WHERE id=?').run(req.params.id);
    d.close();
    res.json({ success: true });
  } catch(e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

module.exports = router;
