export interface Competence {
  nom: string;
  path: string;
  description: string;
}

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const competenceData: Competence[] = [
  {
    nom: "HTML",
    path: `${base}/icons/html.svg`,
    description:
      "Permet de structurer le texte, les images et les liens d'une page.",
  },
  {
    nom: "JS",
    path: `${base}/icons/js.svg`,
    description:
      "Ajoute de l'interaction (boutons, calculs, animations) aux sites.",
  },
  {
    nom: "TypeScript",
    path: `${base}/icons/typescript.svg`,
    description:
      "Ajoute du typage à JavaScript pour éviter les erreurs.",
  },
  {
    nom: "CSS",
    path: `${base}/icons/css.svg`,
    description: "Sert à définir les couleurs, les polices et la mise en page.",
  },
  {
    nom: "PHP",
    path: `${base}/icons/php.svg`,
    description:
      "Gère les comptes utilisateurs, les formulaires et les bases de données.",
  },
  {
    nom: "SQL",
    path: `${base}/icons/sql.svg`,
    description: "Langage utilisé pour communiquer avec les bases de données.",
  },
  {
    nom: "Bootstrap",
    path: `${base}/icons/Bootstrap.svg`,
    description:
      "Outil pour créer rapidement des sites qui s'adaptent aux mobiles.",
  },
  {
    nom: "tailwind",
    path: `${base}/icons/tailwind.svg`,
    description:
      "Permet de créer des designs modernes et précis très rapidement.",
  },
  {
    nom: "Git",
    path: `${base}/icons/git.svg`,
    description:
      "Logiciel qui enregistre l'historique du projet pour éviter les erreurs.",
  },
  {
    nom: "Node",
    path: `${base}/icons/node.svg`,
    description:
      "Permet d'utiliser JavaScript pour faire fonctionner tout le côté serveur.",
  },
  {
    nom: "React",
    path: `${base}/icons/react.svg`,
    description:
      "Outil pour construire des interfaces fluides et rapides pour l'utilisateur.",
  },
  {
    nom: "Next",
    path: `${base}/icons/next.svg`,
    description:
      "Outil pour construire des sites web rapides et fluides.",
  },
  {
    nom: "Wordpress",
    path: `${base}/icons/wordpress.svg`,
    description:
      "Outil pour construire des sites web facilement et rapidement.",
  },
];
