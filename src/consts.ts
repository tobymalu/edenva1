// Constantes del negocio. Los valores de analítica traen un fallback
// hardcodeado a propósito: un build limpio en Cloudflare Pages no ve el
// .env local si la variable no se configuró aparte en su dashboard, y sin
// el fallback la analítica desaparecería en silencio en producción.
export const SITE_URL = "https://edenva.mx";
export const SITE_NAME = "Edenva";

export const GTM_ID = import.meta.env.PUBLIC_GTM_ID || "GTM-NFV2J262";
export const META_PIXEL_ID =
  import.meta.env.PUBLIC_META_PIXEL_ID || "1142171177145021";

export const FAREHARBOR_SHORTNAME = "edenva";

export const CONTACT = {
  email: "info@edenva.mx",
  phone: "+52 322 147 3221",
  phoneHref: "tel:+5213221473221",
  whatsappHref: "https://wa.me/523221473221",
};

export const SOCIAL = {
  facebook: "https://www.facebook.com/edenvamx/",
  instagram: "https://www.instagram.com/edenva.mx/",
  youtube: "https://www.youtube.com/@eledendevallarta3853",
  tripadvisor:
    "https://www.tripadvisor.com.mx/Attraction_Review-g1015495-d153492-Reviews-Edenva_Parque_Ecoturistico-Mismaloya_Puerto_Vallarta.html",
  viator:
    "https://www.viator.com/tours/Mismaloya/Pass-to-Edenva-Parque-Ecoturistico-in-Puerto-Vallarta/d51522-311376P1",
  marietas: "https://www.islamarietas.com",
};

export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.6062398049235!2d-105.26070109999999!3d20.522361900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84215b7eab32f729%3A0xb597f57c02be738b!2sEdenva%20Canopy%20y%20Parque%20Ecoturistico!5e0!3m2!1ses-419!2smx!4v1734743670392!5m2!1ses-419!2smx";
