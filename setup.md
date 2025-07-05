# Quick Setup Guide

## 🚀 Getting Started

1. **Navigate to the portfolio directory**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Quick Customization

### 1. Update Personal Information
Edit `src/data/personalInfo.ts`:
- Change name, title, tagline
- Update email and location
- Add your avatar image path
- Add your resume PDF path

### 2. Update Skills
Edit `src/data/skills.ts`:
- Modify skill names and levels (0-100)
- Add/remove skills as needed
- Update skill categories

### 3. Add Your Projects
Edit `src/data/projects.ts`:
- Replace sample projects with your own
- Add GitHub and live demo links
- Update project images and descriptions

### 4. Update Experience
Edit `src/data/experience.ts`:
- Add your work experience
- Update education background
- Modify dates and descriptions

### 5. Update Social Links
Edit `src/data/socialLinks.ts`:
- Add your GitHub, LinkedIn, Twitter URLs
- Update email and portfolio links

## 📁 File Structure

```
portfolio/
├── public/                 # Static files
├── src/
│   ├── components/         # React components
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Skills.tsx     # Skills section
│   │   ├── Projects.tsx   # Projects section
│   │   ├── Experience.tsx # Experience section
│   │   ├── Resume.tsx     # Resume section
│   │   ├── Contact.tsx    # Contact section
│   │   ├── Navbar.tsx     # Navigation
│   │   ├── Footer.tsx     # Footer
│   │   └── ThemeToggle.tsx # Theme toggle
│   ├── data/              # Data files
│   │   ├── personalInfo.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── socialLinks.ts
│   ├── App.tsx            # Main app component
│   ├── index.tsx          # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
└── README.md              # Detailed documentation
```

## 🌐 Deployment

### GitHub Pages
1. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

### Vercel
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

## 🎯 Key Features

- ✅ Dark theme by default
- ✅ Light mode toggle
- ✅ Fully responsive
- ✅ Smooth animations
- ✅ Contact form
- ✅ Social media integration
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Easy customization
- ✅ Deployment ready

## 🔧 Customization Tips

1. **Colors**: Edit `tailwind.config.js` for custom color schemes
2. **Fonts**: Update Google Fonts in `public/index.html`
3. **Animations**: Modify Framer Motion animations in components
4. **Layout**: Adjust grid layouts and spacing in components
5. **Content**: Update all data files with your information

## 📞 Need Help?

- Check the main README.md for detailed documentation
- Review the component files for customization examples
- Update data files with your personal information
- Test responsiveness on different devices

---

**Happy coding! 🎉** 