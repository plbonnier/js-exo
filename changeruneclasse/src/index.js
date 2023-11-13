const button = document.querySelector('.dropdown-btn');
const emoji = document.querySelector('.dropdown-menu-content');
button.addEventListener("click", function () {
  emoji.classList.toggle("visible");
});