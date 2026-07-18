"use client";

import { useEffect, useState } from "react";

type Language = "sk" | "en";

const copy = {
  sk: {
    nav: {
      about: "O mne",
      work: "Projekty",
      experience: "Skúsenosti",
      community: "Komunita",
      hobbies: "Voľný čas",
      contact: "Kontakt",
    },
    skip: "Preskočiť na obsah",
    languageLabel: "Zmeniť jazyk na angličtinu",
    status: "SYSTÉM ONLINE",
    location: "Bratislava / Slovensko",
    eyebrow: "SOFTVÉROVÝ INŽINIER × MAKER",
    heroTitleTop: "Tvorím softvér,",
    heroTitleBottom: "ktorý siaha za obrazovku.",
    heroLead:
      "Cez deň vyvíjam natívne aplikácie a integrácie v Slido. Po večeroch navrhujem dosky, programujem mikrokontroléry a realizujem vlastné návrhy — od 3D modelu až po samotnú tlač.",
    heroPrimary: "Pozrieť projekty",
    heroSecondary: "Otvoriť GitHub",
    portraitAlt: "Dominik Paľo",
    systemLabel: "PROFIL / DP-01",
    systemSoftware: "SOFTWARE",
    systemHardware: "HARDWARE",
    systemCommunity: "COMMUNITY",
    systemSoftwareValue: "Swift · C# · TypeScript",
    systemHardwareValue: "PCB · IoT · 3D CAD",
    systemCommunityValue: "Mentoring · Kurzy",
    metrics: [
      { value: "2014 → DNES", label: "Slido / Cisco" },
      { value: "macOS + Windows", label: "Natívny vývoj" },
      { value: "96", label: "Verejných repozitárov" },
      { value: "MakerSpace", label: "Lektor & dobrovoľník" },
    ],
    aboutKicker: "01 / O MNE",
    aboutTitle: "Medzi kódom a spájkovačkou.",
    aboutIntro:
      "Som senior softvérový inžinier z Bratislavy. Baví ma riešiť problémy tam, kde sa stretáva viac svetov — web s natívnou aplikáciou, softvér s hardvérom a technológia s človekom.",
    softwareTitle: "SOFTWARE ENGINEER",
    softwareBody:
      "V Slido, ktoré je súčasťou Cisco, tvorím integrácie pre PowerPoint na macOS aj Windows. Primárne pracujem so Swiftom, C, C++ a VBA; prispievam aj do .NET/C# a React/TypeScript častí produktu.",
    makerTitle: "MAKER & MENTOR",
    makerBody:
      "Navrhujem PCB a programujem mikrokontroléry ESP32, STM32 či AVR. Mám skúsenosti s 3D modelovaním a obzvlášť ma baví navrhovať funkčné diely a modely pre 3D tlač v Autodesk Fusion. V MakerSpace Bratislava dobrovoľníčim, odovzdávam skúsenosti ako lektor a vediem praktické kurzy.",
    stackLabel: "AKTÍVNY TOOLCHAIN",
    stack: ["Swift", "C#", "TypeScript", "React", "Node.js", "C / C++", "ESP32", "KiCad", "Autodesk Fusion", "3D tlač"],
    workKicker: "02 / VYBRANÉ PROJEKTY",
    workTitle: "Veci, ktoré fungujú v reálnom svete.",
    workIntro:
      "Od prezentačných integrácií používaných globálnymi tímami po open-source hardvér na pracovnom stole.",
    projectVisit: "Otvoriť projekt",
    projects: [
      {
        index: "01",
        title: "Slido for PowerPoint",
        type: "NATIVE INTEGRATION",
        description:
          "Ankety, kvízy a Q&A priamo v PowerPointe. Primárne zodpovedám za integráciu pre macOS a prispievam aj do Windows a webovej vrstvy.",
        tags: ["Swift", "C#", "C/C++", "VBA", "React"],
        href: "https://www.slido.com/features-powerpoint",
        image: "/projects/slido-powerpoint.jpg",
        featured: true,
      },
      {
        index: "02",
        title: "Slido for Google Slides",
        type: "WEB ECOSYSTEM",
        description:
          "Prepojenie Chrome rozšírenia, Google Slides doplnku, webového prehrávača a Slido Sidebar do jedného prezentačného zážitku.",
        tags: ["TypeScript", "React", "Google Cloud"],
        href: "https://www.slido.com/features-google-slides",
        image: "/projects/slido-google-slides.jpg",
      },
      {
        index: "03",
        title: "Slido Switcher",
        type: "NATIVE DESKTOP / 2017—2025",
        description:
          "Osem rokov vývoja macOS a Windows aplikácií, ktoré umožňovali moderátorom ovládať prezentáciu priamo zo Slida.",
        tags: ["Swift", "C#", "WPF"],
        href: "https://community.slido.com/news-announcements-3/slido-s-switcher-app-was-sunsetted-in-january-2025-4416",
        image: "/projects/slido-switcher.png",
      },
      {
        index: "04",
        title: "Slido for Slack",
        type: "PRODUCT INTEGRATION / 2018—2020",
        description:
          "Backend, databáza a interakčná logika integrácie, ktorá priniesla správu Slido eventov a otázok priamo do Slacku.",
        tags: ["Node.js", "TypeScript", "MySQL", "Slack API"],
        href: "https://www.producthunt.com/products/slido",
        image: "/projects/slido-slack.png",
      },
      {
        index: "05",
        title: "Arduino Smart Home",
        type: "DEAN'S AWARD / 2013",
        description:
          "Diplomová práca: mobilná aplikácia, server a Arduino hardvér pre ovládanie a automatizáciu domácnosti — ešte pred IoT boomom.",
        tags: ["Arduino", "Cordova", "Node.js", "CouchDB"],
        href: "https://www.linkedin.com/in/dpalo",
        image: "/projects/arduino-thesis.png",
      },
    ],
    experienceKicker: "03 / SKÚSENOSTI",
    experienceTitle: "Technológie sa menia. Zvedavosť zostáva.",
    experience: [
      {
        years: "2014 — DNES",
        role: "Senior Software Engineer",
        company: "Slido / Cisco",
        detail:
          "Natívne aplikácie a integrácie pre macOS a Windows, webové technológie a prepojenia s prezentačnými platformami.",
        href: "https://www.slido.com",
      },
      {
        years: "2012 — 2016",
        role: "Software & Hardware Engineer",
        company: "Matsuko",
        detail:
          "Multiplatformové mobilné aplikácie v Xamarin/C# a zariadenia na mieru: návrh PCB, AVR firmware a integrácia so softvérom.",
        href: "https://www.matsuko.com",
      },
      {
        years: "2008 — 2013",
        role: "Aplikovaná informatika",
        company: "FEI STU",
        detail:
          "Inžinierske štúdium so špecializáciou na modelovanie a simuláciu udalostných systémov. Aktívny člen združenia Ynet.",
        href: "https://www.fei.stuba.sk",
      },
    ],
    communityKicker: "04 / COMMUNITY MODE",
    communityTitle: "Technológia má zmysel, keď sa zdieľa.",
    communityBody:
      "Vo voľnom čase pôsobím v MakerSpace Bratislava — komunitnej dielni v Novej Cvernovke. Dobrovoľníčim pri jej fungovaní, pomáham ľuďom s elektronikou a maker projektmi, lektorujem a vediem praktické kurzy.",
    communityCta: "Navštíviť MakerSpace Bratislava",
    communityConsole: "MSBA://KOMUNITA",
    communityRoles: [
      ["DOBROVOĽNÍK", "Pomoc komunite a dielni"],
      ["LEKTOR", "Zdieľanie elektronického know-how"],
      ["VEDENIE KURZOV", "Praktické kurzy od nápadu k výrobku"],
    ],
    hobbiesKicker: "05 / OFFLINE MODE",
    hobbiesTitle: "Keď nie som za počítačom, som na cestách.",
    hobbiesIntro:
      "Technológie sú veľká časť môjho sveta, ale tie najlepšie zážitky často začínajú mimo obrazovky.",
    rideLabel: "RIDE / 01",
    rideTitle: "Honda NC750X",
    rideBody:
      "Jazda na motorke je pre mňa spôsob, ako vyčistiť hlavu, zmeniť perspektívu a objavovať cestu bez pevného plánu. Najradšej zo sedla vlastnej Hondy NC750X.",
    rideTags: ["Dve kolesá", "Otvorená cesta", "Bez pevného plánu"],
    travelLabel: "TRAVEL / 02",
    travelTitle: "Takmer celá Ázia",
    travelBody:
      "Veľmi rád cestujem — najmä po Ázii, ktorú mám precestovanú takmer celú. Fascinujú ma rozdielne kultúry, jedlo, pulzujúce mestá aj miesta ďaleko od hlavných trás.",
    travelTags: ["Ázia", "Kultúry", "Jedlo", "Mimo hlavných trás"],
    contactKicker: "06 / SPOJME SA",
    contactTitle: "Máte zaujímavý problém?",
    contactBody:
      "Najradšej riešim veci, pri ktorých treba spojiť viac technológií — alebo kód s kúskom hardvéru.",
    contactFormLabel: "SPRÁVA / SECURE CHANNEL",
    contactFormEndpoint: "ENDPOINT: SÚKROMNÁ SCHRÁNKA",
    contactFormReady: "KANÁL PRIPRAVENÝ",
    contactName: "Meno",
    contactNamePlaceholder: "Ako sa voláte?",
    contactEmail: "E-mail",
    contactEmailPlaceholder: "vas@email.sk",
    contactSubject: "Predmet",
    contactSubjectPlaceholder: "O čom sa chcete porozprávať?",
    contactMessage: "Správa",
    contactMessagePlaceholder: "Napíšte mi viac o vašom nápade alebo probléme...",
    contactSend: "Odoslať správu",
    contactSuccess: "Správa bola odoslaná. Ozvem sa čo najskôr.",
    footerNote: "Navrhnuté medzi kódom a cínom.",
    links: {
      github: "GitHub",
      linkedin: "LinkedIn",
      instagram: "Instagram",
    },
  },
  en: {
    nav: {
      about: "About",
      work: "Work",
      experience: "Experience",
      community: "Community",
      hobbies: "Free time",
      contact: "Contact",
    },
    skip: "Skip to content",
    languageLabel: "Switch language to Slovak",
    status: "SYSTEM ONLINE",
    location: "Bratislava / Slovakia",
    eyebrow: "SOFTWARE ENGINEER × MAKER",
    heroTitleTop: "I build software",
    heroTitleBottom: "that reaches beyond the screen.",
    heroLead:
      "By day, I build native applications and integrations at Slido. By night, I design circuit boards, program microcontrollers, and bring my own designs to life — from 3D model to final print.",
    heroPrimary: "Explore my work",
    heroSecondary: "Open GitHub",
    portraitAlt: "Dominik Paľo",
    systemLabel: "PROFILE / DP-01",
    systemSoftware: "SOFTWARE",
    systemHardware: "HARDWARE",
    systemCommunity: "COMMUNITY",
    systemSoftwareValue: "Swift · C# · TypeScript",
    systemHardwareValue: "PCB · IoT · 3D CAD",
    systemCommunityValue: "Mentoring · Courses",
    metrics: [
      { value: "2014 → NOW", label: "Slido / Cisco" },
      { value: "macOS + Windows", label: "Native development" },
      { value: "96", label: "Public repositories" },
      { value: "MakerSpace", label: "Lecturer & volunteer" },
    ],
    aboutKicker: "01 / ABOUT",
    aboutTitle: "Between code and a soldering iron.",
    aboutIntro:
      "I’m a senior software engineer based in Bratislava. I enjoy solving problems where different worlds meet — the web with native apps, software with hardware, and technology with people.",
    softwareTitle: "SOFTWARE ENGINEER",
    softwareBody:
      "At Slido, part of Cisco, I build PowerPoint integrations for macOS and Windows. My main stack includes Swift, C, C++, and VBA; I also contribute to the .NET/C# and React/TypeScript parts of the product.",
    makerTitle: "MAKER & MENTOR",
    makerBody:
      "I design PCBs and program ESP32, STM32, and AVR microcontrollers. I’m experienced in 3D modelling and especially enjoy designing functional parts and models for 3D printing in Autodesk Fusion. At MakerSpace Bratislava, I volunteer, share knowledge as a lecturer, and lead hands-on courses.",
    stackLabel: "ACTIVE TOOLCHAIN",
    stack: ["Swift", "C#", "TypeScript", "React", "Node.js", "C / C++", "ESP32", "KiCad", "Autodesk Fusion", "3D printing"],
    workKicker: "02 / SELECTED WORK",
    workTitle: "Things that work in the real world.",
    workIntro:
      "From presentation integrations used by global teams to open-source hardware on my workbench.",
    projectVisit: "Open project",
    projects: [
      {
        index: "01",
        title: "Slido for PowerPoint",
        type: "NATIVE INTEGRATION",
        description:
          "Polls, quizzes, and Q&A directly in PowerPoint. I’m primarily responsible for the macOS integration and also contribute to its Windows and web layers.",
        tags: ["Swift", "C#", "C/C++", "VBA", "React"],
        href: "https://www.slido.com/features-powerpoint",
        image: "/projects/slido-powerpoint.jpg",
        featured: true,
      },
      {
        index: "02",
        title: "Slido for Google Slides",
        type: "WEB ECOSYSTEM",
        description:
          "A Chrome extension, Google Slides add-on, web player, and Slido Sidebar connected into one presentation experience.",
        tags: ["TypeScript", "React", "Google Cloud"],
        href: "https://www.slido.com/features-google-slides",
        image: "/projects/slido-google-slides.jpg",
      },
      {
        index: "03",
        title: "Slido Switcher",
        type: "NATIVE DESKTOP / 2017—2025",
        description:
          "Eight years of building macOS and Windows apps that let presenters control their computer directly from Slido.",
        tags: ["Swift", "C#", "WPF"],
        href: "https://community.slido.com/news-announcements-3/slido-s-switcher-app-was-sunsetted-in-january-2025-4416",
        image: "/projects/slido-switcher.png",
      },
      {
        index: "04",
        title: "Slido for Slack",
        type: "PRODUCT INTEGRATION / 2018—2020",
        description:
          "Backend, database, and interaction logic for an integration that brought Slido event management and audience questions into Slack.",
        tags: ["Node.js", "TypeScript", "MySQL", "Slack API"],
        href: "https://www.producthunt.com/products/slido",
        image: "/projects/slido-slack.png",
      },
      {
        index: "05",
        title: "Arduino Smart Home",
        type: "DEAN'S AWARD / 2013",
        description:
          "Master’s thesis: a mobile app, server, and Arduino hardware for home control and automation — before the IoT boom.",
        tags: ["Arduino", "Cordova", "Node.js", "CouchDB"],
        href: "https://www.linkedin.com/in/dpalo",
        image: "/projects/arduino-thesis.png",
      },
    ],
    experienceKicker: "03 / EXPERIENCE",
    experienceTitle: "Technology changes. Curiosity stays.",
    experience: [
      {
        years: "2014 — NOW",
        role: "Senior Software Engineer",
        company: "Slido / Cisco",
        detail:
          "Native macOS and Windows applications, web technologies, and integrations with presentation platforms.",
        href: "https://www.slido.com",
      },
      {
        years: "2012 — 2016",
        role: "Software & Hardware Engineer",
        company: "Matsuko",
        detail:
          "Cross-platform mobile apps in Xamarin/C# and custom devices: PCB design, AVR firmware, and software integration.",
        href: "https://www.matsuko.com",
      },
      {
        years: "2008 — 2013",
        role: "Applied Informatics",
        company: "FEI STU",
        detail:
          "Engineering degree focused on modelling and simulation of event systems. Active member of the Ynet association.",
        href: "https://www.fei.stuba.sk",
      },
    ],
    communityKicker: "04 / COMMUNITY MODE",
    communityTitle: "Technology matters when it is shared.",
    communityBody:
      "In my free time, I’m active at MakerSpace Bratislava — a community workshop at Nová Cvernovka. I volunteer to help run the space, support people with electronics and maker projects, teach, and lead hands-on courses.",
    communityCta: "Visit MakerSpace Bratislava",
    communityConsole: "MSBA://COMMUNITY",
    communityRoles: [
      ["VOLUNTEER", "Helping the community and workshop"],
      ["LECTURER", "Sharing electronics know-how"],
      ["COURSE LEAD", "Hands-on courses from idea to object"],
    ],
    hobbiesKicker: "05 / OFFLINE MODE",
    hobbiesTitle: "When I’m away from the computer, I’m on the road.",
    hobbiesIntro:
      "Technology is a big part of my world, but the best experiences often begin away from a screen.",
    rideLabel: "RIDE / 01",
    rideTitle: "Honda NC750X",
    rideBody:
      "Riding clears my head, changes my perspective, and turns the road itself into the destination. My Honda NC750X is my favourite way to set off without a fixed plan.",
    rideTags: ["Two wheels", "Open road", "No fixed plan"],
    travelLabel: "TRAVEL / 02",
    travelTitle: "Almost all of Asia",
    travelBody:
      "I love travelling, especially across Asia — a continent I have explored almost in its entirety. I’m drawn to its different cultures, food, restless cities, and places far beyond the main routes.",
    travelTags: ["Asia", "Cultures", "Food", "Beyond the main routes"],
    contactKicker: "06 / GET IN TOUCH",
    contactTitle: "Got an interesting problem?",
    contactBody:
      "I’m at my best when a problem connects several technologies — or code with a piece of hardware.",
    contactFormLabel: "MESSAGE / SECURE CHANNEL",
    contactFormEndpoint: "ENDPOINT: PRIVATE INBOX",
    contactFormReady: "CHANNEL READY",
    contactName: "Name",
    contactNamePlaceholder: "What should I call you?",
    contactEmail: "Email",
    contactEmailPlaceholder: "you@email.com",
    contactSubject: "Subject",
    contactSubjectPlaceholder: "What would you like to discuss?",
    contactMessage: "Message",
    contactMessagePlaceholder: "Tell me more about your idea or problem...",
    contactSend: "Send message",
    contactSuccess: "Your message has been sent. I’ll get back to you soon.",
    footerNote: "Designed between code and solder.",
    links: {
      github: "GitHub",
      linkedin: "LinkedIn",
      instagram: "Instagram",
    },
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("sk");
  const [messageSent, setMessageSent] = useState(false);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("message") !== "sent") {
      return;
    }

    setMessageSent(true);
    query.delete("message");
    const remainingQuery = query.toString();
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${remainingQuery ? `?${remainingQuery}` : ""}${window.location.hash}`,
    );
  }, []);

  return (
    <main id="content">
      <a className="skip-link" href="#about">
        {t.skip}
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#content" aria-label="Dominik Paľo">
            <span className="brand-mark" aria-hidden="true">
              DP
            </span>
            <span className="brand-text">
              <strong>Dominik Paľo</strong>
              <small>SOFTWARE × HARDWARE</small>
            </span>
          </a>

          <nav
            className="desktop-nav"
            aria-label={language === "sk" ? "Hlavná navigácia" : "Main navigation"}
          >
            <a href="#about">{t.nav.about}</a>
            <a href="#work">{t.nav.work}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#community">{t.nav.community}</a>
            <a href="#hobbies">{t.nav.hobbies}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="language-switch" aria-label={t.languageLabel}>
            <button
              type="button"
              className={language === "sk" ? "active" : ""}
              onClick={() => setLanguage("sk")}
              aria-pressed={language === "sk"}
            >
              SK
            </button>
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="hero blueprint-section" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="system-status">
              <span className="status-dot" />
              {t.status}
              <span className="status-divider">/</span>
              {t.location}
            </div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 id="hero-title">
              <span>{t.heroTitleTop}</span>
              <span className="accent-text">{t.heroTitleBottom}</span>
            </h1>
            <p className="hero-lead">{t.heroLead}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                {t.heroPrimary}
                <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/DominikPalo"
                target="_blank"
                rel="noreferrer"
              >
                {t.heroSecondary}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="profile-system" aria-label={t.systemLabel}>
            <div className="profile-topline">
              <span>{t.systemLabel}</span>
              <span>48.1486°N / 17.1077°E</span>
            </div>
            <div className="profile-visual">
              <div className="portrait-frame">
                <img src="/dominik-palo-nerdy.png" alt={t.portraitAlt} />
                <span className="corner corner-tl" />
                <span className="corner corner-tr" />
                <span className="corner corner-bl" />
                <span className="corner corner-br" />
              </div>
              <div className="scan-line" aria-hidden="true" />
              <div className="profile-index">DP—01</div>
            </div>
            <div className="system-readouts">
              <div>
                <span>{t.systemSoftware}</span>
                <strong>{t.systemSoftwareValue}</strong>
              </div>
              <div>
                <span>{t.systemHardware}</span>
                <strong>{t.systemHardwareValue}</strong>
              </div>
              <div>
                <span>{t.systemCommunity}</span>
                <strong>{t.systemCommunityValue}</strong>
              </div>
            </div>
            <div className="signal-line" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div
          className="container metrics-grid"
          aria-label={language === "sk" ? "Profil v číslach" : "Profile metrics"}
        >
          {t.metrics.map((metric, index) => (
            <div className="metric" key={metric.label}>
              <span className="metric-index">0{index + 1}</span>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="about" aria-labelledby="about-title">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">{t.aboutKicker}</p>
            <h2 id="about-title">{t.aboutTitle}</h2>
            <p>{t.aboutIntro}</p>
          </div>

          <div className="about-grid">
            <article className="identity-panel software-panel">
              <div className="panel-label">
                <span>SYS_A</span>
                <span>01</span>
              </div>
              <div className="identity-icon code-icon" aria-hidden="true">
                <span>&lt;</span>
                <span>/</span>
                <span>&gt;</span>
              </div>
              <h3>{t.softwareTitle}</h3>
              <p>{t.softwareBody}</p>
            </article>

            <article className="identity-panel maker-panel">
              <div className="panel-label">
                <span>SYS_B</span>
                <span>02</span>
              </div>
              <div className="identity-icon chip-icon" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <b>µC</b>
              </div>
              <h3>{t.makerTitle}</h3>
              <p>{t.makerBody}</p>
            </article>
          </div>

          <div className="toolchain">
            <div className="toolchain-header">
              <span>{t.stackLabel}</span>
              <span className="toolchain-pulse">SIGNAL: STABLE</span>
            </div>
            <div className="tool-list">
              {t.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="container">
          <div className="section-heading horizontal-heading">
            <div>
              <p className="section-kicker">{t.workKicker}</p>
              <h2 id="work-title">{t.workTitle}</h2>
            </div>
            <p>{t.workIntro}</p>
          </div>

          <div className="projects-grid">
            {t.projects.map((project) => (
              <article
                className={
                  "project-card" +
                  ("featured" in project && project.featured ? " featured" : "")
                }
                key={project.index}
              >
                <a
                  className="project-image"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={project.title + " — " + t.projectVisit}
                >
                  <img src={project.image} alt="" />
                  <span className="project-scan" aria-hidden="true" />
                  <span className="project-open" aria-hidden="true">↗</span>
                </a>
                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.index}</span>
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div
                    className="tags"
                    aria-label={language === "sk" ? "Technológie" : "Technologies"}
                  >
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    className="text-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.projectVisit} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="experience-title">
        <div className="container experience-layout">
          <div className="section-heading sticky-heading">
            <p className="section-kicker">{t.experienceKicker}</p>
            <h2 id="experience-title">{t.experienceTitle}</h2>
            <div className="axis-graphic" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="timeline">
            {t.experience.map((item, index) => (
              <article className="timeline-item" key={item.years}>
                <div className="timeline-marker">
                  <span>0{index + 1}</span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-years">{item.years}</span>
                  <h3>{item.role}</h3>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.company} <span aria-hidden="true">↗</span>
                  </a>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section community-section"
        id="community"
        aria-labelledby="community-title"
      >
        <div className="container">
          <div className="community-shell">
            <div className="community-copy">
              <p className="section-kicker">{t.communityKicker}</p>
              <h2 id="community-title">{t.communityTitle}</h2>
              <p>{t.communityBody}</p>
              <a
                className="button button-light"
                href="https://www.msba.sk"
                target="_blank"
                rel="noreferrer"
              >
                {t.communityCta}
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="community-console">
              <div className="console-header">
                <span>{t.communityConsole}</span>
                <span>NOVÁ CVERNOVKA</span>
              </div>
              {t.communityRoles.map(([role, detail], index) => (
                <div className="role-row" key={role}>
                  <span className="role-index">0{index + 1}</span>
                  <strong>{role}</strong>
                  <span>{detail}</span>
                  <i aria-hidden="true" />
                </div>
              ))}
              <div className="console-footer">
                <span>BRATISLAVA</span>
                <span>48°09&apos;N 17°06&apos;E</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section hobbies-section"
        id="hobbies"
        aria-labelledby="hobbies-title"
      >
        <div className="container">
          <div className="section-heading horizontal-heading hobbies-heading">
            <div>
              <p className="section-kicker">{t.hobbiesKicker}</p>
              <h2 id="hobbies-title">{t.hobbiesTitle}</h2>
            </div>
            <p>{t.hobbiesIntro}</p>
          </div>

          <div className="hobbies-grid">
            <article className="hobby-card ride-card">
              <div className="hobby-card-header">
                <span>{t.rideLabel}</span>
                <span>ROAD STATUS: OPEN</span>
              </div>
              <div className="ride-visual" aria-hidden="true">
                <img
                  className="motorcycle-outline"
                  src="/motorcycle-outline.webp"
                  alt=""
                />
                <small>RIDE MODE / ON</small>
              </div>
              <div className="hobby-content">
                <h3>{t.rideTitle}</h3>
                <p>{t.rideBody}</p>
                <div className="hobby-tags">
                  {t.rideTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>

            <article className="hobby-card travel-card">
              <div className="hobby-card-header">
                <span>{t.travelLabel}</span>
                <span>REGION: ASIA</span>
              </div>
              <div className="travel-visual" aria-hidden="true">
                <img className="asia-map-outline" src="/asia-outline.png" alt="" />
                <span className="map-connection" />
                <i className="map-pin map-pin-west" />
                <i className="map-pin map-pin-central" />
                <i className="map-pin map-pin-east" />
                <div className="passport-stamp">
                  <strong>ASIA</strong>
                  <small>EXPLORED</small>
                </div>
                <span className="travel-coordinate">34.0479° N / 100.6197° E</span>
              </div>
              <div className="hobby-content">
                <h3>{t.travelTitle}</h3>
                <p>{t.travelBody}</p>
                <div className="hobby-tags">
                  {t.travelTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="container">
          <div className="footer-main">
            <div>
              <p className="section-kicker">{t.contactKicker}</p>
              <h2>{t.contactTitle}</h2>
            </div>
            <p>{t.contactBody}</p>
          </div>

          <div className="contact-channel">
            <div className="contact-channel-meta">
              <div>
                <span className="contact-channel-label">{t.contactFormLabel}</span>
                <strong>{t.contactFormEndpoint}</strong>
              </div>
              <div className="contact-channel-status">
                <span aria-hidden="true" />
                {t.contactFormReady}
              </div>
            </div>

            <form
              className="contact-form"
              action="https://formsubmit.co/4ff4fb7e953b3b7d36a5f267829c9a01"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Nová správa z palo.sk" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="https://palo.sk/?message=sent#contact"
              />
              <input type="hidden" name="_url" value="https://palo.sk/#contact" />

              <div className="contact-form-trap" aria-hidden="true">
                <label htmlFor="contact-company">Company website</label>
                <input
                  id="contact-company"
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="contact-form-grid">
                <label className="contact-field">
                  <span>{t.contactName}</span>
                  <input
                    type="text"
                    name="name"
                    placeholder={t.contactNamePlaceholder}
                    maxLength={100}
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>{t.contactEmail}</span>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.contactEmailPlaceholder}
                    maxLength={200}
                    autoComplete="email"
                    required
                  />
                </label>

                <label className="contact-field contact-field-wide">
                  <span>{t.contactSubject}</span>
                  <input
                    type="text"
                    name="subject"
                    placeholder={t.contactSubjectPlaceholder}
                    maxLength={160}
                    required
                  />
                </label>

                <label className="contact-field contact-field-wide">
                  <span>{t.contactMessage}</span>
                  <textarea
                    name="message"
                    placeholder={t.contactMessagePlaceholder}
                    minLength={10}
                    maxLength={5000}
                    rows={7}
                    required
                  />
                </label>
              </div>

              <div className="contact-form-footer">
                <button className="button button-primary" type="submit">
                  {t.contactSend}
                  <span aria-hidden="true">↗</span>
                </button>
              </div>

              {messageSent && (
                <p className="contact-form-success" role="status">
                  <span aria-hidden="true">✓</span>
                  {t.contactSuccess}
                </p>
              )}
            </form>
          </div>

          <div className="social-links">
            <a href="https://github.com/DominikPalo" target="_blank" rel="noreferrer">
              <span>01</span>
              {t.links.github}
              <b aria-hidden="true">↗</b>
            </a>
            <a href="https://www.linkedin.com/in/dpalo" target="_blank" rel="noreferrer">
              <span>02</span>
              {t.links.linkedin}
              <b aria-hidden="true">↗</b>
            </a>
            <a
              href="https://www.instagram.com/dominik.palo"
              target="_blank"
              rel="noreferrer"
            >
              <span>03</span>
              {t.links.instagram}
              <b aria-hidden="true">↗</b>
            </a>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Dominik Paľo</span>
            <span>{t.footerNote}</span>
            <a href="#content">TOP ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
