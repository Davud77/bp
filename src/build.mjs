import { cp, mkdir, writeFile } from "node:fs/promises";
import { site, projects } from "./content.mjs";
import { detailsLabels, projectDetails } from "./project-details.mjs";

const output = new URL("../dist/", import.meta.url);
const domain = "https://botplus.ru";
const github = "https://github.com/Davud77";
const routes = { ru: "/", en: "/en/" };
const icons = {
  down: '<path d="M12 4v15m-6-6 6 6 6-6"/>',
  up: '<path d="M12 20V5m-6 6 6-6 6 6"/>',
  right: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  left: '<path d="M20 12H5m6 6-6-6 6-6"/>',
  external: '<path d="M6 18 18 6M8 6h10v10"/>',
  github: '<path fill="currentColor" stroke="none" d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-2.1c-3.12.68-3.78-1.33-3.78-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.49-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.68 10.68 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.11 5.53.4.35.76 1.03.76 2.08v3.09c0 .3.2.64.77.53A11.2 11.2 0 0 0 12 .8Z"/>',
};

function icon(name) {
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
}

function brand(home) {
  return `<a class="brand" href="${home}" aria-label="BOTPLUS"><img src="/assets/mark.svg" width="35" height="35" alt=""><span>BOTPLUS</span></a>`;
}

function projectPath(project, language) {
  return `${routes[language]}projects/${project.repo.slice(3)}/`;
}

function projectCard(project, index, language) {
  const copy = project[language];
  const number = String(index + 1).padStart(2, "0");
  const label = site[language];
  return `
    <article class="project project--${project.image}" aria-labelledby="${project.repo}">
      <div class="project-art" aria-hidden="true">
        <img src="/assets/${project.image}.svg" alt="" width="600" height="244">
        <span class="art-index">${number}</span>
        <span class="art-label">${project.visualLabel}</span>
      </div>
      <div class="project-content">
        <p class="platform">${copy.platform ?? project.platform}</p>
        <h4 id="${project.repo}">${project.name}</h4>
        <p class="project-description">${copy.description}</p>
        ${copy.tags ? `<ul class="tags">${copy.tags.map(tag => `<li>${tag}</li>`).join("")}</ul>` : ""}
        <div class="project-actions">
          <a class="project-link details-link" href="${projectPath(project, language)}" aria-label="${detailsLabels[language].details} · ${project.name}">${detailsLabels[language].details} ${icon("right")}</a>
          <a class="project-link repository-link" href="${github}/${project.repo}" aria-label="${project.name} ${label.viewLabel}">${icon("github")} <span>${label.view}</span> ${icon("external")}</a>
        </div>
      </div>
    </article>`;
}

function layout(language, { title, description, paths, content }) {
  const copy = site[language];
  const home = routes[language];
  return `<!doctype html>
<html lang="${language}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${description}">
  <meta name="theme-color" content="#f8f8fc">
  <title>${title}</title>
  <link rel="icon" href="/assets/mark.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/site.css">
  <link rel="canonical" href="${domain}${paths[language]}">
  ${Object.entries(paths).map(([locale, path]) => `<link rel="alternate" hreflang="${locale}" href="${domain}${path}">`).join("\n  ")}
  <link rel="alternate" hreflang="x-default" href="${domain}${paths.ru}">
</head>
<body id="top">
  <a class="skip-link" href="#main">${copy.skip}</a>
  <header class="site-header">
    <div class="shell header-inner">
      ${brand(home)}
      <nav class="header-nav">
        <a class="nav-projects" href="${home}#projects">${copy.projects}</a>
        <div class="languages" role="group" aria-label="${copy.language}">
          ${Object.entries(paths).map(([locale, path]) => `<a href="${path}" lang="${locale}" hreflang="${locale}" aria-label="${locale === "ru" ? "Русский" : "English"}"${locale === language ? ' aria-current="page"' : ""}>${locale.toUpperCase()}</a>`).join("")}
        </div>
        <a class="header-github" href="${github}" aria-label="${copy.githubProfile}">${icon("github")}<span>GitHub</span>${icon("external")}</a>
      </nav>
    </div>
  </header>
  ${content}
  <footer class="site-footer">
    <div class="shell footer-inner">
      <div>
        ${brand(home)}
        <p>${copy.footerText}</p>
      </div>
      <div class="footer-links">
        <a href="${github}" aria-label="${copy.githubProfile}">GitHub / Davud77 ${icon("external")}</a>
        <a href="#top">${copy.back} ${icon("up")}</a>
      </div>
    </div>
  </footer>
</body>
</html>
`;
}

