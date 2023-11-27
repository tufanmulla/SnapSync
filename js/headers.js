// Define All The Necessary Element First. Starts Are Here.
let sshMenuBarButton = document.getElementById("sshMenuBarButton");
let sshMenu = document.querySelector(".sshMenu");

// =============================================================================
// When Users Click On The #sshMenuBarButton Element Then Add .sshMenuToggle At .sshMenu Then Toggling The .sshMenu.
sshMenuBarButton.addEventListener("click", function () {
  console.log("user clicked");
  if (!sshMenu.classList.contains("sshMenuToggle")) {
    sshMenu.classList.add("sshMenuToggle");
  } else {
    sshMenu.classList.remove("sshMenuToggle");
  }
});
// Add an event listener to the document to close the menu when clicking outside of it.
document.addEventListener("click", function (event) {
  // Check if the clicked element is outside both the menu button and the menu itself
  if (
    !event.target.closest("#sshMenuBarButton") &&
    !event.target.closest(".sshMenu") &&
    sshMenu.classList.contains("sshMenuToggle")
  ) {
    sshMenu.classList.remove("sshMenuToggle");
  }
});
