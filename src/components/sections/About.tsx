import { ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { clinic } from "@/data/clinic";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1400&q=85";

const values = [
  {
    icon: HeartHandshake,
    title: "Trato cercano",
    description:
      "Tratamos a cada mascota como si fuera nuestra. Tiempo, paciencia y empatía con cada familia.",
  },
  {
    icon: ShieldCheck,
    title: "Protocolos serios",
    description:
      "Equipo esterilizado, monitoreo durante anestesia y limpieza estricta en todas las áreas.",
  },
  {
    icon: Sparkles,
    title: "Resultados reales",
    description:
      "Décadas de experiencia tratando parvovirus, gastritis y urgencias complicadas en San Juan.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="relative py-24 md:py-32 bg-secondary/40 grain">
      <div className="container grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20 items-center">
        {/* Image collage */}
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-[2rem] overflow-hidden ring-1 ring-foreground/5 shadow-2xl">
            <img
              src={ABOUT_IMAGE}
              alt="Médico veterinario revisando a un cachorro"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Floating quote card */}
          <div className="absolute -bottom-6 right-2 sm:right-8 lg:-right-6 max-w-[18rem] rounded-2xl bg-background p-5 shadow-xl ring-1 ring-border">
            <div className="font-display text-sm leading-snug text-foreground/85">
              "Sacaron adelante a Bodoque del parvovirus en un mes. Mil gracias."
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-medium">
                JR
              </span>
              Joseth R. · Cliente
            </div>
          </div>

          {/* Decorative dot grid */}
          <div
            aria-hidden
            className="absolute -top-6 -left-6 h-32 w-32 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 max-w-xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary mb-4">
            <span className="h-px w-8 bg-primary" />
            Nosotros
          </span>
          <h2 className="display-soft text-4xl sm:text-5xl md:text-6xl text-foreground">
            Un equipo que{" "}
            <span className="italic text-primary">conoce</span> a tu mascota.
          </h2>
          <p className="mt-5 text-base md:text-lg text-foreground/65 leading-relaxed">
            Desde {clinic.founded}, el Vet Toromacho ha atendido a miles de perros y gatos en
            La Paz y alrededores. Trabajamos con la convicción de que cada animal merece
            atención profesional, instalaciones limpias y un trato sin prisas.
          </p>

          <div className="mt-10 space-y-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex gap-4">
                  <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground mb-1">
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/65">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid grid-cols-3 gap-6 rounded-2xl bg-background/70 border border-border p-6">
            <Stat label="Años" value={`${new Date().getFullYear() - clinic.founded}+`} />
            <Stat label="Reseñas" value={`${clinic.rating.count}`} />
            <Stat label="Calificación" value={`${clinic.rating.value} ★`} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl font-medium leading-none text-primary tabular-nums">
        {value}
      </div>
      <div className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
