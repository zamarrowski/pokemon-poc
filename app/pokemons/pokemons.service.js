export default class PokemonsService {
  constructor($http) {
    this.$http = $http
  }

  getPokemons() {
    return this.$http.get('https://raw.githubusercontent.com/PokemonGOAPI/PokemonDataGraber/master/output.json')
  }

}
