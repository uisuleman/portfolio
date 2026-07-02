// Fade-in project images as they enter the viewport.
const images = document.querySelectorAll(".gallery img");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px" }
  );
  images.forEach((img) => observer.observe(img));
} else {
  images.forEach((img) => img.classList.add("visible"));
}
