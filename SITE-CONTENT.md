# Spécification complète du portfolio — Robin Basjardin

> Document de référence créé avant la remise à zéro du dépôt.
> Il contient **tout** ce qu'il faut pour reconstruire le site sans l'ancien code :
> textes exacts, tailles de police mesurées dans le navigateur, couleurs,
> éléments interactifs et comportements responsive.
>
> Ancienne stack : Next.js 15 + React 19 + Tailwind 4 + SCSS, export statique
> (`output: 'export'`, `basePath: /Portfolio`) déployé sur GitHub Pages.
> URL de production : https://basjardin.github.io/Portfolio/

---

## 1. Informations générales

| Champ | Valeur |
| --- | --- |
| Titre de la page (`<title>`) | `Robin Basjardin - Développeur Web` |
| Langue | `fr` |
| Favicon | `/icons/Robin.svg` |
| Meta description | `Portfolio de Robin Basjardin, développeur web front-end et back-end en Normandie. Diplômé du BUT MMI et certifié Opquast. Parcours, projets, compétences et contact.` |
| OpenGraph title / description | identiques au titre et à la description ci-dessus |
| Police | **Funnel Display** (variable, poids 100–900), fichiers dans `public/font/Funnel_Display/` |
| Hébergement | GitHub Pages, branche `main`, sous-chemin `/Portfolio` |

> ⚠️ Le sous-chemin `/Portfolio` est important : tous les chemins d'images et
> d'icônes doivent en tenir compte en production (ancienne solution : helper
> `assetPath()` ; en HTML statique, des chemins **relatifs** suffisent).

---

## 2. Palette de couleurs

Définies en variables CSS, avec un thème clair et un thème sombre.

### Thème clair (`:root`)

| Variable | Valeur |
| --- | --- |
| `--background` | `hsl(222.2 50% 90%)` |
| `--foreground` | `hsl(214, 33%, 4%)` |
| `--card` | `hsl(222, 90%, 85%)` |
| `--card-foreground` | `hsl(210 40% 2%)` |
| `--popover` | `hsl(222, 90%, 75%)` |
| `--popover-foreground` | `hsl(210 40% 2%)` |
| `--accent` | `hsl(222, 100%, 75%)` |
| `--accent-foreground` | `hsl(210 40% 2%)` |
| `--border` | `hsl(217, 32%, 68%)` |
| `--input` | `hsl(217, 32%, 68%)` |
| `--ring` | `hsl(212, 26%, 68%)` |
| `--goodblue` | `hsl(236, 80%, 60%)` |

### Thème sombre (`.dark`)

| Variable | Valeur |
| --- | --- |
| `--background` | `hsl(222.2 84.7% 5%)` |
| `--foreground` | `hsl(210 40% 98%)` |
| `--card` | `hsl(222.2 84.7% 10%)` |
| `--card-foreground` | `hsl(210 40% 98%)` |
| `--popover` | `hsl(222.2 84.7% 15%)` |
| `--popover-foreground` | `hsl(210 40% 98%)` |
| `--accent` | `hsl(222.2 100% 20%)` |
| `--accent-foreground` | `hsl(210 40% 98%)` |
| `--border` | `hsl(217.2 32.6% 17.5%)` |
| `--input` | `hsl(217.2 32.6% 17.5%)` |
| `--ring` | `hsl(212.7 26.8% 83.9%)` |
| `--goodblue` | `hsl(236, 80%, 70%)` |

Le thème sombre est activé par la classe `.dark` sur `<html>`.
Valeur par défaut : **thème système**, avec mémorisation du choix manuel.

### Autres valeurs de design

- `--radius` : `0.5rem`
- Rayon des cartes : `8px` (`$border-radius2`), petits éléments `4px` (`$border-radius1`)
- Bordure : `1px solid var(--border)`
- Ombre normale : `0px 2px 2px hsla(0,0%,0%,0.07), 0px 4px 4px hsla(0,0%,0%,0.15)`
- Ombre survol : `0px 6px 6px hsla(0,0%,0%,0.07), 0px 12px 12px hsla(0,0%,0%,0.15)`
- Échelle d'espacement : multiples de 8px (`8, 16, 24, 32, 40, 48, 56, 64…`)

---

## 3. Tailles de texte (mesurées sur un écran 1440 px)

