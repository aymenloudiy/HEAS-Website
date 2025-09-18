import { useCallback, useEffect, useMemo, useState } from "react";

type ProjectImage = { src: string; alt: string };

const hero = {
  src: "/Project1/Picture/image-01.png",
  alt: "Church Street Residence — hero view over downtown skyline",
};

// eslint-disable-next-line react-refresh/only-export-components
export const projectImages: ProjectImage[] = [
  {
    src: "/Project1/Picture/image-02.png",
    alt: "Church Street Residence — image 2",
  },
  {
    src: "/Project1/Picture/image-03.png",
    alt: "Church Street Residence — image 3",
  },
  {
    src: "/Project1/Picture/image-04.png",
    alt: "Church Street Residence — image 4",
  },
  {
    src: "/Project1/Picture/image-05.png",
    alt: "Church Street Residence — image 5",
  },
  {
    src: "/Project1/Picture/image-06.png",
    alt: "Church Street Residence — image 6",
  },
  {
    src: "/Project1/Picture/image-07.JPG",
    alt: "Church Street Residence — image 7",
  },
  {
    src: "/Project1/Picture/image-08.png",
    alt: "Church Street Residence — image 8",
  },
  {
    src: "/Project1/Picture/image-09.JPG",
    alt: "Church Street Residence — image 9",
  },
  {
    src: "/Project1/Picture/image-10.JPG",
    alt: "Church Street Residence — image 10",
  },
  {
    src: "/Project1/Picture/image-11.png",
    alt: "Church Street Residence — image 11",
  },
  {
    src: "/Project1/Picture/image-12.JPG",
    alt: "Church Street Residence — image 12",
  },
  {
    src: "/Project1/Picture/image-13.png",
    alt: "Church Street Residence — image 13",
  },
  {
    src: "/Project1/Picture/image-14.JPG",
    alt: "Church Street Residence — image 14",
  },
  {
    src: "/Project1/Picture/image-15.png",
    alt: "Church Street Residence — image 15",
  },
  {
    src: "/Project1/Picture/image-16.png",
    alt: "Church Street Residence — image 16",
  },
  {
    src: "/Project1/Picture/image-17.png",
    alt: "Church Street Residence — image 17",
  },
  {
    src: "/Project1/Picture/image-18.png",
    alt: "Church Street Residence — image 18",
  },
  {
    src: "/Project1/Picture/image-19.png",
    alt: "Church Street Residence — image 19",
  },
  {
    src: "/Project1/Picture/image-20.png",
    alt: "Church Street Residence — image 20",
  },
  {
    src: "/Project1/Picture/image-21.png",
    alt: "Church Street Residence — image 21",
  },
];

export default function ChurchStreetResidence() {
  const gallery = useMemo<ProjectImage[]>(() => [hero, ...projectImages], []);

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const isOpen = openIdx !== null;

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
          Church Street Residence
        </h1>
        <p className="mt-2 text-sm md:text-base text-black/70">
          Toronto, Canada
        </p>

        <p className="mt-4 leading-relaxed text-sm md:text-base">
          Perched on the top floor of a downtown high-rise, the Church Street
          Residence is a one-bedroom condo that embraces light, materiality, and
          view as its defining elements. Facing east, the home captures sweeping
          vistas of the city and lake, bathing the interiors in the quiet poetry
          of sunrise each morning.
        </p>
        <p className="mt-4 leading-relaxed text-sm md:text-base">
          The design is guided by a palette of light oak wood, natural ash,
          white marble, and polished chrome—materials chosen for their timeless
          character and ability to reflect the changing light of the day.
          Natural woods ground the space with warmth, while marble surfaces
          introduce clarity and calm. Polished chrome accents catch the morning
          sun, bringing subtle brilliance to an otherwise serene environment.
        </p>
        <p className="mt-4 leading-relaxed text-sm md:text-base">
          Every detail has been approached with restraint, allowing the
          architecture and views to remain the focal points. Sculptural
          furniture, soft textiles, and carefully curated objects layer the
          space with comfort and elegance, turning everyday living into a
          refined experience.
        </p>
        <p className="mt-4 leading-relaxed text-sm md:text-base">
          The Church Street Residence is more than a city home—it is a retreat
          above the skyline, where design and nature meet in balance. With its
          elevated perspective and tranquil interiors, it embodies the beauty of
          living simply, surrounded by light, material, and the horizon beyond.
        </p>
      </div>

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

            <button
              type="button"
              onClick={() => setOpenIdx(null)}
              aria-label="Close"
              className="absolute -top-3 -right-3 rounded-full bg-white/90 px-3 py-1 text-black text-sm shadow hover:bg-white"
            >
              ×
            </button>

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

            <div className="mt-3 text-center text-xs text-white/80">
              {gallery[openIdx!].alt}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
