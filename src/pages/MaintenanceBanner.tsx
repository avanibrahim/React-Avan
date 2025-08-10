import { useNavigate } from "react-router-dom";

export default function MaintenanceBanner({ variant = "hero", onQuote = () => {} }) {
  // ✅ panggil hook di dalam komponen
  const navigate = useNavigate();

  const rates = [
    {
      title: "Per Tiket / Task",
      items: [
        "Minor UI fix (padding, warna, spacing): Rp150–500k/tiket",
        "Responsive / komponen menengah: Rp500k–1,5jt/tiket",
        "Halaman penuh / redesign section: Rp1,5–5jt/section",
      ],
    },
    {
      title: "Hourly / Jam",
      items: [
        "Cocok untuk pekerjaan sporadis / kecil",
        "Range: Rp150k–500k (mid), Rp500k–1,2jt (senior)",
        "Minimal charge: 2 jam",
      ],
    },
    {
      title: "Retainer Bulanan",
      items: [
        "Cocok untuk update rutin",
        "8 jam/bulan = Rp2,4–4jt, 20 jam/bulan = Rp6–10jt",
        "Kelebihan jam: tarif hourly +10–20%",
      ],
    },
  ];

  if (variant === "hero") {
    return (
      <section
        className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10
                   bg-gradient-to-br from-white to-gray-50 dark:from-zinc-950 dark:to-black
                   shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-6 sm:p-10"
      >
        {/* Accent line */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 opacity-80" />

        {/* Dekor glow */}
        <div className="pointer-events-none absolute -top-28 -right-24 h-72 w-72 rounded-full
                        bg-gradient-to-tr from-indigo-500/25 to-emerald-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full
                        bg-gradient-to-tr from-sky-500/20 to-fuchsia-400/20 blur-3xl" />

        <div className="relative flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight
                         bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-200
                         bg-clip-text text-transparent"
            >
              Maintenance UI Website — Fleksibel & Transparan
            </h2>
            <span
              className="text-xs sm:text-sm px-2.5 py-1 rounded-full border
                         border-black/10 dark:border-white/20 bg-white/70 dark:bg-white/10
                         text-black dark:text-white"
            >
              *terkecuali bug fix (FREE)
            </span>
          </div>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-3xl">
            Pilih model yang cocok: per tiket, per jam, atau retainer—tanpa ribet.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rates.map((col) => (
              <div
                key={col.title}
                className="group rounded-2xl border border-black/10 dark:border-white/10
                           bg-white/70 dark:bg-white/5 backdrop-blur
                           p-5 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold mb-2">{col.title}</h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {col.items.map((li, i) => (
                    <li key={i} className="flex gap-2">
                      {/* check icon mini */}
                      <svg
                        className="mt-0.5 h-4 w-4 flex-none text-emerald-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onQuote}
              className="px-4 py-2 rounded-xl bg-black text-white hover:bg-black/85
                         dark:bg-white dark:text-black dark:hover:bg-white/90 transition"
            >
              Minta Quote
            </button>

            {/* Back to Home */}
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-xl border border-black/10 dark:border-white/15
                         hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              Back to Home
            </button>

            <span className="text-xs text-gray-500 dark:text-gray-400">
              SLA cepat tersedia (Standard / Priority).
            </span>
          </div>
        </div>
      </section>
    );
  }

  // Fallback untuk variant lain (optional)
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Variant <span className="font-semibold">{String(variant)}</span> belum disiapkan. Gunakan <code>variant="hero"</code>.
      </p>
    </div>
  );
}