function cataloguePage(language) {
  const copy = site[language];
  const content = `
  <main class="shell" id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="signal"></span>${copy.heroLabel}</p>
        <h1 id="hero-title">${copy.heroTitle[0]}<br><span>${copy.heroTitle[1]}</span></h1>
        <p class="intro">${copy.intro}</p>
        <a class="primary-button" href="#projects">${copy.explore} ${icon("down")}</a>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <img src="/assets/cubes.svg" alt="" width="600" height="460">
        <div class="visual-caption"><span>BOTPLUS<span class="caption-divider"></span>01</span><span>${copy.figure}</span></div>
      </div>
    </section>
    <section class="catalogue" id="projects" aria-labelledby="catalogue-title">
      <div class="section-head">
        <div><p class="eyebrow section-index">${copy.index}</p><h2 id="catalogue-title">${copy.catalogue}</h2></div>
        <p>${copy.catalogueNote}</p>
      </div>
      <h3 class="group-label"><span>01 /</span> ${copy.featured}</h3>
      <div class="project-grid featured-grid">
        ${projects.slice(0, 2).map((project, index) => projectCard(project, index, language)).join("")}
      </div>
      <h3 class="group-label"><span>02 /</span> ${copy.utilities}</h3>
      <div class="project-grid utility-grid">
        ${projects.slice(2).map((project, index) => projectCard(project, index + 2, language)).join("")}
      </div>
    </section>
  </main>
  `;
  return layout(language, { title: copy.title, description: copy.description, paths: routes, content });
}

function projectPage(project, index, language) {
  const copy = project[language];
  const labels = detailsLabels[language];
  const details = projectDetails[project.repo];
  const { screenshotCaption, features, setup } = details[language];
  const { file, width, height } = details.screenshot;
  const screenshot = `/assets/screens/${file}`;
  const repo = `${github}/${project.repo}`;
  const guide = repo + (typeof details.guide === "string" ? details.guide : details.guide[language]);
  const primaryLink = details.release ? repo + details.release : guide;
  const primaryLabel = details.release ? labels.releases : labels.documentation;
  const paths = { ru: projectPath(project, "ru"), en: projectPath(project, "en") };
  const number = String(index + 1).padStart(2, "0");

  const content = `
    <main class="shell project-detail" id="main">
      <a class="back-link" href="${routes[language]}#projects">${icon("left")} ${labels.allProjects}</a>
      <section class="detail-hero project--${project.image}" aria-labelledby="project-title">
        <div class="detail-heading">
          <p class="eyebrow detail-index"><span>${number}</span> ${project.visualLabel}</p>
          <h1 id="project-title">${project.name}</h1>
          <p class="detail-description">${copy.description}</p>
        </div>
        <div class="detail-summary">
          <p class="eyebrow">${labels.compatibility}</p>
          <p class="detail-platform">${copy.platform ?? project.platform}</p>
          <a class="primary-button" href="${primaryLink}">${primaryLabel} ${icon("external")}</a>
          <a class="detail-repository" href="${repo}">${icon("github")} ${site[language].view}</a>
        </div>
      </section>
      <nav class="detail-nav" aria-label="${labels.aboutProject}">
        <a href="#interface">${labels.interface}</a>
        <a href="#features">${labels.features}</a>
        <a href="#start">${labels.start}</a>
      </nav>
      <section class="detail-section" id="interface" aria-labelledby="interface-title">
        <h2 id="interface-title">${labels.interface}</h2>
        <figure class="interface-figure">
          <div class="interface-image${width / height > 4 ? " interface-image--ribbon" : ""}">
            <img src="${screenshot}" alt="${screenshotCaption}" width="${width}" height="${height}">
          </div>
          <figcaption><span>${screenshotCaption}</span><a href="${screenshot}">${labels.screenshot} ${icon("external")}</a></figcaption>
        </figure>
      </section>
      <section class="detail-section" id="features" aria-labelledby="features-title">
        <h2 id="features-title">${labels.features}</h2>
        <ol class="feature-grid">
          ${features.map(([heading, body], featureIndex) => `<li><span class="feature-index" aria-hidden="true">${String(featureIndex + 1).padStart(2, "0")}</span><div><h3>${heading}</h3><p>${body}</p></div></li>`).join("")}
        </ol>
      </section>
      <div class="detail-setup" id="start">
        <div>
          <h2>${labels.start}</h2>
          <p>${setup}</p>
        </div>
        <a class="project-link" href="${guide}">${labels.documentation} ${icon("external")}</a>
      </div>
    </main>
  `;

  return layout(language, { title: `${project.name} — BOTPLUS`, description: copy.description, paths, content });
}

async function writePage(path, html) {
  const directory = new URL(path.slice(1), output);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), html);
}

await mkdir(output, { recursive: true });
await cp(new URL("./assets/", import.meta.url), new URL("assets/", output), { recursive: true });
await Promise.all(Object.entries(routes).flatMap(([language, path]) => [
  writePage(path, cataloguePage(language)),
  ...projects.map((project, index) => writePage(projectPath(project, language), projectPage(project, index, language))),
]));
