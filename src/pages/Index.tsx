import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Certification from '../components/Certification';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 animate-[moveGradient_12s_ease-in-out_infinite]"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-white to-transparent transform skew-y-12 animate-[moveGradientReverse_14s_ease-in-out_infinite]"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white to-transparent transform rotate-45 animate-[moveGradientDiagonal_16s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 bg-white/5 dark:bg-black/5 text-gray-900 dark:text-white transition-colors duration-300 font-sans font-extralight tracking-wide">
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Certification />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
