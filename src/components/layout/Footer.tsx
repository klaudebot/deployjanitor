export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-3">Deploy Janitor</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Professional code review and fixing for AI-generated codebases.
              We turn broken AI output into production-ready, secure, and
              maintainable applications.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#services" className="hover:text-white transition-colors">Security Audit</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Performance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Refactoring</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Test Coverage</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Deploy Janitor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
