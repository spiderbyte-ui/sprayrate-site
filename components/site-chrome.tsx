import Link from "next/link";
import { ReactNode } from "react";
import { navItems } from "./site-data";

export function SiteChrome({
  title,
  eyebrow,
  intro,
  children,
}: {
  title: string;
  eyebrow: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#194b68_0%,#0d1f31_32%,#08131f_68%,#06101a_100%)] text-[var(--ink)]">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-24 h-64 w-64 rounded-full bg-[rgba(127,214,255,0.16)] blur-3xl" />
        <div className="absolute right-[10%] top-48 h-80 w-80 rounded-full bg-[rgba(249,185,102,0.14)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]" />
      </div>
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-10 pt-5 sm:px-8 lg:px-10">
        <header className="glass-panel sticky top-5 z-20 mb-10 flex flex-col gap-6 px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/" className="group inline-flex items-center gap-3 text-left">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#87d8ff,#f9b966)] text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(135,216,255,0.25)] transition-transform duration-300 group-hover:-translate-y-0.5">
                SR
              </div>
              <div>
                <div className="font-display text-lg font-semibold tracking-[0.18em] text-white">
                  SPRAYRATE
                </div>
                <div className="text-xs uppercase tracking-[0.32em] text-[var(--muted)]">
                  Built for Aerial Applicators
                </div>
              </div>
            </Link>
            <nav
              aria-label="Primary navigation"
              className="flex flex-wrap gap-2 text-sm text-[var(--muted)]"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 transition duration-300 hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main id="main-content" className="flex-1">
          <section className="mx-auto mb-10 max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
              {eyebrow}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              {intro}
            </p>
          </section>
          {children}
        </main>

        <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-[var(--muted)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>SprayRate is designed to support planning and record workflows, not replace operator judgment.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
