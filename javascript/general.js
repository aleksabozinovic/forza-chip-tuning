"use strict";

let navbar = document.querySelector("nav");
let navPos = navbar.getBoundingClientRect().top;
let hamburger = document.querySelector("#hamburger");
let overlay = document.querySelector(".overlay");
let dropdown = document.querySelector(".dropdown");
let dropdownMenu = document.querySelector(".dropdown-menu");

///////////////////
// STICKY NAV

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) navbar.classList.add("active");
  else navbar.classList.remove("active");
});

///////////////////
// Responsive Nav

hamburger.addEventListener("click", (el) => {
  let burger = el.target.closest("div");
  burger.classList.toggle("open");
  document.querySelector(".nav--col--2").classList.toggle("active");
  if (!navbar.classList.contains("active")) navbar.classList.toggle("active");
  document.querySelector("body").classList.toggle("stop-scroll");
  overlay.classList.toggle("active");
});

///////////////////
// DropDown

// dropdown.addEventListener("click", (e) => {
//   e.preventDefault();
//   dropdownMenu.classList.toggle("active");
//   e.target.closest("a").classList.toggle("active");
// });
