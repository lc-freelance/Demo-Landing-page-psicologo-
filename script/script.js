const btn = document.querySelector("#btn");
const navlist = document.querySelector("#nav-list");

btn.addEventListener("click", function () {
  navlist.classList.toggle("aperto");
  btn.setAttribute("aria-expanded", navlist.classList.contains("aperto"));
});
console.log(btn);
console.log(navlist);
