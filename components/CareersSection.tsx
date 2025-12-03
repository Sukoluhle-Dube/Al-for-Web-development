import React from 'react';
import { CAREER_OPPS } from '../constants';
import { Briefcase, ArrowRightCircle } from 'lucide-react';

export const CareersSection: React.FC = () => {
  return (
    <section id="careers" className="py-20 bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Unlock Opportunities</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            With these AI-powered skills, you can open doors to new income streams.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-950 rounded-2xl shadow-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-yellow-400 p-10 flex flex-col justify-center text-black">
              <Briefcase className="h-12 w-12 mb-6 text-black/80" />
              <h3 className="text-2xl font-bold mb-4">Start Today</h3>
              <p className="text-black/80 mb-6 font-medium">
                You don't need years of experience. The tools we covered allow you to deliver professional results immediately.
              </p>
              <div className="font-bold text-lg border-t border-black/20 pt-4">Your future awaits.</div>
            </div>
            <div className="p-10">
              <ul className="space-y-4">
                {CAREER_OPPS.map((opp, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowRightCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium">{opp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
       </div>
    </section>
  );
};