import { SiteChrome } from "@/components/site-chrome";

export default function AboutPage() {
  return (
    <SiteChrome
      eyebrow="About"
      title="SprayRate is being built to reduce friction in aerial application paperwork and planning."
      intro="The product focus is simple: make the front half of the workflow cleaner, faster, and more professional without forcing operators into bloated software."
    >
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="glass-panel reveal-up p-8">
          <p className="section-label">Mission</p>
          <h2 className="font-display text-3xl text-white">Ship the smallest useful system.</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            SprayRate is designed around practical value: quote generation, spray
            planning, application records, and exports that feel credible when
            they leave the phone.
          </p>
        </article>
        <article className="glass-panel reveal-up p-8 [animation-delay:120ms]">
          <p className="section-label">Approach</p>
          <h2 className="font-display text-3xl text-white">Work with operators, not assumptions.</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            The beta program is intentionally small so feedback can shape the
            product quickly and honestly. The goal is not hype. The goal is fit.
          </p>
        </article>
      </section>
    </SiteChrome>
  );
}
