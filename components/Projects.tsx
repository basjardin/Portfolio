import { projectsData } from "@/data/projects";
import Carousel from "./Carousel";
import Image from "next/image";
import { assetPath } from "@/lib/utils";
import Badge, { type BadgeProps } from "./badge";
import { Lens } from "./ui/lens";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const webProjects = projectsData.filter((p) => p.targetCarouselId === "carousel-1");
const otherProjects = projectsData.filter((p) => p.targetCarouselId === "carousel-2");

function ProjectCard({
  title,
  image,
  description,
  link,
  badges,
}: {
  title: string;
  image: string;
  description: string;
  link: string;
  badges: BadgeProps[];
}) {
  return (
    <Card className="flex flex-col overflow-hidden h-[450px] w-full border-border bg-card text-card-foreground rounded-3xl">
      {/* Image Section */}
      <div className="min-h-[240px] relative overflow-hidden bg-muted transition-colors">
        <Lens zoomFactor={2} className="h-full w-full">
          <Image
            src={assetPath(image)}
            alt={title}
            fill
            className="object-cover opacity-90 transition-opacity hover:opacity-100"
          />
        </Lens>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-6 pb-2 pt-5 text-left">
        <div className="flex justify-between items-start mb-2">
          <CardHeader className="p-0 flex-1">
            <CardTitle className="text-xl font-semibold tracking-tight line-clamp-1">
              {title}
            </CardTitle>
          </CardHeader>
        </div>

        <CardContent className="p-0 flex-1">
          <Badge badges={badges} />

          <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-3 max-h-[68.25px] overflow-hidden text-ellipsis">
            {description}
          </CardDescription>
        </CardContent>

        <div className="mt-auto pt-2 b-0 bottom-0 relative">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button
              className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl text-base transition-all shadow-lg active:scale-[0.98]"
            >
              voir le projet
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
}

export default function Projects() {
  return (
    <section id="project">
      <h2 className="text-3xl md:text-4xl">Mes Projets</h2>
      <h3 className="text-xl md:text-2xl">Projet dans le développement web</h3>
      <Carousel carouselId="carousel-1">
        {webProjects.map((project) => (
          <ProjectCard
            key={`${project.targetCarouselId}-${project.title}-${project.link}`}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
            badges={project.badges}
          />
        ))}
      </Carousel>
      <h3 className="text-xl md:text-2xl">Autres projets</h3>
      <Carousel carouselId="carousel-2">
        {otherProjects.map((project) => (
          <ProjectCard
            key={`${project.targetCarouselId}-${project.title}-${project.link}`}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
            badges={project.badges}
          />
        ))}
      </Carousel>
    </section>
  );
}
