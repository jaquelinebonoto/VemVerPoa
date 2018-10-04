<template>
  <section>
    <h1>Bem vindo, {{ usuario }}!</h1>
    <select v-model="opcao">
      <option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">{{ tipo.nome }}</option>
    </select>
    <TabelaPokemon v-show="pokemons.length>0" :pokemons="pokemons" :pagAtual="0"/>
  </section>
</template>

<script>
import PokeApi from "../../api/pokeApi.js";
import TabelaPokemon from "../shared/TabelaPokemon.vue";

export default {
  name: "Home",
  components: { TabelaPokemon },
  data: () => {
    return {
      usuario: "",
      pokemons: [],
      tipos: [
        { id: 1, nome: "Normal" },
        { id: 2, nome: "Lutador" },
        { id: 3, nome: "Voador" }
      ]
    };
  },
  created() {
    this.usuario = this.$route.params.usuario._value.split("@")[0];
  },
  computed: {
    opcao: {
      get() {
        return null;
      },
      async set(opcao) {
        const pokeApi = new PokeApi();
        this.pokemons = await pokeApi.listarPorTipo(opcao);
      }
    }
  }
};
</script>
