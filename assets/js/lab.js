/* ============================================================
   Lab detail page — lists one discipline's cases (lab.html?topic=)
   Reuses CONTENT/LAB/I18N from data.js.
   ============================================================ */

const ICONS = {
  chart:    '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 15l3-4 3 2 4-6"/></svg>',
  strategy: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none"/></svg>',
  bolt:     '<svg viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
  github:   '<svg viewBox="0 0 24 24"><path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.3 4.3 0 00-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 00-6 0C6.9 1.3 5.9 1.6 5.9 1.6a4.3 4.3 0 00-.1 3.2A4.6 4.6 0 004.5 8c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
  image:    '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 16l-5-5-6 6"/></svg>',
  empty:    '<svg viewBox="0 0 24 24"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>',
};

let lang = localStorage.getItem("lang") || "en";
const T = (o) => (o && o[lang] !== undefined ? o[lang] : o && o.en) || "";
const topic = new URLSearchParams(location.search).get("topic");

function caseHTML(c) {
  const media = c.image
    ? `<div class="lab-case-media"><img src="${c.image}" alt="${c.title} chart preview" loading="lazy"></div>`
    : `<div class="lab-case-media placeholder">${ICONS.image}<span>${I18N["lab.media_soon"][lang]}</span></div>`;
  return `
    <article class="lab-case">
      <a class="lab-case-title" href="${c.url}" target="_blank" rel="noopener noreferrer">
        ${c.title} ${ICONS.github}
      </a>
      <div class="lab-case-task">
        <span class="k">${I18N["lab.task"][lang]}</span>
        ${c.tags.map(t => `<span class="pill accent">${t}</span>`).join("")}
      </div>
      <p class="lab-case-desc">${T(c.desc)}</p>
      ${media}
    </article>`;
}

function applyI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const d = I18N[el.dataset.i18n];
    if (d) el.textContent = d[lang];
  });
  document.querySelectorAll(".lang-toggle button").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang));
}

function render() {
  const entry = LAB.find(l => l.key === topic);
  if (!entry) { location.replace("index.html#lab"); return; }

  document.title = `${T(entry.title)} — Richard Raphita Ompusunggu`;
  document.getElementById("lab-root").className = "lab-detail " + entry.accent;

  const cases = entry.cases || [];
  const list = cases.length
    ? cases.map(caseHTML).join("")
    : `<div class="lab-empty">${ICONS.empty}<p data-i18n="lab.empty"></p></div>`;

  document.getElementById("lab-content").innerHTML = `
    <div class="lab-detail-hero">
      <div class="exp-icon">${ICONS[entry.icon]}</div>
      <h1>${T(entry.title)}</h1>
    </div>
    <p class="lab-detail-intro">${T(entry.intro)}</p>
    <div class="case-study-list">${list}</div>`;

  applyI18n();
}

function initLangToggle() {
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lang === lang) return;
      lang = btn.dataset.lang;
      localStorage.setItem("lang", lang);
      render();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav").classList.add("scrolled");
  render();
  initLangToggle();
  document.getElementById("year").textContent = new Date().getFullYear();
});
