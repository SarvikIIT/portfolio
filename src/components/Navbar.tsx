import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          
          // Simplified section detection for better performance
          const sections = navItems.map(item => item.to);
          let current = 'home';
          
          // Get current scroll position
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const threshold = windowHeight * 0.3; // 30% of viewport height
          
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              
              // Check if section is in the threshold area
              if (rect.top <= threshold && rect.bottom >= threshold) {
                current = section;
                break;
              }
            }
          }
          
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold font-space-grotesk relative group"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Sarvik
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`relative px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 font-medium ${
                  activeSection === item.to 
                    ? 'text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setActiveSection(item.to)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 group border border-cyan-500/20"
          >
            <div className="relative flex flex-col items-center justify-center w-full h-full">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-1.5"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-1.5"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="py-6 space-y-3 border-t border-white/10 bg-black/95 backdrop-blur-2xl rounded-b-2xl shadow-2xl"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className={`block px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 font-medium relative overflow-hidden ${
                        activeSection === item.to
                          ? 'text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => {
                        setActiveSection(item.to);
                        setIsOpen(false);
                      }}
                    >
                      {/* Sliding background effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '0%' }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      <span className="relative z-10 font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 