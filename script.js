function revealEverything() {
  document
    .querySelectorAll(
      "section, h1, h2, h3, p, span, a, li, .stat-card, .skill-category, " +
      ".project-card, .achievement-card, .about-block, .skill-list span, " +
      ".project-tech span, .focus-list li"
    )
    .forEach((el) => {
      const style = window.getComputedStyle(el);
      if (parseFloat(style.opacity) < 1) {
        el.style.opacity = "1";
        el.style.transform = "none";
      }
    });
}

window.addEventListener("load", () => {
  setTimeout(revealEverything, 2500);
});
setTimeout(revealEverything, 5000);

try {
  if (typeof gsap === "undefined") {
    throw new Error("GSAP failed to load — falling back to static visible content.");
  }

  gsap.registerPlugin(ScrollTrigger);

  const navbar = document.querySelector(".navbar");
  const hero = document.querySelector(".hero");
  const heroTitle = document.querySelector(".hero h1");
  const heroTagline = document.querySelector(".hero-tagline");
  const heroDescription = document.querySelector(".description");
  const heroButtons = document.querySelector(".hero-buttons");
  const heroImage = document.querySelector(".hero-image");
  const status = document.querySelector(".status");
  const intro = document.querySelector(".intro");
  const hello = document.querySelector(".hello");
  const scrollIndicator = document.querySelector(".scroll-indicator");
  const circles = document.querySelectorAll(".circle");

  const heroTimeline = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 1
    }
  });

  heroTimeline
    .from(navbar, { y: -100, opacity: 0 })
    .from(hello, { y: 40, opacity: 0 }, "-=.5")
    .from(status, { y: 40, opacity: 0 }, "-=.7")
    .from(intro, { y: 30, opacity: 0 }, "-=.7")
    .from(heroTitle, { y: 120, opacity: 0 }, "-=.6")
    .from(heroTagline, { y: 30, opacity: 0 }, "-=.7")
    .from(heroDescription, { y: 40, opacity: 0 }, "-=.8")
    .from(heroButtons, { y: 40, opacity: 0 }, "-=.8")
    .from(heroImage, { scale: 0.88, opacity: 0, rotate: 2 }, "-=1")
    .from(scrollIndicator, { opacity: 0, y: 20 }, "-=.6")
    .eventCallback("onComplete", () => {
      [navbar, hello, status, intro, heroTitle, heroTagline, heroDescription, heroButtons, heroImage, scrollIndicator]
        .filter(Boolean)
        .forEach((el) => gsap.set(el, { clearProps: "opacity,transform" }));
    });

  circles.forEach((circle, index) => {
    gsap.to(circle, {
      y: index % 2 === 0 ? -25 : 25,
      x: index === 1 ? 15 : -15,
      duration: 4 + index,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });

  if (scrollIndicator) {
    gsap.to(scrollIndicator, {
      y: 12,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }

  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const current = window.pageYOffset;
    if (!navbar) return;
    if (current > lastScroll && current > 120) {
      gsap.to(navbar, { y: -120, duration: 0.35, ease: "power2.out" });
    } else {
      gsap.to(navbar, { y: 0, duration: 0.35, ease: "power2.out" });
    }
    lastScroll = current;
  });

  const aboutSection = document.querySelector(".about");
  const aboutHeading = document.querySelector(".about-heading");
  const aboutDescription = document.querySelector(".about-description");
  const aboutDivider = document.querySelector(".about-divider");
  const aboutBlocks = gsap.utils.toArray(".about-block");
  const statCards = gsap.utils.toArray(".stat-card");
  const aboutBackground = document.querySelector(".about-bg-text");

  if (aboutHeading) {
    gsap.from(aboutHeading, {
      scrollTrigger: { trigger: aboutSection, start: "top 85%", once: true },
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }
  if (aboutDescription) {
    gsap.from(aboutDescription, {
      scrollTrigger: { trigger: aboutDescription, start: "top 90%", once: true },
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out"
    });
  }
  if (aboutDivider) {
    gsap.from(aboutDivider, {
      scrollTrigger: { trigger: aboutDivider, start: "top 90%", once: true },
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.2,
      ease: "power2.out"
    });
  }
  if (aboutBlocks.length) {
    gsap.from(aboutBlocks, {
      scrollTrigger: { trigger: ".about-grid", start: "top 85%", once: true },
      y: 70,
      opacity: 0,
      duration: 0.9,
      stagger: 0.22,
      ease: "power3.out"
    });
  }
  if (statCards.length) {
    gsap.from(statCards, {
      scrollTrigger: { trigger: ".stats-grid", start: "top 88%", once: true },
      y: 60,
      opacity: 0,
      scale: 0.9,
      stagger: 0.12,
      duration: 0.8,
      ease: "back.out(1.4)"
    });
  }
  if (aboutBackground) {
    gsap.to(aboutBackground, {
      y: 180,
      ease: "none",
      scrollTrigger: {
        trigger: aboutSection,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  }

  aboutBlocks.forEach((block) => {
    block.addEventListener("mouseenter", () => {
      gsap.to(block, { y: -8, duration: 0.3, ease: "power2.out" });
    });
    block.addEventListener("mouseleave", () => {
      gsap.to(block, { y: 0, duration: 0.3, ease: "power2.out" });
    });
  });

  statCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -10, scale: 1.03, duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
    });
  });

  gsap.utils.toArray("section:not(.hero)").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 60,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        once: true
      },
      onComplete: () => gsap.set(section, { clearProps: "opacity,transform" })
    });
  });

  const projectCards = gsap.utils.toArray(".project-card");
  const projectImages = gsap.utils.toArray(".project-image");
  const skillCategories = gsap.utils.toArray(".skill-category");
  const skillPills = gsap.utils.toArray(".skill-list span");

  if (projectCards.length) {
    gsap.from(projectCards, {
      scrollTrigger: { trigger: ".projects-wrapper", start: "top 85%", once: true },
      opacity: 0,
      y: 120,
      duration: 1,
      stagger: 0.25,
      ease: "power3.out"
    });
  }

  projectCards.forEach((card) => {
    const image = card.querySelector(".project-image");
    const title = card.querySelector(".project-title");
    const tech = card.querySelectorAll(".project-tech span");
    const buttons = card.querySelectorAll(".project-btn");
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -12, duration: 0.35, ease: "power2.out" });
      if (image) gsap.to(image, { scale: 1.03, duration: 0.5, ease: "power2.out" });
      if (title) gsap.to(title, { x: 8, duration: 0.35, ease: "power2.out" });
      gsap.to(tech, { y: -3, stagger: 0.03, duration: 0.25 });
      gsap.to(buttons, { y: -2, stagger: 0.05, duration: 0.25 });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.35, ease: "power2.out" });
      if (image) gsap.to(image, { scale: 1, duration: 0.5 });
      if (title) gsap.to(title, { x: 0, duration: 0.35 });
      gsap.to(tech, { y: 0, stagger: 0.02, duration: 0.2 });
      gsap.to(buttons, { y: 0, stagger: 0.02, duration: 0.2 });
    });
  });

  projectImages.forEach((image) => {
    gsap.from(image, {
      scrollTrigger: { trigger: image, start: "top 92%", once: true },
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  });

  if (skillCategories.length) {
    gsap.from(skillCategories, {
      scrollTrigger: { trigger: ".skills-wrapper", start: "top 85%", once: true },
      opacity: 0,
      y: 90,
      stagger: 0.18,
      duration: 0.9,
      ease: "power3.out"
    });
  }
  if (skillPills.length) {
    gsap.from(skillPills, {
      scrollTrigger: { trigger: ".skills-wrapper", start: "top 82%", once: true },
      opacity: 0,
      scale: 0.8,
      y: 20,
      stagger: 0.03,
      duration: 0.45,
      ease: "back.out(1.8)"
    });
  }

  skillCategories.forEach((category) => {
    category.addEventListener("mouseenter", () => {
      gsap.to(category, { y: -10, duration: 0.35, ease: "power2.out" });
    });
    category.addEventListener("mouseleave", () => {
      gsap.to(category, { y: 0, duration: 0.35, ease: "power2.out" });
    });
  });

  gsap.to(".projects", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: ".projects",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });
  gsap.to(".skills", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: ".skills",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });

  const contactSection = document.querySelector(".contact");
  const contactHeading = document.querySelector(".contact-heading");
  const contactText = document.querySelector(".contact-text");
  const contactButtons = document.querySelector(".contact-buttons");
  const footer = document.querySelector(".footer");
  const navLinks = document.querySelectorAll(".nav-links a");
  const magneticButtons = document.querySelectorAll(
    ".primary-btn,.secondary-btn,.project-btn,.nav-btn"
  );

  if (contactHeading || contactText || contactButtons) {
    gsap.from([contactHeading, contactText, contactButtons].filter(Boolean), {
      scrollTrigger: { trigger: contactSection, start: "top 85%", once: true },
      y: 70,
      opacity: 0,
      stagger: 0.18,
      duration: 0.9,
      ease: "power3.out"
    });
  }
  if (footer) {
    gsap.from(footer, {
      scrollTrigger: { trigger: footer, start: "top 95%", once: true },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }

  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => setActive(section.id),
      onEnterBack: () => setActive(section.id)
    });
  });

  function setActive(id) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + id) {
        link.classList.add("active");
      }
    });
  }

  magneticButtons.forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(button, { x: x * 0.18, y: y * 0.18, duration: 0.3, ease: "power2.out" });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(button, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1,.4)" });
    });
  });

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });
  }
  setTimeout(() => ScrollTrigger.refresh(), 1000);
  setTimeout(() => ScrollTrigger.refresh(), 3000);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    });
  });

  ScrollTrigger.refresh();
} catch (err) {
  console.error("Animation setup failed, showing static content instead:", err);
  revealEverything();
}
