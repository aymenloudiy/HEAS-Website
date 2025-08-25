function AboutContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 bg-white text-black">
      {/* Intro */}
      <section className="my-12">
        <h2 className="text-center font-bold mb-6 text-2xl md:text-3xl">
          At HEAS, we believe that thoughtful design has the power to transform
          everyday living.
        </h2>
        <p className="text-center max-w-3xl mx-auto leading-relaxed">
          HEAS is a Toronto-based interior design and architecture studio
          dedicated to creating spaces that are as purposeful as they are
          beautiful. Guided by a deep commitment to quality, functionality, and
          emotional resonance, we approach each project with an eye for detail
          and a passion for storytelling through space. Our work spans
          residential, commercial, and boutique hospitality interiors—shaped by
          context, driven by curiosity, and tailored to the people who live and
          work within them.
        </p>
      </section>

      <hr className="my-12 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent border-0" />

      {/* Section 1 */}
      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="order-2 md:order-1">
            <h3 className="mb-4 font-bold">We transform vision into space.</h3>
            <p className="leading-relaxed">
              At HEAS, our work is rooted in the belief that interior
              environments have the power to shape how we feel, live, and
              connect. We dedicate ourselves to translating our clients’
              aspirations into thoughtful, lasting spaces—spaces that not only
              function seamlessly, but elevate the everyday. Through considered
              design and a deep understanding of place and purpose, we craft
              interiors that reflect identity, inspire comfort, and endure
              through time.
            </p>
          </div>
          <figure className="order-1 md:order-2">
            <img
              src="/pictures/image (1).png"
              alt="Project detail — portrait"
              className="w-full h-auto rounded-lg border border-black/10 object-contain"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* Section 2 */}
      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="order-2">
            <h3 className="mb-4 font-bold">
              We are committed to an experiential approach to design.
            </h3>
            <p className="leading-relaxed">
              At HEAS, we believe the most meaningful spaces are felt before
              they are understood. Our work is guided by the pursuit of
              intangible moments—those subtle impressions of warmth, clarity,
              and belonging that define how a space is experienced. Through
              careful attention to detail, craft, materiality, and light, we
              design environments that go beyond appearance. Our aim is to
              create interiors that resonate deeply, evoke emotion, and reflect
              a genuine sense of care.
            </p>
          </div>
          <figure className="order-1">
            <img
              src="/pictures/image (2).png"
              alt="Material and light — portrait"
              className="w-full h-auto rounded-lg border border-black/10 object-contain"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* Section 3 */}
      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="order-2 md:order-1">
            <h3 className="mb-4 font-bold">
              We use design as a tool for building a sustainable future.
            </h3>
            <p className="leading-relaxed">
              At HEAS, we recognize the responsibility of design in shaping a
              more sustainable and resilient world. Our approach integrates
              mindful material choices, enduring craftsmanship, and
              energy-conscious strategies to reduce environmental impact—without
              compromising beauty or comfort. We believe that good design should
              not only enrich daily life, but also tread lightly on the planet.
              Through thoughtful spatial planning and a commitment to
              long-lasting solutions, we aim to create interiors that support
              both people and the environment for years to come.
            </p>
          </div>
          <figure className="order-1 md:order-2">
            <img
              src="/pictures/image (3).jpg"
              alt="Sustainable detail — portrait"
              className="w-full h-auto rounded-lg border border-black/10 object-contain"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* Section 4 */}
      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="order-2">
            <h3 className="mb-4 font-bold">We are trusted collaborators.</h3>
            <p className="leading-relaxed">
              At HEAS, we build lasting relationships through expertise,
              integrity, and a design process rooted in active listening and
              thoughtful dialogue. Whether working with homeowners, developers,
              or commercial clients, we become partners in bringing visions to
              life—guiding every step with clarity, creativity, and care. Our
              clients rely on us not just for design, but for strategic insight,
              project coordination, and an unwavering commitment to excellence.
              We are the team people trust when craft, context, and character
              truly matter.
            </p>
          </div>
          <figure className="order-1">
            <img
              src="/pictures/image (7).png"
              alt="Collaboration moment — portrait"
              className="w-full h-auto rounded-lg border border-black/10 object-contain"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* Section 5 */}
      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="order-2 md:order-1">
            <h3 className="mb-4 font-bold">
              We value the uniqueness of voices.
            </h3>
            <p className="leading-relaxed">
              At HEAS, we believe that meaningful design begins with diverse
              perspectives. Our studio thrives on collaboration, dialogue, and
              the exchange of ideas across cultures, disciplines, and lived
              experiences. We actively cultivate an inclusive environment where
              individuality is not only respected, but celebrated—because it is
              through our differences that innovation takes shape. The strength
              of our team lies in the richness of our voices, and together, we
              create spaces that speak to a broader, more thoughtful vision of
              design.
            </p>
          </div>
          <figure className="order-1 md:order-2">
            <img
              src="/pictures/image (12).jpg"
              alt="Team portrait — portrait"
              className="w-full h-auto rounded-lg border border-black/10 object-contain"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </div>
  );
}
export default AboutContent;
