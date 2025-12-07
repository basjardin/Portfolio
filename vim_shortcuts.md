# Aide-mémoire Vim & VSCode pour Débutants

## 🟢 Concepts Importants pour Débutants

### 1. Les Modes

Vim fonctionne avec différents "modes". Comprendre cela est essentiel.

- **Mode Normal (Echap)** : Le mode par défaut. Les touches servent à naviguer et modifier le texte (ex: `j` descend, `d` supprime).
- **Mode Insertion (i)** : Pour taper du texte comme dans un éditeur classique.
- **Mode Visuel (v)** : Pour sélectionner du texte.

### 2. Copier / Coller et le Presse-papiers

Vim utilise ses propres "registres" (mémoires) pour copier/coller, ce qui est différent du `Ctrl+C` / `Ctrl+V` classique.

- **`y` (Yank)** : Copier.
- **`p` (Put)** : Coller.
- **`d` (Delete)** : Coupe (supprime et copie) le texte. _Attention : si vous supprimez quelque chose, cela remplace ce que vous aviez copié avant !_

> **Astuce :** Utiliser le presse-papiers du système
> Si configuré, vous pouvez utiliser `"+y` pour copier vers le système et `"+p` pour coller depuis le système.
> Sinon, utilisez les raccourcis classiques `Ctrl+C` / `Ctrl+V` en mode Insertion.

### 3. La Grammaire (Action + Mouvement)

Beaucoup de commandes fonctionnent comme une phrase : **Verbe + Nom**

- `d` (Action: supprimer) + `w` (Mouvement: mot) = `dw` (Supprimer un mot)
- `c` (Action: changer) + `$` (Mouvement: fin de ligne) = `c$` (Changer jusqu'à la fin de la ligne)

---

## ⌨️ Raccourcis Standards Vim

### Mouvements de Base (Mode Normal)

| Touche          | Action                           | Astuce                        |
| :-------------- | :------------------------------- | :---------------------------- |
| `h` `j` `k` `l` | Gauche, Bas, Haut, Droite        | Restez sur la ligne de base ! |
| `w` / `b`       | Début du mot suivant / précédent | **w**ord / **b**ack           |
| `e`             | Fin du mot                       | **e**nd                       |
| `0` / `$`       | Début / Fin de ligne             |                               |
| `gg` / `G`      | Début / Fin du fichier           |                               |
| `}` / `{`       | Paragraphe suivant / précédent   | Très utile pour naviguer vite |

### Édition Rapide

| Touche     | Action                                 |
| :--------- | :------------------------------------- |
| `x`        | Supprimer le caractère sous le curseur |
| `u`        | Annuler (Undo)                         |
| `Ctrl + r` | Rétablir (Redo)                        |
| `dd`       | Couper (supprimer) la ligne entière    |
| `yy`       | Copier la ligne entière                |
| `p`        | Coller après le curseur                |
| `o`        | Insérer une nouvelle ligne en dessous  |
| `A`        | Insérer à la fin de la ligne courante  |

### Recherche

| Touche   | Action                            |
| :------- | :-------------------------------- |
| `/texte` | Rechercher "texte"                |
| `n`      | Aller au résultat suivant         |
| `N`      | Aller au résultat précédent       |
| `*`      | Rechercher le mot sous le curseur |

---

## 🚀 Fonctionnalités Avancées de l'Extension

### Vim Surround (Gérer les parenthèses, guillemets, etc.)

L'extension ajoute ces fonctionnalités puissantes pour manipuler ce qui entoure votre texte.

| Séquence | Action                                         | Exemple (` | ` = curseur)     |
| :------- | :--------------------------------------------- | :--------- | ---------------- |
| `cs"'`   | **C**hange **S**urround `"` to `'`             | `"tex      | te"`->`'texte'`  |
| `ds"`    | **D**elete **S**urround `"`                    | `"tex      | te"`->`texte`    |
| `ysiw"`  | **Y**ou **S**urround **I**n **W**ord avec `"`  | `tex       | te`->`"texte"`   |
| `ysiw(`  | Entourer le mot avec des parenthèses (+espace) | `tex       | te`->`( texte )` |
| `ysiw)`  | Entourer le mot avec des parenthèses (collées) | `tex       | te`->`(texte)`   |

### Vim EasyMotion (Navigation ultra-rapide)

| Touche             | Action                                                                                                                                      |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `<Espace> s <car>` | Aller à n'importe quelle occurrence du caractère tapé. Des marqueurs apparaîtront sur l'écran, tapez la lettre correspondante pour y aller. |

### Multi-Curseurs (Spécifique VSCode)

| Touche | Action                                                                          |
| :----- | :------------------------------------------------------------------------------ |
| `gb`   | Ajoute un curseur sur la prochaine occurrence du mot sélectionné (comme Ctrl+D) |

---

## 🛠️ Vos Raccourcis Personnalisés (Configurés)

### Touche Leader (`<Espace>`)

| Raccourci      | Action                      |
| :------------- | :-------------------------- |
| `<Espace> e`   | Basculer la barre latérale  |
| `<Espace> f f` | Ouverture rapide de fichier |
| `<Espace> s`   | Sauvegarder le fichier      |

### Navigation Fenêtres (Ctrl)

| Raccourci     | Action                                               |
| :------------ | :--------------------------------------------------- |
| `<C-h/j/k/l>` | Naviguer entre les fenêtres (Gauche/Bas/Haut/Droite) |

### Mode Insertion

| Raccourci | Action                            |
| :-------- | :-------------------------------- |
| `jj`      | Quitter le mode Insertion (Échap) |
| `<C-d>`   | Supprimer (Suppr)                 |
| `<C-h>`   | Retour arrière (Backspace)        |

### Raccourcis VSCode (keybindings.json)

| Raccourci             | Action                     | Contexte                |
| :-------------------- | :------------------------- | :---------------------- |
| `Shift + k`           | Afficher le survol (Hover) |                         |
| `Ctrl + Alt + Arrows` | Redimensionner la vue      |                         |
| `d` / `r` / `a`       | Supprimer/Renommer/Créer   | Explorateur de fichiers |
