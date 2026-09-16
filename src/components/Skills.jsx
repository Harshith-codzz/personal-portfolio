import React from 'react';
import { motion } from 'framer-motion';

const SKILLS_DATA = [
  {
    category: "Languages",
    items: ["Python", "C++", "JavaScript", "TypeScript", "HTML/CSS"]
  },
  {
    category: "AI & ML",
    items: ["PyTorch", "OpenCV", "River ML", "scikit-learn", "XGBoost", "SHAP", "Gemini API"]
  },
  {
    category: "Web & Backend",
    items: ["React", "FastAPI", "Tailwind CSS", "Vite", "Zustand"]
  },
  {
    category: "Tools & Infrastructure",
    items: ["Git", "Redis", "Firebase", "PostgreSQL", "Docker", "SQLAlchemy"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#F5F4F0] dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS_DATA.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#FAF9F6] dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-bold mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-[#F5F4F0] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm rounded text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
