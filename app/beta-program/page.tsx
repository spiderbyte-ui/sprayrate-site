import Link from "next/link";
import { SiteChrome } from "@/components/site-chrome";

export default function BetaProgramPage() {
  return (
    <SiteChrome
      eyebrow="Beta Program"
      title="Founding beta access for a small group of aerial applicators."
      intro="SprayRate is looking for 3 to 5 operators who are willing to test real workflows and share direct feedback on quoting, spray planning, and application records."
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="glass-panel reveal-up p-8">
          <p className="section-label">What beta testers get</p>
          <ul className="space-y-3 text-base leading-8 text-[var(--muted)]">
            <li>Early access to SprayRate during the founding beta period</li>
            <li>Direct line for product feedback</li>
            <li>A chance to shape workflows before the public launch</li>
            <li>Founder-led support and follow-up</li>
          </ul>
        </article>
        <article className="glass-panel reveal-up p-8 [animation-delay:120ms]">
          <p className="section-label">What SprayRate needs back</p>
          <ul className="space-y-3 text-base leading-8 text-[var(--muted)]">
            <li>Honest notes on where the product helps</li>
            <li>Direct feedback on confusing or unrealistic flows</li>
            <li>Real operator context around quoting and records</li>
            <li>Practical suggestions, not polished pitch feedback</li>
          </ul>
        </article>
      </section>

      <section className="mt-8 glass-panel reveal-up p-8 [animation-delay:200ms]">
        <p className="section-label">Join</p>
        <h2 className="font-display text-3xl text-white">Interested in joining the founding beta?</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">
          Email <span className="text-white">support@getsprayrate.com</span> with a
          short note about your operation and current workflow. SprayRate is
          especially interested in operators who actively quote jobs, plan spray
          work, and keep application records.
        </p>
        <div className="mt-7">
          <Link href="/contact" className="button-primary">
            Contact SprayRate
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
