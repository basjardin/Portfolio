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
    title: "Premier site web",
    image: "/img/premier-site-web.png",
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
    targetCarouselId: "carousel-1",
    title: "Premier Portfolio",
    image: "/img/premier portfolio.png",
    description:
      "Mon premier portfolio réalisé avec HTML, CSS et JavaScript.",
    link: "https://basjardin.github.io/porfolio/",
    badges: [
      { text: "HTML", color: "orange" },
      { text: "CSS", color: "blue" },
      { text: "JavaScript", color: "yellow" },
    ],
  },
  {
    targetCarouselId: "carousel-1",
    title: "Application pour prof bénévole",
    image: "/img/pas image.png",
    description:
      "Application en PHP pour les professeurs bénévoles pour aider les élèves en difficulté scolaire.",
    link: "https://github.com/basjardin/SAE401",
    badges: [
      { text: "PHP", color: "purple" },
      { text: "SQL", color: "blue" },
      { text: "Bootstrap", color: "violet" },
    ],
  },
  {
    targetCarouselId: "carousel-2",
    title: "jeux vidéo unity",
    image: "/img/pas image.png",
    description: "premeir jeux vidéo 3D créer sur unity.",
    link: "https://github.com/basjardin/Anomalia",
    badges: [
      { text: "Unity", color: "gray" },
      { text: "C#", color: "green" },
    ],
  },
  {
    targetCarouselId: "carousel-1",
    title: "App en codeigniter",
    image: "/img/pas image.png",
    description: "premiere app créer avec codeigniter",
    link: "https://github.com/basjardin/reservation",
    badges: [
      { text: "CodeIgniter", color: "red" },
      { text: "PHP", color: "purple" },
      { text: "SQL", color: "blue" },
    ],
  },
  {
    targetCarouselId: "carousel-2",
    title: "Autre projet Unity",
    image: "/img/pas image.png",
    description: "Un autre projet de jeux vidéo réalisé avec Unity.",
    link: "https://github.com/basjardin/R307-shooter",
    badges: [
      { text: "Unity", color: "gray" },
      { text: "C#", color: "green" },
    ],
  },
  {
    targetCarouselId: "carousel-1",
    title: "curseforge mod award 2025",
    image: "/img/pas image.png",
    description:
      "site pour voir les mods qu'ont pouvez voter pendant le mod award 2025.",
    link: "https://basjardin.github.io/curseforge-mod-award-2025/",
    badges: [
      { text: "HTML", color: "orange" },
      { text: "CSS", color: "blue" },
      { text: "JavaScript", color: "yellow" },
    ],
  },
];


