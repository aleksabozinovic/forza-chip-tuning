"use strict";

const markaSelector = document.querySelector(".marka select");
const modelSelector = document.querySelector(".model select");
const newOption = document.createElement("option");

markaSelector.addEventListener("change", (markEl) => {
  const markElement = markEl.target.value;
  modelSelector.disabled = false;

  if (markElement === "abarth") {
    let abarthModeli = {
        "value"
    }
    newOption.innerHTML = `<option value="fiat">Fiat</option>`;
    modelSelector.appendChild(newOption);
  }

});
