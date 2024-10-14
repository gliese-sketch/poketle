import data from "./data.json";
import PokemonCard from "./components/PokemonCard";

// === DOM Selection
const inputEl = document.querySelector("input");
const pokemonRow = document.querySelector("[data-pokemon-row]");

// Iterate over pokemon data
for (let obj of data) {
  const { name, image, description, link } = obj; // destructure
  pokemonRow.appendChild(PokemonCard(name, image, description, link));
}

// === Add keyboard functionality
document.addEventListener("keyup", (event) => {
  if (event.key === "/") {
    console.log(`Slash was pressed`);
    inputEl.focus();
  }
});
