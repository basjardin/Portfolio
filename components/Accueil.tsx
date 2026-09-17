"use client";

export default function Accueil() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (

    <section id="acceuil">
      <div className="container">
        <div className="boite-acceuil border">
          <h1 className="main-title text-4xl md:text-5xl">Robin Basjardin</h1>
          <p className="subtitle text-lg md:text-xl">
            Développeur Web — Front-end &amp; Back-end
          </p>
        </div>
        <p className="description text-lg md:text-xl">
          Ici, vous trouverez mes projets, mon parcours ainsi que des
          informations sur mes compétences. <br />
          Si vous voulez me contacter, cliquez sur le bouton ci-dessous.
        </p>
      </div>
      <button type="button" className="button_acceuil border text-lg md:text-xl" onClick={scrollToContact}>
        Me contacter
      </button>

    </section>
  );
}
