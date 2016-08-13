routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('pokemons', {
    url: '/',
    template: require('./pokemons.html'),
    resolve: {
      pokemons: ['PokemonsService', (PokemonsService) => {
        return PokemonsService.getPokemons()
      }]
    }
  });
}
