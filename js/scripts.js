let pokemonList = [
    { name: 'Bulbusuar', height: 0.7, types: ['grass', 'poison']},
    { name: 'Rattata', height: 0.3, types: ['normal']},
    { name: 'Pikachu', height: 0.4, types: ['electric']},
    { name: 'Squirtle', height: 0.5, types: ['water']},
    { name: 'Jigglypuff', height: 0.5, types: ['fairy', 'normal']}
];

let pokeSquirtle = pokemonList[3]

document.write(`${pokeSquirtle.name} is ${pokeSquirtle.height} meters tall and it's type is ${pokeSquirtle.types} .`);