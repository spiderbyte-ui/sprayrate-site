import { SiteChrome } from "@/components/site-chrome";

export default function AboutPage() {
  return (
    <SiteChrome
      eyebrow="About"
      title="SprayRate was built to make aerial application paperwork and planning easier to manage."
      intro="SprayRate came from seeing how much time can be lost to scattered notes, repeated data entry, hard-to-find records, and paperwork that takes too long to put together."
    >
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="glass-panel reveal-up p-8">
          <p className="section-label">Mission</p>
          <h2 className="font-display text-3xl text-white">Built around real workflow problems</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            The goal was not to build more software for the sake of it. The goal
            was to make it easier to create quotes, keep product information
            organized, build spray plans, and pull up records when needed.
          </p>
        </article>
        <article className="glass-panel reveal-up p-8 [animation-delay:120ms]">
          <p className="section-label">Approach</p>
          <h2 className="font-display text-3xl text-white">Improved through real operator feedback</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            SprayRate is being tested with real aerial applicators so the product
            can improve based on day-to-day use, not guesswork.
          </p>
        </article>
      </section>
    </SiteChrome>
  );
}
