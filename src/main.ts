import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { initBackground } from "./background";
import { projects, timeline, skillRows } from "./data";

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ================= Smooth scroll ================= */
const lenis = new Lenis({ lerp: 0.09, smoothWheel: !reducedMotion });
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// Anchor links through Lenis
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -60 });
    }
  });
});

/* ================= Render: projects ================= */
const grid = document.getElementById("projects-grid")!;
grid.innerHTML = projects
  .map(
    (p) => `
  <article class="project-card reveal group">
    ${
      p.image
        ? `<div class="mb-5 overflow-hidden rounded-lg border border-white/10">
             <img src="${p.image}" alt="${p.title}" loading="lazy"
               class="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105" />
           </div>`
        : ""
    }
    <div class="flex items-start justify-between gap-4">
      <div>
        <h3 class="font-display text-xl font-semibold text-white">${p.title}</h3>
        <p class="mt-0.5 font-mono text-xs text-cyan-300/80">${p.tagline}</p>
      </div>
      ${
        p.link
          ? `<a href="${p.link}" target="_blank" rel="noopener" aria-label="View ${p.title} on GitHub"
               class="mt-1 shrink-0 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-300">
               <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
             </a>`
          : ""
      }
    </div>
    <p class="mt-3 text-sm leading-relaxed text-slate-400">${p.description}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      ${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
    </div>
  </article>`
  )
  .join("");

/* Project card tilt + spotlight */
document.querySelectorAll<HTMLElement>(".project-card").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    if (reducedMotion) return;
    const rx = ((y / r.height) - 0.5) * -4;
    const ry = ((x / r.width) - 0.5) * 4;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

/* ================= Render: timeline ================= */
const kindBadge: Record<string, string> = {
  work: "text-emerald-300 border-emerald-300/30 bg-emerald-300/10",
  education: "text-violet-300 border-violet-300/30 bg-violet-300/10",
  research: "text-amber-300 border-amber-300/30 bg-amber-300/10",
};
const kindLabel: Record<string, string> = {
  work: "Work",
  education: "Education",
  research: "Research",
};

document.getElementById("timeline")!.innerHTML = timeline
  .map(
    (t) => `
  <div class="timeline-item reveal">
    <div class="flex flex-wrap items-center gap-3">
      <span class="font-mono text-xs text-slate-500">${t.period}</span>
      <span class="rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${kindBadge[t.kind]}">${kindLabel[t.kind]}</span>
    </div>
    <h3 class="mt-2 font-display text-xl font-semibold text-white">${t.title}</h3>
    <p class="mt-1 text-sm text-cyan-300/80">${t.org}${t.location ? ` · ${t.location}` : ""}</p>
    ${t.detail ? `<p class="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">${t.detail}</p>` : ""}
  </div>`
  )
  .join("");

/* ================= Render: skill marquees ================= */
const spark = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z"/></svg>`;
document.querySelectorAll<HTMLElement>(".marquee-track").forEach((track, rowIdx) => {
  const items = skillRows[rowIdx % skillRows.length];
  const half = items.map((s) => `<span class="marquee-item">${spark}${s}</span>`).join("");
  track.innerHTML = half + half + half; // enough copies for a seamless loop
  const dir = track.dataset.direction === "right" ? 1 : -1;
  if (!reducedMotion) {
    gsap.to(track, {
      xPercent: dir * -33.333,
      duration: 28,
      ease: "none",
      repeat: -1,
      ...(dir === 1 ? { startAt: { xPercent: -33.333 } } : {}),
    });
  }
});

/* ================= Three.js background ================= */
const canvas = document.getElementById("bg-canvas") as HTMLCanvasElement;
try {
  initBackground(canvas);
} catch {
  canvas.style.display = "none"; // graceful fallback if WebGL unavailable
}

/* ================= Hero intro ================= */
if (!reducedMotion) {
  gsap.set(".hero-title .line", { yPercent: 110 });
  gsap.set(".hero-fade", { opacity: 0, y: 24 });
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  tl.to(".hero-title .line", { yPercent: 0, duration: 1.2, stagger: 0.12, delay: 0.2 })
    .to(".hero-fade", { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, "-=0.6");
} else {
  document.querySelectorAll<HTMLElement>(".hero-fade").forEach((el) => (el.style.opacity = "1"));
}

/* ================= Scroll reveals ================= */
if (!reducedMotion) {
  document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });
} else {
  document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
    (el as HTMLElement).style.opacity = "1";
    (el as HTMLElement).style.transform = "none";
  });
}

/* ================= Stat counters ================= */
document.querySelectorAll<HTMLElement>(".stat-num").forEach((el) => {
  const target = Number(el.dataset.count ?? 0);
  if (reducedMotion) {
    el.textContent = `${target}+`;
    return;
  }
  ScrollTrigger.create({
    trigger: el,
    start: "top 90%",
    once: true,
    onEnter: () => {
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => (el.textContent = `${Math.round(obj.v)}+`),
      });
    },
  });
});

/* ================= Nav: scrolled state + active link ================= */
const nav = document.getElementById("site-nav")!;
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

const sections = ["about", "projects", "experience", "contact"];
const navLinks = new Map(
  sections.map((id) => [
    id,
    document.querySelector<HTMLAnchorElement>(`.nav-link[href="#${id}"]`)!,
  ])
);
sections.forEach((id) => {
  ScrollTrigger.create({
    trigger: `#${id}`,
    start: "top 50%",
    end: "bottom 50%",
    onToggle: (self) => {
      if (self.isActive) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks.get(id)?.classList.add("active");
      }
    },
  });
});

/* ================= Scroll progress bar ================= */
gsap.to("#scroll-progress", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
});

/* ================= Custom cursor (desktop, fine pointer) ================= */
if (window.matchMedia("(pointer: fine)").matches && !reducedMotion) {
  const dot = document.getElementById("cursor-dot")!;
  const ring = document.getElementById("cursor-ring")!;
  const dotX = gsap.quickTo(dot, "left", { duration: 0.08, ease: "power2.out" });
  const dotY = gsap.quickTo(dot, "top", { duration: 0.08, ease: "power2.out" });
  const ringX = gsap.quickTo(ring, "left", { duration: 0.35, ease: "power2.out" });
  const ringY = gsap.quickTo(ring, "top", { duration: 0.35, ease: "power2.out" });
  window.addEventListener("pointermove", (e) => {
    dotX(e.clientX); dotY(e.clientY);
    ringX(e.clientX); ringY(e.clientY);
  });
  document.querySelectorAll("a, button, .project-card").forEach((el) => {
    el.addEventListener("pointerenter", () => gsap.to(ring, { scale: 1.8, borderColor: "rgba(34,211,238,0.8)", duration: 0.3 }));
    el.addEventListener("pointerleave", () => gsap.to(ring, { scale: 1, borderColor: "rgba(34,211,238,0.4)", duration: 0.3 }));
  });
} else {
  document.getElementById("cursor-dot")?.remove();
  document.getElementById("cursor-ring")?.remove();
}
