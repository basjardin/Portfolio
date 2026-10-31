// Formulaire de contact : envoi à Web3Forms sans quitter la page. Sans JS,
// le formulaire part en POST classique (action du HTML).

const formulaire = document.querySelector(".carte--contact form");
const statut = formulaire.querySelector(".formulaire__statut");
const boutonEnvoi = formulaire.querySelector("[type=submit]");

formulaire.addEventListener("submit", async (evenement) => {
  evenement.preventDefault();

  boutonEnvoi.disabled = true;
  statut.textContent = "// envoi en cours…";

  try {
    const reponse = await fetch(formulaire.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(formulaire),
    });
    const resultat = await reponse.json();

    if (!resultat.success) throw new Error(resultat.message);

    formulaire.reset();
    statut.textContent = "// message envoyé, merci !";
  } catch {
    statut.textContent = "// échec de l'envoi : écrivez-moi à basjardinrobin@gmail.com";
  } finally {
    boutonEnvoi.disabled = false;
  }
});
