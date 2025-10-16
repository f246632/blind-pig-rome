# Blind Pig Roma - Speakeasy Website

A stunning, interactive website for Blind Pig Roma, a 1920s prohibition-era inspired cocktail bar in Rome's San Giovanni district.

## 🎭 Features

### Interactive Elements
- **Secret Knock Entrance**: Visitors must "knock three times" to enter the site
- **Smooth Scrolling**: Elegant navigation between sections
- **Parallax Effects**: Dynamic background movement on scroll
- **3D Tilt Cards**: Cocktail cards with interactive tilt effects
- **Glitch Text Animation**: Hero title with authentic speakeasy glitch effect
- **Cursor Glow**: Custom cursor effect for desktop users
- **Fade-in Animations**: Elements appear smoothly as you scroll

### Design Highlights
- **Color Palette**: Gold (#d4af37), Deep Red (#8b0000), Cream (#f5f5dc), Dark backgrounds
- **Typography**: Playfair Display (display), Montserrat (body), Bodoni Moda (accent)
- **Responsive**: Fully optimized for mobile, tablet, and desktop
- **Accessibility**: Semantic HTML, proper contrast ratios, keyboard navigation

### Sections
1. **Hero**: Dramatic entrance with glowing title and call-to-action
2. **About**: Story of the speakeasy with statistics
3. **Cocktails**: Grid of signature drinks with descriptions and traits
4. **Food**: Italian cuisine offerings with rotating food circle
5. **Events**: Live jazz, magic shows, and special events
6. **Visit**: Location, hours, contact information with embedded map
7. **Footer**: Social links and branding

## 🚀 Getting Started

### Simple Setup
1. Extract all files to your web server
2. Open `index.html` in a browser
3. No build process required!

### File Structure
```
blind-pig-rome/
├── index.html          # Main HTML file
├── src/
│   ├── styles.css     # All styles
│   └── script.js      # Interactive features
├── assets/            # Images and media (to be added)
└── docs/
    └── README.md      # This file
```

## 🎨 Customization

### Adding Real Photos
Replace the placeholder `.vintage-photo` and other sections with actual images:

```html
<div class="vintage-photo">
    <img src="assets/images/bar-interior.jpg" alt="Blind Pig Interior">
</div>
```

### Updating Contact Info
Edit the Visit section in `index.html` to update:
- Phone number
- Email address
- Social media links
- Opening hours

### Adding More Cocktails
In the Cocktails section, duplicate a `.cocktail-card` div:

```html
<div class="cocktail-card">
    <div class="card-number">07</div>
    <h3>Your Cocktail Name</h3>
    <p class="cocktail-description">Description here...</p>
    <div class="cocktail-traits">
        <span class="trait">Trait 1</span>
        <span class="trait">Trait 2</span>
    </div>
</div>
```

## 🎵 Optional Enhancements

### Sound Effects
Add audio files to `assets/sounds/` and uncomment sound functions in `script.js`:
- `knock.mp3` - Knock sound effect
- `door-open.mp3` - Door opening sound

### Google Maps
The map is embedded but you may need to:
1. Get a Google Maps API key
2. Update the iframe src with actual coordinates
3. Or replace with a static image

### Real Social Integration
Update social links in both Navigation and Footer sections with actual URLs.

## 📱 Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🌐 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📊 Performance
- Lazy loading ready (add `data-src` to images)
- Optimized animations for low-end devices
- Smooth 60fps animations
- Minimal JavaScript (~300 lines)

## 🎨 Design Philosophy

This website captures the essence of a 1920s speakeasy:
- **Mystery**: Secret knock entrance, hidden details
- **Elegance**: Gold accents, art deco inspiration
- **Sophistication**: Smooth animations, refined typography
- **Prohibition Era**: Vintage color palette, period-appropriate design

## 📝 Credits

**Design & Development**: Custom created for Blind Pig Roma
**Fonts**: Google Fonts (Playfair Display, Montserrat, Bodoni Moda)
**Inspiration**: 1920s speakeasy culture, art deco movement

## 📞 Blind Pig Roma Contact

- **Address**: Via La Spezia 72, San Giovanni, Rome, 00182, Italy
- **Phone**: +39 06 8775 0714
- **Hours**: Daily 18:30 - 02:00 (Kitchen until 01:30)
- **Instagram**: [@blindpigroma](https://www.instagram.com/blindpigroma/)
- **Facebook**: [Blind Pig Roma](https://www.facebook.com/blindpigroma/)

---

*"Where Secrets Are Stirred, Not Shaken"* 🍸
