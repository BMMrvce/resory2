import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <>
      <div className="relative min-h-screen text-white selection:bg-accent-gold selection:text-white">
        
        {/* Fixed Global Background */}
        <div 
          className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1542259659-4b79b8f95c4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', // Lush forest nature background
            filter: 'brightness(0.55) contrast(1.1) saturate(1.1)' 
          }}
        />
        
        {/* Premium Overlay for Depth - Warm & Green tones */}
        <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-primary-950/90 via-primary-900/70 to-primary-950/95 pointer-events-none mix-blend-multiply"></div>
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-400/10 via-transparent to-transparent pointer-events-none"></div>

        <Navbar />
        
        <main className="relative z-10">
          <Home />
          <Rooms />
          <Activities />
          <Gallery />
          <Contact />
        </main>
        
        <FloatingActions />
        <Footer />
      </div>
    </>
  );
};

export default App;