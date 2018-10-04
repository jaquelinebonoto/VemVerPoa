<template>
  <tr>
    <td>{{ pokemon.id }}</td>
    <td>{{ pokemon.nome }}</td>
    <td>
      <img :src="pokemon.thumbUrl" :alt="pokemon.nome">
    </td>
    <td>{{ pokemon.altura }} cm</td>
    <td>{{ pokemon.peso }} kg</td>
  </tr>
</template>

<script>
import Pokemon from "../../models/pokemon.js";

export default {
  name: "PokemonLinha",
  props: {
    pokemon: Pokemon
  }
};
</script>
