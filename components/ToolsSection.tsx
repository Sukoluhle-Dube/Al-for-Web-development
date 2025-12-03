import React from 'react';
import { AI_TOOLS, IMAGE_TOOLS, TOOLS_COMPARISON } from '../constants';
import { CheckCircle2, Star } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Essential AI Tools</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">A curated list of tools to speed up your development workflow.</p>
        </div>

        <div className="space-y-16">
          {/* Detailed Tools Grid */}
          {AI_TOOLS.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center">
                <span className="w-8 h-1 bg-yellow-400 rounded-full mr-3"></span>
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((tool, tIdx) => {
                  const Icon = tool.icon;
                  return (
                    <div key={tIdx} className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm p-6 border border-zinc-200 dark:border-zinc-800 hover:border-yellow-400/40 transition-colors">
                      <div className="flex items-start">
                        <div className={`p-3 rounded-lg ${tool.color} mr-4 shrink-0`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{tool.name}</h4>
                          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{tool.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Comparison Table */}
          <div className="mt-12 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
            <div className="bg-zinc-100 dark:bg-zinc-800 px-6 py-4 border-b border-zinc-200 dark:border-zinc-700">
               <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Quick Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
                <thead className="bg-zinc-50 dark:bg-zinc-900">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">AI Tool</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">What it does</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Difficulty</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Cost</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-zinc-950 divide-y divide-zinc-200 dark:divide-zinc-800">
                  {TOOLS_COMPARISON.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-zinc-900 dark:text-white">{row.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-400">{row.function}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          row.difficulty === 'Super Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 border border-green-200 dark:border-green-800' : 
                          row.difficulty === 'Easy' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 border border-blue-200 dark:border-blue-800' : 
                          'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800'
                        }`}>
                          {row.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-400">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Image Generation Subsection */}
          <div>
             <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 flex items-center">
                <span className="w-8 h-1 bg-yellow-400 rounded-full mr-3"></span>
                Image Generation Tools
              </h3>
             <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Premium Tools</h4>
                    </div>
                    <ul className="space-y-3">
                      {IMAGE_TOOLS.premium.map((tool, i) => (
                        <li key={i} className="flex items-center text-zinc-600 dark:text-zinc-400">
                          <CheckCircle2 className="h-4 w-4 text-blue-500 dark:text-blue-400 mr-3" />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 bg-zinc-50 dark:bg-zinc-950/50">
                     <div className="flex items-center mb-4">
                      <div className="h-5 w-5 rounded-full border-2 border-zinc-400 dark:border-zinc-600 mr-2"></div>
                      <h4 className="text-lg font-bold text-zinc-900 dark:text-white">Free Alternatives</h4>
                    </div>
                    <ul className="space-y-3">
                      {IMAGE_TOOLS.free.map((tool, i) => (
                        <li key={i} className="flex items-center text-zinc-600 dark:text-zinc-400">
                          <CheckCircle2 className="h-4 w-4 text-green-500 dark:text-green-400 mr-3" />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};