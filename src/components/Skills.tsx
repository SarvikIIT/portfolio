import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Object.keys(skillCategories)];
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
              }`}
            >
              {category === 'all' ? 'All Skills' : skillCategories[category as keyof typeof skillCategories]}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
                <span className="text-sm text-primary-400 font-medium">
                  {skill.level}%
                </span>
              </div>
              
              <div className="skill-bar">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="skill-progress"
                />
              </div>
              
              <div className="mt-3">
                <span className="text-xs text-dark-400 capitalize">
                  {skillCategories[skill.category]}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
            <p className="text-dark-400 text-sm">
              React, TypeScript, Next.js, Tailwind CSS, and modern JavaScript frameworks.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🟢</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
            <p className="text-dark-400 text-sm">
              Node.js, Python, Express.js, Django, FastAPI, and RESTful APIs.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">☁️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">DevOps & Cloud</h3>
            <p className="text-dark-400 text-sm">
              Docker, AWS, Git, CI/CD, and cloud infrastructure management.
            </p>
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="card">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Additional <span className="gradient-text">Skills</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Agile/Scrum', 'UI/UX Design', 'Testing', 'Performance Optimization', 'SEO', 'Security', 'Database Design', 'API Design'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-sm text-dark-300 hover:text-white transition-colors"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 