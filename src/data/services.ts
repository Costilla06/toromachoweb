import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Syringe,
  HeartPulse,
  Scissors,
  Bone,
  ScanLine,
  BedDouble,
  ShieldPlus,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
};

export const services: Service[] = [
  {
    icon: Stethoscope,
    title: "Consulta general",
    description:
      "Revisión completa, diagnóstico y plan de cuidado para mantener a tu mascota sana en cada etapa.",
  },
  {
    icon: HeartPulse,
    title: "Urgencias",
    description:
      "Atención prioritaria para emergencias: accidentes, intoxicaciones y cuadros agudos.",
    badge: "Prioritario",
  },
  {
    icon: Syringe,
    title: "Vacunación",
    description:
      "Esquemas para cachorros y adultos, refuerzos antirrábicos y certificados oficiales.",
  },
  {
    icon: Scissors,
    title: "Cirugía",
    description:
      "Procedimientos quirúrgicos con anestesia segura, monitoreo y recuperación supervisada.",
  },
  {
    icon: Bone,
    title: "Limpieza dental",
    description:
      "Profilaxis, extracción y cuidado bucal con equipo especializado y ultrasonido.",
  },
  {
    icon: ScanLine,
    title: "Radiografías",
    description:
      "Diagnóstico por imagen para fracturas, cuerpos extraños y problemas internos.",
  },
  {
    icon: BedDouble,
    title: "Hospitalización",
    description:
      "Estancia con cuidado las 24 horas, terapia intravenosa y observación clínica.",
  },
  {
    icon: ShieldPlus,
    title: "Parvovirus & gastro",
    description:
      "Protocolo intensivo para parvovirus y enfermedades gastrointestinales en cachorros y adultos.",
    badge: "Especialidad",
  },
];
