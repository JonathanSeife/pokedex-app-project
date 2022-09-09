//wrapping array in IIFE
let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Bulbusuar", height: 0.7, types: ["grass", "poison"] },
    { name: "Rattata", height: 0.3, types: ["normal"] },
    { name: "Pikachu", height: 0.4, types: ["electric"] },
    { name: "Squirtle", height: 0.5, types: ["water"] },
    { name: "Jigglypuff", height: 0.5, types: ["fairy", "normal"] },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
  };
})();

function myLoopFunction(pokemon) {
  document.write(
    pokemon.name +
      " height: " +
      pokemon.height +
      " type: " +
      pokemon.types +
      "<br>"
  );
}

pokemonRepository.getAll().forEach(myLoopFunction);
