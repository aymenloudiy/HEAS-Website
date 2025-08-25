import { projectImages } from "./Project-1";
import { Link } from "react-router";

export default function DowntownTorontoResidenceGallery() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-5xl px-4 pt-10 md:pt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold">Gallery</h2>
          <Link to=".." relative="path" className="underline text-sm">
            Back to project
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 mt-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectImages.map((img) => (
            <button
              key={img.src}
              className="group text-left rounded-lg overflow-hidden border border-black/10"
              onClick={() => {
                /* openLightbox(img.src) */
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="px-3 py-2 text-[11px] md:text-xs bg-white">
                {img.alt}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
