import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Vibe Code Your App.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Legal
        </p>
        <h1 className="mb-3 text-4xl font-extrabold tracking-[-0.03em]">
          Terms of Service
        </h1>
        <p className="mb-12 text-[13px] text-muted/50">
          Last updated: March 27, 2026
        </p>

        <div className="space-y-10 text-[15px] leading-relaxed text-muted/70">
          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using vibecodeyour.app (the &quot;Service&quot;), operated by Doved Studio
              (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to be bound by these Terms of
              Service. If you do not agree to these terms, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">2. Description of Service</h2>
            <p>
              Vibe Code Your App is an online course and educational platform that teaches a methodology
              for building and shipping iOS applications using AI-assisted development (vibecoding). The
              Service includes written lessons, code examples, and related educational content.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">3. User Accounts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>You must provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You are responsible for all activities that occur under your account.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">4. Access and Payment</h2>
            <p className="mb-4">
              Part I of the course is available for free. Full access requires a one-time payment. By
              purchasing access, you agree to the pricing displayed at the time of purchase.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>All payments are processed by third-party payment providers.</li>
              <li>Access is granted immediately upon successful payment.</li>
              <li>
                Refunds may be requested within 14 days of purchase if you have not accessed more than
                25% of the paid content, in accordance with EU consumer protection laws.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">5. Intellectual Property</h2>
            <p className="mb-4">
              All content on the Service, including but not limited to text, code examples, graphics,
              logos, and course materials, is the intellectual property of Doved Studio and is protected
              by applicable copyright and intellectual property laws.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                You are granted a personal, non-exclusive, non-transferable license to access and use
                the course content for your own learning purposes.
              </li>
              <li>
                You may not reproduce, distribute, modify, create derivative works from, publicly
                display, or commercially exploit any course content without prior written consent.
              </li>
              <li>
                Code examples provided in lessons may be used in your own projects, but the course
                content itself (text, structure, methodology) may not be redistributed.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">6. Prohibited Conduct</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Share your account credentials or course access with others.</li>
              <li>Use automated tools to scrape or download course content.</li>
              <li>Attempt to circumvent any access restrictions or security measures.</li>
              <li>Use the Service for any unlawful purpose.</li>
              <li>
                Redistribute, resell, or publicly share course materials in any form.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">7. Disclaimer of Warranties</h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of
              any kind, whether express or implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, and non-infringement. We do not warrant
              that:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>The Service will be uninterrupted, error-free, or secure.</li>
              <li>The content will be accurate, complete, or up to date at all times.</li>
              <li>
                Following the course methodology will guarantee any specific results, revenue, or number
                of published applications.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Doved Studio shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, or any loss of profits
              or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill,
              or other intangible losses resulting from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">9. Modifications to the Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of the Service at any
              time, with or without notice. We may also update course content, add or remove modules, and
              adjust pricing for future purchases.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">10. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without
              prior notice or liability, for any reason, including breach of these Terms. Upon
              termination, your right to use the Service will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">11. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of France, without
              regard to its conflict of law provisions. Any disputes arising from these Terms or the
              Service shall be subject to the exclusive jurisdiction of the courts of France.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">12. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. We will notify you of material
              changes by posting the updated Terms on this page and updating the &quot;Last
              updated&quot; date. Your continued use of the Service after changes constitutes acceptance
              of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">13. Contact</h2>
            <p>
              For any questions about these Terms, contact us at{" "}
              <a href="mailto:support@vibecodeyour.app" className="text-accent hover:underline">
                support@vibecodeyour.app
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
