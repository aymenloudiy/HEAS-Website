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
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-16">
        <header className="mb-10">
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
            Blog
          </h1>
        </header>

        {posts.length === 0 ? (
          <p className="text-black/70">No posts yet. Check back soon.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="eager"
                    />
                  </figure>
                </Link>

                <div className="mt-3">
                  <Link to={`/blogs/${p.slug}`} className="block">
                    <h2 className="text-base md:text-lg font-medium leading-snug">
                      {p.title}
                    </h2>
                  </Link>
                  {(p.date || p.readingTime) && (
                    <div className="text-xs md:text-sm text-black/60 mt-1">
                      {[p.date, p.readingTime].filter(Boolean).join(" · ")}
                    </div>
                  )}
                  <p className="mt-2 text-sm text-black/80 line-clamp-3">
                    {p.excerpt}
                  </p>
                  <Link
                    to={`/blogs/${p.slug}`}
                    className="mt-3 inline-block text-sm underline underline-offset-4"
                  >
                    Read more
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
