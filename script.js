// Enable the fade-in enhancement. The base CSS shows images by default;
// adding this class opts into the animation only when JS is running.
document.documentElement.classList.add("js");

// Fade-in project images as they enter the viewport.
const images = document.querySelectorAll(".gallery img");

const revealAll = () => images.forEach((img) => img.classList.add("visible"));

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

  // Safety net: if the observer somehow never fires (e.g. a zero-size
  // viewport), reveal everything after a short delay so images can never
  // stay permanently hidden.
  setTimeout(() => {
    if (![...images].some((img) => img.classList.contains("visible"))) {
      revealAll();
    }
  }, 2000);
} else {
  revealAll();
}
