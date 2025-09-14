import { projectImages } from "./Project-1";

export default function DowntownTorontoResidenceGallery() {
  const COL_SPANS = ["sm:col-span-4", "sm:col-span-6", "sm:col-span-8"];
  const ROW_SPANS = ["row-span-1", "row-span-2"];

  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-4 pt-10 md:pt-16" />

      <div className="mx-auto max-w-6xl px-4 mt-6 pb-20">
        <ul className="grid grid-cols-12 auto-rows-[160px] gap-4 md:gap-6">
          {projectImages.map((img, i) => {
            const colSpan = COL_SPANS[i % COL_SPANS.length];
            const rowSpan = ROW_SPANS[i % ROW_SPANS.length];

            return (
              <li
                key={img.src}
                className={[
                  "col-span-12",
                  colSpan,
                  rowSpan,
                  "overflow-hidden",
                ].join(" ")}
              >
                <figure className="relative h-full w-full">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                  {img.alt && (
                    <figcaption className="absolute bottom-2 left-2 bg-white/85 px-2 py-1 text-[11px] md:text-xs">
                      {img.alt}
                    </figcaption>
                  )}
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
// import { projectImages } from "./Project-1";

// export default function DowntownTorontoResidenceGallery() {
//   return (
//     <section className="bg-white text-black">
//       <div className="mx-auto max-w-5xl px-4 pt-10 md:pt-16" />

//       <div className="mx-auto max-w-5xl px-4 mt-6 pb-20">
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
//           {projectImages.map((img) => (
//             <figure
//               key={img.src}
//               className="mb-4 break-inside-avoid"
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 loading="lazy"
//                 decoding="async"
//                 className="w-full h-auto block object-cover"
//                 draggable={false}
//               />

//               {img.alt && (
//                 <figcaption className="mt-2 text-[11px] md:text-xs text-black/80">
//                   {img.alt}
//                 </figcaption>
//               )}
//             </figure>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
