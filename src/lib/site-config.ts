/**
 * Single source of truth for Spintsoft URLs and site metadata.
 */
export const siteConfig = {
  name: "Spintsoft",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://spintsoft.com.ar"
  ).replace(/\/$/, ""),
  email: "spintsoft@gmail.com",
  tagline: "Software a Medida & Sistemas de Información",
  description:
    "Desarrollamos soluciones de software a medida y sistemas de información de vanguardia. Automatizamos procesos, eliminamos tareas repetitivas y escalamos negocios.",
} as const;
