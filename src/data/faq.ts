import type { Lang } from "@/i18n/ui";

export interface FaqItem {
  question: string;
  answer: string;
}
export interface FaqCategory {
  title: string;
  items: FaqItem[];
}

export const FAQ: Record<Lang, FaqCategory[]> = {
  es: [
    {
      title: "General",
      items: [
        {
          question: "¿Qué es Edenva?",
          answer:
            "Edenva es un parque ecológico en las montañas de Puerto Vallarta con actividades al aire libre como tirolesas, senderismo y relajación junto al río.",
        },
        {
          question: "¿Dónde se encuentra Edenva?",
          answer:
            'Estamos en Mismaloya, Puerto Vallarta, Jalisco. Encuéntranos fácilmente en Google Maps como "Edenva Parque Ecoturístico".',
        },
        {
          question: "¿Cuáles son los horarios de operación?",
          answer: "Martes a domingo, de 9:00 a.m. a 5:00 p.m.",
        },
      ],
    },
    {
      title: "Reservaciones y Pagos",
      items: [
        {
          question: "¿Es necesario reservar con anticipación?",
          answer: "Sí, especialmente en temporada alta. Reserva en nuestra web o por WhatsApp.",
        },
        {
          question: "¿Qué formas de pago aceptan?",
          answer: "Tarjetas de crédito, débito, transferencias y efectivo en nuestras instalaciones.",
        },
        {
          question: "¿Puedo cancelar o cambiar mi reservación?",
          answer: "Sí, sin costo si lo haces al menos 24 horas antes. Consulta nuestras políticas.",
        },
      ],
    },
    {
      title: "Tours y Actividades",
      items: [
        { question: "¿Cuáles son los tours disponibles?", answer: "Tour Tirolesa y Pase Parque Edenva." },
        {
          question: "¿Qué incluye cada tour?",
          answer: "Acceso a las instalaciones, equipo de seguridad y guías capacitados.",
        },
        {
          question: "¿Hay restricciones de edad o salud?",
          answer: "Sí, para tirolesas: mínimo 6 años y máximo 120 kg.",
        },
      ],
    },
    {
      title: "En el Parque",
      items: [
        { question: "¿Puedo llevar comida y bebidas?", answer: "No, pero contamos con restaurante en el parque." },
        { question: "¿Hay áreas para nadar?", answer: "Sí, en zonas seguras del río." },
        { question: "¿Cuentan con estacionamiento?", answer: "Sí, gratuito para nuestros visitantes." },
      ],
    },
    {
      title: "Seguridad y Medio Ambiente",
      items: [
        {
          question: "¿Qué medidas de seguridad manejan?",
          answer: "Equipos certificados y guías capacitados en primeros auxilios.",
        },
        { question: "¿Edenva es pet-friendly?", answer: "No se permite el ingreso de mascotas." },
        {
          question: "¿Qué hace Edenva por el medio ambiente?",
          answer: "Promovemos la conservación de flora y fauna local.",
        },
      ],
    },
  ],
  en: [
    {
      title: "General",
      items: [
        {
          question: "What is Edenva?",
          answer:
            "Edenva is an ecological park in the mountains of Puerto Vallarta, offering outdoor activities like zip-lining, hiking, and relaxing by the river.",
        },
        {
          question: "Where is Edenva located?",
          answer: 'We are in Mismaloya, Puerto Vallarta, Jalisco. Easily find us on Google Maps as "Edenva Ecotourism Park."',
        },
        { question: "What are the operating hours?", answer: "Tuesday to Sunday, from 9:00 a.m. to 5:00 p.m." },
      ],
    },
    {
      title: "Reservations and Payments",
      items: [
        { question: "Do I need to book in advance?", answer: "Yes, especially during peak season. Book on our website or via WhatsApp." },
        { question: "What payment methods do you accept?", answer: "Credit cards, debit cards, bank transfers, and cash at our facilities." },
        { question: "Can I cancel or reschedule my reservation?", answer: "Yes, free of charge if done at least 24 hours in advance." },
      ],
    },
    {
      title: "Tours and Activities",
      items: [
        { question: "What tours are available?", answer: "Zip-Lining Tour and Edenva Park Pass." },
        { question: "What does each tour include?", answer: "Access to the facilities, safety equipment, and trained guides." },
        {
          question: "Are there age or health restrictions?",
          answer: "Yes, for zip-lining: minimum age is 6 years, and the maximum weight is 120 kg (265 lbs).",
        },
      ],
    },
    {
      title: "At the Park",
      items: [
        { question: "Can I bring food and drinks?", answer: "No, but we have a restaurant on-site." },
        { question: "Are there swimming areas?", answer: "Yes, in safe zones along the river." },
        { question: "Is there parking available?", answer: "Yes, free for our visitors." },
      ],
    },
    {
      title: "Safety and Environment",
      items: [
        { question: "What safety measures do you have?", answer: "Certified equipment and guides trained in first aid." },
        { question: "Is Edenva pet-friendly?", answer: "No, pets are not allowed." },
        { question: "What does Edenva do for the environment?", answer: "We promote the conservation of local flora and fauna." },
      ],
    },
  ],
};
