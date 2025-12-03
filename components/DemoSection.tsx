import React from 'react';
import { LIVE_DEMO_STEPS } from '../constants';
import { MousePointerClick } from 'lucide-react';

export const DemoSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <div className="bg-blue-600 p-8 text-white text-center">
            <div className="inline-block p-3 bg-white/20 rounded-full mb-4">
              <MousePointerClick className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Live Demo: Create a Website</h2>
            <p className="text-blue-100 mt-2 font-medium">Follow these exact steps using Canva</p>
          </div>
          
          <div className="p-8">
            <div className="space-y-6">
              {LIVE_DEMO_STEPS.map((step, idx) => (
                <div key={idx} className="flex group">
                  <div className="mr-6 flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 font-bold group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                      {idx + 1}
                    </div>
                    {idx !== LIVE_DEMO_STEPS.length - 1 && (
                      <div className="h-full w-0.5 bg-zinc-200 dark:bg-zinc-800 my-2"></div>
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-lg font-bold text-zinc-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{step.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};