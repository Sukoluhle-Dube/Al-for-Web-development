import React from 'react';
import { BEGINNER_PROJECTS, ASSIGNMENT } from '../constants';
import { FolderGit2, Briefcase } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Step-by-Step Beginner Projects</h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Apply what you've learned with these simple exercises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {BEGINNER_PROJECTS.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-zinc-950 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group shadow-sm">
              <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mb-4 shadow-sm text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-zinc-800 transition-colors">
                <FolderGit2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-xs text-zinc-500 mb-3 font-semibold uppercase tracking-wide">Includes:</p>
              <ul className="space-y-1 mb-4">
                {project.items.map((item, i) => (
                  <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Tool: <span className="text-blue-600 dark:text-blue-400">{project.tool}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Assignment Box */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="relative z-10 text-center">
            <Briefcase className="h-12 w-12 mx-auto mb-4 text-blue-200" />
            <h3 className="text-2xl font-bold mb-4">{ASSIGNMENT.title}</h3>
            <p className="text-xl md:text-2xl font-bold mb-6">"{ASSIGNMENT.task}"</p>
            <p className="text-blue-200 font-medium">OR: {ASSIGNMENT.alternative}</p>
          </div>
        </div>
      </div>
    </section>
  );
};