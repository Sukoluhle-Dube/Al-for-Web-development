import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 transition-colors duration-300"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-400/10 to-transparent transform skew-x-12 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-400/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-400/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-400/20 text-sm font-semibold mb-6 transition-colors duration-300">
          Beginner Friendly Guide
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight mb-6 transition-colors duration-300">
          Web Development Using <span className="text-blue-600 dark:text-blue-400">AI Tools</span>
        </h1>
        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 transition-colors duration-300">
          Learn how to build websites, generate content, design images, and deploy applications—all without coding.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#intro" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-2xl shadow-blue-600/30 transform hover:scale-105">
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#tools" className="inline-flex items-center justify-center px-8 py-3 border border-zinc-300 dark:border-zinc-700 text-base font-medium rounded-lg text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:scale-105 relative overflow-hidden group">
            <span className="relative z-10">Explore Tools</span>
            <span className="absolute inset-0 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        <div className="mt-12 text-sm text-zinc-500">
          <p>Based on presentation by <span className="font-semibold text-zinc-700 dark:text-zinc-300">Sukoluhle Dube & Issac Gazimbe</span> • November 23, 2025</p>
        </div>
      </div>
    </section>
  );
};