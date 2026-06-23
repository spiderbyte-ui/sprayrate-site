import { SiteChrome } from "@/components/site-chrome";

export default function ContactPage() {
  return (
    <SiteChrome
      eyebrow="Contact"
      title="Reach out if you want beta access or have questions about how SprayRate fits your operation."
      intro="SprayRate is in an active feedback phase. If you are an aerial applicator and want to test the product, this is the right time to get in touch."
    >
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="glass-panel reveal-up p-8">
          <p className="section-label">Primary contact</p>
          <h2 className="font-display text-3xl text-white">Beta and support</h2>
          <div className="mt-5 space-y-3 text-base text-[var(--muted)]">
            <p>
              Email: <a href="mailto:support@getsprayrate.com">support@getsprayrate.com</a>
            </p>
            <p>
              General: <a href="mailto:hello@spiderbytelabs.com">hello@spiderbytelabs.com</a>
            </p>
            <p>Operator: SpiderByte Labs</p>
            <p>Response style: practical, direct, beta-stage support</p>
          </div>
        </article>
        <article className="glass-panel reveal-up p-8 [animation-delay:120ms]">
          <p className="section-label">Best uses for contact</p>
          <ul className="space-y-3 text-base leading-8 text-[var(--muted)]">
            <li>Request founding beta access</li>
            <li>Share workflow pain points</li>
            <li>Ask product questions</li>
            <li>Report beta issues or confusing steps</li>
          </ul>
        </article>
      </section>
    </SiteChrome>
  );
}
