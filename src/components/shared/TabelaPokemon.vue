<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nome</th>
        <th scope="col">Thumb</th>
        <th scope="col">Altura</th>
        <th scope="col">Peso</th>
      </tr>
    </thead>
    <tbody>
      <PokemonLinha :pokemon="pokemon" v-for="pokemon in paginacao" :key="pokemon.id" />
      <div class="btn-group" role="group" aria-label="Pokemons pagination">
        <button class="btn btn-success" :disabled="pagAtual==0" @click="voltarPagina">
          Anterior
        </button>
        <button class="btn btn-success" :disabled="pagAtual>=pokemons.length/10-1" @click="avancarPagina">
          Próximo
        </button>
      </div>      
    </tbody>    
  </table>
</template>

<script>
import PokemonLinha from "./PokemonLinha.vue";

export default {
  name: "TabelaPokemon",
  components: {
    PokemonLinha
  },
  props: {
    pokemons: Array,
    numPokemonsPorPagina: {
      type: Number,
      default: 10
    },
    pagAtual: {
      type: Number,
      default: 0
    }
  },
  methods: {
    avancarPagina() {
      if (this.pagAtual * 10 <= this.pokemons.length) this.pagAtual++;
      else this.avancar = false;
    },
    voltarPagina() {
      this.pagAtual--;
    }
  },
  computed: {
    contarPaginas() {
      let l = this.pokemons.length,
        s = this.numPokemonsPorPagina;
      return Math.floor(l / s);
    },
    paginacao() {
      const inicio = this.pagAtual * this.numPokemonsPorPagina,
        fim = inicio + this.numPokemonsPorPagina;
      return this.pokemons.slice(inicio, fim);
    }
  }
};
</script>
