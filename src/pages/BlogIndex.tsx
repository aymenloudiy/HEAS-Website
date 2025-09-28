import { Link } from "react-router";

type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string;
  cover: string;
  date?: string;
  readingTime?: string;
};

const posts: BlogPost[] = [
  {
    slug: "designing-spaces-that-speak",
    title:
      "Designing Spaces That Speak — The HEAS Approach to Timeless Interiors",
    cover: "/images/blogs/blog-1/3.png",
    date: "Sep 2025",
    readingTime: "3 min",
  },
];

export default function BlogsIndex() {
  return (
    <section className="bg-white text-black mb-16">
      <div className="mx-8 px-4 pt-10 md:pt-16">
        <header className="mb-8 md:mb-12">
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-24">
            Blog
          </h1>
        </header>

        {posts.length === 0 ? (
          <p className="text-sm text-black/70">
            No posts yet. Check back soon.
          </p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <li key={p.slug} className="group">
                <Link
                  to={`/blogs/${p.slug}`}
                  className="block overflow-hidden border border-black/10 focus:outline-none focus:ring-2 focus:ring-black"
                  aria-label={`Open blog post: ${p.title}`}
                >
                  <figure className="relative">
                    <img
                      src={p.cover}
                      alt={`${p.title} — cover`}
                      loading="eager"
                      className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-[1.02] aspect-[4/3]"
                    />
                  </figure>
                </Link>
                <Link to={`/blogs/${p.slug}`} className="mt-3 block">
                  <h2 className="text-xs! md:text-sm! font-medium leading-snug">
                    {p.title}
                  </h2>
                  {(p.date || p.readingTime) && (
                    <div className="text-xs md:text-sm text-black">
                      {[p.date, p.readingTime].filter(Boolean).join(" · ")}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
