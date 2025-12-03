import React from 'react';
import { COMMON_MISTAKES } from '../constants';
import { AlertTriangle, XCircle, CheckCircle2 } from 'lucide-react';

export const MistakesSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-yellow-500 mr-3" />
            Common Beginner Mistakes
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">Avoid these pitfalls to create professional-looking results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COMMON_MISTAKES.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-zinc-950 p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors">
              <div className="flex items-start pr-4">
                <XCircle className="h-5 w-5 text-red-500 dark:text-red-400 mr-3 mt-0.5 shrink-0" />
                <span className="text-zinc-800 dark:text-zinc-200 font-medium">{item.mistake}</span>
              </div>
              <div className="flex items-start pl-4 border-l border-zinc-100 dark:border-zinc-800">
                 <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                 <span className="text-sm text-zinc-500 italic">{item.fix}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <span className="inline-block px-4 py-2 bg-white dark:bg-zinc-800 text-yellow-600 dark:text-yellow-400 border border-zinc-200 dark:border-zinc-700 rounded-full font-bold text-sm shadow-sm">
            Remember: Simple always wins.
          </span>
        </div>
      </div>
    </section>
  );
};