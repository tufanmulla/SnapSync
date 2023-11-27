const apiKey = "QS9d2PodO1ovl-TNkgj52sevLJQdyr7e5KBLO0EWEEw";

document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the search term from the input box
    const searchTerm = document.getElementById("search").value;

    // Fetch images based on the search term
    fetch(
      `https://api.unsplash.com/photos/random?client_id=${apiKey}&query=${searchTerm}&count=5`
    )
      .then((response) => response.json())
      .then((data) => {
        // Extract the image URLs from the response
        const imageUrls = data.map((photo) => photo.urls.regular);

        // Display the images on the webpage
        const imageContainer = document.getElementById("imageContainer");
        imageContainer.innerHTML = ""; // Clear previous images

        imageUrls.forEach((imageUrl) => {
          const img = document.createElement("img");
          img.src = imageUrl;
          img.alt = "Unsplash Image";
          imageContainer.appendChild(img);
        });
      })
      .catch((error) => console.error("Error fetching images:", error));
  });
