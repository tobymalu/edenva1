import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Un nivel de precio: soporta multi-moneda y "boletos alternativos"
// (ej. tarifa de temporada, addon de fotos) sin duplicar lógica.
const priceTierSchema = z.object({
  etiqueta: z.string(),
  precio: z.number(),
  moneda: z.enum(["MXN", "USD"]).default("MXN"),
  nota: z.string().optional(),
  tipo: z.enum(["estandar", "addon"]).default("estandar"),
});

const seoSchema = ({ image }: { image: any }) =>
  z.object({
    meta_title: z.string(),
    meta_description: z.string(),
    canonical: z.string().url().optional(),
    // Si no se da, se genera automático desde la portada del propio contenido.
    og_image: image().optional(),
    // true mientras la foto de portada sea placeholder — se voltea a false
    // en cuanto llegue la foto real. Nunca debería quedar en true en prod.
    noindex: z.boolean().default(false),
  });

const tours = defineCollection({
  loader: glob({ pattern: "*/{es,en}.{md,mdx}", base: "./src/content/tours" }),
  schema: ({ image }) =>
    z.object({
      lang: z.enum(["es", "en"]),
      // nombre corto (tarjetas, breadcrumbs) — a propósito distinto del h1.
      nombre: z.string(),
      // encabezado persuasivo de la página, nunca igual a "nombre".
      h1: z.string(),
      descripcion: z.string(),
      cover: image(),
      galeria: z.array(image()).default([]),
      precios: z.array(priceTierSchema),
      duracionHoras: z.number(),
      tipoTour: z.string(),
      incluye: z.array(z.string()),
      noIncluye: z.array(z.string()),
      horario: z.object({
        salida: z.string(),
        regreso: z.string(),
        dias: z.string(),
      }),
      importante: z.string(),
      fareharborItemId: z.string(),
      fareharborFlow: z.string().optional(),
      orden: z.number().default(0),
      seo: seoSchema({ image }),
    }),
});

// Categorías del blog: tupla compartida — alimenta el enum de Zod Y las
// etiquetas legibles, desde un solo lugar (ver src/content/blogCategories.ts).
const BLOG_CATEGORIES = ["parque", "gastronomia"] as const;

const blog = defineCollection({
  loader: glob({ pattern: "*/{es,en}.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      lang: z.enum(["es", "en"]),
      categoria: z.enum(BLOG_CATEGORIES),
      titulo: z.string(),
      h1: z.string(),
      resumen: z.string(),
      cover: image(),
      galeria: z.array(image()).default([]),
      fecha: z.coerce.date(),
      // slug del tour relacionado, para el componente de venta suave dentro del cuerpo.
      tourRelacionado: z.string().optional(),
      seo: seoSchema({ image }),
    }),
});

export const collections = { tours, blog };
export { BLOG_CATEGORIES };
