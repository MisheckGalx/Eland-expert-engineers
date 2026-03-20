require('dotenv').config();
const express   = require('express');
const cors      = require('cors');
const path      = require('path');
const rateLimit = require('express-rate-limit');

const contactRouter      = require('./routes/contact');
const enquiriesRouter    = require('./routes/enquiries');
const testimonialsRouter = require('./routes/testimonials');
const projectsRouter     = require('./routes/projects');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many requests. Try again in 15 minutes.' }
});

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/contact',      contactLimiter, contactRouter);
app.use('/api/enquiries',    enquiriesRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/projects',     projectsRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', version: '1.0.0', env: process.env.NODE_ENV || 'development' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ success: false, message: err.message });
});

app.listen(PORT, () => {
  console.log('');
  console.log('  ╔═══════════════════════════════════════════╗');
  console.log('  ║   Eland Expert Engineers — Server Ready   ║');
  console.log('  ╠═══════════════════════════════════════════╣');
  console.log('  ║   URL:  http://localhost:' + PORT + '             ║');
  console.log('  ║   ENV:  development                       ║');
  console.log('  ╚═══════════════════════════════════════════╝');
  console.log('');
});

module.exports = app;
