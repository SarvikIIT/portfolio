import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, setIsDark }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      onClick={() => setIsDark(!isDark)}
      className="fixed top-20 right-4 z-50 p-3 rounded-full glass-dark backdrop-blur-md border border-dark-600/50 hover:bg-dark-800/70 transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300" />
        ) : (
          <Moon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 