  // Get all the buttons with data-image attribute
  const buttons = document.querySelectorAll('[data-image]');

  // Add click event listeners to each button
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Get the image path from the data-image attribute of the clicked button
      const imagePath = button.getAttribute('data-image');

      // Get the closest card element to the clicked button
      const card = button.closest('.card');

      // Get the card header element within the closest card
      const cardHeader = card.querySelector('.card-header img');

      // Set the card header image source to the clicked image path
      cardHeader.src = imagePath;
    });
  });
