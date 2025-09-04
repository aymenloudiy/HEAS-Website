import { Link } from "react-router";

export default function LayeringArticle() {
  return (
    <article className="bg-white text-black">
      <div className="mx-auto max-w-5xl px-4 pt-24 pb-16">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            The Power of Texture: How to Layer Materials Like a Designer
          </h1>
          <div className="mt-2 text-sm text-black/60">
            Design Notes · 4 min read
          </div>
        </header>

        <p className="text-lg leading-relaxed mb-8 max-w-3xl">
          Layering creates depth, warmth, and visual rhythm. The key is
          contrast: pair smooth with textured, matte with sheen, cool with warm.
          Below is a simple framework we use in studio.
        </p>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Start with a Base
          </h2>
          <p className="leading-relaxed max-w-3xl">
            Anchor the room with a calm base—walls, large rugs, core upholstery.
            Choose neutral tones and subtle weaves to give yourself latitude for
            accents later.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Add Tactile Contrast
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Textiles:</strong> Bouclé, linen, wool, and velvet.
            </li>
            <li>
              <strong>Hard Surfaces:</strong> Stone, wood grains, brushed metal.
            </li>
            <li>
              <strong>Accents:</strong> Woven baskets, ribbed glass, ceramic
              glazes.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Unify with Color & Light
          </h2>
          <p className="leading-relaxed max-w-3xl">
            Keep a restrained palette (two to three families) and let lighting
            reveal the textures—soft ambient light, directional task lights, and
            a sculptural statement piece.
          </p>
        </section>

        <footer className="pt-6 border-t border-black/10">
          <Link to="/news" className="underline underline-offset-4">
            ← Back to News
          </Link>
        </footer>
      </div>
    </article>
  );
}
