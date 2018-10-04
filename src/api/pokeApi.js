import Pokemon from "../models/pokemon.js";

const api = class PokeApi {
  constructor() {
    this.url = "https://pokeapi.co/api/v2/pokemon";
  }

  async listarPorTipo(idTipo) {
    const urlTipo = `https://pokeapi.co/api/v2/type/${idTipo}/`;
    return new Promise(resolve => {
      fetch(urlTipo)
        .then(j => j.json())
        .then(t => {
          const promisesPkm = t.pokemon.map(p =>
            this.buscarPorUrl(p.pokemon.url)
          );
          Promise.all(promisesPkm).then(resultadoFinal => {
            resolve(resultadoFinal);
          });
        });
    });
  }

  async buscarPorUrl(urlPokemon) {
    return new Promise(resolve => {
      fetch(urlPokemon)
        .then(j => j.json())
        .then(p => {
          const pokemon = new Pokemon(p);
          resolve(pokemon);
        });
    });
  }

  async buscar(idPokemon) {
    let urlPokemon = `${this.url}/${idPokemon}/`;
    return this.buscarPorUrl(urlPokemon);
  }
};

export default api;
