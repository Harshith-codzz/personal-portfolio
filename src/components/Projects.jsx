import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`bg-[#FAF9F6] dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-1 hover:shadow-lg hover:border-accent dark:hover:border-accent transition-all duration-300 flex flex-col h-full ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <div className="flex-1">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-block group">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>
                </a>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com/Harshith-codzz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:text-accentHover font-medium transition-colors">
            View all repositories on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
