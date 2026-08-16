export const clinic = {
  name: 'Veterinaria "El Toro Macho"',
  shortName: "El Toro Macho",
  tagline: "Cuidamos a tu compañero de vida.",
  rating: {
    value: 4.5,
    count: 392,
    source: "Google",
  },
  address: {
    line1: "Av. Gandhi 8, Local 2, 4ta Sección",
    line2: "Col. La Paz, 76804",
    city: "San Juan del Río",
    state: "Querétaro",
    plusCode: "92RM+WW San Juan del Río, Querétaro",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Veterinaria+El+Toro+Macho+San+Juan+del+Rio",
  },
  phone: {
    display: "427 102 2634",
    raw: "+524271022634",
  },
  email: "contacto@veterinariatoromacho.mx",
  hours: [
    { day: "Lunes", time: "9:30 — 19:00" },
    { day: "Martes", time: "9:30 — 19:00" },
    { day: "Miércoles", time: "9:30 — 19:00" },
    { day: "Jueves", time: "9:30 — 19:00" },
    { day: "Viernes", time: "9:30 — 19:00" },
    { day: "Sábado", time: "9:30 — 14:00" },
    { day: "Domingo", time: "Cerrado" },
  ],
  founded: 2012,
} as const;

export type Clinic = typeof clinic;
