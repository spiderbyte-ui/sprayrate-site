import Link from "next/link";
import { SiteChrome } from "@/components/site-chrome";
import { featureCards } from "@/components/site-data";

const screenshotCards = [
  "Quote builder view",
  "Spray planning workspace",
  "Application record export",
];

export default function HomePage() {
  return (
    <SiteChrome
      eyebrow="Launch-Ready Workflow Software"
      title="Built for aerial applicators who need cleaner quotes, faster planning, and records they can trust."
      intro="SprayRate helps aerial operators move from quote to spray plan to application record without bouncing between spreadsheets, notes, and patchwork exports."
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel reveal-up p-7 sm:p-9">
          <div className="mb-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            <span className="pill">Mobile-first</span>
            <span className="pill">Professional exports</span>
            <span className="pill">Founder-led beta</span>
          </div>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Practical software for real operator workflows.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            SprayRate is focused on the work that matters most early in the job:
            building the quote, shaping the spray plan, and keeping records in a
            format that looks professional when it leaves the device.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/beta-program" className="button-primary">
              Join the Beta Program
            </Link>
            <Link href="/features" className="button-secondary">
              Explore Features
            </Link>
          </div>
        </div>

        <div className="glass-panel reveal-up p-6 [animation-delay:140ms]">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
              Workflow Snapshot
            </p>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted)]">
              Screenshot placeholders
            </span>
          </div>
          <div className="grid gap-4">
            {screenshotCards.map((card, index) => (
              <div
                key={card}
                className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(11,21,32,0.65))] p-5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(135,216,255,0.18),transparent_46%)]" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                      Screen 0{index + 1}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-white">{card}</h3>
                  </div>
                  <div className="rounded-full border border-dashed border-[rgba(255,255,255,0.25)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Replace with app capture
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {featureCards.map((feature, index) => (
          <article
            key={feature.title}
            className="glass-panel reveal-up p-5"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Core Feature
            </p>
            <h3 className="mt-3 font-display text-2xl text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <article className="glass-panel reveal-up p-7">
          <p className="section-label">Why teams look closer</p>
          <h3 className="font-display text-2xl text-white">Professional output matters.</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Operators do not just need data. They need deliverables that look like
            they belong in front of customers, crews, and internal records.
          </p>
        </article>
        <article className="glass-panel reveal-up p-7 [animation-delay:120ms]">
          <p className="section-label">Aviation-inspired design</p>
          <h3 className="font-display text-2xl text-white">Clear, disciplined, calm.</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            The product and site are designed to feel precise and dependable,
            borrowing from cockpit-style clarity instead of consumer-app clutter.
          </p>
        </article>
        <article className="glass-panel reveal-up p-7 [animation-delay:240ms]">
          <p className="section-label">Founder-led beta</p>
          <h3 className="font-display text-2xl text-white">Small group, honest feedback.</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            SprayRate is currently recruiting a small number of aerial
            applicators who will help shape what becomes launch-grade.
          </p>
        </article>
      </section>
    </SiteChrome>
  );
}
