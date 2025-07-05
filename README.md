# Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js, TypeScript, and Tailwind CSS. Features a dark theme by default with optional light mode toggle, smooth animations, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with glassmorphism effects
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Theme Toggle**: Switch between dark and light modes
- **Interactive Sections**: Hero, About, Skills, Projects, Experience, Resume, and Contact
- **Contact Form**: Functional contact form with validation
- **Social Links**: Integration with GitHub, LinkedIn, Twitter, and other platforms
- **SEO Optimized**: Meta tags and structured content for better search visibility
- **Performance Optimized**: Fast loading times and smooth scrolling

## 🛠️ Tech Stack

- **Frontend**: React.js 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Ready for GitHub Pages, Vercel, or Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Edit `src/data/personalInfo.ts` to update your personal details:
```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  about: "Your about text",
  email: "your.email@example.com",
  location: "Your Location",
  avatar: "/path-to-your-avatar.jpg",
  resumeUrl: "/path-to-your-resume.pdf"
};
```

### Skills
Update `src/data/skills.ts` to customize your skills and proficiency levels:
```typescript
export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
  // Add more skills...
];
```

### Projects
Modify `src/data/projects.ts` to showcase your projects:
```typescript
export const projects: Project[] = [
  {
    id: 'project-id',
    title: 'Project Title',
    description: 'Project description',
    image: '/path-to-project-image.jpg',
    technologies: ['React', 'Node.js'],
    githubUrl: 'https://github.com/username/project',
    liveUrl: 'https://project-demo.com',
    featured: true
  }
];
```

### Experience & Education
Update `src/data/experience.ts` with your work history and education:
```typescript
export const experience: TimelineItem[] = [
  {
    id: 'job-id',
    title: 'Job Title',
    subtitle: 'Company Name',
    description: 'Job description',
    period: '2020 - Present',
    type: 'work',
    icon: '💼',
    tags: ['React', 'Node.js']
  }
];
```

### Social Links
Edit `src/data/socialLinks.ts` to add your social media profiles:
```typescript
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
    color: 'hover:text-gray-400'
  }
];
```

## 🎯 Sections Overview

### Hero Section
- Animated introduction with your name and title
- Call-to-action buttons (Download Resume, Hire Me)
- Profile image/avatar with floating elements
- Smooth scroll indicator

### About Section
- Detailed personal description
- Key statistics and achievements
- Contact information with icons
- Professional highlights

### Skills Section
- Categorized skills with progress bars
- Interactive filtering by category
- Skill proficiency levels
- Additional skills overview

### Projects Section
- Responsive project grid
- Project images with hover effects
- Technology tags
- GitHub and live demo links
- Featured projects filter

### Experience Section
- Vertical timeline layout
- Work experience and education
- Company/Institution details
- Skills and achievements tags

### Resume Section
- Professional resume download
- Resume highlights and features
- View online option
- Last updated timestamp

### Contact Section
- Functional contact form
- Contact information display
- Social media links
- Response time indicators

## 🌐 Deployment

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/portfolio"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. Run `npm run deploy`

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect React and deploy
3. Custom domain can be added in Vercel dashboard

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Theme Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  dark: {
    // Your dark theme colors
  },
  accent: {
    // Your accent colors
  }
}
```

### Fonts
Update Google Fonts in `public/index.html` and configure in `tailwind.config.js`:
```javascript
fontFamily: {
  'inter': ['Inter', 'sans-serif'],
  'poppins': ['Poppins', 'sans-serif'],
}
```

## 🔧 Additional Features

- **Loading Animation**: Custom loading screen with spinner
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Active Section Highlighting**: Navbar highlights current section
- **Mobile Menu**: Hamburger menu for mobile devices
- **Back to Top**: Floating button to scroll to top
- **Form Validation**: Contact form with required field validation
- **Performance**: Optimized images and lazy loading

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

**Made with ❤️ using React, TypeScript, and Tailwind CSS** 