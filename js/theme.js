// Thème clair / sombre. Chargé dans le <head>, avant le rendu : le thème est
// posé tout de suite, sans flash. Choix : celui mémorisé, sinon celui du
// système (et il suit ses changements tant que rien n'est mémorisé). Couleurs : css/theme-clair.css.

// Clé propre au site : basjardin.github.io partage son stockage avec mes
// autres sites (l'ancienne version Next.js y avait déjà écrit « theme »).
const CLE_THEME = "portfolio-theme";

const systemeClair = window.matchMedia("(prefers-color-scheme: light)");

function themeMemorise() {
  try {
    const memorise = localStorage.getItem(CLE_THEME);
    if (memorise === "light" || memorise === "dark") return memorise;
  } catch {
    // stockage indisponible : on suit le système
  }
  return null;
}

function themeInitial() {
  return themeMemorise() ?? (systemeClair.matches ? "light" : "dark");
}

function appliquerTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const bouton = document.querySelector(".theme-bouton");
  if (bouton) {
    const clair = theme === "light";
    // Le bouton montre le thème vers lequel il bascule.
    bouton.textContent = clair ? "☾" : "☀︎";
    bouton.setAttribute("aria-label", clair ? "Passer au thème sombre" : "Passer au thème clair");
  }

  // Le curseur relit ses couleurs (js/curseur.js).
  window.dispatchEvent(new Event("themechange"));
}

appliquerTheme(themeInitial());

// Le système change de thème (réglage, horaire) : on suit, tant que
// le visiteur n'a pas choisi lui-même avec le bouton.
systemeClair.addEventListener("change", () => {
  if (!themeMemorise()) appliquerTheme(systemeClair.matches ? "light" : "dark");
});

document.addEventListener("DOMContentLoaded", () => {
  const bouton = document.querySelector(".theme-bouton");
  appliquerTheme(document.documentElement.dataset.theme);

  bouton.addEventListener("click", () => {
    const suivant = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    appliquerTheme(suivant);
    try {
      localStorage.setItem(CLE_THEME, suivant);
    } catch {
      // choix non mémorisé : sans gravité
    }
  });
});
