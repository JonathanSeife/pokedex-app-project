//array of pokemon
let pokemonList = [
  { name: "Bulbusuar", height: 0.7, types: ["grass", "poison"] },
  { name: "Rattata", height: 0.3, types: ["normal"] },
  { name: "Pikachu", height: 0.4, types: ["electric"] },
  { name: "Squirtle", height: 0.5, types: ["water"] },
  { name: "Jigglypuff", height: 0.5, types: ["fairy", "normal"] },
];

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

pokemonList.forEach(myLoopFunction);
