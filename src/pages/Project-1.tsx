import { useEffect, useMemo, useState, useCallback } from "react";

type ProjectImage = { src: string; alt: string };

const hero = {
  src: "/images/downtown-toronto-residence/1.jpg",
  alt: "Living area with floating media console and wood-paneled TV wall",
};

// eslint-disable-next-line react-refresh/only-export-components
export const projectImages: ProjectImage[] = [
  {
    src: "/images/downtown-toronto-residence/2.jpg",
    alt: "Open-concept living and dining with soft greys and warm wood",
  },
  {
    src: "/images/downtown-toronto-residence/3.jpg",
    alt: "Sculptural wall detailing adding depth and texture",
  },
  {
    src: "/images/downtown-toronto-residence/4.jpg",
    alt: "Bedroom with circular mirror feature wall",
  },
  {
    src: "/images/downtown-toronto-residence/5.jpg",
    alt: "Layered textiles and soft furnishings for warmth",
  },
  {
    src: "/images/downtown-toronto-residence/6.jpg",
    alt: "Minimalist kitchen with handleless cabinetry",
  },
  {
    src: "/images/downtown-toronto-residence/7.jpg",
    alt: "Integrated appliances and streamlined dining counter",
  },
  {
    src: "/images/downtown-toronto-residence/8.jpg",
    alt: "Low-profile sofa and sculptural lounge chair",
  },
  {
    src: "/images/downtown-toronto-residence/9.jpg",
    alt: "Custom millwork with built-in storage",
  },
  {
    src: "/images/downtown-toronto-residence/10.jpg",
    alt: "Wood paneling detail",
  },
  {
    src: "/images/downtown-toronto-residence/11.jpg",
    alt: "Geometric-pattern area rug",
  },
  {
    src: "/images/downtown-toronto-residence/12.jpg",
    alt: "Sheer drapery filtering daylight",
  },
  {
    src: "/images/downtown-toronto-residence/13.jpg",
    alt: "Concealed LED lighting emphasizing lines",
  },
  {
    src: "/images/downtown-toronto-residence/14.jpg",
    alt: "Dining corner with minimalist table",
  },
  {
    src: "/images/downtown-toronto-residence/15.jpg",
    alt: "Entryway with built-in cabinetry",
  },
  {
    src: "/images/downtown-toronto-residence/16.jpg",
    alt: "Bedroom detail with layered bedding",
  },
  {
    src: "/images/downtown-toronto-residence/17.jpg",
    alt: "Bathroom with clean white surfaces",
  },
  {
    src: "/images/downtown-toronto-residence/18.jpg",
    alt: "Sculptural chair vignette",
  },
  {
    src: "/images/downtown-toronto-residence/19.jpg",
    alt: "Media wall close-up",
  },
  {
    src: "/images/downtown-toronto-residence/20.jpg",
    alt: "Kitchen worktop and backsplash detail",
  },
  {
    src: "/images/downtown-toronto-residence/21.jpg",
    alt: "Night lighting ambience",
  },
  {
    src: "/images/downtown-toronto-residence/22.jpg",
    alt: "Overall view tying spaces together",
  },
];

export default function DowntownTorontoResidence() {
  // Build one gallery array (hero first)
  const gallery = useMemo<ProjectImage[]>(() => [hero, ...projectImages], []);

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const isOpen = openIdx !== null;

  // keyboard controls
  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight")
        setOpenIdx((i) => (i === null ? 0 : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft")
        setOpenIdx((i) =>
          i === null ? 0 : (i - 1 + gallery.length) % gallery.length
        );
    },
    [isOpen, gallery.length]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKey]);

  // lock page scroll while modal open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-5xl px-2 pt-10 md:pt-16">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
          Downtown Toronto Residence
        </h1>
        <p className="mt-4 leading-relaxed text-sm md:text-base">
          Located in the heart of downtown Toronto, this residence is a study in
          contemporary minimalism and refined comfort. The design embraces a
          restrained palette of soft greys, warm wood finishes, and clean white
          surfaces, creating an atmosphere of calm and sophistication that
          stands in contrast to the fast-paced urban setting outside.
        </p>
      </div>

      {/* HERO — NOT a link; click opens modal index 0 */}
      <div className="mx-auto max-w-5xl px-2 mt-8 md:mt-10">
        <button
          type="button"
          aria-label="Open larger image"
          onClick={() => setOpenIdx(0)}
          className="group block w-full text-left"
        >
          <figure className="relative overflow-hidden border border-black/10">
            <img
              src={hero.src}
              alt={hero.alt}
              loading="eager"
              className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </figure>
        </button>
      </div>

      <div className="mx-auto max-w-5xl px-2 mt-8">
        <p className="max-w-3xl leading-relaxed text-sm md:text-base">
          The open-concept layout maximizes function and flow. Custom millwork
          and built-ins keep lines sleek and spaces uncluttered. Light—both
          natural and concealed—plays a central role, softly defining
          architectural elements and creating a sense of intimacy in the
          evening.
        </p>
      </div>

      {/* Masonry-like grid */}
      <div className="mx-auto max-w-5xl px-2 mt-8 md:mt-12 pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {projectImages.map((img, i) => (
            <figure
              key={img.src}
              className="mb-4 break-inside-avoid overflow-hidden border border-black/10"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(i + 1)} // +1 because hero is index 0
                className="block w-full focus:outline-none focus:ring-2 focus:ring-black/60"
                aria-label="Open larger image"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.01]"
                />
              </button>
            </figure>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-2 pb-20">
        <p className="max-w-3xl leading-relaxed text-sm md:text-base">
          Every detail—from spatial planning to material selection—was conceived
          to create an environment that feels timeless, functional, and
          effortlessly elegant, tailored for modern city living.
        </p>
      </div>

      {/* LIGHTBOX MODAL */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpenIdx(null)} // close on backdrop
        >
          <div
            className="relative max-w-[94vw] max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[openIdx!].src}
              alt={gallery[openIdx!].alt}
              className="max-w-[94vw] max-h-[88vh] object-contain"
            />

            {/* Close */}
            <button
              type="button"
              onClick={() => setOpenIdx(null)}
              aria-label="Close"
              className="absolute -top-3 -right-3 rounded-full bg-white/90 px-3 py-1 text-black text-sm shadow hover:bg-white"
            >
              ×
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={() =>
                setOpenIdx((i) =>
                  i === null ? 0 : (i - 1 + gallery.length) % gallery.length
                )
              }
              aria-label="Previous image"
              className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-2 text-white/90 hover:text-white"
            >
              ‹
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={() =>
                setOpenIdx((i) => (i === null ? 0 : (i + 1) % gallery.length))
              }
              aria-label="Next image"
              className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-2 text-white/90 hover:text-white"
            >
              ›
            </button>

            {/* Caption */}
            <div className="mt-3 text-center text-xs text-white/80">
              {gallery[openIdx!].alt}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
