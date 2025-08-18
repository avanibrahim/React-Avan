import { useEffect, useState } from "react";

// Overlay animasi turun saat toggle light/dark tanpa mengubah kode existing
export default function ThemeTransitionOverlay() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const html = document.documentElement;
    const obs = new MutationObserver(() => setKey((k) => k + 1));
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* layer overlay: akan re-mount setiap class html berubah (termasuk dark) */}
      <div
        key={key}
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-gray-300 dark:from-black dark:via-black dark:to-black"
          style={{ animation: "slideDownFade 700ms ease-in-out forwards" }}
        />
      </div>

      {/* animasi inline (tanpa file css terpisah) */}
      <style>{`
        @keyframes slideDownFade {
          0% { transform: translateY(-100%); opacity: 1; }
          60% { opacity: 0.85; }
          100% { transform: translateY(0); opacity: 0; }
        }
      `}</style>
    </>
  );
}
