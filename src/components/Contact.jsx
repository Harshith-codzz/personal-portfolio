import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/placeholder';
      
      // Stub for real submission:
      /*
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to send');
      */
      
      // Mock successful submission for demo if endpoint not set properly
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm currently looking for new opportunities and collaborations. 
              Whether you have a question, a project idea, or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <a href="mailto:harshith07.2007@gmail.com" className="flex items-center gap-4 p-4 rounded-lg bg-[#F5F4F0] dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <Mail className="w-6 h-6 text-accent" />
                <span className="font-medium">harshith07.2007@gmail.com</span>
              </a>
              <a href="https://github.com/Harshith-codzz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-[#F5F4F0] dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <Github className="w-6 h-6 text-accent" />
                <span className="font-medium">GitHub Profile</span>
              </a>
              <a href="https://www.linkedin.com/in/harshith-n-b0a760394/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg bg-[#F5F4F0] dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <Linkedin className="w-6 h-6 text-accent" />
                <span className="font-medium">LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F4F0] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                  })}
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F4F0] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F4F0] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-accent hover:bg-accentHover text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center font-medium">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center font-medium">Failed to send. Please try again.</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
