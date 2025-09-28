// src/pages/ComingSoon.tsx
import { NavLink } from "react-router";

export default function ComingSoon() {
  return (
    <section className="min-h-screen bg-white text-black pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-16"></header>

        <div className="flex flex-col items-center text-center">
          <div className="max-w-2xl">
            <h2 className="text-6xl! md:text-3xl font-medium">Coming soon</h2>
            {/* Notify block (mailto for now) */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:studio@heas.ca?subject=Shop%20Notify%20List&body=Hi%20HEAS%2C%0A%0APlease%20add%20me%20to%20the%20shop%20notify%20list.%0A%0AThanks!"
                className="inline-flex items-center justify-center rounded border border-black px-5 py-2 text-sm hover:bg-black hover:text-white transition-colors"
              >
                Email us to get notified
              </a>
              <NavLink
                to="/projects"
                className="inline-flex items-center justify-center rounded px-5 py-2 text-sm underline underline-offset-4"
              >
                Explore our projects
              </NavLink>
            </div>
          </div>

          {/* Optional placeholder image/hero */}
        </div>
      </div>
    </section>
  );
}
