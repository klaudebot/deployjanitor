import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-dark-bg py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Ready to ship code you&apos;re proud of?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-neutral-400 max-w-xl mx-auto">
          Stop worrying about what your AI left behind. Let our engineers
          transform your codebase into something production-ready.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-white text-dark-bg px-6 py-3 font-semibold hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            Get Started <ArrowRight size={18} />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 border border-neutral-600 text-neutral-300 px-6 py-3 font-semibold hover:bg-dark-surface transition-colors cursor-pointer"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
