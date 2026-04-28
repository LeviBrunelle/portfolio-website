// src/components/lightbox.ts
export function mountLightbox() {
  let lb = document.querySelector<HTMLDivElement>(".lb-backdrop");

  if (!lb) {
    lb = document.createElement("div");
    lb.className = "lb-backdrop";
    lb.innerHTML = `
      <div class="lb-wrap">
        <img alt="">
      </div>
      <button class="lb-close" aria-label="Close">×</button>
    `;
    document.body.appendChild(lb);
  }

  if (lb.dataset.bound === "true") return;
  lb.dataset.bound = "true";

  const img = lb.querySelector("img") as HTMLImageElement;
  const closeBtn = lb.querySelector(".lb-close") as HTMLButtonElement;

  const close = () => {
    lb!.classList.remove("show");
    document.body.style.overflow = "";
    img.removeAttribute("src");
  };

  lb.addEventListener("click", (e) => {
    if (e.target === lb) close();
  });

  closeBtn.addEventListener("click", close);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lb!.classList.contains("show")) {
      close();
    }
  });

  document.body.addEventListener("click", (e) => {
    const trigger = (e.target as HTMLElement).closest<HTMLElement>("[data-lb], a.thumb");
    if (!trigger) return;

    const href =
      trigger.getAttribute("data-lb") ||
      trigger.getAttribute("href") ||
      "";

    if (!href) return;

    e.preventDefault();
    img.src = href;
    lb!.classList.add("show");
    document.body.style.overflow = "hidden";
  });
}
