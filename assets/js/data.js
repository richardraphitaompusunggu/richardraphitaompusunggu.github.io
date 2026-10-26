/* ============================================================
   CONTENT & TRANSLATIONS
   All site copy lives here so it can be edited without touching
   markup or logic (BRD NFR-05). Each field carries { en, id }.
   ============================================================ */

const PROFILE = {
  name: "Richard Raphita Ompusunggu",
  email: "richardraphita@gmail.com",
  linkedin: "https://www.linkedin.com/in/richardraphita/",
  github: "https://github.com/richardraphitaompusunggu",
  photo: "assets/img/richard.jpg",
  // TODO: drop the real PDF at this path, then point the CV button here.
  cv: null,
};

/* Simple UI strings keyed for data-i18n attributes in index.html */
const I18N = {
  "nav.about":        { en: "About",            id: "Tentang" },
  "nav.expertise":    { en: "Expertise",        id: "Keahlian" },
  "nav.projects":     { en: "Projects",         id: "Proyek" },
  "nav.lab":          { en: "Lab",              id: "Lab" },
  "nav.skills":       { en: "Skills",           id: "Keahlian" },
  "nav.journey":      { en: "Journey",          id: "Perjalanan" },
  "nav.contact":      { en: "Contact",          id: "Kontak" },

  "hero.role":        { en: "Senior Process Improvement Analyst", id: "Senior Process Improvement Analyst" },
  "hero.headline":    { en: "Turning Data Into Decisions, Processes Into Performance",
                        id: "Mengubah Data Menjadi Keputusan, Proses Menjadi Kinerja" },
  "hero.h1_a":        { en: "Turning Data Into ",   id: "Mengubah Data Menjadi " },
  "hero.h1_blue":     { en: "Decisions",            id: "Keputusan" },
  "hero.h1_b":        { en: ", Processes Into ",    id: ", Proses Menjadi " },
  "hero.h1_gold":     { en: "Performance",          id: "Kinerja" },
  "hero.tagline":     { en: "I help organizations improve operational performance through data-driven analysis, structured problem-solving, and intelligent automation — turning messy processes into scalable, efficient systems.",
                        id: "Saya membantu organisasi meningkatkan kinerja operasional melalui analisis berbasis data, pemecahan masalah yang terstruktur, dan otomatisasi cerdas — mengubah proses yang berantakan menjadi sistem yang efisien dan terukur." },
  "hero.cta_work":    { en: "View My Work",       id: "Lihat Karya Saya" },
  "hero.cta_linkedin":{ en: "Connect on LinkedIn",id: "Terhubung di LinkedIn" },
  "hero.location":    { en: "Bekasi, Indonesia",  id: "Bekasi, Indonesia" },
  "hero.badge":       { en: "Years in fintech",   id: "Tahun di fintech" },

  "about.eyebrow":    { en: "About Me",           id: "Tentang Saya" },
  "about.title":      { en: "Measure it. Understand it. Improve it. Automate it.",
                        id: "Ukur. Pahami. Tingkatkan. Otomatiskan." },
  "about.summary":    { en: "I am a Senior Process Improvement Analyst with 6 years of experience driving operational excellence across the fintech and financial services industries. With a Master's in Business Management and a Data Science background, I bring a unique blend of strategic thinking, analytical rigor, and hands-on execution. I specialize in transforming complex operational challenges into structured, data-backed improvement plans — from designing credit policies to building automated workflows. When systems aren't ready, I build them myself.",
                        id: "Saya seorang Senior Process Improvement Analyst dengan 6 tahun pengalaman mendorong keunggulan operasional di industri fintech dan jasa keuangan. Dengan gelar Magister Manajemen Bisnis dan latar belakang Data Science, saya memadukan pemikiran strategis, ketelitian analitis, dan eksekusi langsung. Saya berfokus mengubah tantangan operasional yang kompleks menjadi rencana perbaikan yang terstruktur dan berbasis data — dari merancang kebijakan kredit hingga membangun alur kerja otomatis. Ketika sistem belum siap, saya membangunnya sendiri." },
  "about.philosophy": { en: "“I believe every process can be improved, every dataset holds an untold story, and every strategy should be grounded in evidence.”",
                        id: "“Saya percaya setiap proses dapat ditingkatkan, setiap dataset menyimpan cerita yang belum terungkap, dan setiap strategi harus berdasarkan bukti.”" },
  "about.industries_label": { en: "Industries", id: "Industri" },
  "about.industries": { en: "Fintech · Financial Services · Banking", id: "Fintech · Jasa Keuangan · Perbankan" },

  "expertise.eyebrow":{ en: "Core Expertise",     id: "Keahlian Inti" },
  "expertise.title":  { en: "Five pillars I build value on",
                        id: "Lima pilar tempat saya membangun nilai" },
  "expertise.tools":  { en: "Key tools",          id: "Alat utama" },

  "projects.eyebrow": { en: "Featured Projects",  id: "Proyek Unggulan" },
  "projects.title":   { en: "Selected work from the field",
                        id: "Karya pilihan dari lapangan" },
  "projects.problem": { en: "Problem",            id: "Masalah" },
  "projects.approach":{ en: "Approach",           id: "Pendekatan" },
  "projects.result":  { en: "Result",             id: "Hasil" },
  "projects.tools":   { en: "Tools",              id: "Alat" },

  "lab.eyebrow":      { en: "Personal Projects",  id: "Proyek Pribadi" },
  "lab.title":        { en: "Hands-on skills, built in the open",
                        id: "Keterampilan langsung, dibangun secara terbuka" },
  "lab.subtitle":     { en: "Self-initiated projects using public data and personal builds. Visuals and full write-ups are on the way.",
                        id: "Proyek atas inisiatif sendiri menggunakan data publik dan hasil bangunan pribadi. Visual dan penjelasan lengkap akan segera hadir." },
  "lab.soon":         { en: "Coming soon",        id: "Segera hadir" },
  "lab.explore":      { en: "Explore",            id: "Jelajahi" },
  "lab.back":         { en: "Back to portfolio",  id: "Kembali ke portofolio" },
  "lab.view_github":  { en: "View on GitHub",     id: "Lihat di GitHub" },
  "lab.task":         { en: "Task",               id: "Tugas" },
  "lab.empty":        { en: "Cases coming soon — notebooks will be linked here.",
                        id: "Studi kasus segera hadir — notebook akan ditautkan di sini." },
  "lab.media_soon":   { en: "Chart preview coming soon",
                        id: "Pratinjau grafik segera hadir" },

  "skills.eyebrow":   { en: "Skills & Tools",     id: "Keahlian & Alat" },
  "skills.title":     { en: "The toolkit behind the work",
                        id: "Perangkat di balik pekerjaan" },

  "journey.eyebrow":  { en: "Professional Journey", id: "Perjalanan Profesional" },
  "journey.title":    { en: "Experience, education & certifications",
                        id: "Pengalaman, pendidikan & sertifikasi" },
  "journey.experience":     { en: "Work Experience",  id: "Pengalaman Kerja" },
  "journey.education":      { en: "Education",        id: "Pendidikan" },
  "journey.certifications": { en: "Certifications",   id: "Sertifikasi" },

  "testimonials.eyebrow": { en: "Testimonials",   id: "Testimoni" },
  "testimonials.title":   { en: "What colleagues say",
                            id: "Apa kata rekan kerja" },
  "testimonials.soon":    { en: "Testimonials coming soon",
                            id: "Testimoni segera hadir" },

  "contact.eyebrow":  { en: "Get in touch",       id: "Hubungi Saya" },
  "contact.title":    { en: "Let's build better processes together",
                        id: "Mari bangun proses yang lebih baik bersama" },
  "contact.closing":  { en: "I'm always open to new challenges and conversations. Let's discuss how I can bring value to your team.",
                        id: "Saya selalu terbuka untuk tantangan dan percakapan baru. Mari diskusikan bagaimana saya dapat memberi nilai bagi tim Anda." },
  "contact.cta":      { en: "Connect on LinkedIn", id: "Terhubung di LinkedIn" },
  "contact.email":    { en: "Email me",           id: "Kirim email" },

  "footer.rights":    { en: "Built with vanilla HTML, CSS & JavaScript.",
                        id: "Dibuat dengan HTML, CSS & JavaScript murni." },
};

