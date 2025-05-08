import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {/* Floating Navbar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <Navbar />
      </div>

      {/* Header Section - Full viewport height */}
      <section id="home" className="relative pt-16"> {/* pt-16 matches navbar height */}
        <Header />
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Experience />
        </div>
      </section>

          {/* Education Section */}
          <section id="education" className="min-h-screen bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Education />
        </div>
      </section>
    </div>
  );
}
