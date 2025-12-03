import React from 'react';
import { ShieldCheck, Lock, RefreshCw, AlertTriangle } from 'lucide-react';
import { SECURITY_TIPS } from '../constants';

export const SecuritySection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block p-3 rounded-full bg-white dark:bg-zinc-900 mb-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <ShieldCheck className="h-8 w-8 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold mb-12">Cybersecurity Basics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors shadow-sm">
            <Lock className="h-6 w-6 text-blue-500 mb-4" />
            <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white">Authentication</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Use strong, unique passwords and always enable two-factor authentication (2FA) on your accounts.</p>
          </div>
          
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors shadow-sm">
            <RefreshCw className="h-6 w-6 text-green-500 dark:text-green-400 mb-4" />
            <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white">Maintenance</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Keep your operating system updated and install antivirus software (Windows Defender is great).</p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors shadow-sm">
            <AlertTriangle className="h-6 w-6 text-amber-500 dark:text-amber-400 mb-4" />
            <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white">Habits</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Avoid downloading from untrusted sources and back up your critical data regularly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};