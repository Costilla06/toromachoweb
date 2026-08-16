export type Testimonial = {
  name: string;
  initials: string;
  when: string;
  rating: number;
  quote: string;
  highlight?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Joseth Ramírez",
    initials: "JR",
    when: "hace 4 años",
    rating: 5,
    quote:
      "Un pequeño proceso de cómo se sanó en un mes del parvovirus el Bodoque con los cuidados y atención del Vet Toromacho. Muchas gracias. ☺️",
    highlight: true,
  },
  {
    name: "Benadi",
    initials: "B",
    when: "hace 9 meses",
    rating: 5,
    quote:
      "Excelente atención del médico, gracias por sacar adelante a mi perrita. Volvimos a casa con la tranquilidad de saberla en buenas manos.",
    highlight: true,
  },
  {
    name: "Carolina M.",
    initials: "CM",
    when: "hace 6 meses",
    rating: 5,
    quote:
      "Profesionales, buen trato y precios razonables. Muchas felicidades por su entrega; mi gato salió como nuevo de la consulta.",
  },
  {
    name: "Luis A. Hernández",
    initials: "LH",
    when: "hace 1 año",
    rating: 4,
    quote:
      "Excelente servicio en consulta regular y para urgencias. Las instalaciones siempre están limpias y bien organizadas.",
  },
  {
    name: "Marisol O.",
    initials: "MO",
    when: "hace 2 meses",
    rating: 5,
    quote:
      "El Dr. nos explicó todo con calma y empatía. Mi cachorra ya está vacunada y feliz. Recomendado para toda San Juan.",
  },
  {
    name: "Eduardo R.",
    initials: "ER",
    when: "hace 3 años",
    rating: 5,
    quote:
      "Atendieron a mi perro de emergencia un domingo. Profesionalismo y humanidad de principio a fin. Mil gracias al equipo.",
  },
];
