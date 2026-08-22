let initialized = false;

export async function initFieldNotesMotion() {
  if (initialized || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  initialized = true;

  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ]);

  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('[data-scale-image]').forEach((image) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: image,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: 0.8,
      },
    });

    timeline
      .fromTo(image, { opacity: 0.28, scale: 0.86 }, { opacity: 1, scale: 1, duration: 0.45, ease: 'none' })
      .to(image, { opacity: 0.24, scale: 0.94, duration: 0.55, ease: 'none' });
  });

  document.querySelectorAll('[data-scrub-text]').forEach((block) => {
    const words = block.querySelectorAll('.reveal-word');

    gsap.set(words, { opacity: 0.18 });
    gsap.to(words, {
      opacity: 1,
      ease: 'none',
      stagger: 0.08,
      scrollTrigger: {
        trigger: block,
        start: 'top 86%',
        end: 'bottom 44%',
        scrub: 1,
      },
    });
  });

  document.querySelectorAll('[data-reveal]').forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  });

  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}
