import { Link } from "react-router";

export default function NewMembersArticle() {
  return (
    <article className="bg-white text-black">
      <div className="mx-auto max-w-5xl px-4 pt-24 pb-16">
        <header className="mb-8">
          <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
            HEAS is Growing: Meet the New Members of Our Team
          </h1>
          <div className="mt-2 text-sm text-black/60">
            Studio Update · 2 min read
          </div>
        </header>

        <p className="leading-relaxed max-w-3xl mb-10">
          We’re excited to welcome two new members to the studio. They bring
          fresh perspectives, strong craft, and a shared commitment to
          client-centered design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <section className="rounded-lg border border-black/10 p-6">
            <div className="w-24 h-24 rounded-full bg-black/5 mb-4" />
            <h3 className="text-lg font-medium">Member 1</h3>
            <p className="text-sm text-black/80 mt-2">
              Short bio for Member 1. Areas of focus, notable projects, and what
              they’ll contribute to HEAS.
            </p>
          </section>

          <section className="rounded-lg border border-black/10 p-6">
            <div className="w-24 h-24 rounded-full bg-black/5 mb-4" />
            <h3 className="text-lg font-medium">Member 2</h3>
            <p className="text-sm text-black/80 mt-2">
              Short bio for Member 2. Areas of focus, notable projects, and how
              they’ll strengthen our client experience.
            </p>
          </section>
        </div>

        <footer className="pt-6 border-t border-black/10">
          <Link to="/news" className="underline underline-offset-4">
            ← Back to News
          </Link>
        </footer>
      </div>
    </article>
  );
}
