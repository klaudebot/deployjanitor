import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import { FAQ_ITEMS } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Deploy Janitor",
      url: "https://deployjanitor.com",
      description:
        "Professional code review and fixing service for AI-generated codebases. Security audits, performance optimization, refactoring, and test coverage.",
      priceRange: "$499 - $4,999+",
      email: "hello@deployjanitor.com",
      areaServed: "Worldwide",
      serviceType: "Code Review and Fixing",
      knowsAbout: [
        "AI-generated code",
        "Security auditing",
        "Code refactoring",
        "Performance optimization",
        "Test coverage",
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Starter",
          price: "499",
          priceCurrency: "USD",
          description: "Up to 5,000 lines of code. Security audit & refactoring. 5-day turnaround.",
        },
        {
          "@type": "Offer",
          name: "Professional",
          price: "1999",
          priceCurrency: "USD",
          description: "Up to 25,000 lines of code. Full audit — all 6 service areas. 48-hour turnaround.",
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          price: "4999",
          priceCurrency: "USD",
          description: "Unlimited codebase size. Dedicated engineer. 24-hour turnaround.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "WebSite",
      name: "Deploy Janitor",
      url: "https://deployjanitor.com",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <HowItWorks />
        <Services />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
