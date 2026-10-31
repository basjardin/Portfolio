// Place chaque annotation au hasard : distance au rail de 8 px jusqu'au bord
// de l'écran, collée au trait du haut ou du bas de sa bande (jamais au centre).
// Chaque chargement de la page donne une disposition différente.

const ECART_MIN = 8;
const MARGE_ECRAN = 8;

document.querySelectorAll(".annotation").forEach((annotation) => {
  const bande = annotation.parentElement.getBoundingClientRect();
  const aGauche = annotation.classList.contains("annotation--gauche");

  // Place disponible entre le rail et le bord de l'écran.
  const place = aGauche ? bande.left : window.innerWidth - bande.right;
  const ecartMax = Math.max(ECART_MIN, place - annotation.offsetWidth - MARGE_ECRAN);
  const ecart = Math.round(ECART_MIN + Math.random() * (ecartMax - ECART_MIN));

  annotation.style[aGauche ? "right" : "left"] = `calc(100% + ${ecart}px)`;

  // Début ou fin de bande, collée au trait (qui fait 1 px).
  if (Math.random() < 0.5) {
    annotation.style.top = "1px";
  } else {
    annotation.style.top = "auto";
    annotation.style.bottom = "1px";
  }
});
