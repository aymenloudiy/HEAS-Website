// src/pages/Projects.tsx
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
  },
  {
    slug: "church-street-residence",
    title: "Church Street Residence",
    location: "Toronto, Canada",
    cover: "/Project1/Cover Picture/Copy of 403-04.png",
    imagesCount: 22,
  },
  {
    slug: "uptown-core-kitchen",
    title: "Uptown Core Kitchen",
    location: "Oakville, Canada",
    cover: "/Project 3/Cover Photo/Kitchen 04.png",
  },
];

export default function Projects() {
  return (
    <section className="bg-white text-black mb-16">
      <div className="mx-8  px-4 pt-10 md:pt-16">
        <header className="mb-8 md:mb-12">
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-24">
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
                    className="w-full h-[512px] object-cover transition-transform duration-300 group-hover:scale-[1.02] aspect-[4/3]"
                  />
                </figure>
              </Link>

              <Link to={p.slug} className="mt-3 block">
                <h2 className="text-base md:text-lg font-medium">{p.title}</h2>
                {p.location && (
                  <div className="text-xs md:text-sm">{p.location}</div>
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
  );
}
