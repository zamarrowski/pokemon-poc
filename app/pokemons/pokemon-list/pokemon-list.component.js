function pokemonListCtrl() {
  console.log(this);
}

module.exports = {
  template: require('./pokemon-list.html'),
  controller: pokemonListCtrl,
  bindings: {
    pokemons: '='
  }
}
