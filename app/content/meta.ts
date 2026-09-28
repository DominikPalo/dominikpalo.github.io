import type { Language } from "../types";

export const SITE_URL = "https://palo.sk";

export const languagePaths: Record<Language, string> = {
  sk: "/",
  en: "/en/",
};

export const pageUrl = (language: Language) => `${SITE_URL}${languagePaths[language]}`;

export const languageFromPath = (pathname: string): Language =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "sk";

type PageMeta = {
  locale: string;
  title: string;
  description: string;
  socialTitle: string;
  socialDescription: string;
  twitterDescription: string;
  imageAlt: string;
  profileName: string;
  profileDescription: string;
  personDescription: string;
  homeLocation: string;
};

export const meta: Record<Language, PageMeta> = {
  sk: {
    locale: "sk_SK",
    title: "Dominik Paľo — softvérový inžinier a maker",
    description:
      "Dominik Paľo (Dominik Palo) je senior softvérový inžinier v Slido/Cisco, maker a lektor z Bratislavy so záujmom o hardvér, IoT a 3D tlač.",
    socialTitle: "Dominik Paľo — softvérový inžinier × maker",
    socialDescription:
      "Senior softvérový inžinier v Slido/Cisco, maker a lektor z Bratislavy. Softvér, elektronika, IoT, open hardware, 3D modelovanie a tlač.",
    twitterDescription:
      "Senior softvérový inžinier v Slido/Cisco, maker a lektor z Bratislavy. Softvér, elektronika, IoT a 3D tlač.",
    imageAlt: "Dominik Paľo — softvérový inžinier a maker",
    profileName: "Dominik Paľo — softvérový inžinier a maker",
    profileDescription:
      "Osobný profil Dominika Paľa, senior softvérového inžiniera, makera a lektora z Bratislavy.",
    personDescription:
      "Senior softvérový inžinier v Slido/Cisco, maker, lektor a dobrovoľník v MakerSpace Bratislava.",
    homeLocation: "Bratislava, Slovensko",
  },
  en: {
    locale: "en_US",
    title: "Dominik Paľo — software engineer and maker",
    description:
      "Dominik Paľo (Dominik Palo) is a senior software engineer at Slido/Cisco, a maker, and a lecturer from Bratislava with a passion for hardware, IoT, and 3D printing.",
    socialTitle: "Dominik Paľo — software engineer × maker",
    socialDescription:
      "Senior software engineer at Slido/Cisco, maker, and lecturer from Bratislava. Software, electronics, IoT, open hardware, 3D modelling, and printing.",
    twitterDescription:
      "Senior software engineer at Slido/Cisco, maker, and lecturer from Bratislava. Software, electronics, IoT, and 3D printing.",
    imageAlt: "Dominik Paľo — software engineer and maker",
    profileName: "Dominik Paľo — software engineer and maker",
    profileDescription:
      "Personal profile of Dominik Paľo, a senior software engineer, maker, and lecturer from Bratislava.",
    personDescription:
      "Senior software engineer at Slido/Cisco, maker, lecturer, and volunteer at MakerSpace Bratislava.",
    homeLocation: "Bratislava, Slovakia",
  },
};

const escapeAttr = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const structuredData = (language: Language, dateModified: string) => {
  const m = meta[language];
  const url = pageUrl(language);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Dominik Paľo",
        alternateName: "Dominik Palo",
        inLanguage: ["sk", "en"],
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#profile`,
        url,
        name: m.profileName,
        description: m.profileDescription,
        dateModified,
        inLanguage: language,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Dominik Paľo",
        alternateName: "Dominik Palo",
        identifier: "dpalo",
        givenName: "Dominik",
        familyName: "Paľo",
        url: `${SITE_URL}/`,
        mainEntityOfPage: { "@id": `${url}#profile` },
        image: {
          "@type": "ImageObject",
          url: `${SITE_URL}/dominik-palo-nerdy.webp`,
          width: 800,
          height: 800,
        },
        description: m.personDescription,
        jobTitle: "Senior Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Slido",
          url: "https://www.slido.com/",
          parentOrganization: {
            "@type": "Organization",
            name: "Cisco",
            url: "https://www.cisco.com/",
          },
        },
        affiliation: {
          "@type": "Organization",
          name: "MakerSpace Bratislava",
          url: "https://www.msba.sk/",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Slovenská technická univerzita v Bratislave",
          url: "https://www.stuba.sk/",
        },
        homeLocation: { "@type": "Place", name: m.homeLocation },
        knowsAbout: [
          "Native application development",
          "Swift",
          "C#",
          "TypeScript",
          "React",
          "IoT",
          "Open hardware",
          "PCB design",
          "3D modelling",
          "Autodesk Fusion",
          "3D printing",
        ],
        sameAs: [
          "https://github.com/DominikPalo",
          "https://www.linkedin.com/in/dpalo",
          "https://stackoverflow.com/users/1143397/dominik-palo",
          "https://www.instagram.com/dominik.palo",
        ],
      },
    ],
  };
};

/** Language-specific <head> tags, injected at the `<!--app-head-->` placeholder. */
export const renderHead = (language: Language, dateModified: string) => {
  const m = meta[language];
  const other: Language = language === "sk" ? "en" : "sk";
  const url = pageUrl(language);
  const a = escapeAttr;
  const json = JSON.stringify(structuredData(language, dateModified), null, 2).replace(/</g, "\\u003c");

  return `<title>${a(m.title)}</title>
    <meta name="description" content="${a(m.description)}" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="sk" href="${pageUrl("sk")}" />
    <link rel="alternate" hreflang="en" href="${pageUrl("en")}" />
    <link rel="alternate" hreflang="x-default" href="${pageUrl("sk")}" />

    <meta property="og:type" content="profile" />
    <meta property="og:locale" content="${m.locale}" />
    <meta property="og:locale:alternate" content="${meta[other].locale}" />
    <meta property="og:site_name" content="Dominik Paľo" />
    <meta property="og:title" content="${a(m.socialTitle)}" />
    <meta property="og:description" content="${a(m.socialDescription)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${SITE_URL}/og.jpg" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="800" />
    <meta property="og:image:alt" content="${a(m.imageAlt)}" />
    <meta property="profile:first_name" content="Dominik" />
    <meta property="profile:last_name" content="Paľo" />
    <meta property="profile:username" content="dpalo" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${a(m.socialTitle)}" />
    <meta name="twitter:description" content="${a(m.twitterDescription)}" />
    <meta name="twitter:image" content="${SITE_URL}/og.jpg" />
    <meta name="twitter:image:alt" content="${a(m.imageAlt)}" />

    <script type="application/ld+json">
${json}
    </script>`;
};

const LANGUAGES = Object.keys(languagePaths) as Language[];

/** sitemap.xml listing every language version with its hreflang alternates. */
export const renderSitemap = (lastModified: string) => {
  const alternates = [
    ...LANGUAGES.map(
      (code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${pageUrl(code)}" />`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl("sk")}" />`,
  ].join("\n");

  const urls = LANGUAGES.map(
    (code) => `  <url>
    <loc>${pageUrl(code)}</loc>
    <lastmod>${lastModified}</lastmod>
${alternates}
  </url>`,
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
};
