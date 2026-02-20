"use client";

import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const handleCheckout = async (priceId: string) => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <section id="pricing" className="bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            One-time payment. No subscriptions. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "rounded-xl border p-8 flex flex-col",
                tier.featured
                  ? "border-accent bg-white shadow-lg relative"
                  : "border-border bg-white"
              )}
            >
              {tier.featured && (
                <div className="absolute -top-px left-0 right-0 h-1 gradient-accent rounded-t-xl" />
              )}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary">
                  {tier.name}
                </h3>
                <p className="text-text-muted text-sm mt-1">
                  {tier.description}
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-text-primary">
                  {tier.price}
                </span>
                <span className="text-text-muted text-sm ml-2">
                  {tier.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className="text-success mt-0.5 shrink-0"
                    />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() =>
                  tier.priceId
                    ? handleCheckout(tier.priceId)
                    : document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className={cn(
                  "w-full rounded-lg px-6 py-3 font-semibold transition-colors text-sm",
                  tier.featured
                    ? "bg-accent text-white hover:bg-accent-hover shadow-sm"
                    : "border border-border-strong bg-white text-text-secondary hover:bg-surface"
                )}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
