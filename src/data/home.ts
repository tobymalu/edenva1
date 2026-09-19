import type { Lang } from "@/i18n/ui";

/**
 * Copy de la homepage. Cada idioma está escrito por separado (no es
 * traducción literal). Solo hechos ya presentes en el sitio: nada de
 * cifras, certificaciones ni reseñas inventadas.
 */
export const HOME: Record<
  Lang,
  {
    hero: { title: string; sub: string; explore: string; chips: { icon: string; label: string }[] };
    exp: { eyebrow: string; title: string; lead: string; tiles: { key: string; title: string; text: string }[] };
    zip: { eyebrow: string; title: string; lead: string; facts: { big: string; small: string }[]; cta: string; from: string; details: string };
    park: { eyebrow: string; title: string; lead: string; bullets: string[]; cta: string; from: string };
    story: { words: string[]; alts: string[] };
    safety: { eyebrow: string; title: string; lead: string; items: { title: string; text: string }[] };
    family: { eyebrow: string; title: string; lead: string; zipTitle: string; zipAge: string; zipText: string; parkTitle: string; parkText: string; kid: string; note: string; ask: string };
    stories: { eyebrow: string; title: string };
    loc: { eyebrow: string; title: string; lead: string; path: string[]; info: { label: string; value: string }[]; maps: string; whatsapp: string };
    final: { title: string; text: string };
    schemaDescription: string;
  }
