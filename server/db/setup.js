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
  db.run(`CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, brand TEXT, category TEXT, description TEXT, published INTEGER DEFAULT 1, sort_order INTEGER DEFAULT 0, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
  db.run(`CREATE TABLE IF NOT EXISTS projects (id INTEGER PRIMARY KEY AUTOINCREMENT, industry TEXT, title TEXT, description TEXT, metric TEXT, metric_desc TEXT, image_path TEXT, published INTEGER DEFAULT 1, sort_order INTEGER DEFAULT 0, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
  db.get('SELECT COUNT(*) as c FROM testimonials', (err, row) => {
    if (row && row.c > 0) return;
    const s = db.prepare('INSERT INTO testimonials (name,company,role,content,rating) VALUES (?,?,?,?,?)');
    s.run('Gerhard van Niekerk','Eskom Holdings','Plant Manager',"Eland delivered our turbine instrumentation overhaul on schedule with zero safety incidents. The smoothest project we've run in years.",5);
    s.run('Nomvula Dlamini','Rand Water','Engineering Director','The SCADA upgrade transformed our operations. Real-time visibility across all monitoring points — manual interventions reduced by 40%.',5);
    s.run('Pieter Botha','Anglo American','Project Engineer',"Eland is different — they understand our process, not just the wiring. Their obsolete instrumentation support saved us months of downtime.",5);
    s.finalize(); console.log('✅ Seeded testimonials');
  });
  db.get('SELECT COUNT(*) as c FROM projects', (err, row) => {
    if (row && row.c > 0) return;
    const s = db.prepare('INSERT INTO projects (industry,title,description,metric,metric_desc,sort_order) VALUES (?,?,?,?,?,?)');
    s.run('Water & Wastewater','Municipal SCADA Upgrade','Full SCADA replacement integrating 140+ field instruments with modern HMI.','40%','reduction in manual interventions',1);
    s.run('Power Generation','Turbine Instrumentation Overhaul','Replaced aging turbine instrumentation across four generation units.','99.7%','plant availability post-commissioning',2);
    s.run('Mining','E&I Installation','Full E&I installation including MCC, cable management and commissioning.','3 Wks','ahead of schedule, zero incidents',3);
    s.finalize(); console.log('✅ Seeded projects');
  });
});
setTimeout(() => { db.close(); console.log('✅ Database ready at: ' + dbPath); }, 800);
