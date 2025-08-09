import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Switch from '../components/Switch';
import Checkbox from './CheckBox';


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'certification', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Project' },
    { id: 'certification', label: 'Certification' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-black/50 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo area */}
      <div className="flex-shrink-0 flex items-center">
        {/* Ganti src dengan path/logo kamu */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="focus:outline-none flex items-center"
          aria-label="Back to top"
        >
          <img
            src="/logo.png"
            draggable={false}
            alt="AIBR Logo"
            className="w-16 h-auto object-contain dark:filter-none filter invert"
          />
          <span className="mt-3 text-[1rem] font-bold text-gray-900 dark:text-white">.</span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-white dark:text-white bg-black dark:bg-white/10'
                  : 'text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile menu button and theme toggle */}
      <div className="flex items-center">
        <Switch 
          checked={theme === 'dark'} 
          onChange={toggleTheme} 
        />
        <div className="md:hidden flex items-center">
          <Checkbox
            checked={isMobileMenuOpen}
            onChange={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
    </div>
    
    {/* Mobile Navigation Menu */}
    <div className={`md:hidden transition-all duration-300 ease-in-out ${
      isMobileMenuOpen ? 'max-h-84 opacity-100' : 'max-h-0 opacity-0'
    } overflow-hidden`}>
      <div className="px-2 pt-2 pb-3 space-y-1 glass-effect mt-0 rounded-lg">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
              activeSection === item.id
                ? 'text-white dark:text-white bg-black dark:bg-white/10'
                : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navigation;
