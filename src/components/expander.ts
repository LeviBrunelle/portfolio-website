// src/components/expander.ts

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectSection = {
  title: string;
  body?: string[];
  bullets?: string[];
};

export type GalleryItem =
  | string
  | {
      src: string;
      alt?: string;
    };

export type CardOpts = {
  cover?: string;
  logo?: string;
  title: string;
  dates?: string;
  blurb?: string;

  // legacy content
  bullets?: string[];
  details?: string[];
  link_text?: string;
  link_url?: string;
  link?: string;
  cta?: string;
  linkText?: string;

  // new content
  sections?: ProjectSection[];
  links?: ProjectLink[];

  skills?: string[];
  gallery?: GalleryItem[];
};

const esc = (s: string = "") =>
  s.replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m] as string));

const normalizeSections = (card: CardOpts): ProjectSection[] => {
  if (Array.isArray(card.sections) && card.sections.length) {
    return card.sections.filter(
      (section) =>
        !!section?.title &&
        ((Array.isArray(section.body) && section.body.length > 0) ||
          (Array.isArray(section.bullets) && section.bullets.length > 0))
    );
  }

  const sections: ProjectSection[] = [];

  if (Array.isArray(card.bullets) && card.bullets.length) {
    sections.push({
      title: "Overview",
      bullets: card.bullets,
    });
  }

  if (Array.isArray(card.details) && card.details.length) {
    sections.push({
      title: "Details",
      body: card.details,
    });
  }

  return sections;
};

const normalizeLinks = (card: CardOpts): ProjectLink[] => {
  const links: ProjectLink[] = [];

  if (Array.isArray(card.links)) {
    links.push(...card.links.filter((link) => !!link?.label && !!link?.href));
  }

  const legacyHref = card.link_url ?? card.link;
  const legacyLabel = card.link_text ?? card.cta ?? card.linkText;

  if (legacyHref && legacyLabel) {
    links.push({ label: legacyLabel, href: legacyHref });
  }

  const seen = new Set<string>();
  return links.filter((link) => {
    const key = `${link.label}__${link.href}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const renderSections = (sections: ProjectSection[]) => {
  if (!sections.length) return "";

  return `
    <div class="card-sections">
      ${sections
        .map((section) => {
          const body = Array.isArray(section.body)
            ? section.body.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")
            : "";

          const bullets =
            Array.isArray(section.bullets) && section.bullets.length
              ? `
                <ul>
                  ${section.bullets.map((bullet) => `<li>${esc(bullet)}</li>`).join("")}
                </ul>
              `
              : "";

          return `
            <section class="card-section">
              <h3 class="card-section-title">${esc(section.title)}</h3>
              ${body}
              ${bullets}
            </section>
          `;
        })
        .join("")}
    </div>
  `;
};

const renderLinks = (links: ProjectLink[]) => {
  if (!links.length) return "";

  return `
    <div class="card-link">
      ${links
        .map(
          (link) => `
            <a class="btn" href="${esc(link.href)}" target="_blank" rel="noopener noreferrer">
              ${esc(link.label)}
            </a>
          `
        )
        .join("")}
    </div>
  `;
};

const renderGallery = (gallery: GalleryItem[] = []) => {
  if (!gallery.length) return "";

  return `
    <div class="gallery">
      ${gallery
        .map((item) => {
          const src = typeof item === "string" ? item : item.src;
          const alt = typeof item === "string" ? "" : item.alt ?? "";

          return `
            <a class="thumb" href="${esc(src)}" data-lb="${esc(src)}" aria-label="Open image">
              <img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">
            </a>
          `;
        })
        .join("")}
    </div>
  `;
};

const renderSkills = (skills: string[] = []) => {
  if (!skills.length) return "";

  return `
    <div class="pills">
      ${skills.map((skill) => `<span class="pill">${esc(skill)}</span>`).join("")}
    </div>
  `;
};

export function cardHTML(card: CardOpts): string {
  const sections = normalizeSections(card);
  const links = normalizeLinks(card);
  const gallery = Array.isArray(card.gallery) ? card.gallery : [];
  const skills = Array.isArray(card.skills) ? card.skills : [];

  return `
<details class="card">
  <summary>
    ${card.cover ? `<img class="cover" src="${esc(card.cover)}" alt="">` : `<div class="cover"></div>`}
    <div class="card-summary-copy">
      <div class="title">${esc(card.title)}</div>
      ${card.dates ? `<div class="dates">${esc(card.dates)}</div>` : ""}
      ${card.blurb ? `<p class="blurb">${esc(card.blurb)}</p>` : ""}
    </div>
  </summary>

  ${renderLinks(links)}

  <div class="card-body">
    <div class="card-inner">
      ${renderSections(sections)}
      ${renderGallery(gallery)}
      ${renderSkills(skills)}
    </div>
  </div>
</details>`;
}
