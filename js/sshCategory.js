// When someone click on sshCpartOne div then adding a borderBottom of that Particular div
let sshCategory = document.querySelectorAll(".sshCategory .clickable");
sshCategory.forEach((clickable) => {
  clickable.addEventListener("click", function () {
    if (!clickable.classList.contains("clickAbleNext")) {
      sshCategory.forEach((div) => {
        div.classList.remove("clickAbleNext");
      });
      clickable.classList.add("clickAbleNext");
    } else {
      clickable.classList.add("clickAbleNext");
    }
  });
});
