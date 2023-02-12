"use strict";

let navbar = document.querySelector("nav");
let navPos = navbar.getBoundingClientRect().top;
let hamburger = document.querySelector("#hamburger");
let overlay = document.querySelector(".overlay");
let dropdown = document.querySelector(".dropdown");
let dropdownMenu = document.querySelector(".dropdown-menu");
let dropdownEl = document.querySelector("#dropdown--el");
let dropdownEl_1 = document.querySelector("#dropdown--el--1");
let dropdownEl_2 = document.querySelector("#dropdown--el--2");
let saznajteViseDugme = document.querySelector("#saznaj__vise--div");
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

dropdown.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("open");
  dropdownMenu.classList.toggle("active");
  dropdownEl.classList.add("active");
});

window.addEventListener("click", (e) => {
  if (e.target == dropdownMenu) return;

  if (e.target != dropdownMenu && e.target != dropdownEl) {
    dropdownMenu.classList.remove("active");
    dropdownEl.classList.remove("active");
    dropdown.classList.remove("open");
  }
});

dropdownEl_1.addEventListener("click", (e) => {
  location.href = "/chip-tuning.html";
});

dropdownEl_2.addEventListener("click", (e) => {
  location.href = "/ostale-usluge.html";
});

saznajteViseDugme?.addEventListener("click", (e) => {
  location.href = "/chip-tuning.html";
});

// PAGE TRANSITION

// const swup = new Swup({
//   plugins: [
//     new SwupHeadPlugin({
//       persistAssets: true,
//     }),
//   ],
// });

// PAGE SCROLL ANIMATIONS

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
const blur = document.querySelectorAll(".blur");

//

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("hidden");
  entry.target.classList.add("show");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

hiddenElements.forEach(function (section) {
  sectionObserver.observe(section);
});