/* Animated stat counters in the About section */
const STATS = [
  { value: 6,  suffix: "",  color: "c-primary",   label: { en: "Years of experience",  id: "Tahun pengalaman" } },
  { value: 5,  suffix: "",  color: "c-secondary", label: { en: "Expertise areas",      id: "Area keahlian" } },
  { value: 3,  suffix: "",  color: "c-teal",      label: { en: "Products launched",    id: "Produk diluncurkan" } },
  { value: 20, suffix: "+", color: "c-tertiary",  label: { en: "Automations built",    id: "Otomatisasi dibangun" } },
];

/* Core expertise cards */
const EXPERTISE = [
  {
    icon: "chart", accent: "c-primary",
    title: { en: "Data Analysis", id: "Analisis Data" },
    desc: {
      en: "I turn messy, raw data into decisions — cleaning, extracting, and modelling it into dashboards and KPI trackers that stakeholders actually use.",
      id: "Saya mengubah data mentah yang berantakan menjadi keputusan — membersihkan, mengekstrak, dan memodelkannya menjadi dashboard serta pelacak KPI yang benar-benar digunakan pemangku kepentingan.",
    },
    tools: ["SQL", "Python", "Superset", "Metabase", "Tableau", "Looker"],
    highlight: { en: "20+ sheets → 3 SQL scripts", id: "20+ sheet → 3 skrip SQL" },
    metric: { en: "Cut a 20+ spreadsheet KPI setup down to 3 automated SQL scripts",
              id: "Memangkas 20+ spreadsheet KPI menjadi 3 skrip SQL otomatis" },
  },
  {
    icon: "strategy", accent: "c-secondary",
    title: { en: "Business Strategy", id: "Strategi Bisnis" },
    desc: {
      en: "I structure ambiguous problems with McKinsey-style frameworks, read partner financials, and back recommendations with evidence and testing.",
      id: "Saya menyusun masalah yang ambigu dengan kerangka ala McKinsey, membaca laporan keuangan mitra, dan mendukung rekomendasi dengan bukti serta pengujian.",
    },
    tools: ["MECE", "Issue Trees", "Porter's Five Forces", "SWOT", "Financial Analysis"],
    highlight: { en: "+30% approval rate", id: "+30% tingkat approval" },
    metric: { en: "A/B testing that lifted approval rate +30% and disbursement +25%",
              id: "Pengujian A/B yang menaikkan tingkat persetujuan +30% dan pencairan +25%" },
  },
  {
    icon: "gears", accent: "c-teal",
    title: { en: "Operational Excellence", id: "Keunggulan Operasional" },
    desc: {
      en: "I apply Lean Six Sigma to make processes faster, cleaner, and compliant — from root-cause analysis to SOPs and quality assurance.",
      id: "Saya menerapkan Lean Six Sigma agar proses lebih cepat, bersih, dan patuh — dari analisis akar masalah hingga SOP dan penjaminan mutu.",
    },
    tools: ["Lean Six Sigma", "PDCA", "SIPOC", "5 Why", "Process Mapping"],
    highlight: { en: "SLA 14 days → 2 days", id: "SLA 14 hari → 2 hari" },
    metric: { en: "Reduced SLA from 14+ days to 2 days and input errors by ~95%",
              id: "Menurunkan SLA dari 14+ hari menjadi 2 hari dan kesalahan input ~95%" },
  },
  {
    icon: "flag", accent: "c-tertiary",
    title: { en: "Project Management", id: "Manajemen Proyek" },
    desc: {
      en: "I run product development end-to-end — BRDs, PRDs, RACI, and timelines — aligning IT, Finance, Legal, and Business to ship on time.",
      id: "Saya menjalankan pengembangan produk secara menyeluruh — BRD, PRD, RACI, dan lini masa — menyelaraskan IT, Keuangan, Legal, dan Bisnis agar rilis tepat waktu.",
    },
    tools: ["BRD / PRD", "RACI", "Jira", "Asana", "Google PM Cert"],
    highlight: { en: "3 products launched", id: "3 produk diluncurkan" },
    metric: { en: "Launched 3 products and an Instant Approval flow at Koinworks",
              id: "Meluncurkan 3 produk dan alur Instant Approval di Koinworks" },
  },
  {
    icon: "bolt", accent: "c-primary",
    title: { en: "Automation", id: "Otomatisasi" },
    desc: {
      en: "When systems aren't ready, I build them — custom tools with Apps Script and end-to-end workflows with n8n that remove manual, error-prone steps.",
      id: "Ketika sistem belum siap, saya membangunnya — alat khusus dengan Apps Script dan alur kerja menyeluruh dengan n8n yang menghilangkan langkah manual yang rawan kesalahan.",
    },
    tools: ["n8n", "Google Apps Script", "JavaScript", "APIs", "Google Workspace"],
    highlight: { en: "Contract: 5 min → 10 sec", id: "Kontrak: 5 mnt → 10 dtk" },
    metric: { en: "20+ apps built; contract generation from 5 min to 10 sec",
              id: "20+ aplikasi dibangun; pembuatan kontrak dari 5 menit menjadi 10 detik" },
  },
];

