import { SiteChrome } from "@/components/site-chrome";
import { featureCards } from "@/components/site-data";

export default function FeaturesPage() {
  return (
    <SiteChrome
      eyebrow="Features"
      title="Focused on the workflows that drive quoting, planning, and record quality."
      intro="SprayRate is being shaped around the parts of the job where operators lose time, re-enter details, or struggle to produce clean customer-facing paperwork."
    >
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featureCards.map((feature, index) => (
          <article
            key={feature.title}
            className="glass-panel reveal-up p-7"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="section-label">Feature</p>
            <h2 className="font-display text-3xl text-white">{feature.title}</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="glass-panel reveal-up p-8">
          <p className="section-label">Current emphasis</p>
          <h2 className="font-display text-3xl text-white">Built for operational clarity.</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            SprayRate is not trying to be everything at once. The current product
            emphasis is on simplifying the job path from pricing to plan to record.
          </p>
        </article>
        <article className="glass-panel reveal-up p-8 [animation-delay:120ms]">
          <p className="section-label">What comes next</p>
          <h2 className="font-display text-3xl text-white">Feedback will shape the roadmap.</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            The beta program is designed to reveal where quoting, spray planning,
            and application records still diverge from real operator expectations.
          </p>
        </article>
      </section>
    </SiteChrome>
  );
}
