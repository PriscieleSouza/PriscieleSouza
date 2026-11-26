// (a classe .js no <html> é adicionada por um script inline no <head>)

// Rolagem suave nos links internos (menu, botão do hero, CTA).
// Feita em JS para ter a mesma duração/curva em qualquer navegador e já
// descontar a altura do header fixo. É ação iniciada pelo usuário, então
// anima mesmo com "reduzir movimento"; nesse caso a duração é bem curta.
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function smoothScrollTo(targetY, duration) {
  const startY = window.scrollY;
  const delta = targetY - startY;
  const start = performance.now();
  const step = (now) => {
    const t = Math.min((now - start) / duration, 1);
    // "instant" evita que o scroll-behavior: smooth do CSS anime cada quadro
    window.scrollTo({ top: startY + delta * easeInOut(t), behavior: "instant" });
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href").slice(1);
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    event.preventDefault();
    const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    const y = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    smoothScrollTo(y, reduce ? 250 : 800);
    history.pushState(null, "", `#${id}`);
  });
});
const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".site-header__link");

// Revela blocos ao entrarem na viewport
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Troca o tema do header conforme a seção sob ele (faixa fina no topo da tela)
const themeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const section = entry.target;
      header.classList.remove("site-header--dark", "site-header--light");
      if (section.dataset.theme !== "hero") {
        header.classList.add(`site-header--${section.dataset.theme}`);
      }
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${section.id}`) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  },
  { rootMargin: "-40px 0px -95% 0px" }
);
document.querySelectorAll("main > section[data-theme]").forEach((s) => themeObserver.observe(s));
