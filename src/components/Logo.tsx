import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="10" fill="hsl(var(--primary))" />
        <path
          d="M14 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm12 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM10 23c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm20 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 32c-3.86 0-7-2-7-5 0-2.76 3.13-4.5 7-4.5s7 1.74 7 4.5c0 3-3.14 5-7 5z"
          fill="hsl(var(--secondary))"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display text-base font-medium tracking-tight text-foreground">
          El Toro Macho
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Veterinaria
        </span>
      </div>
    </div>
  );
}
