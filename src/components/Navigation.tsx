import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Switch from '../components/Switch';
import Checkbox from './CheckBox';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'certification', 'contact'];
      const currentSection = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
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
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Glow + glass pill */}
        <div className="relative">
          {/* Gradient glow border 
          <div
            aria-hidden
            className={`pointer-events-none absolute -inset-[1px] rounded-[2rem]
                        bg-[linear-gradient(120deg,#8b5cf6_0%,#22d3ee_35%,#f472b6_70%,#8b5cf6_100%)]
                        ${isScrolled ? 'opacity-40' : 'opacity-25'} blur-[8px] transition-opacity`}
          />
          {/* Glass container */}
          <div
            className={`relative rounded-[1.5rem] border
                        border-white/10 dark:border-white/10
                        ${isScrolled
                          ? 'bg-white/10 dark:bg-black/10'
                          : 'bg-white-40 dark:bg-black/40'}
                        backdrop-blur-xl shadow-2xl shadow-black/10 transition-colors`}
          >
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
              {/* Brand */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 focus:outline-none"
                aria-label="Back to top"
              >
                <img
            src="/logo2.png"
            draggable={false}
            alt="AIBR Logo"
            className="ml-0 md:ml-6 mr-14 w-16 h-auto object-contain dark:filter-none filter invert"
          />
              </button>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-6">
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

              {/* Right controls */}
              <div className="flex items-center gap-0 md:gap-3">
              <Switch
                checked={theme === 'dark'}
                onChange={toggleTheme}
                // kalau Switch kamu punya margin default, buang:
                // className="!mr-0"
              />
              <div className="md:hidden shrink-0 -ml-0.5">
                <Checkbox
                  checked={isMobileMenuOpen}
                  onChange={() => setIsMobileMenuOpen((v: boolean) => !v)}
                  // optional: lebih kecil di mobile
                  // className="scale-90 md:scale-100"
                />
              </div>
            </div>

            </div>

            {/* Mobile sheet */}
            <div
              className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300
                         ${isMobileMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-4 pb-4 pt-1">
                <div className="flex flex-col">
                  {navItems.map((item) => (
                    <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
              activeSection === item.id
                ? 'text-white dark:text-white bg-black dark:bg-white/10'
                : 'text-black dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10'
            }`}
          >
            {item.label}
          </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /pill */}
      </div>
    </nav>
  );
};

export default Navigation;


