// Réglages partagés par tous les scripts. Ce sont des scripts classiques :
// tout ce qui est déclaré ici est visible dans les autres fichiers.
// À charger juste après GSAP, avant les autres scripts.

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const MOUVEMENT_REDUIT = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
