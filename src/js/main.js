import { shuffle } from "fast-shuffle";

import data from "./data.json";
import PokemonCard from "./components/PokemonCard";

// === DOM Selection
const inputEl = document.querySelector("input");
const pokemonRow = document.querySelector("[data-pokemon-row]");

// === Render
function renderPokemons(list) {
  // Empty the previous content
  pokemonRow.innerHTML = "";

  list.forEach((pokemonObj) => {
    const { name, image, description, link } = pokemonObj;
    const pokemon = PokemonCard(name, image, description, link);
    pokemonRow.appendChild(pokemon);
  });
}
// git commit -m "short message" -m "Long message"

// Filtering
inputEl.addEventListener("input", (e) => {
  const currentInput = e.target.value.toLowerCase().trim();

  const filteredPokemons = data.filter((obj) =>
    obj.name.toLowerCase().includes(currentInput)
  );

  // Fallback Pokemon Card
  if (!filteredPokemons.length) {
    renderPokemons([
      {
        name: "Not Found",
        image:
          "https://i.pinimg.com/originals/11/52/0c/11520cf1cc72ad1aab32fb3f26685619.jpg",
        description: "Try a different search term",
        link: "https://pokemon.com",
      },
    ]);

    return;
  }

  renderPokemons(filteredPokemons);
});

// Add keyboard functionality
document.addEventListener("keyup", (event) => {
  if (event.key === "/") {
    inputEl.focus();
  }
});

// Inital Rendering
renderPokemons(shuffle(data));
