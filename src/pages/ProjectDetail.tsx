import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen"; 
import { ExternalLink, Globe } from "lucide-react";
import BackButton from "../components/ButtonBack";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [showLoader, setShowLoader] = useState(true);
  const navigate = useNavigate();

  // Loader saat MASUK halaman
  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 600); // durasi bebas
    return () => clearTimeout(t);
  }, []);

  // Helper untuk menampilkan loader dulu, baru pindah halaman
  const goWithLoader = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLoader(true);
    setTimeout(() => navigate(to), 1000); // beri waktu render loader
  };

  if (!project) {
    return (
      <div className="min-h-[60vh] grid place-items-center p-6 text-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">Project not found</h1>
          <Link to="/#projects" className="underline">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  // OPTIONAL: jika kamu punya komponen nav sendiri, aktifkan ini & ganti namanya
  // import YourNavigation from '@/components/YourNavigation';
  // <YourNavigation />

  // fallback link kalau demo/github tidak ada
  const demoHref = project.demoLink || "";
  const githubHref = (project as any).githubLink || "#";

  // contoh rating (static). Jika punya data rating di object, ganti dari project.rating
  const ratingValue = 4.7; // 0..5
  const ratingCount = 128;

  return (
    <>
    <LoadingScreen isVisible={showLoader} />

    <section className="relative min-h-dvh overflow-hidden bg-gray-50 dark:bg-neutral-950">
  {/* background/gradient kamu */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-b
                  from-gray-300 via-gray-200/60 to-gray-50
                  dark:from-rose-900/40 dark:via-rose-800/20 dark:to-neutral-950" />

  {/* ⬇️ penting: container supaya tidak melebar */}
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        {/* Breadcrumb + Back */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <Link to="/#projects">
  <BackButton />
</Link>

          <nav className="text-sm">
            <ol className="flex items-center gap-2 text-black/70 dark:text-white/70">
              <li>
                <Link to="/#projects" onClick={goWithLoader("/#projects")} className="hover:underline">
                  Projects
                </Link>
              </li>
            </ol>
          </nav>
        </div>

        {/* Title + summary */}
        <header className="mb-8">
  {/* Title row with icon on the left */}
  <div className="flex items-center gap-3">
    <Globe
      className="h-8 w-8 text-black/70 dark:text-white/70 flex-shrink-0"
      aria-hidden
    />
    <h1 className="m-0 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
      {project.title}
    </h1>
  </div>

  {project.summary && (
    <p className="mt-2 text-black/70 dark:text-white/70 border-b border-black/90 dark:border-white/90 pb-2">
      {project.summary}
    </p>
  )}
</header>

        {/* 2-column: Left content / Right image + info */}
      {/* MAIN layout: mobile-first order, desktop positioned */}
      <div className="grid lg:grid-cols-12 gap-8 lg:[grid-auto-flow:dense]">

        {/* MEDIA FIRST on mobile → placed to RIGHT on desktop */}
        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
        {/* Image dengan efek zoom-in saat hover */}
        <figure className="relative">
            <div className="relative z-10">
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
                />
            </div>
            <figcaption className="sr-only">{project.title}</figcaption>

            {/* Kucing Lottie via iFrame + mode light/dark */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-[1.5rem] right-3 select-none z-0 cat-peek-5s"
            >
                {/* Badge supaya tetap kebaca di foto ramai */}
                <span className="inline-flex items-center justify-center w-10 h-10">
                <iframe
                    src="https://lottie.host/embed/50374bdf-bb4c-4cc6-a691-9647c29ae5d4/GcAYA8TBxU.lottie"
                    title="walking cat"
                    className="w-8 h-8 border-0 bg-transparent overflow-hidden
                            transition-[filter]
                            dark:invert dark:brightness-120"
                />
                </span>
            </span>

            <style>{`
                @keyframes cat-peek {
                /* dari bawah (ngumpet di balik foto) */
                0%, 100% { transform: translateY(2.4rem); }
                /* naik ke posisi sekarang (muncul) */
                40%, 60% { transform: translateY(0); }
                }
                .cat-peek-3s { animation: cat-peek 8s ease-in-out infinite; will-change: transform; }
                .cat-peek-5s { animation: cat-peek 5s ease-in-out infinite; will-change: transform; }

                @media (prefers-reduced-motion: reduce) {
                .cat-peek-5s, .cat-peek-5s { animation: none; }
                }
            `}</style>
            </figure>

        {/* Tech & Category (langsung di bawah image) */}
        <div className="mt-4 rounded-2xl p-5 border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-wrap items-center justify-center gap-2 text-center">
                <span className="px-3 py-1 rounded-full text-xs font-semibold
                                bg-white/70 text-black border border-black/10
                                dark:bg-white/10 dark:text-white dark:border-white/10">
                {project.category}
                </span>
                {(project.technologies || []).map((t) => (
                <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium
                            bg-white/70 text-black border border-black/10
                            dark:bg-white/10 dark:text-white dark:border-white/10"
                >
                    {t}
                </span>
                ))}
            </div>
            </div>
        </div>

        {/* TEXT SECOND on mobile → placed to LEFT on desktop */}
        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
        {/* Description */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white">
            – Description
        </h2>
        <div className="mt-3 text-justify rounded-2xl p-5 border border-black/10 bg-white/70
                        dark:border-white/10 dark:bg-white/5">
            <article className="space-y-4 text-black/80 dark:text-white/80 leading-relaxed">
            <p>
                {project.description || "No description available."}
            </p>
            <p>
                {project.description2 || "No additional description available."}
            </p>
            </article>
        </div>

        {/* Client */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white mt-6">
            – Client
        </h2>
        <div className="mt-3 rounded-2xl p-5 border border-black/10 bg-white/70
                        dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-black/70 dark:text-white/70">
                {project.clientName || "Undisclosed"}
            </p>
            <a
                href={project.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
            >
               <img src="/icons/ig.png" width="26" height="26" alt="Logo" />
            </a>
            </div>
        </div>

        {/* Actions (opsional, tetap di bawah client) */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
  href={demoHref}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
             bg-black text-white hover:bg-black/90
             dark:bg-white dark:text-black dark:hover:bg-white/90
             transition font-semibold"
>
  {/* Eye icon */}
  <ExternalLink className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true" />
  <span>Visit</span>
</a>


            {project.githubLink && (
            <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                       bg-black text-white hover:bg-black/90
                       dark:bg-gray-500 dark:text-white transition font-semibold hover:bg-gray-600 dark:hover:bg-gray-800"
          >
            {/* Icon GitHub */}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.774.418-1.305.762-1.605-2.665-.304-5.466-1.336-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.8c1.02.004 2.047.138 3.005.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.823 1.102.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12 24 5.37 18.63 0 12 0Z"
              />
            </svg>
          
            <span>GitHub</span>
          </a>
          
            )}
        </div>
        </div>
        </div>
      </div>
    </section>
    </>
  );
}
