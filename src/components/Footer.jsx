import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#F5F4F0] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-xl mb-2">Harshith N.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Harshith N. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/Harshith-codzz" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#FAF9F6] dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent shadow-sm transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/harshith-n-b0a760394/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#FAF9F6] dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent shadow-sm transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:harshith07.2007@gmail.com" className="p-2 bg-[#FAF9F6] dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent shadow-sm transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          Built with <span className="text-accent">React</span> & <span className="text-teal-400">Tailwind</span>
        </div>

      </div>
    </footer>
  );
}
