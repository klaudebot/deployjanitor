import type { Metadata } from "next";
import LegalPageLayout from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using Deploy Janitor's code review and fixing services.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="February 20, 2026">
      <h2>1. Overview</h2>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of the Deploy
        Janitor website and services. By accessing our website or purchasing our
        services, you agree to be bound by these Terms.
      </p>

      <h2>2. Service Description</h2>
      <p>
        Deploy Janitor provides professional code review and fixing services for
        AI-generated codebases. Our services include security audits, performance
        optimization, code refactoring, and test coverage, delivered as one-time
        engagements.
      </p>

      <h2>3. Payment Terms</h2>
      <ul>
        <li>
          All prices are listed in USD and are exclusive of applicable taxes
          unless otherwise stated.
        </li>
        <li>
          Payment is processed securely through Stripe at the time of purchase.
        </li>
        <li>
          You agree to provide accurate and complete payment information.
        </li>
        <li>
          All sales are final once work has commenced. Refund requests for work
          not yet started may be considered on a case-by-case basis.
        </li>
      </ul>

      <h2>4. Delivery Timelines</h2>
      <p>
        Estimated delivery timelines are provided at the time of purchase and
        vary by service tier. While we make every effort to meet estimated
        timelines, actual delivery times may vary depending on project
        complexity. We will communicate any significant delays promptly.
      </p>

      <h2>5. Revisions</h2>
      <p>
        Each service tier includes a specified number of revision rounds as
        described on our pricing page. Additional revisions beyond the included
        rounds may be available at an additional cost.
      </p>

      <h2>6. Intellectual Property</h2>
      <ul>
        <li>
          You retain full ownership of your original code and project files.
        </li>
        <li>
          Upon full payment, all modifications, fixes, and improvements made by
          Deploy Janitor are assigned to you.
        </li>
        <li>
          We retain no rights to use, distribute, or claim ownership of your
          code or project after the engagement is complete.
        </li>
        <li>
          We may reference the general nature of work performed (e.g.,
          &quot;security audit for a SaaS application&quot;) for portfolio
          purposes, without identifying you or sharing any code, unless you
          provide written consent.
        </li>
      </ul>

      <h2>7. Confidentiality</h2>
      <p>
        We treat all code, project files, and business information you share
        with us as confidential. We will not disclose your information to third
        parties except as required by law. All project files are permanently
        deleted within 30 days of engagement completion unless otherwise agreed.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Deploy Janitor shall not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages, including but not limited to loss of profits, data, or business
        opportunities, arising from your use of our services.
      </p>
      <p>
        Our total liability for any claim arising from our services shall not
        exceed the amount you paid for the specific service giving rise to the
        claim.
      </p>

      <h2>9. Warranties and Disclaimers</h2>
      <p>
        We provide our services on an &quot;as is&quot; and &quot;as
        available&quot; basis. While we strive to deliver high-quality work, we
        do not guarantee that our services will make your codebase entirely free
        of bugs, security vulnerabilities, or performance issues.
      </p>

      <h2>10. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Submit code that contains malware, viruses, or other harmful
          components.
        </li>
        <li>
          Use our services for any illegal purpose or in violation of any
          applicable laws.
        </li>
        <li>
          Misrepresent the nature or ownership of the code submitted for review.
        </li>
      </ul>

      <h2>11. Termination</h2>
      <p>
        We reserve the right to refuse or terminate services at our discretion
        if we determine that you have violated these Terms or if continuing the
        engagement would be impractical or inappropriate.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with
        applicable law, without regard to conflict of law principles.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Any changes will be posted
        on this page with an updated &quot;Last updated&quot; date. Continued
        use of our services after changes constitutes acceptance of the updated
        Terms.
      </p>

      <h2>14. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <a href="mailto:hello@deployjanitor.com">hello@deployjanitor.com</a>.
      </p>
    </LegalPageLayout>
  );
}
