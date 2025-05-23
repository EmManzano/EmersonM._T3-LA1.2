function handleImageInteractions() {
  const postContainers = document.querySelectorAll('.post-container');

  postContainers.forEach(container => {
    const likeButton = container.querySelector('.like-button');
    const commentButton = container.querySelector('.comment-button');
    const shareButton = container.querySelector('.share-button');
    const likeCount = container.querySelector('.like-count');
    const commentCount = container.querySelector('.comment-count');
    const shareCount = container.querySelector('.share-count');
    const viewGridButton = container.querySelector('.view-grid-button');
    const viewListButton = container.querySelector('.view-list-button');
    const postImage = container.querySelector('.post-image');
    const postDetails = container.querySelector('.post-details');

    let likes = parseInt(likeCount.textContent);
    let comments = parseInt(commentCount.textContent);
    let shares = parseInt(shareCount.textContent);

    if (likeButton) {
      likeButton.addEventListener('click', () => {
        likes++;
        likeCount.textContent = likes;
        // You would typically send an API request here to update the like count on the server
        console.log('Liked!');
      });
    }

    if (commentButton) {
      commentButton.addEventListener('click', () => {
        // Implement comment functionality here - perhaps show a comment input field
        console.log('Comment clicked!');
      });
    }

    if (shareButton) {
      shareButton.addEventListener('click', () => {
        shares++;
        shareCount.textContent = shares;
        // Implement sharing functionality here - perhaps show share options
        console.log('Shared!');
      });
    }

    if (viewGridButton && viewListButton && postImage && postDetails) {
      viewGridButton.addEventListener('click', () => {
        postImage.style.maxWidth = '350px'; // Adjust as needed for grid view
        postImage.style.width = '100%';
        postDetails.style.display = 'block'; // Or adjust as needed
        console.log('View Grid');
      });

      viewListButton.addEventListener('click', () => {
        postImage.style.maxWidth = '100%';
        postImage.style.width = '100%';
        postDetails.style.display = 'block'; // Ensure details are visible in list view
        console.log('View List');
      });
    }

    // Implement image carousel functionality if needed
    const dotsContainer = container.querySelector('.carousel-dots');
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];
    let currentIndex = 0;

    function updateCarousel() {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
      // In a real scenario, you would update the displayed image here
      console.log('Carousel updated to index:', currentIndex);
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    if (dots.length > 0) {
      updateCarousel(); // Initialize the carousel
    }
  });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', handleImageInteractions);