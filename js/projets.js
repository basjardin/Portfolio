// Projets, sur mobile : le bouton « Voir mes 3 autres projets » déplie la
// grille des autres projets (css/projets.css la replie).

const colonneProjets = document.querySelector(".projets .colonne");
const boutonPlus = colonneProjets.querySelector(".bouton--plus");
const texteReplie = boutonPlus.textContent; // celui du HTML

boutonPlus.addEventListener("click", () => {
  const ouvert = colonneProjets.classList.toggle("ouvert");

  boutonPlus.setAttribute("aria-expanded", ouvert);
  boutonPlus.textContent = ouvert ? "Masquer les autres projets ↑" : texteReplie;
});
