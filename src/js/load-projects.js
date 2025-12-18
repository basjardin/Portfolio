document.addEventListener('DOMContentLoaded', () => {
    // Check if projectsData is defined (loaded from projects-data.js)
    if (typeof projectsData === 'undefined') {
        console.error('projectsData is not defined. Make sure projects-data.js is loaded before load-projects.js');
        return;
    }

    projectsData.forEach(project => {
        // Find the specific carousel container by ID
        const carouselElement = document.getElementById(project.targetCarouselId);
        
        if (carouselElement) {
          const container = carouselElement.querySelector('.contenu');
          if (container) {
            const projectCard = document.createElement('div');
            projectCard.classList.add('projet', 'border');

            projectCard.innerHTML = `
                <div class="titre-projet">
                <h2>${project.title}</h2>
                <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="description-projet">
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">
                    <button>voir le projet</button>
                </a>
                </div>
            `;
            
            container.appendChild(projectCard);
          }
        } else {
            console.warn(`Carousel with ID "${project.targetCarouselId}" not found for project "${project.title}"`);
        }
    });

    // Dispatch a custom event to signal content is loaded, in case we need to re-init carousel
    // (Though our carousel.js uses event delegation/live calculation so it shouldn't matter)
    document.dispatchEvent(new Event('projectsLoaded'));
});
