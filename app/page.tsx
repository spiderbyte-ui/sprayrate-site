import Link from "next/link";
import { SiteChrome } from "@/components/site-chrome";
import { featureCards } from "@/components/site-data";

const screenshotCards = [
  {
    title: "Home",
    caption: "See your main tools in one place and jump into quotes, planning, records, and settings quickly.",
  },
  {
    title: "Quote Builder",
    caption:
      "Create a quote without retyping the same customer, product, and pricing details every time.",
  },
  {
    title: "Application Records",
    caption:
      "Keep application records organized so you can find what was done and what products were used.",
  },
];

export default function HomePage() {
  return (
    <SiteChrome
      eyebrow="Built for aerial applicators"
      title="Create quotes, manage products, build spray plans, and keep application records organized."
      intro="SprayRate helps aerial applicators put quotes, product information, spray plans, and application records in one place so day-to-day work is easier to manage."
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel reveal-up p-7 sm:p-9">
          <div className="mb-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            <span className="pill">Built for aerial applicators</span>
            <span className="pill">Clean PDF exports</span>
            <span className="pill">Real beta feedback</span>
          </div>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Made for the work you already do.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Use SprayRate to create quotes faster, keep product details handy,
            build spray plans, and pull up records when a customer calls with a
            question.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/beta-program" className="button-primary">
              Join the Beta
            </Link>
            <Link href="/features" className="button-secondary">
              See Features
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
                key={card.title}
                className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(11,21,32,0.65))] p-5"
                aria-label={`${card.title} screenshot placeholder`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(135,216,255,0.18),transparent_46%)]" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                      Screen 0{index + 1}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-white">{card.title}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--muted)]">
                      {card.caption}
                    </p>
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
          <p className="section-label">Why it helps</p>
          <h3 className="font-display text-2xl text-white">Keep paperwork clear and easy to share.</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            When a customer asks for a quote or a record later, it helps to have
            everything organized and ready to pull up quickly.
          </p>
        </article>
        <article className="glass-panel reveal-up p-7 [animation-delay:120ms]">
          <p className="section-label">Built for the field</p>
          <h3 className="font-display text-2xl text-white">Simple to use when the day is busy.</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            SprayRate is meant to help with day-to-day work, not slow you down
            with extra steps or confusing screens.
          </p>
        </article>
        <article className="glass-panel reveal-up p-7 [animation-delay:240ms]">
          <p className="section-label">Built with feedback</p>
          <h3 className="font-display text-2xl text-white">Shaped by real operator input.</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            SprayRate is being improved through beta testing with real aerial
            applicators so the product stays grounded in actual day-to-day work.
          </p>
        </article>
      </section>
    </SiteChrome>
  );
}
