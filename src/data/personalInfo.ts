export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  location: string;
  avatar: string;
  resumeUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: "John Doe",
  title: "Full Stack Developer",
  tagline: "Crafting digital experiences with code and creativity",
  about: `I'm a passionate full-stack developer with 5+ years of experience building modern web applications. 
  I specialize in React, Node.js, and cloud technologies, with a keen eye for design and user experience. 
  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
  or sharing knowledge with the developer community. I believe in writing clean, maintainable code and 
  creating solutions that make a real impact.`,
  email: "john.doe@example.com",
  location: "San Francisco, CA",
  avatar: "/avatar.jpg", // Placeholder - replace with actual image
  resumeUrl: "/resume.pdf" // Placeholder - replace with actual resume
}; 