| Élément | Desktop | Mobile (< 768 px) | Graisse | Interligne |
| --- | --- | --- | --- | --- |
| Titre principal `h1` « Robin Basjardin » | 48 px | 36 px | 600 | 48 px |
| Sous-titre d'accueil | 20 px | 18 px | 400 | 28 px |
| Description d'accueil | 20 px | 18 px | 400 | 30 px |
| Bouton « Me contacter » | 18 px | 18 px | 400 | 28 px |
| Titres de section `h2` | 36 px | 30 px | 600 | 40 px |
| Sous-titres `h3` (parcours) | 30 px | 24 px | 500 | 36 px |
| Sous-titres `h3` (projets) | 24 px | 20 px | 500 | — |
| Titres d'entrée `h4` (parcours) | 20 px | 18 px | 600 | 28 px |
| Paragraphes « À propos » / « Actuellement » | 20 px | 18 px | **300** | 28 px |
| Paragraphes des entrées de parcours | 18 px | 16 px | 300 | 27 px |
| Période / lieu (parcours) | 16 px | 16 px | 400 / 300 | 24 px |
| Nom d'une compétence | 16 px | 16 px | 400 | 24 px |
| Titre d'une carte projet | 20 px | 20 px | 600 | — |
| Description d'une carte projet | 14 px | 14 px | 400 | relâché |
| Badge de techno | 12 px | 12 px | 500 | 16 px |
| Bouton « voir le projet » | 16 px | 16 px | 600 | — |
| Libellés de contact `h4` | 18 px | 18 px | 600 | — |
| Liens de contact | 16 px | 16 px | 400 | — |

> Les tailles « mobile » correspondent au palier Tailwind inférieur
> (`text-4xl md:text-5xl` → 36 px puis 48 px à partir de 768 px).

---

## 4. Structure de la page

Page unique, 5 sections empilées dans cet ordre :

1. `#acceuil` — hero
2. `#about` — compétences + à propos + actuellement
3. `#parcours` — expérience, formation, certification
4. `#project` — projets en carrousels
5. `#contact` — coordonnées

Éléments flottants présents sur toute la page :

- **Bouton de thème** : fixé en haut à droite (`top: 16px; right: 16px`, puis
  `32px` à partir de 768 px). Rond, bordure 2px, fond `--background`, ombre.
  Libellé accessible : « Toggle theme ».
- **Flou progressif en bas** : dégradé de flou fixé sur les 100 px inférieurs
  de l'écran (effet décoratif).
- `main` a un `padding-bottom: 120px`.

---

## 5. Section 1 — Accueil (`#acceuil`)

**Mise en page** : grille `5fr / 2fr`, tout centré, hauteur minimale 100vh.
La boîte du titre fait `min-width: 80vw` (100 % sous 900 px, coins carrés sous
600 px), fond `--card`, bordure, coins arrondis.

### Textes

| Rôle | Contenu exact |
| --- | --- |
| `h1` | `Robin Basjardin` |
| Sous-titre | `Développeur Web — Front-end & Back-end` |
| Description | `Ici, vous trouverez mes projets, mon parcours ainsi que des informations sur mes compétences.` <br> *(saut de ligne)* <br> `Si vous voulez me contacter, cliquez sur le bouton ci-dessous.` |

### Interactif

- **Bouton « Me contacter »** : largeur 25 % (min 150 px), hauteur 25 %.
  Fond `--popover`, texte `--popover-foreground`, sans bordure.
  - Au survol : remonte de 3 px, ombre renforcée, couleurs inversées
    (fond `--popover-foreground`, texte `--popover`). Transition `0.3s ease-in-out`.
  - Au clic : défilement **doux** vers `#contact`.

---

## 6. Section 2 — À propos (`#about`)

**Mise en page** : grille 2 colonnes égales, `padding-inline: 10vw`, gap 8px.
Passe en **1 colonne sous 750 px**. Sous 600 px, `padding-inline: 0` et les
blocs perdent leurs coins arrondis.

Particularité : en CSS, la colonne de droite (`.right`) est affichée **en
premier** (`order: 1`) et la colonne des compétences (`.left`) en second
(`order: 2`).

### Bloc « Compétences » (colonne gauche)

