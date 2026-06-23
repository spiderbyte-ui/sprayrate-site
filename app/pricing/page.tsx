import Link from "next/link";
import { SiteChrome } from "@/components/site-chrome";
import { pricingTiers } from "@/components/site-data";

export default function PricingPage() {
  return (
    <SiteChrome
      eyebrow="Pricing"
      title="Simple pricing while SprayRate is in beta."
      intro="Right now, SprayRate is being tested with a small group of aerial applicators. Beta access is free while the product is still being improved."
    >
      <section className="grid gap-6 lg:grid-cols-2">
        {pricingTiers.map((tier, index) => (
          <article
            key={tier.name}
            className="glass-panel reveal-up p-8"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <p className="section-label">{tier.name}</p>
            <h2 className="font-display text-4xl text-white">{tier.price}</h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)]">{tier.detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 glass-panel reveal-up p-8 [animation-delay:180ms]">
        <p className="section-label">What to expect</p>
        <h2 className="font-display text-3xl text-white">What you get in beta</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
          Beta testers get early access to SprayRate, direct support, and a
          chance to help shape the product before wider launch.
        </p>
        <div className="mt-7">
          <Link href="/beta-program" className="button-primary">
            Request Beta Access
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
