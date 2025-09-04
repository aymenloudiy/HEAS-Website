import { Link } from "react-router";

export default function NewsContent() {
  const items = [
    {
      slug: "layering-materials-like-a-designer",
      title: "The Power of Texture: How to Layer Materials Like a Designer",
      cover: "/images/downtown-toronto-residence/1.jpg",
    },
    {
      slug: "before-after-toronto-townhome",
      title: "Inside a HEAS Project: Before & After of a Toronto Townhome",
      cover: "/images/downtown-toronto-residence/4.jpg",
    },
    {
      slug: "choosing-the-right-white-paint",
      title: "Choosing the Right White Paint: Our Studio’s Top Picks",
      cover: "/images/blogs/blog-1/3.png",
    },
    {
      slug: "new-team-members",
      title: "HEAS is Growing: Meet the New Members of Our Team",
      cover: "/pictures/image (114).jpg",
    },
  ];

  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-16">
        <h2 className="font-semibold text-2xl md:text-3xl mb-8">News</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((n) => (
            <li key={n.slug} className="group">
              <Link
                to={`/news/${n.slug}`}
                className="block rounded-xl overflow-hidden border border-black/10 group"
              >
                <div className="relative">
                  <img
                    src={n.cover}
                    alt={n.title}
                    className="w-full h-60 object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-white/80 flex items-end justify-start p-4 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
                  >
                    <h3
                      className="text-base md:text-lg font-light transform translate-y-4 
                     group-hover:translate-y-0 transition-transform duration-300 ease-out"
                    >
                      {n.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
