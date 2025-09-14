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
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-10">
        <h1 className="font-semibold text-xl md:text-2xl mb-6">News</h1>
      </div>

      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <ul className="grid grid-cols-12 gap-x-6 gap-y-10 px-4 md:px-6 items-start">
          <li className="col-span-12 md:col-span-7">
            <Link
              to={`/news/${items[0].slug}`}
              className="block h-full w-full focus:outline-none focus:ring-2 focus:ring-black/60"
              aria-label={`Open news: ${items[0].title}`}
            >
              <div className="relative h-[340px] w-full overflow-hidden">
                <img
                  src={items[0].cover}
                  alt={items[0].title}
                  className="h-full w-full object-cover"
                  loading="eager"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                  <h3 className="m-4 text-white text-sm md:text-base font-normal drop-shadow">
                    {items[0].title}
                  </h3>
                </div>
              </div>
            </Link>
          </li>

          <li className="col-span-12 md:col-span-5">
            <Link
              to={`/news/${items[1].slug}`}
              className="block h-full w-full focus:outline-none focus:ring-2 focus:ring-black/60"
              aria-label={`Open news: ${items[1].title}`}
            >
              <div className="relative h-[340px] w-full overflow-hidden">
                <img
                  src={items[1].cover}
                  alt={items[1].title}
                  className="h-full w-full object-cover"
                  loading="eager"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                  <h3 className="m-4 text-white text-sm md:text-base font-normal drop-shadow">
                    {items[1].title}
                  </h3>
                </div>
              </div>
            </Link>
          </li>

          <li className="col-span-12 md:col-span-6">
            <Link
              to={`/news/${items[2].slug}`}
              className="block h-full w-full focus:outline-none focus:ring-2 focus:ring-black/60"
              aria-label={`Open news: ${items[2].title}`}
            >
              <div className="relative h-[320px] w-full overflow-hidden">
                <img
                  src={items[2].cover}
                  alt={items[2].title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                  <h3 className="m-4 text-white text-sm md:text-base font-normal drop-shadow">
                    {items[2].title}
                  </h3>
                </div>
              </div>
            </Link>
          </li>

          <li className="col-span-12 md:col-span-6">
            <Link
              to={`/news/${items[3].slug}`}
              className="block h-full w-full focus:outline-none focus:ring-2 focus:ring-black/60"
              aria-label={`Open news: ${items[3].title}`}
            >
              <div className="relative h-[320px] w-full overflow-hidden">
                <img
                  src={items[3].cover}
                  alt={items[3].title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                  <h3 className="m-4 text-white text-sm md:text-base font-normal drop-shadow">
                    {items[3].title}
                  </h3>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
