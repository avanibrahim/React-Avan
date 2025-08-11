import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";
import { ExternalLink, Globe } from "lucide-react";
import { ProjectImage } from './ProjectImage';



type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'design' | string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  detailLink: string;
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [confirmProject, setConfirmProject] = useState<Project | null>(null);

  // Mobile/touch detection + state kartu yang sedang aktif (menampilkan View + blur)
  const [isTouch, setIsTouch] = useState(false);
  const [touchActiveId, setTouchActiveId] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const touch =
        'ontouchstart' in window ||
        (navigator as any).maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0;
      setIsTouch(Boolean(touch));
    }
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Project Web E-Commerce',
      description: 'Platform e-commerce dengan React.js dan design responsif user friendly.',
      image: '/image/p1.webp',
      category: 'web',
      technologies: ['React', 'Tailwind', 'TypeScript'],
      demoLink: '#',
      githubLink: '#',
      detailLink: '/projects/roomsinvasion',
    },
    {
      id: 2,
      title: "Project App Complaint",
      description: 'Blank',
      image: '/image/p2.webp',
      category: 'design',
      technologies: ['Photoshop', 'AI Tools', 'Creative Design'],
      demoLink: '#',
      githubLink: '#',
      detailLink: '/projects/sipenguisia',
    },
    {
      id: 3,
      title: 'Project Web Based Diagnosis',
      description: 'Dashboard interaktif dengan chart dan visualisasi data real-time',
      image: '/image/p3.webp',
      category: 'web',
      technologies: ['React', 'Chart.js', 'API Integration'],
      demoLink: '#',
      githubLink: '#',
      detailLink: '/projects/dinkesgtlo',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '■' },
    { id: 'web', label: 'Web Development', icon: '▲' },
    { id: 'design', label: 'Mobile App', icon: '●' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleHotspotClick = (project: Project) => setConfirmProject(project);

  const handleConfirmYes = () => {
    if (confirmProject?.detailLink) window.location.href = confirmProject.detailLink;
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul (light/dark sesuai snippet-mu) */}
        <div className="text-right mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 w-full">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-white bg-clip-text text-transparent w-full inline-block font-sans font-extralight tracking-wider uppercase">
              projects -
            </span>
          </h2>
        </div>

        {/* Filter Buttons (tetap sesuai pola kamu) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveFilter(category.id);
                setTouchActiveId(null); // reset tampilan mobile saat ganti filter
              }}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-black to-gray-700 text-white shadow-lg glass-effect'
                  : 'glass-effect text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="mr-1 sm:mr-2">{category.icon}</span>
              <span className="hidden sm:inline">{category.label}</span>
              <span className="sm:hidden">{category.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* GRID — tambahkan onTouchStartCapture untuk "tap di luar foto" menutup state */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          onTouchStartCapture={(e) => {
            if (!isTouch) return;
            const target = e.target as HTMLElement;
            const cardEl = target.closest('[data-card-id]');
            if (!cardEl) {
              // tap di luar foto/kartu -> sembunyikan View + blur
              setTouchActiveId(null);
            }
          }}
        >
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <div
                data-card-id={project.id}
                className="relative overflow-hidden group rounded-xl"
                onTouchStart={() => {
                  if (isTouch) setTouchActiveId(project.id); // tap gambar -> munculkan View + blur
                }}
              >
                <ProjectImage project={{ image: project.image, title: project.title, aspectW: 10, aspectH: 9.5 }} />

                {/* Overlay blur super smooth (tanpa zoom) */}
                <div
                  className={[
                    'absolute inset-0 z-10 pointer-events-none',
                    // Blur + sedikit gelap agar kontras View lebih enak
                    'backdrop-blur-lg bg-black/0',
                    // Smooth fade (lebih halus dari sebelumnya)
                    'opacity-0 transition-opacity duration-1000 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transition-none',
                    // Desktop: saat hover
                    'sm:group-hover:opacity-90',
                    // Mobile: saat kartu aktif
                    touchActiveId === project.id ? 'opacity-90' : '',
                  ].join(' ')}
                />

                {/* Tombol View (hanya View yang bisa navigate) */}
                <button
                  onClick={() => handleHotspotClick(project)}
                  aria-label={`View ${project.title}`}
                  className={[
                    'absolute inset-0 z-20 flex items-center justify-center',
                    'opacity-0 translate-y-1 transition-opacity duration-500 ease-out sm:group-hover:opacity-100 sm:group-hover:translate-y-0',
                    touchActiveId === project.id ? 'opacity-100 translate-y-0' : '',
                  ].join(' ')}
                >
                  <span
                    className="
                      px-4 py-2 rounded-lg
                      bg-white text-black
                      dark:bg-black/70 dark:text-white
                      backdrop-blur
                      hover:bg-white/90 dark:hover:bg-black
                      focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/60
                      text-xs sm:text-sm font-semibold tracking-wide uppercase
                    "
                  >
                    View
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg sm:text-xl text-white/60 dark:text-gray-300">
              Tidak ada project yang ditemukan untuk kategori ini.
            </p>
          </div>
        )}
      </div>

      {/* Overlay penutup khusus MOBILE:
          Muncul hanya saat sebuah kartu aktif. Tap di luar foto -> menutup View + blur. */}
      {isTouch && touchActiveId !== null && (
        <button
          aria-label="Dismiss project hover on mobile"
          onClick={() => setTouchActiveId(null)}
          className="fixed inset-0 sm:hidden bg-transparent z-[5]"
        />
      )}

      {/* Modal Konfirmasi */}
      {confirmProject && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 dark:bg-black/60 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setConfirmProject(null)}
          >
            <div
              className="relative w-full max-w-sm rounded-2xl border shadow-2xl text-center
                        bg-white text-black border-black/10
                        dark:bg-neutral-900 dark:text-white dark:border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tombol X (close) */}
              <button
                onClick={() => setConfirmProject(null)}
                aria-label="Close"
                className="absolute top-2.5 right-2.5 inline-flex items-center justify-center
                          w-8 h-8 rounded-full text-lg font-semibold
                          border border-black/10 text-black/70 hover:text-black hover:bg-black/5
                          focus:outline-none focus:ring-2 focus:ring-black/20
                          dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10
                          dark:focus:ring-white/30"
              >
                &times;
              </button>

              <div className="p-6">
                 {/* Icon lucide */}
                  <Globe
                    className="mx-auto my-3 h-8 w-8 text-black/70 dark:text-white/70"
                    aria-hidden
                  />
                <h3 className="text-lg font-semibold mb-1">Go to Detail</h3>
                <p className="text-sm text-black/70 dark:text-white/70 mb-6">
                  {confirmProject.title}
                </p>

                <Link
                  to={confirmProject?.detailLink || '/'}
                  onClick={() => setConfirmProject(null)}
                  className="
                    inline-flex min-w-[112px] justify-center items-center
                    px-5 py-2.5 rounded-lg font-semibold transition
                    border
                    bg-black text-white border-black hover:bg-black/90
                    focus:outline-none focus:ring-2 focus:ring-black/30
                    dark:bg-white dark:border-white dark:text-black dark:hover:bg-white/90 dark:focus:ring-white/50
                  "
                >
                  <span className="!text-white dark:!text-black">Yep</span>
                </Link>
              </div>
            </div>
          </div>
        )}
    </section>
  );
};

export default Projects;
