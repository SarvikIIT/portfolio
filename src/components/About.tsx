import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Code } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  const stats = [
    { label: 'Programming Languages', value: '8+' },
    { label: 'Competitive Problems Solved', value: '500+' },
    { label: 'Projects Completed', value: '5+' },
    { label: 'Technologies Mastered', value: '10+' }
  ];

  return (
    <section id="about" className="section-padding relative performance-optimized fluid-section">
      <div className="container-custom section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Get to know me better and understand what drives my passion for high-performance programming and competitive problem-solving.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-100">
                {personalInfo.about}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-200">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span>Available for opportunities</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <span>Student & Freelance</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="card text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Terminal Window */}
              <div className="w-full h-64 rounded-lg mirror-surface overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-500/10 hover:scale-[1.02] transition-transform duration-300 ease-out">
                {/* Terminal Header */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-3 flex items-center justify-between border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-400 font-jetbrains-mono">about-sarvik</div>
                </div>
                
                {/* Terminal Content */}
                <div className="bg-black/90 p-6 h-full">
                  <div className="font-jetbrains-mono text-xs sm:text-sm space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-400">sarvik@quant:~</span>
                      <span className="text-cyan-400">$</span>
                      <span className="text-white">cat about.txt</span>
                    </div>
                    <div className="text-gray-300 ml-4 space-y-1 text-xs sm:text-sm">
                      <div>👨‍💻 Name: Sarvik</div>
                      <div>🎓 Degree: Electrical Engineering</div>
                      <div>🏆 Specialty: Competitive Programming</div>
                      <div>📊 Focus: Quantitative Development</div>
                      <div>📍 Location: Lucknow, India</div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-400">sarvik@quant:~</span>
                      <span className="text-cyan-400">$</span>
                      <span className="text-white animate-pulse" style={{animationDuration: '1.5s'}}>_</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-accent-500/30 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          <div className="card text-center">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Competitive Programming</h3>
            <p className="text-gray-300 text-sm">
              Expert in algorithmic contests with strong problem-solving skills and advanced data structure knowledge.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 text-blue-400">📊</div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Quantitative Finance</h3>
            <p className="text-gray-300 text-sm">
              Research experience in financial modeling, algorithmic trading, and quantitative analysis techniques.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 text-purple-400">⚡</div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">High Performance C++</h3>
            <p className="text-gray-300 text-sm">
              Specialized in system-level programming, memory optimization, and performance-critical applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 