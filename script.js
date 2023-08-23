const menu = document.querySelector("svg");
menu.addEventListener("click", morph);
const nav = document.querySelector(".navigation");

function morph() {
  menu.classList.toggle("open");
  nav.classList.toggle("active");
}
