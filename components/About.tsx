import { competenceData } from "@/data/competences";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

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
                src={assetPath(competence.path)}
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
            Titulaire d&apos;un BUT MMI (Bac+3), je conçois et développe des sites
            et des applications web, du front-end au back-end. Curieux et
            rigoureux, j&apos;apprends vite et j&apos;aime comprendre un problème
            en profondeur avant d&apos;y répondre. De la maquette à la mise en
            ligne, je transforme un besoin concret en interface soignée et
            fonctionnelle.
          </p>
        </div>
        <div id="actuellement" className="border">
          <h2 className="text-3xl md:text-4xl">Actuellement</h2>
          <p className="text-lg md:text-xl">
            Diplômé du BUT MMI et certifié Opquast (891/1000), je suis à la
            recherche de mon premier poste de développeur web, et ouvert
            également à un stage ou à une mission. Basé à Elbeuf en Normandie,
            permis B et véhiculé, je suis prêt à m&apos;investir dans des projets
            concrets au sein d&apos;une équipe.
          </p>
        </div>
      </div>
    </section>
  );
}
