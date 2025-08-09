
import React from 'react';

const Certification = () => {
  const certifications = [
    {
      id: 1,
      image: '/image/c1.png',
    },
    {
      id: 2,
      image: '/image/c2.png',
    },
    {
      id: 3,
      image: '/image/c3.png',
    },
    /*{
      id: 4,
      
         image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1080&h=1350&fit=crop',
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

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="glass-card w-[360px] sm:w-[360px] overflow-hidden hover:shadow-2xl transform transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
               <div
                  className="relative overflow-hidden rounded-lg group"
                  style={{ aspectRatio: '4 / 3' }}   // ganti ke '1 / 1' (square) atau '16 / 9' jika perlu
                >
                  <img
                    src={cert.image}
                    className="w-full h-full object-cover transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

      </div>
    </section>
  );
};

export default Certification;