/* Featured (professional) case studies */
const PROJECTS = [
  {
    icon: "chart", accent: "c-primary",
    title: { en: "Partnership Lending Dashboard", id: "Dashboard Partnership Lending" },
    tags: ["Data Analysis", "SQL"],
    context: { en: "Fintech · monitoring the Partnership Lending division (disbursement, repayment, outstanding).",
               id: "Fintech · memantau divisi Partnership Lending (pencairan, pembayaran, outstanding)." },
    problem: { en: "The team monitored performance in spreadsheets that grew heavy, slow, and hard to access as data scaled.",
               id: "Tim memantau kinerja lewat spreadsheet yang menjadi berat, lambat, dan sulit diakses seiring bertambahnya data." },
    approach: { en: "Reviewed the source tables in Superset, then wrote the SQL (SQL Lab) that powers a live dashboard.",
                id: "Meninjau tabel sumber di Superset, lalu menulis SQL (SQL Lab) yang menggerakkan dashboard langsung." },
    result: { en: "A shared dashboard now used by the PL team and other teams that need the same data.",
              id: "Dashboard bersama yang kini dipakai tim PL dan tim lain yang membutuhkan data yang sama." },
    tools: ["Apache Superset", "SQL"],
  },
  {
    icon: "bolt", accent: "c-secondary",
    title: { en: "Workflow Automation", id: "Otomatisasi Alur Kerja" },
    tags: ["Automation"],
    context: { en: "Fintech · removing manual touch so the team can focus on higher-impact work.",
               id: "Fintech · menghilangkan sentuhan manual agar tim fokus pada pekerjaan berdampak tinggi." },
    problem: { en: "Reports, approval emails, customer updates, and task creation were all manual — slow and error-prone.",
               id: "Laporan, email persetujuan, pembaruan pelanggan, dan pembuatan tugas semuanya manual — lambat dan rawan kesalahan." },
    approach: { en: "Read the SOPs, interviewed each process owner about their pain points, then automated the flows with n8n and supporting scripts.",
                id: "Membaca SOP, mewawancarai setiap pemilik proses tentang kendalanya, lalu mengotomatiskan alur dengan n8n dan skrip pendukung." },
    result: { en: "Less manual work, fewer errors, and cleaner processes across the board.",
              id: "Lebih sedikit pekerjaan manual, lebih sedikit kesalahan, dan proses yang lebih bersih secara menyeluruh." },
    tools: ["n8n", "Google Apps Script", "Google Workspace", "Asana", "Slack", "WhatsApp API"],
  },
  {
    icon: "flag", accent: "c-tertiary",
    title: { en: "Partnership Lending System", id: "Sistem Partnership Lending" },
    tags: ["Project Management"],
    context: { en: "Fintech · owning the BRD and timeline to move a manual process into a compliant system.",
               id: "Fintech · memimpin BRD dan lini masa untuk memindahkan proses manual ke sistem yang patuh." },
    problem: { en: "Parts of the lending process ran manually and off-system, which fintech regulation does not allow.",
               id: "Sebagian proses lending berjalan manual dan di luar sistem, yang tidak diizinkan regulasi fintech." },
    approach: { en: "Authored the BRD and timeline, defined business expectations and success criteria, and ran UAT to verify requirements.",
                id: "Menyusun BRD dan lini masa, mendefinisikan ekspektasi bisnis dan kriteria sukses, serta menjalankan UAT untuk memverifikasi kebutuhan." },
    result: { en: "A system that can receive applications and disburse loans, fully on-system.",
              id: "Sistem yang dapat menerima aplikasi dan mencairkan pinjaman, sepenuhnya dalam sistem." },
    tools: ["Google Sheets", "Jira", "Slack"],
  },
];

