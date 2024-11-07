document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll on CTA button click
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#solutions").scrollIntoView({ behavior: "smooth" });
    });
  }
});