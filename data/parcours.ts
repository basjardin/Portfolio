import { BadgeProps } from "@/components/badge";

export interface ParcoursItem {
  titre: string;
  lieu: string;
  periode: string;
  description: string;
  badges?: BadgeProps[];
}

export const experiencesData: ParcoursItem[] = [
  {
    titre: "Stage — Refonte d'un site WordPress",
    lieu: "GreenNature, Préaux",
    periode: "2026 · 3 mois",
    description:
      "Refonte du site WordPress de l'entreprise, de la reprise du contenu existant jusqu'à la mise en ligne.",
    badges: [
      { text: "WordPress", color: "blue" },
      { text: "PHP", color: "purple" },
      { text: "CSS", color: "blue" },
    ],
  },
  {
    titre: "Stage de recherche — Amélioration de l'ergonomie",
    lieu: "Laboratoire LITIS, Université de Rouen, Normandie",
    periode: "2025 · 8 semaines",
    description:
      "Stage de recherche consacré à l'amélioration de l'ergonomie d'une interface, en lien avec l'équipe du laboratoire.",
    badges: [
      { text: "UX / UI", color: "violet" },
      { text: "Recherche", color: "gray" },
    ],
  },
];

export const formationData: ParcoursItem[] = [
  {
    titre: "BUT MMI",
    lieu: "Elbeuf, Normandie",
    periode: "2023 – 2026",
    description:
      "Spécialisation en développement web (front-end et back-end), gestion de projet et UX/UI design.",
  },
  {
    titre: "Bac STI2D",
    lieu: "Lycée technologique Ferdinand Buisson, Elbeuf",
    periode: "2020 – 2023",
    description:
      "Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable.",
  },
];

export const certificationData: ParcoursItem[] = [
  {
    titre: "Opquast — Maîtrise de la qualité en projet web",
    lieu: "Niveau Avancé",
    periode: "891 / 1000",
    description:
      "Certification sur les bonnes pratiques du web : accessibilité, référencement, performance et expérience utilisateur.",
  },
];