/* Personal Projects.
   Each entry is one discipline. The index card links to lab.html?topic=<key>,
   which lists that discipline's `cases`. Each case's title opens the RENDERED
   notebook on GitHub (GitHub shows .ipynb charts inline).
   TODO for each case:
     - url: point to the rendered notebook, e.g.
         https://github.com/richardraphitaompusunggu/<repo>/blob/main/<notebook>.ipynb
       (or an nbviewer link: https://nbviewer.org/github/<user>/<repo>/blob/main/<notebook>.ipynb)
     - image: set to an exported chart in assets/img/lab/ (WebP), or leave null. */
const LAB = [
  {
    key: "data-analysis", icon: "chart", accent: "c-primary",
    title: { en: "Data Analysis (Python)", id: "Analisis Data (Python)" },
    tags: ["EDA", "Regression", "Clustering", "ARIMA"],
    note: { en: "Kaggle datasets: EDA, regression, clustering & forecasting with charts.",
            id: "Dataset Kaggle: EDA, regresi, clustering & peramalan dengan grafik." },
    intro: { en: "My machine-learning portfolio, built with public data from Kaggle and other sources. It spans problems from different industries and a range of algorithmic approaches. Click any title to open the notebook on GitHub.",
             id: "Portofolio machine learning saya, dibuat dengan data publik dari Kaggle dan sumber lain. Mencakup berbagai masalah dari beragam industri dan pendekatan algoritma. Klik judul mana pun untuk membuka notebook di GitHub." },
    cases: [
      { title: "Avocado Prices", url: "https://github.com/richardraphitaompusunggu",
        tags: ["EDA", "ARIMA"], image: null,
        desc: { en: "Exploratory Data Analysis and an ARIMA time-series forecast for avocado prices — used to plan where and when to buy at a better price and maximize profit.",
                id: "Exploratory Data Analysis dan peramalan deret waktu ARIMA untuk harga alpukat — dipakai merencanakan di mana dan kapan membeli dengan harga lebih baik untuk memaksimalkan keuntungan." } },
      { title: "Boston House Prices", url: "https://github.com/richardraphitaompusunggu",
        tags: ["EDA", "Regression"], image: null,
        desc: { en: "EDA and a regression model to estimate Boston house prices from the available variables — useful to judge whether a house is over- or under-valued.",
                id: "EDA dan model regresi untuk memperkirakan harga rumah di Boston dari variabel yang tersedia — berguna menilai apakah rumah dinilai terlalu tinggi atau rendah." } },
      { title: "Brazil E-commerce", url: "https://github.com/richardraphitaompusunggu",
        tags: ["EDA", "Clustering", "ARIMA"], image: null,
        desc: { en: "EDA plus clustering by region to see which regions have the highest payment and growth, and ARIMA forecasting to predict future orders and payment.",
                id: "EDA plus clustering per wilayah untuk melihat wilayah dengan pembayaran dan pertumbuhan tertinggi, serta peramalan ARIMA untuk memprediksi pesanan dan pembayaran mendatang." } },
    ],
  },
  {
    key: "automation", icon: "bolt", accent: "c-secondary",
    title: { en: "Automation (n8n)", id: "Otomatisasi (n8n)" },
    tags: ["Workflow", "APIs"],
    note: { en: "End-to-end n8n workflows — node graphs and what they automate.",
            id: "Alur kerja n8n menyeluruh — diagram node dan apa yang diotomatiskan." },
    intro: { en: "Automation builds using n8n and Google Apps Script — end-to-end workflows that remove manual, error-prone steps. Click any title to open the workflow or repo on GitHub.",
             id: "Karya otomatisasi menggunakan n8n dan Google Apps Script — alur kerja menyeluruh yang menghilangkan langkah manual yang rawan kesalahan. Klik judul mana pun untuk membuka alur kerja atau repo di GitHub." },
    cases: [],
  },
  {
    key: "business", icon: "strategy", accent: "c-teal",
    title: { en: "Business cases (McKinsey-style frameworks)", id: "Studi kasus bisnis (kerangka ala McKinsey)" },
    tags: ["MECE", "Issue Tree"],
    note: { en: "Business problems structured and solved with McKinsey frameworks.",
            id: "Masalah bisnis yang disusun dan dipecahkan dengan kerangka McKinsey." },
    intro: { en: "Business cases structured and solved with McKinsey-style frameworks (MECE, issue trees, hypothesis-driven analysis). Click any title to open the write-up on GitHub.",
             id: "Studi kasus bisnis yang disusun dan dipecahkan dengan kerangka ala McKinsey (MECE, issue tree, analisis berbasis hipotesis). Klik judul mana pun untuk membuka penjelasan di GitHub." },
    cases: [],
  },
];

