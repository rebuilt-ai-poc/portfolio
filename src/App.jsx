import { ScrollProgress } from './components/primitives/ScrollProgress';
import { SectionRail } from './components/primitives/SectionRail';
import { ScrollToTop } from './components/primitives/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntentPaths } from './components/IntentPaths';
import { WhatISolve } from './components/WhatISolve';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { About } from './components/About';
import { Trajectory } from './components/Trajectory';
import { Stack } from './components/Stack';
import { Tinkering } from './components/Tinkering';
import { Philosophy } from './components/Philosophy';
import { BestFit } from './components/BestFit';
import { FreeAuditCTA } from './components/FreeAuditCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="noise overflow-x-hidden">
      <ScrollProgress />
      <SectionRail />
      <ScrollToTop />
      <Navbar />

      <Hero />

      <main className="max-w-shell mx-auto px-5 sm:px-6 md:px-10 relative w-full">
        <IntentPaths />
        <WhatISolve />
        <Projects />
        <Services />
        <About />
        <Trajectory />
        <Stack />
        <BestFit />
        <Tinkering />
        <Philosophy />
        <FreeAuditCTA />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
