import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Three steps to production-ready code
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-6xl font-extrabold text-accent/10 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
