
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Modern',
      description: 'Platform e-commerce dengan React.js dan design responsif yang elegan',
      image: '/image/p1.webp',
      category: 'web',
      technologies: ['React', 'CSS3', 'JavaScript'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Blank',
      description: 'Blank',
      image: '/image/p2.webp',
      category: 'design',
      technologies: ['Photoshop', 'AI Tools', 'Creative Design'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Dashboard interaktif dengan chart dan visualisasi data real-time',
      image: '/image/p3.webp',
      category: 'web',
      technologies: ['React', 'Chart.js', 'API Integration'],
      demoLink: '#',
      githubLink: '#'
    },
    /*{
      id: 4,
      title: 'Mobile App UI',
      description: 'Rooms Invasion',
      image: '/image/p4.webp',
      category: 'web',
      technologies: ['Figma', 'UI/UX', 'Prototype'],
      demoLink: '#',
      githubLink: '#'
    },
    /*{
      id: 5,
      title: 'Weather App',
      description: 'Aplikasi cuaca real-time dengan design minimalis dan data akurat',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['JavaScript', 'Weather API', 'CSS3'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Brand Identity Design',
      description: 'Desain identitas brand lengkap dengan logo dan guideline visual',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop',
      category: 'design',
      technologies: ['Illustrator', 'Branding', 'Visual Identity'],
      demoLink: '#',
      githubLink: '#'
    }*/
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '■' },
    { id: 'web', label: 'Web Development', icon: '▲' },
    { id: 'design', label: 'Mobile App', icon: '●' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-right mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 w-full">
          <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-white bg-clip-text text-transparent w-full inline-block font-sans font-extralight tracking-wider uppercase">
              projects -
            </span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
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

        {/* Projects Grid - Only Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
            key={project.id}
            className="glass-card overflow-hidden rounded-xl hover:shadow-2xl transform transition-all duration-300"
          >
          
              <div className="relative overflow-hidden">
              <LazyLoadImage
                src={project.image}
                alt={project.title}
                effect="blur"
                placeholderSrc="/image/placeholder.png" // Placeholder kecil (super ringan)
                beforeLoad={() => <div className="animate-pulse bg-gray-200 w-full h-60 rounded-xl" />}
                className="w-full h-auto object-cover rounded-xl shadow"
              />
              
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
    </section>
  );
};

export default Projects;
