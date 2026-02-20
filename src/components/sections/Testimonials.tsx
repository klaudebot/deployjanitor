import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Trusted by engineering teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-xl border border-border p-6"
            >
              <Quote size={24} className="text-accent/20 mb-4" />
              <p className="text-text-secondary leading-relaxed text-sm mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-text-primary text-sm">
                  {t.author}
                </p>
                <p className="text-text-muted text-sm">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
