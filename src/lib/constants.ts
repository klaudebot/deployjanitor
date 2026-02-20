import {
  Shield,
  Zap,
  RefreshCw,
  TestTube,
  FileText,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "86%", label: "of AI code fails to prevent XSS attacks" },
  { value: "45%", label: "contains security vulnerabilities" },
  { value: "73%", label: "requires significant refactoring" },
  { value: "92%", label: "lacks proper error handling" },
];

export const STEPS = [
  {
    number: "01",
    title: "Submit Your Codebase",
    description:
      "Share your repository via GitHub, GitLab, or a zip upload. Tell us what the AI built and what's not working.",
  },
  {
    number: "02",
    title: "We Audit & Fix",
    description:
      "Our engineers review every line — security, performance, architecture, tests. We fix what's broken and refactor what's messy.",
  },
  {
    number: "03",
    title: "Receive Your Report",
    description:
      "Get a detailed report of every change, why we made it, and a production-ready codebase you can deploy with confidence.",
  },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: Shield,
    title: "Security Audit",
    description:
      "SQL injection, XSS, CSRF, auth flaws — we find and fix every vulnerability AI tools routinely introduce.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Eliminate N+1 queries, memory leaks, and unnecessary re-renders. Your app will be fast, not just functional.",
  },
  {
    icon: RefreshCw,
    title: "Code Refactoring",
    description:
      "Transform spaghetti AI output into clean, maintainable architecture with proper separation of concerns.",
  },
  {
    icon: TestTube,
    title: "Test Coverage",
    description:
      "Unit tests, integration tests, and e2e coverage. Ship with confidence knowing your code actually works.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Clear inline docs, API documentation, and architecture decision records so your team can maintain the code.",
  },
  {
    icon: Rocket,
    title: "Deployment Ready",
    description:
      "CI/CD pipelines, environment configs, Docker setup, and production hardening so you can deploy immediately.",
  },
];

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
  priceId?: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "$499",
    period: "one-time",
    description: "Perfect for small projects and MVPs",
    features: [
      "Up to 5,000 lines of code",
      "Security audit & refactoring",
      "1 revision cycle",
      "Written report",
      "5-day turnaround",
    ],
    cta: "Get Started",
    featured: false,
    priceId: "starter",
  },
  {
    name: "Professional",
    price: "$1,999",
    period: "one-time",
    description: "Full-service cleanup for production apps",
    features: [
      "Up to 25,000 lines of code",
      "Full audit — all 6 service areas",
      "Test coverage included",
      "2 revision cycles",
      "48-hour turnaround",
      "30-day Q&A access",
    ],
    cta: "Get Started",
    featured: true,
    priceId: "professional",
  },
  {
    name: "Enterprise",
    price: "$4,999+",
    period: "custom",
    description: "For teams with large or complex codebases",
    features: [
      "Unlimited codebase size",
      "Full team code review",
      "CI/CD integration",
      "Monthly retainer options",
      "Dedicated engineer",
      "24-hour turnaround",
    ],
    cta: "Contact Us",
    featured: false,
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We had Copilot generate our entire REST API. It worked in dev but was riddled with SQL injection vulnerabilities. Deploy Janitor caught every one and refactored our data layer properly.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Meridian Health",
  },
  {
    quote:
      "ChatGPT built our Next.js app in a weekend. It took Deploy Janitor two days to make it production-ready — proper error boundaries, auth middleware, and actual test coverage.",
    author: "Marcus Rivera",
    role: "Lead Developer",
    company: "Stackline",
  },
  {
    quote:
      "The before/after was staggering. Our AI-generated codebase went from 0% test coverage and 23 critical vulnerabilities to a clean bill of health. Worth every penny.",
    author: "Emily Park",
    role: "Engineering Manager",
    company: "Clearwave Analytics",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What AI tools do you support?",
    answer:
      "We work with code generated by any AI tool — ChatGPT, GitHub Copilot, Claude, Cursor, Replit Agent, v0, and others. If an AI wrote it, we can fix it.",
  },
  {
    question: "How does the process work?",
    answer:
      "After purchase, you'll receive a secure link to share your repository. Our engineers review your code, fix issues, and deliver a detailed report with every change documented.",
  },
  {
    question: "What languages and frameworks do you support?",
    answer:
      "We support all major languages and frameworks: TypeScript/JavaScript (React, Next.js, Node), Python (Django, FastAPI, Flask), Go, Rust, and more. If it's in production, we can handle it.",
  },
  {
    question: "How long does it take?",
    answer:
      "Starter tier: 5 business days. Professional tier: 48 hours. Enterprise: 24 hours. These are maximum turnaround times — most projects are completed sooner.",
  },
  {
    question: "Do you just review the code or actually fix it?",
    answer:
      "We fix everything. You receive a production-ready codebase, not just a list of issues. Every change is documented in your report so you understand what was done and why.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer:
      "Each tier includes revision cycles (1 for Starter, 2 for Professional). If the work doesn't meet your requirements, we'll revise it at no additional cost.",
  },
  {
    question: "Is my code kept confidential?",
    answer:
      "Absolutely. We sign NDAs on request, all code is handled on encrypted systems, and we delete your repository from our systems within 30 days of project completion.",
  },
];

export const BEFORE_CODE = `app.get('/user', (req, res) => {
  const query = \`SELECT * FROM users
    WHERE id = \${req.query.id}\`;
  db.query(query, (err, result) => {
    res.send(result);
  });
});`;

export const AFTER_CODE = `app.get('/user/:id', authenticate, async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    if (!userId) return res.status(400)
      .json({ error: 'Invalid ID' });
    const user = await db.query(
      'SELECT id, name, email FROM users WHERE id = ?',
      [userId]
    );
    if (!user) return res.status(404)
      .json({ error: 'Not found' });
    res.json(sanitizeUserData(user));
  } catch (error) {
    logger.error('User fetch error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});`;
