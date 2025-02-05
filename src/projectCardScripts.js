document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const theme = card.dataset.theme;

    // Apply the theme's styles dynamically
    if (theme === "retro") {
      card.style.fontSize = "1.05rem";

      // Child elements adjustment
      card.querySelectorAll("h3, p, span, a").forEach((element) => {
        element.style.fontSize = "1rem";
        element.style.transition = "font-size 0.3s ease-in-out";
      });
      card.style.backgroundColor = "#333333";
      card.style.color = "#ffcc00";
      card.style.borderColor = "#ffcc00";
      card.style.fontFamily = '"Press Start 2P", cursive';
      card.style.transition = "all 0.3s ease-in-out";
      card.style.transform = "scale(1.01)";
    }
  });

  card.addEventListener("mouseleave", () => {
    // Revert back to original styles
    card.style.fontSize = "";
    card.style.transform = "scale(1)";

    // Reset children
    card.querySelectorAll("h3, p, span, a").forEach((element) => {
      element.style.fontSize = "";
    });
    card.style.backgroundColor = "";
    card.style.color = "";
    card.style.borderColor = "";
    card.style.fontFamily = "";
    card.style.fontSize = "";
    card.style.transform = "scale(1)";
  });
});
