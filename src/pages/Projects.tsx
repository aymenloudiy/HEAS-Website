import { Link } from "react-router";

type Project = {
  slug: string;
  title: string;
  location?: string;
  cover: string;
  imagesCount?: number;
  blurb?: string;
};

const projects: Project[] = [
  {
    slug: "downtown-toronto-residence",
    title: "Downtown Toronto Residence",
    location: "Toronto, Canada",
    cover: "/images/downtown-toronto-residence/1.jpg",
    imagesCount: 22,
    blurb:
      "Contemporary minimalism with warm wood, soft greys, and clean white surfaces for calm, refined city living.",
  },
];

export default function Projects() {
  return (
    <>
      <section className="bg-white text-black">
        <div className="mx-auto max-w-6xl px-4 pt-10 md:pt-16">
          <header className="mb-8 md:mb-12">
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
              Projects
            </h1>
          </header>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <li key={p.slug} className="group">
                <Link
                  to={p.slug}
                  className="block overflow-hidden border border-black/10 focus:outline-none focus:ring-2 focus:ring-black"
                  aria-label={`Open project: ${p.title}`}
                >
                  <figure className="relative">
                    <img
                      src={p.cover}
                      alt={`${p.title} — cover`}
                      loading="eager"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur px-3 py-2 text-[11px] md:text-xs">
                      {p.imagesCount
                        ? `${p.imagesCount} photos`
                        : "View project"}
                    </figcaption>
                  </figure>
                </Link>

                <Link to={p.slug} className="mt-3 block">
                  <h2 className="text-base md:text-lg font-medium">
                    {p.title}
                  </h2>
                  {p.location && (
                    <div className="text-xs md:text-sm text-black/70">
                      {p.location}
                    </div>
                  )}
                  {p.blurb && (
                    <p className="mt-2 text-sm text-black/80 line-clamp-2">
                      {p.blurb}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {projects.length === 0 && (
            <div className="text-sm text-black/70">
              No projects yet. Come back soon.
            </div>
          )}
        </div>
      </section>
      {/* <ul className="mx-auto max-w-6xl px-4 pt-10 md:pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
        <li>
          <figure>
            <img
              src="/images/toronto-met-university.jpg"
              alt="Toronto Metropolitan University School of Medicine Building"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </figure>
          <div className="mt-2 text-[14px] leading-snug">
            <span className="font-semibold">
              Toronto Metropolitan University School of Medicine Building
            </span>{" "}
            — Brampton, Ontario, Canada
          </div>
        </li>

        <li>
          <figure>
            <img
              src="/images/carmen-corbasson-centre.jpg"
              alt="Carmen Corbasson Community Centre"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </figure>
          <div className="mt-2 text-[14px] leading-snug">
            <span className="font-semibold">
              Carmen Corbasson Community Centre
            </span>{" "}
            — Toronto, Ontario, Canada
          </div>
        </li>

        <li>
          <figure>
            <img
              src="/images/york-university-markham.jpg"
              alt="York University Markham Campus"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </figure>
          <div className="mt-2 text-[14px] leading-snug">
            <span className="font-semibold">
              York University Markham Campus
            </span>{" "}
            — Markham, Ontario, Canada
          </div>
        </li>
      </ul> */}
    </>
  );
}
