# Eland Expert Engineers — Website

## 📁 Project Structure

```
eland-website/
│
├── index.html              ← Open this in your browser
│
├── css/
│   ├── reset.css           ← Base reset styles
│   ├── variables.css       ← All colours, spacing, tokens
│   ├── nav.css             ← Navigation & mobile menu
│   ├── hero.css            ← Hero section
│   ├── sections.css        ← All page sections
│   ├── slider.css          ← Image slider
│   ├── experts.css         ← Team/experts section
│   ├── footer.css          ← Footer
│   ├── animations.css      ← Scroll reveal keyframes
│   └── responsive.css      ← Mobile & tablet breakpoints
│
├── js/
│   ├── router.js           ← Page navigation (showPage)
│   ├── hero.js             ← Hero section builder
│   ├── trust.js            ← Trust strip builder
│   ├── slider.js           ← Image slider logic
│   ├── services-preview.js ← Services grid (home)
│   ├── values.js           ← Values + Industries + Home CTA
│   ├── industries.js       ← (placeholder)
│   ├── experts.js          ← Team section builder ← EDIT YOUR TEAM HERE
│   ├── about.js            ← About page builder
│   ├── services-page.js    ← Services detail page
│   ├── projects.js         ← Projects / case studies
│   ├── careers.js          ← Careers page
│   ├── contact.js          ← Contact page & form
│   ├── animations.js       ← Scroll reveal init
│   └── main.js             ← Entry point
│
└── images/
    ├── hero/               ← Put hero-video.mp4 here
    ├── slider/             ← Put project photos here (slide-01.jpg … slide-06.jpg)
    ├── experts/            ← Put team photos here (firstname.jpg)
    ├── projects/           ← Optional project detail images
    └── icons/              ← Optional custom icons / logo SVG


---

## 🚀 How to Run

Simply open `index.html` in any modern browser. No server required.

For best results use VS Code + Live Server extension.


---

## 🖼️ How to Add Your Hero Video

1. Get an MP4 industrial video (Pexels, Pixabay, or your own footage)
2. Place it at:  `images/hero/hero-video.mp4`
3. Done — the video loads automatically. The fallback gradient shows if no video is found.

Recommended: 1920×1080, compressed to under 10MB for fast loading.


---

## 🖼️ How to Add Slider Images

1. Place 6 photos in `images/slider/`
   - `slide-01.jpg`  (Power Generation)
   - `slide-02.jpg`  (Water Treatment)
   - `slide-03.jpg`  (Mining)
   - `slide-04.jpg`  (Industrial Automation)
   - `slide-05.jpg`  (Obsolescence)
   - `slide-06.jpg`  (Water Analytics)
2. Open `js/slider.js`
3. Find each object in the SLIDES array and set the `img` field:
   ```
   img: 'images/slider/slide-01.jpg',
   ```

---

## 👤 How to Add Expert Photos & Details

1. Place each photo in `images/experts/`  (e.g. `johan.jpg`, `thandi.jpg`, `sipho.jpg`)
2. Open `js/experts.js`
3. Update the EXPERTS array:
   ```js
   {
     photo:    'images/experts/johan.jpg',
     name:     'Your Real Name',
     role:     'Their Title',
     bio:      'Short bio...',
     linkedin: 'https://www.linkedin.com/in/their-profile',
     email:    'their@email.co.za',
   }
   ```
4. Add more objects to add more experts.


---

## 🎨 How to Change Colours / Fonts

Open `css/variables.css` — all colours are defined as CSS variables:

```css
--navy:   #0b1f3a;   ← Dark blue
--orange: #f4640a;   ← Accent orange
--white:  #ffffff;   ← Background white
```

Change any value here and it updates across the entire site instantly.


---

## 📞 Contact Details Location

To update phone, email, address, social links — search for `admin1@eeesa.co.za` and `+27 64 748 2526` across the JS files. They appear in:
- `js/contact.js`
- `js/experts.js`
- `index.html` (footer)


---

## 🌐 Going Live

To publish this website:

1. **Shared Hosting** (Afrihost, Hetzner SA, etc.)
   - Upload entire folder via FTP / cPanel File Manager
   - Done ✓

2. **Netlify (Free)**
   - Drag the `eland-website` folder onto netlify.com/drop
   - Instant live URL ✓

3. **Your own domain** (www.eeesa.co.za)
   - Point DNS A record to your hosting IP
   - Upload files to public_html folder


---

Built for Eland Expert Engineers (Pty) Ltd · www.eeesa.co.za
