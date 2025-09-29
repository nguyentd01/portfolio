import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import DotBackground from './components/DotBackground';
import ThemeToggle from './components/ThemeToggle';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import InfoPage from './pages/InfoPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        setIsSticky(navRect.top === 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="relative w-full">
          <DotBackground />
          <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-safe-top pb-safe-bottom min-h-screen">
            <div className="max-w-6xl mx-auto">
              <div className="md:hidden">
                <ThemeToggle />
              </div>
              <header className="pt-8 md:pt-12 relative">
                <div className="absolute top-8 right-0 z-10 hidden md:block">
                  <ThemeToggle />
                </div>
                <h1 className="text-left text-4xl md:text-7xl mb-2 tracking-[-0.05em] font-light">TRAN.D.NGUYEN</h1>
                <p className="text-left text-fluid-sm text-neutral-600 dark:text-neutral-300 tracking-[-0.02em]">
                  Currently attending HCMUT(vn)
                </p>
              </header>
            </div>
            
            <div ref={navRef} className={`sticky top-0 z-10 ${isSticky ? 'bg-white dark:bg-black' : ''} mt-8 md:mt-12 px-1 sm:px-2`}>
              <div className="max-w-6xl mx-auto">
                <div className="md:hidden">
                  <Navigation />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32 max-w-6xl mx-auto mt-4 md:mt-24">
              <div className="hidden md:block w-32">
                <Navigation />
              </div>
              <main className="flex-1 pb-16 md:pb-32 pt-8 md:pt-0">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/info" element={<InfoPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
