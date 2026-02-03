"use client";

export default function Accueil() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (

    <section id="acceuil">
      <div className="container">
        <div className="boite-acceuil border">
          <h1 className="main-title">Robin Basjardin</h1>
          <p className="subtitle">
            Développeur Web junior- Back-end - Front-end
          </p>
        </div>
        <p className="description">
          Ici, vous trouver mes projects, ainsi que des informations sur mes
          compétences. <br />
          Si vous voulez me contacter cliquer sur le bouton ci-dessous.
        </p>
      </div>
      <button type="button" className="button_acceuil border" onClick={scrollToContact}>
        Me contacter
      </button>

    </section>
  );
}
