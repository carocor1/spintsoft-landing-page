import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;
  const webpageId = `${siteConfig.url}/#webpage`;
  const logoUrl = `${siteConfig.url}/resources/logo-spintsoft.png`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        image: logoUrl,
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: `+${siteConfig.whatsappNumber}`,
        sameAs: ["https://instagram.com/spintsoft"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${siteConfig.whatsappNumber}`,
          email: siteConfig.email,
          contactType: "customer service",
          availableLanguage: ["Spanish"],
          url: siteConfig.whatsappUrl,
        },
        knowsAbout: [
          "Desarrollo de software a medida",
          "Sistemas de información",
          "Automatización de procesos",
          "Desarrollo web",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": organizationId },
        inLanguage: "es-AR",
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: siteConfig.url,
        name: `${siteConfig.name} — ${siteConfig.tagline}`,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        description: siteConfig.description,
        inLanguage: "es-AR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
