import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        key="loading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden"
      >
        {/* Shimmer effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-100 to-white animate-pulse" />

        {/* Logo + Text */}
        <div className="z-10 text-center">
          <img
            src="/image/favicon.png"
            alt="Logo"
            className="h-20 w-20 mx-auto mb-4 animate-bounce"
          />
          <h1 className="text-xl font-semibold text-gray-800">Memuat Website...</h1>
          <p className="text-sm text-gray-600 mt-1 italic">“Menuju layanan diagnosis yang lebih cerdas.”</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
