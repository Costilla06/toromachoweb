import { Phone } from "lucide-react";
import { clinic } from "@/data/clinic";

export function EmergencyFAB() {
  return (
    <a
      href={`tel:${clinic.phone.raw}`}
      className="fixed z-30 bottom-5 right-5 md:bottom-7 md:right-7
                 inline-flex items-center gap-2 rounded-full
                 bg-accent text-accent-foreground
                 px-4 py-3 md:px-5 md:py-3.5
                 shadow-lg shadow-accent/30
                 hover:bg-terracotta-600 hover:shadow-xl
                 transition-all duration-300
                 animate-soft-pulse
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`Llamar a urgencias ${clinic.phone.display}`}
    >
      <Phone className="h-5 w-5" />
      <span className="hidden md:inline font-medium text-sm">Urgencia</span>
    </a>
  );
}
