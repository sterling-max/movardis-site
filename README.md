# STERLIAN - Company Website

Modern, responsive Single Page Application (SPA) for STERLIAN software company.

## 🎯 Features

- **Fully Modular Design** - Each section is a reusable component
- **Multi-language Support** - EN, IT, ES, FR with i18n structure
- **Collapsible Product Section** - Expandable Zap Studio showcase
- **Privacy-First** - No tracking, no external dependencies
- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional, and fast

## 🎨 Branding

### Color Palette
- **Primary:** #1A73E8 (Sterlian Blue)
- **Primary Dark:** #0F4FA8
- **Primary Light:** #E8F1FD
- **Accent:** #FFB300 (Warm Amber)
- **Neutral Dark:** #1C1C1E
- **Neutral Medium:** #3A3A3C
- **Neutral Light:** #F2F2F7

### Typography
- **Headings:** Inter, SemiBold
- **Body Text:** Inter, Regular
- **Monospace:** JetBrains Mono

## 📁 Project Structure

```
main-site/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling
├── app.js              # Application logic
├── translations.js     # Multi-language translations
├── assets/
│   ├── logo.svg        # STERLIAN logo (placeholder)
│   └── zap-studio-logo.svg  # Zap Studio logo (placeholder)
├── PROJECT.md          # Project specification
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Direct File Opening
Simply open `index.html` in your web browser. No server required!

### Option 2: Local Development Server (Recommended)

Using Python:
```bash
python -m http.server 8000
```

Using Node.js (http-server):
```bash
npx http-server -p 8000
```

Using PHP:
```bash
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 📋 Sections

1. **Hero Section** - Main landing with CTAs
2. **About STERLIAN** - Company introduction
3. **Zap Studio** - Collapsible product showcase
4. **How It Works** - 3-step process
5. **Key Features** - Core value propositions
6. **Use Cases** - Target audiences
7. **Testimonials** - Customer feedback
8. **Pricing** - Simple licensing model
9. **FAQ** - Common questions
10. **Contact** - Contact form and info
11. **Footer** - Links and legal info

## 🌍 Language Support

The site supports 4 languages:
- 🇬🇧 English (EN) - Default
- 🇮🇹 Italian (IT)
- 🇪🇸 Spanish (ES)
- 🇫🇷 French (FR)

Language preference is saved in localStorage.

## 🎨 Customization

### Replace Placeholder Logos

Replace these files with your actual logos:
- `assets/logo.svg` - Main STERLIAN logo
- `assets/zap-studio-logo.svg` - Zap Studio product logo

### Update Content

All text content is in `translations.js`. Edit the translation keys to update content.

### Modify Colors

Update CSS variables in `styles.css` under the `:root` selector.

### Add New Sections

1. Add HTML structure in `index.html`
2. Add styling in `styles.css`
3. Add translations in `translations.js`
4. Add any interactive logic in `app.js`

## 📦 What You Need to Run the Site

### Minimum Requirements:
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required for basic functionality

### Recommended for Development:
- Local web server (Python, Node.js, or PHP)
- Code editor (VS Code, Sublime Text, etc.)

### Assets to Supply:
1. **STERLIAN Logo** - Replace `assets/logo.svg`
2. **Zap Studio Logo** - Replace `assets/zap-studio-logo.svg`
3. **Product Screenshots** - Add to gallery placeholders
4. **Partita IVA** - Update in footer (search for `[placeholder]`)

### Optional Enhancements:
- Contact form backend (currently client-side only)
- Analytics (if desired, though privacy-first)
- Payment integration for "Purchase Now" buttons
- Blog or news section

## 🔧 Technical Details

- **No Build Process** - Pure HTML, CSS, JavaScript
- **No Dependencies** - Self-contained, no npm/node_modules
- **No Frameworks** - Vanilla JavaScript for maximum performance
- **Google Fonts** - Only external resource (Inter, JetBrains Mono)
- **SEO Ready** - Proper meta tags and semantic HTML
- **Accessibility** - ARIA labels and semantic structure

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2024 STERLIAN. All rights reserved.

---

**Built with ❤️ for STERLIAN**
