# STERLIAN Website - Assets Checklist

## 🎨 Required Assets to Supply

### 1. Logos

#### Main STERLIAN Logo
- **Location:** `assets/logo.svg`
- **Current Status:** ⚠️ Placeholder (gradient with "S")
- **Recommended Format:** SVG (scalable)
- **Alternative Formats:** PNG (transparent background, min 200x200px)
- **Usage:** Navigation bar, footer
- **Action Required:** Replace with actual STERLIAN logo

#### Zap Studio Product Logo
- **Location:** `assets/zap-studio-logo.svg`
- **Current Status:** ⚠️ Placeholder (lightning bolt)
- **Recommended Format:** SVG (scalable)
- **Alternative Formats:** PNG (transparent background, min 200x200px)
- **Usage:** Product section header
- **Action Required:** Replace with actual Zap Studio logo

---

### 2. Product Screenshots (Optional but Recommended)

#### Screenshot 1
- **Location:** To be added to `assets/` folder
- **Suggested Name:** `zap-studio-screenshot-1.png`
- **Recommended Size:** 1920x1080px or 16:9 aspect ratio
- **Content:** Main Zap Studio interface
- **Action Required:** Add image and update gallery in `index.html`

#### Screenshot 2
- **Location:** To be added to `assets/` folder
- **Suggested Name:** `zap-studio-screenshot-2.png`
- **Recommended Size:** 1920x1080px or 16:9 aspect ratio
- **Content:** Workflow builder or key feature
- **Action Required:** Add image and update gallery in `index.html`

#### Screenshot 3
- **Location:** To be added to `assets/` folder
- **Suggested Name:** `zap-studio-screenshot-3.png`
- **Recommended Size:** 1920x1080px or 16:9 aspect ratio
- **Content:** Automation in action or results
- **Action Required:** Add image and update gallery in `index.html`

---

### 3. Legal & Business Information

#### Partita IVA (VAT Number)
- **Current Status:** ⚠️ Placeholder `[placeholder]`
- **Location in Code:** Footer section in `index.html`
- **Search for:** `[placeholder]`
- **Action Required:** Replace with actual Partita IVA number

#### Contact Email
- **Current Status:** ✅ Set to `contact@sterlian.com`
- **Location in Code:** Contact section in `index.html`
- **Action Required:** Verify or update if different

---

## 📝 How to Replace Assets

### For Logos:

1. **Prepare your logo file:**
   - Save as SVG (preferred) or PNG
   - Ensure transparent background (for PNG)
   - Optimize file size

2. **Replace the file:**
   ```
   Replace: assets/logo.svg
   With: Your actual STERLIAN logo
   
   Replace: assets/zap-studio-logo.svg
   With: Your actual Zap Studio logo
   ```

3. **If using PNG instead of SVG:**
   - Update `index.html` to change `.svg` to `.png`
   - Search for: `logo.svg` and `zap-studio-logo.svg`

### For Screenshots:

1. **Add images to assets folder:**
   ```
   assets/zap-studio-screenshot-1.png
   assets/zap-studio-screenshot-2.png
   assets/zap-studio-screenshot-3.png
   ```

2. **Update index.html:**
   - Find the gallery section (search for "gallery-placeholder")
   - Replace:
   ```html
   <div class="gallery-placeholder">Screenshot 1</div>
   ```
   With:
   ```html
   <img src="./assets/zap-studio-screenshot-1.png" alt="Zap Studio Interface">
   ```

### For Legal Info:

1. **Open `index.html`**
2. **Search for:** `[placeholder]`
3. **Replace with:** Your actual Partita IVA number

---

## ✅ Asset Checklist

Use this checklist to track your progress:

- [ ] STERLIAN main logo (SVG/PNG)
- [ ] Zap Studio product logo (SVG/PNG)
- [ ] Screenshot 1 (optional)
- [ ] Screenshot 2 (optional)
- [ ] Screenshot 3 (optional)
- [ ] Partita IVA number
- [ ] Contact email verified
- [ ] Favicon (optional - 32x32px icon for browser tab)

---

## 🎯 Priority Levels

### High Priority (Required for Launch):
1. ✅ STERLIAN main logo
2. ✅ Partita IVA number
3. ✅ Contact email

### Medium Priority (Recommended):
4. ⭐ Zap Studio product logo
5. ⭐ At least 1 product screenshot

### Low Priority (Nice to Have):
6. 💡 All 3 product screenshots
7. 💡 Favicon for browser tab
8. 💡 Custom testimonial photos

---

## 📂 Final Folder Structure

After adding all assets, your folder should look like:

```
main-site/
├── index.html
├── styles.css
├── app.js
├── translations.js
├── README.md
├── SETUP.md
├── ASSETS.md (this file)
├── PROJECT.md
└── assets/
    ├── logo.svg (or .png) ← YOUR LOGO
    ├── zap-studio-logo.svg (or .png) ← YOUR LOGO
    ├── zap-studio-screenshot-1.png (optional)
    ├── zap-studio-screenshot-2.png (optional)
    ├── zap-studio-screenshot-3.png (optional)
    └── favicon.ico (optional)
```

---

## 💡 Tips

- **Logo Format:** SVG is best for crisp display at any size
- **Screenshot Quality:** Use high-quality images but optimize file size
- **File Naming:** Use lowercase, hyphens instead of spaces
- **Testing:** After replacing assets, refresh browser (Ctrl+F5) to see changes

---

**Ready to add your assets?**
Follow the instructions above and check off items as you complete them!
