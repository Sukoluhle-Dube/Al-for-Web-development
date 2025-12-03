import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white flex items-center justify-center">
            <HelpCircle className="h-8 w-8 text-blue-600 dark:text-blue-500 mr-3" />
            Q&A + Troubleshooting
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">Solutions to common issues you might face.</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className={`border rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${openIndex === idx ? 'border-blue-300 dark:border-blue-800 shadow-md ring-1 ring-blue-100 dark:ring-blue-900/20' : 'border-zinc-200 dark:border-zinc-800'}`}>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className={`w-full flex items-center justify-between p-5 text-left focus:outline-none transition-all duration-300 ${
                  openIndex === idx 
                    ? 'bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-zinc-900' 
                    : 'bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                }`}
              >
                <span className={`font-semibold text-lg transition-colors ${openIndex === idx ? 'text-blue-700 dark:text-blue-300' : 'text-zinc-800 dark:text-zinc-200'}`}>
                  {item.q}
                </span>
                <div className={`p-1 rounded-full transition-colors ${openIndex === idx ? 'bg-blue-100 dark:bg-blue-900/50' : 'bg-transparent'}`}>
                  {openIndex === idx ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-zinc-400 dark:text-zinc-500" />
                  )}
                </div>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 bg-zinc-50 dark:bg-zinc-950/50 text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800 leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};