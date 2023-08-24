const menu = document.querySelector("svg");
menu.addEventListener("click", morph);
const nav = document.querySelector(".navigation");
const body = document.querySelector("body");
function morph() {
  menu.classList.toggle("open");
  nav.classList.toggle("active");
  body.classList.toggle("fixed");
}
