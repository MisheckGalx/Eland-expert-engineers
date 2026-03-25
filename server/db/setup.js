require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const dbPath = process.env.DB_PATH || './server/db/eland.db';
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });
const db = new sqlite3.Database(dbPath);
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS enquiries (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, company TEXT, email TEXT NOT NULL, phone TEXT, service TEXT, message TEXT NOT NULL, ip_address TEXT, status TEXT DEFAULT 'new', created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
  db.run(`CREATE TABLE IF NOT EXISTS testimonials (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, company TEXT, role TEXT, content TEXT NOT NULL, rating INTEGER DEFAULT 5, approved INTEGER DEFAULT 1, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
  db.run(`CREATE TABLE IF NOT EXISTS projects (id INTEGER PRIMARY KEY AUTOINCREMENT, industry TEXT, title TEXT, description TEXT, metric TEXT, metric_desc TEXT, image_path TEXT, published INTEGER DEFAULT 1, sort_order INTEGER DEFAULT 0, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
  db.run(`CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, brand TEXT, category TEXT, description TEXT, image_path TEXT, published INTEGER DEFAULT 1, sort_order INTEGER DEFAULT 0, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
});
setTimeout(() => { db.close(); console.log('✅ Database ready at: ' + dbPath); }, 800);
