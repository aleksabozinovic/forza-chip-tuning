"use strict";

let navbar = document.querySelector("nav");
let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) navbar.classList.add("active");
  else navbar.classList.remove("active");
});
