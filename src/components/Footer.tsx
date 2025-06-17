
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-black via-gray-600 to-white bg-clip-text text-transparent">
                  NOTE!
                </span>
              </h3>
              <p>"Cut the waffle and crack on with learning, yeah?"</p>
            </div>

            <div className="border-t border-white/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-white/70 dark:text-gray-300">
                  © {currentYear} AIBR - All rights reserved.
                </p>
                
                <div className="flex space-x-6">
                  <a 
                    href="#home" 
                    className="text-white/70 hover:text-gray-400 transition-colors duration-200"
                  >
                    |
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
