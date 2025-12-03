import React from 'react';
import { CLOUD_STORAGE, FREE_ASSETS } from '../constants';
import { Database, Image, PenTool, Layout, Laptop } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  return (
    <section id="resources" className="py-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
           <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Resources & Setup</h2>
           <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">Everything you need to get started and keep going.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Free Assets Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 h-full shadow-sm">
              <div className="flex items-center mb-6">
                <Image className="h-6 w-6 text-blue-600 dark:text-blue-500 mr-2" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Free Assets</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-2 flex items-center">
                    <Image className="h-4 w-4 mr-2 text-zinc-500" /> Free Images
                  </h4>
                  <ul className="ml-6 list-disc text-zinc-600 dark:text-zinc-400 text-sm space-y-1">
                    {FREE_ASSETS.images.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
                <div>
                   <h4 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-2 flex items-center">
                    <PenTool className="h-4 w-4 mr-2 text-zinc-500" /> Free Icons
                  </h4>
                  <ul className="ml-6 list-disc text-zinc-600 dark:text-zinc-400 text-sm space-y-1">
                    {FREE_ASSETS.icons.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
                <div>
                   <h4 className="font-semibold text-zinc-700 dark:text-zinc-300 mb-2 flex items-center">
                    <Layout className="h-4 w-4 mr-2 text-zinc-500" /> Free Templates
                  </h4>
                  <ul className="ml-6 list-disc text-zinc-600 dark:text-zinc-400 text-sm space-y-1">
                    {FREE_ASSETS.templates.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Storage Column */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-zinc-900 rounded-xl h-full p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
               <div className="flex items-center mb-6">
                <Database className="h-6 w-6 text-blue-600 dark:text-blue-500 mr-2" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Cloud Storage</h3>
              </div>
              <div className="space-y-4">
                {CLOUD_STORAGE.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
                    <div className="flex items-center">
                        <div className="bg-white dark:bg-zinc-900 p-2 rounded-md shadow-sm mr-3 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm">{item.name}</span>
                    </div>
                    <div className="text-right">
                        <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{item.storage}</div>
                        <div className="text-xs text-zinc-500">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Setup Guide Column */}
          <div className="lg:col-span-1">
             <div className="flex items-center mb-6 pl-6 pt-6 lg:pl-0 lg:pt-0">
                <Laptop className="h-6 w-6 text-blue-600 dark:text-blue-500 mr-2" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">OS Installation</h3>
              </div>
            <div className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl p-6 shadow-md h-fit border border-zinc-200 dark:border-zinc-700">
              <div className="mb-6 border-b border-zinc-200 dark:border-zinc-700 pb-6">
                <h4 className="text-zinc-900 dark:text-white font-semibold mb-3">Windows</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Download ISO from Microsoft.</li>
                  <li>Create bootable USB with Rufus.</li>
                  <li>Boot from USB and follow steps.</li>
                </ol>
              </div>
              <div>
                <h4 className="text-zinc-900 dark:text-white font-semibold mb-3">Linux (Ubuntu)</h4>
                 <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Download ISO from ubuntu.com.</li>
                  <li>Create bootable USB with balenaEtcher.</li>
                  <li>Select "Install Ubuntu" on boot.</li>
                </ol>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};