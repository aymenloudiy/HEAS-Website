function ServicesHero() {
  return (
    <div className="mx-32 h-[512px] overflow-hidden">
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
