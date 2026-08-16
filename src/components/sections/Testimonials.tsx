import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary mb-4">
              <span className="h-px w-8 bg-primary" />
              Reseñas reales
            </span>
            <h2 className="display-soft text-4xl sm:text-5xl md:text-6xl text-foreground">
              Lo que dicen las{" "}
              <span className="italic text-primary">familias</span> que nos visitan.
            </h2>
          </div>

          <div className="flex items-center gap-5 rounded-2xl border border-border bg-secondary/50 p-5">
            <div className="text-center">
              <div className="font-display text-5xl font-medium leading-none text-primary tabular-nums">
                {clinic.rating.value}
              </div>
              <div className="mt-1 flex items-center justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-3.5 w-3.5",
                      i < Math.round(clinic.rating.value)
                        ? "fill-accent text-accent"
                        : "text-foreground/20",
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-sm text-foreground/70 leading-tight">
              <div className="font-medium text-foreground">{clinic.rating.count} reseñas</div>
              <div className="text-muted-foreground text-xs mt-1">verificadas en Google</div>
            </div>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name + i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure
      className={cn(
        "relative mb-6 break-inside-avoid rounded-2xl border border-border p-6 md:p-7 transition-shadow hover:shadow-lg",
        t.highlight
          ? "bg-gradient-to-br from-cream-100 to-cream-50"
          : "bg-background",
      )}
    >
      <Quote
        className={cn(
          "absolute right-5 top-5 h-6 w-6",
          t.highlight ? "text-accent/30" : "text-foreground/10",
        )}
        strokeWidth={1.5}
      />

      <div className="mb-3 flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < t.rating ? "fill-accent text-accent" : "text-foreground/15",
            )}
          />
        ))}
      </div>

      <blockquote className="font-display text-base md:text-[1.05rem] leading-snug text-foreground/85">
        "{t.quote}"
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3 pt-5 border-t border-border/60">
        <span
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium",
            t.highlight
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground",
          )}
        >
          {t.initials}
        </span>
        <div className="text-sm leading-tight">
          <div className="font-medium text-foreground">{t.name}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{t.when}</div>
        </div>
      </figcaption>
    </figure>
  );
}
