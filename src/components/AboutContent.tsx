import { useLayoutEffect, useRef, useState } from "react";

type PairRowProps = {
  title: string;
  body: string;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
};

function PairRow({ title, body, imgSrc, imgAlt, reverse }: PairRowProps) {
  const textRef = useRef<HTMLDivElement | null>(null);
  const [, setParaH] = useState<number | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      if (textRef.current) setParaH(textRef.current.offsetHeight);
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (textRef.current) ro.observe(textRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const textOrder = reverse ? "order-2 md:order-2" : "order-2 md:order-1";
  const imgOrder = reverse ? "order-1 md:order-1" : "order-1 md:order-2";

  return (
    <section className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mx-auto max-w-6xl">
        <div
          ref={textRef}
          className={`${textOrder} flex flex-col justify-center`}
        >
          <h3 className="mb-4 font-bold font-[butler]">{title}</h3>
          <p className="leading-relaxed">{body}</p>
        </div>

        <figure
          className={`${imgOrder} relative h-[400px] overflow-hidden bg-gray-100`}
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-full w-full object-cover"
            draggable={false}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}

export default function AboutContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 pb-16 bg-white text-black">
      <section className="my-12">
        <h2 className="text-center font-bold mb-6 text-xl md:text-2xl font-[Butler] text-[24px]! ">
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

      <PairRow
        title="We transform vision into space."
        body={`At HEAS, our work is rooted in the belief that interior environments have the power to shape how we feel,
        live, and connect. We dedicate ourselves to translating our clients’ aspirations into thoughtful, lasting
        spaces—spaces that not only function seamlessly, but elevate the everyday. Through considered design and a deep
        understanding of place and purpose, we craft interiors that reflect identity, inspire comfort, and endure through time.`}
        imgSrc="/pictures/image (1).png"
        imgAlt="Project detail — portrait"
        reverse={false}
      />

      <PairRow
        title="We are committed to an experiential approach to design."
        body={`At HEAS, we believe the most meaningful spaces are felt before they are understood. Our work is guided by the
        pursuit of intangible moments—those subtle impressions of warmth, clarity, and belonging that define how a space
        is experienced. Through careful attention to detail, craft, materiality, and light, we design environments that
        go beyond appearance. Our aim is to create interiors that resonate deeply, evoke emotion, and reflect a genuine
        sense of care.`}
        imgSrc="/pictures/image (2).png"
        imgAlt="Material and light — portrait"
        reverse={true}
      />

      <PairRow
        title="We use design as a tool for building a sustainable future."
        body={`At HEAS, we recognize the responsibility of design in shaping a more sustainable and resilient world. Our
        approach integrates mindful material choices, enduring craftsmanship, and energy-conscious strategies to reduce
        environmental impact—without compromising beauty or comfort. We believe that good design should not only enrich
        daily life, but also tread lightly on the planet. Through thoughtful spatial planning and a commitment to
        long-lasting solutions, we aim to create interiors that support both people and the environment for years to come.`}
        imgSrc="/pictures/image (3).jpg"
        imgAlt="Sustainable detail — portrait"
        reverse={false}
      />

      <PairRow
        title="We are trusted collaborators."
        body={`At HEAS, we build lasting relationships through expertise, integrity, and a design process rooted in active
        listening and thoughtful dialogue. Whether working with homeowners, developers, or commercial clients, we become
        partners in bringing visions to life—guiding every step with clarity, creativity, and care. Our clients rely on
        us not just for design, but for strategic insight, project coordination, and an unwavering commitment to
        excellence. We are the team people trust when craft, context, and character truly matter.`}
        imgSrc="/pictures/image (7).png"
        imgAlt="Collaboration moment — portrait"
        reverse={true}
      />

      <PairRow
        title="We value the uniqueness of voices."
        body={`At HEAS, we believe that meaningful design begins with diverse perspectives. Our studio thrives on
        collaboration, dialogue, and the exchange of ideas across cultures, disciplines, and lived experiences. We
        actively cultivate an inclusive environment where individuality is not only respected, but celebrated—because it
        is through our differences that innovation takes shape. The strength of our team lies in the richness of our
        voices, and together, we create spaces that speak to a broader, more thoughtful vision of design.`}
        imgSrc="/pictures/image (12).jpg"
        imgAlt="Team portrait — portrait"
        reverse={false}
      />
    </div>
  );
}
