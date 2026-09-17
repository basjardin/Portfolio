import {
  certificationData,
  experiencesData,
  formationData,
  type ParcoursItem,
} from "@/data/parcours";
import Badge from "./badge";

function ParcoursEntry({ titre, lieu, periode, description, badges }: ParcoursItem) {
  return (
    <div className="parcours-item">
      <div className="parcours-item-head">
        <h4 className="text-lg md:text-xl">{titre}</h4>
        <span className="parcours-periode text-base">{periode}</span>
      </div>
      <span className="parcours-lieu text-base">{lieu}</span>
      <p className="text-base md:text-lg">{description}</p>
      {badges && <Badge badges={badges} />}
    </div>
  );
}

function ParcoursBloc({
  titre,
  items,
}: {
  titre: string;
  items: ParcoursItem[];
}) {
  return (
    <div className="parcours-bloc border">
      <h3 className="text-2xl md:text-3xl">{titre}</h3>
      {items.map((item) => (
        <ParcoursEntry key={`${titre}-${item.titre}`} {...item} />
      ))}
    </div>
  );
}

export default function Parcours() {
  return (
    <section id="parcours">
      <h2 className="text-3xl md:text-4xl">Mon parcours</h2>
      <div className="parcours-container">
        <ParcoursBloc titre="Expérience professionnelle" items={experiencesData} />
        <div className="parcours-colonne">
          <ParcoursBloc titre="Formation" items={formationData} />
          <ParcoursBloc titre="Certification" items={certificationData} />
        </div>
      </div>
    </section>
  );
}