/* Skills grid */
const SKILLS = [
  { category: { en: "Data & Analytics", id: "Data & Analitik" },
    items: ["Python", "SQL", "Google Colab", "Jupyter Notebook", "Google Sheets", "Tableau", "Looker", "Apache Superset", "Metabase"] },
  { category: { en: "Automation & Integration", id: "Otomatisasi & Integrasi" },
    items: ["Google Apps Script", "n8n", "HTML", "CSS", "JavaScript"] },
  { category: { en: "Project Management", id: "Manajemen Proyek" },
    items: ["Asana", "Jira", "Spreadsheet", "BRD / PRD", "RACI"] },
  { category: { en: "Business & Strategy", id: "Bisnis & Strategi" },
    items: ["Financial Statement Analysis", "Business Planning", "Market Research", "MECE", "Issue Trees"] },
  { category: { en: "Operational Excellence", id: "Keunggulan Operasional" },
    items: ["Lean Six Sigma", "PDCA", "SIPOC", "5 Why", "SOP Development", "Process Mapping"] },
  { category: { en: "Soft Skills", id: "Soft Skills" },
    items: ["Cross-functional Leadership", "Stakeholder Management", "Data-Driven Decisions", "Root Cause Analysis", "Problem Solving"] },
];

/* Professional journey timeline (most recent first) */
const TIMELINE = [
  { type: "work", date: "Mar 2025 — Present",
    role: { en: "Senior Process Improvement Analyst", id: "Senior Process Improvement Analyst" },
    org: "Amartha · Fintech",
    desc: { en: "Build improvement plans from performance data and customer feedback; design credit policies at 100% regulatory adherence; lead IT, Finance, Legal & Business on product launches.",
            id: "Menyusun rencana perbaikan dari data kinerja dan umpan balik pelanggan; merancang kebijakan kredit dengan kepatuhan 100%; memimpin IT, Keuangan, Legal & Bisnis dalam peluncuran produk." } },
  { type: "work", date: "Jan 2023 — Jan 2025",
    role: { en: "Senior Process Improvement & QA", id: "Senior Process Improvement & QA" },
    org: "Koinworks · Fintech / P2P Lending",
    desc: { en: "Monitored KPIs and drove continuous improvement; led cross-functional root-cause analysis; built metrics-based reporting systems.",
            id: "Memantau KPI dan mendorong perbaikan berkelanjutan; memimpin analisis akar masalah lintas fungsi; membangun sistem pelaporan berbasis metrik." } },
  { type: "work", date: "Jan 2021 — Dec 2022",
    role: { en: "Process Improvement & QA Officer", id: "Process Improvement & QA Officer" },
    org: "Koinworks · Fintech / P2P Lending",
    desc: { en: "Developed improvement initiatives and corrective-action strategies for operations; delivered data-driven insights and trend models.",
            id: "Mengembangkan inisiatif perbaikan dan strategi tindakan korektif untuk operasional; memberikan wawasan berbasis data dan model tren." } },
  { type: "edu", date: "2016 — 2018",
    role: { en: "Master of Management", id: "Magister Manajemen" },
    org: "Prasetiya Mulya University · GPA 3.38",
    desc: { en: "Business management, strategy, and finance.",
            id: "Manajemen bisnis, strategi, dan keuangan." } },
  { type: "edu", date: "2010 — 2015",
    role: { en: "Bachelor of Engineering", id: "Sarjana Teknik" },
    org: "Catholic University of Atma Jaya · GPA 3.42",
    desc: { en: "Engineering foundation prior to a career in process improvement.",
            id: "Fondasi teknik sebelum berkarier di process improvement." } },
  { type: "cert", date: "Nov 2022",
    role: { en: "Google Project Management Certificate", id: "Sertifikat Google Project Management" },
    org: "Coursera",
    desc: { en: "Professional certificate covering project management foundations, Agile, and delivery.",
            id: "Sertifikat profesional mencakup dasar manajemen proyek, Agile, dan penyelesaian." } },
  { type: "cert", date: "May 2020",
    role: { en: "Data Science Bootcamp", id: "Bootcamp Data Science" },
    org: "Purwadhika",
    desc: { en: "Intensive bootcamp covering Python, data analysis, and machine-learning foundations.",
            id: "Bootcamp intensif mencakup Python, analisis data, dan dasar machine learning." } },
];
