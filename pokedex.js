// Fetch all Pokémon types from the PokéAPI
fetch("https://pokeapi.co/api/v2/type/")
  .then(response => response.json()) // Parse the JSON data
  .then(data => {
    // 'data.results' is an array of type objects
    data.results.forEach(type => {
      console.log(type.name);
    });
  })
  .catch(error => console.error("Error fetching data:", error));