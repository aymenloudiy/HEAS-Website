import { useCallback, useEffect, useMemo, useState } from "react";

type ProjectImage = { src: string; alt: string };

const hero = {
  src: "/Project 3/Cover Photo/Kitchen 04.png",
  alt: "Church Street Residence — hero view over downtown skyline",
};

// eslint-disable-next-line react-refresh/only-export-components
export const projectImages: ProjectImage[] = [
  {
    src: "/Project 3/Photos/Kitchen 02.png",
    alt: "Church Street Residence — image 2",
  },
  {
    src: "/Project 3/Photos/Kitchen 03.png",
    alt: "Church Street Residence — image 3",
  },
  {
    src: "/Project 3/Photos/Kitchen 04.png",
    alt: "Church Street Residence — image 4",
  },
  {
    src: "/Project 3/Photos/Kitchen 05.png",
    alt: "Church Street Residence — image 5",
  },
  {
    src: "/Project 3/Photos/Kitchen 06.png",
    alt: "Church Street Residence — image 6",
  },
  {
    src: "/Project 3/Photos/Kitchen 07.png",
    alt: "Church Street Residence — image 7",
  },
  {
    src: "/Project 3/Photos/Kitchen 08.png",
    alt: "Church Street Residence — image 8",
  },
  {
    src: "/Project 3/Photos/Kitchen 09.png",
    alt: "Church Street Residence — image 9",
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
        <header className="mx-auto max-w-6xl px-4 pt-12 md:pt-20">
          <h1 className="text-xl md:text-2xl font-semibold">
            Uptown Core Kitchen
          </h1>
          <p className="text-sm md:text-base text-black/70 mt-1">
            Oakville, Canada
          </p>
        </header>

        <section className=" max-w-3xl px-4 py-10 md:py-14 space-y-5 text-[15px] leading-relaxed">
          <p>
            Nestled in the heart of Oakville’s Uptown Core, this newly
            reimagined kitchen brings together timeless elegance and modern
            functionality under soaring high ceilings. The design is grounded in
            a classic palette— white shaker cabinetry paired with brushed gold
            hardware—that feels both refined and enduring.
          </p>
          <p>
            At the heart of the space is a striking waterfall island, its veined
            quartz surface unfolding seamlessly into the floor. The island not
            only anchors the room but also provides an inviting gathering place,
            elevated by sculptural bar stools and a dramatic black vessel
            centerpiece. Overhead, a cluster of crystal pendants casts a warm
            glow, complementing the natural daylight that fills the room.
          </p>
          <p>
            The cabinetry, custom-fitted to maximize vertical space, rises to
            the ceiling, emphasizing height while offering generous storage.
            Integrated appliances—including a Wolf range and panel-ready
            refrigerator—blend seamlessly into the millwork for a streamlined
            look. Subtle details, such as the gold pulls, modern Roman shades,
            and layered lighting, enrich the kitchen with warmth and tactility.
          </p>
          <p>
            Materiality plays a central role: white quartz with delicate veining
            provides a serene backdrop, brushed gold accents add richness and
            contrast, and light oak flooring grounds the space in natural
            warmth, softening the crisp cabinetry and tying the kitchen back to
            the broader home.
          </p>
          <p>
            The Uptown Core Kitchen embodies the HEAS ethos of classic, timeless
            design—a space that balances function and beauty, where every detail
            contributes to a refined yet welcoming atmosphere. More than a
            kitchen, it is the true heart of the home.
          </p>
        </section>
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
                onClick={() => setOpenIdx(i + 1)}
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
          onClick={() => setOpenIdx(null)}
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
