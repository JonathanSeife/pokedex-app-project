let pokemonRepository = (function () {
  let t = [];
  function e() {
    return t;
  }
  function n(e) {
    'object' == typeof e && 'detailsUrl' in e
      ? t.push(e)
      : console.log('pokemon is not correct');
  }
  function i(t) {
    return fetch(t.detailsUrl)
      .then(function (t) {
        return t.json();
      })
      .then(function (e) {
        (t.imageUrlFront = e.sprites.front_default),
          (t.imageUrlBack = e.sprites.back_default),
          (t.height = e.height),
          (t.types = e.types.map(function (t) {
            return ' ' + t.type.name;
          })),
          (t.abilities = e.abilities.map(function (t) {
            return ' ' + t.ability.name;
          }));
      })
      .catch(function (t) {
        console.error(t);
      });
  }
  function o(t) {
    i(t).then(function () {
      var e;
      let n, i, o, a, r, l, p, s;
      (e = t),
        (n = $('.modal-body')),
        (i = $('.modal-title')),
        $('.modal-header'),
        i.empty(),
        n.empty(),
        (o = $('<h2>' + e.name[0].toUpperCase() + e.name.slice(1) + '</h2>')),
        (a = $('<img class="modal-img">')),
        a.attr('src', e.imageUrlFront),
        (r = $('<img class="modal-img">')),
        r.attr('src', e.imageUrlBack),
        (l = $('<p>Height: ' + e.height + '</p>')),
        (p = $('<p>Types: ' + e.types + '</p>')),
        (s = $('<p>Abilities: ' + e.abilities + '</p>')),
        i.append(o),
        n.append(a),
        n.append(r),
        n.append(l),
        n.append(p),
        n.append(s);
    });
  }
  return {
    getAll: e,
    add: n,
    addListItem: function t(e) {
      let n = document.querySelector('.pokemon-list'),
        i = document.createElement('li'),
        a = document.createElement('button');
      (a.innerText = e.name[0].toUpperCase() + e.name.slice(1)),
        a.classList.add('button-class'),
        a.setAttribute('data-toggle', 'modal'),
        a.setAttribute('data-target', '#pokemon-modal'),
        a.classList.add('btn'),
        i.appendChild(a),
        n.appendChild(i),
        a.addEventListener('click', function () {
          o(e);
        });
    },
    loadList: function t() {
      return fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          t.results.forEach(function (t) {
            n({ name: t.name, detailsUrl: t.url });
          });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    loadDetails: i,
    showDetails: o,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
