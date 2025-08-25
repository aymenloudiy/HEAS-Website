import { Link } from "react-router";

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
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-5xl px-4 pt-10 md:pt-16">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Downtown Toronto Residence
        </h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-sm md:text-base">
          Located in the heart of downtown Toronto, this residence is a study in
          contemporary minimalism and refined comfort. The design embraces a
          restrained palette of soft greys, warm wood finishes, and clean white
          surfaces, creating an atmosphere of calm and sophistication that
          stands in contrast to the fast-paced urban setting outside.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-4 mt-8 md:mt-10">
        <Link to="gallery" aria-label="Open gallery" className="group block">
          <figure className="relative overflow-hidden rounded-xl border border-black/10">
            <img
              src={hero.src}
              alt={hero.alt}
              loading="eager"
              className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur px-3 py-2 text-xs">
              Click to view full gallery (22 photos)
            </figcaption>
          </figure>
        </Link>
      </div>

      <div className="mx-auto max-w-5xl px-4 mt-8">
        <p className="max-w-3xl leading-relaxed text-sm md:text-base">
          The open-concept layout maximizes function and flow. Custom millwork
          and built-ins keep lines sleek and spaces uncluttered. Light—both
          natural and concealed—plays a central role, softly defining
          architectural elements and creating a sense of intimacy in the
          evening.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-4 mt-8 md:mt-12 pb-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {projectImages.map((img) => (
            <figure
              key={img.src}
              className="mb-4 break-inside-avoid rounded-lg overflow-hidden border border-black/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <figcaption className="px-3 py-2 text-[11px] md:text-xs bg-white">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-20">
        <p className="max-w-3xl leading-relaxed text-sm md:text-base">
          Every detail—from spatial planning to material selection—was conceived
          to create an environment that feels timeless, functional, and
          effortlessly elegant, tailored for modern city living.
        </p>
      </div>
    </section>
  );
}
