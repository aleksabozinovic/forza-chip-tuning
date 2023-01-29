"use strict";

///////////////////
// STICKY NAV

let navbar = document.querySelector("nav");
let navPos = navbar.getBoundingClientRect().top;
let hamburger = document.querySelector("#hamburger");
let overlay = document.querySelector(".overlay");

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
  console.log("aki");
  overlay.classList.toggle("active");
});
