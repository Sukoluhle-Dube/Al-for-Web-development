import React from 'react';
import { WORKFLOW_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-20 bg-blue-600 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6 text-white">From Idea to Live Website</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto font-medium">
            Follow this simple workflow to launch your professional online presence in just 1-2 hours.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-400/30 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {WORKFLOW_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-blue-500 rounded-xl p-6 border border-blue-400/50 hover:bg-blue-400/50 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold text-sm">
                      {step.step}
                    </span>
                    <Icon className="h-5 w-5 text-blue-100" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">{step.title}</h3>
                  <p className="text-blue-100 text-sm font-medium">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
           <div className="inline-flex items-center bg-blue-800 rounded-lg p-4 text-blue-200 shadow-xl border border-blue-700">
              <span className="font-bold mr-2 text-white">Pro Tip:</span> 
              Don't overthink it. Start with a template in Canva and iterate!
           </div>
        </div>
      </div>
    </section>
  );
};