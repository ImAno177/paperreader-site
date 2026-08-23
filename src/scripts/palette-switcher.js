const STORAGE_KEY = 'paperreader-palette';
const PALETTE_ORDER = ['sun', 'mint', 'violet'];
const PALETTES = {
  sun: { label: 'Sun', themeColor: '#101010' },
  mint: { label: 'Mint', themeColor: '#12221a' },
  violet: { label: 'Violet', themeColor: '#1a1522' },
};

let initialized = false;
let transitionBusy = false;

function isPalette(value) {
  return typeof value === 'string' && PALETTE_ORDER.includes(value);
}

function readStoredPalette() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isPalette(stored) ? stored : 'sun';
  } catch {
    return 'sun';
  }
}

function storePalette(palette) {
  try {
    localStorage.setItem(STORAGE_KEY, palette);
  } catch {
    // A blocked or full storage area should not prevent the palette from changing.
  }
}

function updateMetaThemeColor(palette) {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', PALETTES[palette].themeColor);
}

function updateControls(palette) {
  const label = PALETTES[palette].label;

  document.querySelectorAll('[data-palette-toggle]').forEach((button) => {
    const labelNode = button.querySelector('.palette-toggle-label');
    if (labelNode) labelNode.textContent = `Color: ${label}`;
    button.setAttribute('aria-label', `Change color palette (currently ${label})`);
    button.setAttribute('title', `Color palette: ${label}. Activate to switch.`);
    button.setAttribute('data-current-palette', palette);
  });
}

function ensureMobileDocsControl() {
  if (!location.pathname.includes('/docs/') || innerWidth > 620 || !document.body) return;
  if (document.querySelector('.docs-mobile-palette')) return;

  const button = document.createElement('button');
  button.className = 'palette-toggle docs-mobile-palette';
  button.type = 'button';
  button.dataset.paletteToggle = '';
  button.setAttribute('aria-label', 'Change color palette');
  button.title = 'Change color palette';
  button.innerHTML = '<span class="palette-swatch" aria-hidden="true"><span></span><span></span><span></span></span><span class="palette-toggle-label">Color</span>';
  document.body.append(button);
}

function applyPalette(palette) {
  document.documentElement.dataset.palette = palette;
  updateMetaThemeColor(palette);
  updateControls(palette);
  storePalette(palette);
}

function getRevealOrigin(button) {
  const rect = button?.getBoundingClientRect();
  if (!rect) return { x: innerWidth / 2, y: innerHeight / 2 };
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

function revealPalette(palette, button) {
  const root = document.documentElement;
  const update = () => applyPalette(palette);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || typeof document.startViewTransition !== 'function') {
    update();
    transitionBusy = false;
    return;
  }

  const { x, y } = getRevealOrigin(button);
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  root.style.setProperty('--palette-x', `${Math.round(x)}px`);
  root.style.setProperty('--palette-y', `${Math.round(y)}px`);
  root.style.setProperty('--palette-radius', `${Math.ceil(endRadius)}px`);

  let transition;
  try {
    transition = document.startViewTransition(update);
  } catch {
    update();
    transitionBusy = false;
    return;
  }

  transition.ready
    .then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0 at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 820,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    })
    .catch(() => {
      // The DOM update has already happened; only the optional reveal was skipped.
    });

  transition.finished.then(
    () => {
      root.style.removeProperty('--palette-x');
      root.style.removeProperty('--palette-y');
      root.style.removeProperty('--palette-radius');
      transitionBusy = false;
    },
    () => {
      root.style.removeProperty('--palette-x');
      root.style.removeProperty('--palette-y');
      root.style.removeProperty('--palette-radius');
      transitionBusy = false;
    },
  );
}

function nextPalette(current) {
  const index = PALETTE_ORDER.indexOf(current);
  return PALETTE_ORDER[(index + 1) % PALETTE_ORDER.length];
}

export function initPaletteSwitcher() {
  if (initialized || typeof document === 'undefined') return;
  initialized = true;

  ensureMobileDocsControl();
  addEventListener('resize', ensureMobileDocsControl, { passive: true });

  const storedPalette = readStoredPalette();
  applyPalette(isPalette(document.documentElement.dataset.palette) ? document.documentElement.dataset.palette : storedPalette);

  document.querySelectorAll('[data-palette-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      if (transitionBusy) return;
      transitionBusy = true;
      const current = isPalette(document.documentElement.dataset.palette)
        ? document.documentElement.dataset.palette
        : 'sun';
      revealPalette(nextPalette(current), button);
    });
  });
}
