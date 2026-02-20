import { STATS } from "@/lib/constants";

export default function Problem() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            AI code is fast. It&apos;s also a liability.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            ChatGPT, Copilot, and Claude generate plausible-looking code that
            passes a quick review. But under the surface, the problems are
            serious.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="bg-white  border border-border p-6 text-center"
            >
              <p className="text-4xl font-extrabold text-accent mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
