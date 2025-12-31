document.addEventListener("DOMContentLoaded", () => {
  // Check if projectsData is defined (loaded from projects-data.js)
  if (typeof competenceData === "undefined") {
    console.error(
      "competenceData is not defined. Make sure competence-data.js is loaded before load-competence.js"
    );
    return;
  }

  competenceData.forEach((competence) => {
    // Find the specific carousel container by ID
    const competenceListElement = document.getElementById("competences-list");

    if (competenceListElement) {
      const projectCard = document.createElement("div");
      projectCard.classList.add("competence-item");
      projectCard.setAttribute("data-tooltip", competence.description);

      projectCard.innerHTML = `
                <img src="${competence.path}" alt="${competence.nom}" width="80px" height="80px" />
                <span>${competence.nom}</span>
            `;

      competenceListElement.appendChild(projectCard);
    } else {
      console.warn(`not load`);
    }
  });

  // Dispatch a custom event to signal content is loaded, in case we need to re-init carousel
  // (Though our carousel.js uses event delegation/live calculation so it shouldn't matter)
  document.dispatchEvent(new Event("projectsLoaded"));
});
