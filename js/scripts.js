let pokemonList = [
    { name: 'Bulbusuar', height: 0.7, types: ['grass', 'poison']},
    { name: 'Rattata', height: 0.3, types: ['normal']},
    { name: 'Pikachu', height: 0.4, types: ['electric']},
    { name: 'Squirtle', height: 0.5, types: ['water']},
    { name: 'Jigglypuff', height: 0.5, types: ['fairy', 'normal']}
];

let poke0 = pokemonList[3]

document.write(`${poke0.name} is ${poke0.height} meters tall and it's type is ${poke0.types} .`);