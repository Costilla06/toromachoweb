import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="servicios" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary mb-4">
            <span className="h-px w-8 bg-primary" />
            Servicios
          </span>
          <h2 className="display-soft text-4xl sm:text-5xl md:text-6xl text-foreground">
            Todo lo que necesita tu mascota,{" "}
            <span className="italic text-primary">bajo un mismo techo.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-foreground/65 max-w-2xl leading-relaxed">
            Desde la consulta de rutina hasta una urgencia. Diagnóstico, cirugía, hospitalización
            y un protocolo intensivo de parvovirus que ha salvado decenas de cachorros.
          </p>
        </div>

        <div className="grid gap-px bg-border rounded-3xl overflow-hidden ring-1 ring-border shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  return (
    <article className="group relative bg-background p-7 md:p-8 transition-colors hover:bg-cream-50 cursor-default">
      <div className="flex items-start justify-between mb-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
        </div>
        {service.badge ? (
          <Badge variant={service.badge === "Prioritario" ? "accent" : "default"}>
            {service.badge}
          </Badge>
        ) : (
          <ArrowUpRight
            className="h-4 w-4 text-foreground/25 group-hover:text-foreground/70 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
            strokeWidth={1.75}
          />
        )}
      </div>

      <h3 className="font-display text-xl md:text-[1.35rem] font-medium leading-tight text-foreground mb-2">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-foreground/65">{service.description}</p>
    </article>
  );
}
