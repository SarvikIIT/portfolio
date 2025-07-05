import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Calendar, Code } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '20+' }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Get to know me better and understand what drives my passion for creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-dark-300">
                {personalInfo.about}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-dark-300">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-dark-300">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-dark-300">
                  <Calendar className="w-5 h-5 text-primary-400" />
                  <span>Available for hire</span>
                </div>
                <div className="flex items-center gap-3 text-dark-300">
                  <Code className="w-5 h-5 text-primary-400" />
                  <span>Full-time & Freelance</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="card text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-64 rounded-2xl glass-dark backdrop-blur-md border border-dark-600/50 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">👨‍💻</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{personalInfo.name}</h3>
                    <p className="text-dark-400">{personalInfo.title}</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-accent-500/30 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="card text-center">
            <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
            <p className="text-dark-400 text-sm">
              Writing maintainable, scalable, and well-documented code that follows industry best practices.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 text-accent-400">🎨</div>
            </div>
            <h3 className="text-lg font-semibold mb-2">User Experience</h3>
            <p className="text-dark-400 text-sm">
              Creating intuitive and engaging user experiences that delight users and drive business value.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 text-green-400">🚀</div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Performance</h3>
            <p className="text-dark-400 text-sm">
              Optimizing applications for speed, efficiency, and scalability to ensure the best user experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 