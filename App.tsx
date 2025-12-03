import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PrerequisitesSection } from './components/PrerequisitesSection';
import { ConceptsSection } from './components/ConceptsSection';
import { IntroSection } from './components/IntroSection';
import { ToolsSection } from './components/ToolsSection';
import { UseCasesSection } from './components/UseCasesSection';
import { WorkflowSection } from './components/WorkflowSection';
import { DemoSection } from './components/DemoSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { MistakesSection } from './components/MistakesSection';
import { CareersSection } from './components/CareersSection';
import { SecuritySection } from './components/SecuritySection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PrerequisitesSection />
        <IntroSection />
        <ConceptsSection />
        <ToolsSection />
        <UseCasesSection />
        <WorkflowSection />
        <DemoSection />
        <ProjectsSection />
        <ResourcesSection />
        <MistakesSection />
        <SecuritySection />
        <FAQSection />
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;