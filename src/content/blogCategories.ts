import type { Lang } from "@/i18n/ui";

// Única fuente de verdad para las categorías del blog: el enum de Zod en
// content.config.ts usa las mismas claves que este objeto usa para las
// etiquetas legibles — si agregas una categoría, agrégala en ambos lados.
export const BLOG_CATEGORY_LABELS: Record<"parque" | "gastronomia", Record<Lang, string>> = {
  parque: { es: "Parque e instalaciones", en: "Park & facilities" },
  gastronomia: { es: "Gastronomía", en: "Food & dining" },
};
