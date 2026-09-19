import { ui, defaultLang, routes, type Lang, type UiKey } from "./ui";

export type { Lang, UiKey };

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first === "en") return "en";
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function useRoutes(lang: Lang) {
  return routes[lang];
}

/** Devuelve la ruta equivalente en el otro idioma para el selector ES/EN. */
export function getAlternateLangPath(lang: Lang, pathKey: keyof (typeof routes)["es"]): {
  lang: Lang;
  path: string;
} {
  const altLang: Lang = lang === "es" ? "en" : "es";
  return { lang: altLang, path: routes[altLang][pathKey] };
}
