import React from 'react';
import { PREREQUISITES } from '../constants';

export const PrerequisitesSection: React.FC = () => {
  return (
    <section id="prereqs" className="py-16 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">What You Need Before Starting</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Don't worry, you probably have everything already!</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {PREREQUISITES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center bg-white dark:bg-zinc-800 px-6 py-4 rounded-full shadow-md dark:shadow-lg border border-zinc-200 dark:border-zinc-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};