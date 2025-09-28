function ServicesHero() {
  return (
    <div className="h-[512px] overflow-hidden mx-0 sm:mx-32">
      <video
        className="object-cover h-full w-full"
        src="/videos/Services_VIdeo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}

export default ServicesHero;
