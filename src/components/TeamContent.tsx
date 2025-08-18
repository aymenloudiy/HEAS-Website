import { NavLink } from "react-router";

function TeamContent() {
  return (
    <div className="mx-32">
      <div className="flex gap-4 items-center">
        <h2 className="font-bold">
          HEAS was founded on the belief that design should be both intentional
          and inspiring.
        </h2>
        <div className="flex flex-col gap-4">
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
      <hr className="my-12 mx-32 h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

      <section>
        <div>
          <h3 className="mb-8 font-bold">People</h3>
          <ul className="grid grid-cols-4 gap-8 h-64">
            <li className="h-full">
              <NavLink to="/">
                <img
                  src="/src/assets/team-picture-1.jpg"
                  alt="team-picture-1.jpg"
                />
              </NavLink>
            </li>
            <li className="h-full">
              <NavLink to="/">
                <img
                  src="/src/assets/team-picture-2.jpg"
                  alt="team-picture-2.jpg"
                />
              </NavLink>
            </li>
            <li className="h-full">
              <NavLink to="/">
                <img
                  src="/src/assets/team-picture-3.jpg"
                  alt="team-picture-3.jpg"
                />
              </NavLink>
            </li>
            <li className="h-full">
              <NavLink to="/">
                <img
                  src="/src/assets/team-picture-4.jpg"
                  alt="team-picture-4.jpg"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <hr className="my-12 mx-32 h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

      <section>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-8">
            <h3 className="mb-8 font-bold">Careers</h3>
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
          <div className="col-span-4 ml-8">
            <p className="text-sm my-4">
              To express your interest in joining our team, please email your CV
              and portfolio to:
            </p>
            <p>studio@heas.ca</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default TeamContent;
