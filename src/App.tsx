import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { UpcomingRide } from './components/UpcomingRide';
import { Rides } from './components/Rides';
import { Gallery } from './components/Gallery';
import { Safety } from './components/Safety';
import { Community } from './components/Community';
import { InstagramSection } from './components/InstagramSection';
import { JoinSection, JoinModal } from './components/Join';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  return (
    <div className="bg-dark-950 min-h-screen text-white antialiased font-sans overflow-x-hidden">
      <Navbar onOpenJoinModal={() => setJoinModalOpen(true)} />
      <main>
        <Hero onOpenJoinModal={() => setJoinModalOpen(true)} />
        <About />
        <Achievements />
        <UpcomingRide onOpenJoinModal={() => setJoinModalOpen(true)} />
        <Rides />
        <Gallery />
        <Safety />
        <Community />
        <InstagramSection />
        <JoinSection onOpenJoinModal={() => setJoinModalOpen(true)} />
        <Contact />
      </main>
      <Footer onOpenJoinModal={() => setJoinModalOpen(true)} />
      <JoinModal isOpen={joinModalOpen} onClose={() => setJoinModalOpen(false)} />
    </div>
  );
}

export default App;
