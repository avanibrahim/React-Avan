import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = 'Avan Ibrahim, S.Kom';
  

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (currentIndex < fullText.length) {
        // Typing phase
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        }, 80);
      } else {
        // Finished typing, start deleting after pause
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    } else {
      if (currentIndex > 0) {
        // Deleting phase
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        }, 40);
      } else {
        // Finished deleting, start typing again
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, fullText]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-2 md:mt-20">
        <div className="text-center">
          {/* Profile Image with increased mobile size */}
          <div className="relative mx-auto w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 mb-24 sm:mb-8 md:mb-12">
            {/* Square Glass Border with adjusted padding for better fit */}
            <div className="absolute inset-0 glass-effect" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
              borderRadius: '20px',
              padding: '6px sm:6px',
              transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.2), 0 0 15px rgba(255,255,255,0.1)'
            }}>
              <div className="w-full h-full bg-white/15 backdrop-blur-sm flex items-center justify-center" style={{
                borderRadius: '16px',
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <img
                  src="/_optimized/profile.avif"
                  alt="Profile"
                  draggable="false"
                  className="w-full h-full object-cover"
                  style={{
                    borderRadius: '13px',
                    transform: 'perspective(800px) rotateX(-2deg) rotateY(2deg)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.3), 0 5px 15px rgba(0,0,0,0.2)',
                    filter: 'brightness(1.1) contrast(1.05)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Main Content - Mobile optimized with realistic typing animation */}
          <div className="space-y-2 sm:space-y-3 glass-card p-2 sm:p-3 md:p-4 mx-auto max-w-6xl mt-4 sm:mt-6 md:mt-8">
            <div className="
              flex items-center justify-center px-2 sm:px-4
              h-[54px]    // sebelumnya 70px, kini 54px agar proporsional, akan tetap lebih tinggi dari box text supaya benar-benar fix
              sm:h-20 md:h-24 lg:h-28
            ">
              <h1 className="
                text-3xl
                sm:text-4xl md:text-5xl lg:text-6xl
                font-bold leading-none flex items-center justify-center w-full
              ">
                <span
                  className="
                    text-white
                    inline-block text-center flex items-center justify-center
                    w-[330px] h-[42px]   // sebelumnya 60px, sekarang 42px untuk hp
                    sm:w-[400px] sm:h-[70px]
                    md:w-[600px] md:h-[90px]
                    lg:w-[670px] lg:h-[100px]
                    rounded-lg           
                    sm:rounded-xl
                  "
                  style={{
                    lineHeight: "1.1",
                    minHeight: "1em",
                    alignItems: "center",
                  }}
                >
                  {displayedText}
                  <span
                    className="ml-1 text-gray-100"
                    style={{
                      animation: 'blink 1s steps(1, start) infinite'
                    }}
                  >
                    |
                  </span>
                  <style>
                  {`
                  @keyframes blink {
                    0%, 49% { opacity: 1 }
                    50%, 100% { opacity: 0 }
                  }
                  `}
                  </style>
                </span>
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 dark:text-gray-200 max-w-xl mx-auto">
              Web Development | UI/UX Design 
            </p>

            {/* CTA Buttons - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center pt-3 sm:pt-4 px-2 sm:px-4">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-black to-gray-700 text-white rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 glass-effect"
              >
                • Projects
              </button>
              
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto px-4 sm:px-5 md:px-6 py-2 sm:py-3 glass-effect text-white rounded-full font-semibold text-xs sm:text-sm md:text-base hover:bg-white/20 transition-all duration-300"
              >
                • Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
