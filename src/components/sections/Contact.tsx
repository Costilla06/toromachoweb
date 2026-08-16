import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { clinic } from "@/data/clinic";

const schema = z.object({
  name: z.string().min(2, "Tu nombre es necesario"),
  email: z.string().email("Correo no válido"),
  phone: z.string().min(7, "Teléfono no válido").optional().or(z.literal("")),
  pet: z.string().optional(),
  message: z.string().min(10, "Cuéntanos un poco más (mín. 10 caracteres)"),
});

type FormValues = z.infer<typeof schema>;

const MAP_EMBED =
  "https://www.google.com/maps?q=Veterinaria+El+Toro+Macho+San+Juan+del+Rio+Queretaro&output=embed";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const body = encodeURIComponent(
      `Hola, soy ${data.name}.\n\n` +
        (data.pet ? `Mi mascota: ${data.pet}\n` : "") +
        (data.phone ? `Tel: ${data.phone}\n\n` : "\n") +
        data.message,
    );
    const subject = encodeURIComponent(`Consulta de ${data.name}`);
    window.location.href = `mailto:${clinic.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-secondary/40 grain">
      <div className="container">
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary mb-4">
            <span className="h-px w-8 bg-primary" />
            Contacto
          </span>
          <h2 className="display-soft text-4xl sm:text-5xl md:text-6xl text-foreground">
            Agenda una visita o{" "}
            <span className="italic text-primary">escríbenos.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-foreground/65 max-w-2xl leading-relaxed">
            Estamos en La Paz, San Juan del Río. Llámanos para urgencias o usa el formulario
            para consultas generales — te respondemos el mismo día.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info + Map */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoTile
                icon={<MapPin className="h-5 w-5" />}
                label="Dirección"
                value={
                  <>
                    {clinic.address.line1}
                    <br />
                    {clinic.address.line2}
                    <br />
                    {clinic.address.city}, {clinic.address.state}
                  </>
                }
              />
              <InfoTile
                icon={<Phone className="h-5 w-5" />}
                label="Teléfono"
                value={
                  <a href={`tel:${clinic.phone.raw}`} className="hover:text-primary transition-colors">
                    {clinic.phone.display}
                  </a>
                }
              />
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-medium text-foreground">Horario</h3>
              </div>
              <ul className="grid gap-1.5 text-sm">
                {clinic.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between gap-4 py-1 border-b border-border/50 last:border-0"
                  >
                    <span className="text-foreground/75">{h.day}</span>
                    <span className="font-medium text-foreground tabular-nums">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                src={MAP_EMBED}
                title="Ubicación Veterinaria El Toro Macho"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-background border border-border p-7 md:p-9 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-medium text-foreground">
                  ¡Mensaje preparado!
                </h3>
                <p className="mt-3 text-sm text-foreground/65 max-w-sm">
                  Se abrió tu cliente de correo. Si no se abrió, llámanos directamente al{" "}
                  <a
                    href={`tel:${clinic.phone.raw}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {clinic.phone.display}
                  </a>
                  .
                </p>
                <Button
                  variant="ghost"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar otro
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Field
                  label="Tu nombre"
                  htmlFor="name"
                  error={errors.name?.message}
                >
                  <Input
                    id="name"
                    placeholder="María Hernández"
                    autoComplete="name"
                    {...register("name")}
                  />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Correo" htmlFor="email" error={errors.email?.message}>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@correo.mx"
                      autoComplete="email"
                      {...register("email")}
                    />
                  </Field>
                  <Field label="Teléfono" htmlFor="phone" error={errors.phone?.message}>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="427 000 0000"
                      autoComplete="tel"
                      {...register("phone")}
                    />
                  </Field>
                </div>

                <Field label="Nombre y especie de tu mascota" htmlFor="pet">
                  <Input
                    id="pet"
                    placeholder="Ej. Bodoque, perro labrador"
                    {...register("pet")}
                  />
                </Field>

                <Field label="¿En qué te ayudamos?" htmlFor="message" error={errors.message?.message}>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos brevemente el motivo de tu consulta…"
                    {...register("message")}
                  />
                </Field>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-muted-foreground">
                    Para urgencias, llama directamente.
                  </p>
                  <Button type="submit" disabled={isSubmitting} className="gap-2">
                    <Send className="h-4 w-4" />
                    Enviar mensaje
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoTile({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-5">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary mb-3">
        {icon}
      </div>
      <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-1">
        {label}
      </div>
      <div className="text-sm leading-relaxed text-foreground/85">{value}</div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
