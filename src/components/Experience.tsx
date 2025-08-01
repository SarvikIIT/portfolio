import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';

const Experience: React.FC = () => {
  const workExperience = experience.filter(item => item.type === 'work');
  const education = experience.filter(item => item.type === 'education');

  return (
    <section id="experience" className="section-padding relative performance-optimized fluid-section">
      <div className="container-custom section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            My professional journey and academic background that shaped my expertise in software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="gradient-text">Work Experience</span>
            </h3>
            
            <div className="space-y-8">
              {workExperience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="card p-6 hover:border-accent-500/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-primary-500/20">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        <span className="text-sm text-primary-400 font-medium bg-primary-500/10 px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      </div>
                      
                      <h5 className="text-primary-400 font-medium mb-3 text-base">
                        {item.subtitle}
                      </h5>
                      
                      <p className="text-dark-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      {item.tags && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-dark-700 text-xs text-primary-400 rounded-full border border-primary-500/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              

            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="gradient-text">Education</span>
            </h3>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="card p-6 hover:border-accent-500/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center flex-shrink-0 border border-accent-500/20">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        <span className="text-sm text-accent-400 font-medium bg-accent-500/10 px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      </div>
                      
                      <h5 className="text-accent-400 font-medium mb-3 text-base">
                        {item.subtitle}
                      </h5>
                      
                      <p className="text-dark-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      {item.tags && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-dark-700 text-xs text-accent-400 rounded-full border border-accent-500/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Professional Growth</h3>
            <p className="text-dark-400 text-sm">
              Continuous learning and skill development to stay current with industry trends and technologies.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
            <p className="text-dark-400 text-sm">
              Strong analytical skills and ability to tackle complex technical challenges with innovative solutions.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
            <p className="text-dark-400 text-sm">
              Experience working in diverse teams and mentoring junior developers to achieve project goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 