import React from 'react';
import { KEY_CONCEPTS } from '../constants';

export const ConceptsSection: React.FC = () => {
  return (
    <section id="concepts" className="py-20 bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Key Concepts Explained Simply</h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Before we use the tools, let's understand the language of the web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {KEY_CONCEPTS.map((concept, idx) => {
            const Icon = concept.icon;
            return (
              <div key={idx} className="bg-white dark:bg-zinc-950 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-blue-400/50 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-zinc-800">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{concept.term}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-2">{concept.definition}</p>
                <div className="bg-zinc-50 dark:bg-zinc-900 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800">
                  <p className="text-sm text-zinc-500 italic">
                    <span className="font-semibold text-blue-600/80 dark:text-blue-500/80 not-italic">Analogy: </span> 
                    {concept.analogy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};