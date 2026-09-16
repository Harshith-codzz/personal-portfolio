import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#F5F4F0] dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4 text-left md:text-center">
            <p>
              I am a student specializing in applied artificial intelligence and scalable software systems. 
              My passion lies in bridging the gap between cutting-edge ML models and production-ready architecture.
            </p>
            <p>
              As a frequent hackathon participant and team-project builder, I have experience designing and 
              deploying solutions across computer vision, machine learning, and full-stack web development.
            </p>
            <p>
              Whether it's optimizing an inference pipeline or structuring a complex React frontend, 
              I focus on building performant, reliable, and user-centric applications.
            </p>
          </div>
          
          <div className="mt-10">
            <p className="font-semibold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider text-sm">Primary Focus Areas</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Computer Vision', 'Machine Learning', 'Real-Time Systems', 'Full-Stack Web', 'Cloud Architecture'].map(item => (
                <span key={item} className="px-4 py-2 bg-[#FAF9F6] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm shadow-sm text-gray-700 dark:text-gray-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
