import { assetPath } from "@/lib/utils";

export interface ProjectItem {
  targetCarouselId: string;
  title: string;
  image: string;
  description: string;
  link: string;
}

export const projectsData: ProjectItem[] = [
  {
    targetCarouselId: "carousel-1",
    title: "premier site web",
    image: assetPath("/img/premier-site-web.png"),
    description:
      "Mon premier site web, réalisé avec HTML, CSS et JavaScript.",
    link: "https://github.com/basjardin/premier_site_web",
  },
  {
    targetCarouselId: "carousel-1",
    title: "Premier Portfolio",
    image: assetPath("/img/premier portfolio.png"),
    description:
      "Mon premier portfolio réalisé avec HTML, CSS et JavaScript.",
    link: "https://basjardin.github.io/porfolio/",
  },
  {
    targetCarouselId: "carousel-1",
    title: "Application pour prof bénévole",
    image: assetPath("/img/pas image.png"),
    description:
      "Application en PHP pour les professeurs bénévoles pour aider les élèves en difficulté scolaire.",
    link: "https://github.com/basjardin/SAE401",
  },
  {
    targetCarouselId: "carousel-2",
    title: "jeux vidéo unity",
    image: assetPath("/img/pas image.png"),
    description: "premeir jeux vidéo 3D créer sur unity.",
    link: "https://github.com/basjardin/Anomalia",
  },
  {
    targetCarouselId: "carousel-1",
    title: "App en codeigniter",
    image: assetPath("/img/pas image.png"),
    description: "premiere app créer avec codeigniter",
    link: "https://github.com/basjardin/reservation",
  },
  {
    targetCarouselId: "carousel-2",
    title: "Autre projet Unity",
    image: assetPath("/img/pas image.png"),
    description: "Un autre projet de jeux vidéo réalisé avec Unity.",
    link: "https://github.com/basjardin/R307-shooter",
  },
  {
    targetCarouselId: "carousel-1",
    title: "curseforge mod award 2025",
    image: assetPath("/img/pas image.png"),
    description:
      "site pour voir les mods qu'ont pouvez voter pendant le mod award 2025.",
    link: "https://basjardin.github.io/curseforge-mod-award-2025/",
  },
];

