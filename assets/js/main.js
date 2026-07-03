/* ============================================================
   Portfolio behaviour: i18n, rendering, nav, reveal, counters
   ============================================================ */

/* ---- SVG icon set (inline so no extra requests) ---- */
const ICONS = {
  chart:    '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 15l3-4 3 2 4-6"/></svg>',
  strategy: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none"/></svg>',
  gears:    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>',
  flag:     '<svg viewBox="0 0 24 24"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
  bolt:     '<svg viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
  check:    '<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>',
  pin:      '<svg viewBox="0 0 24 24"><path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  mail:     '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4"/></svg>',
  github:   '<svg viewBox="0 0 24 24"><path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.3 4.3 0 00-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 00-6 0C6.9 1.3 5.9 1.6 5.9 1.6a4.3 4.3 0 00-.1 3.2A4.6 4.6 0 004.5 8c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
  quote:    '<svg viewBox="0 0 24 24"><path d="M7 7H4v6h5V7l-2 4M20 7h-3v6h5V7l-2 4"/></svg>',
};

let lang = localStorage.getItem("lang") || "en";
const T = (obj) => (obj && obj[lang] !== undefined ? obj[lang] : obj && obj.en) || "";

/* ---------- Render dynamic sections ---------- */
function renderExpertise() {
  document.getElementById("expertise-grid").innerHTML = EXPERTISE.map((e, i) => `
    <article class="exp-card reveal" data-delay="${i % 3 + 1}">
      <div class="exp-icon">${ICONS[e.icon]}</div>
      <h3>${T(e.title)}</h3>
      <p>${T(e.desc)}</p>
      <div class="exp-tools">${e.tools.map(t => `<span>${t}</span>`).join("")}</div>
      <div class="exp-metric">${ICONS.check}<span>${T(e.metric)}</span></div>
    </article>`).join("");
}

function renderProjects() {
  document.getElementById("projects-list").innerHTML = PROJECTS.map((p, i) => `
    <article class="project reveal" data-delay="${i % 3 + 1}">
      <div class="project-head" role="button" tabindex="0" aria-expanded="false">
        <div>
          <h3>${T(p.title)}</h3>
          <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        </div>
        <span class="project-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></span>
      </div>
      <div class="project-body">
        <div class="project-body-inner">
          <p class="v" style="margin-bottom:6px">${T(p.context)}</p>
          <div class="pb-row"><span class="k" data-i18n="projects.problem"></span><span class="v">${T(p.problem)}</span></div>
          <div class="pb-row"><span class="k" data-i18n="projects.approach"></span><span class="v">${T(p.approach)}</span></div>
          <div class="pb-row result"><span class="k" data-i18n="projects.result"></span><span class="v">${T(p.result)}</span></div>
          <div class="pb-row"><span class="k" data-i18n="projects.tools"></span><span class="pb-tools">${p.tools.map(t => `<span>${t}</span>`).join("")}</span></div>
        </div>
      </div>
    </article>`).join("");
  wireProjectAccordions();
}

function renderLab() {
  document.getElementById("lab-grid").innerHTML = LAB.map((l, i) => `
    <article class="lab-card reveal" data-delay="${i % 3 + 1}">
      <span class="lab-soon" data-i18n="lab.soon"></span>
      <div class="exp-icon">${ICONS[l.icon]}</div>
      <h3>${T(l.title)}</h3>
      <p>${T(l.note)}</p>
      <div class="project-tags">${l.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </article>`).join("");
}

function renderSkills() {
  document.getElementById("skills-grid").innerHTML = SKILLS.map((s, i) => `
    <div class="skill-group reveal" data-delay="${i % 3 + 1}">
      <h3>${T(s.category)}</h3>
      <div class="skill-tags">${s.items.map(t => `<span>${t}</span>`).join("")}</div>
    </div>`).join("");
}

function renderTimeline() {
  document.getElementById("timeline").innerHTML = TIMELINE.map(t => `
    <div class="tl-item ${t.type} reveal">
      <div class="tl-date">${t.date}</div>
      <h3>${T(t.role)}</h3>
      <div class="tl-org">${t.org}</div>
      <p>${T(t.desc)}</p>
    </div>`).join("");
}

function renderStats() {
  document.getElementById("stats").innerHTML = STATS.map(s => `
    <div class="stat reveal">
      <div class="num" data-count="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
      <div class="lbl">${T(s.label)}</div>
    </div>`).join("");
}

/* ---------- Apply i18n to static [data-i18n] nodes ---------- */
function applyI18n() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const dict = I18N[el.dataset.i18n];
    if (dict) el.textContent = dict[lang];
  });
  // profile links / static hrefs
  document.querySelectorAll(".lang-toggle button").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang));
}

/* ---------- Full re-render on language change ---------- */
function renderAll() {
  countersDone = false;   // allow counters to run for freshly-rendered stat nodes
  renderStats();
  renderExpertise();
  renderProjects();
  renderLab();
  renderSkills();
  renderTimeline();
  applyI18n();      // includes keys inside freshly-rendered markup
  observeReveals();
}

/* ---------- Project accordions ---------- */
function wireProjectAccordions() {
  document.querySelectorAll(".project-head").forEach(head => {
    const toggle = () => {
      const card = head.closest(".project");
      const body = card.querySelector(".project-body");
      const open = card.classList.toggle("open");
      head.setAttribute("aria-expanded", open);
      body.style.maxHeight = open ? body.scrollHeight + "px" : 0;
    };
    head.addEventListener("click", toggle);
    head.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });
}

/* ---------- Scroll reveal ---------- */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          if (entry.target.id === "stats") runCounters();
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  }
  document.querySelectorAll(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
  const stats = document.getElementById("stats");
  if (stats) revealObserver.observe(stats);
}

/* ---------- Animated counters ---------- */
let countersDone = false;
function runCounters() {
  if (countersDone) return;
  countersDone = true;
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || "";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.textContent = target + suffix; return; }
    let start = null;
    const dur = 1300;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(p * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

/* ---------- Navigation: scroll state, active link, mobile ---------- */
function initNav() {
  const nav = document.getElementById("nav");
  const links = document.querySelectorAll(".nav-links a");
  const sections = [...document.querySelectorAll("section[id]")];

  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 24);
    let current = "";
    const pos = window.scrollY + window.innerHeight * 0.35;
    sections.forEach(s => { if (pos >= s.offsetTop) current = s.id; });
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // mobile menu
  const burger = document.getElementById("hamburger");
  const menu = document.getElementById("nav-links");
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("mobile-open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("mobile-open");
    burger.classList.remove("open");
  }));
}

/* ---------- Language toggle ---------- */
function initLangToggle() {
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lang === lang) return;
      lang = btn.dataset.lang;
      localStorage.setItem("lang", lang);
      renderAll();
    });
  });
}

/* ---------- Wire static profile links ---------- */
function initProfileLinks() {
  document.querySelectorAll("[data-link=linkedin]").forEach(a => a.href = PROFILE.linkedin);
  document.querySelectorAll("[data-link=github]").forEach(a => a.href = PROFILE.github);
  document.querySelectorAll("[data-link=email]").forEach(a => a.href = "mailto:" + PROFILE.email);
  const photo = document.getElementById("hero-photo-img");
  if (photo) photo.src = PROFILE.photo;
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  initNav();
  initLangToggle();
  initProfileLinks();
  document.getElementById("year").textContent = new Date().getFullYear();
});