> = {
  es: {
    hero: {
      title: "Tu aventura empieza en la selva.",
      sub: "Descubre Edenva, un parque de aventura natural escondido en la Sierra Madre, cerca de Puerto Vallarta.",
      explore: "Explora Edenva",
      chips: [
        { icon: "📍", label: "Cerca de Puerto Vallarta" },
        { icon: "🌿", label: "Naturaleza" },
        { icon: "🪢", label: "Tirolesa" },
        { icon: "💦", label: "Río" },
      ],
    },
    exp: {
      eyebrow: "Más que una tirolesa",
      title: "Vuela, camina, chapotea, descansa.",
      lead: "Edenva es un día completo en la sierra: adrenalina arriba, agua fresca abajo y mucha selva alrededor.",
      tiles: [
        { key: "zip", title: "Tirolesa", text: "Más de 10 líneas entre montañas." },
        { key: "trails", title: "Senderos", text: "Puentes y caminos entre la selva." },
        { key: "river", title: "Río", text: "Zonas seguras para nadar." },
        { key: "pools", title: "Pozas naturales", text: "Agua clara entre rocas." },
        { key: "relax", title: "Columpios y hamacas", text: "Para bajarle el ritmo al día." },
        { key: "food", title: "Restaurante", text: "Comida en medio de la naturaleza." },
      ],
    },
    zip: {
      eyebrow: "Aventura",
      title: "Vuela por la selva.",
      lead: "Cruza cañones y copas de árboles con la Sierra Madre de fondo. Un guía te acompaña en cada línea.",
      facts: [
        { big: "10+", small: "líneas de tirolesa" },
        { big: "6+", small: "años de edad mínima" },
        { big: "Guías", small: "capacitados en primeros auxilios" },
        { big: "Equipo", small: "de seguridad certificado" },
      ],
      cta: "Reservar tirolesa",
      from: "Desde",
      details: "Ver todos los detalles",
    },
    park: {
      eyebrow: "Naturaleza",
      title: "Baja el ritmo. Mira alrededor.",
      lead: "No todo es adrenalina. Camina entre la selva, métete al río y déjate caer en una hamaca. También puedes venir solo por esto.",
      bullets: ["Río y zonas para nadar", "Senderos y puentes", "Columpios y hamacas", "Restaurante en el parque"],
      cta: "Descubre el parque",
      from: "Desde",
    },
    story: {
      words: ["Selva", "Aventura", "Río", "Descubrimiento", "Recuerdo"],
      alts: [
        "Entrada de Edenva rodeada de selva",
        "Visitantes en la tirolesa sobre la selva",
        "Río y zona de descanso en Edenva",
        "Grupo cruzando el puente del parque",
        "Poza de agua clara en Edenva",
      ],
    },
    safety: {
      eyebrow: "Seguridad",
      title: "Aventura con confianza.",
      lead: "Emoción de verdad, con las cosas bien hechas.",
      items: [
        { title: "Guías capacitados", text: "Te acompañan en el recorrido y saben de primeros auxilios." },
        { title: "Equipo certificado", text: "Equipo de seguridad certificado en cada línea." },
        { title: "Explicación antes de volar", text: "Te explicamos cómo funciona todo antes de tu primera línea." },
        { title: "Límites claros", text: "Tirolesa desde 6 años y hasta 120 kg, para que todos vuelen seguros." },
      ],
    },
    family: {
      eyebrow: "En familia",
      title: "Aventura para toda la familia.",
      lead: "Los niños tienen su propia tarifa en las dos experiencias.",
      zipTitle: "Tirolesa",
      zipAge: "Desde 6 años",
      zipText: "Edad mínima para volar: 6 años. Peso máximo: 120 kg.",
      parkTitle: "Pase Parque",
      parkText: "Río, senderos, columpios y hamacas para bajar el ritmo en familia.",
      kid: "Niño",
      note: "¿Dudas con las edades de tus peques?",
      ask: "Escríbenos por WhatsApp",
    },
    stories: { eyebrow: "Reseñas", title: "Historias de la selva" },
    loc: {
      eyebrow: "Cómo llegar",
      title: "Encuentra tu camino a Edenva.",
      lead: "En la sierra, junto al río de Mismaloya.",
      path: ["Puerto Vallarta", "Mismaloya", "Edenva", "Sierra Madre"],
      info: [
        { label: "Ubicación", value: "Mismaloya, Puerto Vallarta, Jalisco" },
        { label: "Con transporte", value: "Los tours incluyen traslado desde Vallarta. Salida desde las 9:00 AM." },
        { label: "Por tu cuenta", value: "Estacionamiento gratuito en el parque." },
        { label: "Duración del tour", value: "Aprox. 7 horas, con traslado incluido." },
        { label: "Horario del parque", value: "Martes a domingo, 9:00 a 17:00." },
      ],
      maps: "Abrir en Google Maps",
      whatsapp: "Pregúntanos por WhatsApp",
    },
    final: {
      title: "Ven a jugar afuera.",
      text: "Elige tu día, tu aventura y sal a la selva. Cancelación gratuita hasta 24 horas antes.",
    },
    schemaDescription:
      "Parque de aventura y ecoturismo en la Sierra Madre, en Mismaloya, Puerto Vallarta: tirolesa, río, senderos y restaurante.",
  },
  en: {
    hero: {
      title: "Your adventure starts in the jungle.",
      sub: "Discover Edenva, a natural adventure park hidden in the Sierra Madre near Puerto Vallarta.",
      explore: "Explore Edenva",
      chips: [
        { icon: "📍", label: "Near Puerto Vallarta" },
        { icon: "🌿", label: "Nature" },
        { icon: "🪢", label: "Zipline" },
        { icon: "💦", label: "River" },
      ],
    },
    exp: {
      eyebrow: "More than a zipline",
      title: "Fly. Hike. Splash. Unwind.",
      lead: "Edenva is a full day in the mountains: adrenaline above, cool river water below, and jungle all around.",
      tiles: [
        { key: "zip", title: "Zipline", text: "10+ lines across the mountains." },
        { key: "trails", title: "Jungle trails", text: "Bridges and paths through the trees." },
        { key: "river", title: "River", text: "Safe swimming zones." },
        { key: "pools", title: "Natural pools", text: "Clear water between the rocks." },
        { key: "relax", title: "Swings & hammocks", text: "Slow the day right down." },
        { key: "food", title: "Restaurant", text: "Good food in the middle of nature." },
      ],
    },
    zip: {
      eyebrow: "Adventure",
      title: "Fly through the jungle.",
      lead: "Soar over canyons and treetops with the Sierra Madre all around you. A guide is with you on every line.",
      facts: [
        { big: "10+", small: "zipline lines" },
        { big: "Age 6+", small: "minimum to fly" },
        { big: "Guides", small: "trained in first aid" },
        { big: "Gear", small: "certified safety equipment" },
      ],
      cta: "Book zipline",
      from: "From",
      details: "See all the details",
    },
    park: {
      eyebrow: "Nature",
      title: "Slow down. Look around.",
      lead: "Not everything has to be adrenaline. Wander through the jungle, wade into the river, and sink into a hammock. You can come just for this.",
      bullets: ["River and swimming areas", "Trails and bridges", "Swings and hammocks", "On-site restaurant"],
      cta: "Discover the park",
      from: "From",
    },
    story: {
      words: ["Jungle", "Adventure", "River", "Discovery", "Memory"],
      alts: [
        "Edenva entrance surrounded by jungle",
        "Guests ziplining over the jungle",
        "River and relaxing area at Edenva",
        "Group crossing the park's wooden bridge",
        "Clear natural pool at Edenva",
      ],
    },
    safety: {
      eyebrow: "Safety",
      title: "Adventure with confidence.",
      lead: "Real thrills, done right.",
      items: [
        { title: "Trained guides", text: "They stay with you along the way and know first aid." },
        { title: "Certified equipment", text: "Certified safety equipment on every line." },
        { title: "Briefing before you fly", text: "We walk you through everything before your first line." },
        { title: "Clear limits", text: "Ziplining from age 6 up to 120 kg (265 lbs), so everyone flies safely." },
      ],
    },
    family: {
      eyebrow: "Family",
      title: "Adventure for the whole family.",
      lead: "Kids get their own price on both experiences.",
      zipTitle: "Zipline",
      zipAge: "Ages 6 and up",
      zipText: "Minimum age to fly is 6. Maximum weight is 120 kg (265 lbs).",
      parkTitle: "Park Pass",
      parkText: "River, trails, swings and hammocks to slow down together.",
      kid: "Kid",
      note: "Not sure about your kids' ages?",
      ask: "Message us on WhatsApp",
    },
    stories: { eyebrow: "Reviews", title: "Stories from the jungle" },
    loc: {
      eyebrow: "Getting here",
      title: "Find your way to Edenva.",
      lead: "Up in the mountains, beside the Mismaloya river.",
      path: ["Puerto Vallarta", "Mismaloya", "Edenva", "Sierra Madre"],
      info: [
        { label: "Location", value: "Mismaloya, Puerto Vallarta, Jalisco" },
        { label: "With transportation", value: "Tours include a ride from Vallarta. Pickups start at 9:00 AM." },
        { label: "Driving yourself", value: "Free parking at the park." },
        { label: "Tour length", value: "About 7 hours, transportation included." },
        { label: "Park hours", value: "Tuesday to Sunday, 9:00 AM to 5:00 PM." },
      ],
      maps: "Open in Google Maps",
      whatsapp: "Ask us on WhatsApp",
    },
    final: {
      title: "Come play outside.",
      text: "Pick your day, pick your adventure, and head into the jungle. Free cancellation up to 24 hours before.",
    },
    schemaDescription:
      "Adventure and ecotourism park in the Sierra Madre near Puerto Vallarta, in Mismaloya: zipline, river, trails and restaurant.",
  },
};
