import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Image src="/logo.png" alt="Deploy Janitor" width={180} height={45} className="mb-3 brightness-0 invert" />
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Professional code review and fixing for AI-generated codebases.
              We turn broken AI output into production-ready, secure, and
              maintainable applications.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Security Audit</a></li>
              <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Performance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Refactoring</a></li>
              <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Test Coverage</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><a href="#pricing" className="hover:text-white transition-colors cursor-pointer">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors cursor-pointer">FAQ</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors cursor-pointer">How It Works</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-700/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <span>&copy; {new Date().getFullYear()} Deploy Janitor. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
