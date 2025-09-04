import { useParams, Link } from "react-router";

const CONTENT = {
  "designing-spaces-that-speak": {
    title:
      "Designing Spaces That Speak — The HEAS Approach to Timeless Interiors",
    intro:
      "At HEAS, we believe that your home should feel like an extension of your personality—every texture, color, and silhouette telling part of your story. Our work is rooted in crafting interiors that are not only beautiful but also deeply functional, elevating the everyday moments of life.",
    images: {
      square: "/images/blogs/blog-1/3.png",
      rect1: "/images/blogs/blog-1/4.png",
      rect2: "/images/blogs/blog-1/7.png",
    },
    sections: [
      {
        h: "Why Our Designs Stand Out",
        items: [
          {
            b: "Tailored for You –",
            t: " No two homes (or clients) are the same. We listen, understand, and design spaces that reflect your lifestyle.",
          },
          {
            b: "Timeless Meets Trendy –",
            t: " We balance current design trends with enduring aesthetics, ensuring your space remains fresh for years to come.",
          },
          {
            b: "Details That Matter –",
            t: " From custom millwork to curated furnishings, every element is intentional.",
          },
        ],
      },
      {
        h: "Trends We’re Loving in 2025",
        items: [
          {
            b: "Earthy Minimalism –",
            t: " Warm wood tones, soft neutrals, and organic shapes for a grounded yet airy feel.",
          },
          {
            b: "Statement Lighting –",
            t: " Sculptural fixtures that act as both illumination and art.",
          },
          {
            b: "Sustainable Luxury –",
            t: " Materials and finishes that look high-end while respecting the planet.",
          },
        ],
      },
    ],
    process:
      "We start with conversation—understanding your needs and inspirations—then move into conceptual mood boards, space planning, and final styling. Our access to exclusive trade discounts means we can deliver premium pieces without inflating your budget.",
    why: "Our clients often say we make the design process “effortless.” That’s because we handle the heavy lifting—sourcing, ordering, and coordinating—while you focus on enjoying your new space.",
  },
} as const;

export default function BlogPost() {
  const { slug } = useParams();
  const post = CONTENT[slug as keyof typeof CONTENT];

  if (!post) {
    return (
      <section className="bg-white text-black">
        <div className="mx-auto max-w-5xl px-4 pt-24 pb-16">
          <p className="mb-6">Post not found.</p>
          <Link to="/blogs" className="underline">
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="bg-white text-black">
      <div className="mx-auto max-w-5xl px-4 pt-24 pb-16">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            {post.title}
          </h1>
          <div className="mt-2 text-sm text-black/60">
            Sep 2025 · 3 min read
          </div>
        </header>

        <p className="text-lg leading-relaxed mb-10 max-w-3xl">{post.intro}</p>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure>
              <img
                src={CONTENT["designing-spaces-that-speak"].images.square}
                alt="Square visual 1"
                className="w-full h-auto rounded-lg border border-black/10"
                loading="eager"
              />
            </figure>

            <figure>
              <img
                src={CONTENT["designing-spaces-that-speak"].images.rect2}
                alt="Square visual 2"
                className="w-full h-auto rounded-lg border border-black/10"
                loading="lazy"
              />
            </figure>

            <figure className="md:col-span-2">
              <img
                src={CONTENT["designing-spaces-that-speak"].images.rect1}
                alt="Rectangular visual"
                className="w-full h-auto rounded-lg border border-black/10"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {post.sections.map((sec, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">{sec.h}</h2>
            <ul className="space-y-2">
              {sec.items.map((it, j) => (
                <li key={j} className="leading-relaxed">
                  <strong>{it.b}</strong>
                  {it.t}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            The HEAS Design Process
          </h2>
          <p className="leading-relaxed max-w-3xl">{post.process}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Why Clients Choose HEAS
          </h2>
          <p className="leading-relaxed max-w-3xl">{post.why}</p>
        </section>

        <footer className="pt-6 border-t border-black/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
            <Link to="/blogs" className="underline underline-offset-4">
              ← Back to Blog
            </Link>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-5 py-2 rounded-lg hover:bg-neutral-800 transition"
            >
              Contact HEAS
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}
