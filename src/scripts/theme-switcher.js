const STORAGE_KEY = 'paperreader-theme';
const THEME_ORDER = ['light', 'dark'];
const THEMES = {
  light: { label: 'Light', themeColor: '#efece4' },
  dark: { label: 'Dark', themeColor: '#101010' },
};

let initialized = false;
let transitionBusy = false;

function isTheme(value) {
  return typeof value === 'string' && THEME_ORDER.includes(value);
}

function readStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isTheme(stored) ? stored : 'light';
  } catch {
    return 'light';
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // A blocked or full storage area should not prevent the theme from changing.
  }
}

function updateMetaThemeColor(theme) {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEMES[theme].themeColor);
}

function updateControls(theme) {
  const label = THEMES[theme].label;

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    const labelNode = button.querySelector('.theme-toggle-label');
    if (labelNode) labelNode.textContent = `Theme: ${label}`;
    button.setAttribute('aria-label', `Theme: ${label}. Activate to switch.`);
    button.setAttribute('title', `Theme: ${label}. Activate to switch.`);
    button.setAttribute('data-current-theme', theme);
  });
}

function updateThemeImages(theme) {
  document.querySelectorAll('[data-theme-image]').forEach((image) => {
    const source = image.getAttribute(`data-${theme}-src`);
    const alt = image.getAttribute(`data-${theme}-alt`);

    if (source && image.getAttribute('src') !== source) {
      image.setAttribute('src', source);
    }
    if (alt) image.setAttribute('alt', alt);
  });

  document.querySelectorAll('[data-theme-detail]').forEach((detail) => {
    const copy = detail.getAttribute(`data-${theme}-detail`);
    if (copy) detail.textContent = copy;
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  updateMetaThemeColor(theme);
  updateThemeImages(theme);
  updateControls(theme);
  storeTheme(theme);
}

function getRevealOrigin(button) {
  const rect = button?.getBoundingClientRect();
  if (!rect) return { x: innerWidth / 2, y: innerHeight / 2 };
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

function revealTheme(theme, button) {
  const root = document.documentElement;
  const update = () => applyTheme(theme);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || typeof document.startViewTransition !== 'function') {
    update();
    transitionBusy = false;
    return;
  }

  const { x, y } = getRevealOrigin(button);
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  root.style.setProperty('--theme-x', `${Math.round(x)}px`);
  root.style.setProperty('--theme-y', `${Math.round(y)}px`);
  root.style.setProperty('--theme-radius', `${Math.ceil(endRadius)}px`);

  const cleanup = () => {
    root.style.removeProperty('--theme-x');
    root.style.removeProperty('--theme-y');
    root.style.removeProperty('--theme-radius');
    transitionBusy = false;
  };

  let transition;
  try {
    transition = document.startViewTransition(update);
  } catch {
    update();
    cleanup();
    return;
  }

  transition.ready.catch(() => {
    cleanup();
  });
  window.setTimeout(cleanup, 900);
}

function nextTheme(current) {
  const index = THEME_ORDER.indexOf(current);
  return THEME_ORDER[(index + 1) % THEME_ORDER.length];
}

export function initThemeSwitcher() {
  if (initialized || typeof document === 'undefined') return;
  initialized = true;

  const storedTheme = readStoredTheme();
  applyTheme(
    isTheme(document.documentElement.dataset.theme) ? document.documentElement.dataset.theme : storedTheme,
  );

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      if (transitionBusy) return;
      transitionBusy = true;
      const current = isTheme(document.documentElement.dataset.theme)
        ? document.documentElement.dataset.theme
        : 'light';
      revealTheme(nextTheme(current), button);
    });
  });
}
