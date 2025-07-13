import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden performance-optimized fluid-section">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      
      <div className="container-custom section-content">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[28rem] lg:min-h-[32rem]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center text-center lg:text-left lg:pr-8 xl:pr-32 h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mb-3"
            >
              <span className="code-text text-base lg:text-lg font-medium tracking-wide">Hello, I'm</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 lg:mb-4 tracking-normal pr-2 lg:pr-6 overflow-visible"
            >
              <span className="gradient-text whitespace-nowrap">{personalInfo.name}</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4 lg:mb-6 heading-text font-medium flex flex-col gap-1"
            >
              <span className="text-gray-300 font-normal">Electrical Engineering Student</span>
              <span className="text-emerald-400 font-medium">Competitive Programmer</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-base lg:text-lg text-gray-200 mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0 body-text leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="hero-btn-primary group relative overflow-hidden"
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative flex items-center justify-center gap-2 lg:gap-3">
                  <Download size={18} className="transition-transform duration-200 group-hover:translate-y-[-1px]" />
                  <span className="font-medium">Resume</span>
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="hero-btn-secondary group relative overflow-hidden"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative flex items-center justify-center gap-2 lg:gap-3">
                  <Mail size={18} className="transition-transform duration-200 group-hover:translate-y-[-1px]" />
                  <span className="font-medium">Contact</span>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {/* Terminal Window */}
              <div className="w-full max-w-xs min-w-[16rem] h-64 sm:max-w-md sm:h-80 md:max-w-lg md:h-96 lg:max-w-[30rem] lg:h-[28rem] rounded-xl mirror-surface overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
                {/* Terminal Header */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-400 font-jetbrains-mono">terminal</div>
                </div>
                
                {/* Terminal Content */}
                <div className="bg-black/90 p-3 sm:p-6 lg:p-8 h-full">
                  <div className="font-jetbrains-mono text-xs sm:text-sm md:text-base lg:text-lg space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-400">sarvik@quant:~</span>
                      <span className="text-cyan-400">$</span>
                      <span className="text-white">whoami</span>
                    </div>
                    <div className="text-gray-300 ml-4 text-xs sm:text-sm">
                      sarvik: quant + system dev 🚀
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-400">sarvik@quant:~</span>
                      <span className="text-cyan-400">$</span>
                      <span className="text-white">cat skills.txt</span>
                    </div>
                    <div className="text-gray-300 ml-4 space-y-1 text-xs sm:text-sm">
                      <div>⚡ High Performance C++</div>
                      <div>🦀 Rust Systems Programming</div>
                      <div>🔧 Systems Programming</div>
                      <div>🏆 Competitive Programming</div>
                      <div>📊 Quantitative Trading</div>
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
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full shadow-lg shadow-emerald-400/50"
              />
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-3 w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full shadow-lg shadow-teal-400/50"
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 performance-optimized"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 lg:p-3 rounded-full glaze-effect hover:bg-white/10 transition-all duration-200 group"
          >
            <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-300 group-hover:text-emerald-200 transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 