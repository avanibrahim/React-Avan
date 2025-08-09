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
        {/* Animated gradient background (brighter in light mode) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br
                              from-black via-gray-100 to-black
                              dark:from-black dark:via-black dark:to-black">
                <div className="absolute inset-0 opacity-70 dark:opacity-25 transition-opacity">
                  {/* streak 1 */}
                  <div className="absolute inset-0 bg-gradient-to-r
                                  from-transparent via-gray-300/60 to-transparent
                                  dark:via-white/55
                                  transform -skew-y-12 blur-[0.5px]
                                  animate-[moveGradient_12s_ease-in-out_infinite]" />
                  {/* streak 2 */}
                  <div className="absolute inset-0 bg-gradient-to-l
                                  from-transparent via-gray-300/55 to-transparent
                                  dark:via-white/50
                                  transform skew-y-12 blur-[0.5px]
                                  animate-[moveGradientReverse_14s_ease-in-out_infinite]" />
                  {/* streak 3 */}
                  <div className="absolute inset-0 bg-gradient-to-br
                                  from-transparent via-gray-300/55 to-transparent
                                  dark:via-white/55
                                  transform rotate-45 blur-[0.5px]
                                  animate-[moveGradientDiagonal_16s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>


        {/* Content */}
        <Navigation />
        <div
          className="
          relative z-10
          bg-white/5 dark:bg-black/5
          text-black dark:text-white
          transition-colors duration-300
          font-sans font-extralight tracking-wide
          
          [&_*]:text-black
          dark:[&_*]:text-white
          "
        >
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
