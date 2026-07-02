/* ==========================================================
   Manutec — versão clara (/pro)
   Troque o número abaixo pelo WhatsApp da empresa
   (código do país + DDD + número, só dígitos).
   ========================================================== */
const WHATSAPP_NUMBER = "5511999999999";

/* ---------- WhatsApp deep-links com mensagem pré-preenchida ---------- */
document.querySelectorAll("[data-wa-msg]").forEach((link) => {
  const msg = encodeURIComponent(link.dataset.waMsg);
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  link.target = "_blank";
  link.rel = "noopener";
});

/* ---------- Header ganha fundo ao rolar ---------- */
const header = document.getElementById("header");
const onScroll = () => {
  const scrolled = window.scrollY > 24;
  header.classList.toggle("bg-paper/90", scrolled);
  header.classList.toggle("backdrop-blur-md", scrolled);
  header.classList.toggle("border-b", scrolled);
  header.classList.toggle("border-hairline", scrolled);
  header.classList.toggle("shadow-soft", scrolled);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Revelação ao rolar ---------- */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduceMotion) {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ---------- Parallax do cenário 3D no hero ---------- */
const scene = document.getElementById("scene");
if (scene && !reduceMotion) {
  const stage = scene.closest(".stage");
  stage.addEventListener("pointermove", (e) => {
    const rect = stage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    scene.style.transform = `rotateY(${x * 10}deg) rotateX(${y * -8}deg)`;
  });
  stage.addEventListener("pointerleave", () => {
    scene.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
}

/* ---------- FAQ (acordeão) ---------- */
document.querySelectorAll(".faq-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const item = toggle.closest(".faq-item");
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((open) => {
      open.classList.remove("open");
      open.querySelector(".faq-toggle").setAttribute("aria-expanded", "false");
    });
    if (!isOpen) {
      item.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
    }
  });
});

/* ---------- Ano do rodapé ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
