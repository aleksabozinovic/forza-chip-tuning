// "use strict";

// const markaSelector = document.querySelector(".marka select");
// const markaSelectorOption = document.querySelectorAll(".marka select option");
// const modelSelector = document.querySelector(".model select");
// const modelSelectorOption = document.querySelectorAll(".model select option");
// const gorivoSelector = document.querySelector(".gorivo select");
// const motorSelector = document.querySelector(".motor select");
// const pretragaDugme = document.querySelector(".pretraga__div a");
// const autoFirstName = document.querySelector(".auto--first--section--bg");
// const newOption = document.createElement("option");

// const showName = async function () {
//   try {
//     autoFirstName.innerHTML = `<h1>Abarth 500 / 1.4 Tjet 135hp</h1>`;
//     console.log("eee");
//   } catch (err) {
//     console.log(err);
//   }
// };
// markaSelector.addEventListener("change", (markEl) => {
//   gorivoSelector.innerHTML = `<option disabled selected>Izaberite Motor Vozila</option>`;
//   motorSelector.innerHTML = `<option disabled selected>Izaberite Motor Vozila</option>`;
//   modelSelector.innerHTML = `<option disabled selected>Izaberite Model Vozila</option>`;

//   const markElement = markEl.target.value;
//   modelSelector.disabled = false;

//   if (markElement === "abarth") {
//     let abarthModeli = ["500 - 2007", "500 - 2015", "Grande Punto - 2005"];

//     abarthModeli.forEach((el, i) => {
//       let htmlModel = `<option data-abarthModelId="abarthModel${i}">${el}</option>`;
//       modelSelector.insertAdjacentHTML("beforeend", htmlModel);
//     });
//     // console.log(modelSelector.children);
//     modelSelector.addEventListener("change", (modelEl) => {
//       gorivoSelector.innerHTML = `<option disabled selected>Izaberite Motor Vozila</option>`;
//       motorSelector.innerHTML = `<option disabled selected>Izaberite Motor Vozila</option>`;
//       const modelElement = modelEl.target.value;

//       gorivoSelector.disabled = false;
//       gorivoSelector.insertAdjacentHTML(
//         "beforeend",
//         `<option value="benzin">Benzin</option>`
//       );

//       gorivoSelector.addEventListener("change", (gorivoEl) => {
//         const gorivoElement = gorivoEl.target.value;

//         if (gorivoElement === "benzin") {
//           motorSelector.disabled = false;
//           if (modelElement === "500 - 2007") {
//             motorSelector.innerHTML = `<option selected>Izaberite Motor Vozila</option>`;
//             const abarthMotor = [
//               "1.4 Tjet 135hp",
//               "1.4 Tjet 140hp",
//               "1.4 Tjet 180hp 595 Competizione",
//               "1.4 Tjet 180hp 695 Tributo Ferrari",
//               "1.4 Tjet 180hp 695 Tributo Maserati",
//               "1.4 Tjet 190hp Assetto Corse",
//               "1.4 Tjet 190hp 695 Biposto",
//             ];
//             abarthMotor.forEach((el) => {
//               let htmlMotor = `<option value="${el}">${el}</option>`;
//               motorSelector.insertAdjacentHTML("beforeend", htmlMotor);
//             });
//           }

//           if (modelElement === "500 - 2015") {
//             motorSelector.innerHTML = `<option selected>Izaberite Motor Vozila</option>`;

//             const abarthMotor = [
//               "1.4 Tjet 135hp 595",
//               "1.4 Tjet 140hp 595",
//               "1.4 Tjet 145hp 595",
//               "1.4 Tjet 165hp 595 Turismo",
//               "1.4 Tjet 180hp 595 Competizione / Rivale",
//               "1.4 Tjet 190hp 695 Biposto",
//             ];
//             abarthMotor.forEach((el) => {
//               let htmlMotor = `<option value="${el}">${el}</option>`;
//               motorSelector.insertAdjacentHTML("beforeend", htmlMotor);
//             });
//             // pretragaDugme.classList.add("active");
//           }

//           if (modelElement === "Grande Punto - 2005") {
//             motorSelector.innerHTML = `<option selected>Izaberite Motor Vozila</option>`;

//             const abarthMotor = ["1.4 Tjet 155hp", "1.4 Tjet 180hp Supersport"];
//             abarthMotor.forEach((el) => {
//               let htmlMotor = `<option value="${el}">${el}</option>`;
//               motorSelector.insertAdjacentHTML("beforeend", htmlMotor);
//             });
//             // pretragaDugme.classList.add("active");
//           }

//           // motorSelector.querySelectorAll("option").forEach((element) => {
//           //   console.log(element.value);
//           // });
//         }
//       });
//       motorSelector.addEventListener("change", (motorEl) => {
//         const motorElement = motorEl.target.value;
//         if (motorElement === "1.4 Tjet 135hp") {
//           pretragaDugme.classList.add("active");

//           pretragaDugme.addEventListener("click", (e) => {
//             window.onload(() => {
//               console.log("load");
//             });
//           });
//         }
//       });
//     });
//   }
// });
