'use strict';

(() => {

  const CONFIG = {
    email: '',
    whatsapp: '5571992565286',
    instagram: 'https://www.instagram.com/gabrielvidal2712/',
    github: 'https://github.com/gabrielfreazacosta-arch',
    linkedin: 'https://www.linkedin.com/in/gabriel-vidal-b94013415/',
    location: '',
    cv: { pt: '', en: '', es: '' }
  };

  const PROJECTS = [
    {
      id: 'marcio-cars',
      category: 'systems',
      kind: 'client',
      private: true,
      role: 'fullstack',
      arch: ['Next.js', 'Prisma', 'PostgreSQL'],
      status: 'building',
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma', 'Git e GitHub', 'VS Code'],
      palette: { bg: '#27303a', surface: '#3a4552', accent: '#e0a458', ink: '#f2ede4' },
      cover: 'cars',
      image: '',
      links: { repo: '', live: '' }
    },
    {
      id: 'ls-beauty',
      category: 'systems',
      kind: 'client',
      private: true,
      role: 'fullstack',
      arch: ['Next.js', 'Express', 'Prisma', 'PostgreSQL'],
      status: 'building',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'DataGrip', 'brand-css'],
      palette: { bg: '#f1d9d4', surface: '#fff3f0', accent: '#b76e79', ink: '#4a2a2f' },
      cover: 'shop',
      image: '',
      links: { repo: '', live: '' }
    },
    {
      id: 'navegar',
      category: 'systems',
      kind: 'client',
      private: true,
      role: 'fullstack',
      arch: ['HTML/CSS/JS', 'Node.js', 'Supabase'],
      status: 'publishing',
      stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Supabase', 'Vercel', 'Git e GitHub', 'brand-css', 'i18n'],
      palette: { bg: '#ffffff', surface: '#e3e9f4', accent: '#f97316', ink: '#0f2a52' },
      cover: 'dashboard',
      image: '',
      links: { repo: '', live: '' }
    },
    {
      id: 'ita-du-corte',
      category: 'systems',
      kind: 'client',
      private: true,
      role: 'fullstack',
      arch: ['HTML/CSS/JS', 'Node.js', 'PostgreSQL'],
      status: 'building',
      stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PostgreSQL', 'brand-css'],
      palette: { bg: '#171717', surface: '#2a2a2a', accent: '#fafafa', ink: '#fafafa' },
      cover: 'barber',
      image: '',
      links: { repo: '', live: '' }
    },
    {
      id: 'studio-bsant',
      category: 'sites',
      kind: 'client',
      private: true,
      role: 'front',
      arch: [],
      status: 'functional',
      stack: ['HTML', 'CSS', 'JavaScript', 'VS Code', 'mobile-first'],
      palette: { bg: '#eee4d2', surface: '#fbf7ef', accent: '#6b4f2a', ink: '#3b2f1f' },
      cover: 'site',
      image: '',
      links: { repo: '', live: '' }
    },
    {
      id: 'este-portfolio',
      category: 'sites',
      kind: 'personal',
      private: false,
      role: 'frontdesign',
      arch: [],
      status: 'functional',
      stack: ['HTML', 'CSS', 'JavaScript', 'interactive-ui', 'mobile-first', 'accessibility', 'i18n'],
      palette: { bg: '#1d2a2e', surface: '#2b3d42', accent: '#f0b45a', ink: '#eaf2ee' },
      cover: 'portfolio',
      image: '',
      links: { repo: '', live: '' }
    },
    {
      id: 'ct',
      category: 'tools',
      kind: 'personal',
      private: true,
      role: 'front',
      arch: [],
      status: 'functional',
      stack: ['HTML', 'CSS', 'JavaScript', 'Git e GitHub'],
      palette: { bg: '#0a0f0c', surface: '#16211a', accent: '#22c55e', ink: '#d1fae5' },
      cover: 'calc',
      image: '',
      links: { repo: 'https://github.com/gabrielfreazacosta-arch/CalculaTudo', live: 'https://calculatudo.vercel.app/' }
    },
    {
      id: 'gasto-na-foto',
      category: 'tools',
      kind: 'personal',
      private: true,
      role: 'front',
      arch: [],
      status: 'functional',
      stack: ['HTML', 'CSS', 'JavaScript', 'Puter.js'],
      palette: { bg: '#e7e5e4', surface: '#fafaf9', accent: '#0f766e', ink: '#1c1917' },
      cover: 'receipt',
      image: '',
      links: { repo: 'https://github.com/gabrielfreazacosta-arch/Leitor-de-Comprovantes', live: 'https://gastonafoto.vercel.app/' }
    }
  ];

  const CATEGORY_IDS = ['all', 'systems', 'sites', 'tools'];

  const SKILL_GROUPS = [
    { id: 'front', items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React', 'Next.js', 'TypeScript'] },
    { id: 'back', items: ['Node.js', 'Python', 'Express', 'PostgreSQL', 'Prisma', 'Supabase'] },
    { id: 'tools', items: ['Git e GitHub', 'Vercel', 'VS Code', 'DataGrip', 'Puter.js'] },
    { id: 'design', items: ['mobile-first', 'brand-css', 'interactive-ui', 'accessibility', 'i18n'] }
  ];
  const NON_TECH = new Set(['mobile-first', 'brand-css', 'interactive-ui', 'accessibility', 'i18n']);

  const METHOD_PROOF = [
    ['navegar', 'ita-du-corte', 'ls-beauty'],
    ['studio-bsant'],
    ['ita-du-corte', 'navegar'],
    ['marcio-cars'],
    ['navegar', 'ct', 'gasto-na-foto']
  ];

  const TESTIMONIALS = [
  ];
  const EDUCATION = [
    { title: 'Python', org: 'Curso em Vídeo' },
    { title: 'Missão Programação com IA do ZERO', org: 'DevClub' },
    { title: 'JavaScript', org: 'Curso em Vídeo' },
    { title: { pt: 'HTML5 e CSS3', en: 'HTML5 and CSS3', es: 'HTML5 y CSS3' }, org: 'Curso em Vídeo' },
    { title: { pt: 'Lógica de Programação', en: 'Programming Logic', es: 'Lógica de Programación' }, org: 'Curso em Vídeo' }
  ];

  const LANG_NAMES = { pt: 'Português', en: 'English', es: 'Español' };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const root = document.documentElement;
  const I18N = window.I18N;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const motionOn = () => root.dataset.motion !== 'off';
  const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ESCAPES[char]);
  const isHttps = (value) => typeof value === 'string' && /^https:\/\//i.test(value);
  const byId = (id) => PROJECTS.find((project) => project.id === id);
  const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  function detectLanguage() {
    let saved = null;
    try { saved = localStorage.getItem('portfolio-lang'); } catch (error) { }
    if (I18N.languages.some((l) => l.code === saved)) return saved;
    const prefs = navigator.languages || [navigator.language || 'pt'];
    for (const pref of prefs) {
      const code = String(pref).slice(0, 2).toLowerCase();
      if (I18N.languages.some((l) => l.code === code)) return code;
    }
    return 'pt';
  }

  let lang = detectLanguage();
  const langInfo = () => I18N.languages.find((l) => l.code === lang) || I18N.languages[0];

  function t(key, vars) {
    const dict = I18N.ui[lang] || {};
    let value = dict[key];
    if (value === undefined) value = I18N.ui.pt[key];
    if (value === undefined) return key;
    if (typeof value === 'string' && vars) {
      value = value.replace(/\{(\w+)\}/g, (match, name) => (vars[name] !== undefined ? vars[name] : match));
    }
    return value;
  }
  const tp = (project) => (I18N.projects[lang] && I18N.projects[lang][project.id]) || I18N.projects.pt[project.id];
  const skillLabel = (id) => {
    const key = `skill.${id}`;
    return (I18N.ui[lang] && I18N.ui[lang][key]) || I18N.ui.pt[key] || id;
  };

  const pick = (value) => (value && typeof value === 'object' ? (value[lang] || value.pt || '') : (value || ''));

  function parseLocaleNumber(value) {
    let s = String(value).trim().replace(/\s/g, '');
    if (!s) return NaN;
    const hasComma = s.includes(',');
    const hasDot = s.includes('.');
    if (hasComma && hasDot) {
      const decimal = s.lastIndexOf(',') > s.lastIndexOf('.') ? ',' : '.';
      const thousands = decimal === ',' ? '.' : ',';
      s = s.split(thousands).join('').replace(decimal, '.');
    } else if (hasComma) {
      s = /^\d{1,3}(,\d{3})+$/.test(s) ? s.replace(/,/g, '') : s.replace(',', '.');
    } else if (hasDot && /^\d{1,3}(\.\d{3})+$/.test(s)) {
      s = s.replace(/\./g, '');
    }
    return /^\d*\.?\d+$/.test(s) ? parseFloat(s) : NaN;
  }
  const currencyFormat = () => new Intl.NumberFormat(langInfo().numberLocale, { style: 'currency', currency: 'BRL' });

  let toastTimer = 0;
  function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      return false;
    }
  }

  function goTo(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: motionOn() ? 'smooth' : 'auto' });
  }

  const THEME_KEY = 'portfolio-theme';
  let themeAnimTimer = 0;

  function systemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function savedTheme() {
    try {
      const value = localStorage.getItem(THEME_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch (error) {
      return null;
    }
  }

  function applyTheme(theme, options = {}) {
    if (options.animate && motionOn()) {
      root.classList.add('theme-anim');
      clearTimeout(themeAnimTimer);
      themeAnimTimer = setTimeout(() => root.classList.remove('theme-anim'), 600);
    }
    root.dataset.theme = theme;
    const meta = $('meta[name="theme-color"]');
    if (meta) {
      const bg = getComputedStyle(root).getPropertyValue('--bg').trim();
      if (bg) meta.setAttribute('content', bg);
    }
    if (options.save) {
      try { localStorage.setItem(THEME_KEY, theme); } catch (error) { }
    }
  }

  function toggleTheme() {
    applyTheme(root.dataset.theme === 'light' ? 'dark' : 'light', { animate: true, save: true });
  }

  $('#themeToggle').addEventListener('click', toggleTheme);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (!savedTheme()) applyTheme(systemTheme());
  });

  const rects = (cols, rows, x, y, w, h, gap, rx, cls, accentLastCol = false) => {
    let out = '';
    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        const klass = accentLastCol && c === cols - 1 ? 'a' : cls;
        out += `<rect class="${klass}" x="${x + c * (w + gap)}" y="${y + r * (h + gap)}" width="${w}" height="${h}" rx="${rx}"/>`;
      }
    }
    return out;
  };

  const COVERS = {
    calc: () => `<rect class="s" x="40" y="22" width="240" height="40" rx="8"/><rect class="a" x="196" y="38" width="72" height="8" rx="4"/>${rects(4, 3, 40, 76, 54, 30, 8, 6, 's', true)}`,
    receipt: () => `<rect class="s" x="100" y="14" width="120" height="172" rx="6"/>
      <rect class="l" x="116" y="34" width="88" height="6" rx="3"/><rect class="l" x="116" y="52" width="64" height="6" rx="3"/>
      <rect class="l" x="116" y="70" width="80" height="6" rx="3"/><rect class="l" x="116" y="88" width="56" height="6" rx="3"/>
      <rect class="l" x="116" y="106" width="72" height="6" rx="3"/><rect class="a" x="116" y="140" width="88" height="18" rx="9"/>
      <path class="st" d="M64 44V24h20M236 44V24h-20M64 156v20h20M236 156v20h-20"/>`,
    site: () => `<rect class="s" x="24" y="18" width="272" height="164" rx="12"/><rect class="l" x="40" y="32" width="60" height="8" rx="4"/>
      <circle class="a" cx="160" cy="84" r="26"/><rect class="l" x="112" y="124" width="96" height="6" rx="3"/>
      <rect class="a" x="128" y="142" width="64" height="18" rx="9"/>`,
    barber: () => `<rect class="s" x="24" y="18" width="272" height="164" rx="12"/><circle class="a" cx="160" cy="76" r="30"/>
      <rect class="l" x="112" y="122" width="96" height="6" rx="3"/><rect class="a" x="128" y="142" width="64" height="18" rx="9"/>`,
    dashboard: () => `<rect class="s" x="24" y="20" width="64" height="160" rx="10"/><rect class="a" x="36" y="34" width="40" height="8" rx="4"/>
      <rect class="l" x="36" y="56" width="32" height="6" rx="3"/><rect class="l" x="36" y="72" width="40" height="6" rx="3"/>
      ${[0, 1, 2, 3].map((i) => `<rect class="s" x="100" y="${28 + i * 36}" width="196" height="28" rx="8"/><circle class="a" cx="116" cy="${42 + i * 36}" r="6"/><rect class="l" x="132" y="${39 + i * 36}" width="${90 - i * 8}" height="6" rx="3"/>`).join('')}`,
    shop: () => [0, 1, 2].map((i) => {
      const x = 28 + i * 98;
      return `<rect class="s" x="${x}" y="24" width="88" height="112" rx="10"/><circle class="a" cx="${x + 44}" cy="66" r="18"/><rect class="l" x="${x + 14}" y="98" width="60" height="6" rx="3"/><rect class="a" x="${x + 14}" y="148" width="60" height="18" rx="9"/>`;
    }).join(''),
    cars: () => `<rect class="s" x="28" y="20" width="264" height="24" rx="12"/><rect class="a" x="36" y="26" width="60" height="12" rx="6"/>
      ${[0, 1, 2].map((i) => {
        const x = 28 + i * 90;
        return `<rect class="s" x="${x}" y="58" width="84" height="112" rx="10"/><rect class="i" x="${x + 10}" y="96" width="64" height="20" rx="8"/><rect class="i" x="${x + 22}" y="84" width="38" height="16" rx="6"/><circle class="a" cx="${x + 26}" cy="118" r="6"/><circle class="a" cx="${x + 58}" cy="118" r="6"/><rect class="l" x="${x + 10}" y="138" width="50" height="6" rx="3"/><rect class="l" x="${x + 10}" y="152" width="30" height="6" rx="3"/>`;
      }).join('')}`,
    portfolio: () => `<rect class="s" x="24" y="18" width="272" height="164" rx="12"/><rect class="l" x="40" y="34" width="90" height="8" rx="4"/>
      <rect class="i" x="40" y="54" width="150" height="14" rx="7"/><rect class="a" x="236" y="34" width="44" height="10" rx="5"/>
      <circle class="a" cx="92" cy="128" r="30"/><circle class="i" cx="150" cy="128" r="30"/><circle class="l" cx="208" cy="128" r="30"/>`
  };

  const coverStyle = (p) => `--c-bg:${p.palette.bg};--c-surface:${p.palette.surface};--c-accent:${p.palette.accent};--c-ink:${p.palette.ink}`;
  const coverHtml = (p) => {
    const inner = p.image
      ? `<img src="${esc(p.image)}" alt="${esc(t('dlg.alt', { title: tp(p).title }))}" loading="lazy">`
      : `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${COVERS[p.cover]()}</svg>`;
    const tag = p.image ? '' : `<span class="cover__tag">${esc(t('cover.illustration'))}</span>`;
    return `<span class="cover" style="${coverStyle(p)}">${inner}${tag}</span>`;
  };
  const statusPill = (p) => {
    const tone = p.status === 'building' ? ' pill--live' : (p.status === 'functional' ? ' pill--done' : '');
    return `<span class="pill${tone}">${esc(t(`status.${p.status}`))}</span>`;
  };

  const kindPill = (p) => `<span class="pill">${esc(t(`kind.${p.kind}`))}</span>`;

  const header = $('#siteHeader');
  const menuToggle = $('#menuToggle');
  function setMenu(open) {
    header.dataset.open = String(open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', t(open ? 'menu.close' : 'menu.open'));
  }
  menuToggle.addEventListener('click', () => setMenu(header.dataset.open !== 'true'));
  $$('#siteNav a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (header.dataset.open === 'true') {
      setMenu(false);
      menuToggle.focus();
    }
  });

  const progressBar = $('#progressBar');
  const trails = $$('.trail');
  let ticking = false;

  function updateTrails() {
    const marker = window.innerHeight * 0.62;
    trails.forEach((trail) => {
      const rect = trail.getBoundingClientRect();
      const fill = Math.min(Math.max((marker - rect.top - 8) / Math.max(rect.height - 16, 1), 0), 1);
      trail.style.setProperty('--fill', fill.toFixed(3));
      $$(':scope > li', trail).forEach((item) => {
        const dotY = item.getBoundingClientRect().top + 14;
        item.classList.toggle('is-lit', marker > dotY);
      });
    });
  }

  function onScroll() {
    const max = root.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    progressBar.style.transform = `scaleX(${ratio})`;
    updateTrails();
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  }, { passive: true });

  const navLinks = $$('[data-nav]');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navLinks.forEach((link) => {
    const section = $(link.getAttribute('href'));
    if (section) sectionObserver.observe(section);
  });

  const hero = $('.hero');
  if (finePointer) {
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      hero.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  }

  const typed = {
    el: $('#typed'),
    phraseIndex: 0,
    charIndex: 0,
    deleting: false,
    reset() { this.phraseIndex = 0; this.charIndex = 0; this.deleting = false; },
    tick() {
      const phrases = t('typed');
      if (!motionOn()) {
        this.el.textContent = phrases[0];
        this.reset();
        this.charIndex = phrases[0].length;
        setTimeout(() => this.tick(), 1000);
        return;
      }
      const phrase = phrases[this.phraseIndex % phrases.length];
      this.el.textContent = phrase.slice(0, this.charIndex);
      if (!this.deleting && this.charIndex >= phrase.length) {
        this.deleting = true;
        setTimeout(() => this.tick(), 1800);
        return;
      }
      if (this.deleting && this.charIndex <= 0) {
        this.deleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % phrases.length;
        setTimeout(() => this.tick(), 300);
        return;
      }
      this.charIndex += this.deleting ? -1 : 1;
      setTimeout(() => this.tick(), this.deleting ? 22 : 45);
    }
  };

  function renderBento() {
    const featured = ['marcio-cars', 'navegar', 'ls-beauty'].map(byId).filter(Boolean);
    const techCount = new Set(PROJECTS.flatMap((p) => p.stack).filter((name) => !NON_TECH.has(name))).size;
    const backendCount = PROJECTS.filter((p) => p.category === 'systems').length;
    const tiles = featured.map((p, index) => `
      <button class="tile tile--${index}" type="button" data-open="${esc(p.id)}" aria-label="${esc(t('tile.aria', { title: tp(p).title }))}">
        ${coverHtml(p)}
        <span class="tile__label"><strong>${esc(tp(p).title)}</strong><small>${esc(t(`status.${p.status}`))}</small></span>
      </button>`).join('');
    $('#heroBento').innerHTML = `${tiles}
      <div class="tile tile--stats">
        <div class="stat"><span class="stat__value" data-count="${PROJECTS.length}">${PROJECTS.length}</span><span class="stat__label">${esc(t('stats.projects'))}</span></div>
        <div class="stat"><span class="stat__value" data-count="${backendCount}">${backendCount}</span><span class="stat__label">${esc(t('stats.backend'))}</span></div>
        <div class="stat"><span class="stat__value" data-count="${techCount}">${techCount}</span><span class="stat__label">${esc(t('stats.tech'))}</span></div>
      </div>`;
  }

  function countUp(element) {
    const target = Number(element.dataset.count);
    if (!motionOn()) {
      element.textContent = String(target);
      return;
    }
    const start = performance.now();
    const duration = 1100;
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      element.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(step);
    };
    element.textContent = '0';
    requestAnimationFrame(step);
  }

  const marquee = { track: $('#marqueeTrack'), half: 0, loopW: 0, x: 0, dir: 1, paused: false };
  const marqueeToggle = $('#marqueeToggle');

  function syncMarqueeToggle() {
    marqueeToggle.setAttribute('aria-pressed', String(marquee.paused));
    marqueeToggle.setAttribute('aria-label', t(marquee.paused ? 'marquee.play' : 'marquee.pause'));
  }
  marqueeToggle.addEventListener('click', () => {
    marquee.paused = !marquee.paused;
    syncMarqueeToggle();
  });

  function buildMarquee() {
    const names = SKILL_GROUPS.flatMap((g) => g.items).filter((name) => !NON_TECH.has(name));
    marquee.half = names.length;
    const item = (name, dup) => `<span class="marquee__item"${dup ? ' data-dup' : ''}>${esc(name)}</span>`;
    marquee.track.innerHTML = names.map((n) => item(n, false)).join('') + names.map((n) => item(n, true)).join('');
  }

  const state = { category: 'all', tech: null };
  const grid = $('#projectGrid');
  const filtersEl = $('#categoryFilters');
  const techFilterEl = $('#techFilter');
  const resultCount = $('#resultCount');

  const visibleProjects = () => PROJECTS.filter((p) =>
    (state.category === 'all' || p.category === state.category) &&
    (!state.tech || p.stack.includes(state.tech)));

  function renderFilters() {
    filtersEl.innerHTML = CATEGORY_IDS.map((id) =>
      `<button class="chip" type="button" data-category="${id}" aria-pressed="${state.category === id}">${esc(t(`cat.${id}`))}</button>`).join('');
    techFilterEl.innerHTML = state.tech
      ? `<button class="chip" type="button" data-clear-tech aria-label="${esc(t('projects.techFilterAria', { name: skillLabel(state.tech) }))}">${esc(t('projects.techFilter', { name: skillLabel(state.tech) }))}</button>`
      : '';
  }

  function cardHtml(p, index, total) {
    const tags = p.stack.slice(0, 4).map((tag) => `<li>${esc(skillLabel(tag))}</li>`).join('');
    const text = tp(p);
    return `
      <article class="card" style="--i:${index}">
        ${coverHtml(p)}
        <div class="card__body">
          <div class="card__top">
            <span class="card__pills">${statusPill(p)}${kindPill(p)}</span>
            <span class="card__num" aria-hidden="true">${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</span>
          </div>
          <h3 class="card__title"><button class="card__open" type="button" data-open="${esc(p.id)}">${esc(text.title)}</button></h3>
          <p class="card__summary">${esc(text.summary)}</p>
          <ul class="tags" aria-label="${esc(t('card.tags'))}">${tags}</ul>
        </div>
      </article>`;
  }

  function showSkeleton() {
    grid.setAttribute('aria-busy', 'true');
    grid.classList.remove('is-entering');
    grid.innerHTML = Array.from({ length: 6 }, () => `
      <div class="skeleton" aria-hidden="true">
        <div class="skeleton__block skeleton__cover"></div>
        <div class="skeleton__body">
          <div class="skeleton__block skeleton__line" style="width:30%"></div>
          <div class="skeleton__block skeleton__line" style="width:70%"></div>
          <div class="skeleton__block skeleton__line" style="width:90%"></div>
        </div>
      </div>`).join('');
    resultCount.textContent = t('projects.loading');
  }

  function showError() {
    grid.setAttribute('aria-busy', 'false');
    grid.innerHTML = `
      <div class="state state--error" role="alert">
        <strong>${esc(t('projects.errorTitle'))}</strong>
        ${esc(t('projects.errorText'))}
        <div><button class="btn btn--ghost" type="button" data-retry>${esc(t('projects.errorBtn'))}</button></div>
      </div>`;
    resultCount.textContent = '';
  }

  function renderProjects() {
    try {
      renderFilters();
      const list = visibleProjects();
      grid.setAttribute('aria-busy', 'false');
      if (list.length === 0) {
        grid.classList.remove('is-entering');
        grid.innerHTML = `
          <div class="state">
            <strong>${esc(t('projects.emptyTitle'))}</strong>
            ${esc(t('projects.emptyText'))}
            <div><button class="btn btn--ghost" type="button" data-reset-filters>${esc(t('projects.emptyBtn'))}</button></div>
          </div>`;
        resultCount.textContent = t('projects.none');
        return;
      }
      grid.innerHTML = list.map((p, i) => cardHtml(p, i, list.length)).join('');
      grid.classList.remove('is-entering');
      void grid.offsetWidth;
      if (motionOn()) grid.classList.add('is-entering');
      resultCount.textContent = t('projects.showing', { n: list.length, total: PROJECTS.length });
    } catch (error) {
      console.error('Failed to render projects:', error);
      showError();
    }
  }

  function loadProjects() {
    showSkeleton();
    setTimeout(renderProjects, motionOn() ? 450 : 0);
  }

  filtersEl.addEventListener('click', (event) => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    state.category = button.dataset.category;
    renderProjects();
  });
  techFilterEl.addEventListener('click', (event) => {
    if (!event.target.closest('[data-clear-tech]')) return;
    state.tech = null;
    renderProjects();
  });
  grid.addEventListener('click', (event) => {
    if (event.target.closest('[data-retry]')) loadProjects();
    if (event.target.closest('[data-reset-filters]')) {
      state.category = 'all';
      state.tech = null;
      renderProjects();
    }
  });

  const dialog = $('#projectDialog');
  let lastTrigger = null;
  let currentProjectId = null;

  function dialogHtml(p) {
    const text = tp(p);
    const list = (title, items, cls) => items.length
      ? `<div class="dlg__block"><h3>${esc(title)}</h3><ul class="checklist ${cls}">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`
      : '';
    const block = (title, body) => (body
      ? `<div class="dlg__block"><h3>${esc(title)}</h3><p class="dlg__text">${esc(body)}</p></div>`
      : '');
    const arch = p.arch && p.arch.length
      ? `<div class="dlg__block"><h3>${esc(t('dlg.arch'))}</h3><ol class="arch">${p.arch.map((node, i) => `${i ? '<li class="arch__sep" aria-hidden="true">&rarr;</li>' : ''}<li>${esc(node)}</li>`).join('')}</ol></div>`
      : '';
    const links = [['repo', 'dlg.repo'], ['live', 'dlg.live']]
      .filter(([key]) => isHttps(p.links[key]))
      .map(([key, label]) => `<a class="btn btn--ghost" href="${esc(p.links[key])}" target="_blank" rel="noopener noreferrer">${esc(t(label))}</a>`)
      .join('');
    const needsDemo = p.private && !isHttps(p.links.live);
    const access = needsDemo
      ? `<div class="dlg__access"><button class="btn btn--primary" type="button" data-access="${esc(p.id)}">${ICONS.lock}<span>${esc(t('dlg.access'))}</span></button><p class="dlg__note">${esc(t('dlg.accessNote'))}</p></div>`
      : '';
    return `
      <div class="dlg__cover">
        ${coverHtml(p)}
        <button class="dlg__close" type="button" data-close aria-label="${esc(t('dlg.close'))}">&times;</button>
      </div>
      <div class="dlg__body">
        <div>
          <div class="dlg__head"><h2 id="dialogTitle">${esc(text.title)}</h2>${statusPill(p)}</div>
          <dl class="dlg__meta">
            <div><dt>${esc(t('dlg.metaKind'))}</dt><dd>${esc(t(`kind.${p.kind}`))}</dd></div>
            <div><dt>${esc(t('dlg.metaRole'))}</dt><dd>${esc(t(`role.${p.role}`))}</dd></div>
          </dl>
          ${block(t('dlg.context'), text.story)}
          ${block(t('dlg.challenge'), text.challenge)}
          ${arch}
          ${list(t('dlg.done'), text.done, 'checklist--done')}
          ${list(t('dlg.pending'), text.next, 'checklist--next')}
        </div>
        <div class="dlg__side">
          <div><h3>${esc(t('dlg.stack'))}</h3><ul class="tags">${p.stack.map((s) => `<li>${esc(skillLabel(s))}</li>`).join('')}</ul></div>
          ${access}
          ${links ? `<div class="dlg__links">${links}</div>` : ''}
          <button class="btn btn--ghost" type="button" data-copy-link="${esc(p.id)}">${esc(t('dlg.copyLink'))}</button>
        </div>
      </div>
      <div class="dlg__foot">
        <button class="btn btn--ghost" type="button" data-close>${esc(t('dlg.back'))}</button>
        <button class="btn btn--primary" type="button" data-next-project="${esc(p.id)}">${esc(t('dlg.next'))}</button>
      </div>`;
  }

  const HASH_PREFIX = '#projeto-';
  let dialogPushed = false;
  const baseUrl = () => location.pathname + location.search;

  function openProject(id, trigger) {
    const project = byId(id);
    if (!project) return;
    if (trigger) lastTrigger = trigger;
    currentProjectId = id;
    dialog.innerHTML = dialogHtml(project);
    try {
      if (!dialog.open) {
        if (location.hash.startsWith(HASH_PREFIX)) {
          dialogPushed = false;
          history.replaceState(null, '', baseUrl() + HASH_PREFIX + id);
        } else {
          dialogPushed = true;
          history.pushState(null, '', baseUrl() + HASH_PREFIX + id);
        }
      } else {
        history.replaceState(null, '', baseUrl() + HASH_PREFIX + id);
      }
    } catch (error) {
      dialogPushed = false;
    }
    if (!dialog.open) {
      dialog.showModal();
      root.style.overflow = 'hidden';
    }
    dialog.scrollTop = 0;
  }

  function syncDialogToHash() {
    const hash = location.hash;
    if (hash.startsWith(HASH_PREFIX)) {
      const id = hash.slice(HASH_PREFIX.length);
      if (byId(id) && currentProjectId !== id) openProject(id);
    } else if (dialog.open) {
      if (accessDialog.open) accessDialog.close();
      dialog.close();
    }
  }
  window.addEventListener('hashchange', syncDialogToHash);

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog || event.target.closest('[data-close]')) {
      dialog.close();
      return;
    }
    const accessButton = event.target.closest('[data-access]');
    if (accessButton) {
      openAccess(accessButton.dataset.access);
      return;
    }
    const copyButton = event.target.closest('[data-copy-link]');
    if (copyButton) {
      const url = location.href.split('#')[0] + HASH_PREFIX + copyButton.dataset.copyLink;
      copyText(url).then((ok) => {
        copyButton.textContent = ok ? t('dlg.linkCopied') : url;
        setTimeout(() => { copyButton.textContent = t('dlg.copyLink'); }, 2200);
      });
      return;
    }
    const next = event.target.closest('[data-next-project]');
    if (next) {
      const index = PROJECTS.findIndex((p) => p.id === next.dataset.nextProject);
      openProject(PROJECTS[(index + 1) % PROJECTS.length].id);
    }
  });
  dialog.addEventListener('close', () => {
    root.style.overflow = '';
    currentProjectId = null;
    if (location.hash.startsWith(HASH_PREFIX)) {
      try {
        if (dialogPushed) history.back();
        else history.replaceState(null, '', baseUrl());
      } catch (error) { }
    }
    dialogPushed = false;
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
  });

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-open]');
    if (trigger && !dialog.contains(trigger)) openProject(trigger.dataset.open, trigger);
  });

  const accessDialog = $('#accessDialog');
  let accessProjectId = null;

  function accessHtml(p) {
    const title = tp(p).title;
    const message = t('access.waText', { title });
    const actions = [];
    if (whatsappDigits) {
      actions.push(`<a class="btn btn--primary" href="https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener noreferrer">${esc(t('access.whatsapp'))}</a>`);
    }
    if (emailValue) {
      actions.push(`<a class="btn btn--ghost" href="mailto:${emailValue}?subject=${encodeURIComponent(t('access.mailSubject', { title }))}&body=${encodeURIComponent(message)}">${esc(t('access.email'))}</a>`);
    }
    if (actions.length === 0) {
      actions.push(`<button class="btn btn--primary" type="button" data-access-contact>${esc(t('access.contact'))}</button>`);
    }
    return `
      <div class="access__box">
        <span class="access__icon" aria-hidden="true">${ICONS.lock}</span>
        <h2 id="accessTitle">${esc(t('access.title'))}</h2>
        <p class="access__project">${esc(title)}</p>
        <p>${esc(t(p.kind === 'client' ? 'access.introClient' : 'access.introPersonal'))}</p>
        <p>${esc(t('access.offer'))}</p>
        <div class="access__actions">
          ${actions.join('')}
          <button class="btn btn--text" type="button" data-access-close>${esc(t('access.close'))}</button>
        </div>
      </div>`;
  }

  function openAccess(id) {
    const project = byId(id);
    if (!project) return;
    accessProjectId = id;
    accessDialog.innerHTML = accessHtml(project);
    if (!accessDialog.open) accessDialog.showModal();
  }

  accessDialog.addEventListener('click', (event) => {
    if (event.target === accessDialog || event.target.closest('[data-access-close]')) {
      accessDialog.close();
      return;
    }
    if (event.target.closest('[data-access-contact]')) {
      accessDialog.close();
      dialog.close();
      goTo('contato');
    }
  });
  accessDialog.addEventListener('close', () => { accessProjectId = null; });

  const skillGroupsEl = $('#skillGroups');
  const skillPanel = $('#skillPanel');
  let selectedSkill = null;

  function renderSkills() {
    skillGroupsEl.innerHTML = SKILL_GROUPS.map((group) => `
      <div class="skill-group">
        <h3>${esc(t(`group.${group.id}.title`))}</h3>
        <p>${esc(t(`group.${group.id}.note`))}</p>
        <div class="skill-group__chips">
          ${group.items.map((id) => `<button class="chip" type="button" data-skill="${esc(id)}" aria-pressed="false">${esc(skillLabel(id))}</button>`).join('')}
        </div>
      </div>`).join('');
  }

  function showSkill(id) {
    selectedSkill = id;
    $$('[data-skill]').forEach((chip) => chip.setAttribute('aria-pressed', String(chip.dataset.skill === id)));
    const name = skillLabel(id);
    const used = PROJECTS.filter((p) => p.stack.includes(id));
    if (used.length === 0) {
      skillPanel.innerHTML = `<h3>${esc(name)}</h3><p>${esc(t('skills.none'))}</p>`;
      return;
    }
    const title = used.length === 1 ? t('skills.usedOne', { name }) : t('skills.usedMany', { name, n: used.length });
    skillPanel.innerHTML = `
      <h3>${esc(title)}</h3>
      <div class="skill-panel__list">
        ${used.map((p) => `<button class="chip" type="button" data-open="${esc(p.id)}">${esc(tp(p).title)}</button>`).join('')}
      </div>
      <button class="btn btn--ghost" type="button" data-filter-tech="${esc(id)}">${esc(t('skills.filterBtn'))}</button>`;
  }

  skillGroupsEl.addEventListener('click', (event) => {
    const chip = event.target.closest('[data-skill]');
    if (chip) showSkill(chip.dataset.skill);
  });
  skillPanel.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter-tech]');
    if (!button) return;
    state.tech = button.dataset.filterTech;
    state.category = 'all';
    renderProjects();
    goTo('projetos');
  });

  function renderMethod() {
    $('#methodSteps').innerHTML = METHOD_PROOF.map((proof, index) => `
      <li class="step">
        <h3>${esc(t(`method.${index + 1}.title`))}</h3>
        <p>${esc(t(`method.${index + 1}.text`))}</p>
        <div class="step__proof">
          ${proof.map(byId).filter(Boolean).map((p) => `<button class="chip" type="button" data-open="${esc(p.id)}">${esc(tp(p).title)}</button>`).join('')}
        </div>
      </li>`).join('');
  }

  const tabButtons = $$('[role="tab"]');
  function selectTab(tab) {
    tabButtons.forEach((button) => {
      const selected = button === tab;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      $(`#${button.getAttribute('aria-controls')}`).hidden = !selected;
    });
    tab.focus();
  }
  tabButtons.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      const step = event.key === 'ArrowRight' ? 1 : -1;
      selectTab(tabButtons[(index + step + tabButtons.length) % tabButtons.length]);
    });
  });

  const setInvalid = (input, invalid) => input.setAttribute('aria-invalid', String(invalid));

  function renderBmi() {
    const weightInput = $('#bmiWeight');
    const heightInput = $('#bmiHeight');
    const out = $('#bmiResult');
    const weight = parseLocaleNumber(weightInput.value);
    const heightCm = parseLocaleNumber(heightInput.value);
    const weightOk = Number.isFinite(weight) && weight >= 20 && weight <= 400;
    const heightOk = Number.isFinite(heightCm) && heightCm >= 80 && heightCm <= 250;
    setInvalid(weightInput, !weightOk);
    setInvalid(heightInput, !heightOk);
    if (!weightOk || !heightOk) {
      out.innerHTML = `<p class="result__hint result--error">${esc(t('bmi.error'))}</p>`;
      return;
    }
    const meters = heightCm / 100;
    const bmi = weight / (meters * meters);
    let label = t('bmi.obese');
    if (bmi < 18.5) label = t('bmi.under');
    else if (bmi < 25) label = t('bmi.normal');
    else if (bmi < 30) label = t('bmi.over');
    const position = Math.min(Math.max((bmi - 15) / 25, 0), 1) * 100;
    const shown = bmi.toLocaleString(langInfo().numberLocale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    out.innerHTML = `
      <p class="result__label">${esc(t('bmi.label'))}</p>
      <p class="result__value">${shown}</p>
      <p><strong>${esc(label)}</strong></p>
      <div class="gauge" aria-hidden="true"><span class="gauge__dot" style="left:${position}%"></span></div>
      <p class="result__label">${esc(t('bmi.note'))}</p>`;
  }

  function renderLoan() {
    const amountInput = $('#loanAmount');
    const rateInput = $('#loanRate');
    const monthsInput = $('#loanMonths');
    const out = $('#loanResult');
    const principal = parseLocaleNumber(amountInput.value);
    const rate = parseLocaleNumber(rateInput.value);
    const months = parseLocaleNumber(monthsInput.value);
    const amountOk = Number.isFinite(principal) && principal > 0 && principal <= 100000000;
    const rateOk = Number.isFinite(rate) && rate >= 0 && rate <= 30;
    const monthsOk = Number.isInteger(months) && months >= 1 && months <= 480;
    setInvalid(amountInput, !amountOk);
    setInvalid(rateInput, !rateOk);
    setInvalid(monthsInput, !monthsOk);
    if (!amountOk || !rateOk || !monthsOk) {
      out.innerHTML = `<p class="result__hint result--error">${esc(t('loan.error'))}</p>`;
      return;
    }
    const monthlyRate = rate / 100;
    const payment = monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    const total = payment * months;
    const money = currencyFormat();
    out.innerHTML = `
      <p class="result__label">${esc(t('loan.payment'))}</p>
      <p class="result__value">${money.format(payment)}</p>
      <dl class="result__rows">
        <div><dt>${esc(t('loan.total'))}</dt><dd>${money.format(total)}</dd></div>
        <div><dt>${esc(t('loan.interest'))}</dt><dd>${money.format(total - principal)}</dd></div>
        <div><dt>${esc(t('loan.term'))}</dt><dd>${esc(t('loan.months', { n: months }))}</dd></div>
      </dl>`;
  }

  $('#bmiForm').addEventListener('submit', (event) => { event.preventDefault(); renderBmi(); });
  $('#loanForm').addEventListener('submit', (event) => { event.preventDefault(); renderLoan(); });
  ['#bmiForm', '#loanForm'].forEach((selector) => {
    const form = $(selector);
    form.addEventListener('submit', () => { form.dataset.live = 'true'; }, { once: true });
    form.addEventListener('input', () => {
      if (form.dataset.live !== 'true') return;
      if (selector === '#bmiForm') renderBmi(); else renderLoan();
    });
  });
  function refreshCalculators() {
    if ($('#bmiForm').dataset.live === 'true') renderBmi();
    if ($('#loanForm').dataset.live === 'true') renderLoan();
  }

  const whatsappDigits = /^\d{12,13}$/.test(CONFIG.whatsapp) ? CONFIG.whatsapp : '';
  const emailValue = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email) ? CONFIG.email : '';

  function instagramHandle(url) {
    try {
      const parsed = new URL(url);
      if (!/(^|\.)instagram\.com$/i.test(parsed.hostname)) return '';
      const handle = parsed.pathname.split('/').filter(Boolean)[0];
      return handle ? `@${handle}` : '';
    } catch (error) {
      return '';
    }
  }

  function formatPhone(digits) {
    const match = /^(55)(\d{2})(9?\d{8})$/.exec(digits);
    if (!match) return `+${digits}`;
    const local = match[3];
    const split = local.length === 9 ? 5 : 4;
    return `+${match[1]} ${match[2]} ${local.slice(0, split)}-${local.slice(split)}`;
  }

  const ICONS = {
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9.2 8.4c.1 2.8 2.6 5.3 5.5 5.9l1.1-1.2-1.8-.9-.8.6c-.8-.3-1.6-1.1-1.9-1.9l.6-.8-.9-1.8z" fill="currentColor"/></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="5" y="10.5" width="14" height="9.5" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    cv: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 3.5h7l4 4V20.5H7z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M14 3.5v4h4M9.5 12h5M9.5 15.5h5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="17" cy="7" r="1.1" fill="currentColor"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3.5" y="5.5" width="17" height="13" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M4 8l8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8.5 8l-4 4 4 4M15.5 8l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M5 20c.6-3.6 3.4-5.5 7-5.5s6.4 1.9 7 5.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'
  };

  const validCv = (value) => typeof value === 'string' && /^(https:\/\/\S+|[\w./-]+\.pdf)$/i.test(value.trim());
  function cvUrl() {
    const cv = CONFIG.cv || {};
    if (validCv(cv[lang])) return cv[lang].trim();
    const any = Object.values(cv).find(validCv);
    return any ? any.trim() : '';
  }

  function renderHeroExtras() {
    const url = cvUrl();
    const cvButton = $('#heroCv');
    cvButton.hidden = !url;
    if (url) cvButton.href = url;
    const cvCard = $('#cvCard');
    cvCard.hidden = !url;
    if (url) $('#cvCardLink').href = url;
    const place = typeof CONFIG.location === 'string' ? CONFIG.location.trim() : '';
    const loc = $('#heroLoc');
    loc.hidden = !place;
    $('span', loc).textContent = place;
  }

  function renderTestimonials() {
    const items = TESTIMONIALS.filter((item) => item && pick(item.text));
    $('#depoimentos').hidden = items.length === 0;
    $('#testimonialList').innerHTML = items.map((item) => `
      <li><figure class="testimonial">
        <blockquote><p>${esc(pick(item.text))}</p></blockquote>
        <figcaption><strong>${esc(item.name || '')}</strong><span>${esc(pick(item.role))}</span></figcaption>
      </figure></li>`).join('');
  }

  function renderEducation() {
    const items = EDUCATION.filter((item) => item && pick(item.title));
    $('#education').hidden = items.length === 0;
    $('#educationList').innerHTML = items.map((item) => {
      const period = pick(item.period);
      const org = pick(item.org);
      return `<li><strong>${esc(pick(item.title))}</strong>${org ? `<span class="edu__org">${esc(org)}</span>` : ''}${period ? `<span class="edu__period">${esc(period)}</span>` : ''}</li>`;
    }).join('');
  }

  function updateStructuredData() {
    let tag = $('#ldPerson');
    if (!tag) {
      tag = document.createElement('script');
      tag.type = 'application/ld+json';
      tag.id = 'ldPerson';
      document.head.appendChild(tag);
    }
    const knowsAbout = SKILL_GROUPS.flatMap((g) => g.items).filter((name) => !NON_TECH.has(name));
    tag.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Gabriel Vidal',
      jobTitle: t('meta.role'),
      description: t('meta.desc'),
      knowsAbout,
      sameAs: [CONFIG.instagram, CONFIG.github, CONFIG.linkedin].filter(isHttps)
    });
  }

  function renderSocial() {
    const items = [];
    if (isHttps(CONFIG.linkedin)) items.push({ icon: 'linkedin', name: 'LinkedIn', href: CONFIG.linkedin });
    if (isHttps(CONFIG.github)) items.push({ icon: 'github', name: 'GitHub', href: CONFIG.github });
    if (isHttps(CONFIG.instagram) && instagramHandle(CONFIG.instagram)) items.push({ icon: 'instagram', name: 'Instagram', href: CONFIG.instagram });
    if (whatsappDigits) items.push({ icon: 'whatsapp', name: 'WhatsApp', href: `https://wa.me/${whatsappDigits}` });
    const list = $('#socialLinks');
    list.hidden = items.length === 0;
    list.innerHTML = items.map((item) =>
      `<li><a href="${esc(item.href)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(item.name)}" title="${esc(item.name)}">${ICONS[item.icon]}</a></li>`).join('');
  }

  function renderChannels() {
    const channels = [];
    if (whatsappDigits) {
      channels.push({ icon: 'whatsapp', name: 'WhatsApp', value: formatPhone(whatsappDigits), href: `https://wa.me/${whatsappDigits}`, copy: `+${whatsappDigits}`, primary: true });
    }
    const handle = isHttps(CONFIG.instagram) ? instagramHandle(CONFIG.instagram) : '';
    if (handle) channels.push({ icon: 'instagram', name: 'Instagram', value: handle, href: CONFIG.instagram });
    const resume = cvUrl();
    if (resume) channels.push({ icon: 'cv', name: t('cv.channel'), value: resume.split('/').pop(), href: resume });
    if (emailValue) channels.push({ icon: 'email', name: t('channel.email'), value: emailValue, href: `mailto:${emailValue}`, copy: emailValue });
    if (isHttps(CONFIG.github)) channels.push({ icon: 'github', name: 'GitHub', value: CONFIG.github.replace(/^https:\/\//, ''), href: CONFIG.github });
    if (isHttps(CONFIG.linkedin)) channels.push({ icon: 'linkedin', name: 'LinkedIn', value: CONFIG.linkedin.replace(/^https:\/\/(www\.)?/, ''), href: CONFIG.linkedin });

    const list = $('#channelList');
    if (channels.length === 0) {
      list.innerHTML = `<li class="state"><strong>${esc(t('channel.emptyTitle'))}</strong>${esc(t('channel.emptyText'))}</li>`;
      return;
    }
    list.innerHTML = channels.map((channel) => `
      <li class="channel${channel.primary ? ' channel--primary' : ''}">
        <div class="channel__main">
          <span class="channel__icon">${ICONS[channel.icon]}</span>
          <div class="channel__info"><strong>${esc(channel.name)}</strong><span>${esc(channel.value)}</span></div>
        </div>
        <div class="channel__actions">
          ${channel.copy ? `<button class="chip" type="button" data-copy="${esc(channel.copy)}" aria-label="${esc(t('channel.copyAria', { name: channel.name }))}">${esc(t('channel.copy'))}</button>` : ''}
          <a class="chip" href="${esc(channel.href)}"${channel.download ? ' download' : ' target="_blank" rel="noopener noreferrer"'} aria-label="${esc(t('channel.openAria', { name: channel.name }))}">${esc(t('channel.open'))}</a>
        </div>
      </li>`).join('');
  }

  $('#channelList').addEventListener('click', async (event) => {
    const button = event.target.closest('[data-copy]');
    if (!button) return;
    showToast(t((await copyText(button.dataset.copy)) ? 'toast.copied' : 'toast.copyFail'));
  });

  const contactForm = $('#contactForm');
  const formStatus = $('#formStatus');
  function setStatus(message, isError) {
    formStatus.textContent = message;
    formStatus.classList.toggle('is-error', Boolean(isError));
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = $('#contactName');
    const messageInput = $('#contactMessage');
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    setInvalid(nameInput, !name);
    setInvalid(messageInput, !message);
    if (!name || !message) {
      setStatus(t('contact.fill'), true);
      (!name ? nameInput : messageInput).focus();
      return;
    }
    const text = t('contact.text', { name, message });
    if (whatsappDigits) {
      window.open(`https://wa.me/${whatsappDigits}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      setStatus(t('contact.openingWa'), false);
    } else if (emailValue) {
      window.location.href = `mailto:${emailValue}?subject=${encodeURIComponent(t('contact.mailSubject'))}&body=${encodeURIComponent(text)}`;
      setStatus(t('contact.openingMail'), false);
    } else {
      setStatus(t('contact.noChannel'), true);
    }
  });

  function autoReveal() {
    const groups = [
      '.section__head p', '.about__main > p', '.facts > div', '.about__side > h3', '.timeline > li',
      '.skill-group', '.skill-panel', '.method__intro p', '.step', '.lab__intro p', '.lab__panel',
      '.contact__main > p', '.contact__main form', '.contact__side > *', '.channel'
    ];
    groups.forEach((selector) => {
      $$(selector).forEach((element, index) => {
        element.setAttribute('data-reveal', '');
        element.style.setProperty('--d', `${(index % 5) * 70}ms`);
      });
    });
  }

  function observeReveals() {
    const targets = $$('[data-reveal], [data-split]');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-in'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    targets.forEach((target) => observer.observe(target));

    const stats = $('.tile--stats');
    if (stats) {
      const countObserver = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        $$('[data-count]', stats).forEach(countUp);
        countObserver.disconnect();
      }, { threshold: 0.4 });
      countObserver.observe(stats);
    }
  }

  function bindTilt(container, selector) {
    if (!finePointer || !container) return;
    const reset = (element) => {
      ['--rx', '--ry'].forEach((prop) => element.style.removeProperty(prop));
    };
    container.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse') return;
      const element = event.target.closest(selector);
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      element.style.setProperty('--px', `${(px * 100).toFixed(1)}%`);
      element.style.setProperty('--py', `${(py * 100).toFixed(1)}%`);
      if (motionOn()) {
        element.style.setProperty('--rx', `${((0.5 - py) * 7).toFixed(2)}deg`);
        element.style.setProperty('--ry', `${((px - 0.5) * 9).toFixed(2)}deg`);
      }
    });
    container.addEventListener('pointerout', (event) => {
      const element = event.target.closest(selector);
      if (element && !element.contains(event.relatedTarget)) reset(element);
    });
  }

  const cursorEl = $('#cursor');
  const cursorLabel = $('#cursorLabel');
  const pointer = { x: window.innerWidth * 0.7, y: window.innerHeight * 0.3 };

  if (finePointer) {
    root.classList.add('has-cursor');
    window.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse') return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      cursorEl.classList.add('is-visible');
    }, { passive: true });
    document.addEventListener('pointerover', (event) => {
      const card = event.target.closest('.card, button.tile');
      const interactive = event.target.closest('a, button, [role="tab"], input, textarea, label, [data-open]');
      cursorEl.classList.toggle('is-hover', Boolean(card || interactive));
      cursorLabel.textContent = card ? t('cursor.open') : '';
    });
    root.addEventListener('mouseleave', () => cursorEl.classList.remove('is-visible'));
  }

  const blobA = $('#blobA');
  const blobB = $('#blobB');
  const blobPos = { x: pointer.x, y: pointer.y };
  const ring = { x: pointer.x, y: pointer.y };
  let blobSize = 0;
  let lastTime = 0;
  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;
  let looping = false;

  function measure() {
    blobSize = blobA.offsetWidth;
    const duplicate = marquee.track.children[marquee.half];
    marquee.loopW = duplicate ? duplicate.offsetLeft : 0;
  }

  function loop(now) {
    if (!motionOn() || document.hidden) {
      looping = false;
      return;
    }
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    const y = window.scrollY;
    scrollVelocity += ((y - lastScrollY) - scrollVelocity) * 0.12;
    lastScrollY = y;

    const max = Math.max(root.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max(y / max, 0), 1);
    const half = blobSize / 2;

    blobPos.x += (pointer.x - blobPos.x) * 0.035;
    blobPos.y += (pointer.y - blobPos.y) * 0.035;
    blobA.style.transform = `translate3d(${blobPos.x - half}px, ${blobPos.y - half}px, 0)`;
    const bx = window.innerWidth * (0.15 + 0.7 * progress);
    const by = window.innerHeight * (0.62 - 0.3 * Math.sin(progress * Math.PI * 2));
    blobB.style.transform = `translate3d(${bx - half}px, ${by - half}px, 0)`;

    if (finePointer) {
      ring.x += (pointer.x - ring.x) * 0.2;
      ring.y += (pointer.y - ring.y) * 0.2;
      cursorEl.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
    }

    if (marquee.loopW > 0 && !marquee.paused) {
      if (scrollVelocity > 2) marquee.dir = 1;
      else if (scrollVelocity < -2) marquee.dir = -1;
      const speed = 36 + Math.min(Math.abs(scrollVelocity) * 45, 900);
      marquee.x = (marquee.x + marquee.dir * speed * dt) % marquee.loopW;
      if (marquee.x < 0) marquee.x += marquee.loopW;
      marquee.track.style.transform = `translate3d(${-marquee.x}px, 0, 0)`;
    }
    requestAnimationFrame(loop);
  }

  function ensureLoop() {
    if (looping || !motionOn() || document.hidden) return;
    looping = true;
    lastTime = performance.now();
    requestAnimationFrame(loop);
  }
  document.addEventListener('visibilitychange', ensureLoop);
  window.addEventListener('resize', measure);

  const cmdk = $('#cmdk');
  const cmdkInput = $('#cmdkInput');
  const cmdkList = $('#cmdkList');
  let COMMANDS = [];
  let cmdkItems = [];
  let cmdkActive = 0;
  let cmdkReturnFocus = null;

  const isMac = /Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent);
  $('#cmdkHint').textContent = isMac ? '⌘ K' : 'Ctrl K';

  function buildCommands() {
    const commands = [];
    [['sobre', 'nav.about'], ['projetos', 'nav.projects'], ['conhecimentos', 'nav.skills'], ['metodo', 'nav.method'], ['experimente', 'nav.lab'], ['contato', 'nav.contact']]
      .forEach(([id, key]) => commands.push({ group: t('cmdk.groupGo'), label: t(key), run: () => goTo(id) }));
    PROJECTS.forEach((p) => commands.push({ group: t('cmdk.groupProject'), label: tp(p).title, run: () => openProject(p.id) }));
    commands.push({ group: t('cmdk.groupDesign'), label: t('cmd.theme'), run: toggleTheme });
    I18N.languages.forEach((l) => commands.push({
      group: t('cmdk.groupLang'),
      label: LANG_NAMES[l.code] || l.code,
      run: () => setLanguage(l.code)
    }));
    return commands;
  }

  function renderCmdk() {
    if (cmdkItems.length === 0) {
      cmdkList.innerHTML = `<li class="cmdk__empty" role="presentation">${esc(t('cmdk.empty'))}</li>`;
      cmdkInput.removeAttribute('aria-activedescendant');
      return;
    }
    cmdkList.innerHTML = cmdkItems.map((cmd, index) =>
      `<li id="cmdk-opt-${index}" role="option" aria-selected="${index === cmdkActive}" data-index="${index}"><span>${esc(cmd.label)}</span><small>${esc(cmd.group)}</small></li>`).join('');
    cmdkInput.setAttribute('aria-activedescendant', `cmdk-opt-${cmdkActive}`);
    const active = $(`#cmdk-opt-${cmdkActive}`);
    if (active) active.scrollIntoView({ block: 'nearest' });
  }

  function filterCmdk() {
    const query = normalize(cmdkInput.value.trim());
    cmdkItems = COMMANDS.filter((cmd) => !query || normalize(`${cmd.group} ${cmd.label}`).includes(query));
    cmdkActive = 0;
    renderCmdk();
  }

  function openCmdk() {
    if (cmdk.open || document.querySelector('dialog[open]')) return;
    cmdkReturnFocus = document.activeElement;
    cmdkInput.value = '';
    filterCmdk();
    cmdk.showModal();
    cmdkInput.focus();
  }

  function runCmdk(index) {
    const cmd = cmdkItems[index];
    if (!cmd) return;
    cmdk.close();
    setTimeout(() => cmd.run(), 0);
  }

  $('#cmdkOpen').addEventListener('click', openCmdk);
  cmdkInput.addEventListener('input', filterCmdk);
  cmdkInput.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (cmdkItems.length === 0) return;
      const step = event.key === 'ArrowDown' ? 1 : -1;
      cmdkActive = (cmdkActive + step + cmdkItems.length) % cmdkItems.length;
      renderCmdk();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      runCmdk(cmdkActive);
    }
  });
  cmdkList.addEventListener('click', (event) => {
    const option = event.target.closest('[data-index]');
    if (option) runCmdk(Number(option.dataset.index));
  });
  cmdk.addEventListener('click', (event) => { if (event.target === cmdk) cmdk.close(); });
  cmdk.addEventListener('close', () => {
    if (cmdkReturnFocus && document.contains(cmdkReturnFocus) && !dialog.open) cmdkReturnFocus.focus();
  });

  document.addEventListener('keydown', (event) => {
    const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName);
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      openCmdk();
    } else if (event.key === '/' && !typing) {
      event.preventDefault();
      openCmdk();
    }
  });

  function setSplitText(element, text) {
    element.setAttribute('aria-label', text);
    element.innerHTML = text.split(/\s+/)
      .map((word, index) => `<span class="w" aria-hidden="true" style="--wi:${index}"><span>${esc(word)}</span></span>`)
      .join(' ');
  }

  function translateStatic() {
    $$('[data-i18n]').forEach((element) => {
      const text = t(element.dataset.i18n);
      if (element.hasAttribute('data-split')) {
        const wasRevealed = element.classList.contains('is-in');
        setSplitText(element, text);
        if (wasRevealed) {
          element.classList.remove('is-in');
          void element.offsetWidth;
          requestAnimationFrame(() => element.classList.add('is-in'));
        }
      } else {
        element.textContent = text;
      }
    });
    $$('[data-i18n-attr]').forEach((element) => {
      element.dataset.i18nAttr.split(',').forEach((pair) => {
        const [attr, key] = pair.split(':');
        if (attr && key) element.setAttribute(attr.trim(), t(key.trim()));
      });
    });
    $('#cmdkInput').setAttribute('aria-label', t('cmdk.placeholder'));
    document.title = t('meta.title');
    const description = $('meta[name="description"]');
    if (description) description.setAttribute('content', t('meta.desc'));
    const ogTitle = $('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('meta.title'));
    const ogDescription = $('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', t('meta.ogDesc'));
    $('#footerText').textContent = t('footer.text', { year: new Date().getFullYear() });
    updateStructuredData();
  }

  function renderDynamic() {
    renderBento();
    renderSkills();
    if (selectedSkill) showSkill(selectedSkill);
    renderMethod();
    renderChannels();
    renderSocial();
    renderHeroExtras();
    renderTestimonials();
    renderEducation();
    syncMarqueeToggle();
    COMMANDS = buildCommands();
  }

  function setLanguage(next, initial = false) {
    if (!I18N.languages.some((l) => l.code === next)) next = 'pt';
    lang = next;
    try { localStorage.setItem('portfolio-lang', lang); } catch (error) { }
    root.lang = langInfo().htmlLang;
    translateStatic();
    setMenu(header.dataset.open === 'true');
    $$('[data-lang]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    renderDynamic();
    typed.reset();
    if (initial) return;

    if (grid.getAttribute('aria-busy') !== 'true') renderProjects();
    if (dialog.open && currentProjectId) dialog.innerHTML = dialogHtml(byId(currentProjectId));
    if (accessDialog.open && accessProjectId) accessDialog.innerHTML = accessHtml(byId(accessProjectId));
    refreshCalculators();
    setStatus('', false);
    if (cmdk.open) filterCmdk();
    onScroll();
  }

  $('#langSwitch').addEventListener('click', (event) => {
    const button = event.target.closest('[data-lang]');
    if (button && button.dataset.lang !== lang) setLanguage(button.dataset.lang);
  });

  buildMarquee();
  setLanguage(lang, true);
  applyTheme(savedTheme() || systemTheme());
  renderFilters();
  loadProjects();
  autoReveal();
  observeReveals();
  bindTilt(grid, '.card');
  bindTilt($('#heroBento'), 'button.tile');
  typed.tick();
  syncDialogToHash();
  measure();
  onScroll();
  ensureLoop();
  window.addEventListener('load', measure);
})();