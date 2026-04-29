import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Vibe Code Your App — how we handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Legal
        </p>
        <h1 className="mb-3 text-4xl font-extrabold tracking-[-0.03em]">
          Privacy Policy
        </h1>
        <p className="mb-12 text-[13px] text-muted/50">
          Last updated: March 27, 2026
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-muted/70">
          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">1. Introduction</h2>
            <p>
              Doved Studio (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates vibecodeyour.app
              (the &quot;Service&quot;). This Privacy Policy explains how we collect, use, and protect
              your personal data when you use our Service, in compliance with the General Data
              Protection Regulation (GDPR) and applicable French data protection laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">2. Data Controller</h2>
            <p>
              The data controller responsible for your personal data is Doved Studio. For any
              privacy-related inquiries, contact us at{" "}
              <a href="mailto:support@vibecodeyour.app" className="text-accent hover:underline">
                support@vibecodeyour.app
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">3. Data We Collect</h2>
            <p className="mb-4">We may collect the following categories of personal data:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground/80">Account information:</strong> email address and
                authentication data when you create an account or sign in.
              </li>
              <li>
                <strong className="text-foreground/80">Usage data:</strong> pages visited, time spent,
                course progress, and interaction patterns to improve the Service.
              </li>
              <li>
                <strong className="text-foreground/80">Payment data:</strong> if you purchase access,
                payment processing is handled by third-party providers (e.g., Stripe). We do not store
                your full payment card details.
              </li>
              <li>
                <strong className="text-foreground/80">Technical data:</strong> IP address, browser type,
                device information, and cookies (see Section 6).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">4. Legal Basis for Processing</h2>
            <p className="mb-4">We process your personal data based on:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground/80">Contract performance:</strong> to provide the
                Service you signed up for.
              </li>
              <li>
                <strong className="text-foreground/80">Legitimate interest:</strong> to improve our
                Service, prevent fraud, and ensure security.
              </li>
              <li>
                <strong className="text-foreground/80">Consent:</strong> for optional cookies and
                marketing communications, which you can withdraw at any time.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">5. How We Use Your Data</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>To provide, maintain, and improve the Service.</li>
              <li>To process transactions and send related information.</li>
              <li>To track your course progress and personalize your experience.</li>
              <li>To communicate with you about updates, security alerts, and support.</li>
              <li>To detect and prevent fraudulent or unauthorized activity.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">6. Cookies</h2>
            <p className="mb-4">We use cookies and similar technologies for:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground/80">Essential cookies:</strong> required for the
                Service to function (authentication, session management).
              </li>
              <li>
                <strong className="text-foreground/80">Analytics cookies:</strong> to understand how
                visitors interact with the Service and improve it.
              </li>
            </ul>
            <p className="mt-4">
              You can manage your cookie preferences through the cookie consent banner or your browser
              settings.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">7. Third-Party Services</h2>
            <p className="mb-4">We may share data with the following third-party services:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground/80">Authentication providers</strong> for sign-in
                functionality.
              </li>
              <li>
                <strong className="text-foreground/80">Payment processors</strong> (e.g., Stripe) for
                handling transactions.
              </li>
              <li>
                <strong className="text-foreground/80">Analytics services</strong> for usage insights.
              </li>
            </ul>
            <p className="mt-4">
              Each third-party provider operates under their own privacy policy and GDPR obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">8. Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary for the purposes described in this
              policy, or as required by law. When you delete your account, we will erase your personal
              data within 30 days, except where retention is required for legal obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">9. Your Rights (GDPR)</h2>
            <p className="mb-4">Under the GDPR, you have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground/80">Access</strong> your personal data.
              </li>
              <li>
                <strong className="text-foreground/80">Rectify</strong> inaccurate or incomplete data.
              </li>
              <li>
                <strong className="text-foreground/80">Erase</strong> your personal data (&quot;right to
                be forgotten&quot;).
              </li>
              <li>
                <strong className="text-foreground/80">Restrict</strong> processing of your data.
              </li>
              <li>
                <strong className="text-foreground/80">Data portability</strong> — receive your data in a
                structured, machine-readable format.
              </li>
              <li>
                <strong className="text-foreground/80">Object</strong> to processing based on legitimate
                interest.
              </li>
              <li>
                <strong className="text-foreground/80">Withdraw consent</strong> at any time for
                consent-based processing.
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:support@vibecodeyour.app" className="text-accent hover:underline">
                support@vibecodeyour.app
              </a>. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">10. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              data against unauthorized access, alteration, disclosure, or destruction. However, no
              method of electronic transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">11. International Transfers</h2>
            <p>
              Your data may be processed outside the European Economic Area (EEA). When this occurs, we
              ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved
              by the European Commission.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material
              changes by posting the new policy on this page and updating the &quot;Last updated&quot;
              date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">13. Contact & Supervisory Authority</h2>
            <p className="mb-4">
              For any questions regarding this Privacy Policy or to exercise your rights, contact us at{" "}
              <a href="mailto:support@vibecodeyour.app" className="text-accent hover:underline">
                support@vibecodeyour.app
              </a>.
            </p>
            <p>
              You also have the right to lodge a complaint with your local data protection authority. In
              France, the supervisory authority is the{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                CNIL (Commission Nationale de l&apos;Informatique et des Libert&eacute;s)
              </a>.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-white/[0.04] pt-8">
          <Link href="/" className="text-[13px] text-muted/50 hover:text-foreground transition-colors">
            &larr; Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
