import { MotionConfig } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
// Notes write-ups are kept in ./components/Notes.tsx but not shown for now.
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import VolunteeringSection from './components/Volunteer';

export default function App() {
  return (
    // reducedMotion="user" turns off motion animations for visitors who ask for it.
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <VolunteeringSection />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}
