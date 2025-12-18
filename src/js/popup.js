document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("wip-popup");
  const closeBtn = document.getElementById("close-popup");

  if (popup && closeBtn) {
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("active");

      // Optionnel : On peut aussi supprimer l'élément du DOM après l'animation
      setTimeout(() => {
        popup.style.display = "none";
      }, 400);
    });

    // Optionnel : Fermer si on clique sur l'overlay
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.classList.remove("active");
        setTimeout(() => {
          popup.style.display = "none";
        }, 400);
      }
    });
  }
});
