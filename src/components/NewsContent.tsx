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
    <section className="bg-white text-black mb-16">
      <div className="px-6 max-w-6xl pt-24 pb-10">
        <h1 className="font-semibold text-xl md:text-2xl mb-6">News</h1>
      </div>

      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <ul className="grid grid-cols-12 gap-x-6 gap-y-10 px-4 md:px-6 items-start">
          {items.map((item, idx) => (
            <li
              key={item.slug}
              className={`col-span-12 ${
                idx === 0
                  ? "md:col-span-7"
                  : idx === 1
                  ? "md:col-span-5"
                  : "md:col-span-6"
              }`}
            >
              <Link
                to={`/news/${item.slug}`}
                className="group block h-full w-full focus:outline-none focus:ring-2 focus:ring-black/60"
                aria-label={`Open news: ${item.title}`}
              >
                <div
                  className={`relative ${
                    idx < 2 ? "h-[340px]" : "h-[320px]"
                  } w-full overflow-hidden`}
                >
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading={idx < 2 ? "eager" : "lazy"}
                    draggable={false}
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                    <h3 className="m-4 text-white font-[butler] text-[24px] translate-y-6 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 drop-shadow">
                      {item.title}
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
