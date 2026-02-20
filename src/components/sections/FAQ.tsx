"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-surface/50 transition-colors cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-text-primary text-sm pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-text-muted shrink-0 transition-transform duration-200",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === i ? "max-h-96" : "max-h-0"
                )}
              >
                <p className="px-6 pb-4 text-sm text-text-secondary leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
