import { Link } from "react-router";

export default function ProjectBeforeAfterArticle() {
  return (
    <article className="bg-white text-black">
      <div className="mx-auto max-w-5xl px-4 pt-24 pb-16">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Inside a HEAS Project: Before &amp; After of a Toronto Townhome
          </h1>
          <div className="mt-2 text-sm text-black/60">
            Project Story · 3 min read
          </div>
        </header>

        <p className="leading-relaxed max-w-3xl mb-8">
          A concise look at our design moves—from concept to completion—showing
          how proportion, material, and light reshape daily living.
        </p>

        <Link
          to="/projects/downtown-toronto-residence"
          className="inline-block bg-black text-white px-5 py-2 rounded-lg hover:bg-neutral-800 transition"
        >
          View the project
        </Link>

        <footer className="pt-6 mt-12 border-t border-black/10">
          <Link to="/news" className="underline underline-offset-4">
            ← Back to News
          </Link>
        </footer>
      </div>
    </article>
  );
}
