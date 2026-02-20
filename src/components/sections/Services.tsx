import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Everything your AI code needs
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            A comprehensive suite of services to transform AI-generated code
            into production-grade software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white  border border-border p-6 hover:border-accent-border hover:shadow-md transition-all"
              >
                <div className="w-10 h-10  bg-accent-subtle flex items-center justify-center mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
