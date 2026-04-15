const favoriteBtns = document.querySelectorAll(".favorite-icon");

favoriteBtns.forEach((button) => {
  button.addEventListener("click", () => {
    // Toggle the red color class
    button.classList.toggle("filled");

    // Update the heart icon symbol
    if (button.classList.contains("filled")) {
      button.innerHTML = "&#10084;"; //Filled heart
    } else {
      button.innerHTML = "&#9825;"; //Empty heart
    }
  });
});
