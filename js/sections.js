// Sections de contenu (projets, compétences, parcours) : au défilement,
// chaque bande reçoit `en-vue` (css/animation-sections.css lance alors ses
// traits, hachures et boutons) et écrit ses textes.
// Les fonctions de texte viennent de texte.js.

// Plus court que l'accueil (DEPART_TEXTE) : en défilant, on ne doit pas
// attendre pour lire. Doit suivre css/animation-sections.css.
const DEPART_SECTIONS = 0.45;
const VITESSE_SECTIONS = 3;
const ETALEMENT_SCRAMBLE = 0.4;

// Chaque texte annonce son animation dans le HTML avec `data-ecriture`, la
// même que sur l'accueil : titres en scramble, descriptions à la machine à
// écrire, petits textes lettre par lettre.
const ECRITURES = {
  scramble: (texte) => scramble(texte, DEPART_SECTIONS, ETALEMENT_SCRAMBLE),
  machine: (texte) => machineAEcrire(texte, DEPART_SECTIONS, VITESSE_SECTIONS),
  lettres: (texte) => lettreParLettre(texte, DEPART_SECTIONS, VITESSE_SECTIONS),
};

function ecrireTextes(bande) {
  bande.querySelectorAll("[data-ecriture]").forEach((texte) => {
    ECRITURES[texte.dataset.ecriture](texte);
  });
}

if (!MOUVEMENT_REDUIT && "IntersectionObserver" in window) {
  const observateur = new IntersectionObserver(
    (entrees) => {
      entrees.forEach((entree) => {
        if (!entree.isIntersecting) return;

        observateur.unobserve(entree.target);
        // La classe d'abord : le texte redevient lisible avant que le script
        // ne le masque lui-même.
        entree.target.classList.add("en-vue");
        ecrireTextes(entree.target);
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".section").forEach((section) => {
    // Pose l'état d'attente : traits, textes et boutons attendent leur bande.
    section.classList.add("pret");
    section.querySelectorAll(".bande").forEach((bande) => observateur.observe(bande));
  });
}
