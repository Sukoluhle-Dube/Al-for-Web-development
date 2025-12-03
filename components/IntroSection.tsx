import React from 'react';
import { INTRO_POINTS } from '../constants';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
            No Coding Background? <span className="text-yellow-600 dark:text-yellow-400">No Problem.</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Traditionally, web development required learning HTML, CSS, JavaScript, and server management. Today, AI makes it accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INTRO_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="bg-white dark:bg-zinc-900 rounded-xl p-6 text-center shadow-sm hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] transition-all duration-300 border border-zinc-200 dark:border-zinc-800 hover:border-yellow-400/50 group">
                <div className="w-14 h-14 mx-auto bg-zinc-100 dark:bg-zinc-800 group-hover:bg-yellow-400 rounded-full flex items-center justify-center mb-4 text-yellow-600 dark:text-yellow-400 group-hover:text-black transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white">{point.text}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};