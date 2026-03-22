import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileNavbar from './components/layout/MobileNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import CustomCursor from './components/ui/CustomCursor';
import PageTitle from './components/ui/PageTitle';
import ScrollToTop from './components/ui/ScrollToTop';
import Preloader from './components/ui/Preloader';
import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const requestRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Use requestAnimationFrame to throttle CSS variable updates
      if (requestRef.current) return;
      
      requestRef.current = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        requestRef.current = null;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="app">
      <Preloader />
      <ScrollToTop />
      <PageTitle />
      <CustomCursor />
      
      {/* Simplified Grainy Noise Overlay */}
      <div className="noise-overlay" />

      {/* Dynamic Spotlight */}
      <div className="global-spotlight" />
      
      {/* Optimized Animated Background Elements */}
      <div className="bg-animation-container">
        <motion.div 
          className="bg-blob blob-1"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="bg-blob blob-2"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            exit={{ opacity: 0, filter: 'blur(20px)', y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'opacity, filter, transform' }}
          >
            <Routes location={location} key={location.pathname}>              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <MobileNavbar />
    </div>
  );
}

export default App;
