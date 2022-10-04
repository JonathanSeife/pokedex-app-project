let pokemonRepository = (function () {
  let t = [],
    e = document.querySelector("#pokemon-search");
  function n() {
    return t;
  }
  function o(e) {
    "object" == typeof e && "detailsUrl" in e
      ? t.push(e)
      : console.log("pokemon is not correct");
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
            return " " + t.type.name;
          })),
          (t.abilities = e.abilities.map(function (t) {
            return " " + t.ability.name;
          }));
      })
      .catch(function (t) {
        console.error(t);
      });
  }
  function a(t) {
    i(t).then(function () {
      var e;
      let n, o, i, a, l, r, s, p;
      (e = t),
        (n = $(".modal-body")),
        (o = $(".modal-title")),
        $(".modal-header"),
        o.empty(),
        n.empty(),
        (i = $("<h2>" + e.name[0].toUpperCase() + e.name.slice(1) + "</h2>")),
        (a = $('<img class="modal-img">')),
        a.attr("src", e.imageUrlFront),
        (l = $('<img class="modal-img">')),
        l.attr("src", e.imageUrlBack),
        (r = $("<p>Height: " + e.height + "</p>")),
        (s = $("<p>Types: " + e.types + "</p>")),
        (p = $("<p>Abilities: " + e.abilities + "</p>")),
        o.append(i),
        n.append(a),
        n.append(l),
        n.append(r),
        n.append(s),
        n.append(p);
    });
  }
  return (
    e.addEventListener("input", function () {
      let t = document.querySelectorAll(".pokemonButton"),
        n = e.value.toUpperCase();
      t.forEach(function (t) {
        t.innerText.toUpperCase().indexOf(n) > -1
          ? (t.style.display = "list-item")
          : (t.style.display = "none");
      });
    }),
    {
      getAll: n,
      add: o,
      addListItem: function t(e) {
        let n = document.querySelector(".pokemon-list"),
          o = document.createElement("li"),
          i = document.createElement("button");
        i.classList.add("pokemonButton"),
          (i.innerText = e.name[0].toUpperCase() + e.name.slice(1)),
          i.classList.add("button-class"),
          i.setAttribute("data-toggle", "modal"),
          i.setAttribute("data-target", "#pokemon-modal"),
          i.classList.add("btn"),
          $(i).addClass("button-class btn-block btn"),
          o.appendChild(i),
          n.appendChild(o),
          i.addEventListener("click", function () {
            a(e);
          });
      },
      loadList: function t() {
        return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
          .then(function (t) {
            return t.json();
          })
          .then(function (t) {
            t.results.forEach(function (t) {
              o({ name: t.name, detailsUrl: t.url });
            });
          })
          .catch(function (t) {
            console.error(t);
          });
      },
      loadDetails: i,
      showDetails: a,
    }
  );
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
