/**
 * Single source of truth for Spintsoft URLs and site metadata.
 */
export const siteConfig = {
  name: "Spintsoft",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://spintsoft.com.ar"
  ).replace(/\/$/, ""),
  email: "spintsoft@gmail.com",
  whatsappNumber: "5493385442387",
  whatsappMessage:
    "Hola, vi su página y quisiera hacer una consulta sobre un proyecto.",
  whatsappUrl: "https://wa.me/5493385442387?text=Hola%2C%20vi%20su%20p%C3%A1gina%20y%20quisiera%20hacer%20una%20consulta%20sobre%20un%20proyecto.",
  tagline: "Software a Medida & Sistemas de Información",
  description:
    "Desarrollamos soluciones de software a medida y sistemas de información de vanguardia. Automatizamos procesos, eliminamos tareas repetitivas y escalamos negocios.",
} as const;
