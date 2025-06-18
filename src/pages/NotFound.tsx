import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [text, setText] = useState("");
  const message = "404";

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Typing effect
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < message.length) {
        setText(message.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 200);

    return () => clearInterval(typeInterval);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center">
      <div className="text-center p-8">
        {/* Main 404 Text */}
        <div className="text-8xl md:text-9xl font-bold mb-8">
          {text}<span className="animate-pulse">_</span>
        </div>
        
        {/* Error Message */}
        <div className="text-xl mb-4 text-gray-400">
          PAGE NOT FOUND
        </div>
        
        <div className="text-sm mb-8 text-gray-500">
          {location.pathname}
        </div>

        {/* Return Button */}
        <a 
          href="/" 
          className="inline-block bg-white text-black font-bold py-3 px-6 hover:bg-gray-200 transition-colors duration-300"
        >
          GO HOME
        </a>
      </div>
    </div>
  );
};

export default NotFound;
