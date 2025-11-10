const API_URL = "https://pokeapi.co/api/v2/pokemon";
const API_URL_TYPES = "https://pokeapi.co/api/v2/type/"
const root = document.getElementById("root");
const form = document.getElementById("pokedexSearch");
const typeSelect = document.getElementById("pokemonType");

window.onload = (event) => {
    fetch(API_URL_TYPES)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(type => {
                const option = document.createElement("option");
                option.value = type.name;
                option.textContent = type.name;
                typeSelect.appendChild(option);
            })
        })
        .catch(error => console.error("Error fetcing types:", error));
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

event.preventDefault();
    const pokemonName = document.getElementById("pokemonName").value;
    fetch(`${API_URL}/${pokemonName}`)
      .then((response) => response.json())
      .then((newPokemon) => {
        // create elements for the Pokemon
        const div = document.createElement("div");
        const name = document.createElement("h1");
        const image = document.createElement("img");
        const type = document.createElement("h2");
        
        image.src = newPokemon.sprites.other.dream_world.front_default;
        name.textContent = newPokemon.name;
        type.textContent = newPokemon.types.map(t => t.type.name).join(", ");

        div.appendChild(name);
        div.appendChild(image);
        div.appendChild(type);
        root.insertBefore(div, root.firstChild);
    });
});
// Fetch all Pokémon types from the PokéAPI
// fetch("https://pokeapi.co/api/v2/type/")
 // .then(response => response.json())
 // .then(data => {
 //   data.results.forEach(type => {
  //    console.log(type.name);
  //  });
 // })
//  .catch(error => console.error("Error fetching data:", error));