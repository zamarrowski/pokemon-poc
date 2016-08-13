import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './app.routes'
import pokemons from './pokemons'

angular.module('pokemonPoc', [uirouter, pokemons])
  .config(routes)
