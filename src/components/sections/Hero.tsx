import { ArrowRight } from "lucide-react";
import { BEFORE_CODE, AFTER_CODE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent-subtle border border-accent-border px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Now accepting projects
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] text-text-primary">
              Your AI Wrote
              <br />
              the Code.
              <br />
              <span className="text-accent">We Make It Work.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-lg">
              AI tools generate code fast — but it&apos;s riddled with security holes,
              performance issues, and spaghetti architecture. We fix all of it.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 font-semibold hover:bg-accent-hover transition-colors shadow-sm"
              >
                Fix My Code <ArrowRight size={18} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 border border-border-strong bg-white text-text-secondary px-6 py-3 font-semibold hover:bg-surface transition-colors"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-1 gap-4">
              <div className="border border-red-200 bg-red-50/50 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-red-100/60 border-b border-red-200">
                  <span className="w-3 h-3 bg-red-400" />
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                    Before — AI Generated
                  </span>
                </div>
                <pre className="p-4 text-sm leading-relaxed font-mono text-red-900 overflow-x-auto">
                  <code>{BEFORE_CODE}</code>
                </pre>
              </div>
              <div className="border border-green-200 bg-green-50/50 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-100/60 border-b border-green-200">
                  <span className="w-3 h-3 bg-success" />
                  <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">
                    After — Production Ready
                  </span>
                </div>
                <pre className="p-4 text-sm leading-relaxed font-mono text-green-900 overflow-x-auto">
                  <code>{AFTER_CODE}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
