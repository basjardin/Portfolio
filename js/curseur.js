// Curseur blueprint, qui remplace le curseur système :
//  - un carré centré sur le pointeur ; sur un lien ou un bouton, il s'étend
//    autour de l'élément (taille + ECART de chaque côté), puis revient
//  - une étiquette de coordonnées à côté du pointeur
// Styles : css/curseur.css.

const carre = document.querySelector(".curseur__carre");
const coord = document.querySelector(".curseur__coord");

const ECART = 5; // px entre l'élément et le carré
const TAILLE_CARRE = 20; // px, au repos
const DUREE_TRANSITION = 0.3; // secondes, accroche et retour
const CIBLES = "a[href], button, input, textarea, select";

// Couleurs lues dans curseur.css : GSAP ne sait pas lire var().
const jeton = (nom) => getComputedStyle(document.documentElement).getPropertyValue(nom).trim();
// Relues à chaque usage : elles changent avec le thème (css/theme-clair.css).
const bordureRepos = () => jeton("--curseur-bordure");
const bordureSurvol = () => jeton("--curseur-bordure-survol");

let cible = null; // lien ou bouton survolé
let transition = null; // animation d'accroche ou de retour en cours
let pointeurX = 0;
let pointeurY = 0;
let affiche = false;

// Le carré suit le pointeur, ou épouse la cible si elle existe.
function placerCarre(duree) {
  const zone = cible?.getBoundingClientRect();
  carre.classList.toggle("curseur__carre--cible", Boolean(zone));

  const destination = zone
    ? {
        x: zone.left - ECART,
        y: zone.top - ECART,
        width: zone.width + 2 * ECART,
        height: zone.height + 2 * ECART,
        borderColor: bordureSurvol(),
        borderWidth: 2,
      }
    : {
        x: pointeurX - TAILLE_CARRE / 2,
        y: pointeurY - TAILLE_CARRE / 2,
        width: TAILLE_CARRE,
        height: TAILLE_CARRE,
        borderColor: bordureRepos(),
        borderWidth: 1,
      };

  // overwrite "auto" : ne remplace que les propriétés déjà en cours d'animation.
  // `true` tuerait aussi le fondu d'opacité de afficher().
  transition = gsap.to(carre, { ...destination, duration: duree, ease: "power3.out", overwrite: "auto" });
}

// Au repos, seule la position suit le pointeur. Si une animation d'accroche ou
// de retour est en cours, on ne la coupe pas : taille et couleur finissent, et
// la position vise le pointeur sur le temps restant. Ensuite, suivi instantané.
function suivrePointeur() {
  const reste = transition?.isActive() ? transition.duration() * (1 - transition.progress()) : 0;

  gsap.to(carre, {
    x: pointeurX - TAILLE_CARRE / 2,
    y: pointeurY - TAILLE_CARRE / 2,
    duration: reste,
    ease: "power3.out",
    overwrite: "auto",
  });
}

function afficher(montrer) {
  if (affiche === montrer) return;
  affiche = montrer;
  gsap.to([carre, coord], { opacity: montrer ? 1 : 0, duration: 0.3 });
}

window.addEventListener("pointermove", (evenement) => {
  if (evenement.pointerType === "touch") return;

  pointeurX = evenement.clientX;
  pointeurY = evenement.clientY;

  // Le curseur système n'est masqué qu'une fois ce script en marche.
  document.documentElement.classList.add("curseur-actif");

  // Étiquette : à droite et sous le pointeur, de l'autre côté près des bords.
  coord.textContent = `x: ${Math.round(pointeurX)} · y: ${Math.round(pointeurY)}`;
  const versGauche = pointeurX > window.innerWidth - coord.offsetWidth - 32;
  const versHaut = pointeurY > window.innerHeight - 40;
  const coordX = versGauche ? pointeurX - coord.offsetWidth - 16 : pointeurX + 16;
  const coordY = versHaut ? pointeurY - 28 : pointeurY + 16;
  coord.style.transform = `translate(${coordX}px, ${coordY}px)`;

  // Carré : transition quand on entre sur une cible ou qu'on en sort ;
  // sur une cible, sa destination ne bouge pas, rien à refaire.
  const element = evenement.target.closest?.(CIBLES) ?? null;

  if (element !== cible) {
    cible = element;
    placerCarre(MOUVEMENT_REDUIT ? 0 : DUREE_TRANSITION);
  } else if (!cible) {
    suivrePointeur();
  }

  afficher(true);
});

// Changement de thème : la bordure posée par GSAP est refaite aux nouvelles couleurs.
window.addEventListener("themechange", () => {
  gsap.set(carre, { borderColor: cible ? bordureSurvol() : bordureRepos() });
});

// Le défilement déplace la cible sous un pointeur immobile.
window.addEventListener("scroll", () => cible && placerCarre(0), { passive: true });

document.documentElement.addEventListener("pointerleave", () => afficher(false));
