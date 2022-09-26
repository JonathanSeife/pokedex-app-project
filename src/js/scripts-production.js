//wrapping array in IIFE
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' && 'detailsUrl' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

  //added a new function addListItem
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    //created new button for the pokemon
    let button = document.createElement('button');
    //make each button the name of the pokemon
    button.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    button.classList.add('button-class');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemon-modal');
    button.classList.add('btn');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrlFront = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        item.types = details.types.map(function (pokemon) {
          return ' ' + pokemon.type.name;
        });
        item.abilities = details.abilities.map(function (pokemon) {
          return ' ' + pokemon.ability.name;
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $(
      '<h2>' + pokemon.name[0].toUpperCase() + pokemon.name.slice(1) + '</h2>'
    );
    let imageElementFront = $('<img class="modal-img">');
    imageElementFront.attr('src', pokemon.imageUrlFront);
    let imageElementBack = $('<img class="modal-img">');
    imageElementBack.attr('src', pokemon.imageUrlBack);
    let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');
    let typesElement = $('<p>' + 'Types: ' + pokemon.types + '</p>');
    let abilitiesElement = $(
      '<p>' + 'Abilities: ' + pokemon.abilities + '</p>'
    );

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
