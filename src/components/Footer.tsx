import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.2em] text-neutral-600">
              FOLLOW US
            </p>

            <ul className="mt-4 space-y-2 text-sm font-extralight">
              <li>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram className="text-base" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebook className="text-base" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded"
                  aria-label="Follow us on X (Twitter)"
                >
                  <FaXTwitter className="text-base" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6">
            <div className="flex flex-col items-center gap-6 text-center md:items-center md:text-center">
              <img
                className="h-24 w-auto"
                src="/Logo/HEAS.png"
                alt="HEAS Inc."
                loading="lazy"
                decoding="async"
              />

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-light">
                <p className="tracking-wide">TORONTO, ON</p>
                <a
                  href="tel:+18193296895"
                  className="underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded"
                >
                  +1&nbsp;819&nbsp;329&nbsp;6895
                </a>
                <a
                  href="mailto:studio@heas.ca"
                  className="underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded"
                >
                  STUDIO@HEAS.CA
                </a>
              </div>

              <div className="max-w-2xl text-xs leading-relaxed text-neutral-700">
                <p>
                  HEAS INC ACKNOWLEDGES THAT WE ARE ON THE TRADITIONAL TERRITORY
                  OF MANY NATIONS INCLUDING THE MISSISSAUGAS OF THE CREDIT, THE
                  ANISHNABEG, THE CHIPPEWA, THE HAUDENOSAUNEE, AND THE WENDAT
                  PEOPLES.
                </p>
                <p className="mt-3">
                  TODAY, IT IS HOME TO MANY DIVERSE FIRST NATIONS, INUIT, AND
                  MÉTIS PEOPLES AND WE ARE GRATEFUL TO WORK ON THIS LAND.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3" />

          <div className="md:col-span-12 mt-8 border-t border-neutral-200 pt-6">
            <div className="flex flex-col items-center justify-between gap-4 text-xs text-neutral-600 md:flex-row">
              <small className="order-2 md:order-1">
                &copy; {year} HEAS&trade;. All Rights Reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
