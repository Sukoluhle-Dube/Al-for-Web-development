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
            <HelpCircle className="h-8 w-8 text-yellow-500 mr-3" />
            Q&A + Troubleshooting
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">Solutions to common issues you might face.</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-left focus:outline-none"
              >
                <span className={`font-semibold ${openIndex === idx ? 'text-yellow-600 dark:text-yellow-400' : 'text-zinc-800 dark:text-zinc-200'}`}>
                  {item.q}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-zinc-400 dark:text-zinc-500" />
                )}
              </button>
              {openIndex === idx && (
                <div className="p-5 bg-zinc-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};