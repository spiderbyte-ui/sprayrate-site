import Link from "next/link";
import { SiteChrome } from "@/components/site-chrome";
import { pricingTiers } from "@/components/site-data";

export default function PricingPage() {
  return (
    <SiteChrome
      eyebrow="Pricing"
      title="Pricing is intentionally simple while the product is still being validated."
      intro="SprayRate is in a founder-led beta stage. The goal right now is to learn from a small number of serious operators before public pricing is finalized."
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
        <h2 className="font-display text-3xl text-white">No inflated promises during beta.</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
          Founding beta access is for operators willing to test real workflows and
          give direct feedback. Public pricing will be set after the strongest use
          cases and support expectations are clearer.
        </p>
        <div className="mt-7">
          <Link href="/beta-program" className="button-primary">
            Request Founding Beta Access
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