- `h2` : `Compétences`
- Fond `--card`, padding 24px, bordure, coins arrondis.
- Liste en `flex-wrap`, gap 8px.
- Chaque compétence : icône 80×80 px (8vw sous 650 px) + nom, dans une pastille
  à fond `--popover`, padding 8px, coins arrondis 8px.
  - Au survol : remonte de 3 px, ombre renforcée, et **une infobulle apparaît
    au-dessus** (fond `--accent`, texte `--accent-foreground`, 0.85rem,
    graisse 500, petite flèche triangulaire, transition
    `0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)`).

#### Liste des 22 compétences (ordre exact, icône, infobulle)

| # | Nom | Icône | Infobulle |
| --- | --- | --- | --- |
| 1 | HTML | `html.svg` | Permet de structurer le texte, les images et les liens d'une page. |
| 2 | CSS | `css.svg` | Sert à définir les couleurs, les polices et la mise en page. |
| 3 | SCSS | `scss.svg` | Organise le CSS en variables et en blocs pour un code plus lisible. |
| 4 | JS | `js.svg` | Ajoute de l'interaction (boutons, calculs, animations) aux sites. |
| 5 | TypeScript | `typescript.svg` | Ajoute du typage à JavaScript pour éviter les erreurs. |
| 6 | PHP | `php.svg` | Gère les comptes utilisateurs, les formulaires et les bases de données. |
| 7 | SQL | `sql.svg` | Langage utilisé pour communiquer avec les bases de données. |
| 8 | React | `react.svg` | Outil pour construire des interfaces fluides et rapides pour l'utilisateur. |
| 9 | Vite | `vite.svg` | Outil qui lance et compile un projet web quasi instantanément. |
| 10 | Next | `next.svg` | Outil pour construire des sites web rapides et fluides. |
| 11 | Node | `node.svg` | Permet d'utiliser JavaScript pour faire fonctionner tout le côté serveur. |
| 12 | CodeIgniter | `codeigniter.svg` | Structure un site en PHP pour un code clair et facile à maintenir. |
| 13 | Tailwind | `tailwind.svg` | Permet de créer des designs modernes et précis très rapidement. |
| 14 | Bootstrap | `Bootstrap.svg` | Outil pour créer rapidement des sites qui s'adaptent aux mobiles. |
| 15 | WordPress | `wordpress.svg` | Outil pour construire des sites web facilement et rapidement. |
| 16 | Git | `git.svg` | Logiciel qui enregistre l'historique du projet pour éviter les erreurs. |
| 17 | MySQL | `mysql.svg` | Système qui stocke et organise les données d'un site web. |
| 18 | Figma | `figma.svg` | Sert à dessiner les maquettes d'un site avant de le développer. |
| 19 | Photoshop | `photoshop.svg` | Permet de retoucher et de préparer les images pour le web. |
| 20 | Illustrator | `illustrator.svg` | Permet de créer des logos et des illustrations qui restent nets. |
| 21 | Blender | `blender.svg` | Logiciel de modélisation et d'animation 3D. |
| 22 | Unity | `unity.svg` | Moteur utilisé pour créer des jeux vidéo en 2D et en 3D. |

