// =============================================================================
// Define All The Necessary Element First. Starts Are Here.
let sshMenuBarButton = document.getElementById("sshMenuBarButton");
let sshMenu = document.querySelector(".sshMenu");
// Define All The Necessary Element First. Ends Are Here.
// =============================================================================

// =============================================================================
// When Users Click On The #sshMenuBarButton Element Then Add .sshMenuToggle At .sshMenu Then Toggling The .sshMenu. Starts Are Here
sshMenuBarButton.addEventListener("click", function () {
  if (
    sshMenu.classList.contains("sshMenuToggle")
  ) {
    sshMenu.classList.remove("sshMenuToggle");
    sshMenu.classList.remove("sshMennuToggleZoomAniamation");
  } else {
    sshMenu.classList.add("sshMenuToggle");
    sshMenu.classList.add("sshMennuToggleZoomAniamation");
  }
});
// When Users Click On The #sshMenuBarButton Element Then Add .sshMenuToggle At .sshMenu Then Toggling The .sshMenu. Engs Are Here
// =============================================================================
