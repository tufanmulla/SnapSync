// Define All The Necessary Element First. Starts Are Here.
let sshMenuBarButton = document.getElementById("sshMenuBarButton");
let sshMenu = document.querySelector(".sshMenu");

// =============================================================================
// When Users Click On The #sshMenuBarButton Element Then Add .sshMenuToggle At .sshMenu Then Toggling The .sshMenu.
sshMenuBarButton.addEventListener("click", function () {
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

// let sshMenuContainer = document.querySelectorAll(
//   ".sshMenuContainer .sshMenuBoxLogo"
// );
// let sshMenuBoxLinks = document.querySelectorAll(
//   ".sshMenuContainer .sshMenuBoxLinks"
// );
// let arrowImg = document.querySelectorAll(".sshMenuContainer .arrowImg");

// sshMenuContainer.forEach((sshMenuBoxLogo, index) => {
//   sshMenuBoxLogo.addEventListener("click", () => {
//     console.log("clicked");

//     sshMenuBoxLinks.forEach((links, linksIndex) => {
//       arrowImg.forEach((img, imgIndex) => {
//         if (index === linksIndex && imgIndex) {
//           links.classList.toggle("sshMenuBoxLinksActive");
//           img.src = "../images/headerPictures/menuIcon/down-arrow.png";
//         } else {
//           links.classList.remove("sshMenuBoxLinksActive");
//           img.src = "../images/headerPictures/menuIcon/arrow-up.png";
//         }
//       });
//     });
//   });
// });

// When users Click on the .sshMenuBoxLogo then toggling the .sshMenuBoxLinks
let sshMenuContainer = document.querySelectorAll(
  ".sshMenuContainer .sshMenuBoxLogo"
);
let sshMenuBoxLinks = document.querySelectorAll(
  ".sshMenuContainer .sshMenuBoxLinks"
);
let arrowImgs = document.querySelectorAll(".sshMenuContainer .arrowImg");

sshMenuContainer.forEach((sshMenuBoxLogo, index) => {
  sshMenuBoxLogo.addEventListener("click", () => {
    console.log("clicked");

    sshMenuBoxLinks.forEach((links, linksIndex) => {
      if (index === linksIndex) {
        links.classList.toggle("sshMenuBoxLinksActive");
        
        // Toggle image source based on the menu state
        arrowImgs[index].src = links.classList.contains("sshMenuBoxLinksActive")
          ? "../images/headerPictures/menuIcon/down-arrow.png"
          : "../images/headerPictures/menuIcon/arrow-up.png";
      } else {
        links.classList.remove("sshMenuBoxLinksActive");
        arrowImgs[linksIndex].src =
          "../images/headerPictures/menuIcon/arrow-up.png";
      }
    });
  });
});
