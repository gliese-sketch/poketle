import data from "./data.json";
import PokemonCard from "./components/PokemonCard";

// === DOM Selection
const inputEl = document.querySelector("input");
const pokemonRow = document.querySelector("[data-pokemon-row]");

// === Render
function renderPokemons(list) {
  // Empty the previous content
  pokemonRow.innerHTML = "";

  for (let obj of list) {
    const { name, image, description, link } = obj;
    const pokemon = PokemonCard(name, image, description, link);
    pokemonRow.appendChild(pokemon);
  }
}

renderPokemons(data);

// Filter Functionality
inputEl.addEventListener("input", (e) => {
  const currentInput = e.target.value.toLowerCase().trim();

  const filteredPokemons = data.filter((obj) =>
    obj.name.toLowerCase().includes(currentInput)
  );

  if (filteredPokemons.length === 0) {
    renderPokemons([
      {
        name: "Not Found",
        image:
          "https://i.pinimg.com/originals/11/52/0c/11520cf1cc72ad1aab32fb3f26685619.jpg",
        description: "Kuch aur type kariyo",
        link: "https://pokemon.com",
      },
    ]);

    return;
  }

  renderPokemons(filteredPokemons);

  // current input mein jo likha hai
  // vo kis kis pokemon ke name mein hai (filter that out)
  // renderPokemons(filtered pokemons)
});

// === Add keyboard functionality
document.addEventListener("keyup", (event) => {
  if (event.key === "/") {
    inputEl.focus();
  }
});
