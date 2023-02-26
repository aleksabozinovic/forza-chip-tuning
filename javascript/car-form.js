"use strict";

const markaSelector = document.querySelector(".marka select");
const modelSelector = document.querySelector(".model select");
const newOption = document.createElement("option");

markaSelector.addEventListener("change", (markEl) => {
  const markElement = markEl.target.value;
  modelSelector.disabled = false;

  if (markElement === "abarth") {
    let abarthModeli = [
      "124 Spider - 2016",
      "500 - 2007",
      "500 - 2015",
      "Grande Punto - 2005",
    ];

    abarthModeli.map((el) => {
      console.log(el);
      newOption.innerHTML = `<option value="fiat">${el}</option>`;
    });
    modelSelector.appendChild(newOption);
  }
});
