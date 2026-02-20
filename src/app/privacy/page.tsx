import type { Metadata } from "next";
import LegalPageLayout from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Deploy Janitor collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="February 20, 2026">
      <h2>1. Introduction</h2>
      <p>
        Deploy Janitor (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
        operates the website deployjanitor.com. This Privacy Policy explains how
        we collect, use, disclose, and safeguard your information when you visit
        our website or use our services.
      </p>

      <h2>2. Information We Collect</h2>

      <h3>2.1 Information You Provide</h3>
      <p>
        When you use our contact form or purchase a service, we may collect:
      </p>
      <ul>
        <li>Name and email address</li>
        <li>Company or project details</li>
        <li>Payment information (processed securely by Stripe)</li>
        <li>Any code or project files you share with us for review</li>
      </ul>

      <h3>2.2 Automatically Collected Information</h3>
      <p>
        With your consent, we use Google Analytics to collect usage data
        including:
      </p>
      <ul>
        <li>Pages visited and time spent on each page</li>
        <li>Referring website or source</li>
        <li>Browser type and device information</li>
        <li>Approximate geographic location (country/city level)</li>
      </ul>
      <p>
        This data is only collected after you accept analytics cookies via our
        cookie consent banner. You can decline or withdraw consent at any time by
        clearing your browser&apos;s local storage.
      </p>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To provide and deliver our code review and fixing services</li>
        <li>To process payments through Stripe</li>
        <li>To respond to your inquiries and support requests</li>
        <li>To improve our website and services (via anonymized analytics)</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>4. Third-Party Services</h2>

      <h3>4.1 Stripe</h3>
      <p>
        We use Stripe for payment processing. Stripe collects and processes your
        payment information in accordance with their{" "}
        <a
          href="https://stripe.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        . We do not store your full credit card details on our servers. Stripe
        cookies are strictly necessary for payment processing and are not gated
        by cookie consent.
      </p>

      <h3>4.2 Google Analytics</h3>
      <p>
        We use Google Analytics 4 to understand how visitors interact with our
        site. Google Analytics uses cookies that are only set after you provide
        consent. You can learn more about Google&apos;s data practices in
        their{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>

      <h3>4.3 Vercel</h3>
      <p>
        Our website is hosted on Vercel. Vercel may collect standard server
        logs including IP addresses for security and performance purposes. See
        Vercel&apos;s{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>{" "}
        for details.
      </p>

      <h2>5. Cookies and Local Storage</h2>
      <p>We use the following types of storage on your device:</p>
      <ul>
        <li>
          <strong>Cookie consent preference</strong> — Stored in your
          browser&apos;s local storage to remember whether you accepted or
          declined analytics cookies.
        </li>
        <li>
          <strong>Google Analytics cookies</strong> — Only set if you accept
          analytics cookies. Used to distinguish users and track sessions.
        </li>
        <li>
          <strong>Stripe cookies</strong> — Set as needed for secure payment
          processing. These are strictly necessary and do not require consent.
        </li>
      </ul>

      <h2>6. Data Retention</h2>
      <p>
        We retain your personal information only for as long as necessary to
        fulfill the purposes outlined in this policy. Project files and code
        shared for review are retained for the duration of the engagement plus
        30 days, after which they are permanently deleted unless you request
        otherwise.
      </p>

      <h2>7. Your Rights (GDPR)</h2>
      <p>
        If you are located in the European Economic Area (EEA), you have the
        following rights regarding your personal data:
      </p>
      <ul>
        <li>
          <strong>Access</strong> — Request a copy of the personal data we hold
          about you.
        </li>
        <li>
          <strong>Rectification</strong> — Request correction of inaccurate
          data.
        </li>
        <li>
          <strong>Erasure</strong> — Request deletion of your personal data.
        </li>
        <li>
          <strong>Restriction</strong> — Request restriction of processing your
          data.
        </li>
        <li>
          <strong>Portability</strong> — Request transfer of your data in a
          machine-readable format.
        </li>
        <li>
          <strong>Objection</strong> — Object to processing of your personal
          data.
        </li>
        <li>
          <strong>Withdraw consent</strong> — Withdraw your consent for
          analytics cookies at any time by clearing local storage.
        </li>
      </ul>
      <p>
        To exercise any of these rights, please contact us using the details
        below.
      </p>

      <h2>8. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to
        protect your personal information against unauthorized access,
        alteration, disclosure, or destruction. All data is transmitted over
        encrypted connections (HTTPS).
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Our services are not directed to individuals under the age of 18. We do
        not knowingly collect personal information from children.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated &quot;Last updated&quot; date.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or wish to exercise
        your data rights, please contact us at{" "}
        <a href="mailto:privacy@deployjanitor.com">privacy@deployjanitor.com</a>
        .
      </p>
    </LegalPageLayout>
  );
}
