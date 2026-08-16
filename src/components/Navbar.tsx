import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Reseñas" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/70"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <a href="#inicio" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-foreground/75 hover:text-foreground transition-colors rounded-full hover:bg-foreground/[0.04]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <a href={`tel:${clinic.phone.raw}`} className="gap-2">
              <Phone className="h-4 w-4" />
              {clinic.phone.display}
            </a>
          </Button>
          <Button asChild variant="accent" size="sm">
            <a href="#emergencia">Urgencia</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Menú">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="sr-only">Menú principal</SheetTitle>
            <div className="mb-8 pt-1">
              <Logo />
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-lg font-display font-medium text-foreground/90 hover:bg-secondary transition-colors"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-2">
              <Button asChild variant="default" className="w-full">
                <a href={`tel:${clinic.phone.raw}`} className="gap-2">
                  <Phone className="h-4 w-4" />
                  {clinic.phone.display}
                </a>
              </Button>
              <Button asChild variant="accent" className="w-full">
                <a href="#emergencia">Atención de urgencia</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
