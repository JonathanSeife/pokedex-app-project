let pokemonList = [
    { name: 'Bulbusuar', height: 0.7, types: ['grass', 'poison']},
    { name: 'Rattata', height: 0.3, types: ['normal']},
    { name: 'Pikachu', height: 0.4, types: ['electric']},
    { name: 'Squirtle', height: 0.5, types: ['water']},
    { name: 'Jigglypuff', height: 0.5, types: ['fairy', 'normal']}
];

for ( let i = 0; i < pokemonList.length; i++ ) {
    if (pokemonList [i].height > 0.6) {
        document.write(pokemonList[i].name + ' height: ' + pokemonList[i].height + ' Wow, that\'s a big pokemon' + '<br>');
        // if height of pokemon is equal to or greater than the height 0.6, label pokemon as Wow, that's big
    }else if (pokemonList[i].height <=0.6 && pokemonList[i].height >=0.4) {
        document.write(pokemonList[i].name + ' height: ' + pokemonList[i].height + '  that\'s a normal size pokemon' + '<br>');
        // if height of pokemon is equal to or less than 0.6 and equal to or greater than 0.4, label pokemon as that's a normal size
    }else {
        document.write(pokemonList[i].name + ' height: ' + pokemonList[i].height + ' that\'s a small pokemon' + '<br>');
            // if height of pokemon does not fall into either of the two above categories, label pokemon as small
    }
}