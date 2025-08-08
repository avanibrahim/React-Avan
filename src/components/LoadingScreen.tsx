import React from "react";
import Loader from "./Loader"; // Pastikan path benar

const LoadingScreen = ({ isVisible }) => (
  <div
    className={`
      fixed inset-0 z-[9999] flex flex-col items-center justify-center
      bg-black transition-opacity duration-700
      ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
    `}
    style={{ transition: "opacity 1.5s" }}
  >
    <img
      src="/logo.png"
      alt="AIBR Logo"
      className="w-28 h-auto mb-8 animate-pulse drop-shadow-2xl"
      draggable={false}
    />
    <Loader />
  </div>
);

export default LoadingScreen;
