/* ============================================================
 * Renderer — reads window.SITE_CONTENT and writes the page.
 *
 * One render function per section. Each appends children to
 * the matching <section id="..."> shell in index.html.
 * Behavioural JS (mobile nav, expand/collapse) is wired up
 * after rendering at the bottom of this file.
 * ============================================================ */
(() => {
  const c = window.SITE_CONTENT;
  if (!c) {
    console.error("SITE_CONTENT missing — load content.js before app.js");
    return;
  }

  // ----- helpers ------------------------------------------------
  const escape = (s) =>
    String(s).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[ch]));

  const setHTML = (selector, html) => {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  };

  const containerOf = (sectionId, labelHTML) =>
    `<div class="container">${labelHTML}{{BODY}}</div>`;

  const sectionLabel = (text) =>
    `<span class="section-label">${escape(text)}</span>`;

  // SVG icons used in the contact section.
  const ICONS = {
    email: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  };

  // ----- meta ---------------------------------------------------
  document.title = c.meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", c.meta.description);

  // ----- nav ----------------------------------------------------
  const renderNav = () => {
    const links = c.nav
      .map((n) => `<li><a href="#${escape(n.id)}">${escape(n.label)}</a></li>`)
      .join("");
    setHTML(
      "#site-nav",
      `
        <div class="nav-inner">
          <a href="#" class="nav-logo">${escape(c.meta.name)}</a>
          <ul class="nav-links" id="nav-links">${links}</ul>
          <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
            <span></span><span></span><span></span>
          </button>
        </div>
      `
    );
  };

  // ----- hero ---------------------------------------------------
  const renderHero = () => {
    const ctas = c.hero.ctas
      .map(
        (cta) =>
          `<a href="${escape(cta.href)}" class="btn btn-${escape(
            cta.style
          )}">${escape(cta.label)}</a>`
      )
      .join("");
    setHTML(
      "#hero",
      `
        <div class="container">
          <h1>${escape(c.hero.headline)}</h1>
          <p class="hero-subtitle">${escape(c.hero.subtitle)}</p>
          <div class="hero-cta">${ctas}</div>
        </div>
      `
    );
  };

  // ----- about --------------------------------------------------
  const renderAbout = () => {
    const paras = c.about.paragraphs
      .map((p) => `<p>${escape(p)}</p>`)
      .join("");
    setHTML(
      "#about",
      `
        <div class="container">
          ${sectionLabel("About")}
          <div class="about-layout">
            <div class="about-photo">
              <span class="about-photo-initials">${escape(c.meta.initials)}</span>
              <img src="${escape(c.meta.photo)}" alt="${escape(c.meta.name)}" onerror="this.style.display='none'">
            </div>
            <div class="about-text">${paras}</div>
          </div>
        </div>
      `
    );
  };

  // ----- experience ---------------------------------------------
  const renderExperienceCard = (exp) => {
    if (exp.variant === "small") {
      return `
        <div class="exp-card-small">
          <div class="exp-header">
            <span class="exp-role">${escape(exp.role)}</span>
            <span class="exp-dates">${escape(exp.dates)}</span>
          </div>
          <div class="exp-company">${escape(exp.company)}</div>
          <p>${escape(exp.body)}</p>
        </div>
      `;
    }

    const overview = exp.overview
      .map((p) => `<p>${escape(p)}</p>`)
      .join("");

    const detailsBullets = exp.details.bullets
      .map((b) => `<li>${escape(b)}</li>`)
      .join("");

    const currentWork = exp.details.currentWork
      ? `
        <div class="current-work">
          <h4>${escape(exp.details.currentWork.heading)}</h4>
          <p>${escape(exp.details.currentWork.body)}</p>
        </div>
      `
      : "";

    const detailsId = `${exp.id}-details`;
    const toggleId = `${exp.id}-toggle`;

    return `
      <div class="exp-card">
        <div class="exp-header">
          <span class="exp-role">${escape(exp.role)}</span>
          <span class="exp-dates">${escape(exp.dates)}</span>
        </div>
        <div class="exp-company">${escape(exp.company)}</div>
        <p class="exp-oneliner">${escape(exp.oneliner)}</p>
        <div class="exp-overview">${overview}</div>
        <button class="exp-toggle" id="${escape(toggleId)}" aria-expanded="false" aria-controls="${escape(detailsId)}">
          <span class="exp-toggle-icon">▶</span> Show details
        </button>
        <div class="exp-details" id="${escape(detailsId)}">
          <h4>${escape(exp.details.heading)}</h4>
          <ul>${detailsBullets}</ul>
          ${currentWork}
        </div>
      </div>
    `;
  };

  const renderExperience = () => {
    const cards = c.experience.map(renderExperienceCard).join("");
    setHTML(
      "#experience",
      `<div class="container">${sectionLabel("Experience")}${cards}</div>`
    );
  };

  // ----- research -----------------------------------------------
  const renderAuthors = (authors) =>
    authors
      .map((a) =>
        a.highlighted ? `<strong>${escape(a.name)}</strong>` : escape(a.name)
      )
      .join(", ");

  const renderVenue = (parts) =>
    parts
      .map((p) => {
        if (p.type === "separator") return "·";
        if (p.type === "link")
          return `<a href="${escape(p.href)}" target="_blank" rel="noopener">${escape(p.label)}</a>`;
        return escape(p.value);
      })
      .join(" ");

  const renderPaper = (p) => `
    <div class="paper">
      <h3 class="paper-title">${escape(p.title)}</h3>
      <p class="paper-authors">${renderAuthors(p.authors)}</p>
      <p class="paper-venue">${renderVenue(p.venue)}</p>
      <p class="paper-abstract">${escape(p.abstract)}</p>
    </div>
  `;

  const renderResearch = () => {
    const papers = c.research.papers.map(renderPaper).join("");
    setHTML(
      "#research",
      `
        <div class="container">
          ${sectionLabel("Research & Publications")}
          <p class="research-intro">${escape(c.research.intro)}</p>
          ${papers}
          <div class="research-callout">
            <strong>${escape(c.research.callout.label)}</strong>
            <p>${escape(c.research.callout.body)}</p>
          </div>
        </div>
      `
    );
  };

  // ----- skills -------------------------------------------------
  const renderSkillCategory = (cat) => {
    const tags = cat.tags
      .map((t) => `<span class="tag">${escape(t)}</span>`)
      .join("");
    return `
      <div class="skill-category">
        <h3>${escape(cat.name)}</h3>
        <div class="skill-tags">${tags}</div>
      </div>
    `;
  };

  const renderSkills = () => {
    const cats = c.skills.categories.map(renderSkillCategory).join("");
    const creds = c.skills.credentials
      .map((cr) => `<li>${escape(cr)}</li>`)
      .join("");
    setHTML(
      "#skills",
      `
        <div class="container">
          ${sectionLabel("Technical Profile")}
          <div class="skills-grid">${cats}</div>
          <div class="credentials">
            <h3>Credentials</h3>
            <ul>${creds}</ul>
          </div>
        </div>
      `
    );
  };

  // ----- projects -----------------------------------------------
  const renderProject = (p) => {
    const tags = p.tags
      .map((t) => `<span class="tag">${escape(t)}</span>`)
      .join("");
    return `
      <div class="project-card">
        <h3>${escape(p.title)}</h3>
        <div class="project-tags">${tags}</div>
        <p>${escape(p.description)}</p>
      </div>
    `;
  };

  const renderProjects = () => {
    const cards = c.projects.map(renderProject).join("");
    setHTML(
      "#projects",
      `<div class="container">${sectionLabel("Selected Projects")}${cards}</div>`
    );
  };

  // ----- contact + footer ---------------------------------------
  const renderContact = () => {
    const links = c.contact.links
      .map((l) => {
        const target = l.external ? ` target="_blank" rel="noopener"` : "";
        const icon = ICONS[l.icon] || "";
        return `<a href="${escape(l.href)}"${target} class="contact-link">${icon} ${escape(l.label)} </a>`;
      })
      .join("");
    setHTML(
      "#contact",
      `
        <div class="container">
          ${sectionLabel("Contact")}
          <p class="contact-tagline">${escape(c.contact.tagline)}</p>
          <div class="contact-links">${links}</div>
        </div>
      `
    );
  };

  const renderFooter = () => {
    setHTML(
      "footer",
      `<p>&copy; ${escape(c.meta.footerYear)} ${escape(c.meta.name)}</p>`
    );
  };

  // ----- behaviour ---------------------------------------------
  const wireMobileNav = () => {
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    if (!navToggle || !navLinks) return;

    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navLinks.classList.remove("open");
      });
    });
  };

  const wireExperienceToggles = () => {
    document.querySelectorAll(".exp-toggle").forEach((button) => {
      button.addEventListener("click", () => {
        const details = button.nextElementSibling;
        const isOpen = details.classList.contains("visible");

        details.classList.toggle("visible");
        button.classList.toggle("active");
        button.setAttribute("aria-expanded", String(!isOpen));

        const label = button.childNodes[button.childNodes.length - 1];
        label.textContent = isOpen ? " Show details" : " Hide details";
      });
    });
  };

  // ----- run ----------------------------------------------------
  renderNav();
  renderHero();
  renderAbout();
  renderExperience();
  renderResearch();
  renderSkills();
  renderProjects();
  renderContact();
  renderFooter();
  wireMobileNav();
  wireExperienceToggles();
})();
