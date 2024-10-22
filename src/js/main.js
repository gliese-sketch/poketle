import { shuffle } from "fast-shuffle";
import Fuse from "fuse.js";

import data from "./data.json";
import PokemonCard from "./components/PokemonCard";

// DOM Selection
const inputEl = document.querySelector("input");
const pokemonRow = document.querySelector("[data-pokemon-row]");

// Render
function renderPokemons(list) {
  // Empty the previous content
  pokemonRow.innerHTML = "";

  const fragment = document.createDocumentFragment();

  list.forEach((pokemonObj) => {
    const { name, image, description, link } = pokemonObj;
    const pokemon = PokemonCard(name, image, description, link);
    fragment.appendChild(pokemon);
  });

  pokemonRow.appendChild(fragment);
}

// Filtering
function renderFilterPokemons(input) {
  console.log("Filtering in progress!");
  if (!input) {
    return renderPokemons(data);
  }

  const options = {
    keys: ["name", "abilities"],
    threshold: 0.5,
  };

  const fuse = new Fuse(data, options);

  const filteredPokemons = fuse.search(input).map((obj) => obj.item);

  // Fallback Pokemon Card
  if (!filteredPokemons.length) {
    return renderPokemons([
      {
        name: "Not Found",
        image:
          "https://i.pinimg.com/originals/11/52/0c/11520cf1cc72ad1aab32fb3f26685619.jpg",
        description: "Try a different search term",
      },
    ]);
  }

  renderPokemons(filteredPokemons);
}

// Listen for input (Debounced!)
let debounceTimer;
inputEl.addEventListener("input", (e) => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    const currentInput = e.target.value.toLowerCase().trim();
    renderFilterPokemons(currentInput);
  }, 300);
});

// Add keyboard functionality
document.addEventListener("keyup", (event) => {
  if (event.key === "/") {
    inputEl.focus();
  }
});

// Inital Rendering
renderPokemons(shuffle(data));
