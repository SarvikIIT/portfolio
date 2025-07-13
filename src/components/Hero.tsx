import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4"
            >
              <span className="code-text text-lg font-medium tracking-wide">Hello, I'm</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-white mb-6 heading-text font-medium"
            >
              {personalInfo.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-gray-200 mb-8 max-w-lg mx-auto lg:mx-0 body-text leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2"
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail size={20} />
                Hire Me
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {/* Terminal Window */}
              <div className="w-full max-w-sm h-80 sm:w-[24rem] sm:h-96 md:w-[36rem] md:h-[28rem] rounded-lg mirror-surface overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
                {/* Terminal Header */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-3 flex items-center justify-between border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-400 font-jetbrains-mono">terminal</div>
                </div>
                
                {/* Terminal Content */}
                <div className="bg-black/90 p-6 h-full">
                  <div className="font-jetbrains-mono text-sm sm:text-base space-y-4 sm:space-y-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-400">sarvik@quant:~</span>
                      <span className="text-cyan-400">$</span>
                      <span className="text-white">whoami</span>
                    </div>
                    <div className="text-emerald-300 ml-4">
                      sarvik: quant + system dev 🚀
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-400">sarvik@quant:~</span>
                      <span className="text-cyan-400">$</span>
                      <span className="text-white">cat skills.txt</span>
                    </div>
                    <div className="text-gray-300 ml-4 space-y-2">
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
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full shadow-lg shadow-emerald-400/50"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full shadow-lg shadow-teal-400/50"
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full glaze-effect hover:bg-white/10 transition-all duration-300"
          >
            <ChevronDown className="w-6 h-6 text-emerald-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 