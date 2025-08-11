import { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ProjectLike = {
  image: string;
  title: string;
  // (opsional) salah satu dari ini untuk aspect ratio:
  width?: number;
  height?: number;
  aspectW?: number; // contoh: 16
  aspectH?: number; // contoh: 9
};

type Props = {
  project: ProjectLike;
  holdMs?: number; // durasi menahan loading agar terlihat (ms)
  placeholderHeight?: number; // fallback tinggi (px) bila ratio tidak ada
  animation?: "shimmer" | "dots";
};

export function ProjectImage({
  project,
  placeholderHeight = 360,
  animation = "shimmer",
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const tRef = useRef<number | null>(null);

  // hitung aspect ratio bila tersedia
  const ratio =
    project?.aspectW && project?.aspectH
      ? project.aspectH / project.aspectW
      : project?.width && project?.height
      ? project.height / project.width
      : null;

  const handleAfterLoad = () => {
    // tahan skeleton beberapa ms supaya efek loading terlihat
    tRef.current = window.setTimeout(() => setLoaded(true));
  };

  const handleError = () => setLoaded(true);

  useEffect(() => {
    return () => {
      if (tRef.current) window.clearTimeout(tRef.current);
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      style={ratio ? { paddingTop: `${ratio * 100}%` } : { height: placeholderHeight }}
    >
      {/* Skeleton / placeholder */}
      {!loaded && (
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          {/* Base skeleton */}
          <div className="h-90 w-full bg-gray-200" />

          {/* Variant animasi */}
          {animation === "shimmer" ? (
            <>
              <div className="absolute inset-0 -translate-x-full w-full h-90 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.6s_linear_infinite]" />
              {/* Keyframes untuk shimmer */}
              <style>{`
                @keyframes shimmer { 100% { transform: translateX(100%); } }
              `}</style>
            </>
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex items-end gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400 animate-bounce" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Gambar */}
      <LazyLoadImage
        src={project.image}
        alt={project.title}
        effect="blur"
        placeholderSrc="/logo.png"
        afterLoad={handleAfterLoad}
        onError={handleError}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
