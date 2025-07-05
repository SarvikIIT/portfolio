import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Object.keys(skillCategories)];
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'from-emerald-400 to-emerald-600';
      case 'Advanced':
        return 'from-cyan-400 to-cyan-600';
      case 'Intermediate':
        return 'from-blue-400 to-blue-600';
      case 'Proficient':
        return 'from-slate-400 to-slate-600';
      default:
        return 'from-slate-400 to-slate-600';
    }
  };

  const getProficiencyBg = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-emerald-500/10 border-emerald-500/30';
      case 'Advanced':
        return 'bg-cyan-500/10 border-cyan-500/30';
      case 'Intermediate':
        return 'bg-blue-500/10 border-blue-500/30';
      case 'Proficient':
        return 'bg-slate-500/10 border-slate-500/30';
      default:
        return 'bg-slate-500/10 border-slate-500/30';
    }
  };

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
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and areas of specialization in software development and computer science.
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
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50'
              }`}
            >
              {category === 'all' ? 'All Expertise' : skillCategories[category as keyof typeof skillCategories]}
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
              className="group relative overflow-hidden"
            >
              <div className="card h-full hover:scale-105 transition-all duration-300 border border-slate-700/50 hover:border-emerald-500/30">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-50 group-hover:text-white transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getProficiencyBg(skill.proficiency)}`}>
                    <span className={`bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} bg-clip-text text-transparent`}>
                      {skill.proficiency}
                    </span>
                  </div>
                </div>
                
                {skill.description && (
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                )}
                
                <div className="mt-auto">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="capitalize">
                      {skillCategories[skill.category]}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Areas of <span className="gradient-text">Specialization</span>
            </h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              My expertise spans across high-performance programming, competitive algorithms, and modern software development practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-slate-50">High Performance</h4>
              <p className="text-slate-400 text-sm">
                System-level programming with focus on optimization and efficiency
              </p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-slate-50">Competitive Programming</h4>
              <p className="text-slate-400 text-sm">
                Advanced algorithms and data structures for complex problem-solving
              </p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-slate-50">Computer Science</h4>
              <p className="text-slate-400 text-sm">
                Core CS fundamentals and mathematical modeling expertise
              </p>
            </div>
            
            <div className="card text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-slate-50">Development Tools</h4>
              <p className="text-slate-400 text-sm">
                Modern development practices and infrastructure management
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="card">
            <h3 className="text-xl font-semibold mb-8 text-center">
              Additional <span className="gradient-text">Competencies</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Software Architecture', icon: '🏗️' },
                { name: 'Performance Optimization', icon: '⚡' },
                { name: 'System Design', icon: '🔧' },
                { name: 'Code Review', icon: '👁️' },
                { name: 'Testing & Debugging', icon: '🐛' },
                { name: 'Documentation', icon: '📚' },
                { name: 'Team Collaboration', icon: '🤝' },
                { name: 'Problem Analysis', icon: '🔍' }
              ].map((competency, index) => (
                <motion.div
                  key={competency.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {competency.icon}
                  </span>
                  <span className="font-medium">{competency.name}</span>
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