import data from "./data.json";

// === DOM Selection
const inputEl = document.querySelector("input");
const pokemonRow = document.querySelector("[data-pokemon-row]");

// Iterate over pokemon data
for (let obj of data) {
  const { name, image, description } = obj; // destructure

  // Step1: Create a paragraph
  const paragraph = document.createElement("p");
  // Step2: Paragraph ka content = pokemon ka name
  paragraph.textContent = name;
  // Step3: Paragraph ko pokemonRow mein add karana hai
  pokemonRow.appendChild(pokemonCard(name, image, description));
}

function pokemonCard(name, image, description) {
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `
    <div class="card">
    <img
      src="${image}"
      class="card-img-top"
      alt="${name}"
    />
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
    </div>
  </div>
  `;

  return div;
}

// === Add keyboard functionality
document.addEventListener("keyup", (event) => {
  if (event.key === "/") {
    console.log(`Slash was pressed`);
    inputEl.focus();
  }
});