> ⚠️ Les logos **Next** et **Unity** sont noirs : il faut leur appliquer
> `filter: invert(1)` en thème sombre, sinon ils deviennent invisibles.
> Les icônes proviennent de [Simple Icons](https://simpleicons.org/) (licence CC0),
> recolorées aux couleurs officielles de chaque marque.

### Bloc « A propos de moi » (colonne droite, haut)

- `h2` : `A propos de moi`
- Paragraphe (graisse 300) :

> Titulaire d'un BUT MMI (Bac+3), je conçois et développe des sites et des applications web, du front-end au back-end. Curieux et rigoureux, j'apprends vite et j'aime comprendre un problème en profondeur avant d'y répondre. De la maquette à la mise en ligne, je transforme un besoin concret en interface soignée et fonctionnelle.

### Bloc « Actuellement » (colonne droite, bas)

- `h2` : `Actuellement`
- Paragraphe (graisse 300) :

> Diplômé du BUT MMI et certifié Opquast (891/1000), je suis à la recherche de mon premier poste de développeur web, et ouvert également à un stage ou à une mission. Basé à Elbeuf en Normandie, permis B et véhiculé, je suis prêt à m'investir dans des projets concrets au sein d'une équipe.

---

## 7. Section 3 — Mon parcours (`#parcours`)

**Mise en page** : largeur 80vw centrée, marge haute 40px.
Grille 2 colonnes (gap 24px) → **1 colonne sous 900 px**, pleine largeur sous 600 px.

- Colonne gauche : bloc « Expérience professionnelle »
- Colonne droite : bloc « Formation » puis bloc « Certification » (empilés, gap 24px)

Chaque bloc : fond `--card`, padding 24px, bordure, coins arrondis (carrés sous 600 px).

Chaque entrée affiche : **titre** (h4) et **période** alignés sur la même ligne
(espacés aux extrémités, passage à la ligne si trop étroit), puis le **lieu**,
puis la **description**, puis d'éventuels **badges**.
Période et lieu sont en `opacity: 0.75`.

- `h2` de section : `Mon parcours`

### Bloc « Expérience professionnelle »

**1. Stage — Refonte d'un site WordPress**
- Période : `2026 · 3 mois`
- Lieu : `GreenNature, Préaux`
- Description : `Refonte du site WordPress de l'entreprise, de la reprise du contenu existant jusqu'à la mise en ligne.`
- Badges : `WordPress` (bleu), `PHP` (violet/purple), `CSS` (bleu)

**2. Stage de recherche — Amélioration de l'ergonomie**
- Période : `2025 · 8 semaines`
- Lieu : `Laboratoire LITIS, Université de Rouen, Normandie`
- Description : `Stage de recherche consacré à l'amélioration de l'ergonomie d'une interface, en lien avec l'équipe du laboratoire.`
- Badges : `UX / UI` (violet), `Recherche` (gris)

### Bloc « Formation »

**1. BUT MMI**
- Période : `2023 – 2026`
- Lieu : `Elbeuf, Normandie`
- Description : `Spécialisation en développement web (front-end et back-end), gestion de projet et UX/UI design.`

**2. Bac STI2D**
- Période : `2020 – 2023`
- Lieu : `Lycée technologique Ferdinand Buisson, Elbeuf`
- Description : `Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable.`

### Bloc « Certification »

**Opquast — Maîtrise de la qualité en projet web**
- Score : `891 / 1000`
- Niveau : `Niveau Avancé`
- Description : `Certification sur les bonnes pratiques du web : accessibilité, référencement, performance et expérience utilisateur.`

---

## 8. Section 4 — Mes Projets (`#project`)

**Mise en page** : largeur 80vw centrée (100 % sous 420 px), marge haute 40px.

- `h2` : `Mes Projets`
- `h3` (1er carrousel) : `Projet dans le développement web`
- `h3` (2e carrousel) : `Autres projets`

### Comportement des carrousels

- Défilement **horizontal**, alignement sur le début, **pas de boucle**.
- Largeur d'une carte : `280px` → `320px` (≥768 px) → `360px` (≥1024 px), gap 16px.
- Flèches précédent/suivant : **visibles seulement à partir de 768 px**,
  positionnées à l'extérieur (−48 px à gauche et à droite), fond transparent,
  chevrons SVG 48×48. Sur mobile : défilement au doigt / à la souris.

### Structure d'une carte projet

- Hauteur fixe **450 px**, coins arrondis `24px` (`rounded-3xl`), fond `--card`, bordure.
- **Image** en haut : hauteur minimale 240 px, `object-fit: cover`, opacité 0.9
  → 1 au survol. Effet **loupe (zoom ×2)** au survol du curseur.
- **Titre** : 20 px, graisse 600, tronqué à 1 ligne.
- **Badges** de technologies (voir palette ci-dessous).
- **Description** : 14 px, tronquée à 3 lignes (hauteur max ≈ 68 px).
- **Bouton `voir le projet`** : pleine largeur, hauteur 44 px, coins 12px,
  graisse 600, fond `--popover` → inversé au survol, léger rétrécissement au clic
  (`scale 0.98`). Ouvre le lien dans un **nouvel onglet**
  (`target="_blank" rel="noopener noreferrer"`).

### Couleurs des badges

Chaque badge : fond `couleur/10 %`, texte `couleur-700` (clair) ou `couleur-400`
(sombre), anneau intérieur `couleur/20 %`, coins 6px, padding `8px/4px`, 12 px, graisse 500.

Couleurs disponibles : `orange`, `blue`, `yellow`, `purple`, `violet`, `red`,
`green`, `gray` (valeur par défaut si inconnue).

### Carrousel 1 — « Projet dans le développement web »

| # | Titre | Image | Description | Lien | Badges |
| --- | --- | --- | --- | --- | --- |
| 1 | Refonte du site GreenNature | `/img/pas image.png` | Refonte du site WordPress de GreenNature, réalisée pendant mon stage de 3 mois : reprise du contenu existant, mise en forme et mise en ligne. | https://www.greennature.fr/ | WordPress (blue), PHP (purple), CSS (blue) |
| 2 | Réservation de matériel scolaire | `/img/pas image.png` | Application de réservation de matériel scolaire développée avec CodeIgniter, Bootstrap et une base de données SQL. | https://github.com/basjardin/reservation | CodeIgniter (red), PHP (purple), SQL (blue), Bootstrap (violet) |
| 3 | Application pour professeurs bénévoles | `/img/pas image.png` | Application en PHP destinée aux professeurs bénévoles qui accompagnent des élèves en difficulté scolaire. | https://github.com/basjardin/SAE401 | PHP (purple), SQL (blue), Bootstrap (violet) |
| 4 | CurseForge Mod Awards 2025 | `/img/pas image.png` | Site permettant de consulter les mods soumis au vote pendant les CurseForge Mod Awards 2025. | https://basjardin.github.io/curseforge-mod-award-2025/ | HTML (orange), CSS (blue), JavaScript (yellow) |
| 5 | Premier portfolio | `/img/premier portfolio.png` | Mon premier portfolio, réalisé avec HTML, CSS et JavaScript. | https://basjardin.github.io/porfolio/ | HTML (orange), CSS (blue), JavaScript (yellow) |
| 6 | Premier site web | `/img/premier-site-web.png` | Mon premier site web, réalisé avec HTML, CSS et JavaScript. | https://github.com/basjardin/premier_site_web | HTML (orange), CSS (blue), JavaScript (yellow) |

### Carrousel 2 — « Autres projets »

| # | Titre | Image | Description | Lien | Badges |
| --- | --- | --- | --- | --- | --- |
| 1 | Anomalia | `/img/pas image.png` | Mon premier jeu vidéo en 3D, créé avec Unity. | https://github.com/basjardin/Anomalia | Unity (gray), C# (green) |
| 2 | Projet de jeu vidéo en groupe | `/img/pas image.png` | Jeu vidéo développé en équipe avec Unity dans le cadre du BUT MMI. | https://github.com/basjardin/projet-unity-groupe | Unity (gray), C# (green) |
| 3 | R307 — jeu de tir | `/img/pas image.png` | Un autre projet de jeu vidéo réalisé avec Unity. | https://github.com/basjardin/R307-shooter | Unity (gray), C# (green) |

> 🔴 **À corriger lors de la reconstruction** :
> - Le lien `github.com/basjardin/SAE401` renvoie une **404** (dépôt privé ou supprimé).
> - Le lien GreenNature est une **supposition** à confirmer.
> - 7 cartes sur 9 utilisent l'image bouche-trou `pas image.png` : il faut
>   de vraies captures d'écran, notamment pour GreenNature.

---

## 9. Section 5 — Me contacter (`#contact`)

**Mise en page** : colonne centrée, marge haute 120px.
Conteneur : largeur 80 % (max 800 px), padding 32px, fond `--card`, bordure.
Sous 420 px : pleine largeur, coins carrés, liens soulignés en permanence.

- `h2` : `Me contacter` (marges verticales 40px)

Chaque entrée : icône SVG 40×40 (remplissage `--popover-foreground`) à côté du
libellé, puis le lien en dessous. Tout est centré. Les liens n'ont pas de
soulignement, il apparaît au survol.

| Libellé | Texte affiché | Lien | Cible |
| --- | --- | --- | --- |
| Email | `basjardinrobin@gmail.com` | `mailto:basjardinrobin@gmail.com` | même onglet |
| LinkedIn | `www.linkedin.com/in/robin-basjardin-développeur` | `https://www.linkedin.com/in/robin-basjardin-développeur` | nouvel onglet |
| GitHub | `www.github.com/basjardin` | `https://github.com/basjardin` | nouvel onglet |

Icônes nécessaires : enveloppe (email), logo LinkedIn, logo GitHub (SVG inline,
24×24 viewBox, affichés en 40×40).

---

## 10. Composant non affiché — Popup « Site en Travaux »

Existe dans l'ancien code mais **n'est plus monté dans la page**.
À reprendre seulement si besoin.

- Overlay plein écran, fond `rgba(0,0,0,0.7)` + `backdrop-filter: blur(8px)`,
  transition d'ouverture/fermeture `0.4s cubic-bezier(0.4, 0, 0.2, 1)`.
- Carte : fond `--accent`, padding 56px, max-width 400px, ombre renforcée.
- Icône : clé/outil (SVG trait).
- `h2` : `Site en Travaux`
- Texte : `Ce site est actuellement en cours de développement.` *(saut de ligne)* `Certaines fonctionnalités peuvent ne pas être totalement terminées.`
- Bouton : `Continuer la visite`
- Fermeture : clic sur le bouton, clic sur le fond, ou touche `Échap`.

---

## 11. Récapitulatif des éléments interactifs

| Élément | Déclencheur | Effet |
| --- | --- | --- |
| Bouton de thème (fixe, haut-droite) | clic | bascule clair/sombre, avec transition de vue |
| Bouton « Me contacter » | clic | défilement doux vers `#contact` |
| Bouton « Me contacter » | survol | remonte 3px, ombre, couleurs inversées |
| Pastille de compétence | survol | remonte 3px, ombre, infobulle au-dessus |
| Carte projet — image | survol | loupe zoom ×2 + opacité 0.9 → 1 |
| Carte projet — bouton | clic | ouvre le lien dans un nouvel onglet |
| Carte projet — bouton | clic maintenu | `scale(0.98)` |
| Flèches de carrousel | clic | défile d'une carte (masquées sous 768 px) |
| Carrousel | glisser (souris/doigt) | défilement libre |
| Liens de contact | survol | soulignement |
| Barre de progression de défilement | défilement | indicateur en haut de page |
| Flou progressif bas d'écran | — | décoratif, fixe |

---

## 12. Ressources à conserver

### Polices
`public/font/Funnel_Display/` — variable + statiques (Light, Regular, Medium, SemiBold, Bold, ExtraBold) + `OFL.txt`

### Icônes de compétences (22)
`html, css, scss, js, typescript, php, sql, react, vite, next, node, codeigniter, tailwind, Bootstrap, wordpress, git, mysql, figma, photoshop, illustrator, blender, unity` (+ `Robin.svg` pour le favicon)

### Images de projets
- `premier-site-web.png`
- `premier portfolio.png` *(contient un espace dans le nom — à renommer)*
- `pas image.png` *(bouche-trou, à remplacer par de vraies captures)*
- `pas image-old.png` *(inutilisé)*

### Textures inutilisées
`public/font/decorative_wallpaper_17-2K/` — 5 fichiers JPG jamais référencés dans le code. **À supprimer.**

---

## 13. Points à améliorer dans la nouvelle version

1. **Stack** : du HTML/CSS/JS statique (ou Astro, ou Vite) suffit largement.
   Next.js n'apporte rien ici et impose `basePath`, `assetPath()`, export statique.
2. **Fautes dans les identifiants** : `#acceuil` (→ `#accueil`),
   `.boite-acceuil`, `.carrousel` — à corriger.
3. **`text-muted-foreground`** est utilisé dans les cartes projet mais la
   variable `--muted-foreground` **n'est jamais définie** : la règle ne
   s'applique pas.
4. **Noms de fichiers avec espaces** (`pas image.png`, `premier portfolio.png`)
   — à renommer en kebab-case.
5. **Débordement horizontal** sur mobile dû aux carrousels, masqué par
   `overflow-x: hidden`.
6. **Ordre CSS contre-intuitif** dans `#about` (`order: 1` / `order: 2`) :
   mieux vaut écrire le HTML dans le bon ordre.
7. **Accessibilité** : les infobulles de compétences passent par
   `::after { content: attr(data-tooltip) }`, invisible pour les lecteurs
   d'écran. Préférer un vrai élément avec `aria-describedby`.
8. **Easing « rebond »** `cubic-bezier(0.68, -0.55, 0.265, 1.55)` sur les
   infobulles : fait daté, préférer `cubic-bezier(0.22, 1, 0.36, 1)`.
9. **Dépendances lourdes** à ne pas reprendre : shadcn/ui, Embla Carousel,
   Motion, next-themes. Un carrousel en `scroll-snap` CSS et un toggle de thème
   en 15 lignes de JS suffisent.
