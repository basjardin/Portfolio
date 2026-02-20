import { competenceData } from "@/data/competences";
import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="left border">
        <h2 className="text-3xl md:text-4xl">Compétences</h2>
        <div id="competences-list">
          {competenceData.map((competence) => (
            <div
              key={competence.nom}
              className="competence-item"
              data-tooltip={competence.description}
            >
              <Image
                src={competence.path}
                alt={competence.nom}
                width={80}
                height={80}
              />
              <span className="text-base">{competence.nom}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <div id="competences" className="border">
          <h2 className="text-3xl md:text-4xl">A propos de moi</h2>
          <p className="description text-lg md:text-xl">
            Passionné par le numérique, je crée des sites internet qui permettent
            aux entreprises et aux particuliers de se faire connaître sur le web.
            Mon rôle est de transformer vos idées en un outil moderne, élégant et
            simple à utiliser. De la conception à la mise en ligne, je m&apos;assure
            que votre site soit le reflet fidèle de votre activité.
          </p>
        </div>
        <div id="actuellement" className="border">
          <h2 className="text-3xl md:text-4xl">Actuellement</h2>
          <p className="text-lg md:text-xl">
            En 3ème année de BUT MMI, je recherche un stage de fin d&apos;études de
            14 semaines à partir de 9 mars 2026. Prêt à m&apos;investir dans des
            projets concrets, je souhaite rejoindre une équipe agile pour
            approfondir mes compétences en Développement Web.
          </p>
        </div>
      </div>
    </section>
  );
}
