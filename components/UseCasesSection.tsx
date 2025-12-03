import React from 'react';
import { TOOL_USE_CASES } from '../constants';
import { Check } from 'lucide-react';

export const UseCasesSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">How to Use Each Tool In Real Life</h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Practical ways to apply these AI tools for your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOOL_USE_CASES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg hover:border-yellow-500/30 transition-all duration-300">
                <div className={`p-6 ${item.color} flex items-center justify-between`}>
                  <h3 className="text-xl font-bold">{item.tool}</h3>
                  <Icon className="h-8 w-8 opacity-80" />
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {item.uses.map((use, uIdx) => (
                      <li key={uIdx} className="flex items-start">
                        <Check className="h-5 w-5 text-yellow-600 dark:text-yellow-500 mr-2 shrink-0" />
                        <span className="text-zinc-600 dark:text-zinc-300">{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};