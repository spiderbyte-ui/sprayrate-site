import { SiteChrome } from "@/components/site-chrome";

const sections = [
  {
    title: "Overview",
    body: "This Privacy Policy explains what information SprayRate may store, process, export, or transmit when you use the app. SprayRate is designed around local-first workflows and generally keeps core business data on your device unless you choose to export, share, or invoke third-party services.",
  },
  {
    title: "Information You Store",
    body: "SprayRate may store customer details, quote details, pricing settings, product library records, spray plans, application records, notes, timestamps, branding details, and related workflow data that you enter or generate.",
  },
  {
    title: "Local Device Storage",
    body: "SprayRate uses on-device storage to save working data and settings. If the app is deleted, device storage is cleared, or backups are incomplete, locally stored information may be lost.",
  },
  {
    title: "Location, Weather, and Related Services",
    body: "If you request location-based or weather-based workflows, SprayRate may access device location details and may transmit relevant request data to third-party or platform services. Returned information may be delayed, incomplete, or inaccurate and should be independently verified.",
  },
  {
    title: "Exports and Sharing",
    body: "When you export PDFs, CSVs, backups, or related records, those files may include customer, quote, spray plan, application record, weather, location, and business profile information. Once exported or shared, those copies may be governed by the privacy and security practices of the destinations you choose.",
  },
  {
    title: "Retention and Control",
    body: "You generally control your information by editing or deleting records in the app, deleting exported files, and managing your device and backup practices. You are responsible for your own backup, device security, and export handling decisions.",
  },
  {
    title: "Contact",
    body: "For privacy questions, contact support@getsprayrate.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteChrome
      eyebrow="Privacy Policy"
      title="SprayRate Privacy Policy"
      intro="Last updated June 22, 2026. This page summarizes the current privacy model for SprayRate during its beta-stage release cycle."
    >
      <section className="grid gap-5">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className="glass-panel reveal-up p-7"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <h2 className="font-display text-2xl text-white">{section.title}</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{section.body}</p>
          </article>
        ))}
      </section>
    </SiteChrome>
  );
}
