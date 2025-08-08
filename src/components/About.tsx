
import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    {
      name: 'React',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path fill="#61DAFB" d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.823 6.855l-.133.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.296 2.570.545 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.988.571 2.845-.309 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 25.049 25.049 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a30.718 30.718 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"/>
        </svg>
      )
    },
    {
      name: 'Next JS',
      logo: (
        <img 
        src="https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png" 
        alt="Next Logo" 
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
      />
      )
    },
    {
      name: 'JavaScript',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
          <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      )
    },
    {
      name: 'Python',
      logo: (
        <img 
          src="https://images.icon-icons.com/1508/PNG/512/python_104451.png" 
          alt="Python Logo" 
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
        />
      )
    },
    {
      name: 'Vue.js',
      logo: (
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" 
          alt="Vue Logo" 
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
        />
      )
    },
    {
      name: 'Figma',
      logo: (
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" 
          alt="Figma Logo" 
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
        />
      )
    },
  ];

  const education = [
    {
      id: 1,
      name: 'Universitas Ichsan Gorontalo Utara',
      level: '',
      logo: '/image/logounisangorut.png',
      period: '2020 - 2024'
    },
    {
      id: 2,
      name: 'SMAN Muhamadiyah Kota Gorontalo',
      level: '',
      logo: '/image/sma.png',
      period: '2017 - 2020'
    },
    {
      id: 3,
      name: 'SMPN 2 Kota Gorontalo',
      level: '',
      logo: '/image/smp.png',
      period: '2014 - 2017'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-16 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-white bg-clip-text text-transparent w-full inline-block font-sans font-extralight tracking-wider uppercase">
              - About Me
            </span>

            </h2>
          </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Description - Left Side */}
          <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white dark:text-white"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.8s ease-out'
              }}
            >
                Introduction
              </h3>
              <div 
                className="glass-card p-6 sm:p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transition: 'all 0.8s ease-out'
                }}
              >
                <p className="text-justify text-white/80 dark:text-gray-200 text-sm sm:text-base leading-1 sm:leading-[1.9] mb-2">
                  I am a web developer skilled in React.js and Next.js, building fast and responsive web applications. Currently, 
                  I am expanding my knowledge in IoT and app development to create more integrated and versatile digital solutions. 
                  I enjoy learning new technologies and applying them to deliver effective and user-friendly products.
                </p>
                <p className="text-justify text-white/80 dark:text-gray-200 text-sm sm:text-base leading-1 sm:leading-[1.9]">
                  I combine strong skills in web development with a good understanding of business marketing. 
                  I’m creative in generating new ideas and skilled at attracting customers to help grow the business. 
                  My goal is to build products that are both innovative and valuable.
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white dark:text-white"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.8s ease-out'
              }}
            >
                Learning
              </h3>
            <div 
              className="glass-card p-4 sm:p-6 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.8s ease-out 0.2s'
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-1">
                <div className="flex items-center space-x-2 cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <span className="text-gray-300">•</span>
                  <span className="text-white/80 dark:text-gray-200 text-sm">Penetration Testing</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <span className="text-gray-300">•</span>
                  <span className="text-white/80 dark:text-gray-200 text-sm">SOC Analyst</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <span className="text-gray-300">•</span>
                  <span className="text-white/80 dark:text-gray-200 text-sm">DFIR</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <span className="text-gray-300">•</span>
                  <span className="text-white/80 dark:text-gray-200 text-sm">Internet of Things (IoT)</span>
                </div>

              </div>
            </div>
          </div>

          {/* Education and Skills - Right Side */}
          <div className="space-y-6">
            {/* Education Section */}
            <div 
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.8s ease-out 0.3s'
              }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white mb-6">
                Education
              </h3>
              
              {education.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className="glass-card p-3 sm:p-4 mb-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.6s ease-out ${0.4 + index * 0.1}s`
                  }}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 cursor-pointer hover:rotate-12 transition-transform duration-300">
                      <img
                        src={edu.logo}
                        alt={edu.name}
                        className="w-full h-full object-cover"
                        draggable="false"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white dark:text-white text-xs sm:text-sm leading-tight">
                        {edu.name}
                      </h4>
                      <p className="text-gray-300 dark:text-gray-300 text-xs">
                        {edu.level} • {edu.period}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div 
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.8s ease-out 0.6s'
              }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white mb-6">
                Skills
              </h3>
              
              <div className="glass-card p-4 sm:p-6 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="flex flex-col items-center space-y-2 group cursor-pointer"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: `all 0.6s ease-out ${0.7 + index * 100}ms`
                      }}
                    >
                      <div className="transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 cursor-pointer">
                        {skill.logo}
                      </div>
                      <span className="text-white/80 dark:text-gray-200 text-xs sm:text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
