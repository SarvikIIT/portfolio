import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // For Google Drive links, we need to convert to direct download
    const driveUrl = personalInfo.resumeUrl;
    const fileId = driveUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    
    if (fileId) {
      const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      const link = document.createElement('a');
      link.href = directDownloadUrl;
      link.download = `${personalInfo.name.replace(' ', '_')}_Resume.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Fallback to opening in new tab
      window.open(personalInfo.resumeUrl, '_blank');
    }
  };

  const handleView = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Get a detailed overview of my skills, experience, and qualifications in a professional format.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="card text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <FileText className="w-12 h-12 text-white" />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">
              {personalInfo.name}'s Resume
            </h3>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              A comprehensive document showcasing my journey in competitive programming, 
              high-performance C++ development, and quantitative finance. Includes detailed 
              achievements, research experience, and technical competencies.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h4 className="font-semibold mb-3 text-cyan-400">What's Included:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Competitive Programming Achievements
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Research Experience & Publications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Education & Academic Background
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Technical Skills & Technologies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Projects & Algorithm Implementations
                  </li>
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="font-semibold mb-3 text-blue-400">Key Highlights:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    1st Place in Integral Cup Preliminary Round (Jane Street, Optiver, QRT)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Research Consultant at WorldQuant
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Expert Level Competitive Programming
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    High-Performance C++ Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Quantitative Finance Research
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleView}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View Online
              </motion.button>
            </div>

            <div className="mt-8 pt-8 border-t border-dark-600/50">
              <p className="text-xs text-dark-400">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📄</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Professional Format</h3>
            <p className="text-dark-400 text-sm">
              Clean, well-structured resume optimized for ATS systems and human readers.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Results-Focused</h3>
            <p className="text-dark-400 text-sm">
              Highlights quantifiable achievements and measurable impact in previous roles.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Up-to-Date</h3>
            <p className="text-dark-400 text-sm">
              Regularly updated with latest skills, projects, and professional achievements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 