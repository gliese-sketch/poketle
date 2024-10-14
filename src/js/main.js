import data from "./data.json";

// === DOM Selection
const inputEl = document.querySelector("input");
const pokemonRow = document.querySelector("[data-pokemon-row]");

// Iterate over pokemon data
for (let obj of data) {
  const { name } = obj; // destructure
  // Step1: Create a paragraph
  const paragraph = document.createElement("p");
  // Step2: Paragraph ka content = pokemon ka name
  paragraph.textContent = name;
  // Step3: Paragraph ko pokemonRow mein add karana hai
  pokemonRow.appendChild(paragraph);
}

// === Add keyboard functionality
document.addEventListener("keyup", (event) => {
  if (event.key === "/") {
    console.log(`Slash was pressed`);
    inputEl.focus();
  }
});
