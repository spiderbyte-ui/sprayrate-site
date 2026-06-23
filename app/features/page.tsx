import { SiteChrome } from "@/components/site-chrome";
import { featureCards } from "@/components/site-data";

export default function FeaturesPage() {
  return (
    <SiteChrome
      eyebrow="Features"
      title="Tools for quotes, product tracking, spray plans, and application records."
      intro="SprayRate is built around the parts of the job that usually take extra time: building quotes, keeping product information straight, and finding the right records later."
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
          <h2 className="font-display text-3xl text-white">Built to keep everyday work easier to manage.</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            SprayRate focuses on helping with the parts of the job that tend to
            create rework, scattered notes, or hard-to-find records.
          </p>
        </article>
        <article className="glass-panel reveal-up p-8 [animation-delay:120ms]">
          <p className="section-label">What comes next</p>
          <h2 className="font-display text-3xl text-white">Improved through real-world testing.</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            The beta program helps show what is useful, what feels unclear, and
            what needs to improve before wider launch.
          </p>
        </article>
      </section>
    </SiteChrome>
  );
}
