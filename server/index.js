// server/index.js — Main Express server for Eland Expert Engineers
require('dotenv').config();

const express    = require('express');
const helmet     = require('helmet');
const cors       = require('cors');
const path       = require('path');
const rateLimit  = require('express-rate-limit');

const contactRouter      = require('./routes/contact');
const enquiriesRouter    = require('./routes/enquiries');
const testimonialsRouter = require('./routes/testimonials');
const projectsRouter     = require('./routes/projects');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Security middleware ────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc:  ["'self'"],
      scriptSrc:   ["'self'", "'unsafe-inline'", "fonts.googleapis.com", "cdn.jsdelivr.net", "cdnjs.cloudflare.com"],
      styleSrc:    ["'self'", "'unsafe-inline'", "fonts.googleapis.com", "fonts.gstatic.com"],
      fontSrc:     ["'self'", "fonts.googleapis.com", "fonts.gstatic.com"],
      imgSrc:      ["'self'", "data:", "https:", "www.google.com", "maps.gstatic.com", "*.googleapis.com"],
      frameSrc:    ["'self'", "https://www.google.com"],
      connectSrc:  ["'self'", "https://api.emailjs.com", "https://wa.me"],
    },
  },
}));

app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://www.eeesa.co.za', 'https://eeesa.co.za']
    : '*',
}));

// ── Rate limiting — protect contact form ──────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 5,                      // max 5 submissions per window
  message: { success: false, message: 'Too many requests. Please try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── Body parsers ───────────────────────────────────────
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ── Serve static frontend ──────────────────────────────
app.use(express.static(path.join(__dirname, '../public'), {
  maxAge: process.env.NODE_ENV === 'production' ? '1d' : 0,
}));

// ── API Routes ─────────────────────────────────────────
app.use('/api/contact',      contactLimiter, contactRouter);
app.use('/api/enquiries',    enquiriesRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/projects',     projectsRouter);

// ── Health check ───────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status:  'ok',
    version: '1.0.0',
    env:     process.env.NODE_ENV || 'development',
    time:    new Date().toISOString(),
  });
});

// ── SPA fallback — serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// ── Error handler ──────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production'
      ? 'Server error. Please try again.'
      : err.message,
  });
});

// ── Start server ───────────────────────────────────────
app.listen(PORT, () => {
  console.log('');
  console.log('  ╔═══════════════════════════════════════════╗');
  console.log('  ║   Eland Expert Engineers — Server Ready   ║');
  console.log('  ╠═══════════════════════════════════════════╣');
  console.log(`  ║   URL:  http://localhost:${PORT}             ║`);
  console.log(`  ║   ENV:  ${(process.env.NODE_ENV || 'development').padEnd(34)}║`);
  console.log('  ╚═══════════════════════════════════════════╝');
  console.log('');
});

module.exports = app;
