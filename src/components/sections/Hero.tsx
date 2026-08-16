import { Star, Phone, CalendarDays, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { clinic } from "@/data/clinic";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=2000&q=85";

export function Hero() {
  return (
    <section id="inicio" className="relative grain pt-16 md:pt-20">
      {/* Decorative organic shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 -left-32 h-[480px] w-[480px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.18), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(41 47% 75% / 0.55), transparent 70%)",
        }}
      />

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-6 px-4 stagger">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/80 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              Clínica Veterinaria · San Juan del Río, Qro.
            </span>

            {/* Headline */}
            <h1 className="display-tight text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-4xl text-foreground">
              Cuidamos a tu{" "}
              <span className="relative inline-block">
                <span className="italic text-primary" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}>
                  compañero
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="14"
                  viewBox="0 0 200 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 9 Q 50 2, 100 7 T 198 5"
                    stroke="hsl(var(--accent))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              de vida.
            </h1>

            {/* Subhead */}
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-foreground/70">
              Consultas, vacunación, cirugía y atención de urgencias para perros y gatos en
              San Juan del Río. Atención profesional con la cercanía de una clínica de barrio.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
              <Button asChild size="lg">
                <a href="#contacto" className="gap-2">
                  <CalendarDays className="h-5 w-5" />
                  Agendar consulta
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${clinic.phone.raw}`} className="gap-2">
                  <Phone className="h-5 w-5" />
                  {clinic.phone.display}
                </a>
              </Button>
            </div>

            {/* Rating chip */}
            <a
              href="#testimonios"
              className="mt-4 inline-flex items-center gap-3 rounded-full border border-foreground/10 bg-background/70 backdrop-blur px-4 py-2 text-sm text-foreground/80 hover:bg-background transition-colors shadow-sm"
            >
              <div className="flex items-center gap-0.5" aria-label={`${clinic.rating.value} de 5 estrellas`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < Math.round(clinic.rating.value)
                        ? "h-4 w-4 fill-accent text-accent"
                        : "h-4 w-4 text-foreground/20"
                    }
                  />
                ))}
              </div>
              <span className="font-medium tabular-nums">{clinic.rating.value}</span>
              <span className="text-foreground/40">·</span>
              <span className="text-foreground/60">
                {clinic.rating.count} reseñas en {clinic.rating.source}
              </span>
            </a>
          </div>
        }
      >
        {/* Inside the scroll "screen" */}
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <img
            src={HERO_IMAGE}
            alt="Atención veterinaria profesional para tu mascota"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sage-800/85 via-sage-800/30 to-transparent" />

          {/* Floating info cards */}
          <div className="relative z-10 h-full w-full flex flex-col justify-between p-4 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/95 backdrop-blur px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                +12 años cuidando a tu mascota
              </span>
              <span className="hidden md:inline-flex items-center gap-2 rounded-full bg-background/95 backdrop-blur px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Abierto · Lun a Sáb
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-3 md:gap-4">
              <StatCard label="Consultas" value="9 mil+" sub="atendidas con cariño" />
              <StatCard label="Pacientes salvados" value="100%" sub="protocolo parvovirus" />
              <StatCard label="Calificación" value={`${clinic.rating.value} ★`} sub={`${clinic.rating.count} reseñas`} />
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl bg-background/95 backdrop-blur p-4 md:p-5 shadow-lg">
      <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-1">
        {label}
      </div>
      <div className="font-display text-2xl md:text-3xl font-medium leading-none text-foreground">
        {value}
      </div>
      <div className="text-xs text-muted-foreground mt-1.5">{sub}</div>
    </div>
  );
}
