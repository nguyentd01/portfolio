import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import DotBackground from './components/DotBackground';
import ThemeToggle from './components/ThemeToggle';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import InfoPage from './pages/InfoPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="relative w-full">
          <DotBackground />
          <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-safe-top pb-safe-bottom min-h-screen">
            <ThemeToggle />
            <header className="mb-12 md:mb-24 max-w-6xl mx-auto pt-8 md:pt-12">
              <h1 className="text-fluid-3xl md:text-7xl mb-2 tracking-[-0.05em] font-light">TRAN.D.NGUYEN</h1>
              <p className="text-fluid-sm text-neutral-600 dark:text-neutral-300 tracking-[-0.02em]">
                Future Developer/Entrepreneur
              </p>
            </header>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32 max-w-6xl mx-auto">
              <Navigation />
              <main className="flex-1 pb-16 md:pb-32">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/info" element={<InfoPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/faq" element={<FAQPage />} />
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