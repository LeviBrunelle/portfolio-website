// src/pages/projects.ts
import { mountNavbar } from "../components/navbar";
import { typewriter } from "../components/typewriter";
import { cardHTML, type CardOpts } from "../components/expander";
import projects from "../data/projects.json";
import { mountLightbox } from "../components/lightbox";

type RawProject = CardOpts;

const data = projects as { projects: RawProject[] };

const isAbsoluteUrl = (value: string) =>
  /^(https?:)?\/\//.test(value) || value.startsWith("data:");

const fixImagePath = (path?: string) => {
  if (!path) return undefined;
  if (isAbsoluteUrl(path) || path.startsWith("/")) return path;
  if (path.startsWith("images/")) return `/${path}`;
  return `/images/${path}`;
};

const fixAssetPath = (path?: string) => {
  if (!path) return undefined;
  if (isAbsoluteUrl(path) || path.startsWith("/")) return path;
  return `/${path}`;
};

const normalizeProject = (project: RawProject): CardOpts => {
  const legacyLinkHref = project.link_url ?? project.link;
  const legacyLinkLabel = project.link_text ?? project.cta ?? project.linkText;

  const links = [
    ...(Array.isArray(project.links)
      ? project.links
          .filter((link) => link?.label && link?.href)
          .map((link) => ({
            label: link.label,
            href: fixAssetPath(link.href)!,
          }))
      : []),
    ...(legacyLinkHref && legacyLinkLabel
      ? [
          {
            label: legacyLinkLabel,
            href: fixAssetPath(legacyLinkHref)!,
          },
        ]
      : []),
  ];

  const dedupedLinks: NonNullable<CardOpts["links"]> = [];
  const seen = new Set<string>();

  for (const link of links) {
    const key = `${link.label}__${link.href}`;
    if (seen.has(key)) continue;
    seen.add(key);
    dedupedLinks.push(link);
  }

  return {
    ...project,
    cover: fixImagePath(project.logo || project.cover),
    links: dedupedLinks,
    gallery: Array.isArray(project.gallery)
      ? project.gallery
          .map((item) => {
            if (typeof item === "string") {
              return fixImagePath(item) ?? item;
            }

            const src = fixImagePath(item?.src);
            if (!src) return null;

            return {
              src,
              alt: item.alt ?? "",
            };
          })
          .filter(Boolean) as CardOpts["gallery"]
      : [],
  };
};

export function mountProjects() {
  mountNavbar("projects");

  const main = document.querySelector("main");
  if (!main) return;

  main.innerHTML = `<h1 id="ty"></h1><div id="cards" class="proj-list"></div>`;
  typewriter(document.querySelector("#ty")!, "I've been working on...");

  const list = document.querySelector<HTMLDivElement>("#cards");
  if (!list) return;

  list.innerHTML = data.projects.map((project) => cardHTML(normalizeProject(project))).join("");

  main.classList.add("projects-page");
  mountLightbox();
}
