// =============================================================================
// Define All The Necessary Element First. Starts Are Here.
// Clickable Button is #sshMenuBarButton
let sshMenuBar = document.getElementById("sshMenuBarButton");
// Open Then .sshMenu When Click On The #sshMenuBarButton
let sshMenu = document.querySelector(".sshMenu");
// Define All The Necessary Element First. Ends Are Here.
// =============================================================================

// =============================================================================
// When Users Click On The #sshMenuBarButton Element Then Show The Menu Links SideBar Which is .sshMenu. Starts Are Here.

sshMenu.style.display = "none";

// Initially Hide The .sshMenu

sshMenuBar.addEventListener("click", function () {
  if (sshMenu.style.display === "none") {
    sshMenu.style.display = "block";
    sshMenu.style.transition = "all 0.3s";
  } else {
    sshMenu.style.display = "none";
  }
});
// When UsersClick On The #sshMenuBarButton Element Then Show The Menu Links SideBar. Which is .sshMenu. Ends Are Here.
// =============================================================================
