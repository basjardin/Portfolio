// Animations de texte (GSAP SplitText et ScrambleText), réutilisables :
//  - lettreParLettre : les lettres apparaissent en glissant de haut en bas
//  - machineAEcrire : frappe à rythme irrégulier
//  - scramble : caractères aléatoires du même type, puis le vrai texte
// Chaque fonction prend un sélecteur et un départ en secondes.
// `vitesse` (facultatif, 1 par défaut) : 2 = deux fois plus vite.

// Départ du texte de l'accueil, après les traits et les hachures (animation.css).
// Les sections ont leur propre départ, plus court (js/sections.js).
const DEPART_TEXTE = 1.5;

function lettreParLettre(selecteur, depart, vitesse = 1) {
  const texte = SplitText.create(selecteur, { type: "words,chars" });

  gsap.from(texte.chars, {
    opacity: 0,
    yPercent: -15,
    duration: 0.3 / vitesse,
    ease: "power1.out",
    stagger: 0.02 / vitesse,
    delay: depart,
  });
}

function machineAEcrire(selecteur, depart, vitesse = 1) {
  const texte = SplitText.create(selecteur, { type: "words,chars" });
  const frappe = gsap.timeline({ delay: depart });
  let instant = 0;

  gsap.set(texte.chars, { opacity: 0 });

  texte.chars.forEach((caractere) => {
    instant += (0.012 + Math.random() * 0.03) / vitesse; // rythme irrégulier
    frappe.set(caractere, { opacity: 1 }, instant);
  });
}

// Caractères aléatoires du même type que le caractère à révéler : majuscule
// pour majuscule, minuscule pour minuscule, chiffre pour chiffre.
// Ponctuation : pas de scramble.
function jeuDeCaracteres(caractere) {
  if (/\p{Lu}/u.test(caractere)) return "upperCase";
  if (/\p{Ll}/u.test(caractere)) return "lowerCase";
  if (/\d/.test(caractere)) return "0123456789";
  return null;
}

// etalement : durée en secondes de l'enchaînement des caractères.
// `selecteur` peut être un élément (le texte doit en être le premier enfant).
function scramble(selecteur, depart, etalement) {
  const DUREE_CARACTERE = 0.5;

  const element = typeof selecteur === "string" ? document.querySelector(selecteur) : selecteur;
  const noeud = element.firstChild; // le texte, tel qu'il est dans le HTML
  const boite = element.getBoundingClientRect();

  // Chaque caractère du calque est posé à l'endroit exact où se trouve le
  // même caractère du vrai texte (mesuré avec un Range). Le vrai texte reste
  // en place mais invisible : à la fin du scramble, on retire le calque et
  // rien ne bouge, ni retour à la ligne, ni décalage.
  const calque = document.createElement("span");
  calque.setAttribute("aria-hidden", "true");
  calque.style.cssText = `position:absolute;inset:0;color:${getComputedStyle(element).color}`;

  const plage = document.createRange();
  const caracteres = [];

  [...noeud.textContent].forEach((caractere, i) => {
    if (/\s/.test(caractere)) return;

    plage.setStart(noeud, i);
    plage.setEnd(noeud, i + 1);
    const zone = plage.getClientRects()[0];
    if (!zone) return;

    const span = document.createElement("span");
    span.textContent = caractere;
    span.style.cssText = [
      "position:absolute",
      "opacity:0",
      "text-align:center",
      "white-space:nowrap",
      `left:${zone.left - boite.left}px`,
      `top:${zone.top - boite.top}px`,
      `width:${zone.width}px`,
      `height:${zone.height}px`,
      `line-height:${zone.height}px`,
    ].join(";");

    calque.append(span);
    caracteres.push({ span, caractere });
  });

  element.style.position = "relative";
  element.style.color = "transparent";
  element.append(calque);

  const pas = etalement / caracteres.length;

  const chrono = gsap.timeline({
    delay: depart,
    onComplete: () => {
      calque.remove();
      element.style.color = "";
    },
  });

  caracteres.forEach(({ span, caractere }, i) => {
    const jeu = jeuDeCaracteres(caractere);

    if (!jeu) {
      chrono.to(span, { opacity: 1, duration: 0 }, i * pas);
      return;
    }

    chrono.to(
      span,
      {
        duration: DUREE_CARACTERE,
        ease: "none",
        onStart: () => (span.style.opacity = 1),
        scrambleText: { text: caractere, chars: jeu, speed: 0.6, revealDelay: 0.2, tweenLength: false },
      },
      i * pas
    );
  });
}

// ---- Accueil ------------------------------------------------

if (!MOUVEMENT_REDUIT) {
  lettreParLettre(".accueil__kicker", DEPART_TEXTE);
  machineAEcrire(".accueil__phrase", DEPART_TEXTE);
  scramble(".accueil__titre", DEPART_TEXTE, 1.2);
}
