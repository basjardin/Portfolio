# Portfolio — Robin Basjardin

Portfolio utilisé pour ma recherche d'un premier poste de développeur web.

Site en ligne : https://basjardin.github.io/Portfolio/

## À propos

Je suis Robin Basjardin, développeur web (front-end et back-end), diplômé du BUT MMI (2023–2026) et certifié Opquast (891/1000). Basé à Elbeuf, en Normandie.

## Le site

- Site statique : HTML, CSS et JavaScript, sans étape de build.
- Design « blueprint » : rails, traits, titres hachurés et annotations.
- Thème sombre et thème clair (choix du système, bouton de bascule).
- Animations avec GSAP (SplitText, ScrambleTextPlugin), chargé depuis un CDN.
- Formulaire de contact via Web3Forms.
- Adapté au mobile.

## Structure

```
index.html      page unique
css/            styles, un fichier par partie (base, structure, hachures, cartes…)
js/             scripts, un fichier par comportement (thème, texte, projets, formulaire…)
assets/         icône, CV en PDF, images
cv/             sources du CV (HTML, CSS) et PDF généré
```

## Lancer en local

Aucune installation. Depuis le dossier du projet :

```bash
python -m http.server 4321
```

Puis ouvrir http://localhost:4321/.

## CV

Le CV est écrit dans `cv/cv.html` et exporté en PDF avec Chrome. Le PDF publié sur le site est `assets/CV-Robin-Basjardin.pdf` : il faut le recopier après chaque modification du CV.

## Déploiement

Chaque push sur `main` publie le site sur GitHub Pages grâce au workflow `.github/workflows/deploy.yml`.
Réglage requis : Settings > Pages > Source = « GitHub Actions ».

## Contact

basjardinrobin@gmail.com
