import { Phone, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/Logo";
import { clinic } from "@/data/clinic";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sage-800 text-secondary">
      <div className="container py-16 md:py-20 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="text-secondary [&_.text-foreground]:text-secondary [&_.text-muted-foreground]:text-secondary/60">
            <Logo />
          </div>
          <p className="text-sm leading-relaxed text-secondary/70 max-w-sm">
            Cuidamos a tu compañero de vida con profesionalismo y cariño desde {clinic.founded}.
            San Juan del Río, Querétaro.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-secondary">Contacto</h4>
          <ul className="space-y-3 text-sm text-secondary/75">
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-terracotta-400" />
              <a href={`tel:${clinic.phone.raw}`} className="hover:text-secondary transition-colors">
                {clinic.phone.display}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-terracotta-400" />
              <span>
                {clinic.address.line1}
                <br />
                {clinic.address.line2}, {clinic.address.city}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-secondary">Horario</h4>
          <ul className="space-y-1.5 text-sm text-secondary/75">
            {clinic.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-secondary/55">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-secondary">Navegación</h4>
          <ul className="space-y-2 text-sm text-secondary/75">
            <li>
              <a href="#servicios" className="hover:text-secondary transition-colors">
                Servicios
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-secondary transition-colors">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#testimonios" className="hover:text-secondary transition-colors">
                Reseñas
              </a>
            </li>
            <li>
              <a href="#emergencia" className="hover:text-secondary transition-colors">
                Urgencias
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-secondary transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary/55">
          <p>© {year} {clinic.name}. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" />
            Hecho con cuidado en San Juan del Río.
          </p>
        </div>
      </div>
    </footer>
  );
}
