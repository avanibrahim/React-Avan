
import React from 'react';

const Certification = () => {
  const certifications = [
    {
      id: 1,
      title: 'React.js Developer Certification',
      issuer: 'Tech Academy',
      date: '2023',
      description: 'Advanced React.js development with hooks, state management, and modern practices',
      image: '/image/c1.png',
      credentialUrl: '#'
    },
    {
      id: 2,
      title: 'Frontend Web Development',
      issuer: 'Coding Institute',
      date: '2023',
      description: 'Comprehensive frontend development covering HTML5, CSS3, JavaScript, and responsive design',
      image: '/image/c2.png',
      credentialUrl: '#'
    },
    /*{
      id: 3,
      title: 'UI/UX Design Professional',
      issuer: 'Design Academy',
      date: '2022',
      description: 'User interface and user experience design principles, prototyping, and user research',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=2638&h=2034&fit=crop',
      credentialUrl: '#'
    },
    {
      id: 4,
      title: 'JavaScript Advanced Programming',
      issuer: 'Web Development Institute',
      date: '2022',
      description: 'Advanced JavaScript concepts, ES6+, async programming, and modern frameworks',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1080&h=1350&fit=crop',
      credentialUrl: '#'
    },*/
  ];

  return (
    <section id="certification" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10 sm:mb-16 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-white bg-clip-text text-transparent w-full inline-block font-sans font-extralight tracking-wider uppercase">
              - certificate
            </span>
            </h2>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="glass-card overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
