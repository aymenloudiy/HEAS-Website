import { NavLink } from "react-router";

function TeamContent() {
  return (
    <div>
      <div>
        <h2>
          HEAS was founded on the belief that design should be both intentional
          and inspiring.
        </h2>
        <p>
          Established in Toronto by Haoran He, the studio grew from a desire to
          create interiors and environments that are emotionally resonant,
          functionally refined, and deeply personal. Today, HEAS brings together
          a dedicated team of designers and collaborators who approach each
          project with curiosity, care, and an unwavering commitment to quality.
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
      <section>
        <div>
          <h3>People</h3>
          <ul>
            <li>
              <NavLink to="/">
                <img src="" alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="" alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="" alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="" alt="" />
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h3>Careers</h3>
            <p>
              HEAS is a growing interior design and architecture studio based in
              Toronto, dedicated to creating spaces that are meaningful,
              thoughtful, and enduring.
            </p>
            <p>
              We work on a diverse range of residential and commercial projects,
              and are always interested in meeting passionate, curious, and
              detail-driven individuals who share our commitment to design
              excellence.
            </p>
            <p>
              At HEAS, we believe that great design emerges from diverse voices
              and collaborative thinking. We are committed to fostering an
              inclusive studio culture that values different backgrounds,
              perspectives, and approaches. Our team thrives on open dialogue,
              creativity, and mutual respect—qualities we believe are essential
              to both innovation and longevity.
            </p>
            <p>
              All positions are based in our Toronto studio. While we appreciate
              all applications, only candidates selected for available roles
              will be contacted.
            </p>
          </div>
          <div>
            <p>
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
