// DelayedPromoModal.jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DelayedPromoModal({
  delay = 8000,          // jeda pertama
  repeatEvery = 0,       // jeda ulang (ms). contoh: 3000
  maxShows = Infinity,   // opsional batasi kemunculan
}) {
  const [open, setOpen] = useState(false);
  const shownRef = useRef(0);
  const navigate = useNavigate();

  // Tampil pertama kali
  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(true);
      shownRef.current += 1;
    }, delay);
    return () => clearTimeout(t);
  }, [delay]);

  // Muncul berulang setiap repeatEvery ms (setelah ditutup)
  useEffect(() => {
    if (!repeatEvery) return;
    const iv = setInterval(() => {
      if (!open && shownRef.current < maxShows) {
        setOpen(true);
        shownRef.current += 1;
      }
    }, repeatEvery);
    return () => clearInterval(iv);
  }, [repeatEvery, open, maxShows]);

  const close = () => setOpen(false);

  const goMaintenance = () => {
    close();
    navigate("/maintenance");
  };

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="promo-title"
            className="fixed inset-0 z-[70] grid place-items-center p-4"
            >
            <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                {/* Accent line 
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gray-400 via-gray-400 to-gray-400" />*/}

                <div className="relative bg-gradient-to-br from-zinc-900 to-black text-white p-8 sm:p-12">
                {/* Dekor SVG belakang 
                <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 opacity-20 blur-[1px] h-56 w-56"
                    viewBox="0 0 200 200"
                    fill="none"
                >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fbfbfb" />
            <stop offset="100%" stopColor="#fbfbfb" />
          </linearGradient>
        </defs>
        <path d="M100 10 L140 80 L190 90 L150 130 L160 190 L100 160 L40 190 L50 130 L10 90 L60 80 Z" fill="url(#g1)"/>
      </svg>

      {/* Tombol Close */}
      <button
        onClick={close}
        aria-label="Close"
        className="absolute right-3 top-3 h-8 w-10 grid place-items-center
                   rounded-full bg-white/10 hover:bg-white/20"
      >
        ×
      </button>

      {/* Copy marketing */}
      <p className="text-center tracking-wide text-sm sm:text-base mb-2 text-gray-300">
        Butuh UI rapi & cepat tanpa drama?
      </p>

      <h1
        id="promo-title"
        className="text-center font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl"
      >
        Level Up Your <span className="bg-gradient-to-r from-gray-100 to-gray-600 bg-clip-text text-transparent">UI</span>
      </h1>

      <p className="mt-4 text-center text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
        Konsultasi singkat, harga transparan: per tiket, hourly, atau retainer. Kita bantu prioritasin yang berdampak dulu.
      </p>

      {/* Value props */}
      <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
        {[
          "Gratis audit 10 menit",
          "SLA cepat (1–2 hari)",
          "Quote jelas sebelum mulai",
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-2 justify-center sm:justify-start">
            <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-200">{t}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={goMaintenance}
          className="px-7 py-3 rounded-lg bg-white text-black text-lg font-bold
                     hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                     transition shadow-[0_8px_30px_rgba(255,255,255,0.1)] animate-pulse"
        >
          CONSULT NOW!
        </button>
      </div>

      {/* Link kecil untuk yang ragu */}
      <div className="mt-3 text-center">
        <button onClick={close} className="text-xs text-gray-400 hover:text-gray-300 underline underline-offset-4">
          Nanti dulu
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
