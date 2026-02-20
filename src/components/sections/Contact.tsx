"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", budget: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Tell us about your project
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            Share the details and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {status === "sent" ? (
          <div className="bg-green-50 border border-green-200 p-8 text-center">
            <CheckCircle size={40} className="text-success mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Message sent
            </h3>
            <p className="text-text-secondary">
              We&apos;ll review your project details and get back to you within
              24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 text-accent font-semibold hover:text-accent-hover transition-colors text-sm"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full border border-border bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full border border-border bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-text-primary mb-1.5"
              >
                Budget range{" "}
                <span className="text-text-muted font-normal">(optional)</span>
              </label>
              <select
                id="budget"
                value={form.budget}
                onChange={(e) =>
                  setForm({ ...form, budget: e.target.value })
                }
                className="w-full border border-border bg-white px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
              >
                <option value="">Select a range</option>
                <option value="Starter ($499)">Starter ($499)</option>
                <option value="Professional ($1,999)">
                  Professional ($1,999)
                </option>
                <option value="Enterprise ($4,999+)">
                  Enterprise ($4,999+)
                </option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-primary mb-1.5"
              >
                Tell us about your project
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full border border-border bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
                placeholder="What did the AI build? What's not working? What frameworks/languages are involved?"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle size={16} />
                <span>
                  Something went wrong. Please try again or email us directly at{" "}
                  <a
                    href="mailto:hello@deployjanitor.com"
                    className="underline"
                  >
                    hello@deployjanitor.com
                  </a>
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 font-semibold hover:bg-accent-hover transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed text-sm"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
