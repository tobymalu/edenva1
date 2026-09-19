import type { Lang } from "@/i18n/ui";

/**
 * El nombre de carpeta de cada entrada de colección (donde viven el
 * es.md/en.md y sus fotos co-ubicadas) no siempre coincide con el slug de
 * URL en cada idioma — el sitio viejo ya tenía slugs distintos por idioma
 * (/tours/Tirolesa/ vs /en/tours/canopy/) y los mantenemos para no romper
 * nada de lo que ya está indexado en cada idioma.
 */
export const TOUR_SLUGS: Record<string, Record<Lang, string>> = {
  tirolesa: { es: "tirolesa", en: "canopy" },
  "pase-parque": { es: "pase-parque", en: "edenva-pass" },
};

export const BLOG_SLUGS: Record<string, Record<Lang, string>> = {
  restaurante: { es: "restaurante", en: "restaurant" },
  instalaciones: { es: "instalaciones", en: "facilities" },
};

function urlSlugToFolder(map: Record<string, Record<Lang, string>>, lang: Lang, urlSlug: string) {
  const entry = Object.entries(map).find(([, byLang]) => byLang[lang] === urlSlug);
  return entry?.[0];
}

export const tourUrlSlugToFolder = (lang: Lang, urlSlug: string) =>
  urlSlugToFolder(TOUR_SLUGS, lang, urlSlug);

export const blogUrlSlugToFolder = (lang: Lang, urlSlug: string) =>
  urlSlugToFolder(BLOG_SLUGS, lang, urlSlug);
