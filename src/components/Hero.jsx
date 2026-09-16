import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 min-h-screen justify-center">
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Hi, I'm <span className="text-accent">Harshith N</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-6">
          I build AI systems and the infrastructure that runs them.
        </p>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">
          Student, Full-Stack & Applied AI Developer based in Shimoga, Karnataka, India.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-8">
          <a href="#projects" className="px-6 py-3 bg-accent hover:bg-accentHover text-white rounded-lg font-medium transition-colors w-full sm:w-auto text-center">
            View Projects
          </a>
          <a href="/resume.pdf" download className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2">
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>

        <div className="flex items-center gap-6 justify-center md:justify-start">
          <a href="https://github.com/Harshith-codzz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/harshith-n-b0a760394/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:harshith07.2007@gmail.com" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <div className="relative w-64 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF9F6] dark:border-gray-800 ring-4 ring-gray-100 dark:ring-gray-900">
          {!imgError ? (
            <img 
              src="/images/harshith-formal.jpg" 
              alt="Harshith N — portrait"
              width="320"
              height="320"
              loading="eager"
              className="w-full h-full object-cover object-top"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="font-display text-5xl font-bold text-gray-400 dark:text-gray-500">HN</span>
            </div>
          )}
        </div>
      </motion.div>

    </section>
  );
}
