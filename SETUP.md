# STERLIAN Website - Quick Setup Guide

## ✅ What's Been Created

Your complete STERLIAN website is ready! Here's what you have:

### Core Files:
- ✅ `index.html` - Main website structure
- ✅ `styles.css` - Complete styling with branding colors
- ✅ `app.js` - Interactive functionality
- ✅ `translations.js` - Multi-language support (EN, IT, ES, FR)

### Assets:
- ✅ `assets/logo.svg` - STERLIAN logo (placeholder)
- ✅ `assets/zap-studio-logo.svg` - Zap Studio logo (placeholder)

## 🚀 How to Run the Site

### Method 1: Direct Opening (Simplest)
1. Navigate to the `main-site` folder
2. Double-click `index.html`
3. The site will open in your default browser

### Method 2: Local Server (Recommended)

**Using Python:**
```bash
cd d:\Personal\source\main-site
python -m http.server 8000
```
Then open: http://localhost:8000

**Using Node.js:**
```bash
cd d:\Personal\source\main-site
npx http-server -p 8000
```
Then open: http://localhost:8000

**Using PHP:**
```bash
cd d:\Personal\source\main-site
php -S localhost:8000
```
Then open: http://localhost:8000

## 📝 What You Need to Supply

### 1. Logos (Replace Placeholders)
- **Main Logo:** Replace `assets/logo.svg` with your STERLIAN logo
- **Product Logo:** Replace `assets/zap-studio-logo.svg` with Zap Studio logo
- Supported formats: SVG (recommended), PNG, JPG

### 2. Product Screenshots
- Add 3 screenshots to the Zap Studio gallery section
- Update the gallery placeholders in `index.html` (search for "gallery-placeholder")

### 3. Legal Information
- **Partita IVA:** Update in footer (search for `[placeholder]` in `index.html`)

### 4. Contact Email (Optional)
- Update `contact@sterlian.com` in the contact section if different

### 5. Payment Integration (When Ready)
- Connect "Purchase Now" and "Get Zap Studio" buttons to your payment system
- Update button actions in `app.js`

## 🎨 Customization Tips

### Change Colors:
Edit `styles.css` at the top (`:root` section):
```css
--primary: #1A73E8;        /* Your primary color */
--accent: #FFB300;         /* Your accent color */
```

### Update Text:
Edit `translations.js` - all content is organized by language and section

### Add New Sections:
1. Add HTML in `index.html`
2. Add styles in `styles.css`
3. Add translations in `translations.js`

## ✨ Features Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Multi-language support (EN, IT, ES, FR)
- ✅ Collapsible Zap Studio product section
- ✅ Smooth scroll navigation
- ✅ FAQ accordion
- ✅ Contact form (client-side)
- ✅ Language preference saved in browser
- ✅ Modern animations and transitions
- ✅ SEO-friendly structure

## 🔧 No Installation Required

The site uses:
- Pure HTML, CSS, JavaScript
- No build process
- No npm packages
- No frameworks
- Only external dependency: Google Fonts (Inter, JetBrains Mono)

## 📱 Testing Checklist

- [ ] Open site in browser
- [ ] Test language switcher (EN, IT, ES, FR)
- [ ] Test mobile menu (resize browser)
- [ ] Expand/collapse Zap Studio section
- [ ] Test FAQ accordion
- [ ] Test contact form
- [ ] Check all navigation links
- [ ] Verify on mobile device

## 🌐 Deployment Options

### Option 1: Static Hosting (Recommended)
- **Netlify:** Drag & drop the folder
- **Vercel:** Connect to Git repository
- **GitHub Pages:** Push to GitHub and enable Pages
- **Cloudflare Pages:** Direct upload

### Option 2: Traditional Hosting
- Upload all files via FTP
- Ensure `index.html` is in root directory
- No server-side requirements

## 📞 Next Steps

1. **Test Locally** - Run the site and verify everything works
2. **Replace Logos** - Add your actual logo files
3. **Update Content** - Customize text if needed
4. **Add Screenshots** - Replace gallery placeholders
5. **Update Legal Info** - Add your Partita IVA
6. **Deploy** - Choose a hosting option and go live!

---

**Questions or Issues?**
All code is well-commented and modular for easy customization.
Check `README.md` for detailed documentation.
