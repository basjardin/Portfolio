import { BadgeProps } from "@/components/badge";

export interface ProjectItem {
  targetCarouselId: string;
  title: string;
  image: string;
  description: string;
  link: string;
  badges: BadgeProps[];
}


export const projectsData: ProjectItem[] = [
  {
    targetCarouselId: "carousel-1",
    title: "Refonte du site GreenNature",
    image: `/img/pas image.png`,
    description:
      "Refonte du site WordPress de GreenNature, réalisée pendant mon stage de 3 mois : reprise du contenu existant, mise en forme et mise en ligne.",
    link: "https://www.greennature.fr/",
    badges: [
      { text: "WordPress", color: "blue" },
      { text: "PHP", color: "purple" },
      { text: "CSS", color: "blue" },
    ],
  },
  {
    targetCarouselId: "carousel-1",
    title: "Réservation de matériel scolaire",
    image: `/img/pas image.png`,
    description:
      "Application de réservation de matériel scolaire développée avec CodeIgniter, Bootstrap et une base de données SQL.",
    link: "https://github.com/basjardin/reservation",
    badges: [
      { text: "CodeIgniter", color: "red" },
      { text: "PHP", color: "purple" },
      { text: "SQL", color: "blue" },
      { text: "Bootstrap", color: "violet" },
    ],
  },
  {
    targetCarouselId: "carousel-1",
    title: "Application pour professeurs bénévoles",
    image: `/img/pas image.png`,
    description:
      "Application en PHP destinée aux professeurs bénévoles qui accompagnent des élèves en difficulté scolaire.",
    link: "https://github.com/basjardin/SAE401",
    badges: [
      { text: "PHP", color: "purple" },
      { text: "SQL", color: "blue" },
      { text: "Bootstrap", color: "violet" },
    ],
  },
  {
    targetCarouselId: "carousel-1",
    title: "CurseForge Mod Awards 2025",
    image: `/img/pas image.png`,
    description:
      "Site permettant de consulter les mods soumis au vote pendant les CurseForge Mod Awards 2025.",
    link: "https://basjardin.github.io/curseforge-mod-award-2025/",
    badges: [
      { text: "HTML", color: "orange" },
      { text: "CSS", color: "blue" },
      { text: "JavaScript", color: "yellow" },
    ],
  },
  {
    targetCarouselId: "carousel-1",
    title: "Premier portfolio",
    image: `/img/premier portfolio.png`,
    description:
      "Mon premier portfolio, réalisé avec HTML, CSS et JavaScript.",
    link: "https://basjardin.github.io/porfolio/",
    badges: [
      { text: "HTML", color: "orange" },
      { text: "CSS", color: "blue" },
      { text: "JavaScript", color: "yellow" },
    ],
  },
  {
    targetCarouselId: "carousel-1",
    title: "Premier site web",
    image: `/img/premier-site-web.png`,
    description:
      "Mon premier site web, réalisé avec HTML, CSS et JavaScript.",
    link: "https://github.com/basjardin/premier_site_web",
    badges: [
      { text: "HTML", color: "orange" },
      { text: "CSS", color: "blue" },
      { text: "JavaScript", color: "yellow" },
    ],
  },
  {
    targetCarouselId: "carousel-2",
    title: "Anomalia",
    image: `/img/pas image.png`,
    description: "Mon premier jeu vidéo en 3D, créé avec Unity.",
    link: "https://github.com/basjardin/Anomalia",
    badges: [
      { text: "Unity", color: "gray" },
      { text: "C#", color: "green" },
    ],
  },
  {
    targetCarouselId: "carousel-2",
    title: "Projet de jeu vidéo en groupe",
    image: `/img/pas image.png`,
    description:
      "Jeu vidéo développé en équipe avec Unity dans le cadre du BUT MMI.",
    link: "https://github.com/basjardin/projet-unity-groupe",
    badges: [
      { text: "Unity", color: "gray" },
      { text: "C#", color: "green" },
    ],
  },
  {
    targetCarouselId: "carousel-2",
    title: "R307 — jeu de tir",
    image: `/img/pas image.png`,
    description: "Un autre projet de jeu vidéo réalisé avec Unity.",
    link: "https://github.com/basjardin/R307-shooter",
    badges: [
      { text: "Unity", color: "gray" },
      { text: "C#", color: "green" },
    ],
  },
];
