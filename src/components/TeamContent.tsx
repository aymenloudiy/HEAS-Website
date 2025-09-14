import { NavLink } from "react-router";

function TeamContent() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch gap-8 md:gap-16 lg:gap-24">
        <div className="md:col-span-5 flex items-center justify-center">
          <h2 className="text-center font-semibold leading-tight text-2xl md:text-3xl lg:text-4xl">
            HEAS was founded on the belief that design should be both
            intentional and inspiring.
          </h2>
        </div>

        <div className="md:col-span-7 flex flex-col gap-4 text-[14px] leading-relaxed">
          <p>
            Established in Toronto by Haoran He, the studio grew from a desire
            to create interiors and environments that are emotionally resonant,
            functionally refined, and deeply personal. Today, HEAS brings
            together a dedicated team of designers and collaborators who
            approach each project with curiosity, care, and an unwavering
            commitment to quality.
          </p>
          <p>
            Our studio is grounded in hands-on involvement and close client
            relationships. We offer end-to-end service—from concept to
            completion—ensuring each detail reflects a shared vision and each
            space performs with clarity and purpose. We believe the best results
            come from trust, open dialogue, and a tailored process that respects
            budget, timeline, and context.
          </p>
          <p>
            With a portfolio that ranges from private residences to commercial
            interiors, our work is united by a simple ambition: to create design
            solutions that elevate the everyday—timeless, grounded, and never
            excessive.
          </p>
        </div>
      </div>

      <hr className="my-12 h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />

      <section>
        <h3 className="mb-8 font-bold text-xl">People</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10">
          {["1", "2", "3", "4"].map((n) => (
            <li
              key={n}
              className="aspect-square overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-center"
            >
              <NavLink to="/">
                <img
                  src={`/assets/team-picture-${n}.jpg`}
                  alt={`team-picture-${n}`}
                  className="h-full w-full object-contain p-4"
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </section>

      <hr className="my-12 h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />

      <section>
        <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-12">
          <div className="md:col-span-8 text-[14px] leading-relaxed">
            <h3 className="mb-6 font-bold text-xl">Careers</h3>
            <p className="my-4">
              HEAS is a growing interior design and architecture studio based in
              Toronto, dedicated to creating spaces that are meaningful,
              thoughtful, and enduring.
            </p>
            <p className="my-2">
              We work on a diverse range of residential and commercial projects,
              and are always interested in meeting passionate, curious, and
              detail-driven individuals who share our commitment to design
              excellence.
            </p>
            <p className="my-2">
              At HEAS, we believe that great design emerges from diverse voices
              and collaborative thinking. We are committed to fostering an
              inclusive studio culture that values different backgrounds,
              perspectives, and approaches. Our team thrives on open dialogue,
              creativity, and mutual respect—qualities we believe are essential
              to both innovation and longevity.
            </p>
            <p className="my-2">
              All positions are based in our Toronto studio. While we appreciate
              all applications, only candidates selected for available roles
              will be contacted.
            </p>
          </div>

          <div className="md:col-span-4 md:pl-12 flex flex-col items-center justify-center text-center">
            <p className="text-[14px] mb-2">
              To express your interest in joining our team, please email your CV
              and portfolio to:
            </p>
            <p className="font-medium text-[14px] tracking-wide">
              studio@heas.ca
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamContent;
