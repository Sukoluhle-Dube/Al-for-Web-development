import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-black border-t border-zinc-200 dark:border-zinc-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
           <h3 className="text-lg font-bold text-zinc-900 dark:text-white">AI WebDev Guide</h3>
           <p className="text-zinc-500 text-sm">Empowering creators with AI.</p>
        </div>
        <div className="text-center md:text-right text-zinc-500 text-sm">
          <p>© 2025 Web Development Using AI Tools.</p>
          <p>Based on presentation by Sukoluhle Dube & Issac Gazimbe.</p>
        </div>
      </div>
    </footer>
  );
};