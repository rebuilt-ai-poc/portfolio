import { ScrollProgress } from './components/primitives/ScrollProgress';
import { SectionRail } from './components/primitives/SectionRail';
import { ScrollToTop } from './components/primitives/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Trajectory } from './components/Trajectory';
import { Stack } from './components/Stack';
import { Tinkering } from './components/Tinkering';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="noise">
      <ScrollProgress />
      <SectionRail />
      <ScrollToTop />
      <Navbar />

      <Hero />

      <main className="max-w-shell mx-auto px-6 md:px-10 relative">
        <Projects />
        <About />
        <Trajectory />
        <Stack />
        <Tinkering />
        <Philosophy />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
