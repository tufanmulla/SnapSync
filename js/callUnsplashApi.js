// const apiKey = "";
let page = 1; // Track the page number for infinite scrolling

// Function to fetch and display images
function fetchAndDisplayImages(searchTerm, page) {
  fetch(
    `https://api.unsplash.com/photos/random?client_id=${apiKey}&query=${searchTerm}&count=5&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Extract the image URLs from the response
      const imageUrls = data.map((photo) => photo.urls.regular);

      // Display the images on the webpage
      const horizontalDiv = document.querySelector(".horizontal");
      const verticalDiv = document.querySelector(".vertical");

      imageUrls.forEach((imageUrl) => {
        const horizontalImg = document.createElement("img");
        const verticalImg = document.createElement("img");
        horizontalImg.src = imageUrl;
        verticalImg.src = imageUrl;
        horizontalImg.alt = "Snap Sync Horizontal Images";
        verticalImg.alt = "Snap Sync Vertical Images";
        horizontalDiv.appendChild(horizontalImg);
        verticalDiv.appendChild(verticalImg);
      });
    })
    .catch((error) => console.error("Error fetching images:", error));
}

// Fetch and display images on page load
document.addEventListener("DOMContentLoaded", function () {
  const searchTerm = document.getElementById("search").value;
  fetchAndDisplayImages(searchTerm, page);
});

// Event listener for the scroll event
window.addEventListener("scroll", function () {
  // Check if the user is near the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    // Increase the page number for the next set of images
    page++;

    // Get the search term from the input box
    const searchTerm = document.getElementById("search").value;

    // Fetch and display more images
    fetchAndDisplayImages(searchTerm, page);
  }
});

// Event listener for the form submission
document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the search term from the input box
    const searchTerm = document.getElementById("search").value;

    // Clear previous images
    document.getElementById("imageContainer").innerHTML = "";

    // Reset the page number
    page = 1;

    // Fetch and display images based on the new search term
    fetchAndDisplayImages(searchTerm, page);
  });
