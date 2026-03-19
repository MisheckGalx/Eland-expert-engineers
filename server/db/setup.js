// server/db/setup.js — Run once to create the database tables
// Usage: node server/db/setup.js

const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

const dbPath = process.env.DB_PATH || './server/db/eland.db';
const dbDir = path.dirname(dbPath);

// Ensure directory exists
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);

// Enable WAL mode for better performance
db.pragma('journal_mode = WAL');

// ── Create tables ──────────────────────────────────────

db.exec(`
  CREATE TABLE IF NOT EXISTS enquiries (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    company     TEXT,
    email       TEXT NOT NULL,
    phone       TEXT,
    service     TEXT,
    message     TEXT NOT NULL,
    ip_address  TEXT,
    status      TEXT DEFAULT 'new',
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS testimonials (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT NOT NULL,
    company     TEXT,
    role        TEXT,
    content     TEXT NOT NULL,
    rating      INTEGER DEFAULT 5,
    approved    INTEGER DEFAULT 1,
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS projects (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    industry    TEXT NOT NULL,
    title       TEXT NOT NULL,
    description TEXT NOT NULL,
    metric      TEXT,
    metric_desc TEXT,
    image_path  TEXT,
    published   INTEGER DEFAULT 1,
    sort_order  INTEGER DEFAULT 0,
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// ── Seed testimonials ──────────────────────────────────

const testimonialCount = db.prepare('SELECT COUNT(*) as c FROM testimonials').get().c;

if (testimonialCount === 0) {
  const insert = db.prepare(`
    INSERT INTO testimonials (name, company, role, content, rating)
    VALUES (?, ?, ?, ?, ?)
  `);

  const testimonials = [
    [
      'Gerhard van Niekerk',
      'Eskom Holdings',
      'Plant Manager',
      'Eland Expert Engineers delivered our turbine instrumentation overhaul on schedule and with zero safety incidents. Their technical depth and single-source accountability made this the smoothest project we\'ve run in years.',
      5
    ],
    [
      'Nomvula Dlamini',
      'Rand Water',
      'Engineering Director',
      'The SCADA upgrade Eland delivered transformed our water treatment operations. Real-time visibility across all our monitoring points — we reduced manual interventions by 40%. Outstanding work.',
      5
    ],
    [
      'Pieter Botha',
      'Anglo American',
      'Project Engineer',
      'We\'ve worked with many E&I contractors. Eland is different — they actually understand our process, not just the wiring. Their obsolete instrumentation support saved us months of downtime.',
      5
    ],
  ];

  for (const t of testimonials) {
    insert.run(...t);
  }
  console.log('✅ Seeded 3 testimonials');
}

// ── Seed projects ──────────────────────────────────────

const projectCount = db.prepare('SELECT COUNT(*) as c FROM projects').get().c;

if (projectCount === 0) {
  const insert = db.prepare(`
    INSERT INTO projects (industry, title, description, metric, metric_desc, sort_order)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const projects = [
    ['Water & Wastewater', 'Municipal SCADA Upgrade', 'Designed and commissioned a full SCADA replacement for a major municipal water treatment facility, integrating 140+ field instruments with a modern HMI control system.', '40%', 'reduction in manual operator interventions', 1],
    ['Power Generation', 'Turbine Instrumentation Overhaul', 'Replaced aging turbine instrumentation systems across four generation units during planned outage periods, restoring full measurement redundancy.', '99.7%', 'plant availability post-commissioning', 2],
    ['Mining', 'E&I Installation — Minerals Processing', 'Full electrical and instrumentation installation for a new minerals processing plant, including all MCC, cable management, field instruments, and commissioning.', '3 Wks', 'ahead of schedule, zero safety incidents', 3],
    ['Water & Wastewater', 'Online Analyser Network', 'Deployed a distributed network of online water quality analysers across 12 monitoring points for continuous effluent compliance monitoring.', '100%', 'regulatory compliance rate achieved', 4],
    ['Power Generation', 'Obsolescence Migration — Boiler Control', 'Phased replacement of a 20-year-old obsolete boiler control system without full plant shutdown.', 'R2.4M', 'replacement cost avoided', 5],
    ['Industrial', 'Labour Supply — Refinery Turnaround', 'Mobilised 34 qualified E&I technicians for a major refinery turnaround over 6 weeks with full compliance management.', '34', 'engineers deployed, zero incidents', 6],
  ];

  for (const p of projects) {
    insert.run(...p);
  }
  console.log('✅ Seeded 6 projects');
}

db.close();
console.log(`✅ Database ready at: ${dbPath}`);
console.log('✅ Tables: enquiries, testimonials, projects');
