import { AlertTriangle, Phone, Clock4, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/data/clinic";

const signs = [
  "Vómito o diarrea con sangre",
  "Convulsiones o desmayo",
  "Dificultad para respirar",
  "Trauma o accidente vial",
  "Intoxicación o veneno",
  "Cachorro decaído (parvo)",
];

export function Emergency() {
  return (
    <section id="emergencia" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background band */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, hsl(18 51% 32%) 0%, hsl(18 51% 42%) 50%, hsl(18 51% 52%) 100%)",
        }}
      />
      {/* Decorative diagonals */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-15"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 24px)",
        }}
      />

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          <div className="text-cream-50">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/15 backdrop-blur px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-cream-50 mb-5">
              <AlertTriangle className="h-3.5 w-3.5" />
              Urgencia veterinaria
            </span>
            <h2 className="display-soft text-4xl sm:text-5xl md:text-6xl text-cream-50 max-w-xl">
              Si tu mascota está en peligro,{" "}
              <span className="italic">llámanos ahora.</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream-50/80 leading-relaxed max-w-lg">
              Cada minuto cuenta. Háblanos antes de venir para preparar quirófano,
              hospitalización o tratamiento intensivo.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-cream-50 text-foreground hover:bg-cream-100">
                <a href={`tel:${clinic.phone.raw}`} className="gap-2">
                  <Phone className="h-5 w-5" />
                  Llamar ahora · {clinic.phone.display}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream-50/40 text-cream-50 hover:bg-cream-50/10 hover:border-cream-50/70"
              >
                <a href={clinic.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Ver ubicación
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-cream-50/80">
              <span className="inline-flex items-center gap-2">
                <Clock4 className="h-4 w-4" />
                Lun—Sáb desde 9:30
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Hospitalización & quirófano
              </span>
            </div>
          </div>

          {/* Warning signs card */}
          <div className="rounded-3xl bg-cream-50 p-7 md:p-9 shadow-2xl">
            <h3 className="font-display text-2xl font-medium text-foreground mb-1">
              Señales de alerta
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Si tu mascota presenta alguno de estos síntomas, no esperes.
            </p>
            <ul className="space-y-3">
              {signs.map((sign) => (
                <li key={sign} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <AlertTriangle className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
