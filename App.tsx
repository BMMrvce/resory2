import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';

const App: React.FC = () => {
  return (
    <>
      <div className="relative min-h-screen text-white selection:bg-primary-500 selection:text-white">
        
        {/* Fixed Global Background */}
        <div 
          className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
            filter: 'brightness(0.6) sepia(0.2) hue-rotate(190deg) saturate(1.8) contrast(1.1)' 
          }}
        />
        {/* Deep Royal Blue Glass Gradient Overlay */}
        <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-primary-950/95 via-primary-950/90 to-primary-900/90 mix-blend-multiply pointer-events-none"></div>

        <Navbar />
        
        <main className="relative z-10">
          <Home />
          <Rooms />
          <Activities />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        
        <FloatingActions />
        <Footer />
      </div>
    </>
  );
};

export default App;