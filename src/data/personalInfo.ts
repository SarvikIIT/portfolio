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
  name: "Sarvik",
  title: "Electrical Engineering Student | Competitive Programmer",
  tagline: "Quantitative Finance Enthusiast & High-Performance C++ Developer",
  about: `I'm a 2nd-year IDD (Integrated Dual Degree) student in Electrical & Electronics Engineering at IIT BHU, passionate about high-performance C++ programming 
  and competitive programming. I love solving complex algorithmic problems and have a strong interest in quantitative finance. 
  Currently exploring the intersection of algorithms, mathematical models, and financial applications. 
  I believe in writing efficient, optimized code and solving complex problems through systematic thinking.`,
  email: "sarvik.student.cd.eee24@iitbhu.ac.in",
  location: "Lucknow, India",
  avatar: "👨‍💻", // Emoji placeholder - can be replaced with actual photo
  resumeUrl: "https://drive.google.com/file/d/1IrQdxOTY0aIKPaRw5rg_XOGRRAk5t79m/view?usp=drive_link" // Google Drive resume link
}; 