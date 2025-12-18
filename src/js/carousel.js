document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carrousel');
  
    carousels.forEach(carousel => {
      const container = carousel.querySelector('.contenu');
      const prevBtn = carousel.querySelector('#btn-prev');
      const nextBtn = carousel.querySelector('#btn-next');
  
      if (!container || !prevBtn || !nextBtn) {
        console.warn('Carousel elements not found in one of the .carrousel containers');
        return;
      }
  
      const scrollNext = () => {
        const items = Array.from(container.querySelectorAll('.projet'));
        const containerRect = container.getBoundingClientRect();
  
        // Finds the first item that is visibly to the right of the container's left edge
        // We use a small tolerance (10px) to ignore items that are already snapped to the edge
        const nextItem = items.find(item => {
          const itemRect = item.getBoundingClientRect();
          return itemRect.left > containerRect.left + 10;
        });
  
        if (nextItem) {
          // Calculate precise distance to scroll
          const delta = nextItem.getBoundingClientRect().left - containerRect.left;
          container.scrollBy({ left: delta, behavior: 'smooth' });
        }
      };
  
      const scrollPrev = () => {
        const items = Array.from(container.querySelectorAll('.projet'));
        const containerRect = container.getBoundingClientRect();
  
        // Find items that are visibly to the left of the container's left edge
        // logic: itemRect.left < containerRect.left - 10
        // We want the closest one (the last one in the filtered list)
        // This makes the item slide IN from the left to snap to the edge
        const prevItems = items.filter(item => {
          const itemRect = item.getBoundingClientRect();
          return itemRect.left < containerRect.left - 10; // tolerance
        });
  
        const targetItem = prevItems[prevItems.length - 1];
  
        if (targetItem) {
          const delta = targetItem.getBoundingClientRect().left - containerRect.left;
          container.scrollBy({ left: delta, behavior: 'smooth' });
        }
      };
  
      nextBtn.addEventListener('click', scrollNext);
      prevBtn.addEventListener('click', scrollPrev);
    });
  });
