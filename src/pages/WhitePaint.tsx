import { Link } from "react-router";

export default function WhitePaintArticle() {
  return (
    <article className="bg-white text-black">
      <div className="mx-auto max-w-5xl px-4 pt-24 pb-16">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Choosing the Right White Paint: Our Studio’s Top Picks
          </h1>
          <div className="mt-2 text-sm text-black/60">
            Material Guide · 3 min read
          </div>
        </header>

        <p className="text-lg leading-relaxed mb-8 max-w-3xl">
          Whites vary dramatically by undertone and light. Test on large
          swatches and observe across the day. Here are three versatile
          favorites:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="rounded-lg border border-black/10 p-4">
            <div
              className="h-24 rounded mb-3"
              style={{ background: "#F7F7F5" }}
            />
            <h3 className="font-medium">Soft Gallery White</h3>
            <p className="text-sm text-black/70">
              Warm-neutral; great for north-facing rooms needing warmth.
            </p>
          </div>
          <div className="rounded-lg border border-black/10 p-4">
            <div
              className="h-24 rounded mb-3"
              style={{ background: "#FAFAFA" }}
            />
            <h3 className="font-medium">Architect’s White</h3>
            <p className="text-sm text-black/70">
              Clean, balanced; pairs well with wood + stone.
            </p>
          </div>
          <div className="rounded-lg border border-black/10 p-4">
            <div
              className="h-24 rounded mb-3"
              style={{ background: "#FFFFFF" }}
            />
            <h3 className="font-medium">Studio Bright</h3>
            <p className="text-sm text-black/70">
              Crisp and luminous; best with ample natural light.
            </p>
          </div>
        </div>

        <p className="leading-relaxed max-w-3xl mb-12">
          Tip: paint the sample edge-to-edge on foam board, move it around the
          room, and check under different bulbs (2700K–3000K is usually safest).
        </p>

        <footer className="pt-6 border-t border-black/10">
          <Link to="/news" className="underline underline-offset-4">
            ← Back to News
          </Link>
        </footer>
      </div>
    </article>
  );
}
