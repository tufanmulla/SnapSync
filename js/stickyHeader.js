// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
let header = document.getElementById("ssh");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when users reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
