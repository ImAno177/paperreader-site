let initialized = false;

export async function initFieldNotesMotion() {
  if (initialized || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  initialized = true;

  try {
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]);

    gsap.registerPlugin(ScrollTrigger);

    const motion = gsap.matchMedia();
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      ScrollTrigger.batch('[data-reveal]', {
        batchMax: 8,
        interval: 0.08,
        start: 'top 88%',
        once: true,
        onEnter: (elements) => {
          gsap.fromTo(elements, { opacity: 0, y: 12 }, {
            opacity: 1,
            y: 0,
            duration: 0.42,
            stagger: 0.055,
            ease: 'power1.out',
            overwrite: 'auto',
          });
        },
      });

      gsap.utils.toArray('[data-scale-image]').forEach((image) => {
        gsap.fromTo(
          image,
          { opacity: 0.72, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top 92%',
              end: 'bottom 18%',
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          },
        );
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh, { once: true });
    document.fonts?.ready.then(refresh);
  } catch {
    // CSS keeps every section readable when the optional motion bundle is unavailable.
  }
}
