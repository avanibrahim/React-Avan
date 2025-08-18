import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Certification from '../components/Certification';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MaintenancePage from './MaintenancePage';
import ThemeTransitionOverlay from '../components/ThemeTransitionOverlay';


const Index = () => {

  // di atas return()
const blockImageOpenOnMobile = (e) => {
  // jalankan hanya di viewport < md (mobile)
  if (typeof window === "undefined" || window.innerWidth >= 768) return;

  const el = e.target;
  // cek apakah target gambar (atau di dalam picture)
  const isImg =
    el?.tagName === "IMG" ||
    (el?.closest && el.closest("img, picture"));

  if (!isImg) return;

  // kalau gambar dibungkus <a> atau ada handler lain (lightbox)
  // cegah navigasi & event bubbling
  e.preventDefault();
  e.stopPropagation();
};


  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden">

        {/* Animated gradient background (brighter in light mode) */}
        <div className="fixed inset-0 -z-10 pointer-events-none transition-colors duration-500">
  <div className="absolute inset-0 bg-gradient-to-b 
    from-white via-gray-100 to-gray-300 
    dark:from-black dark:via-black dark:to-black" />
</div>



        {/* Content */}
        <Navigation />

<div
  onClickCapture={blockImageOpenOnMobile}
  onContextMenuCapture={(e) => {
    // cegah long-press context menu di mobile
    if (typeof window !== "undefined" && window.innerWidth < 768) e.preventDefault();
  }}
  className="
    relative z-10
    bg-white/5 dark:bg-black/5
    text-black dark:text-white
    transition-colors duration-300
    font-sans font-extralight tracking-wide
    [&_*]:text-black dark:[&_*]:text-white

    /* --- Disable interaksi IMG khusus mobile (< md) --- */
    max-md:[&_img]:select-none
    max-md:[&_img]:!cursor-default
    max-md:[&_img]:[-webkit-user-drag:none]
    max-md:[&_img]:[-webkit-touch-callout:none]
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
