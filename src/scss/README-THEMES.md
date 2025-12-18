# 🎨 Système de Thème Automatique

## Comment ça fonctionne

Le portfolio utilise un système de thème automatique qui détecte les préférences de l'utilisateur (mode clair/sombre) et adapte les couleurs en conséquence.

## Variables CSS disponibles

Utilisez ces variables CSS dans vos styles pour bénéficier du changement automatique de thème :

- `var(--theme-text)` - Couleur du texte
- `var(--theme-background)` - Couleur de fond principale
- `var(--theme-primary)` - Couleur primaire
- `var(--theme-secondary)` - Couleur secondaire (vert)
- `var(--theme-accent)` - Couleur d'accent (cyan)

## Exemple d'utilisation

```scss
.mon-element {
  background-color: var(--theme-background);
  color: var(--theme-text);
  border-color: var(--theme-accent);
}

button:hover {
  background-color: var(--theme-secondary);
}
```

## Valeurs des couleurs

### Mode Clair (par défaut)

- text: `hsl(0, 0%, 5%)` - Presque noir
- background: `hsl(0, 0%, 90%)` - Gris clair
- primary: `hsl(0, 0%, 95%)` - Gris très clair
- secondary: `hsl(138, 86%, 75%)` - Vert clair
- accent: `hsl(187, 86%, 63%)` - Cyan

### Mode Sombre (automatique avec prefers-color-scheme: dark)

- text: `hsl(0, 0%, 95%)` - Presque blanc
- background: `hsl(0, 0%, 10%)` - Presque noir
- primary: `hsl(0, 0%, 5%)` - Noir profond
- secondary: `hsl(138, 86%, 25%)` - Vert foncé
- accent: `hsl(187, 86%, 37%)` - Cyan foncé

## Tester le mode sombre

### Dans Chrome/Edge

1. Ouvrir DevTools (F12)
2. Cmd/Ctrl + Shift + P
3. Taper "Render"
4. Sélectionner "Emulate CSS prefers-color-scheme: dark"

### Dans Firefox

1. Ouvrir DevTools (F12)
2. Aller dans l'onglet "Inspector"
3. Cliquer sur l'icône soleil/lune en haut à droite

### Sur Windows

Paramètres → Personnalisation → Couleurs → Choisir votre mode

### Sur macOS

Préférences Système → Général → Apparence → Sombre
