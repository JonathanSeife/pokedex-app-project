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
  //added a new function addListItem
  function addListItem(pokemon) {
    let listContainer = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    //created new button for the pokemon
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    //make each button the name of the pokemon
    button.classList.add("button-class");
    listItem.appendChild(button);
    listContainer.appendChild(listItem);
    // added event that shows pokemon detail
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
  };
})();

pokemonRepository.getAll().forEach((pokemon) => {
  pokemonRepository.addListItem(pokemon);
});
