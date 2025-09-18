function OurServices() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12 mt-16">
        <h1 className="text-center font-semibold tracking-wide mb-6 text-2xl">
          Our Services
        </h1>
        <p className="text-center text-neutral-700 max-w-3xl mx-auto">
          At HEAS, we offer a full spectrum of interior design services tailored
          to your lifestyle, timeline, and vision. From full-scale renovations
          to curated furnishing packages, our studio delivers thoughtful,
          functional, and timeless design solutions. Whether working locally in
          Toronto or remotely across Canada, we partner with you every step of
          the way.
        </p>
      </section>

      <hr className="my-12 mx-auto w-full max-w-6xl border-neutral-200" />
      <section className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7 flex flex-col">
            <div className="self-start">
              <h3 className="font-[butler] mb-3 text-xl font-semibold">
                Full Interior Design Packages
              </h3>
              <p className="text-neutral-700">
                We provide comprehensive interior design services from concept
                to completion. Whether you're building from the ground up or
                reimagining an existing space, our process covers layout
                planning, finishes and fixtures, lighting, built-in details, and
                final styling. We manage design documentation and work closely
                with contractors and trades to ensure seamless execution that
                reflects both your aesthetic and practical needs.
              </p>
              <p className="mt-4 text-sm italic text-neutral-800">
                Starting from $50/ Hour*
              </p>
            </div>
            <hr className="my-8 mx-auto w-full max-w-6xl border-neutral-200" />

            <section className="mx-auto w-full max-w-6xl self-end">
              <div className="md:col-span-7">
                <h3 className="font-[butler] mb-3 text-xl font-semibold">
                  Furnishing & Styling
                </h3>
                <p className="text-neutral-700">
                  Our furnishing service focuses on transforming spaces through
                  curated furniture, art, lighting, and accessories. We create
                  tailored floor plans, mood boards, and sourcing lists, all
                  aligned with your taste and budget. From procurement to final
                  placement, we handle the details—so your space is ready to
                  live in and love.
                </p>
                <p className="mt-4 text-sm italic text-neutral-800">
                  Per room starting at $950*
                </p>
              </div>
            </section>
          </div>
          <div className="md:col-span-5">
            <img
              src="/pictures/image (118).jpg"
              alt="Warm-toned sectional sofa with sunlight pattern"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <hr className="my-8 mx-auto w-full max-w-6xl border-neutral-200" />

      <section className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12">
        <h3 className="font-[butler] mb-3 text-xl font-semibold">
          Custom Cabinetry Design
        </h3>
        <p className="text-neutral-700">
          We specialize in the design of custom millwork and cabinetry for
          kitchens, bathrooms, closets, and built-ins. Our designs prioritize
          clean lines, smart storage, and enduring materials—blending
          functionality with refined detailing. We work with trusted fabricators
          to ensure precision, quality, and seamless integration into your
          space.
        </p>
        <p className="mt-4 text-sm italic text-neutral-800">
          5 year limited warranty
        </p>
      </section>

      <hr className="my-8 mx-auto w-full max-w-6xl border-neutral-200" />

      <section className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <img
              src="/pictures/image (68).jpg"
              alt="Soft light through architectural curtains"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="md:col-span-6 flex flex-col">
            <div className="self-start">
              <h3 className="font-[butler] mb-3 text-xl font-semibold">
                Renovation Coordination
              </h3>
              <p className="text-neutral-700">
                If you're renovating, HEAS offers design-led project
                coordination. We collaborate with architects, builders, and
                trades to ensure your renovation is executed according to the
                design intent. From site visits to product ordering and
                construction reviews, we act as your design advocate—keeping the
                process organized, aligned, and on schedule.
              </p>
              <p className="mt-4 text-sm italic text-neutral-800">
                Starting from $50/ Hour*
              </p>
            </div>

            <hr className="my-8 border-neutral-200" />

            <div className="self-center">
              <h3 className="font-[butler] mb-3 text-xl font-semibold">
                Exclusive Trade Access
              </h3>
              <p className="text-neutral-700">
                HEAS holds trade accounts with a wide network of high-quality
                furniture and décor brands. We extend exclusive access and
                designer pricing to our clients, offering a curated selection of
                pieces from both local artisans and international names. Our
                studio manages sourcing, ordering, and logistics—ensuring
                quality and consistency from start to finish.
              </p>
              <p className="mt-4 text-sm italic text-neutral-800">
                Up to 20% off on market price
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-8 mx-auto w-full max-w-6xl border-neutral-200" />

      <section className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12 mb-20">
        <h3 className="font-[butler] mb-3 text-xl font-semibold">
          Online Consultations
        </h3>
        <p className="text-neutral-700">
          We also offer remote design services for clients seeking flexible
          support. Ideal for smaller projects or out-of-town clients, our online
          consultations provide customized layouts, mood boards, and shoppable
          product links—delivered with the same care and attention as our
          in-person work. It’s design help, wherever you are.
        </p>
        <p className="text-neutral-700 mt-4 text-[16px]!">
          Starting from $40/ Hour
        </p>
      </section>
    </div>
  );
}

export default OurServices;
